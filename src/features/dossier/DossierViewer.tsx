"use client";

import { useState, useRef } from "react";
import { toPng, toBlob } from "html-to-image";
import { HOT_CASES, type HotCase } from "@/shared/content/cases";
import { UI_TEXT, type Lang } from "@/shared/i18n/translations";
import { useLanguage } from "@/shared/i18n/LanguageContext";

function getLocalizedCase(c: HotCase, lang: Lang): HotCase {
  if (lang === "zh") return c;
  return {
    ...c,
    tag: c.tag_en || c.tag,
    title: c.title_en || c.title,
    subtitle: c.subtitle_en || c.subtitle,
    sourceDate: c.sourceDate_en || c.sourceDate,
    originalExcerpt: c.originalExcerpt_en || c.originalExcerpt,
    tactics: c.tactics?.map((t) => ({
      ...t,
      title: t.title_en || t.title,
      desc: t.desc_en || t.desc,
    })),
    analysis: {
      ...c.analysis,
      verdictLabel: c.analysis.verdictLabel_en || c.analysis.verdictLabel,
      headline: c.analysis.headline_en || c.analysis.headline,
      statedPersona: c.analysis.statedPersona_en || c.analysis.statedPersona,
      hiddenAgenda: c.analysis.hiddenAgenda_en || c.analysis.hiddenAgenda,
      desiredPublicTakeaway: c.analysis.desiredPublicTakeaway_en || c.analysis.desiredPublicTakeaway,
      distractionTarget: c.analysis.distractionTarget_en || c.analysis.distractionTarget,
      fatalFlawExcerpt: c.analysis.fatalFlawExcerpt_en || c.analysis.fatalFlawExcerpt,
      fatalFlawReason: c.analysis.fatalFlawReason_en || c.analysis.fatalFlawReason,
    },
  };
}

export function DossierViewer() {
  const { lang, toggleLang } = useLanguage();
  const [activeCaseId, setActiveCaseId] = useState<string>(HOT_CASES[0].id);
  const [selectedPlatformFilter, setSelectedPlatformFilter] = useState<string>("全部");
  const [isExpandedAll, setIsExpandedAll] = useState<boolean>(false);
  const [votes, setVotes] = useState<Record<string, "see_through" | "believe">>({});
  const [generatingImg, setGeneratingImg] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reportSectionRef = useRef<HTMLDivElement>(null);

  const t = UI_TEXT[lang];

  // Custom Statement Input state
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customText, setCustomText] = useState("");
  const [customRole, setCustomRole] = useState("吃瓜拆解");
  const [customCase, setCustomCase] = useState<HotCase | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const rawCurrentCase =
    isCustomMode && customCase
      ? customCase
      : HOT_CASES.find((c) => c.id === activeCaseId) || HOT_CASES[0];

  const currentCase = getLocalizedCase(rawCurrentCase, lang);

  const platforms =
    lang === "zh"
      ? ["全部", "微博 / X", "抖音 / 直播", "硅谷 / 科技", "职场 / 脉脉", "B站 / YouTube", "小红书 / 情感"]
      : ["All", "Weibo / X", "TikTok / Live", "Silicon Valley / AI", "LinkedIn / Career", "YouTube / Bilibili", "RedBook / Gossip"];

  const filteredCases =
    selectedPlatformFilter === "全部" || selectedPlatformFilter === "All"
      ? HOT_CASES
      : HOT_CASES.filter((c) => {
          if (selectedPlatformFilter.includes("微博") || selectedPlatformFilter.includes("Weibo")) return c.platform.includes("微博") || c.platform.includes("X");
          if (selectedPlatformFilter.includes("抖音") || selectedPlatformFilter.includes("TikTok")) return c.platform.includes("抖音") || c.platform.includes("直播") || c.platform.includes("TikTok");
          if (selectedPlatformFilter.includes("硅谷") || selectedPlatformFilter.includes("Valley")) return c.platform.includes("硅谷") || c.platform.includes("科技") || c.platform.includes("Google") || c.platform.includes("Meta");
          if (selectedPlatformFilter.includes("脉脉") || selectedPlatformFilter.includes("LinkedIn")) return c.platform.includes("LinkedIn") || c.platform.includes("脉脉");
          if (selectedPlatformFilter.includes("B站") || selectedPlatformFilter.includes("YouTube")) return c.platform.includes("B站") || c.platform.includes("YouTube");
          if (selectedPlatformFilter.includes("小红书") || selectedPlatformFilter.includes("RedBook")) return c.platform.includes("小红书") || c.platform.includes("情感");
          return true;
        });

  const displayedCases = isExpandedAll ? filteredCases : filteredCases.slice(0, 8);

  const userVote = votes[currentCase.id];

  function handleSelectCase(id: string) {
    setActiveCaseId(id);
    if (reportSectionRef.current) {
      reportSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleVote(choice: "see_through" | "believe") {
    setVotes((prev) => ({ ...prev, [currentCase.id]: choice }));
  }

  async function handleDownloadImage() {
    if (!cardRef.current) return;
    setGeneratingImg(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#182422",
        width: 840,
        style: {
          width: "840px",
          maxWidth: "840px",
          margin: "0 auto",
        },
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${t.appName}-${currentCase.title}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setCopiedStatus(t.toastSaved);
      setTimeout(() => setCopiedStatus(null), 3500);
    } catch (e) {
      console.error(e);
    } finally {
      setGeneratingImg(false);
    }
  }

  async function handleCopyImage() {
    if (!cardRef.current) return;
    setGeneratingImg(true);
    try {
      const blob = await toBlob(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#182422",
        width: 840,
        style: {
          width: "840px",
          maxWidth: "840px",
          margin: "0 auto",
        },
      });
      if (blob && typeof ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        setCopiedStatus(t.toastCopied);
      } else {
        await handleDownloadImage();
      }
      setTimeout(() => setCopiedStatus(null), 3500);
    } catch (e) {
      console.error(e);
      await handleDownloadImage();
    } finally {
      setGeneratingImg(false);
    }
  }

  function runCustomAnalysis(e: React.FormEvent) {
    e.preventDefault();
    if (!customText.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const isApology =
        customText.includes("对不起") ||
        customText.includes("抱歉") ||
        customText.includes("遗憾") ||
        customText.toLowerCase().includes("sorry") ||
        customText.toLowerCase().includes("apologize");
      const isWork =
        customText.includes("团队") ||
        customText.includes("责任") ||
        customText.includes("公司") ||
        customText.toLowerCase().includes("team") ||
        customText.toLowerCase().includes("layoff");

      const generated: HotCase = {
        id: "custom-" + Date.now(),
        platform: lang === "zh" ? "实时投喂 / 自定义" : "Live Submission / Custom",
        platformIcon: "⚡",
        tag: customRole === "吃瓜拆解" ? (lang === "zh" ? "自定义吃瓜透视" : "PR Deconstruction") : (lang === "zh" ? "发前公关排雷自测" : "Pre-Post Risk Audit"),
        title: isWork
          ? (lang === "zh" ? "企业/管理层公开回应透视" : "Executive Statement Deconstruction")
          : isApology
          ? (lang === "zh" ? "声明与道歉信潜台词透视" : "Apology & Subtext Deconstruction")
          : (lang === "zh" ? "小作文公关与动机深度透视" : "Statement Motivation & Spin Audit"),
        subtitle: lang === "zh" ? "基于公关心理学与舆情博弈模型的全景拆解" : "Linguistic, PR spin, and public narrative risk modeling",
        sourceDate: lang === "zh" ? "实时投喂案卷" : "Live Analyzed Dossier",
        avatar: "🔍",
        originalExcerpt:
          customText.slice(0, 160) + (customText.length > 160 ? "……" : ""),
        tactics: [
          {
            title: lang === "zh" ? "① 情绪化叙事遮蔽细节" : "① Emotional Narrative Masking",
            desc: lang === "zh" ? "用主观情绪词汇快速调动公众同情，模糊对具体时间线与实质责任的追问。" : "Uses emotive phrasing to anchor sympathy and divert attention from key factual scrutiny.",
            color: "#8DB8C0",
          },
          {
            title: lang === "zh" ? "② 道德制高点防守" : "② Moral High Ground Positioning",
            desc: lang === "zh" ? "抢先发布‘保持体面与大度’，提前把对方后续的一切自辩定性为纠缠。" : "Pre-emptively claims maturity to frame any upcoming rebuttal as petty escalation.",
            color: "#D7A15C",
          },
          {
            title: lang === "zh" ? "③ 程序性合规逃逸舱" : "③ Tactical Legal Escape Hatch",
            desc: lang === "zh" ? "所有道歉均限定为‘造成了误解’，在法律层面绝不承认主观过错。" : "Carefully limits apologies to 'misunderstandings' to prevent formal liability.",
            color: "#D76A5C",
          },
        ],
        analysis: {
          verdict: "CAUGHT_IN_SPIN",
          verdictLabel: lang === "zh" ? "算盘被看穿指数 86%" : "SPIN DETECTED 86%",
          verdictScore: 86,
          headline: lang === "zh" ? "试图用情绪化词汇与大词，稀释核心矛盾与关键利益事实" : "Uses high-minded rhetoric to dilute core accountability and deflect concrete scrutiny",
          statedPersona: lang === "zh" ? "尽力而为、深感委屈且保持体面的当事人" : "A well-meaning, aggrieved party striving to maintain grace under pressure",
          hiddenAgenda: lang === "zh" ? "通过抢占道德与情绪制高点，引导舆论回避关键事实核验" : "Secure moral leverage to discourage the audience from checking hard timeline evidence",
          desiredPublicTakeaway: lang === "zh" ? "“对方情绪很真诚，事出有因可以理解”" : "“They were sincere and had good intentions; don't be too harsh”",
          distractionTarget: lang === "zh" ? "转移对实质利益分配、具体承诺兑现与时间线破绽的追究" : "Distract from broken commitments, material profit-sharing, or underlying faults",
          fatalFlawExcerpt: customText.slice(0, Math.min(60, customText.length)),
          fatalFlawReason:
            lang === "zh"
              ? "开篇定调偏向主观情绪宣泄，一旦受众要求看客观证据，极易遭遇舆论反噬。"
              : "Opening relies heavily on subjective framing; highly vulnerable once objective receipts emerge.",
          radarScores: {
            sincerity: 25,
            calculation: 85,
            prSkill: 60,
            backfireRisk: 86,
          },
          juryVerdict: {
            agreeSpinPercent: 18,
            seeThroughPercent: 82,
          },
        },
      };
      setCustomCase(generated);
      setIsAnalyzing(false);
    }, 600);
  }

  return (
    <div className="w-full">
      {/* Hero Intro */}
      <div className="text-center py-6 md:py-10 max-w-[840px] mx-auto">
        <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-pause/10 border border-pause/30 text-pause text-xs font-bold uppercase tracking-wider mb-4">
          <span>{t.courtBadge}</span>
          <button
            type="button"
            onClick={toggleLang}
            className="ml-1 pl-2 border-l border-pause/40 hover:underline cursor-pointer text-[11px]"
          >
            {lang === "zh" ? "Switch to English 🌐" : "切换为中文 🌐"}
          </button>
        </div>
        <h1 className="text-display-xl text-ink font-semibold">
          {t.heroTitle}
        </h1>
        <p className="text-body-lg text-muted mt-3 max-w-[620px] mx-auto">
          {t.heroDesc}
        </p>

        {/* Toggle Mode */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            className={!isCustomMode ? "btn btn-primary cursor-pointer" : "btn btn-secondary cursor-pointer"}
            onClick={() => setIsCustomMode(false)}
          >
            {t.tabHot}
          </button>
          <button
            type="button"
            className={isCustomMode ? "btn btn-primary cursor-pointer" : "btn btn-secondary cursor-pointer"}
            onClick={() => setIsCustomMode(true)}
          >
            {t.tabCustom}
          </button>
        </div>
      </div>

      {!isCustomMode ? (
        /* Platform Filters & Multi-column Dossiers Grid */
        <div className="mt-2 mb-6">
          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-3 justify-start md:justify-center no-scrollbar text-xs font-semibold">
            {platforms.map((plat) => (
              <button
                key={plat}
                type="button"
                onClick={() => setSelectedPlatformFilter(plat)}
                className={[
                  "px-3.5 py-1.5 rounded-full border transition-all shrink-0 cursor-pointer",
                  selectedPlatformFilter === plat
                    ? "bg-pause text-white border-pause shadow-sm"
                    : "bg-surface text-muted border-line hover:border-line-strong",
                ].join(" ")}
              >
                {plat}
              </button>
            ))}
          </div>

          {/* Grid Archive Bar Header */}
          <div className="flex items-center justify-between mt-3 mb-2 px-1 text-xs text-muted font-medium">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <span>📂</span>
              <span>
                {lang === "zh"
                  ? `案卷档案架 (共 ${filteredCases.length} 宗，点击即刻审判)`
                  : `Case Dossier Archive (${filteredCases.length} Total Cases)`}
              </span>
            </span>
            {filteredCases.length > 8 && (
              <button
                type="button"
                onClick={() => setIsExpandedAll(!isExpandedAll)}
                className="text-pause font-semibold hover:underline cursor-pointer text-xs"
              >
                {isExpandedAll
                  ? (lang === "zh" ? "收起部分案卷 ↑" : "Show Fewer ↑")
                  : (lang === "zh" ? `展开全部 ${filteredCases.length} 宗案卷 ↓` : `View All ${filteredCases.length} Cases ↓`)}
              </button>
            )}
          </div>

          {/* Responsive Multi-column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-1">
            {displayedCases.map((rawC) => {
              const c = getLocalizedCase(rawC, lang);
              const active = c.id === activeCaseId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectCase(c.id)}
                  className={[
                    "relative flex flex-col justify-between p-4 rounded-[var(--radius-lg)] border text-left transition-all cursor-pointer h-full group",
                    active
                      ? "bg-ink text-canvas border-ink shadow-lg ring-2 ring-pause scale-[1.02]"
                      : "bg-surface border-line hover:border-pause/50 text-ink hover:shadow-md",
                  ].join(" ")}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xl shrink-0">{c.avatar}</span>
                      <span
                        className={[
                          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0",
                          active
                            ? "bg-white/10 text-pause border-pause/40"
                            : "bg-pause/10 text-pause border-pause/20",
                        ].join(" ")}
                      >
                        {c.platformIcon} {c.platform.split(" ")[0]}
                      </span>
                    </div>

                    <p className="text-xs font-bold leading-snug line-clamp-2 text-inherit group-hover:text-pause transition-colors">
                      {c.title}
                    </p>

                    <p
                      className={[
                        "text-[11px] mt-1.5 line-clamp-2 leading-relaxed",
                        active ? "text-canvas/70" : "text-muted",
                      ].join(" ")}
                    >
                      {c.subtitle}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-line/40 flex items-center justify-between text-[11px] font-semibold">
                    <span className={active ? "text-[#8DB8C0]" : "text-subtle"}>
                      {c.tag}
                    </span>
                    <span className="text-[#D76A5C] font-bold">
                      {c.analysis.verdictScore}% {lang === "zh" ? "翻车" : "Risk"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Custom Statement Form */
        <div className="max-w-[760px] mx-auto mb-8 card p-6 md:p-8 border-2 border-primary/20 bg-surface">
          <h2 className="text-heading-3 text-ink">{t.customHeader}</h2>
          <p className="text-small text-muted mt-1">
            {t.customDesc}
          </p>
          <form onSubmit={runCustomAnalysis} className="mt-4 space-y-4">
            <div>
              <div className="flex gap-4 mb-2">
                {["吃瓜拆解", "发前排雷"].map((role) => (
                  <label
                    key={role}
                    className="radio-row text-xs font-semibold cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      checked={customRole === role}
                      onChange={() => setCustomRole(role)}
                    />
                    <span>{role === "吃瓜拆解" ? t.roleWatch : t.roleCheck}</span>
                  </label>
                ))}
              </div>
              <textarea
                className="field w-full"
                rows={5}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={t.placeholder}
              />
            </div>
            <button
              type="submit"
              disabled={isAnalyzing || !customText.trim()}
              className="btn btn-primary w-full py-3 cursor-pointer"
            >
              {isAnalyzing ? t.btnAnalyzing : t.btnAnalyze}
            </button>
          </form>
        </div>
      )}

      {/* Main Dossier Report Card Anchor */}
      <div ref={reportSectionRef} className="pt-2">
        {/* Main Dossier Report Card (Exact container captured for sharing) */}
        <div
          ref={cardRef}
          id="dossier-report-card"
          className="w-full max-w-[840px] mx-auto mt-4 bg-ink text-canvas rounded-[var(--radius-xl)] p-6 md:p-8 border border-line-strong shadow-2xl overflow-hidden box-border"
        >
          {/* Dossier Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentCase.avatar}</span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-pause flex items-center gap-1.5">
                  <span>{currentCase.platformIcon}</span>
                  <span>{currentCase.platform}</span>
                  <span>·</span>
                  <span>{currentCase.tag}</span>
                </span>
              </div>
              <h2 className="text-heading-2 mt-1 text-canvas font-bold">
                {currentCase.title}
              </h2>
              <p className="text-small text-canvas/70 mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            <div className="shrink-0 -rotate-3 border-2 border-[#D76A5C] bg-[#D76A5C]/15 px-4 py-2 text-center rounded-[var(--radius-sm)]">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#D76A5C]">
                {t.backfireIndex}
              </p>
              <p className="text-2xl font-black text-[#D76A5C]">
                {currentCase.analysis.verdictScore}%
              </p>
            </div>
          </div>

          {/* Raw Quote */}
          <div className="my-6 bg-white/5 border-l-4 border-pause p-4 rounded-r-[var(--radius-md)]">
            <p className="text-xs uppercase font-bold tracking-wider text-pause">
              {t.rawExcerpt}
            </p>
            <p className="font-display italic text-body-lg text-canvas/90 mt-2">
              {currentCase.originalExcerpt}
            </p>
          </div>

          {/* Headline Judgement */}
          <div className="my-6">
            <p className="text-xs uppercase font-bold tracking-wider text-[#8DB8C0]">
              {t.coreJudgement}
            </p>
            <p className="font-display text-2xl font-semibold text-canvas mt-1">
              “{currentCase.analysis.headline}”
            </p>
          </div>

          {/* Sharp Manipulation Tactics Box */}
          {currentCase.tactics && currentCase.tactics.length > 0 && (
            <div className="my-6 p-5 bg-pause/10 border border-pause/30 rounded-[var(--radius-md)]">
              <p className="text-xs font-bold uppercase tracking-wider text-pause flex items-center gap-1.5">
                {t.tacticsTitle}
              </p>
              <div className="grid md:grid-cols-3 gap-3 mt-3 text-xs">
                {currentCase.tactics.map((tactic) => (
                  <div key={tactic.title} className="bg-black/30 p-3 rounded border border-white/10">
                    <p className="font-bold" style={{ color: tactic.color }}>{tactic.title}</p>
                    <p className="text-canvas/80 mt-1 leading-relaxed">
                      {tactic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stated vs Hidden Grid */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white/5 border border-white/10 rounded-[var(--radius-md)] p-5">
              <div className="flex items-center gap-2 text-[#8DB8C0] font-bold text-sm">
                {t.statedPersona}
              </div>
              <p className="text-small text-canvas/85 mt-2 leading-relaxed">
                {currentCase.analysis.statedPersona}
              </p>
            </div>

            <div className="bg-[#D76A5C]/10 border border-[#D76A5C]/30 rounded-[var(--radius-md)] p-5">
              <div className="flex items-center gap-2 text-[#D76A5C] font-bold text-sm">
                {t.hiddenAgenda}
              </div>
              <p className="text-small text-canvas/95 mt-2 leading-relaxed">
                {currentCase.analysis.hiddenAgenda}
              </p>
            </div>
          </div>

          {/* Desired Takeaway vs Distraction */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white/5 border border-white/10 rounded-[var(--radius-md)] p-4 border-l-4 border-l-white/40">
              <p className="text-xs uppercase font-bold tracking-wider text-canvas/60">
                {t.desiredTakeaway}
              </p>
              <p className="text-small font-medium text-canvas/90 mt-1">
                {currentCase.analysis.desiredPublicTakeaway}
              </p>
            </div>
            <div className="bg-[#D76A5C]/10 border border-[#D76A5C]/25 rounded-[var(--radius-md)] p-4 border-l-4 border-l-[#D76A5C]">
              <p className="text-xs uppercase font-bold tracking-wider text-[#D76A5C]">
                {t.distractionTarget}
              </p>
              <p className="text-small font-medium text-canvas/90 mt-1">
                {currentCase.analysis.distractionTarget}
              </p>
            </div>
          </div>

          {/* Fatal Flaw Highlight */}
          <div className="my-6 bg-red-950/20 border border-red-800/40 rounded-[var(--radius-md)] p-5">
            <p className="text-xs uppercase font-bold tracking-wider text-[#D76A5C] flex items-center gap-1">
              {t.fatalFlawTitle}
            </p>
            <blockquote className="mt-2 font-display italic text-lg text-canvas border-l-2 border-[#D76A5C] pl-3 py-0.5">
              “{currentCase.analysis.fatalFlawExcerpt}”
            </blockquote>
            <p className="text-small text-canvas/75 mt-3">
              <strong className="text-canvas">{t.fatalFlawAnalysis}</strong>
              {currentCase.analysis.fatalFlawReason}
            </p>
          </div>

          {/* Radar Metric Bars */}
          <div className="my-6 pt-4 border-t border-white/15">
            <p className="text-xs uppercase font-bold tracking-wider text-canvas/70 mb-3">
              {t.radarTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  label: t.radarSincerity,
                  val: currentCase.analysis.radarScores.sincerity,
                  color: "#8FAE8B",
                },
                {
                  label: t.radarCalculation,
                  val: currentCase.analysis.radarScores.calculation,
                  color: "#D76A5C",
                },
                {
                  label: t.radarSpin,
                  val: currentCase.analysis.radarScores.prSkill,
                  color: "#D7A15C",
                },
                {
                  label: t.radarBackfire,
                  val: currentCase.analysis.radarScores.backfireRisk,
                  color: "#E05A47",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-white/5 border border-white/10 p-3 rounded-[var(--radius-sm)]"
                >
                  <div className="flex justify-between text-xs text-canvas/70 font-semibold">
                    <span>{m.label}</span>
                    <span>{m.val}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{ width: m.val + "%", backgroundColor: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Jury Voting */}
          <div className="my-8 p-5 bg-white/5 border border-white/10 rounded-[var(--radius-lg)] text-center">
            <p className="text-xs uppercase font-bold tracking-wider text-pause mb-1">
              {t.juryPollTitle}
            </p>
            <h3 className="text-heading-3 text-canvas font-medium">
              {t.juryPollQuestion}
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={() => handleVote("see_through")}
                className={[
                  "px-6 py-2.5 rounded-full font-semibold text-sm transition-all border cursor-pointer",
                  userVote === "see_through"
                    ? "bg-[#D76A5C] text-white border-[#D76A5C] scale-105"
                    : "bg-white/10 hover:bg-white/20 text-canvas border-white/20",
                ].join(" ")}
              >
                {t.btnSeeThrough} (
                {currentCase.analysis.juryVerdict.seeThroughPercent}%)
              </button>

              <button
                type="button"
                onClick={() => handleVote("believe")}
                className={[
                  "px-6 py-2.5 rounded-full font-semibold text-sm transition-all border cursor-pointer",
                  userVote === "believe"
                    ? "bg-[#8FAE8B] text-white border-[#8FAE8B] scale-105"
                    : "bg-white/10 hover:bg-white/20 text-canvas border-white/20",
                ].join(" ")}
              >
                {t.btnBelieve} (
                {currentCase.analysis.juryVerdict.agreeSpinPercent}%)
              </button>
            </div>
            {userVote && (
              <p className="text-xs text-[#8DB8C0] mt-3">
                {t.voteRecorded}
              </p>
            )}
          </div>

          {/* Footer Signature watermark inside the exported poster */}
          <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs text-canvas/60">
            <span className="font-display italic text-sm text-canvas/80">
              {t.watermark}
            </span>
            <span className="font-semibold text-pause">
              {t.watermarkBrand}
            </span>
          </div>
        </div>
      </div>

      {/* Share Action Buttons (Outside the captured card) */}
      <div className="max-w-[840px] mx-auto mt-4 p-5 bg-surface border border-line rounded-[var(--radius-lg)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-ink">
            {t.shareTitle}
          </p>
          <p className="text-xs text-muted">
            {t.shareDesc}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyImage}
            disabled={generatingImg}
            className="btn btn-primary text-xs cursor-pointer"
          >
            {generatingImg ? t.btnCopying : t.btnCopyImage}
          </button>
          <button
            type="button"
            onClick={handleDownloadImage}
            disabled={generatingImg}
            className="btn btn-secondary text-xs cursor-pointer"
          >
            {t.btnSaveImage}
          </button>
        </div>
      </div>

      {copiedStatus && (
        <div className="max-w-[840px] mx-auto mt-3 p-3 text-center text-xs font-semibold bg-success-bg text-success-fg border border-[#8FAE8B]/40 rounded-[var(--radius-sm)]">
          {copiedStatus}
        </div>
      )}
    </div>
  );
}
