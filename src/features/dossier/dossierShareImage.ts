import type { HotCase } from "@/shared/content/cases";

export interface DossierShareAsset {
  dataUrl: string;
  file: File;
}

export function renderDossierShareImage(c: HotCase): DossierShareAsset {
  const width = 1080;
  const height = 1860;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context unavailable");

  // Dark investigative editorial background (matches web UI #182422)
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#182422");
  bg.addColorStop(1, "#0f1716");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Subtle grid texture
  ctx.strokeStyle = "rgba(244,240,232,0.035)";
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 36) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Outer border
  ctx.strokeStyle = "rgba(215, 161, 92, 0.28)";
  ctx.lineWidth = 2;
  ctx.strokeRect(32, 32, width - 64, height - 64);

  const padding = 64;
  const contentWidth = width - padding * 2;

  // 1. Header Tag & Source
  ctx.fillStyle = "#D7A15C";
  ctx.font = "700 22px system-ui, sans-serif";
  ctx.letterSpacing = "1.5px";
  ctx.fillText(`${c.avatar} ${c.tag} · ${c.sourceDate}`, padding, 88);

  ctx.fillStyle = "rgba(244,240,232,0.6)";
  ctx.font = "500 16px system-ui, sans-serif";
  ctx.letterSpacing = "0px";
  ctx.fillText(`DECISION COURT 官方透视案卷 · #${c.id.toUpperCase()}`, padding, 118);

  // 2. Big Verdict Stamp on Top-Right
  ctx.save();
  ctx.translate(width - padding - 100, 100);
  ctx.rotate((-6 * Math.PI) / 180);
  ctx.fillStyle = "rgba(215, 106, 92, 0.18)";
  ctx.fillRect(-110, -38, 220, 76);
  ctx.strokeStyle = "#D76A5C";
  ctx.lineWidth = 3;
  ctx.strokeRect(-110, -38, 220, 76);
  ctx.fillStyle = "#D76A5C";
  ctx.font = "700 14px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("翻车危险指数", 0, -12);
  ctx.font = "900 32px system-ui, sans-serif";
  ctx.fillText(`${c.analysis.verdictScore}%`, 0, 22);
  ctx.restore();

  // 3. Case Title & Subtitle
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#F4F0E8";
  ctx.font = "700 36px Georgia, serif";
  const titleLines = wrapText(ctx, c.title, contentWidth - 240);
  let curY = 190;
  for (const line of titleLines) {
    ctx.fillText(line, padding, curY);
    curY += 46;
  }
  ctx.fillStyle = "rgba(244,240,232,0.7)";
  ctx.font = "400 20px system-ui, sans-serif";
  ctx.fillText(c.subtitle, padding, curY);
  curY += 36;

  // 4. Raw Excerpt Card (原长文公开节选)
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  const excerptLines = wrapText(ctx, c.originalExcerpt, contentWidth - 40);
  const excerptH = 40 + excerptLines.length * 30 + 16;
  ctx.fillRect(padding, curY, contentWidth, excerptH);
  ctx.fillStyle = "#D7A15C";
  ctx.fillRect(padding, curY, 5, excerptH);

  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("原小作文公开节选:", padding + 20, curY + 28);
  ctx.fillStyle = "rgba(244,240,232,0.9)";
  ctx.font = "italic 400 19px Georgia, serif";
  let ey = curY + 60;
  for (const el of excerptLines) {
    ctx.fillText(el, padding + 20, ey);
    ey += 30;
  }
  curY += excerptH + 28;

  // 5. Core Headline (陪审团一句话定性)
  ctx.fillStyle = "#8DB8C0";
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText("💡 陪审团一句话定性", padding, curY);
  curY += 32;

  ctx.fillStyle = "#F4F0E8";
  ctx.font = "600 26px Georgia, serif";
  const headlineLines = wrapText(ctx, `“${c.analysis.headline}”`, contentWidth);
  for (const hl of headlineLines) {
    ctx.fillText(hl, padding, curY);
    curY += 36;
  }
  curY += 20;

  // 6. Stated Persona vs Hidden Agenda (2 Cards)
  const cardW = (contentWidth - 20) / 2;
  const pLines = wrapText(ctx, c.analysis.statedPersona, cardW - 36);
  const hLines = wrapText(ctx, c.analysis.hiddenAgenda, cardW - 36);
  const cardH = Math.max(160, 60 + Math.max(pLines.length, hLines.length) * 28);

  // Left Card: 表层人设
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.fillRect(padding, curY, cardW, cardH);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.strokeRect(padding, curY, cardW, cardH);
  ctx.fillStyle = "#8DB8C0";
  ctx.font = "700 17px system-ui, sans-serif";
  ctx.fillText("🎭 表层人设", padding + 18, curY + 32);
  ctx.fillStyle = "rgba(244,240,232,0.85)";
  ctx.font = "400 18px system-ui, sans-serif";
  let py = curY + 66;
  for (const pl of pLines) {
    ctx.fillText(pl, padding + 18, py);
    py += 28;
  }

  // Right Card: 底层公关算盘
  const c2x = padding + cardW + 20;
  ctx.fillStyle = "rgba(215, 106, 92, 0.08)";
  ctx.fillRect(c2x, curY, cardW, cardH);
  ctx.strokeStyle = "rgba(215, 106, 92, 0.35)";
  ctx.strokeRect(c2x, curY, cardW, cardH);
  ctx.fillStyle = "#D76A5C";
  ctx.font = "700 17px system-ui, sans-serif";
  ctx.fillText("⚡ 底层公关算盘", c2x + 18, curY + 32);
  ctx.fillStyle = "rgba(244,240,232,0.95)";
  ctx.font = "500 18px system-ui, sans-serif";
  let hy = curY + 66;
  for (const hl of hLines) {
    ctx.fillText(hl, c2x + 18, hy);
    hy += 28;
  }
  curY += cardH + 24;

  // 7. Focus Comparison (期望关注 vs 实际转移)
  const focusH = 110;
  // Left Focus Box
  ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
  ctx.fillRect(padding, curY, cardW, focusH);
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(padding, curY, 3, focusH);
  ctx.fillStyle = "rgba(244,240,232,0.6)";
  ctx.font = "700 14px system-ui, sans-serif";
  ctx.fillText("🎯 期望关注重点:", padding + 14, curY + 28);
  ctx.fillStyle = "rgba(244,240,232,0.9)";
  ctx.font = "400 16px system-ui, sans-serif";
  const dLines = wrapText(ctx, c.analysis.desiredPublicTakeaway, cardW - 28);
  let dy = curY + 54;
  for (const dl of dLines) {
    ctx.fillText(dl, padding + 14, dy);
    dy += 24;
  }

  // Right Focus Box
  ctx.fillStyle = "rgba(215, 106, 92, 0.06)";
  ctx.fillRect(c2x, curY, cardW, focusH);
  ctx.fillStyle = "#D76A5C";
  ctx.fillRect(c2x, curY, 3, focusH);
  ctx.fillStyle = "#D76A5C";
  ctx.font = "700 14px system-ui, sans-serif";
  ctx.fillText("🛡️ 实际转移焦点:", c2x + 14, curY + 28);
  ctx.fillStyle = "rgba(244,240,232,0.9)";
  ctx.font = "400 16px system-ui, sans-serif";
  const distLines = wrapText(ctx, c.analysis.distractionTarget, cardW - 28);
  let distY = curY + 54;
  for (const dl of distLines) {
    ctx.fillText(dl, c2x + 14, distY);
    distY += 24;
  }
  curY += focusH + 24;

  // 8. Fatal Flaw Card (致命翻车段落)
  const flawReasonLines = wrapText(ctx, `公关破绽: ${c.analysis.fatalFlawReason}`, contentWidth - 40);
  const flawH = 80 + flawReasonLines.length * 26 + 20;
  ctx.fillStyle = "rgba(123, 41, 55, 0.15)";
  ctx.fillRect(padding, curY, contentWidth, flawH);
  ctx.strokeStyle = "rgba(215, 106, 92, 0.4)";
  ctx.strokeRect(padding, curY, contentWidth, flawH);

  ctx.fillStyle = "#D76A5C";
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText("⚠️ 致命翻车段落与破绽洞察", padding + 20, curY + 30);

  ctx.fillStyle = "#F4F0E8";
  ctx.font = "italic 600 19px Georgia, serif";
  ctx.fillText(`“${c.analysis.fatalFlawExcerpt}”`, padding + 20, curY + 62);

  ctx.fillStyle = "rgba(244,240,232,0.8)";
  ctx.font = "400 16px system-ui, sans-serif";
  let fy = curY + 96;
  for (const fl of flawReasonLines) {
    ctx.fillText(fl, padding + 20, fy);
    fy += 26;
  }
  curY += flawH + 28;

  // 9. Radar Metric Bars
  ctx.fillStyle = "rgba(244,240,232,0.7)";
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.fillText("📊 陪审团四维透视指数", padding, curY);
  curY += 28;

  const metrics = [
    { label: "真诚指数", val: c.analysis.radarScores.sincerity, color: "#8FAE8B" },
    { label: "算计指数", val: c.analysis.radarScores.calculation, color: "#D76A5C" },
    { label: "公关甩锅力", val: c.analysis.radarScores.prSkill, color: "#D7A15C" },
    { label: "翻车危险度", val: c.analysis.radarScores.backfireRisk, color: "#E05A47" },
  ];

  const barW = (contentWidth - 36) / 4;
  metrics.forEach((m, idx) => {
    const bx = padding + idx * (barW + 12);
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.fillRect(bx, curY, barW, 46);
    ctx.fillStyle = m.color;
    ctx.fillRect(bx, curY, (barW * m.val) / 100, 46);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.strokeRect(bx, curY, barW, 46);

    ctx.fillStyle = "#F4F0E8";
    ctx.font = "600 14px system-ui, sans-serif";
    ctx.fillText(`${m.label}: ${m.val}%`, bx + 10, curY + 28);
  });
  curY += 66;

  // 10. Jury Vote Badge (陪审团站队)
  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.fillRect(padding, curY, contentWidth, 68);
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.strokeRect(padding, curY, contentWidth, 68);

  ctx.fillStyle = "#D7A15C";
  ctx.font = "700 15px system-ui, sans-serif";
  ctx.fillText("🗳️ 赛博陪审团全网投票结果:", padding + 18, curY + 40);
  ctx.fillStyle = "#F4F0E8";
  ctx.font = "600 16px system-ui, sans-serif";
  ctx.fillText(
    `🔥 看穿算盘: ${c.analysis.juryVerdict.seeThroughPercent}%  |  🤝 倾向真诚: ${c.analysis.juryVerdict.agreeSpinPercent}%`,
    padding + 260,
    curY + 40
  );

  // 11. Footer
  const footerY = height - 70;
  ctx.strokeStyle = "rgba(244,240,232,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, footerY - 20);
  ctx.lineTo(width - padding, footerY - 20);
  ctx.stroke();

  ctx.fillStyle = "rgba(244,240,232,0.7)";
  ctx.font = "italic 20px Georgia, serif";
  ctx.fillText("“字字皆生意，句句皆公关。”", padding, footerY + 16);

  ctx.textAlign = "right";
  ctx.fillStyle = "#D7A15C";
  ctx.font = "600 18px system-ui, sans-serif";
  ctx.fillText("Decision Court · decisioncourt.lol", width - padding, footerY + 16);

  const dataUrl = canvas.toDataURL("image/png");
  const encoded = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return {
    dataUrl,
    file: new File([bytes], `decision-court-${c.id}.png`, { type: "image/png" }),
  };
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const chars = Array.from(text);
  const lines: string[] = [];
  let cur = "";
  for (const ch of chars) {
    const cand = cur + ch;
    if (ctx.measureText(cand).width <= maxWidth || !cur) {
      cur = cand;
    } else {
      lines.push(cur);
      cur = ch;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}
