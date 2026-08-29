import { NextResponse } from "next/server";
import { checkInputSchema } from "@/shared/contracts/check";
import type { TypedApiError } from "@/shared/contracts/errors";
import { classifyInput } from "@/server/safety/pipeline";
import { analyzeBasicMock } from "@/server/ai/mock-engine";
import { scanBasicOutput } from "@/server/ai/output-scan";
import { checkSessionRateLimit } from "@/server/rate-limit/memory";
import { basicResultSchema } from "@/shared/contracts/check";

export const dynamic = "force-dynamic";

function makeRequestId(): string {
  return crypto.randomUUID();
}

function errorResponse(
  code: TypedApiError["code"],
  message: string,
  requestId: string,
  extra?: Partial<TypedApiError>,
  status = 400,
): NextResponse<TypedApiError> {
  return NextResponse.json(
    { code, message, request_id: requestId, ...extra },
    { status, headers: { "Cache-Control": "no-store, private" } },
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  const requestId = makeRequestId();

  // Origin check (PRD 12.1)
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return errorResponse(
      "InvalidRequestOriginError",
      "This request could not be completed.",
      requestId,
      undefined,
      403,
    );
  }

  // Anonymous session cookie (PRD 12.1): set if absent
  let sessionId = request.headers
    .get("cookie")
    ?.split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("bys_session="))
    ?.split("=")[1];
  const setSession = !sessionId;
  if (!sessionId) {
    sessionId = crypto.randomUUID();
  }

  // Rate limit (PRD 12.2)
  const rate = checkSessionRateLimit(sessionId);
  if (!rate.allowed) {
    return errorResponse(
      "RateLimitExceededError",
      "You have submitted several checks in a short time. Your draft is still in this tab. Please wait before trying again.",
      requestId,
      { retry_after_seconds: rate.retryAfterSeconds },
      429,
    );
  }

  // Body size guard before parsing (PRD 5.2)
  const raw = await request.text();
  if (raw.length > 32_000) {
    return errorResponse(
      "InvalidInputError",
      "This request is too large to process.",
      requestId,
      undefined,
      413,
    );
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(raw);
  } catch {
    return errorResponse(
      "InvalidInputError",
      "This request could not be read.",
      requestId,
    );
  }

  const parsed = checkInputSchema.safeParse(parsedJson);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return errorResponse(
      "InvalidInputError",
      "Some fields need attention before the check can run.",
      requestId,
      { field_errors: fieldErrors },
    );
  }

  const input = parsed.data;

  // Safety pipeline runs before any analysis (SAFETY.md 2)
  const verdict = await classifyInput({
    draftMessage: input.draft_message,
    goalDetail: input.goal_detail,
    optionalContext: input.optional_context,
  });

  if (verdict.route !== "L1") {
    // Fixed-copy routes are rendered client-side; the API only signals the route.
    return NextResponse.json(
      {
        outcome: "safety_stop",
        route: verdict.route,
        refusal_reason: verdict.refusalReason ?? null,
        request_id: requestId,
      },
      { headers: { "Cache-Control": "no-store, private" } },
    );
  }

  // Mock analysis (ADR-001 gate pending)
  const result = analyzeBasicMock(input);
  const validated = basicResultSchema.safeParse(result);
  if (!validated.success) {
    return errorResponse(
      "MalformedModelOutputError",
      "We couldn't complete the check. Your draft is still in this tab. Try again.",
      requestId,
      undefined,
      502,
    );
  }
  const violations = scanBasicOutput(validated.data);
  if (violations.length > 0) {
    return errorResponse(
      "UnsafeGeneratedOutputError",
      "We couldn't complete the check. Your draft is still in this tab. Try again.",
      requestId,
      undefined,
      502,
    );
  }

  const response = NextResponse.json(
    { outcome: "basic_result", result: validated.data, request_id: requestId },
    { headers: { "Cache-Control": "no-store, private" } },
  );
  if (setSession) {
    response.cookies.set("bys_session", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
  }
  return response;
}
