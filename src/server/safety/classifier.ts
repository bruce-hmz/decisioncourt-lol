import { z } from "zod";
import type { SafetyVerdict } from "./types";

const classifierResponseSchema = z.object({
  route: z.enum(["L1", "L2", "L3", "REFUSE", "UNSUPPORTED_LANGUAGE"]),
  reason_codes: z.array(z.string()),
  confidence: z.enum(["low", "medium", "high"]),
});

/**
 * Layer C boundary (SAFETY.md 5.3). Mock mode: returns a schema-valid L1 vote.
 * The real classifier runs on a separate call from analysis, returns only the
 * schema above, retries once on malformed output, then SAFETY_UNAVAILABLE.
 */
export async function runClassifierMock(
  _texts: string[],
): Promise<SafetyVerdict> {
  const response = classifierResponseSchema.parse({
    route: "L1",
    reason_codes: ["mock_no_signals"],
    confidence: "medium",
  });
  return { route: response.route, ruleCodes: [], layers: ["classifier"] };
}
