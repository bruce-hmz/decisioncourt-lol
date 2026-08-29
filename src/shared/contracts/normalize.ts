/**
 * Unicode normalization used for matching and validation only.
 * The user's original draft text is never rewritten; these helpers produce
 * a derived form for length checks, safety matching, and language detection.
 */
export function normalizeForMatching(input: string): string {
  return input
    .normalize("NFKC")
    // remove invisible / formatting characters used for obfuscation
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/g, "")
    .toLowerCase();
}

export function trimBlankToEmpty(input: string): string {
  return input.trim();
}
