import type { SafetyVerdict } from "./types";

/**
 * Layer B boundary (SAFETY.md 5.2). Mock mode: no provider moderation call.
 * Returns an L1 vote so severity merging has a third layer to combine.
 * The real implementation calls the provider moderation endpoint with a
 * bounded timeout and maps its result to internal routes only.
 */
export async function runModerationMock(
  _texts: string[],
): Promise<SafetyVerdict> {
  return { route: "L1", ruleCodes: [], layers: ["moderation"] };
}
