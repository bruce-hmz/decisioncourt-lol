import { useEffect, useState } from "react";

interface Props {
  endsAt: number;
  onEnd: () => void;
  onReview: () => void;
}

export function CooldownPanel({ endsAt, onEnd, onReview }: Props) {
  const [remainingMs, setRemainingMs] = useState(() => Math.max(0, endsAt - Date.now()));

  useEffect(() => {
    const tick = () => setRemainingMs(Math.max(0, endsAt - Date.now()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const finished = totalSeconds === 0;
  const progress = Math.min(1, Math.max(0, remainingMs / (10 * 60 * 1000)));

  return (
    <section aria-live="polite" className="max-w-[520px] mx-auto card p-6 md:p-10 text-center fade-swap">
      <h2 className="text-heading-2">
        {finished ? "Ten minutes have passed." : "A ten-minute pause"}
      </h2>
      {finished ? (
        <p className="mt-3 text-body-lg">
          Read your goal and draft once more before deciding.
        </p>
      ) : (
        <p className="text-timer mt-8 font-mono" style={{ color: "var(--color-pause)" }}>
          {minutes}:{seconds}
        </p>
      )}
      {!finished && (
        <div
          className="mt-4 h-1 rounded-full bg-pause-soft overflow-hidden"
          role="presentation"
        >
          <div
            className="h-full bg-pause transition-[width] duration-1000 ease-linear"
            style={{ width: (progress * 100).toFixed(1) + "%" }}
          />
        </div>
      )}
      <p className="text-small text-muted mt-6">
        Your draft stays in this tab. Closing or refreshing ends the timer; we do
        not save it.
      </p>
      <div className="flex flex-col gap-3 mt-8">
        <button type="button" className="btn btn-secondary" onClick={onReview}>
          Review or edit draft
        </button>
        <button type="button" className="btn btn-quiet" onClick={onEnd}>
          End pause
        </button>
      </div>
    </section>
  );
}
