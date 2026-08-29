"use client";

import { useEffect, useMemo, useState } from "react";
import type { BasicResult } from "@/shared/contracts/check";
import {
  buildShareCaption,
  buildShareVisualData,
  renderShareImage,
  VERDICT_ACCENTS,
  type ShareImageFormat,
  type ShareVerdict,
  type ShareVisualData,
} from "./shareImage";

interface ShareCardProps {
  result: BasicResult;
}

function StampBadge({ stampText, accent }: { stampText: string; accent: string }) {
  return (
    <span
      className="inline-block -rotate-6 border-[3px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em]"
      style={{ color: accent, borderColor: accent, backgroundColor: `${accent}1f` }}
    >
      {stampText}
    </span>
  );
}

function VisualCard({ data, format }: { data: ShareVisualData; format: ShareImageFormat }) {
  const story = format === "story";
  const accent = VERDICT_ACCENTS[data.verdict];
  return (
    <div
      className={[
        "relative mx-auto w-full max-w-[430px] overflow-hidden border border-white/20 bg-ink text-canvas shadow-[0_22px_70px_rgba(24,36,34,0.24)]",
        story ? "aspect-[9/16]" : "aspect-[4/5]",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(8deg, rgba(244,240,232,0.035) 0, rgba(244,240,232,0.035) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <div className={story ? "relative flex h-full flex-col p-8 sm:p-10" : "relative flex h-full flex-col p-7 sm:p-9"}>
        <div className="flex items-start justify-between gap-4">
          <p className="pt-2 font-semibold tracking-[0.12em] text-canvas">Before You Send</p>
          <StampBadge stampText={data.stampText} accent={accent} />
        </div>

        <div className={story ? "mt-20" : "mt-10"}>
          <p
            className={[
              "font-display font-semibold leading-[1.06] text-canvas",
              story ? "text-[34px] sm:text-[42px]" : "text-[30px] sm:text-[34px]",
            ].join(" ")}
          >
            {data.headline}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {data.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/35 bg-white/5 px-4 py-1.5 text-xs font-semibold text-canvas"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-white/20 pt-5">
          <p className="font-display text-base italic text-canvas">
            The message stays private. The realization doesn\u2019t.
          </p>
          <p className="mt-2 flex items-center justify-between text-xs text-canvas/60">
            <span>decisioncourt.lol</span>
            <span className="font-semibold" style={{ color: accent }}>
              check yours \u2192
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ShareCard({ result }: ShareCardProps) {
  const [format, setFormat] = useState<ShareImageFormat>("feed");
  const [link, setLink] = useState("https://decisioncourt.lol/checked");
  const [canShareImage, setCanShareImage] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "working" | "saved" | "copied" | "image-copied"
  >("idle");
  const data = useMemo(() => buildShareVisualData(result), [result]);
  const accent = VERDICT_ACCENTS[data.verdict];

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setLink(`${window.location.origin}/checked`);
    }
    const probe = new File(["share"], "before-you-send.png", { type: "image/png" });
    setCanShareImage(Boolean(navigator.canShare?.({ files: [probe] })));
  }, []);

  function downloadImage() {
    setStatus("working");
    try {
      const asset = renderShareImage(data, format);
      const anchor = document.createElement("a");
      anchor.href = asset.dataUrl;
      anchor.download = asset.file.name;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setStatus("saved");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
    }
  }

  async function copyImage() {
    setStatus("working");
    try {
      const asset = renderShareImage(data, format);
      if (typeof ClipboardItem === "undefined") {
        downloadImage();
        return;
      }
      await navigator.clipboard.write([new ClipboardItem({ "image/png": asset.file })]);
      setStatus("image-copied");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
    }
  }

  async function shareImage() {
    setStatus("working");
    try {
      const asset = renderShareImage(data, format);
      await navigator.share({ files: [asset.file], text: buildShareCaption(link, data.verdict) });
    } catch {
      // Closing the native share sheet is not an error state.
    } finally {
      setStatus("idle");
    }
  }

  async function copyCaption() {
    try {
      await navigator.clipboard.writeText(buildShareCaption(link, data.verdict));
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section className="mt-8 reveal" aria-labelledby="share-card-title">
      <p className="eyebrow">Share card</p>
      <div className="card mt-3 p-5 md:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="share-card-title" className="text-heading-3">
              Get your verdict card.
            </h2>
            <p className="mt-1 max-w-[52ch] text-small text-muted">
              A shareable stamp for what almost went out \u2014 never your draft,
              excerpt, recipient, or context. Collect all three.
            </p>
          </div>
          <div className="flex gap-2" aria-label="Image format">
            <button
              type="button"
              className={format === "feed" ? "btn btn-primary" : "btn btn-secondary"}
              aria-pressed={format === "feed"}
              onClick={() => setFormat("feed")}
            >
              Feed 4:5
            </button>
            <button
              type="button"
              className={format === "story" ? "btn btn-primary" : "btn btn-secondary"}
              aria-pressed={format === "story"}
              onClick={() => setFormat("story")}
            >
              Story 9:16
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-[var(--radius-lg)] bg-canvas p-4 sm:p-7">
          <VisualCard data={data} format={format} />
        </div>

        <div
          className="mt-5 rounded-[var(--radius-md)] border p-4"
          style={{ borderColor: `${accent}55`, backgroundColor: `${accent}0d` }}
        >
          <p className="text-label uppercase tracking-[0.08em]" style={{ color: accent }}>
            Caption paired with this stamp
          </p>
          <p className="mt-2 whitespace-pre-wrap text-body text-ink">
            {buildShareCaption(link, data.verdict)}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={copyImage}
            disabled={status === "working"}
          >
            {status === "image-copied" ? "Image copied \u2014 paste it" : "Copy image + caption"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={downloadImage}
            disabled={status === "working"}
          >
            {status === "working"
              ? "Making image\u2026"
              : status === "saved"
                ? "PNG saved"
                : "Download PNG"}
          </button>
          {canShareImage && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={shareImage}
              disabled={status === "working"}
            >
              Share image
            </button>
          )}
          <button type="button" className="btn btn-quiet" onClick={copyCaption}>
            {status === "copied" ? "Caption copied" : "Copy caption only"}
          </button>
          <span className="text-small text-muted">PNG \u00b7 no account \u00b7 no draft content</span>
        </div>
      </div>
    </section>
  );
}
