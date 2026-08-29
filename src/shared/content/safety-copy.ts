export type RefusalReason = "professional_advice" | "minors" | "harmful_use";

export const L3_TITLE = "This needs real-time human support, not a message-analysis tool.";
export const L3_BODY = [
  "If you or someone else may be in immediate danger, contact local emergency services now.",
];
export const L3_RESOURCES = [
  {
    region: "United States",
    label: "call or text 988",
    name: "988 Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/get-help/",
    tel: "988",
  },
  {
    region: "Canada",
    label: "call or text 9-8-8",
    name: "9-8-8 Suicide Crisis Helpline",
    href: "https://988.ca/",
    tel: "988",
  },
  {
    region: "UK and ROI",
    label: "call Samaritans free on 116 123",
    name: "Samaritans",
    href: "https://www.samaritans.org/how-we-can-help/contact-samaritan/",
    tel: "116123",
  },
  {
    region: "Elsewhere",
    label: "find a verified local service",
    name: "Find A Helpline",
    href: "https://findahelpline.com/",
    tel: null,
  },
] as const;
export const L3_CLOSING =
  "You deserve support from a real person who can respond to what is happening now.";

export const L2_TITLE = "This sounds heavier than a message wording question.";
export const L2_BODY = [
  "An AI tool cannot assess your safety or the other person's behavior. Consider talking with someone you trust or a qualified support service before deciding what to send. You can find verified services by country and topic at Find A Helpline.",
  "If anyone may be in immediate danger, contact local emergency services.",
];

export const REFUSE_COPY: Record<RefusalReason, string> = {
  professional_advice:
    "I can't assess medical treatment, legal action, or investment decisions. Those require a qualified professional who can review your full situation.",
  minors:
    "This tool is for adults and cannot analyze or rewrite intimate or unsafe messages involving minors.",
  harmful_use:
    "I can't help make threats, coercion, harassment, stalking, deception, fraud, or manipulation more effective.",
};

export const UNSUPPORTED_LANGUAGE_BODY =
  "This version can only classify and analyze English safely. It won't produce a message assessment for this text. If the situation feels urgent or unsafe, find a verified local service at Find A Helpline.";

export const SAFETY_UNAVAILABLE_BODY =
  "We can't complete the safety check right now, so we won't analyze this message. Your text has not been saved by us. Please try again later.";
