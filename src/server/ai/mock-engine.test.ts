import { describe, expect, it } from "vitest";
import type { CheckInput } from "@/shared/contracts/check";
import { basicResultSchema } from "@/shared/contracts/check";
import { analyzeBasicMock } from "./mock-engine";

const base: CheckInput = {
  draft_message: "I want to tell her I felt hurt today.",
  goal_code: "express_feeling",
  goal_detail: undefined,
  recipient_type: "partner",
  can_accept_no_reply: "yes",
  emotion_intensity: 3,
  time_since_trigger: "1_to_24h",
  optional_context: undefined,
  age_confirmed: true,
};

describe("analyzeBasicMock", () => {
  it("returns GOAL_ALIGNED for a neutral draft", () => {
    const r = analyzeBasicMock(base);
    expect(r.assessment).toBe("GOAL_ALIGNED");
  });

  it("returns GOAL_MISALIGNED when draft contains a negative marker", () => {
    const r = analyzeBasicMock({ ...base, draft_message: "You always do this to me and I am done being quiet." });
    expect(r.assessment).toBe("GOAL_MISALIGNED");
  });

  it("returns an excerpt that is an exact substring of the draft", () => {
    const draft = "You clearly do not care about any of this, so here it is.";
    const r = analyzeBasicMock({ ...base, draft_message: draft });
    expect(r.highest_risk_excerpt).not.toBeNull();
    expect(draft.includes(r.highest_risk_excerpt as string)).toBe(true);
  });

  it("returns null excerpt when no negative marker fires", () => {
    const r = analyzeBasicMock(base);
    expect(r.highest_risk_excerpt).toBeNull();
  });

  it("passes the basic result schema", () => {
    expect(basicResultSchema.safeParse(analyzeBasicMock(base)).success).toBe(true);
  });
});
