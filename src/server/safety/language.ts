import { normalizeForMatching } from "@/shared/contracts/normalize";

const ENGLISH_STOPWORDS = [
  "the","and","you","your","i","me","my","we","is","are","was","to","of","it",
  "that","this","with","for","have","not","but","they","he","she","what","when",
  "just","like","know","want","need","time","about","would","could","should",
];

/**
 * MVP English-only gate (PRD 6.3 language derived, SAFETY.md 4).
 * Heuristic for the mock pipeline: sufficient English stopword density => OK.
 * Real classifier layer will replace/augment this before production.
 */
export function isEnglish(text: string): boolean {
  const normalized = normalizeForMatching(text);
  const words = normalized.split(/[^a-z']+/).filter(Boolean);
  if (words.length === 0) return false;
  const hits = words.filter((w) => ENGLISH_STOPWORDS.includes(w)).length;
  return hits >= Math.max(2, Math.floor(words.length * 0.08));
}
