import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Decision Court · Statement Decoder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #182422 0%, #0D1413 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          border: "16px solid #243431",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(215, 161, 92, 0.15) 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 20px",
            borderRadius: 9999,
            background: "rgba(215, 161, 92, 0.12)",
            border: "1.5px solid rgba(215, 161, 92, 0.4)",
            color: "#D7A15C",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          ⚖️ Decision Court · Cyber PR Tribunal
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F4F0E8",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          小作文透视法庭 · Statement Decoder
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(244, 240, 232, 0.75)",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          撕开体面伪装，透视公关算盘与潜台词。多维解构热点声明、全员信与小作文背后的真实动机。
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "82%",
            borderTop: "1.5px solid rgba(244, 240, 232, 0.18)",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              color: "#D7A15C",
              fontSize: 24,
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            “字字皆生意，句句皆公关。”
          </div>
          <div
            style={{
              color: "#F4F0E8",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            decisioncourt.lol
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
