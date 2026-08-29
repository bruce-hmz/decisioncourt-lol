import type { BasicResult } from "@/shared/contracts/check";

interface Props {
  goalLine: string;
  result: BasicResult;
  onEditRecheck: () => void;
  onStartCooldown: () => void;
  onClear: () => void;
}

const ASSESSMENT_TITLES: Record<BasicResult["assessment"], string> = {
  GOAL_ALIGNED: "No obvious conflict with your goal found.",
  GOAL_MISALIGNED: "Some wording may work against your goal.",
  CRITICAL_CONTEXT_MISSING: "One missing detail changes this check.",
};

export function BasicResultPanel({
  goalLine,
  result,
  onEditRecheck,
  onStartCooldown,
  onClear,
}: Props) {
  return (
    <section aria-labelledby="result-title" className="max-w-[760px] mx-auto fade-swap">
      <div className="card p-6 md:p-10">
        <p className="eyebrow">Your goal</p>
        <p className="text-body-lg mt-1 font-medium">{goalLine}</p>

        <h2 id="result-title" tabIndex={-1} className="text-display-lg mt-8 focus:outline-none">
          {ASSESSMENT_TITLES[result.assessment]}
        </h2>
        <p className="text-body-lg mt-2">{result.summary}</p>
        <p className="text-small text-muted mt-2">
          This is not a recommendation to send or wait.
        </p>

        <hr className="rule my-8" />

        <ResultSection title="The assumption doing the most work">
          <p className="text-body-lg border-l-4 border-primary pl-4">
            {result.hidden_assumption}
          </p>
        </ResultSection>

        <ResultSection title="The line most likely to derail the goal">
          {result.highest_risk_excerpt ? (
            <blockquote className="text-body-lg border-l-4 border-pause pl-4 py-1 text-ink">
              <span aria-hidden="true" className="text-pause text-[28px] leading-none align-[-6px] mr-1">
                &ldquo;
              </span>
              {result.highest_risk_excerpt}
            </blockquote>
          ) : (
            <p className="text-body-lg text-muted">
              No single line stood out more than the overall pattern.
            </p>
          )}
        </ResultSection>

        <ResultSection title="How it could land">
          <ul className="space-y-2">
            {result.possible_interpretations.map((interp, i) => (
              <li key={i} className="text-body-lg">{interp}</li>
            ))}
          </ul>
        </ResultSection>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="rounded-[var(--radius-md)] border border-line p-5 bg-surface">
            <h3 className="text-label text-subtle">An honest case for sending</h3>
            <p className="mt-2">{result.case_for_sending}</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-line p-5 bg-surface">
            <h3 className="text-label text-subtle">An honest case for pausing</h3>
            <p className="mt-2">{result.case_for_pausing}</p>
          </div>
        </div>

        <ResultSection title="What would change this check">
          <ol className="list-decimal list-inside space-y-2">
            {result.decision_changers.map((dc, i) => (
              <li key={i} className="text-body-lg">{dc}</li>
            ))}
          </ol>
        </ResultSection>

        <div className="flex flex-wrap gap-3 mt-10">
          <button type="button" className="btn btn-secondary" onClick={onEditRecheck}>
            Edit and recheck
          </button>
          <button type="button" className="btn btn-secondary" onClick={onStartCooldown}>
            Take 10 minutes
          </button>
          <button type="button" className="btn btn-danger" onClick={onClear}>
            Clear this check
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-8">
      <h3 className="text-label text-subtle uppercase tracking-[0.08em]">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}
