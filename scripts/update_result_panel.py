import os

py_script = """\"use client\";

import type { BasicResult } from "@/shared/contracts/check";
import { useLanguage } from "@/shared/i18n/LanguageContext";

interface Props {
  goalLine: string;
  result: BasicResult;
  onEditRecheck: () => void;
  onStartCooldown: () => void;
  onClear: () => void;
}

const RESULT_I18N = {
  zh: {
    goalHeader: "您的核心诉求",
    notRecommendation: "本结果仅为语言冲突与公关逻辑推演，不作为强制发送或撤回的定论建议。",
    assumptionTitle: "最容易被对方误读的潜在假设",
    derailTitle: "最容易导致冲突升级或目标偏离的高危原句",
    noSingleLine: "未发现单句明显违规，主要是整体沟通语调偏向防御或指责。",
    interpretationsTitle: "对方读完后可能产生的真实心理感受",
    caseSendingTitle: "支持此时发送的合理解释",
    casePausingTitle: "建议暂时搁置冷静的避坑理由",
    changersTitle: "如果出现以下情况，可能会改变本次推演结论",
    btnEdit: "修改草稿重新排雷",
    btnCooldown: "冷静 10 分钟 (防冲动倒计时)",
    btnClear: "清空并结束本次自测",
    titles: {
      GOAL_ALIGNED: "未发现明显与您核心目标冲突的措辞漏洞。",
      GOAL_MISALIGNED: "检测到部分措辞可能违背您的初衷，极易激化矛盾。",
      CRITICAL_CONTEXT_MISSING: "缺少关键事实细节，对方很可能会产生误判。",
    },
  },
  en: {
    goalHeader: "Your Stated Goal",
    notRecommendation: "This is a communication risk simulation, not a formal recommendation to send or wait.",
    assumptionTitle: "The Assumption Doing the Most Work",
    derailTitle: "The Line Most Likely to Derail Your Goal",
    noSingleLine: "No single line stood out more than the overall tone pattern.",
    interpretationsTitle: "How the Recipient Could Interpret This",
    caseSendingTitle: "An Honest Case for Sending Now",
    casePausingTitle: "An Honest Case for Pausing",
    changersTitle: "What Would Change This Check",
    btnEdit: "Edit and Recheck",
    btnCooldown: "Take 10 Minutes (Cooldown Timer)",
    btnClear: "Clear This Check",
    titles: {
      GOAL_ALIGNED: "No obvious conflict with your goal found.",
      GOAL_MISALIGNED: "Some wording may actively work against your goal.",
      CRITICAL_CONTEXT_MISSING: "One critical missing detail changes this check.",
    },
  },
};

export function BasicResultPanel({
  goalLine,
  result,
  onEditRecheck,
  onStartCooldown,
  onClear,
}: Props) {
  const { lang } = useLanguage();
  const t = RESULT_I18N[lang];

  return (
    <section aria-labelledby="result-title" className="max-w-[760px] mx-auto fade-swap">
      <div className="card p-6 md:p-10 bg-surface rounded-[var(--radius-xl)] border border-line shadow-lg">
        <p className="eyebrow text-pause font-bold">{t.goalHeader}</p>
        <p className="text-body-lg mt-1 font-semibold text-ink">{goalLine}</p>

        <h2 id="result-title" tabIndex={-1} className="text-display-lg mt-8 focus:outline-none text-ink font-bold leading-tight">
          {t.titles[result.assessment]}
        </h2>
        <p className="text-body-lg mt-3 text-ink/90">{result.summary}</p>
        <p className="text-small text-muted mt-2">
          {t.notRecommendation}
        </p>

        <hr className="rule my-8" />

        <ResultSection title={t.assumptionTitle}>
          <p className="text-body-lg border-l-4 border-primary pl-4 text-ink/90 font-medium">
            {result.hidden_assumption}
          </p>
        </ResultSection>

        <ResultSection title={t.derailTitle}>
          {result.highest_risk_excerpt ? (
            <blockquote className="text-body-lg border-l-4 border-pause pl-4 py-1 text-ink font-serif italic bg-pause/5 rounded-r">
              &ldquo;{result.highest_risk_excerpt}&rdquo;
            </blockquote>
          ) : (
            <p className="text-body-lg text-muted">
              {t.noSingleLine}
            </p>
          )}
        </ResultSection>

        <ResultSection title={t.interpretationsTitle}>
          <ul className="space-y-2">
            {result.possible_interpretations.map((interp, i) => (
              <li key={i} className="text-body-lg text-ink/90 flex items-start gap-2">
                <span className="text-pause font-bold">•</span>
                <span>{interp}</span>
              </li>
            ))}
          </ul>
        </ResultSection>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="rounded-[var(--radius-md)] border border-line p-5 bg-surface">
            <h3 className="text-label text-subtle uppercase tracking-wider">{t.caseSendingTitle}</h3>
            <p className="mt-2 text-small text-ink/90">{result.case_for_sending}</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-line p-5 bg-surface border-l-4 border-l-pause">
            <h3 className="text-label text-pause uppercase tracking-wider font-bold">{t.casePausingTitle}</h3>
            <p className="mt-2 text-small text-ink/90">{result.case_for_pausing}</p>
          </div>
        </div>

        <ResultSection title={t.changersTitle}>
          <ol className="list-decimal list-inside space-y-2 text-body-lg text-ink/90">
            {result.decision_changers.map((dc, i) => (
              <li key={i}>{dc}</li>
            ))}
          </ol>
        </ResultSection>

        <div className="flex flex-wrap gap-3 mt-10">
          <button type="button" className="btn btn-secondary cursor-pointer" onClick={onEditRecheck}>
            {t.btnEdit}
          </button>
          <button type="button" className="btn btn-secondary cursor-pointer" onClick={onStartCooldown}>
            {t.btnCooldown}
          </button>
          <button type="button" className="btn btn-danger cursor-pointer" onClick={onClear}>
            {t.btnClear}
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-8">
      <h3 className="text-label text-subtle uppercase tracking-[0.08em] font-bold text-pause">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}
"""

with open("src/features/check/BasicResultPanel.tsx", "w", encoding="utf-8") as f:
  f.write(py_script)
print("Updated BasicResultPanel.tsx successfully")
