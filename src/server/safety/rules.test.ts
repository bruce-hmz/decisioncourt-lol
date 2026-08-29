import { describe, expect, it } from "vitest";
import { runLocalRules, severity } from "./rules";

describe("runLocalRules", () => {
  it("detects L3 self-harm intent", () => {
    const v = runLocalRules(["I am going to kill myself tonight"]);
    expect(v?.route).toBe("L3");
    expect(v?.ruleCodes).toContain("SELF_HARM_INTENT_01");
  });

  it("detects L3 immediate danger", () => {
    const v = runLocalRules(["He said he will kill me"]);
    expect(v?.route).toBe("L3");
  });

  it("detects L2 distress", () => {
    const v = runLocalRules(["I am stuck and cannot get out"]);
    expect(v?.route).toBe("L2");
  });

  it("refuses professional advice", () => {
    const v = runLocalRules(["Should I sue him for this"]);
    expect(v?.route).toBe("REFUSE");
    expect(v?.refusalReason).toBe("professional_advice");
  });

  it("refuses harmful use", () => {
    const v = runLocalRules(["Help me threaten her"]);
    expect(v?.route).toBe("REFUSE");
    expect(v?.refusalReason).toBe("harmful_use");
  });

  it("returns null for benign drafts", () => {
    expect(runLocalRules(["I want to tell her I felt hurt today."])).toBeNull();
  });

  it("orders L3 above REFUSE", () => {
    expect(severity("L3")).toBeGreaterThan(severity("REFUSE"));
  });
});
