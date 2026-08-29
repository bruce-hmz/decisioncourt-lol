import { describe, expect, it } from "vitest";
import type { BasicResult } from "@/shared/contracts/check";
import { scanBasicOutput } from "./output-scan";

const base: BasicResult = {
  assessment: "GOAL_ALIGNED",
  summary: "No obvious conflict surfaced.",
  hidden_assumption: "You may be assuming the tone lands as intended.",
  highest_risk_excerpt: null,
  possible_interpretations: ["They could read it as an invitation."],
  case_for_sending: "The draft is plain.",
  case_for_pausing: "A short pause adds nothing new.",
  decision_changers: ["If they never reply, would you still send it?"],
  policy_flags: [],
};

describe("scanBasicOutput", () => {
  it("passes a compliant result", () => {
    expect(scanBasicOutput(base)).toEqual([]);
  });

  it("flags diagnosis labels", () => {
    const v = scanBasicOutput({ ...base, summary: "He sounds like a narcissist." });
    expect(v.some((x) => x.code === "DIAGNOSIS_LABEL")).toBe(true);
  });

  it("flags send/wait commands", () => {
    const v = scanBasicOutput({ ...base, summary: "You should send it now." });
    expect(v.some((x) => x.code === "COMMAND")).toBe(true);
  });

  it("flags deterministic predictions of the recipient", () => {
    const v = scanBasicOutput({ ...base, summary: "They will feel hurt." });
    expect(v.some((x) => x.code === "DETERMINISTIC_OTHER")).toBe(true);
  });
});
