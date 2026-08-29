import { isEnglish } from "./language";
import { runLocalRules, severity } from "./rules";
import { runModerationMock } from "./moderation";
import { runClassifierMock } from "./classifier";
import type { SafetyVerdict } from "./types";

export interface SafetyInput {
  draftMessage: string;
  goalDetail?: string | undefined;
  optionalContext?: string | undefined;
}

/**
 * Safety pipeline (SAFETY.md 5): local rules first; highest severity wins;
 * local critical matches are never downgraded by later layers.
 */
export async function classifyInput(input: SafetyInput): Promise<SafetyVerdict> {
  const texts = [
    input.draftMessage,
    input.goalDetail ?? "",
    input.optionalContext ?? "",
  ].filter((t) => t.trim().length > 0);

  const local = runLocalRules(texts);
  if (local && severity(local.route) >= severity("L2")) {
    return local;
  }

  const [moderation, classifier] = await Promise.all([
    runModerationMock(texts),
    runClassifierMock(texts),
  ]);

  if (!isEnglish(texts.join(" "))) {
    const language: SafetyVerdict = {
      route: "UNSUPPORTED_LANGUAGE",
      ruleCodes: [],
      layers: ["classifier"],
    };
    return maxSeverity(local, language, moderation, classifier);
  }

  return maxSeverity(local, moderation, classifier, {
    route: "L1",
    ruleCodes: [],
    layers: [],
  });
}

function maxSeverity(
  ...verdicts: Array<SafetyVerdict | null>
): SafetyVerdict {
  const present = verdicts.filter((v): v is SafetyVerdict => v !== null);
  const worst = present.reduce((a, b) => (severity(b.route) > severity(a.route) ? b : a));
  return {
    route: worst.route,
    ruleCodes: present.flatMap((v) => v.ruleCodes),
    layers: present.flatMap((v) => v.layers),
    refusalReason: worst.refusalReason,
  };
}
