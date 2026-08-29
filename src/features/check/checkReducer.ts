import type { CheckPhase } from "./types";

export type CheckAction =
  | { type: "EDITING" }
  | { type: "SUBMITTING" }
  | { type: "RESULT"; result: import("@/shared/contracts/check").BasicResult; requestId: string }
  | { type: "SAFETY_STOP"; route: import("@/server/safety/types").SafetyRoute; refusalReason?: string; requestId: string }
  | { type: "ERROR"; message: string; requestId: string }
  | { type: "EDIT_AND_RECHECK" }
  | { type: "START_COOLDOWN"; endsAt: number }
  | { type: "END_COOLDOWN" }
  | { type: "OPEN_CHECKOUT" }
  | { type: "PAYMENT_VERIFYING" }
  | { type: "DEEP_RESULT"; deep: import("@/server/ai/mock-engine").DeepResultMock }
  | { type: "CLEAR_ALL" };

export function checkReducer(_state: CheckPhase, action: CheckAction): CheckPhase {
  switch (action.type) {
    case "EDITING":
      return { kind: "EDITING" };
    case "SUBMITTING":
      return { kind: "ANALYZING" };
    case "RESULT":
      return { kind: "BASIC_RESULT", result: action.result, requestId: action.requestId };
    case "SAFETY_STOP":
      return {
        kind: "SAFETY_STOP",
        route: action.route,
        refusalReason: action.refusalReason,
        requestId: action.requestId,
      };
    case "ERROR":
      return { kind: "RECOVERABLE_ERROR", message: action.message, requestId: action.requestId };
    case "EDIT_AND_RECHECK":
      return { kind: "EDITING" };
    case "START_COOLDOWN":
      return { kind: "COOLING_DOWN", endsAt: action.endsAt };
    case "END_COOLDOWN":
      return { kind: "EDITING" };
    case "OPEN_CHECKOUT":
      return { kind: "CHECKOUT_PENDING" };
    case "PAYMENT_VERIFYING":
      return { kind: "PAYMENT_VERIFYING" };
    case "DEEP_RESULT":
      return { kind: "DEEP_RESULT", deep: action.deep };
    case "CLEAR_ALL":
      return { kind: "EMPTY" };
  }
}
