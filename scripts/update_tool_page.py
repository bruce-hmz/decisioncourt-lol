import os

py_script = """\"use client\";

import { useReducer, useState } from "react";
import Link from "next/link";
import { checkReducer } from "@/features/check/checkReducer";
import { BasicResultPanel } from "@/features/check/BasicResultPanel";
import { ShareCard } from "@/features/check/ShareCard";
import { CooldownPanel } from "@/features/check/CooldownPanel";
import { SafetyStopPanel } from "@/features/check/SafetyStopPanel";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import {
  GOAL_CODES,
  NO_REPLY_OPTIONS,
  RECIPIENT_TYPES,
  TIME_SINCE_TRIGGERS,
  type GoalCode,
} from "@/shared/contracts/enums";
import { AI_DISCLOSURE, PRIVACY_REMINDER } from "@/shared/content/disclosure";

const CHECK_I18N = {
  zh: {
    heroTitle: "发小作文或冲动信息前，先测测它到底会产生什么后果。",
    heroBody: "粘贴你还没发出去的文字，选定你期望达到的目标，AI 将深度排查用词中的公关漏洞与潜在冲突。",
    scenarios: [
      {
        lead: "刚给前任/朋友写了一段长篇大论还在犹豫？",
        follow: "在发出去之前，看看哪些字句会被对方读成‘甩锅与指责’而非‘真诚沟通’。",
      },
      {
        lead: "正准备回复一条让你瞬间上头愤怒的消息？",
        follow: "检查你的措辞到底是在树立明确边界，还是在进一步激化矛盾把事情搞砸。",
      },
      {
        lead: "准备给老板、合伙人或客户发摊牌/请假/离职邮件？",
        follow: "看看一个不在你当下情绪里的人，读完这段话会有什么真实感受。",
      },
    ],
    privacyTitle: "默认私密保护。我们绝不留存您的原文。",
    howItWorks: "排雷步骤",
    step1: "1. 粘贴您尚未发出的草稿或声明。",
    step2: "2. 选定您希望达到的核心诉求。",
    step3: "3. 查看公关排雷报告，再做最终决定。",
    exampleShow: "先看一个排雷范例",
    exampleHide: "收起范例",
    labelDraft: "您尚未发出的消息草稿",
    placeholderDraft: "例：我想和你聊聊昨天发生的事，我觉得你根本不在乎……",
    privacyReminder: "提示：分析在浏览器临时完成，请勿包含银行卡或密码等敏感信息。",
    legendGoal: "您希望这条消息达到什么目的？",
    labelGoalDetail: "具体描述您的诉求",
    placeholderGoalDetail: "例：我想解释为什么我最近很沉默，但不想显得像在找借口",
    legendRecipient: "这条消息是发给谁的？",
    legendNoReply: "如果对方完全不回复，你能接受吗？",
    legendEmotion: "你现在的情绪有多上头？ (1 = 很冷静, 5 = 极度愤怒/上头)",
    legendTime: "这件事过去多久了？",
    labelContext: "还有什么背景需要法庭了解吗？ (可选)",
    placeholderContext: "例：我们在两周前吵了一架后一直没说过话。",
    ageConfirm: "我已年满 18 周岁，且已阅读并同意",
    and: "和",
    privacyPolicy: "隐私政策",
    terms: "服务条款",
    btnSubmitting: "正在进行多维公关与冲突排雷推演……",
    btnSubmit: "立刻开始排雷自测",
    deepOfferTitle: "需要逐行精细审查与两版高分改写草稿吗？",
    deepOfferDesc: "深度排雷包含逐句红线排查、死因预判推演、最强反驳论据，以及两套完全贴合您目标的专业改写方案。",
    deepPrice: "$4.99 一次性解锁",
    deepBtn: "解锁深度排雷与改写",
    deepHint: "将在新标签页安全打开结算",
    deepPoints: [
      "非订阅制，一次付费单次使用。",
      "您的原始草稿依然不会保存在我们服务器上。",
      "改写草稿供您审阅参考，不保证任何外部人为结果。",
    ],
    refundPolicy: "退款政策",
    goals: {
      clarify: "把事情解释清楚 (Clarify)",
      repair: "修复关系不激化 (Repair)",
      set_boundary: "设立坚定边界 (Set a boundary)",
      apologize: "真诚道歉求谅解 (Apologize)",
      ask_for_reply: "要求明确回复 (Ask for a reply)",
      express_feeling: "表达真实感受 (Express feeling)",
      end_contact: "彻底体面断联 (End contact)",
      other: "其他具体目标 (Other)",
    },
    recipients: {
      ex: "前任 / 感情纠葛对象",
      partner: "伴侣 / 配偶",
      friend_family: "朋友或家人",
      coworker: "平级同事 / 业务对接人",
      manager: "上级领导 / 老板",
      other: "其他人",
    },
    noReplyOptions: {
      yes: "可以接受",
      no: "完全无法接受",
      unsure: "拿不准",
    },
    timeLabels: {
      under_10m: "10分钟以内 (刚发生)",
      "10_to_60m": "10 到 60 分钟",
      "1_to_24h": "1 到 24 小时",
      "1_to_7d": "1 到 7 天",
      over_7d: "7 天以上",
    },
  },
  en: {
    heroTitle: "Before you send it, check what it actually does.",
    heroBody: "Paste the message, name the outcome you want, and see where wording or assumptions work against that goal.",
    scenarios: [
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
    ],
    privacyTitle: "Private by default. Not saved by us.",
    howItWorks: "How it works",
    step1: "1. Paste your unsent message.",
    step2: "2. Name the outcome you want.",
    step3: "3. Read the check, then decide.",
    exampleShow: "See an example check first",
    exampleHide: "Hide the example",
    labelDraft: "Your unsent message",
    placeholderDraft: "I wanted to talk about what happened yesterday...",
    privacyReminder: "Reminder: Analysis runs in memory; do not include bank info or passwords.",
    legendGoal: "What do you want this message to do?",
    labelGoalDetail: "Describe your goal",
    placeholderGoalDetail: "I want to explain why I have been quiet without making excuses",
    legendRecipient: "Who is this message for?",
    legendNoReply: "If they don’t reply, can you accept that?",
    legendEmotion: "How intense does this feel right now? (1 = calm, 5 = overwhelming)",
    legendTime: "How long ago did this start?",
    labelContext: "Anything else you want the check to know? (optional)",
    placeholderContext: "We have not spoken in two weeks since the argument.",
    ageConfirm: "I am 18 or over, and I have read the",
    and: "and",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    btnSubmitting: "Checking boundaries and goal alignment...",
    btnSubmit: "Run the pre-send check",
    deepOfferTitle: "Want a line-by-line check and two goal-aligned rewrites?",
    deepOfferDesc: "Deep Check adds line review, a short pre-mortem, the strongest counterargument, and two drafts aligned with your goal.",
    deepPrice: "$4.99 one time",
    deepBtn: "Unlock Deep Check",
    deepHint: "Checkout opens in a new tab.",
    deepPoints: [
      "No subscription.",
      "Your original message is still not saved by us.",
      "Rewrites are drafts for review, not guaranteed outcomes.",
    ],
    refundPolicy: "Refund policy",
    goals: {
      clarify: "Clarify",
      repair: "Repair",
      set_boundary: "Set a boundary",
      apologize: "Apologize",
      ask_for_reply: "Ask for a reply",
      express_feeling: "Express a feeling",
      end_contact: "End contact",
      other: "Other",
    },
    recipients: {
      ex: "An ex",
      partner: "A partner",
      friend_family: "A friend or family member",
      coworker: "A coworker",
      manager: "A manager",
      other: "Someone else",
    },
    noReplyOptions: {
      yes: "Yes",
      no: "No",
      unsure: "Unsure",
    },
    timeLabels: {
      under_10m: "Under 10 minutes",
      "10_to_60m": "10 to 60 minutes",
      "1_to_24h": "1 to 24 hours",
      "1_to_7d": "1 to 7 days",
      over_7d: "More than 7 days",
    },
  },
};

export default function ToolPage() {
  const { lang } = useLanguage();
  const t = CHECK_I18N[lang];

  const [phase, dispatch] = useReducer(checkReducer, { kind: "EMPTY" });

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
  const [showExample, setShowExample] = useState(false);

  const started = draft.trim().length > 0;
  const expanded = started || Object.keys(fieldErrors).length > 0;
  const showDeepOffer = phase.kind === "BASIC_RESULT";

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!draft.trim()) errs.draft_message = lang === "zh" ? "请输入您尚未发出的消息。" : "Enter the message you have not sent.";
    if (!goalCode) errs.goal_code = lang === "zh" ? "请选择您希望达到的目的。" : "Choose the outcome you want.";
    if (goalCode === "other" && goalDetail.trim().length < 5)
      errs.goal_detail = lang === "zh" ? "请至少用 5 个字描述您的具体目标。" : "Describe your goal in at least 5 characters.";
    if (!recipientType) errs.recipient_type = lang === "zh" ? "请选择这条消息是发给谁的。" : "Choose who this message is for.";
    if (!noReply)
      errs.can_accept_no_reply = lang === "zh" ? "请选择最接近您想法的选项。" : "Choose the answer closest to how you feel.";
    if (emotion === null)
      errs.emotion_intensity = lang === "zh" ? "请选择当前情绪上头程度 (1-5)。" : "Pick the number closest to how intense this feels.";
    if (!timeSince) errs.time_since_trigger = lang === "zh" ? "请选择距离事件发生的时间。" : "Choose how long ago this started.";
    if (!ageConfirmed) errs.age_confirmed = lang === "zh" ? "请确认您已年满 18 周岁。" : "Please confirm you are 18 or over.";
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
            (lang === "zh" ? "无法完成检查，草稿仍保留在本标签页中，请重试。" : "We couldn’t complete the check. Your draft is still in this tab. Try again."),
          requestId: data.request_id ?? "",
        });
        return;
      }
      dispatch({ type: "RESULT", result: data.result, requestId: data.request_id });
    } catch {
      dispatch({
        type: "ERROR",
        message:
          lang === "zh" ? "网络异常无法连接，草稿仍保留在本标签页中，请重试。" : "We couldn’t reach the check. Your draft is still in this tab. Try again.",
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
          <h1 className="text-display-xl text-ink font-semibold leading-tight">{t.heroTitle}</h1>
          <p className="text-body-lg mt-6 text-muted max-w-[42ch]">{t.heroBody}</p>
          <div className="mt-8 space-y-4">
            {t.scenarios.map((s) => (
              <div key={s.lead} className="border-l-4 border-primary pl-4">
                <p className="text-body font-semibold text-ink">{s.lead}</p>
                <p className="text-small text-muted mt-1">{s.follow}</p>
              </div>
            ))}
          </div>
          <p className="text-small mt-8 font-bold text-pause">
            🔒 {t.privacyTitle}
          </p>
          <div id="how-it-works" className="mt-8 hidden lg:block border-t border-line pt-6">
            <p className="eyebrow">{t.howItWorks}</p>
            <ol className="mt-3 space-y-2 text-small text-muted list-none">
              <li>{t.step1}</li>
              <li>{t.step2}</li>
              <li>{t.step3}</li>
            </ol>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="hero-panel p-5 md:p-8 bg-surface rounded-[var(--radius-xl)] border border-line shadow-lg">{renderPhase()}</div>
        </div>
      </div>

      {showDeepOffer && (
        <div className="max-w-[760px] mx-auto mb-8">
          <ShareCard result={phase.result} />
        </div>
      )}
      {showDeepOffer && (
        <div className="max-w-[760px] mx-auto -mt-2 mb-8">
          <div className="card p-6 md:p-8" style={{ background: "var(--color-pause-soft)" }}>
            <h2 className="text-heading-3 text-ink">
              {t.deepOfferTitle}
            </h2>
            <p className="text-body-lg mt-2 text-ink/90">
              {t.deepOfferDesc}
            </p>
            <p className="text-label-strong mt-3 text-pause">{t.deepPrice}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="btn btn-primary cursor-pointer"
                onClick={() => dispatch({ type: "OPEN_CHECKOUT" })}
              >
                {t.deepBtn}
              </button>
              <span className="text-small text-muted">{t.deepHint}</span>
            </div>
            <ul className="text-small text-muted mt-4 space-y-1">
              {t.deepPoints.map((pt) => (
                <li key={pt}>• {pt}</li>
              ))} 
              <li>
                <Link href="/refund" className="underline">{t.refundPolicy}</Link>
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
            <p className="text-heading-3 text-ink font-semibold">
              {lang === "zh" ? "正在深度推演冲突风险与目标偏离度……" : "Checking boundaries and goal alignment..."}
            </p>
            <p className="text-small text-muted mt-2">
              {lang === "zh" ? "您的输入仅在当前浏览器中临时分析，绝不留存。" : "Your draft stays in this tab."}
            </p>
            <div className="mt-6 h-1.5 w-48 mx-auto rounded-full bg-line overflow-hidden">
              <div className="h-full w-1/3 bg-pause rounded-full animate-pulse" />
            </div>
          </div>
        );
      case "BASIC_RESULT":
        return (
          <BasicResultPanel
            goalLine={goalDetail.trim() || t.goals[goalCode as GoalCode]}
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
            <h2 className="text-heading-3 text-ink">
              {lang === "zh" ? "抱歉，无法完成当前排雷推演" : "We couldn’t complete the check."}
            </h2>
            <p className="text-body-lg text-muted mt-3">{phase.message}</p>
            <button
              type="button"
              className="btn btn-secondary mt-6 cursor-pointer"
              onClick={() => dispatch({ type: "EDIT_AND_RECHECK" })}
            >
              {lang === "zh" ? "返回修改草稿" : "Back to your draft"}
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
            <h2 className="text-heading-3 text-ink">{lang === "zh" ? "等待结算完成" : "Checkout pending"}</h2>
            <p className="text-body-lg text-muted mt-3">
              {lang === "zh" ? "在新标签页中完成支付后请返回此处，您的草稿完整保留在本页中。" : "Complete checkout in the new tab, then come back here. Your draft stays in this tab."}
            </p>
            <button
              type="button"
              className="btn btn-secondary mt-6 cursor-pointer"
              onClick={() => dispatch({ type: "PAYMENT_VERIFYING" })}
            >
              {lang === "zh" ? "我已完成支付 — 立即验证" : "I’ve paid — verify"}
            </button>
          </div>
        );
      case "PAYMENT_VERIFYING":
        return (
          <div className="py-12 text-center fade-swap" aria-live="polite">
            <h2 className="text-heading-3 text-ink">{lang === "zh" ? "正在验证支付状态……" : "Verifying payment..."}</h2>
            <p className="text-small text-muted mt-3">{lang === "zh" ? "这通常只需要几秒钟。" : "This can take a moment."}</p>
          </div>
        );
      case "DEEP_RESULT":
        return (
          <div className="fade-swap">
            <h2 className="text-display-lg text-ink font-semibold">{lang === "zh" ? "请在发送前仔细核验改写建议" : "Review these drafts before copying."}</h2>
            <p className="text-small text-muted mt-2">
              {lang === "zh" ? "改写方案基于您的核心目标生成，请根据实际语境微调。" : "Review every line before using it."}
            </p>
            {phase.deep.rewrites.map((rw) => (
              <div key={rw.label} className="card p-5 mt-4 bg-surface border border-line">
                <h3 className="text-heading-3 text-ink font-bold">{rw.label}</h3>
                <p className="mt-2 whitespace-pre-wrap text-body text-ink font-medium">{rw.draft}</p>
                <p className="text-small text-muted mt-2">
                  <span className="font-semibold text-pause">{lang === "zh" ? "改动解析: " : "What changed: "}</span>
                  {rw.what_changed}
                </p>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary mt-6 cursor-pointer"
              onClick={() => dispatch({ type: "EDIT_AND_RECHECK" })}
            >
              {lang === "zh" ? "返回排雷结果" : "Back to your result"}
            </button>
          </div>
        );
    }
  }

  function renderForm() {
    const busy = phase.kind === "ANALYZING" || submitting;
    return (
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <button
            type="button"
            className="text-link text-small mb-3 cursor-pointer text-pause font-semibold inline-block"
            onClick={() => setShowExample(!showExample)}
          >
            {showExample ? t.exampleHide : t.exampleShow}
          </button>
          {showExample && (
            <div className="p-4 bg-canvas rounded-[var(--radius-md)] border border-line mb-4 text-xs space-y-2">
              <p className="font-bold text-ink">{lang === "zh" ? "范例目标：表达真实边界，但不想彻底激化矛盾" : "Example Goal: Set a firm boundary without escalation"}</p>
              <p className="italic text-muted">{lang === "zh" ? "“原句：你每次都这样，根本不在乎任何人的感受，随便你吧！”" : "“Original: You always do this and clearly never care about anyone!”"}</p>
              <p className="text-[#D76A5C] font-semibold">{lang === "zh" ? "⚠️ 排雷洞察：“你每次都这样”属于绝对化全盘指责，会立刻将沟通转变为阵营对抗。" : "⚠️ Risk: 'You always do this' reads as a total character accusation."}</p>
            </div>
          )}

          <label htmlFor="draft_message" className="text-label block text-ink">
            {t.labelDraft}
          </label>
          <textarea
            id="draft_message"
            className="field mt-2 w-full"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={6}
            maxLength={5000}
            aria-invalid={fieldErrors.draft_message ? "true" : undefined}
            placeholder={t.placeholderDraft}
          />
          <p className="text-micro text-muted mt-1">
            {t.privacyReminder}
          </p>
          {fieldErrors.draft_message && (
            <p className="field-error mt-1">{fieldErrors.draft_message}</p>
          )}
        </div>

        <fieldset>
          <legend className="text-label text-ink">
            {t.legendGoal}
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {GOAL_CODES.map((code) => (
              <label key={code} className="radio-row cursor-pointer text-xs">
                <input
                  type="radio"
                  name="goal_code"
                  value={code}
                  checked={goalCode === code}
                  onChange={() => setGoalCode(code)}
                />
                <span>{t.goals[code]}</span>
              </label>
            ))} 
          </div>
          {fieldErrors.goal_code && (
            <p className="field-error mt-1">{fieldErrors.goal_code}</p>
          )}
        </fieldset>

        {goalCode === "other" && (
          <div className="reveal">
            <label htmlFor="goal_detail" className="text-label block text-ink">
              {t.labelGoalDetail}
            </label>
            <input
              id="goal_detail"
              type="text"
              className="field mt-2 w-full"
              value={goalDetail}
              onChange={(e) => setGoalDetail(e.target.value)}
              maxLength={240}
              placeholder={t.placeholderGoalDetail}
            />
            {fieldErrors.goal_detail && (
              <p className="field-error mt-1">{fieldErrors.goal_detail}</p>
            )}
          </div>
        )}

        {expanded && (
          <div className="reveal space-y-5 border-t border-line pt-6">
            <fieldset>
              <legend className="text-label text-ink">{t.legendRecipient}</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {RECIPIENT_TYPES.map((code) => (
                  <label key={code} className="radio-row cursor-pointer text-xs">
                    <input
                      type="radio"
                      name="recipient_type"
                      value={code}
                      checked={recipientType === code}
                      onChange={() => setRecipientType(code)}
                    />
                    <span>{t.recipients[code]}</span>
                  </label>
                ))} 
              </div>
              {fieldErrors.recipient_type && (
                <p className="field-error mt-1">{fieldErrors.recipient_type}</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label text-ink">
                {t.legendNoReply}
              </legend>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {NO_REPLY_OPTIONS.map((code) => (
                  <label key={code} className="radio-row justify-center cursor-pointer text-xs">
                    <input
                      type="radio"
                      name="can_accept_no_reply"
                      value={code}
                      checked={noReply === code}
                      onChange={() => setNoReply(code)}
                    />
                    <span>{t.noReplyOptions[code]}</span>
                  </label>
                ))} 
              </div>
              {fieldErrors.can_accept_no_reply && (
                <p className="field-error mt-1">{fieldErrors.can_accept_no_reply}</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label text-ink">
                {t.legendEmotion}
              </legend>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n} className="radio-row justify-center cursor-pointer text-xs font-bold">
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
                <p className="field-error mt-1">{fieldErrors.emotion_intensity}</p>
              )}
            </fieldset>

            <fieldset>
              <legend className="text-label text-ink">{t.legendTime}</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {TIME_SINCE_TRIGGERS.map((code) => (
                  <label key={code} className="radio-row cursor-pointer text-xs">
                    <input
                      type="radio"
                      name="time_since_trigger"
                      value={code}
                      checked={timeSince === code}
                      onChange={() => setTimeSince(code)}
                    />
                    <span>{t.timeLabels[code]}</span>
                  </label>
                ))} 
              </div>
              {fieldErrors.time_since_trigger && (
                <p className="field-error mt-1">{fieldErrors.time_since_trigger}</p>
              )}
            </fieldset>

            <div>
              <label htmlFor="optional_context" className="text-label block text-ink">
                {t.labelContext}
              </label>
              <textarea
                id="optional_context"
                className="field mt-2 w-full"
                rows={3}
                value={optionalContext}
                onChange={(e) => setOptionalContext(e.target.value)}
                maxLength={3000}
                placeholder={t.placeholderContext}
              />
            </div>
          </div>
        )}

        <div className="border-t border-line pt-6">
          <label className="checkbox-row cursor-pointer">
            <input
              type="checkbox"
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
            />
            <span className="text-small text-muted">
              {t.ageConfirm}{" "}
              <Link href="/privacy" className="underline text-ink">{t.privacyPolicy}</Link> {t.and}{" "}
              <Link href="/terms" className="underline text-ink">{t.terms}</Link>。
            </span>
          </label>
          {fieldErrors.age_confirmed && (
            <p className="field-error mt-1">{fieldErrors.age_confirmed}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full py-3 text-sm cursor-pointer"
          disabled={busy}
        >
          {busy ? t.btnSubmitting : t.btnSubmit}
        </button>
      </form>
    );
  }
}
"""

with open("src/app/tools/should-i-send-this-text/page.tsx", "w", encoding="utf-8") as f:
  f.write(py_script)
print("Updated should-i-send-this-text/page.tsx successfully")
