/**
 * In-memory rate limit skeleton (PRD 12.2 defaults).
 * Mock-mode boundary: production must replace this with the Upstash atomic
 * limiter (TECH_STACK 7.4) before any public traffic. Fail-closed on errors.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

const hits = new Map<string, number[]>();

export function checkSessionRateLimit(
  sessionId: string,
  now = Date.now(),
): { allowed: boolean; retryAfterSeconds: number } {
  const previous = hits.get(sessionId) ?? [];
  const recent = previous.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    const oldest = Math.min(...recent);
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((WINDOW_MS - (now - oldest)) / 1000),
    };
  }
  recent.push(now);
  hits.set(sessionId, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}
