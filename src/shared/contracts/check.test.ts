import { describe, expect, it } from "vitest";
import { checkInputSchema } from "./check";

const base = {
  draft_message: "I want to tell her I am upset.",
  goal_detail: undefined,
  goal_code: "express_feeling" as const,
  recipient_type: "partner" as const,
  can_accept_no_reply: "yes" as const,
  emotion_intensity: 3,
  time_since_trigger: "1_to_24h" as const,
  optional_context: "",
  age_confirmed: true,
};

describe("checkInputSchema", () => {
  it("accepts a valid payload", () => {
    const r = checkInputSchema.safeParse(base);
    expect(r.success).toBe(true);
  });

  it("rejects draft over 5000", () => {
    const r = checkInputSchema.safeParse({
      ...base,
      draft_message: "a".repeat(5001),
    });
    expect(r.success).toBe(false);
  });

  it("rejects age_confirmed false", () => {
    const r = checkInputSchema.safeParse({ ...base, age_confirmed: false });
    expect(r.success).toBe(false);
  });

  it("requires goal_detail when goal_code is other", () => {
    const r = checkInputSchema.safeParse({
      ...base,
      goal_code: "other",
      goal_detail: "to be heard",
    });
    expect(r.success).toBe(true);
    const bad = checkInputSchema.safeParse({ ...base, goal_code: "other", goal_detail: "" });
    expect(bad.success).toBe(false);
  });
});
