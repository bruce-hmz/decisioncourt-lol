import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision Court · 小作文透视法庭",
  description:
    "查看公关透视案卷与赛博陪审团裁决结果。",
};

export default function ShareLanding() {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16">
      <p className="eyebrow">Decision Court</p>
      <h1 className="text-display-lg mt-2 text-ink">
        小作文透视法庭 · 案卷回执
      </h1>
      <p className="text-body-lg mt-6 text-muted">
        撕开体面伪装，透视公关算盘与潜台词。
      </p>
      <div className="mt-10">
        <a href="/" className="btn btn-primary">
          进入透视法庭
        </a>
      </div>
    </div>
  );
}
