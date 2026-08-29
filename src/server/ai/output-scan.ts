import type { BasicResult } from "@/shared/contracts/check";

const FORBIDDEN_PATTERNS: Array<{ code: string; pattern: RegExp }> = [
  { code: "DIAGNOSIS_LABEL", pattern: /\b(narcissist|psychopath|gaslighter|abuser|bipolar|borderline|depressed)\b/i },
  { code: "COMMAND", pattern: /\b(you should (?:send|wait|leave|report)|send it now|do not send this)\b/i },
  { code: "DETERMINISTIC_OTHER", pattern: /\b(they will (?:think|feel|react|respond)|the recipient will)\b/i },
  { code: "VERDICT", pattern: /\b(verdict|readiness score|approval rating)\b/i },
];

export interface ScanViolation {
  code: string;
}

export function scanBasicOutput(result: BasicResult): ScanViolation[] {
  const textFields = [
    result.summary,
    result.hidden_assumption,
    result.possible_interpretations.join(" "),
    result.case_for_sending,
    result.case_for_pausing,
    result.decision_changers.join(" "),
  ];
  const violations: ScanViolation[] = [];
  for (const field of textFields) {
    for (const { code, pattern } of FORBIDDEN_PATTERNS) {
      if (pattern.test(field)) violations.push({ code });
    }
  }
  return violations;
}
