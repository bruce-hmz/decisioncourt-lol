import type { BasicResult } from "@/shared/contracts/check";

export type ShareImageFormat = "feed" | "story";

/**
 * The three shareable verdicts. Each is a recognizable badge people collect
 * and compare, which is what drives repeat sharing.
 */
export type ShareVerdict = "caught" | "unclear" | "cleared";

export interface ShareVisualData {
  verdict: ShareVerdict;
  stampText: string;
  headline: string;
  chips: string[];
}

export const VERDICT_ACCENTS: Record<ShareVerdict, string> = {
  caught: "#D76A5C",
  unclear: "#D7A15C",
  cleared: "#8FAE8B",
};

const VERDICT_COPY: Record<ShareVerdict, { stampText: string; headline: string }> = {
  caught: {
    stampText: "CAUGHT BEFORE SEND",
    headline: "I almost sent a message working against my own goal.",
  },
  unclear: {
    stampText: "MISSING CONTEXT",
    headline: "I almost sent a message that only made sense in my head.",
  },
  cleared: {
    stampText: "CLEARED TO SEND",
    headline: "I checked it before sending. Clean pass.",
  },
};

const KILLER_LINE = "The message stays private. The realization doesn\u2019t.";
const DOMAIN = "decisioncourt.lol";

function verdictFor(assessment: BasicResult["assessment"]): ShareVerdict {
  if (assessment === "GOAL_ALIGNED") return "cleared";
  if (assessment === "CRITICAL_CONTEXT_MISSING") return "unclear";
  return "caught";
}

function pluralCount(count: number, singular: string, plural: string): string {
  return count === 1 ? `1 ${singular}` : `${count} ${plural}`;
}

/**
 * Receipt-style stat chips. Counts are generic and never quote the draft,
 * so the card can go on a public timeline safely.
 */
function buildChips(result: BasicResult): string[] {
  const chips: string[] = [];
  const interpretations = result.possible_interpretations.length;
  if (interpretations > 0) {
    chips.push(pluralCount(interpretations, "way it could land", "ways it could land"));
  }
  chips.push(
    result.highest_risk_excerpt
      ? "1 line doing the damage"
      : "no single line to blame",
  );
  const changers = result.decision_changers.length;
  if (changers > 0) {
    chips.push(pluralCount(changers, "thing that would change it", "things that would change it"));
  }
  return chips;
}

export function buildShareVisualData(result: BasicResult): ShareVisualData {
  const verdict = verdictFor(result.assessment);
  return {
    verdict,
    stampText: VERDICT_COPY[verdict].stampText,
    headline: VERDICT_COPY[verdict].headline,
    chips: buildChips(result),
  };
}

export function buildShareCaption(link: string, verdict: ShareVerdict): string {
  const hook =
    verdict === "cleared"
      ? "I check before I send."
      : "I almost sent it. Then I checked.";
  return `${hook}\n${link}`;
}

function wrapText(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (context.measureText(candidate).width <= maxWidth || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function fontFamily(variable: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
}

function drawStamp(
  context: CanvasRenderingContext2D,
  stampText: string,
  accent: string,
  centerX: number,
  centerY: number,
  maxWidth: number,
): void {
  const sans = fontFamily("--font-dm-sans", "sans-serif");
  const baseFontSize = 30;
  context.font = `700 ${baseFontSize}px ${sans}`;
  const textWidth = context.measureText(stampText).width;
  const fontSize = Math.max(
    20,
    Math.min(baseFontSize, baseFontSize * (maxWidth / (textWidth + 48))),
  );
  context.font = `700 ${fontSize}px ${sans}`;
  const boxWidth = context.measureText(stampText).width + 48;
  const boxHeight = fontSize + 30;

  context.save();
  context.translate(centerX, centerY);
  context.rotate((-6 * Math.PI) / 180);
  context.globalAlpha = 0.12;
  context.fillStyle = accent;
  context.fillRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);
  context.globalAlpha = 1;
  context.strokeStyle = accent;
  context.lineWidth = 3;
  context.strokeRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);
  context.fillStyle = accent;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.letterSpacing = "3px";
  context.fillText(stampText, 0, 1);
  context.restore();
  context.letterSpacing = "0px";
  context.textAlign = "left";
  context.textBaseline = "alphabetic";
}

function drawChip(
  context: CanvasRenderingContext2D,
  label: string,
  x: number,
  y: number,
): number {
  const sans = fontFamily("--font-dm-sans", "sans-serif");
  const fontSize = 26;
  context.font = `600 ${fontSize}px ${sans}`;
  const width = context.measureText(label).width + 44;
  const height = 56;
  context.beginPath();
  if (typeof context.roundRect === "function") {
    context.roundRect(x, y, width, height, height / 2);
  } else {
    context.rect(x, y, width, height);
  }
  context.fillStyle = "rgba(244,240,232,0.06)";
  context.fill();
  context.strokeStyle = "rgba(244,240,232,0.35)";
  context.lineWidth = 2;
  context.stroke();
  context.fillStyle = "#F4F0E8";
  context.textBaseline = "middle";
  context.fillText(label, x + 22, y + height / 2 + 1);
  context.textBaseline = "alphabetic";
  return width;
}

function drawChips(
  context: CanvasRenderingContext2D,
  chips: string[],
  x: number,
  y: number,
  maxWidth: number,
): number {
  const gap = 18;
  const rowHeight = 74;
  let cursorX = x;
  let cursorY = y;
  for (const chip of chips) {
    const sans = fontFamily("--font-dm-sans", "sans-serif");
    context.font = `600 26px ${sans}`;
    const chipWidth = context.measureText(chip).width + 44;
    if (cursorX + chipWidth > x + maxWidth && cursorX > x) {
      cursorX = x;
      cursorY += rowHeight;
    }
    cursorX += drawChip(context, chip, cursorX, cursorY) + gap;
  }
  return cursorY + 56;
}

export interface ShareImageAsset {
  dataUrl: string;
  file: File;
}

export function renderShareImage(
  data: ShareVisualData,
  format: ShareImageFormat,
): ShareImageAsset {
  const story = format === "story";
  const width = 1080;
  const height = story ? 1920 : 1350;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to create share image.");

  const sans = fontFamily("--font-dm-sans", "sans-serif");
  const serif = fontFamily("--font-newsreader", "Georgia, serif");
  const accent = VERDICT_ACCENTS[data.verdict];
  const padding = 84;
  const contentWidth = width - padding * 2;

  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#263633");
  background.addColorStop(1, "#14201E");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(244,240,232,0.22)";
  context.lineWidth = 2;
  context.strokeRect(28, 28, width - 56, height - 56);

  context.fillStyle = "#F4F0E8";
  context.font = `600 27px ${sans}`;
  context.letterSpacing = "3px";
  context.textBaseline = "alphabetic";
  context.fillText("BEFORE YOU SEND", padding, 122);
  context.letterSpacing = "0px";
  drawStamp(context, data.stampText, accent, width - padding - 200, 104, contentWidth * 0.46);

  const headlineSize = story ? 100 : 88;
  const headlineLineHeight = story ? 122 : 104;
  let cursorY = story ? 400 : 320;
  context.fillStyle = "#F4F0E8";
  context.font = `600 ${headlineSize}px ${serif}`;
  const headlineLines = wrapText(context, data.headline, contentWidth);
  cursorY = drawWrappedHeadline(
    context,
    headlineLines,
    padding,
    cursorY,
    headlineLineHeight,
  );

  cursorY = drawChips(context, data.chips, padding, cursorY + (story ? 90 : 70), contentWidth);

  const footerDividerY = height - 226;
  context.strokeStyle = "rgba(244,240,232,0.22)";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(padding, footerDividerY);
  context.lineTo(width - padding, footerDividerY);
  context.stroke();

  context.fillStyle = "#F4F0E8";
  context.font = `600 italic 36px ${serif}`;
  context.fillText(KILLER_LINE, padding, footerDividerY + 72);

  context.fillStyle = "rgba(244,240,232,0.66)";
  context.font = `500 24px ${sans}`;
  context.fillText(DOMAIN, padding, footerDividerY + 126);
  context.textAlign = "right";
  context.fillStyle = accent;
  context.font = `600 24px ${sans}`;
  context.fillText("check yours \u2192", width - padding, footerDividerY + 126);
  context.textAlign = "left";

  const dataUrl = canvas.toDataURL("image/png");
  const encoded = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return {
    dataUrl,
    file: new File([bytes], `before-you-send-${format}.png`, { type: "image/png" }),
  };
}

function drawWrappedHeadline(
  context: CanvasRenderingContext2D,
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
): number {
  lines.forEach((line, index) => context.fillText(line, x, y + index * lineHeight));
  return y + (lines.length - 1) * lineHeight;
}
