# Before You Send — 验证、构建与上线任务

版本：v0.2  
日期：2026-08-28  
需求源：PRD.md 与 SAFETY.md
实施顺序、技术和 UI 规范：DEVELOPMENT_PLAN.md、TECH_STACK.md 与 DESIGN.md

Gate A 通过前禁止开始正式产品构建。以下顺序是约束，不是建议。

## Phase 0 — 人工辅助验证，不写产品代码（2 天）

### Day 1：原型与基线

| # | 任务 | AC |
|---|---|---|
| 0.1 | 按 PRD §8 制作固定 Before You Send 输出模板 | 覆盖状态、假设、危险句、可能解读、正反理由、关键未知 |
| 0.2 | 固定 PRD §28 强免费 ChatGPT 基线 | 使用相同输入、固定 Prompt 和相近输出长度，不故意弱化 |
| 0.3 | 制作随机 A/B 展示 | 参与者不知道 A、B 来源 |
| 0.4 | 制作同意与删除脚本 | 允许先脱敏；每次会话后立即删除原文 |
| 0.5 | 制作结果问卷 | 记录偏好、信任、关键未知、复用意愿和结构化原因 |
| 0.6 | 招募 20 人 | 成年人，过去 30 天内有真实发送前纠结；团队与熟人单独标记 |

### Day 2：访谈与 Gate A

| # | 任务 | AC |
|---|---|---|
| 0.7 | 完成 20 次盲测 | 顺序随机，选择前不展示产品身份 |
| 0.8 | 每次会话后删除敏感文本 | Prompt、笔记、录音和共享文档均无原文 |
| 0.9 | 汇总结果 | 只保留计数与不含消息内容的原因 |
| 0.10 | 执行 Gate A | ≥12 人偏好、≥10 人发现未知、≥8 人愿复用、严重安全错误 0 |
| 0.11 | 记录决策 | GO、唯一一次输出迭代或 STOP |

Gate A：

- 偏好 <10/20：停止构建。
- 偏好为 10–11/20：只改一次输出结构，再测 10 位新用户。
- 全部门槛通过：进入 Phase 1。
- 弱结果不得通过增加 Agent、场景、账号或 SEO 页来掩盖。

## Phase 1 — 聚焦 MVP 构建（Gate A 后 5 天）

### Day 1：基础、隐私与安全

| # | 任务 | AC |
|---|---|---|
| 1.1 | 初始化 Next.js App Router + TypeScript + 部署 | Preview 与 Production 可部署 |
| 1.2 | 环境变量 Fail Fast | 缺失或非法配置抛明确错误 |
| 1.3 | 单页响应式输入流程 | 首屏草稿与目标；渐进字段符合 PRD §6.3 |
| 1.4 | 成年确认与 AI 披露 | 未确认 18+ 无法提交 |
| 1.5 | 规范化与输入校验 | 空、空白、Unicode、超长、非法枚举、双击均覆盖 |
| 1.6 | 本地安全规则 | 版本化 rule code，不保存命中文字 |
| 1.7 | Moderation + 独立分类器 | 最高严重度优先，Schema 严格校验 |
| 1.8 | L2/L3/REFUSE/语言/不可用固定页 | 所有非 L1 都在分析和支付前停止 |
| 1.9 | 日志与错误追踪隐私清洗 | canary 草稿不出现在任何捕获事件 |

Day 1 退出 Gate：全部安全停止路径通过前，分析接口不可达。

### Day 2：分析引擎与固定 Eval

| # | 任务 | AC |
|---|---|---|
| 2.1 | 定义 Basic Schema | 只接受 3 个 assessment enum |
| 2.2 | 实现单次分析 Basic | 覆盖全部 Basic 栏目 |
| 2.3 | Schema 修复重试 | 最多一次；绝不渲染部分 JSON |
| 2.4 | 输出扫描 | 诊断、确定性、直接 verdict、新事实、有害内容被拦截 |
| 2.5 | 命名 Provider 错误 | 429、timeout、refusal、malformed、unsafe 各自恢复 |
| 2.6 | 建立 300 条上线 Eval | 数量和类别符合 PRD §19 |
| 2.7 | 运行 Eval | 达到全部门槛，否则只修复、不继续 |
| 2.8 | 时延与 token 成本埋点 | 指标无输入或输出内容 |

Day 2 退出 Gate：固定集 L3 recall=100%，有害输出=0，最多一次重试后 Schema=100%。

### Day 3：结果体验、复检、冷却与可观测性

| # | 任务 | AC |
|---|---|---|
| 3.1 | 渲染 Basic 结果 | 无 AI 数值评分，无 send/wait 命令 |
| 3.2 | 编辑 + 一次免费复检 | 30 分钟内一次；失败与安全停止不消耗 |
| 3.3 | 丢弃、独立继续和 10 分钟冷却 | 用户拥有最后行动；计时可取消 |
| 3.4 | Empty/Loading/Error/Success 状态 | 可恢复错误不清空草稿 |
| 3.5 | 键盘与屏幕阅读器 | 基础无障碍 smoke test 通过 |
| 3.6 | 隐私安全的产品事件 | 只含受控枚举与 timing |
| 3.7 | Dashboard 与告警 | 成功率、p95、Provider、Schema、安全、预算可见 |
| 3.8 | 功能开关 | Free、Deep、Follow-up、New Traffic 可独立关闭 |
| 3.9 | 限流与预算 kill switch | session、rotating IP hash 与日预算规则通过 |

### Day 4：支付与 Deep Check

| # | 任务 | AC |
|---|---|---|
| 4.0 | 销售主体、地区、MoR/直接处理商 Gate | 未记录主体、税务、退款与条款责任时禁止真实收款 |
| 4.1 | Supabase 元数据 Schema | 无原始内容或生成结果字段 |
| 4.2 | $4.99 Payment Provider Checkout | 幂等创建，草稿仍只在原页面内存 |
| 4.3 | 验签、幂等 Webhook | 非法签名拒绝，重复 event 无重复 entitlement |
| 4.4 | Entitlement 绑定匿名 session | 修改 ID 不能消费别人的购买 |
| 4.5 | Deep challenge + rewrite | Deep 栏目与改写安全规则通过 |
| 4.6 | 结果校验后、响应前才 consume | Provider / Schema / DB 提交失败不丢失权益，可免费重试 |
| 4.7 | 浏览器端生成私密 Brief | 无公共资产、无服务端结果 |
| 4.8 | 可选结构化回访 | 明确同意，不保存或重索原始草稿 |
| 4.9 | 支付恢复 | Webhook 延迟、关闭原页、并发提交、DB outage 均测试 |
| 4.10 | CREATING→PENDING→PAID→PROCESSING→CONSUMED 状态机 | 非法跳转、并发 claim、双重消费、卡住恢复均测试 |

### Day 5：Hardening 与分阶段上线

| # | 任务 | AC |
|---|---|---|
| 5.1 | Unit / Integration / E2E | PRD §23 全部路径通过 |
| 5.2 | canary 全链路搜索 | 数据库、日志、分析、trace、错误追踪 0 命中 |
| 5.3 | 官方危机资源核对 | 美国、加拿大、UK/ROI、全球链接已人工检查 |
| 5.4 | Provider retention 与训练设置 | 部署记录和 Privacy 文案一致 |
| 5.5 | 模型与预算 kill switch | 安全页、付款恢复、退款仍可用 |
| 5.6 | 回滚与退款演练 | 未履约测试支付可定位、可退款 |
| 5.7 | 移动、桌面、无障碍、慢网测试 | 无阻断问题 |
| 5.8 | 10 位邀请用户上线 | 持续监控错误、安全与支付 |
| 5.9 | 开放公开验证 | 仅在邀请阶段干净后执行 |

日期是执行目标，不是跳过 Gate 的理由。Day 5 仍有安全、隐私或支付恢复缺口时，延长构建并禁止公开流量。

## Phase 2 — 公开付费验证（14 天）

### 事件定义

| Event | 定义 |
|---|---|
| qualified_visitor | 确认成年后停留输入区 ≥10 秒或开始输入；排除内部流量 |
| check_started | 开始输入且已选目标 |
| check_submitted | 合法表单提交 |
| safety_stopped | 非 L1；不算产品失败 |
| check_completed | 某 session 第一次合法 L1 Basic 返回 |
| recheck_completed | 唯一一次编辑复检；不计入独立完成用户 |
| result_feedback | helpfulness、critical unknown、reuse intent |
| checkout_started | 合法 Payment Provider Checkout 创建 |
| purchase_completed | 真实、成功且未退款付款 |
| deep_check_completed | 合法 Deep 返回 |
| followup_responded | 用户主动回访 |

### 每日运行

| 频率 | 任务 | AC |
|---|---|---|
| 每天 | 看可靠性、隐私 Dashboard | 无未处理 critical alert |
| 每天 | 按来源看 Funnel | 排除内部与测试流量 |
| 每天 | 支付与 Entitlement 对账 | 0 丢失、0 重复 |
| 每天 | 看安全层 disagreement 与误拦 | 疑似 critical miss 立即暂停 |
| 每 3 天 | 2 次短访谈 | 笔记无消息原文 |
| Day 7 | 中点决策 | 数据质量与安全干净才继续 |
| Day 14 | Gate B | 记录 GO、唯一一次迭代或 STOP/PIVOT |

### Gate B

最小样本：

- 200 qualified visitors；
- 30 个不同 session 完成首次 L1；
- 20 份结果反馈。

| 指标 | GO |
|---|---:|
| 结果有帮助 | ≥60% |
| 发现关键未知 | ≥50% |
| 愿意复用 | ≥40% |
| 真实 $4.99 付款 | ≥3 |
| 首次完成到付款 | ≥10% |
| 严重安全/隐私事故 | 0 |

决策：

- GO：全部达标。
- ITERATE ONCE：价值达标但仅 1–2 单；只改一次 Offer 或 Paywall，再收集 30 个新首次完成 session。
- STOP/PIVOT：0 单、helpfulness <50%、发生严重事故，或唯一迭代后仍未达付费门槛。

## Phase 3 — 仅 Gate B 后

### 首批 SEO 页

| # | URL | AC |
|---|---|---|
| 3.1 | /tools/should-i-send-this-text/ | Canonical 工具页，原创指导、隐私与安全边界 |
| 3.2 | /decisions/relationships/should-i-text-my-ex/ | 人工审校场景内容，嵌入同一工具 |
| 3.3 | /decisions/communication/should-i-reply-now-or-wait/ | 人工审校场景内容，嵌入同一工具 |

不做模板生成器和 fan-out 变体。

只有当每页 ≥100 organic visits、organic check-start 与其他渠道可比、至少 1 个 organic purchase，且新页面任务实质不同，才继续扩张。

### 品牌清关

| # | 任务 | AC |
|---|---|---|
| 3.4 | 搜索完全相同与近似产品名 | 冲突已记录 |
| 3.5 | 检查域名、账号、基本商标 | 公开名有可行路径 |
| 3.6 | 3 个名字 × 5 位目标用户 | 记录清晰度和信任原因 |
| 3.7 | 选择公开名 | 不让用户误以为是法律建议 |

## 明确延后

达到 PRD 对应重启条件前，不加入当前 backlog：

- 账号和历史；
- 原始内容存储；
- Multi-model Jury；
- 关系、职业、金钱或人生决策；
- 截图导入；
- 公开分享或故事；
- 多语言；
- Credits 或订阅；
- 程序化 SEO；
- 移动 App；
- Founder B2B。

## Definition of done

网站在线不等于完成。本阶段只有在以下全部成立时结束：

- Gate A 证据存在；
- PRD §23 全部验收通过；
- SAFETY 上线清单全部通过；
- 10 人邀请阶段无阻断问题；
- 14 天 Gate B 数据完整；
- 已记录 GO、ITERATE ONCE 或 STOP/PIVOT，并且没有用未验证功能掩盖结果。
