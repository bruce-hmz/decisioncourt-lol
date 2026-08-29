export type SafetyRoute =
  | "L1"
  | "L2"
  | "L3"
  | "REFUSE"
  | "UNSUPPORTED_LANGUAGE"
  | "SAFETY_UNAVAILABLE";

export interface SafetyVerdict {
  route: SafetyRoute;
  /** Versioned rule codes only. Never matched text. */
  ruleCodes: string[];
  layers: Array<"local" | "moderation" | "classifier">;
  refusalReason?: "professional_advice" | "minors" | "harmful_use";
}
