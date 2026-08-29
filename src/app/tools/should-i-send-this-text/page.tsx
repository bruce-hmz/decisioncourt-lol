"use client";

import { useReducer, useState } from "react";
import Link from "next/link";
import { checkReducer } from "@/features/check/checkReducer";
import { BasicResultPanel } from "@/features/check/BasicResultPanel";
import { ShareCard } from "@/features/check/ShareCard";
import { CooldownPanel } from "@/features/check/CooldownPanel";
import { SafetyStopPanel } from "@/features/check/SafetyStopPanel";
import {
  GOAL_CODES,
  NO_REPLY_OPTIONS,
  RECIPIENT_TYPES,
  TIME_SINCE_TRIGGERS,
  type GoalCode,
} from "@/shared/contracts/enums";
import { AI_DISCLOSURE, PRIVACY_REMINDER } from "@/shared/content/disclosure";

const GOAL_LABELS: Record<GoalCode, string> = {
  clarify: "Clarify",
  repair: "Repair",
  set_boundary: "Set a boundary",
  apologize: "Apologize",
  ask_for_reply: "Ask for a reply",
  express_feeling: "Express a feeling",
  end_contact: "End contact",
  other: "Other",
};

const RECIPIENT_LABELS: Record<string, string> = {
  ex: "An ex",
  partner: "A partner",
  friend_family: "A friend or family member",
  coworker: "A coworker",
  manager: "A manager",
  other: "Someone else",
};

const TIME_LABELS: Record<string, string> = {
  under_10m: "Under 10 minutes",
  "10_to_60m": "10 to 60 minutes",
  "1_to_24h": "1 to 24 hours",
  "1_to_7d": "1 to 7 days",
  over_7d: "More than 7 days",
};

const HERO = {
  title: "Before you send it, check what it actually does.",
  body:
    "Paste the message, name the outcome you want, and see where wording or assumptions work against that goal.",
};

const SCENARIOS = [
  {
    lead: "Just wrote something to your ex you're not sure about?",
    follow: "See which lines read as blame instead of honesty, before they do.",
  },
  {
    lead: "Replying to a message that made your jaw tighten?",
    follow: "Check whether the reply lands as a boundary or as an escalation.",
  },
  {
    lead: "About to hit send on a message to your boss?",
    follow: "See how it reads to someone who was not in your head today.",
  },
] as const;

function ExampleToggle() {
  const [showExample, setShowExample] = useState(false);

  if (showExample) {
    return (
      <div>
        <ExampleResultCard />
        <button
          type="button"
          className="text-link text-small mt-4 block"
          onClick={() => setShowExample(false)}
        >
          Hide the example
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="text-link text-small"
      onClick={() => setShowExample(true)}
    >
      See an example check first
    </button>
  );
}

export default function ToolPage() {
  const [phase, dispatch] = useReducer(checkReducer, { kind: "EMPTY" });

  // Form values live here so the draft survives every phase transition
  // (PRD 9.2: recoverable errors and stops must never clear input).
  const [draft, setDraft] = useState("");
  const [goalCode, setGoalCode] = useState<GoalCode | "">("");
  const [goalDetail, setGoalDetail] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [noReply, setNoReply] = useState("");
  const [emotion, setEmotion] = useState<number | null>(null);
  const [timeSince, setTimeSince] = useState("");
  const [optionalContext, setOptionalContext] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const started = draft.trim().length > 0;
  const expanded = started || Object.keys(fieldErrors).length > 0;
  const showDeepOffer = phase.kind === "BASIC_RESULT";

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!draft.trim()) errs.draft_message = "Enter the message you have not sent.";
    if (!goalCode) errs.goal_code = "Choose the outcome you want.";
    if (goalCode === "other" && goalDetail.trim().length < 5)
      errs.goal_detail = "Describe your goal in at least 5 characters.";
    if (!recipientType) errs.recipient_type = "Choose who this message is for.";
    if (!noReply)
      errs.can_accept_no_reply = "Choose the answer closest to how you feel.";
    if (emotion === null)
      errs.emotion_intensity = "Pick the number closest to how intense this feels.";
    if (!timeSince) errs.time_since_trigger = "Choose how long ago this started.";
    if (!ageConfirmed) errs.age_confirmed = "Please confirm you are 18 or over.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    dispatch({ type: "SUBMITTING" });
    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          draft_message: draft,
          goal_code: goalCode,
          goal_detail: goalCode === "other" ? goalDetail : undefined,
          recipient_type: recipientType,
          can_accept_no_reply: noReply,
          emotion_intensity: emotion,
          time_since_trigger: timeSince,
          optional_context: optionalContext || undefined,
          age_confirmed: ageConfirmed,
        }),
      });
      const data = await res.json();
      if (data.outcome === "safety_stop") {
        dispatch({
          type: "SAFETY_STOP",
          route: data.route,
          refusalReason: data.refusal_reason ?? undefined,
          requestId: data.request_id,
        });
        return;
      }
      if (!res.ok) {
        if (data.field_errors) setFieldErrors(data.field_errors);
        dispatch({
          type: "ERROR",
          message:
            data.message ??
            "We couldn\u2019t complete the check. Your draft is still in this tab. Try again.",
          requestId: data.request_id ?? "",
        });
        return;
      }
      dispatch({ type: "RESULT", result: data.result, requestId: data.request_id });
    } catch {
      dispatch({
        type: "ERROR",
        message:
          "We couldn\u2019t reach the check. Your draft is still in this tab. Try again.",
        requestId: "",
      });
    } finally {
      setSubmitting(false);
    }
  }

  function clearAll() {
    setDraft("");
    setGoalCode("");
    setGoalDetail("");
    setRecipientType("");
    setNoReply("");
    setEmotion(null);
    setTimeSince("");
    setOptionalContext("");
    setAgeConfirmed(false);
    setFieldErrors({});
    dispatch({ type: "CLEAR_ALL" });
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 py-10 md:py-14">
        <div className="lg:col-span-5">
          <h1 className="text-display-xl">{HERO.title}</h1>
          <p className="text-body-lg mt-6 text-muted max-w-[42ch]">{HERO.body}</p>
          <div className="mt-8 space-y-4">
            {SCENARIOS.map((s) => (
              <div key={s.lead} className="border-l-4 border-primary pl-4">
                <p className="text-body text-ink">{s.lead}</p>
                <p className="text-small text-muted mt-1">{s.follow}</p>
              </div>
            ))}
          </div>
          <p className="text-small mt-8 font-semibold">
            Private by default.
            <br />
            Not saved by us.
          </p>
          <div id="how-it-works" className="mt-10 hidden lg:block">
            <p className="eyebrow">How it works</p>
            <ol className="mt-3 space-y-2 text-small text-muted list-decimal list-inside">
              <li>Paste your unsent message.</li>
              <li>Name the outcome you want.</li>
              <li>Read the check, then decide.</li>
            </ol>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="hero-panel p-5 md:p-8">{renderPhase()}</div>
        </div>
      </div>

      {showDeepOffer && (
        <div className="max-w-[760px] mx-auto mb-8">
         <ShareCard
            result={phase.result}
          />
        </div>
      )}
      {showDeepOffer && (
        <div className="max-w-[760px] mx-auto -mt-2 mb-8">
          <div className="card p-6 md:p-8" style={{ background: "var(--color-pause-soft)" }}>
            <h2 className="text-heading-3">
              Want a line-by-line check and two goal-aligned rewrites?
            </h2>
            <p className="text-body-lg mt-2">
              Deep Check adds a line review, a short pre-mortem, the strongest
              counterargument, and two drafts aligned with your stated goal.
            </p>
            <p className="text-label mt-3">$4.99 one time</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch({ type: "OPEN_CHECKOUT" })}
              >
                Unlock Deep Check
              </button>
              <span className="text-small text-muted">Checkout opens in a new tab.</span>
            </div>
            <ul className="text-small text-muted mt-4 space-y-1">
              <li>No subscription.</li>
              <li>Your original message is still not saved by us.</li>
              <li>
                Rewrites are drafts for you to review, not guaranteed outcomes.{' '}
                <Link href="/refund">Refund policy</Link>.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  function renderPhase() {
    switch (phase.kind) {
      case "EMPTY":
      case "EDITING":
        return renderForm();
      case "ANALYZING":
        return (
          <div className="py-16 text-center fade-swap" aria-live="polite">
            <p className="text-heading-3">
              Checking boundaries and goal alignment...
            </p>
            <p className="text-small text-muted mt-2">Your draft stays in this tab.</p>
            <div className="mt-6 h-1 w-40 mx-auto rounded-full bg-line overflow-hidden">
              <div className="h-full w-1/3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        );
      case "BASIC_RESULT":
        return (
          <BasicResultPanel
            goalLine={goalDetail.trim() || GOAL_LABELS[goalCode as GoalCode]}
            result={phase.result}
            onEditRecheck={() => dispatch({ type: "EDIT_AND_RECHECK" })}
            onStartCooldown={() =>
              dispatch({ type: "START_COOLDOWN", endsAt: Date.now() + 10 * 60 * 1000 })
            }
            onClear={clearAll}
          />
        );
      case "SAFETY_STOP":
        return (
          <SafetyStopPanel
            route={phase.route}
            refusalReason={phase.refusalReason}
          />
        );
      case "RECOVERABLE_ERROR":
        return (
          <div className="py-12 text-center fade-swap" role="alert">
            <h2 className="text-heading-3">
              We couldn&rsquo;t complete the check.
            </h2>
            <p className="text-body-lg text-muted mt-3">{phase.message}</p>
            {phase.requestId ? (
              <p className="text-micro text-subtle mt-2 font-mono break-all">
                Request ID: {phase.requestId}
              </p>
            ) : null}
            <button
              type="button"
              className="btn btn-secondary mt-6"
              onClick={() => dispatch({ type: "EDIT_AND_RECHECK" })}
            >
              Back to your draft
            </button>
          </div>
        );
      case "COOLING_DOWN":
        return (
          <CooldownPanel
            endsAt={phase.endsAt}
            onEnd={() => dispatch({ type: "END_COOLDOWN" })}
            onReview={() => dispatch({ type: "EDIT_AND_RECHECK" })}
          />
        );
      case "CHECKOUT_PENDING":
        return (
          <div className="py-12 text-center fade-swap">
            <h2 className="text-heading-3">Checkout pending</h2>
            <p className="text-body-lg text-muted mt-3">
              Complete checkout in the new tab, then come back here. Your draft
              stays in this tab.
            </p>
            <button
              type="button"
              className="btn btn-secondary mt-6"
              onClick={() => dispatch({ type: "PAYMENT_VERIFYING" })}
            >
              I&rsquo;ve paid &mdash; verify
            </button>
          </div>
        );
      case "PAYMENT_VERIFYING":
        return (
          <div className="py-12 text-center fade-swap" aria-live="polite">
            <h2 className="text-heading-3">Verifying payment...</h2>
            <p className="text-small text-muted mt-3">This can take a moment.</p>
          </div>
        );
      case "DEEP_RESULT":
        return (
          <div className="fade-swap">
            <h2 className="text-display-lg">Review these drafts before copying.</h2>
            <p className="text-small text-muted mt-2">
              Review every line before using it.
            </p>
            {phase.deep.rewrites.map((rw) => (
              <div key={rw.label} className="card p-5 mt-4">
                <h3 className="text-heading-3">{rw.label}</h3>
                <p className="mt-2 whitespace-pre-wrap">{rw.draft}</p>
                <p className="text-small text-muted mt-2">
                What changed: {rw.what_changed}
              </p>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary mt-6"
              onClick={() => dispatch({ type: "EDIT_AND_RECHECK" })}
            >
              Back to your result
            </button>
          </div>
        );
    }
  }

  function renderForm() {
    const busy = phase.kind === "ANALYZING" || submitting;
    return (
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <ExampleToggle />
        <div>
          <label htmlFor="draft_message" className="text-label block">
            Your unsent message
          </label>
          <textarea
            id="draft_message"
            className="field mt-2"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={6}
            maxLength={5000}
            aria-invalid={fieldErrors.draft_message ? "true" : undefined}
            aria-describedby={
              fieldErrors.draft_message ? "draft_message-error" : "draft_message-hint"
            }
            placeholder="I wanted to talk about what happened yesterday..."
          />
          <p id="draft_message-hint" className="text-small text-muted mt-1">
            {PRIVACY_REMINDER}
          </p>
          {draft.length > 4000 && (
            <p className="text-micro text-subtle mt-1">
              {draft.length} / 5000 characters
            </p>
          )}
          {fieldErrors.draft_message && (
            <p id="draft_message-error" className="field-error mt-1">
              {fieldErrors.draft_message}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="text-label">
            What do you want this message to do?
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {GOAL_CODES.map((code) => (
              <label key={code} className="radio-row">
                <input
                  type="radio"
                  name="goal_code"
                  value={code}
                  checked={goalCode === code}
                  onChange={() => setGoalCode(code)}
                />
                <span>{GOAL_LABELS[code]}</span>
              </label>
            ))}
          </div>
          {fieldErrors.goal_code && (
            <p className="field-error mt-1">{fieldErrors.goal_code}</p>
          )}
        </fieldset>

        {goalCode === "other" && (
          <div className="reveal">
            <label htmlFor="goal_detail" className="text-label block">
              Describe your goal
            </label>
            <input
              id="goal_detail"
              type="text"
              className="field mt-2"
              value={goalDetail}
              onChange={(e) => setGoalDetail(e.target.value)}
              maxLength={240}
              placeholder="I want to explain why I have been quiet without making excuses"
            />
            {fieldErrors.goal_detail && (
              <p className="field-error mt-1">{fieldErrors.goal_detail}</p>
            )}
          </div>
        )}

        {expanded && (
          <div className="reveal space-y-5 border-t border-line pt-6">
            <fieldset>
              <legend className="text-label">Who is this message for?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {RECIPIENT_TYPES.map((code) => (
                  <label key={code} className="radio-row">
                    <input
                      type="radio"
                      name="recipient_type"
                      value={code}
                      checked={recipientType === code}
                      onChange={() => setRecipientType(code)}
                    />
                    <span>{RECIPIENT_LABELS[code]}</span>
                  </label>
                ))}
              </div>
              {fieldErrors.recipient_type && (
                <p className="field-error mt-1">{fieldErrors.recipient_type}</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label">
                If they don&rsquo;t reply, can you accept that?
              </legend>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {NO_REPLY_OPTIONS.map((code) => (
                  <label key={code} className="radio-row justify-center">
                    <input
                      type="radio"
                      name="can_accept_no_reply"
                      value={code}
                      checked={noReply === code}
                      onChange={() => setNoReply(code)}
                    />
                    <span className="capitalize">{code}</span>
                  </label>
                ))}
              </div>
              {fieldErrors.can_accept_no_reply && (
                <p className="field-error mt-1">
                  {fieldErrors.can_accept_no_reply}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label">
                How intense does this feel right now? (1 = calm, 5 =
                overwhelming)
              </legend>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n} className="radio-row justify-center">
                    <input
                      type="radio"
                      name="emotion_intensity"
                      value={n}
                      checked={emotion === n}
                      onChange={() => setEmotion(n)}
                    />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
              {fieldErrors.emotion_intensity && (
                <p className="field-error mt-1">
                  {fieldErrors.emotion_intensity}
                </p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label">How long ago did this start?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {TIME_SINCE_TRIGGERS.map((code) => (
                  <label key={code} className="radio-row">
                    <input
                      type="radio"
                      name="time_since_trigger"
                      value={code}
                      checked={timeSince === code}
                      onChange={() => setTimeSince(code)}
                    />
                    <span>{TIME_LABELS[code]}</span>
                  </label>
                ))}
              </div>
              {fieldErrors.time_since_trigger && (
                <p className="field-error mt-1">
                  {fieldErrors.time_since_trigger}
                </p>
              )}
            </fieldset>

            <div>
              <label htmlFor="optional_context" className="text-label block">
                Anything else you want the check to know?{' '}
                <span className="text-subtle font-normal">(optional)</span>
              </label>
              <textarea
                id="optional_context"
                className="field mt-2"
                rows={3}
                value={optionalContext}
                onChange={(e) => setOptionalContext(e.target.value)}
                maxLength={3000}
                placeholder="We have not spoken in two weeks since the argument."
              />
              {fieldErrors.optional_context && (
                <p className="field-error mt-1">
                  {fieldErrors.optional_context}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-line pt-6">
          <p className="text-small text-muted">{AI_DISCLOSURE}</p>
          <label className="checkbox-row mt-3">
            <input
              type="checkbox"
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
            />
            <span className="text-small">
              I am 18 or over, and I have read the{' '}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/terms">Terms</Link>.
            </span>
          </label>
          {fieldErrors.age_confirmed && (
            <p className="field-error mt-1">{fieldErrors.age_confirmed}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={busy}
        >
          {busy ? "Checking boundaries and goal alignment..." : "Run the check"}
        </button>
      </form>
    );
  }
}
function ExampleResultCard() {
  return (
    <div className="reveal space-y-4">
      <p className="eyebrow">Example check</p>
      <p className="text-heading-3">
        This is not a recommendation to send or wait.
      </p>
      <p className="text-body border-l-4 border-primary pl-4">
        Your goal: be heard without escalating.
      </p>
      <div className="border border-line rounded-[var(--radius-md)] p-4 bg-surface">
        <p className="text-small text-muted">From your draft</p>
        <blockquote className="text-body-lg border-l-4 border-pause pl-4 py-1 text-ink mt-1">
          &ldquo;You clearly don&rsquo;t care about any of this.&rdquo;
        </blockquote>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-line p-4 bg-surface">
          <p className="text-label-strong text-ink">Case for sending</p>
          <p className="text-small text-muted mt-1">
            The frustration is real, and naming it directly can feel honest.
          </p>
        </div>
        <div className="rounded-[var(--radius-md)] border border-line p-4 bg-surface">
          <p className="text-label-strong text-ink">Case for pausing</p>
          <p className="text-small text-muted mt-1">
            Sending while it reads as a conclusion about their character may
            close the conversation before it starts.
          </p>
        </div>
      </div>
      <p className="text-small text-muted">
        This is a shortened example. Your check reflects your own words and
        goal.
      </p>
    </div>
  );
}
