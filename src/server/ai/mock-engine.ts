import { normalizeForMatching } from "@/shared/contracts/normalize";
import type { BasicResult, CheckInput } from "@/shared/contracts/check";

const GOAL_LABELS: Record<CheckInput["goal_code"], string> = {
  clarify: "clarify something important to you",
  repair: "repair the relationship without restarting the argument",
  set_boundary: "set a boundary and keep it",
  apologize: "apologize in a way that lands",
  ask_for_reply: "get a reply",
  express_feeling: "be heard without escalating",
  end_contact: "end contact clearly",
  other: "reach the outcome you described",
};

const NEGATIVE_MARKERS = [
  "you always",
  "you never",
  "you clearly",
  "obviously you",
  "why do you even",
  "whatever",
  "fine.",
  "do whatever you want",
];

const URGENT_MARKERS = ["right now", "right away", "tonight", "immediately"];

/**
 * Deterministic dry-run engine (ADR-001 pending). Produces a schema-valid
 * BasicResult from the user's own goal declaration and draft markers.
 * No network provider is called in this mode.
 */
export function analyzeBasicMock(input: CheckInput): BasicResult {
  const draft = normalizeForMatching(input.draft_message);
  const hit = NEGATIVE_MARKERS.find((m) => draft.includes(m));
  const urgent = URGENT_MARKERS.some((m) => draft.includes(m));

  const assessment = hit || urgent ? "GOAL_MISALIGNED" : "GOAL_ALIGNED";

  const summary = hit
    ? "Some wording in this draft may work against your stated goal. The pattern below is a common escalation trigger."
    : urgent
      ? "The draft asks for a response on a short clock, which may work against your stated goal."
      : "No obvious conflict between the draft and your stated goal surfaced in this check.";

  const excerpt = findExactExcerpt(input.draft_message, hit);

  return {
    assessment,
    summary,
    hidden_assumption: hit
      ? "You may be assuming the wording states a fact, when it could be read as a conclusion about their motives."
      : "You may be assuming the message will be read in the same tone you hear in your head.",
    highest_risk_excerpt: excerpt,
    possible_interpretations: hit
      ? [
          "One plausible reading is that this assigns blame before describing what happened.",
          "They could read the phrasing as a closing statement rather than an opening for dialogue.",
        ]
      : [
          "One plausible reading is that you want clarity more than agreement.",
          "They may read the message as an invitation to respond when they are ready.",
        ],
    case_for_sending: hit
      ? "The frustration is real, and naming it directly can feel honest. If the relationship has room for direct language, this draft does not hide your position."
      : "The draft states what you want in plain language, and waiting does not add information you do not already have.",
    case_for_pausing: hit
      ? "Sending while the draft still contains an accusation may close the conversation before it starts. A pause lets you describe the event instead of the motive."
      : "A short pause would let you reread the goal and confirm the timing still feels right to you.",
    decision_changers: [
      hit
        ? "If you describe the specific event instead of their character, does the rest of the draft still say what you want?"
        : "If the recipient is unlikely to reply within the time window you care about, would you still send this today?",
      "If you knew the recipient would read this once and not reply at all, would the wording still be the one you choose?",
    ],
    policy_flags: [],
  };
}

function findExactExcerpt(draft: string, marker?: string): string | null {
  if (!marker) return null;
  const idx = normalizeForMatching(draft).indexOf(marker);
  if (idx < 0) return null;
  const start = Math.max(0, idx - 20);
  const end = Math.min(draft.length, idx + marker.length + 40);
  const slice = draft.slice(start, end).trim();
  // excerpt must be an exact substring of the draft (PRD 8.5)
  return draft.includes(slice) ? slice : null;
}

export interface DeepResultMock {
  line_reviews: Array<{ excerpt: string; note: string }>;
  pre_mortem: string[];
  counterargument_to_basic: string;
  rewrites: Array<{ label: string; draft: string; what_changed: string }>;
}

export function analyzeDeepMock(input: CheckInput): DeepResultMock {
  const basic = analyzeBasicMock(input);
  const draft = input.draft_message.trim();
  return {
    line_reviews: [
      {
        excerpt: draft.slice(0, Math.min(80, draft.length)),
        note: "Opening line sets the frame for how the rest could be read.",
      },
      {
        excerpt:
          basic.highest_risk_excerpt ??
          draft.slice(Math.max(0, draft.length - 80)),
        note: "This line carries the most interpretation risk against your stated goal.",
      },
    ],
    pre_mortem: [
      "The recipient reads the strongest line first and responds to that, not to your goal.",
      "The timing turns a wording question into a timing question.",
    ],
    counterargument_to_basic:
      "The basic check weights wording patterns over relationship context you have but the tool does not.",
    rewrites: [
      {
        label: "Draft A - clearer and shorter",
        draft:
          "I have been thinking about what happened, and I want to describe it from my side without assigning motives. Is now a workable time to talk?",
        what_changed:
          "Removed conclusion language about their motives; added a direct, answerable question.",
      },
      {
        label: "Draft B - firmer boundary",
        draft:
          "I want to be straightforward: the way that exchange ended did not work for me, and I would like to set a clearer expectation going forward.",
        what_changed:
          "States the boundary once, without restating the grievance or predicting their response.",
      },
    ],
  };
}
