# Before You Send — 整体开发计划

版本：v0.1  
日期：2026-08-28  
状态：实施前计划  
需求基线：[PRD.md](./PRD.md) v0.2、[SAFETY.md](./SAFETY.md)、[DESIGN.md](./DESIGN.md)  
详细任务清单：[TASKS.md](./TASKS.md)

## 0. 执行结论

本项目适合用一个小团队或一位全栈独立开发者完成，但不能把它当普通 AI Wrapper。真正的关键路径不是页面，而是：

1. 先证明输出比强免费 ChatGPT 基线更有价值；
2. 在任何分析前完成安全分流；
3. 证明原始消息不会进入数据库、日志、分析或错误追踪；
4. 让一次性付款在 Webhook 延迟、模型失败和并发请求下仍可恢复；
5. 用邀请阶段和 14 天真实付费数据决定继续、迭代一次或停止。

推荐工期：

| 阶段 | 目标工期 | 是否可并行 | 退出条件 |
|---|---:|---|---|
| Gate A 人工辅助盲测 | 2 天 | 招募与原型准备可并行 | PRD §18.1 / §28 全部门槛通过 |
| 实施前决策与环境准备 | 0.5–1 天 | 可与 Gate A 汇总并行 | AI、支付、数据保留和发布责任人有记录 |
| 核心 MVP 构建 | 5 个工作日目标 | UI、Eval、法务文案可有限并行 | 所有核心链路在 Preview 环境通过 |
| Hardening 与邀请阶段 | 2–5 个工作日 | 测试与修复循环 | 10 位邀请用户无阻断问题 |
| Gate B 公开验证 | 14 天 | 运营、访谈、监控并行 | 做出 GO / ITERATE ONCE / STOP 决策 |

“5 天”是核心构建目标，不是公开上线承诺。安全、隐私、支付恢复或固定 Eval 未过时，工期自动延长，不削减门槛。

## 1. 计划边界

### 1.1 本期交付

- 英语、18+、响应式 Web；
- 单条待发送消息的 Basic Check；
- 同一匿名会话内一次编辑复检；
- 10 分钟冷却；
- $4.99 一次性 Deep Check；
- 可选 24 / 72 小时结构化回访；
- 安全分流、隐私清洗、限流、预算开关；
- 支付恢复、退款、告警和分阶段发布；
- 300 条固定上线 Eval 与核心自动化测试。

### 1.2 本期明确不做

- 账号、历史、原始内容存储；
- 开放聊天、多 Agent、多模型 Jury；
- 通用关系、职业、金钱或人生决策；
- 截图导入、多语言、订阅、credits；
- 分享、公开故事、社区；
- Gate B 前的 SEO 矩阵；
- 为未来扩展提前建设通用工作流平台。

### 1.3 团队假设

最小可行配置：

| 职责 | 主要责任 | 最低要求 |
|---|---|---|
| Product owner | Gate、范围、用户访谈、文案最终确认 | 不用页面数量代替价值证据 |
| Full-stack owner | Web、API、AI、数据库、支付、部署 | 对端到端恢复链路负责 |
| Safety reviewer | SAFETY、固定案例、危机资源、误拦复核 | 上线前至少一位非实现者复核关键路径 |
| QA / Release owner | 测试证据、隐私 canary、邀请发布、回滚演练 | 不以“本地能跑”代替发布证明 |
| Legal / accounting owner | 销售主体、地区、税务、退款、隐私条款 | 未完成则只能继续免费验证 |

一人团队可以兼任前四项，但 L2/L3 资源、安全样例和支付合规至少要有一次外部或第二人复核。

## 2. 总体交付路径

~~~text
PRD / SAFETY 冻结
        |
        v
Gate A：20 人盲测
   | STOP / 只迭代一次
   +---------------------------> 记录结论，不写产品代码
   |
   | GO
   v
实施前 Gate
  - AI Provider + model snapshot
  - Provider retention / training 记录
  - 销售主体 + Payment Provider
  - Design / API / data contract 冻结
        |
        v
Foundation -----> Safety pipeline -----> Basic Check
                                           |
                                           v
                                Result / recheck / cooldown
                                           |
                                           v
                                  Payment / Deep Check
                                           |
                                           v
                              Privacy + reliability hardening
                                           |
                                           v
                              Team smoke -> 10 人邀请
                                           |
                                           v
                                  Gate B：14 天
                         / ITERATE ONCE | GO | STOP
~~~

关键依赖：

- Safety pipeline 未通过，Basic 和 Deep 接口不得开放；
- AI Provider 未通过固定 Eval，不得接公开流量；
- 销售主体与 MoR / 税务 Gate 未完成，不得接受真实付款；
- 支付恢复未通过，Deep 功能不得开放；
- 隐私 canary 在任一存储面命中，立即阻断发布；
- 邀请阶段不干净，不进入 Gate B。

## 3. 实施前准备

### 3.1 Definition of Ready

进入产品代码阶段前必须同时具备：

- Gate A 原始计数、盲法、参与者资格和结论记录；
- PRD v0.2 与 SAFETY 无未决 P0 问题；
- [TECH_STACK.md](./TECH_STACK.md) 中标为 Gate 的决策已完成；
- 选择并固定一个 AI Provider 与具体 model snapshot；
- Provider 数据训练、默认保留、ZDR / 最短保留配置有截图或书面记录；
- 销售主体、可售地区、退款责任和 Payment Provider 已确认；
- 300 条 Eval 的格式、分类和审校责任人明确；
- UI 文案能够区分“检查”与“建议发送”；
- 开发、Preview、Production 环境和 secrets owner 明确。

### 3.2 必须形成的决策记录

| ID | 决策 | 记录内容 | 阻断什么 |
|---|---|---|---|
| ADR-001 | AI Provider 与模型 | Eval 结果、模型 snapshot、成本、延迟、保留设置 | 所有分析开发 |
| ADR-002 | Payment Provider | 主体、地区、MoR、退款、Webhook 能力 | 真实付款 |
| ADR-003 | 数据与分析 | 允许字段、保留期、分析配置、删除方式 | Preview 接真实用户 |
| ADR-004 | 发布与事故 | 功能开关、owner、告警、退款与回滚步骤 | 邀请上线 |

ADR 可以先作为 [TECH_STACK.md](./TECH_STACK.md) 的决策表维护；实现开始后再按仓库惯例拆分，避免现在制造重复文档。

## 4. 推荐工程结构

以下是实施时的责任边界，不代表本轮已创建这些文件：

~~~text
app/
  (public)/                 # 落地、隐私、安全、条款、退款
  tools/should-i-send-this-text/
  payment/return/
  follow-up/[token]/
  api/
    check/
    checkout/
    deep-check/
    feedback/
    followup/
    payment/webhook/

src/
  features/check/           # 表单、页面内状态、结果 UI
  features/payment/         # Checkout 与恢复 UI
  features/followup/        # 明确同意的回访 UI
  server/safety/            # 本地规则、moderation、分类器、路由
  server/ai/                # prompt、schema、provider 调用、输出扫描
  server/payments/          # 单一 Payment Provider、entitlement 状态机
  server/db/                # metadata schema、query、transaction
  server/privacy/           # 日志、分析、错误追踪 allowlist / scrubber
  server/rate-limit/        # session、IP hash、预算计数
  shared/contracts/         # 输入、输出、typed error、枚举
  shared/content/           # 受控英文产品与安全文案

evals/                      # 人工审校固定集；不得含真实用户原文
tests/                      # unit、integration、e2e、privacy canary
docs/                       # ADR 与上线证据，实施开始后按需创建
~~~

边界规则：

- 原始消息只能存在于浏览器页面内存和单次服务端请求作用域；
- `server/ai` 不直接写数据库、分析或错误追踪；
- 业务事件只能通过 property allowlist 发出；
- Payment Provider 只暴露本期需要的一个具体实现，不做多 Provider 工厂；
- 页面状态使用有限状态与 typed error，不用散落的 boolean 组合。

## 5. 分阶段实施计划

### Phase 0 — Gate A，2 天，不写产品代码

目标：回答“完整体验是否显著优于强免费提示词”，而不是证明 AI 能输出文本。

交付物：

- 固定输入表和 Before You Send 输出模板；
- PRD §28 强免费 ChatGPT 基线；
- 随机 A/B 展示和结构化问卷；
- 20 位合格成年参与者；
- 只含计数和去识别原因的结果表；
- GO、一次迭代或 STOP 的书面决策。

退出 Gate：

- ≥12/20 偏好本产品；
- ≥10/20 发现关键未知或假设；
- ≥8/20 表示愿意复用；
- 严重安全错误为 0；
- 会话结束后原始敏感文本已删除。

### Phase 1 — Day 0，实施前冻结，0.5–1 天

目标：消除会在第 4、5 天才暴露的外部依赖。

工作：

- 用代表性固定集比较 AI Provider，选择一个 model snapshot；
- 确认 `store=false` / 等价设置、默认保留和隐私文案；
- 完成 Payment Provider 账户与销售主体 Gate；
- 冻结 API 输入、Basic / Deep Schema 与 typed error；
- 冻结 metadata schema 和禁止字段；
- 冻结 [DESIGN.md](./DESIGN.md) 中首发页面和状态；
- 建立环境变量清单、owner 与轮换方式。

退出 Gate：ADR-001 至 ADR-003 有明确结论，没有“开发到一半再决定”的关键供应商。

### Phase 2 — Day 1，Foundation + Safety

目标：先建立不可绕过的输入、安全和隐私边界。

实施顺序：

1. 初始化框架、严格 TypeScript、lint、test、Preview deploy；
2. 环境变量启动校验，缺失配置立即失败；
3. 匿名 session、CSRF / Origin、请求 ID、typed errors；
4. 共享输入 Schema、Unicode 规范化和长度边界；
5. 单页渐进表单、成年确认、AI 与隐私披露；
6. 本地规则 → Provider moderation → 结构化安全分类器；
7. L2 / L3 / REFUSE / unsupported / unavailable 固定响应；
8. 日志、Sentry、PostHog 的默认拒绝式字段过滤。

退出 Gate：所有非 L1 输入在分析调用和支付入口前停止；canary 原文在 Preview 全链路零命中。

### Phase 3 — Day 2，Basic Check + Eval Harness

目标：形成可验证、可失败关闭的一次结构化分析。

实施顺序：

1. Basic JSON Schema 与运行时校验；
2. 固定 prompt、model snapshot、temperature / reasoning 参数；
3. 单次分析调用；
4. malformed 时最多一次修复重试；
5. excerpt 精确匹配、禁止 verdict、诊断、新事实和确定性语言扫描；
6. Provider moderation 输出扫描；
7. 300 条 Eval runner、分类报告和失败样例输出；
8. 时延、token、成本、retry 元数据。

退出 Gate：

- 固定集 L3 recall = 100%；
- L2 + REFUSE 正确停止 ≥98%；
- 有害改写、诊断、确定动机违规 = 0；
- 最多一次修复后 Schema 合法 = 100%；
- 数据面原始内容泄漏 = 0。

### Phase 4 — Day 3，结果、复检、冷却与可观测性

目标：把模型输出变成一个不替用户下命令的完整产品体验。

实施顺序：

1. Basic 结果分区和中性 assessment 表达；
2. 用户编辑并免费复检一次；
3. 30 分钟权益和成功后计数规则；
4. 10 分钟页面内冷却、取消和编辑；
5. Empty / Loading / Error / Success / Partial 状态；
6. 结构化反馈；
7. 只含枚举和时延的 Funnel；
8. 功能开关、限流、日预算告警和 kill switch；
9. 键盘、屏幕阅读器、慢网、取消请求 smoke test。

退出 Gate：草稿在所有可恢复错误后保留；失败与安全停止不消耗复检；页面不出现 send / wait 命令或批准式视觉。

### Phase 5 — Day 4，Payment + Deep Check

目标：完成一次性购买，并保证“收了钱但没交付”可检测、恢复和退款。

实施顺序：

1. metadata-only 数据表与数据库约束；
2. `CREATING → PENDING → PAID → PROCESSING → CONSUMED` 状态机；
3. 幂等 Checkout 创建；
4. 原始 body Webhook 验签和 event 去重；
5. entitlement 绑定匿名 session；
6. 原子 claim 和并发防双花；
7. 独立 Deep challenge-and-rewrite 调用与输出扫描；
8. 结果校验后先提交 `CONSUMED`，再返回浏览器；
9. 模型失败回到可重试状态；
10. 浏览器打印 / 下载私密 Brief；
11. 可选、无原文的 24 / 72 小时回访；
12. Webhook 延迟、关闭原页、DB outage、卡住处理恢复。

退出 Gate：测试付款可以完成、恢复和退款；同一付款无法被其他 session 或并发请求消费；生成失败无需再次付款。

### Phase 6 — Day 5 及缓冲，Hardening + 邀请上线

目标：用证据证明“可以安全地让真实用户使用”。

工作：

- 运行全部 unit、contract、integration、Eval、E2E；
- 对数据库、平台日志、PostHog、Sentry、trace 做 canary 搜索；
- 人工核对危机资源链接；
- 核对 Provider retention 设置和 Privacy 文案；
- 演练预算开关、Provider outage、数据库 outage、支付恢复和退款；
- iPhone 小屏、Android Chrome、桌面 Chrome / Safari / Firefox；
- 键盘、VoiceOver 或 NVDA smoke、200% zoom、reduced motion；
- Team-only production smoke 与测试付款；
- 10 位邀请用户逐步开放；
- 修复阻断问题后重新运行相关全链路证据。

退出 Gate：邀请阶段无 P0 / P1，未履约付款为 0，严重安全 / 隐私事故为 0。

### Phase 7 — Gate B，14 天公开付费验证

目标：验证帮助感、关键未知、复用意愿和真实支付，不扩功能。

运行节奏：

- 每天检查可靠性、隐私、安全 disagreement、成本和支付对账；
- 每 3 天做 2 次不记录原文的短访谈；
- Day 7 只评估数据质量与安全，禁止随意改产品；
- Day 14 按 PRD §18.2 记录 GO / ITERATE ONCE / STOP；
- 只有“价值达标但付款 1–2 单”才允许一次 Offer / Paywall 迭代；
- 迭代只收集 30 个新首次完成 session，不混用旧 cohort。

## 6. 测试与证明策略

### 6.1 测试层级

| 层级 | 证明什么 | 核心范围 | 何时运行 |
|---|---|---|---|
| Unit | 纯规则正确 | normalization、schema、枚举、状态迁移、scrubber、预算计算 | 每次提交 |
| Contract | 外部输入输出可控 | AI Schema、Payment event、PostHog allowlist、typed error | 每次提交 |
| Integration | 服务边界正确 | moderation → classifier → analysis、DB transaction、Webhook 幂等 | PR / Preview |
| Eval | AI 安全与质量门槛 | 300 条审校案例、三次稳定性、成本和时延 | PR 关键变更 + 发布 |
| E2E | 用户路径可完成 | Basic、复检、安全停止、支付、Deep 失败恢复 | Preview + 发布 |
| Privacy canary | 原始内容不会泄漏 | DB、logs、analytics、trace、Sentry、email | Preview + 发布 |
| Manual | 自动化无法证明的体验 | 危机语气、键盘、读屏、移动、慢网、退款演练 | 邀请上线前 |

### 6.2 核心 E2E 场景

1. 合法英语草稿完成 Basic；
2. 编辑后唯一一次免费复检；
3. L2 / L3 / REFUSE / minor / unsupported 全部安全停止；
4. Provider 429、timeout、malformed 后恢复且草稿仍在；
5. 数据库不可用时 Basic 可降级，支付入口关闭；
6. 付款成功后 Deep 完成；
7. 付款成功、Deep 失败、无需再次付款即可重试；
8. Webhook 延迟时验证页可刷新；
9. 两个并发 Deep 请求只有一个 claim；
10. 原页面关闭后重新粘贴草稿可恢复已付款权益；
11. kill switch 关闭新检查但保留安全页、支付恢复和退款；
12. canary 字符串在所有禁止存储面零命中。

### 6.3 CI 必须检查

- lint；
- TypeScript strict typecheck；
- unit / contract tests；
- metadata schema migration check；
- Eval smoke 子集；
- Preview build；
- 核心 E2E；
- dependency / secret scan；
- 生成的数据库类型或 Schema 与仓库一致。

完整 300 条 Eval、跨浏览器 E2E 和 canary 搜索在发布候选阶段运行，避免每个小提交都消耗高成本模型调用。

## 7. 环境、发布与运维

### 7.1 环境

| 环境 | 数据 | 外部服务 | 允许用户 |
|---|---|---|---|
| Local | 仅合成 fixture | Provider mock / sandbox | 开发者 |
| Preview | 合成 fixture + 明确同意的测试输入 | AI 测试项目、支付 sandbox、独立分析项目 | 团队 / QA |
| Production | PRD 允许的元数据 | 独立生产项目与 secrets | 邀请后逐步公开 |

禁止 Preview 与 Production 共用 Payment webhook secret、数据库或分析项目。

### 7.2 发布顺序

1. 合并前 CI；
2. Preview 全链路；
3. 完整 Eval 与 canary；
4. Production team-only；
5. 测试支付和退款；
6. 10 人邀请；
7. 打开 `NEW_TRAFFIC_ENABLED`；
8. 公开 Gate B。

### 7.3 回滚优先级

| 事故 | 第一动作 | 保留能力 |
|---|---|---|
| 安全或隐私 | 关闭新流量和免费检查 | 静态安全资源、退款、支持 |
| AI Provider | 关闭新分析 | 落地、已有付款恢复、退款 |
| 支付 | 关闭 Deep 新购买 | Basic、已有付款验证、退款 |
| 数据库 | 关闭新支付 | 可安全降级的 Basic、静态资源 |
| 成本异常 | 触发预算 kill switch | 安全停止页、付费恢复、退款 |

恢复必须经过：根因 → 新回归用例 → 相关完整测试 / Eval → team-only → 邀请 → 公开。

## 8. 风险登记

| 风险 | 概率 | 影响 | 提前信号 | 应对 |
|---|---|---|---|---|
| Gate A 无法胜过免费基线 | 中 | 致命 | 偏好 ≤11/20 | 只允许一次输出迭代；仍弱则停止 |
| 用户把状态当发送批准 | 中 | 高 | “AI said I should send” 访谈反馈 | 禁止 verdict、统一中性视觉、结果首屏声明 |
| 安全分类漏判 | 低–中 | 致命 | layer disagreement、L3 Eval 失败 | 最高严重度优先、失败关闭、阻断发布 |
| Prompt / output 泄漏到观测工具 | 中 | 致命 | canary 命中 | 默认拒绝字段、关闭 replay / autocapture、发布扫描 |
| Provider 默认保留与宣传不一致 | 中 | 高 | 无法证明 ZDR 或 `store=false` | 只承诺 “not saved by us”，记录第三方保留 |
| 模型输出 Schema 不稳定 | 中 | 高 | repair retry 上升 | 固定 snapshot、严格 Schema、最多一次修复、失败关闭 |
| 支付成功但权益丢失 | 中 | 高 | `PAID` / `PROCESSING` 卡住 | 原子状态机、恢复任务、每日对账、退款 runbook |
| 5 天工期压缩 QA | 高 | 高 | Day 5 仍有 P0/P1 | 自动进入 hardening 缓冲，不删 Gate |
| $4.99 无付费意愿 | 中 | 高 | checkout / purchase 低 | Gate B 只允许一次 Offer 迭代后决定停止 |
| AI 成本或滥用超预算 | 中 | 中 | 单日成本、429、异常 session | 多层限流、预算预授权、硬 kill switch |

## 9. 变更控制

实现期间只接受三类变更：

1. 解决 P0 安全、隐私或付款正确性；
2. 修复 PRD 验收无法通过的问题；
3. Gate A / B 允许的唯一一次、明确范围内迭代。

以下请求直接进入延后清单，不占本期：账号、历史、多 Agent、新场景、多语言、截图、订阅、SEO 扩张、视觉角色表演。

任何新需求必须说明：解决哪个已观察问题、影响哪个 Gate、增加哪些测试、是否改变隐私与安全边界。没有证据时不进入当前 Sprint。

## 10. 完成定义

开发工作只有在以下全部成立时才可称为“完成”：

- Gate A 证据和 GO 决策存在；
- PRD §23、SAFETY §13、本文核心 E2E 全部通过；
- 固定 Eval 达到全部阻断门槛；
- canary 在数据库、日志、分析、trace、Sentry 和邮件模板中零命中；
- Payment 状态、恢复、对账与退款演练通过；
- 10 位邀请用户无阻断问题；
- Gate B 数据完整并记录明确结论；
- 没有用新增功能掩盖弱价值或弱付费证据；
- 所有残余风险有 owner、影响和后续日期。

网站部署成功、测试付款成功或模型能返回 JSON，单独都不构成完成。
