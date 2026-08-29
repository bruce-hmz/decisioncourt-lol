import { z } from "zod";
import {
  ASSESSMENTS,
  GOAL_CODES,
  NO_REPLY_OPTIONS,
  RECIPIENT_TYPES,
  TIME_SINCE_TRIGGERS,
} from "./enums";

export const DRAFT_MAX = 5000;
export const CONTEXT_MAX = 3000;
export const GOAL_DETAIL_MIN = 5;
export const GOAL_DETAIL_MAX = 240;

export const checkInputSchema = z
  .object({
    draft_message: z
      .string()
      .min(1, "Enter the message you have not sent.")
      .max(DRAFT_MAX, "Message must be 5,000 characters or fewer."),
    goal_code: z.enum(GOAL_CODES),
    goal_detail: z
      .string()
      .max(GOAL_DETAIL_MAX, "Goal detail must be 240 characters or fewer.")
      .optional(),
    recipient_type: z.enum(RECIPIENT_TYPES),
    can_accept_no_reply: z.enum(NO_REPLY_OPTIONS),
    emotion_intensity: z
      .number()
      .int("Emotion intensity must be a whole number from 1 to 5.")
      .min(1, "Emotion intensity is a self-rating from 1 to 5.")
      .max(5, "Emotion intensity is a self-rating from 1 to 5."),
    time_since_trigger: z.enum(TIME_SINCE_TRIGGERS),
    optional_context: z
      .string()
      .max(CONTEXT_MAX, "Context must be 3,000 characters or fewer.")
      .optional(),
    age_confirmed: z.literal(true, {
      message: "You must confirm you are 18 or over before submitting.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.goal_code === "other") {
      const detail = data.goal_detail?.trim() ?? "";
      if (detail.length < GOAL_DETAIL_MIN) {
        ctx.addIssue({
          code: "custom",
          path: ["goal_detail"],
          message: "Describe your goal in at least 5 characters.",
        });
      }
    }
  });

export type CheckInput = z.infer<typeof checkInputSchema>;

export const basicResultSchema = z.object({
  assessment: z.enum(ASSESSMENTS),
  summary: z.string().min(1),
  hidden_assumption: z.string().min(1),
  highest_risk_excerpt: z.string().nullable(),
  possible_interpretations: z.array(z.string().min(1)),
  case_for_sending: z.string().min(1),
  case_for_pausing: z.string().min(1),
  decision_changers: z.array(z.string().min(1)).max(3),
  policy_flags: z.array(z.string()),
});

export type BasicResult = z.infer<typeof basicResultSchema>;
