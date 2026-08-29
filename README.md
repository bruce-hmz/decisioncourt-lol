# Decision Court / Before You Send — 产品、设计与构建文档

> Before you send it, check what it actually does.

本目录定义一个验证优先、隐私优先的“发送前消息检查”MVP。Decision Court 只是工作名称，尚未完成公开品牌清关。

当前仍处于实施前文档阶段：本目录没有产品代码、脚手架或已安装依赖。

## 当前产品

英语成年用户粘贴一条尚未发送的消息，并声明自己真正想要的结果。产品检查草稿、假设、情绪或缺失信息是否可能破坏这个目标。

它是：

- 一个发送前消息场景；
- 一次结构化 Basic Check + 一次编辑复检；
- 一个可选的 $4.99 Deep Check；
- 默认匿名、不保存原始消息；
- 不替用户下命令；
- 只有在盲测胜过强免费 ChatGPT 基线后才构建。

它不是通用决策平台、关系诊断、治疗服务、万能回复器或长期 AI 陪伴。

## 从这里开始

1. 通读 [PRD.md](./PRD.md)，确认产品与验证边界。
2. 写产品代码前必须通读 [SAFETY.md](./SAFETY.md)。
3. 用 [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) 确认关键路径、阶段 Gate、测试和发布责任。
4. 用 [TECH_STACK.md](./TECH_STACK.md) 完成 AI、支付与数据保留等实施前技术 Gate。
5. 所有 UI 实现以 [DESIGN.md](./DESIGN.md) 为准。
6. 严格按顺序执行 [TASKS.md](./TASKS.md)。
7. 2 天 Gate A 人工辅助盲测通过前，不开始产品构建。

## 文档地图

| 文件 | 内容 |
|---|---|
| [PRD.md](./PRD.md) | 产品边界、流程、输出契约、架构、隐私、支付、指标、验证 Gate、发布与回滚 |
| [SAFETY.md](./SAFETY.md) | 成年边界、L1/L2/L3/REFUSE、安全资源、有害用途、隐私和安全 Eval |
| [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) | 开发路径、工期、依赖、环境、测试、发布、风险与完成定义 |
| [TECH_STACK.md](./TECH_STACK.md) | 框架、AI、数据库、支付、观测、安全、测试选型与供应商 Gate |
| [DESIGN.md](./DESIGN.md) | 整体 UI 方向、设计 token、页面线框、状态、文案、响应式与无障碍规范 |
| [TASKS.md](./TASKS.md) | 2 天验证、5 天 gated build、14 天付费验证、验证后 SEO 与品牌任务 |
| [CLAUDE.md](./CLAUDE.md) | 后续实现代理必须遵守的文档读取、设计和敏感内容规则 |

## 硬性约束

1. L2 和 L3 都停止正常分析，安全资源永不付费。
2. 不告诉用户应该 send、wait、break up 或采取专业行动。
3. 不诊断任何人，不声称知道收件人的真实动机。
4. 医疗、法律、投资、未成年、胁迫、骚扰、跟踪、欺诈和暴力用途一律拒绝。
5. 应用不持久化原始草稿、上下文或生成结果。
6. 不使用 AI 生成的 0–100 readiness、emotion、evidence 或 regret score。
7. MVP 不做账号、多模型、宽场景、公开故事、订阅或 20 页 SEO。
8. 验证后只允许一次 Offer / Paywall 迭代；第二次仍不达标就停止或 Pivot。

## 验证 Gate

Gate A，20 人盲测：

- ≥12 人更偏好 Before You Send；
- ≥10 人发现关键未知或假设；
- ≥8 人愿意再次使用；
- 严重安全错误 0。

Gate B，至少 30 个不同 session 完成首次检查：

- ≥60% 认为有帮助；
- ≥50% 发现关键未知；
- ≥40% 愿意复用；
- ≥3 笔真实 $4.99 付款，且首次完成到付费 ≥10%；
- 严重安全或隐私事故 0。

## 建议技术栈

Node.js 24 LTS、Next.js App Router + React + TypeScript strict、Tailwind CSS v4、由 Eval 选出的单一模型 Provider、Supabase Postgres + Drizzle、Upstash Redis、通过主体 Gate 的 MoR Payment Provider、只收 allowlist 事件的 PostHog、严格清洗后的 Sentry，以及 Vercel 商业 Hosting。完整理由、备选和当前官方依据见 [TECH_STACK.md](./TECH_STACK.md)。

MVP 没有账号系统，也没有原始内容表。

## v0.2 主要变化

- 四类决策缩为一个 Before You Send 场景。
- 写代码前先做人工辅助盲测。
- Advocate / Prosecutor / Judge 角色表演改成一次结构化分析。
- 删除 ACT / WAIT verdict 和 AI 数值评分。
- 删除原始消息保存和自由文本反馈。
- L2 从“继续并强制 WAIT”改成“停止并转介”。
- Credits 与订阅删除，只保留单次 $4.99 Deep Check。
- 20 个 SEO 页改为 Gate 后最多 3 页。
- 删除社区链接植入。
- 明确加入 Web 安全、支付状态机、命名错误、可观测性、限流、回滚与退款恢复。
