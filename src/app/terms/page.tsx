export const metadata = {
  title: "服务条款 · 小作文透视法庭",
  description: "小作文透视法庭用户服务协议与使用规范。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <p className="text-eyebrow text-muted">法律条款</p>
      <h1 className="text-display-lg mt-2 text-ink">服务条款</h1>

      <h2 className="text-heading-lg mt-12 text-ink">产品定位与性质</h2>
      <p className="mt-4 text-body">
        Decision Court（小作文透视法庭）是一款面向年满 18 周岁成年用户的文本分析与公关逻辑推演工具。本产品旨在提供多维视角拆解，不代表任何形式的专业法律意见或事实定论。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">用户责任与使用规范</h2>
      <p className="mt-4 text-body">
        用户不得利用本工具生成或分析包含违法、诈骗、侵犯他人隐私或散布谣言的内容。用户对其基于本工具建议所作出的任何实际发送或公开发布行为负全部法律责任。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">免责声明</h2>
      <p className="mt-4 text-body">
        本服务按“现状”提供，不包含任何明示或暗示的保证。AI 推演存在局限性，可能无法覆盖复杂的现实背景或即时法律变更。
      </p>
    </div>);
}
