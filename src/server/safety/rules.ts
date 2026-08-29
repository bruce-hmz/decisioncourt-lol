import { normalizeForMatching } from "@/shared/contracts/normalize";
import type { SafetyRoute, SafetyVerdict } from "./types";

interface LocalRule {
  code: string;
  route: SafetyVerdict["route"];
  patterns: RegExp[];
  refusalReason?: "professional_advice" | "minors" | "harmful_use";
}

/**
 * Layer A: local high-recall rules (SAFETY.md 5.1).
 * Patterns cover common obfuscation; matching runs on normalized text.
 * Rule codes are versioned; matched text is never logged or returned.
 */
const RULES: LocalRule[] = [
  {
    code: "SELF_HARM_INTENT_01",
    route: "L3",
    patterns: [
      /i (?:want|plan|am going|am ready|intend) to (?:kill|end) (?:my)? ?(?:own )?life/,
      /(?:going|about|planning|ready) to (?:kill|hurt) myself/,
      /end it all (?:tonight|today|now|soon)/,
      /(?:dont|don'?t|do not) want to (?:be here|live) anymore/,
      /(?:suicidw*|self[- ]?harmw*|cutting myself|overdose on)/,
      /h(?:u)?rt my ?self (?:tonight|today|now|on purpose)/,
      /k?ill myself/,
    ],
  },
  {
    code: "IMMEDIATE_DANGER_01",
    route: "L3",
    patterns: [
      /(?:he|she|they) (?:said he|said she|said they|will|is going to) (?:kill|hurt|shoot|stab) me/,
      /(?:will be|going to be) (?:killed|attacked|beaten) (?:tonight|today|soon)/,
      /i (?:will|am going to) (?:kill|hurt|shoot|stab) (?:him|her|them)/,
      /(?:bring|use) (?:a )?(?:gun|knife|weapon) (?:to|on) (?:him|her|them|work|school)/,
    ],
  },
  {
    code: "HIGH_RISK_DISTRESS_01",
    route: "L2",
    patterns: [
      /i(?:'m| am) (?:stuck|trapped|can'?t escape|being controlled)/,
      /(?:he|she|they) controls? (?:all )?(?:my money|the money|my phone|who i)/,
      /(?:stalkw*|follows? me|shows? up at my)/,
      /i(?:'ve| have) (?:contacted|texted|called) (?:him|her|them) (?:again|anyway)/,
      /cant stop (?:contacting|texting|calling) (?:him|her|them)/,
      /(?:drinking|drinking alcohol|using drugs|drugs) (?:every day|to cope|again)/,
    ],
  },
  {
    code: "REFUSE_PROFESSIONAL_01",
    route: "REFUSE",
    refusalReason: "professional_advice",
    patterns: [
      /(?:which|what) (?:medication|medicine|dose|dosage|drug)s? (?:should|to) (?:i|take)/,
      /(?:sue|suing|lawsuit|court case|legal action|press charges)/,
      /(?:invest|investing|stocks|crypto|buy or sell) (?:my savings|this stock|bitcoin)/,
    ],
  },
  {
    code: "REFUSE_MINORS_01",
    route: "REFUSE",
    refusalReason: "minors",
    patterns: [
      /(?:my student|a student of mine|the kid|my daughter|my son|a minor) (?:age d{1,2}|d{1,2} years? old|who is d{1,2})/,
      /(d{1,2})[- ]?year[- ]?old (?:daughter|son|student|girl|boy|niece|nephew)/,
    ],
  },
  {
    code: "REFUSE_HARMFUL_01",
    route: "REFUSE",
    refusalReason: "harmful_use",
    patterns: [
      /(?:threaten|threatening) (?:him|her|them|to)/,
      /(?:blackmail|extort|extortion|leak (?:the |his |her |their )?(?:photos|nudes|screenshots))/,
      /make (?:him|her|them) (?:pay|regret|suffer)/,
      /(?:scam|fraud|phishw*) (?:message|text|email)/,
    ],
  },
];

export function runLocalRules(
  texts: string[],
): SafetyVerdict | null {
  const normalized = texts.map((t) => normalizeForMatching(t));
  let worst: SafetyVerdict | null = null;
  for (const rule of RULES) {
    for (const text of normalized) {
      if (rule.patterns.some((p) => p.test(text))) {
        const verdict: SafetyVerdict = {
          route: rule.route,
          ruleCodes: [rule.code],
          layers: ["local"],
          refusalReason: rule.refusalReason,
        };
        if (!worst || severity(verdict.route) > severity(worst.route)) {
          worst = verdict;
        }
        break;
      }
    }
  }
  return worst;
}

export function severity(route: SafetyRoute | SafetyVerdict["route"]): number {
  switch (route) {
    case "SAFETY_UNAVAILABLE":
      return 4;
    case "L3":
      return 3;
    case "L2":
      return 2;
    case "REFUSE":
      return 1.5;
    case "UNSUPPORTED_LANGUAGE":
      return 1;
    case "L1":
      return 0;
  }
}
