import type { BasicResult } from "@/shared/contracts/check";
import type { SafetyRoute } from "@/server/safety/types";

export type CheckPhase =
  | { kind: "EMPTY" }
  | { kind: "EDITING" }
  | { kind: "ANALYZING" }
  | { kind: "BASIC_RESULT"; result: BasicResult; requestId: string }
  | { kind: "SAFETY_STOP"; route: SafetyRoute; refusalReason?: string; requestId: string }
  | { kind: "RECOVERABLE_ERROR"; message: string; requestId: string }
  | { kind: "COOLING_DOWN"; endsAt: number }
  | { kind: "CHECKOUT_PENDING" }
  | { kind: "PAYMENT_VERIFYING" }
  | { kind: "DEEP_RESULT"; deep: import("@/server/ai/mock-engine").DeepResultMock };
