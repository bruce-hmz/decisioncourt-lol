export const metadata = {
  title: "隐私政策 · 小作文透视法庭",
  description: "小作文透视法庭的隐私保护与数据不留存机制说明。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <p className="text-eyebrow text-muted">隐私保障</p>
      <h1 className="text-display-lg mt-2 text-ink">隐私政策与数据安全</h1>

      <h2 className="text-heading-lg mt-12 text-ink">即用即走，不留存草稿</h2>
      <p className="mt-4 text-body">
        您在自定义投喂框中输入的文本仅存在于当前浏览器会话中。我们不在数据库中存储您的输入内容，不记录原始文本日志，亦不会将其用于模型训练。当您关闭或刷新页面时，数据即刻销毁。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">我们如何处理数据</h2>
      <p className="mt-4 text-body">
        当您点击分析时，文本通过加密 HTTPS 协议传输至分析接口进行实时结构化推演，生成的结果直接返回并缓存在您本地前端。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">我们的数据承诺</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
        <li>绝不在分析结束后持久化存储您的原文。</li>
        <li>绝不向广告商或第三方出售/转让任何数据。</li>
        <li>绝不使用用户的私密输入来进行模型训练。</li>
      </ul>
    </div>
  );
}
