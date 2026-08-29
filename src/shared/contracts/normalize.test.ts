import { describe, expect, it } from "vitest";
import { normalizeForMatching, trimBlankToEmpty } from "./normalize";

describe("normalizeForMatching", () => {
  it("lowercases", () => {
    expect(normalizeForMatching("HELLO")).toBe("hello");
  });

  it("removes invisible characters", () => {
    expect(normalizeForMatching("h\u200bello")).toBe("hello");
  });

  it("collapses NFKC", () => {
    expect(normalizeForMatching("\uFB01")).toBe("fi");
  });
});

describe("trimBlankToEmpty", () => {
  it("trims whitespace to empty string", () => {
    expect(trimBlankToEmpty("   ")).toBe("");
  });

  it("keeps content", () => {
    expect(trimBlankToEmpty(" hi ")).toBe("hi");
  });
});
