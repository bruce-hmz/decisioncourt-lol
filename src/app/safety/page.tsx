import { L3_RESOURCES, L2_BODY } from "@/shared/content/safety-copy";
import { SITE } from "@/shared/content/site";

export const metadata = {
  title: "安全与免责声明 · 小作文透视法庭",
  description: "小作文透视法庭的安全规范、免责边界与专业求助渠道说明。",
};

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <p className="text-eyebrow text-muted">安全与免责</p>
      <h1 className="text-display-lg mt-2 text-ink">平台安全准则与边界</h1>
      <p className="mt-6 text-body-lg text-subtle">
        AI 分析仅供公关、博弈心理与舆论推演参考，不代表任何司法裁决、心理诊疗或专业调查结论。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">关于透视分析的客观性说明</h2>
      <p className="mt-4 text-body">
        小作文透视法庭旨在帮助公众理解复杂公开文本中的修辞技巧、公关设定与潜在沟通风险。所有分析均为基于语言学与公共关系模型的推演，请勿作为针对任何个人的法律指控依据。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">禁止恶意与违法滥用</h2>
      <p className="mt-4 text-body">
        本工具严禁用于协助起草人身威胁、敲诈勒索、网络暴力网暴策划、欺诈或非法骚扰等违法有害内容。若检测到相关恶意输入，系统将直接终止分析。
      </p>

      <h2 className="text-heading-lg mt-12 text-ink">紧急求助与专业咨询</h2>
      <p className="mt-4 text-body">
        若您当前处于重大人身危机、严重心理困扰或面临重大民事/刑事诉讼，请立即联系当地专业救援机构或专业执业律师寻求协助。
      </p>
      <div className="mt-6 p-4 rounded-[10px] bg-surface border border-line">
        <p className="font-bold text-ink">全国心理危机干预热线: 400-161-9995</p>
        <p className="text-small text-muted mt-1">全国法律援助专线: 12348</p>
      </div>
    </div>
  );
}
