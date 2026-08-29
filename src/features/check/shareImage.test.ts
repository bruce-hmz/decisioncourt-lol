import { describe, expect, it } from "vitest";
import { buildShareCaption, buildShareVisualData, VERDICT_ACCENTS } from "./shareImage";
import type { BasicResult } from "@/shared/contracts/check";

const baseResult: BasicResult = {
  assessment: "GOAL_MISALIGNED",
  summary: "Some wording may work against your goal.",
  hidden_assumption: "They are still reading carefully.",
  highest_risk_excerpt: "You clearly don\u2019t care.",
  possible_interpretations: ["Blame", "Exhaustion", "A bid for distance"],
  case_for_sending: "The frustration is real.",
  case_for_pausing: "It may close the conversation.",
  decision_changers: ["They asked for honesty.", "72 hours have passed."],
  policy_flags: [],
};

describe("buildShareVisualData", () => {
  it("maps GOAL_MISALIGNED to the caught verdict with receipt chips", () => {
    const data = buildShareVisualData(baseResult);
    expect(data.verdict).toBe("caught");
    expect(data.stampText).toBe("CAUGHT BEFORE SEND");
    expect(data.chips).toEqual([
      "3 ways it could land",
      "1 line doing the damage",
      "2 things that would change it",
    ]);
  });

  it("maps GOAL_ALIGNED to the cleared verdict", () => {
    const data = buildShareVisualData({ ...baseResult, assessment: "GOAL_ALIGNED" });
    expect(data.verdict).toBe("cleared");
    expect(data.headline).toContain("Clean pass");
  });

  it("maps CRITICAL_CONTEXT_MISSING to the unclear verdict", () => {
    const data = buildShareVisualData({
      ...baseResult,
      assessment: "CRITICAL_CONTEXT_MISSING",
    });
    expect(data.verdict).toBe("unclear");
    expect(data.stampText).toBe("MISSING CONTEXT");
  });

  it("never includes draft text or excerpts in any shareable field", () => {
    const data = buildShareVisualData(baseResult);
    const allText = [data.headline, ...data.chips].join(" ");
    expect(allText).not.toContain("You clearly don\u2019t care");
    expect(allText).not.toContain(baseResult.hidden_assumption);
  });

  it("uses singular chip wording for counts of one", () => {
    const data = buildShareVisualData({
      ...baseResult,
      possible_interpretations: ["Blame"],
      decision_changers: ["Time."],
    });
    expect(data.chips).toContain("1 way it could land");
    expect(data.chips).toContain("1 thing that would change it");
  });
});

describe("buildShareCaption", () => {
  it("keeps the caption under the X limit and privacy-forward", () => {
    const caption = buildShareCaption("https://decisioncourt.lol/checked", "caught");
    expect(caption).toContain("I almost sent it.");
    expect(caption.length).toBeLessThan(280);
  });

  it("switches the hook for a cleared verdict", () => {
    const caption = buildShareCaption("https://decisioncourt.lol/checked", "cleared");
    expect(caption).toContain("I check before I send.");
  });
});

describe("VERDICT_ACCENTS", () => {
  it("gives each verdict a distinct accent color", () => {
    const accents = Object.values(VERDICT_ACCENTS);
    expect(new Set(accents).size).toBe(3);
  });
});
