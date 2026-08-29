export const GOAL_CODES = [
  "clarify",
  "repair",
  "set_boundary",
  "apologize",
  "ask_for_reply",
  "express_feeling",
  "end_contact",
  "other",
] as const;
export type GoalCode = (typeof GOAL_CODES)[number];

export const RECIPIENT_TYPES = [
  "ex",
  "partner",
  "friend_family",
  "coworker",
  "manager",
  "other",
] as const;
export type RecipientType = (typeof RECIPIENT_TYPES)[number];

export const NO_REPLY_OPTIONS = ["yes", "no", "unsure"] as const;
export type NoReplyOption = (typeof NO_REPLY_OPTIONS)[number];

export const TIME_SINCE_TRIGGERS = [
  "under_10m",
  "10_to_60m",
  "1_to_24h",
  "1_to_7d",
  "over_7d",
] as const;
export type TimeSinceTrigger = (typeof TIME_SINCE_TRIGGERS)[number];

export const ASSESSMENTS = [
  "GOAL_ALIGNED",
  "GOAL_MISALIGNED",
  "CRITICAL_CONTEXT_MISSING",
] as const;
export type Assessment = (typeof ASSESSMENTS)[number];
