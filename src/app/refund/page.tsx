export const metadata = {
  title: "退款政策 · 小作文透视法庭",
  description: "小作文透视法庭增值服务退款说明。",
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <p className="text-eyebrow text-muted">服务与支付</p>
      <h1 className="text-display-lg mt-2 text-ink">退款政策</h1>

      <h2 className="text-heading-lg mt-12 text-ink">退款保障承诺</h2>
      <p className="mt-4 text-body">
        若您购买了深度透视或改写增值服务且认为分析未能达到预期，可在购买后 14 天内联系客服或通过支付凭据申请全额退款。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">退款方式</h2>
      <p className="mt-4 text-body">
        退款将原路返还至您的初始支付账户，通常在 1–3 个工作日内到账。
      </p>
    </div>);
}
