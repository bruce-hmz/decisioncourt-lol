# Decision Court / Before You Send — 产品需求文档

版本：MVP v0.2  
日期：2026-08-28  
状态：验证优先重设计版  
公开品牌：未确定；Decision Court 仅为工作名称

## 0. 执行结论

v0.1 对一个新独立产品来说过宽：它试图同时验证四类决策、五次模型调用、支付、分享、社区分发和 20 个 SEO 页面。这个方案很容易“把软件做出来”，却无法回答最重要的问题：

> 用户是否真的认为它比一条写得很好的免费 ChatGPT 提示词更有用？

v0.2 只验证一个高频、紧迫、边界相对清楚的任务：

> 用户准备发送一条由情绪驱动、可能后悔的消息时，帮他看清这条消息是否真的服务于他想要的结果。

产品是一次性的“发送前检查”，不是聊天机器人、恋爱导师或通用决策平台。

执行顺序不可跳过：

1. 先做 2 天人工辅助盲测，对比强免费基线。
2. Gate A 通过后，才进入 5 天 MVP 构建。
3. 上线后跑 14 天真实付费验证。
4. Gate B 通过后，才增加 SEO 页面或更广场景。

## 1. 为什么改成这个版本

### 1.1 用户问题

用户在愤怒、孤独、焦虑、兴奋或急于寻求 closure 时写下一条消息。这个时刻通常同时存在：

- 用户清楚自己的感受，却未必清楚文字会产生什么效果；
- 通用 AI 可能顺着提示中已经存在的叙事继续回答；
- 朋友可能不在线、有立场，或不适合卷入；
- 多等十分钟的成本很低，冲动发送后的后悔成本可能很高。

产品不替用户判断“该不该发”。它只揭示：

- 目标与文字是否错位；
- 哪个判断依赖未经验证的假设；
- 哪句话最可能破坏目标；
- 哪些关键信息仍然缺失。

### 1.2 竞争现实

“AI 会反驳你”本身已经不是差异化。市场上已有 Devil’s Advocate、消息 reality check、多模型辩论和决策日志产品。

初始差异必须来自完整体验，而不是一条 system prompt：

- 分析前先让用户声明自己真正想要的结果；
- 检查“消息与目标是否一致”，而不是泛泛给建议；
- 默认不保存原始消息和生成结果；
- 给用户一个主动冷却选项，而不是给命令；
- 以后只在明确同意下收集结构化 outcome，形成场景质量反馈。

### 1.3 成功定义

MVP 只有在真实用户出现以下行为时才算成功：

- 盲测中更偏好本产品，而不是强免费 ChatGPT 基线；
- 发现此前没意识到的关键假设或未知项；
- 愿意在下一次真实消息前再次使用；
- 产生真实的 $4.99 付款。

页面数量、Agent 数量和模型调用次数都不是成功指标。

## 2. 产品定义

| 项目 | 定义 |
|---|---|
| 工作名称 | Decision Court |
| MVP 体验名 | Before You Send |
| 一句话承诺 | Before you send it, check what it actually does. |
| 产品类型 | 私密的发送前消息检查 |
| 首要用户 | 正准备发送情绪化消息的英语成年用户 |
| 核心任务 | 将消息草稿与用户声明的目标进行对照 |
| 反定位 | 不是治疗、关系诊断、万能回复器或通用决策助手 |
| 语气 | 冷静、直接、具体、不评判 |
| 首发平台 | 响应式 Web |

建议首页 Hero：

> # Before you send it, check what it actually does.
>
> Paste the message, name the outcome you want, and see where emotion, assumptions, or wording work against that goal.
>
> [Check my message]
>
> Private by default. Your message is processed for this check and is not saved by us.

不再把 “AI that doesn’t agree with you” 当公开 USP。这个表达已拥挤，也容易让产品显得为了唱反调而唱反调。

## 3. 用户与任务

### 3.1 目标用户

- 年满 18 岁；
- 有一条真实、尚未发送的消息；
- 当前情绪强度或不确定性较高；
- 想在行动前获得清晰度，而不是建立长期 AI 关系；
- 在看到明确隐私说明后，愿意粘贴文本。

常见收件人：

- 前任；
- 当前伴侣；
- 朋友或家人；
- 同事或管理者；
- 其他成年熟人。

### 3.2 Jobs to be done

核心任务：

> 当我准备发送一条可能后悔的消息时，在行动前帮我看清这条草稿是否真的支持我想要的结果。

次级任务：

- 找出最强的未验证假设；
- 找出最可能破坏目标的句子；
- 区分事实、情绪、推断与未知；
- 在不篡改真实意图的前提下，生成更贴合目标的改写；
- 在冲动与行动之间制造一个短暂停顿。

### 3.3 非目标用户

- 未成年人；
- 寻求紧急、医疗、法律或投资建议的人；
- 想优化威胁、胁迫、骚扰、跟踪、欺诈或操纵内容的人；
- 想让 AI 诊断他人或确定他人动机的人；
- 想要开放式陪伴、治疗或长期聊天的人。

## 4. 已考虑的方案

| 方案 | 形态 | 工作量 | 风险 | 结论 |
|---|---|---:|---:|---|
| A. 只做人工辅助验证 | 无正式产品，由人按固定模板生成结果 | S | 低 | 必须先作为 Gate A |
| B. 聚焦的一次性 MVP | 单消息场景、单结构化分析、可选付费深度检查 | M | 中 | 已选择 |
| C. 通用决策平台 | 关系、职业、金钱、人生、记忆、多 Agent、SEO 矩阵 | XL | 高 | 有证据前拒绝 |

选择 B，是因为它以最小完整体验验证核心价值；先跑 A，是为了在写代码前发现差异化不足。

## 5. MVP 范围

### 5.1 包含

- 单一英语消息检查流程。
- 成年确认和明确 AI 披露。
- 待发送草稿。
- 收件人关系。
- 用户想得到的结果。
- 用户能否接受对方不回复。
- 用户自评情绪强度和事件发生时间。
- 可选短上下文或对方上一条消息。
- 任何实质分析前先完成安全分流。
- 免费 Basic Check 使用一次结构化分析调用。
- 三种定性状态，不使用 AI 生成的数值评分。
- 同一浏览器会话 30 分钟内允许一次编辑后的免费复检。
- 可选 10 分钟冷却。
- Gate A 后提供 $4.99 Deep Check。
- 可选 24 小时或 72 小时 outcome 回访。
- 默认匿名。
- 分析事件只记录枚举与时延，不记录原始消息。
- 移动端与桌面端响应式体验。

### 5.2 明确不包含

- “我该不该分手”等通用关系决策。
- 职业、金钱、人生、医疗、法律或投资决策。
- 开放式聊天。
- 界面中的 Advocate、Prosecutor、Judge 角色表演。
- 多模型 Jury。
- AI 生成的情绪、证据或后悔概率数值。
- 账号、历史记录或 Decision Memory。
- 原始消息、上下文或生成结果的服务端持久化。
- 截图或聊天记录导入。
- 公开分享链接、用户故事或社区。
- 5 次 credits 或订阅。
- 移动 App。
- 多语言分析。
- 程序化 SEO 或上线即铺 20 页。
- 以明星争议或未决纠纷作为核心获客叙事。

## 6. 核心体验

### 6.1 用户流程

~~~
落地页
  |
  v
成年确认 + AI 披露
  |
  v
草稿 + 目标 + 最小上下文
  |
  v
输入校验
  | 无效 / 不支持
  +--------------------------> 原位纠正，保留已填内容
  |
  v
安全分流
  | L2 / L3 / REFUSE
  +--------------------------> 停止 + 对应资源或边界
  |
  v
免费分析
  | Provider / Schema 失败
  +--------------------------> 重试一次 -> 可恢复错误
  |
  v
Basic 结果
  |                   |
  |                   +------> 编辑并免费复检一次
  |                   +------> 开始 10 分钟冷却
  |                   +------> 丢弃 / 离开
  |
  v
Deep Check 付费入口
  | 支付失败
  +--------------------------> 保留 Basic 结果 + 可重试支付
  |
  v
Deep 结果
  |
  +--------------------------> 浏览器本地下载
  +--------------------------> 可选 24h / 72h 回访
~~~

产品不提供“现在发送”推荐。最后行动始终由用户决定。

### 6.2 输入顺序

首屏只展示：

1. 消息草稿。
2. 期望结果。

用户开始输入后，再渐进展示：

3. 收件人关系。
4. 如果对方不回复，你能接受吗？Yes / No / Unsure。
5. 当前情绪强度：1–5，由用户自评。
6. 距离触发事件过去多久。
7. 可选上下文。

不做长步骤向导。一次提交即可进入分析。

输入框附近提示：

> Remove names, phone numbers, usernames, and any detail you do not want processed.

### 6.3 输入契约

| 字段 | 类型 | 规则 |
|---|---|---|
| draft_message | text | 必填，1–5,000 字符 |
| goal_code | enum | 必填：clarify、repair、set_boundary、apologize、ask_for_reply、express_feeling、end_contact、other |
| goal_detail | text | 所有目标均可选；goal_code=other 时必填，5–240 字符 |
| recipient_type | enum | 必填：ex、partner、friend_family、coworker、manager、other |
| can_accept_no_reply | enum | 必填：yes、no、unsure |
| emotion_intensity | integer | 必填，1–5；只代表自评，不解释为诊断 |
| time_since_trigger | enum | under_10m、10_to_60m、1_to_24h、1_to_7d、over_7d |
| optional_context | text | 可选，0–3,000 字符 |
| age_confirmed | boolean | 必须为 true |
| language | derived | MVP 必须可靠识别为英语 |

规则：

- 纯空白视为空值；
- 长度校验前做 Unicode 规范化；
- 删除用于匹配的不可见控制字符，但不随意改写用户原文；
- 所有枚举在服务端重新校验；
- 模型输出只按纯文本渲染，不执行 HTML 或 Markdown。

## 7. 安全分流

SAFETY.md 是安全行为的最终规范。如本 PRD 与 SAFETY.md 冲突，以更严格的规则为准。

~~~
规范化输入
  |
  +--> 本地高召回规则
  |
  +--> Provider moderation
  |
  +--> 独立结构化安全分类器
               |
               v
          最高严重度优先
       /          |          \
     L1          L2/L3       REFUSE
     |             |            |
   分析         停止+资源      停止+边界
~~~

硬性规则：

- L3 停止分析并展示即时支持资源。
- L2 同样停止实质消息分析，不再强制生成 WAIT。
- REFUSE 停止分析并说明边界。
- 未成年人不进入流程。
- 不支持的语言不走英语分析模型兜底。
- 安全与拒绝内容永远不付费。
- 可以描述用户报告的行为，不可以诊断任何人或把动机说成事实。
- 不帮助优化胁迫、威胁、骚扰、跟踪、欺诈或操纵。
- 安全分类服务不可用且无法安全确定 L1 时，失败关闭，不继续分析。

## 8. 分析契约

### 8.1 处理 Pipeline

MVP 使用能保持安全与结构的最少调用：

~~~
校验后的输入
  -> 安全分流
  -> 一次结构化分析调用
  -> JSON Schema 校验
  -> 确定性规则 + Provider moderation 输出扫描
  -> 渲染

付费 Deep Check
  -> 重新校验原始输入与安全边界
  -> 一次独立 challenge-and-rewrite 调用
  -> JSON Schema 校验
  -> 输出扫描
  -> 渲染
~~~

不实现三个角色的独立 context。内部仍然必须覆盖“最强发送理由”和“最强暂停理由”，但它们是输出栏目，不是 Agent。

Basic 输出扫描不新增一轮生成式评审。它由以下部分组成：

- Schema 和枚举校验；
- 禁止标签、命令式结论和确定性语言扫描；
- Provider 对生成文本的 moderation；
- highest_risk_excerpt 必须能在输入草稿中精确匹配；
- 固定 eval 对新事实、诊断和有害建议做回归检测。

若后续数据证明这不足以控制幻觉，再以盲测质量提升作为增加 verifier 调用的门槛。

### 8.2 结果状态

模型只能返回：

| 状态 | 含义 | 不代表 |
|---|---|---|
| GOAL_ALIGNED | 没发现文字与用户声明目标之间的明显矛盾 | 不代表建议发送 |
| GOAL_MISALIGNED | 至少有一处文字可能破坏用户声明的目标 | 不代表命令等待 |
| CRITICAL_CONTEXT_MISSING | 缺失关键上下文，无法给出有用判断 | 不代表负面评价 |

禁止返回 ACT、WAIT、SEND、YES、NO 或数值 readiness score。

三种状态都使用中性视觉。GOAL_ALIGNED 不做绿色批准徽章，GOAL_MISALIGNED 不做红色道德判决。

### 8.3 Basic Check

免费结果包括：

1. 状态与一句解释。
2. 最强隐藏假设。
3. 最危险的句子或短语；如没有则为空。
4. 一种对方可能的解读。
5. 最强的诚实发送理由。
6. 最强的诚实暂停理由。
7. 最多三个会实质改变判断的事实或答案。
8. 用户可选动作：编辑并复检、开始冷却、丢弃、独立继续。

所有对他人的解读必须写成可能性。系统不得声称知道收件人在想什么或一定会做什么。

### 8.4 Deep Check

$4.99 Deep Check 增加：

- 按句检查与目标的一致性；
- 简短 pre-mortem，列出最可能的后悔路径；
- 对 Basic 结果的最强反论；
- 最多两个目标一致的改写版本；
- 每个版本具体改了什么；
- 浏览器本地生成的私密 Brief；
- 可选 24 小时或 72 小时回访。

改写规则：

- 保留用户事实意图；
- 不虚构道歉、承诺、同意、事实或引用；
- 不优化威胁、胁迫、骚扰、跟踪、操纵或欺骗；
- 每个改写明确标为需要用户审核的草稿；
- 不暗示改写能保证回复或结果；
- 对方已明确要求不联系或已屏蔽时，不帮助规避边界。

### 8.5 结构化输出

~~~json
{
  "assessment": "GOAL_ALIGNED | GOAL_MISALIGNED | CRITICAL_CONTEXT_MISSING",
  "summary": "string",
  "hidden_assumption": "string",
  "highest_risk_excerpt": "string | null",
  "possible_interpretations": ["string"],
  "case_for_sending": "string",
  "case_for_pausing": "string",
  "decision_changers": ["string"],
  "policy_flags": []
}
~~~

服务端强制校验：

- 枚举必须合法；
- 必填字段不可缺失；
- 数组不可超长；
- highest_risk_excerpt 必须是草稿中的原文片段；
- policy_flags 对用户不可直接透出内部规则；
- 出现越界内容时不渲染部分结果。

首次失败允许一次修复重试；第二次失败返回可恢复错误。

## 9. UX 要求

### 9.1 情绪路径

| 时刻 | 用户状态 | 产品行为 |
|---|---|---|
| 到达 | 着急、不确定 | 立即说明价值和隐私边界 |
| 输入 | 脆弱、怕被评判 | 少字段、无说教 |
| 分析 | 不耐烦 | 显示真实进度，可取消 |
| 结果 | 寻求确定性 | 给具体证据，不给命令或伪精度 |
| 冷却 | 仍有冲动 | 可见计时器，草稿可编辑 |
| 回访 | 开始反思 | 询问发生了什么，不羞辱用户选择 |

### 9.2 必备状态

| 界面 | Empty | Loading | Success | Error | Partial |
|---|---|---|---|---|---|
| 输入表单 | 用虚构示例解释 | 提交禁用 | 进入分析 | 字段原位报错 | 保留所有有效字段 |
| 安全检查 | 不单独暴露 | “Checking boundaries…” | 继续 | 安全停止 | 不展示分类器内部细节 |
| 分析 | 不适用 | 进度 + 取消 | Basic 结果 | 可重试，草稿保留 | 不渲染半截 JSON |
| 支付 | 展示权益 | 禁止重复点击 | 解锁 Deep | Basic 仍可用 | 显示 verifying + 手动刷新 |
| 回访 | 默认关闭 | 保存禁用 | 确认成功 | 不丢失选择 | 不再次索要原始消息 |

### 9.3 可用性、响应式与无障碍

- 表单和结果动作可完整键盘操作；
- label、focus、错误摘要明确；
- loading、安全停止和完成状态可被屏幕阅读器感知；
- 触控目标最小 44px；
- 不使用颜色作为唯一状态信息；
- 移动端为首要布局；
- 支持 reduced motion；
- 恢复性错误后不清空草稿；
- Checkout 期间关闭原始页前给出提示：付款不会保存草稿，关闭后需重新粘贴。

## 10. 隐私与数据处理

### 10.1 对用户的默认承诺

- 原始草稿和上下文只在本次请求中传输与处理；
- 应用数据库不保存原始内容；
- 日志、分析、trace 和错误追踪不包含原始内容；
- 生成结果不在服务端持久化；
- 下载文件在浏览器端生成；
- 草稿只存在当前页面内存，不写入 localStorage、sessionStorage 或 IndexedDB；
- 进入支付时使用新标签页或嵌入式 Checkout，原页面保留在内存中；
- 原页面关闭后，用户需要重新粘贴草稿。

不允许为了简化支付，把草稿临时写入服务端或浏览器持久存储。

### 10.2 模型 Provider 要求

上线前必须验证并记录：

- API 输入不会用于训练 Provider 模型；
- 已开启可用的 zero-retention 或最短保留设置；
- 清楚 Provider 为安全监测保留什么、保留多久；
- 数据地区和 subprocessors 已反映在隐私政策中。

界面应写 “not saved by us”，除非 Provider 合同足以支持更强的 “never stored anywhere”。

### 10.3 允许保存的元数据

- 随机 session ID；
- 事件时间；
- recipient_type 和 goal_code 枚举；
- 用户自评 emotion bucket；
- safety route；
- assessment state；
- 时延、模型版本、token 数和 retry 次数；
- Checkout 与购买元数据；
- 明确提交的结构化反馈；
- 同意时间。

禁止保存：

- 原始消息、上下文或其中片段；
- 生成结果文本；
- 草稿中的姓名、电话、用户名或邮箱；
- 完整 IP；
- 包含用户内容的 prompt 或 response log；
- 自由文本反馈。

如防滥用必须使用 IP，只保留每日轮换盐生成的不可逆 hash，不发送到产品分析。

### 10.4 数据保留

| 数据 | 默认保留 |
|---|---|
| sessions / check_events | 验证期 90 天，之后聚合并删除 |
| safety_events | 90 天，仅枚举与 rule code |
| Follow-up email | 回访完成后 30 天，或用户退订时更早删除 |
| 结构化 feedback | 12 个月后重新评估 |
| purchase records | 按支付、税务和会计义务保留 |

购买记录与支付平台数据只保存完成退款、对账和法定义务所需字段，不复制不必要的 billing 信息。

### 10.5 可选回访

回访必须明确 opt-in，只保存：

- email；
- 回访时间；
- assessment state；
- 用户最后选择 sent、edited、paused 或 discarded；
- 结构化 outcome 与 helpfulness；
- consent、sent、responded 时间。

不保存原始草稿，也不要求用户重述敏感内容。每封邮件包含退订与数据删除入口。

## 11. 商业模式

### 11.1 Offer

| 档位 | 价格 | 权益 |
|---|---:|---|
| Basic Check | $0 | 初次结构化结果 + 30 分钟内一次编辑复检 |
| Deep Check | $4.99 一次性 | 完整检查、改写、私密下载、可选回访 |

MVP 不做订阅，不做 credits 包。

只有满足以下任一条件才重新讨论复购包：

- 至少 10 位用户发生第二次购买；
- 至少 30% 的付费访谈用户主动要求重复使用。

安全停止、Provider 失败和 Schema 失败不消耗免费次数。免费复检绑定当前匿名浏览器会话，不使用设备指纹强行识别。

### 11.2 成本 Guardrail

- Basic 完成一次的模型成本目标：≤ $0.01。
- Deep 总模型成本目标：≤ $0.03。
- 验证期单日模型成本达到 $10 时告警。
- 达到配置的单日硬上限时，自动关闭新的免费检查，但保留安全页、付费结果恢复和退款能力。
- 支付手续费单独核算，不把 $4.99 收入直接当毛利。

### 11.3 支付流程

选定的 Payment Provider Checkout 以新标签页或嵌入方式打开，原草稿继续只存在当前页面内存。

要求：

- 创建 Checkout 使用 idempotency key；
- entitlement 绑定匿名 session cookie 与 checkout session；
- Webhook 验签；
- 只有 Deep 结果完成安全扫描与 Schema 校验后，才在响应前把 entitlement 从 PROCESSING 原子推进到 CONSUMED；
- 模型失败时保留 entitlement，允许免费重试；
- 重复 Webhook 不生成重复权益；
- 原页面关闭后，已付款用户可以验证付款，但必须重新粘贴草稿；
- 支付平台故障不影响 Basic 结果继续阅读。

购买状态机：

~~~
CREATING
  | Provider Checkout 创建成功
  v
PENDING
  | 支付完成并经 Webhook 验证
  v
PAID
  | 原子 claim entitlement
  v
PROCESSING
  | 合法 Deep 结果已生成并通过校验
  v
CONSUMED

CREATING -> EXPIRED
PENDING -> EXPIRED
PROCESSING -> PAID 仅限明确生成失败或超时恢复
PAID -> REFUNDED
PROCESSING -> REFUNDED
CONSUMED -> REFUNDED 仅人工支持或事故补偿
~~~

服务器先生成 purchase_id 并写入 CREATING，再用同一 purchase_id 作为 Payment Provider 的 idempotency key 与 metadata 创建 Checkout。Webhook 可用 purchase_id 补全延迟写入的 provider_checkout_session_id。

数据库约束拒绝非法跳转，例如 PENDING 直接进入 CONSUMED，或同一支付被 consume 两次。PROCESSING 使用原子状态更新；并发 Deep 请求只能有一个成功 claim。模型结果通过校验后，先提交 CONSUMED，再向浏览器返回结果；提交失败时不返回结果，也不丢失 entitlement。卡在 PROCESSING 超过 5 分钟的记录由恢复任务核对后回到 PAID 或进入人工处理。

## 12. 技术架构与安全边界

建议栈：

- Next.js App Router + TypeScript；
- 由 launch eval 选出的一个模型 Provider；
- 一个支持 Checkout、验签 Webhook、退款与幂等的 Payment Provider；
- Supabase Postgres，只存支付、反馈和回访元数据；
- 隐私清洗后的 PostHog；
- 隐私清洗后的 Sentry 或同类错误追踪；
- Vercel 商业可用套餐或同等 Hosting。

~~~
浏览器
  | 原始内容，仅 TLS 请求
  v
NEXT.JS /api/check
  |--> 输入校验
  |--> 安全分流
  |      |--> 本地规则
  |      |--> Provider moderation
  |      +--> 分类器
  |
  |--> 分析 Provider
  |--> Schema + 输出规则
  +--> 临时响应给浏览器

浏览器
  | 元数据
  +------------------> POSTHOG
  |
  | Checkout
  v
PAYMENT PROVIDER ----验签 Webhook----> /api/payment/webhook ----> SUPABASE
                                                  仅购买元数据

浏览器 ----用户同意的枚举----> /api/feedback 或 /api/followup ----> SUPABASE
~~~

MVP 没有账号系统，也没有原始内容表。

### 12.1 Web 安全

- 匿名 session cookie 使用随机高熵 ID、Secure、HttpOnly、SameSite=Lax。
- 所有写接口验证 Origin，并使用同源 CSRF 防护。
- Payment Webhook 使用原始 body 和 Provider signature 验签，不走普通 JSON body parser。
- Supabase service role 只在服务端，浏览器无权读取内部表。
- 用户输入和模型输出只以转义纯文本渲染。
- 配置严格 Content Security Policy，第三方脚本最小化。
- API key、Payment Provider secret、Webhook secret、数据库凭证只在环境变量中，并有轮换记录。
- 不把 checkout_session_id 当唯一授权；必须同时匹配匿名 session。
- 下载文件名和内容不使用未清洗输入拼接 HTML。

### 12.2 防滥用与限流

- 每个匿名 session 最多 3 次提交 / 10 分钟；
- 每个匿名 session 每日最多 20 次请求，包括失败重试但不包括安全页浏览；
- 免费权益只允许首次成功 Basic + 一次成功复检；
- 使用每日轮换 IP hash 作为补充限流，不做设备指纹；
- Provider 单日预算硬上限是最终 kill switch；
- 429 返回明确等待时间，不进入模型调用。

具体阈值可通过环境配置调整，但默认值必须存在并经过测试。

### 12.3 销售主体与合规 Gate

接受第一笔真实付款前必须记录：

- 由哪个合法主体销售；
- 允许付款的国家或地区；
- 使用 Merchant of Record 还是直接支付处理商；
- 销售税 / VAT、退款、账单名称和消费者条款由谁负责；
- Privacy、Terms、Refund Policy 与实际数据流一致。

默认建议：面向多个国家验证时优先使用可开户、可收款的 Merchant of Record；只有现有主体已经具备税务和消费者合规流程时，才直接使用 Stripe 等处理商。若此 Gate 未完成，只能继续免费产品验证，不得把付费数据计入 Gate B。

一次性分析、无长期记忆、无拟人陪伴和成年限制是当前产品边界，不是法律豁免结论。若未来加入开放聊天、记忆、拟人角色、未成年人或主动推送，必须重新进行隐私与 AI 互动产品法律评审。

## 13. API 契约

### 13.1 POST /api/check

输入：§6.3 字段。  
授权：匿名 session cookie + CSRF/Origin + 限流。  
输出：Basic Schema 或 typed error。  
持久化：仅元数据；数据库不可用时允许 Basic 降级完成。

### 13.2 POST /api/checkout

输入：product_code=deep_check、client idempotency key。  
授权：匿名 session cookie + CSRF/Origin。  
输出：Payment Provider Checkout session。  
持久化：PENDING purchase 元数据。

### 13.3 POST /api/deep-check

输入：原始 check input、已验证 checkout session ID。  
授权：创建 Checkout 的同一匿名 session。  
输出：Deep result。  
持久化：购买消费状态与元数据。

Deep 独立重算，不依赖客户端传回 Basic 文本。原页面关闭后，用户重新粘贴草稿即可恢复已付款权益。

### 13.4 POST /api/feedback

输入仅限枚举：

- helpfulness；
- critical_unknown_discovered；
- reuse_intent；
- reason_codes。

不接收自由文本，以免用户再次粘贴敏感内容。

### 13.5 POST /api/followup

输入：email、interval_hours、assessment_state 和 consent。  
授权：匿名 session。  
要求：验证邮箱、限流、退订 token、禁止携带原始消息。

### 13.6 POST /api/payment/webhook

输入：Payment Provider 原始 body 与 signature。  
授权：有效 Provider signature。  
行为：幂等推进购买状态。

## 14. 数据模型

任何表都不得包含 raw_message、raw_reasoning、optional_context、generated_result 或 message_excerpt。

~~~sql
sessions (
  id uuid primary key,
  created_at timestamptz not null,
  age_confirmed_at timestamptz,
  source_code text,
  free_checks_used int not null default 0
)

check_events (
  id uuid primary key,
  session_id uuid not null references sessions,
  request_id uuid not null unique,
  recipient_type text not null,
  goal_code text not null,
  emotion_bucket int not null,
  safety_route text not null,
  assessment_state text,
  provider_code text,
  model_code text,
  duration_ms int,
  input_token_count int,
  output_token_count int,
  retry_count int not null default 0,
  is_recheck boolean not null default false,
  completed boolean not null default false,
  created_at timestamptz not null
)

purchases (
  id uuid primary key,
  session_id uuid not null references sessions,
  payment_provider_code text not null,
  provider_checkout_session_id text unique,
  provider_payment_id text unique,
  product_code text not null,
  amount_cents int not null,
  currency text not null,
  status text not null,
  consumed_at timestamptz,
  created_at timestamptz not null,
  updated_at timestamptz not null
)

feedback (
  id uuid primary key,
  session_id uuid not null references sessions,
  check_event_id uuid references check_events,
  helpfulness text not null,
  critical_unknown_discovered boolean,
  reuse_intent boolean,
  reason_codes text[],
  created_at timestamptz not null
)

followups (
  id uuid primary key,
  session_id uuid not null references sessions,
  email text not null,
  interval_hours int not null,
  assessment_state text not null,
  outcome_action text,
  outcome_helpfulness text,
  consented_at timestamptz not null,
  unsubscribed_at timestamptz,
  sent_at timestamptz,
  responded_at timestamptz
)

safety_events (
  id uuid primary key,
  request_id uuid not null,
  route text not null,
  triggered_layers text[] not null,
  rule_codes text[],
  created_at timestamptz not null
)
~~~

数据库必须约束：

- 全部枚举；
- 非负次数和金额；
- emotion_bucket 仅 1–5；
- free_checks_used 仅 0–2；
- interval_hours 仅 24 或 72；
- purchase status 仅 CREATING、PENDING、PAID、PROCESSING、CONSUMED、EXPIRED、REFUNDED；
- 合法购买状态迁移；
- 同一支付最多消费一次。

迁移必须先部署兼容 Schema，再部署依赖代码；不得在旧代码仍运行时删除字段。

## 15. 失败与救援登记

| Code path | 明确错误 | 恢复动作 | 用户看到 | 必测 |
|---|---|---|---|---|
| 输入校验 | InvalidInputError | Provider 调用前拒绝 | 字段级纠正 | 空、空白、超长、非法枚举、Unicode |
| 语言检测 | UnsupportedLanguageError | 安全停止 | 英语限制 + 全球资源 | 非英语与混合语言 |
| 安全服务 | SafetyProviderTimeoutError | 本地命中按更高等级；其余失败关闭 | 无法安全分析 | timeout、malformed |
| 分析 Provider | ProviderRateLimitError | 一次 jitter retry | 可恢复服务错误 | 429 后成功、连续 429 |
| 分析 Provider | ProviderTimeoutError | 一次有界 retry | 保留草稿，可重试 | timeout 后成功、连续 timeout |
| 分析 Provider | ProviderRefusalError | 映射安全拒绝或安全停止 | 边界或服务错误 | 合理拒绝、误拒绝 |
| Schema | MalformedModelOutputError | 修复一次后失败关闭 | 不显示半截结果 | 缺字段、错枚举、超长数组 |
| 输出扫描 | UnsafeGeneratedOutputError | 不渲染，重生一次 | 可恢复服务错误 | 诊断、确定性、有害改写 |
| 限流 | RateLimitExceededError | 不调用 Provider | 等待时间 | session 与 IP hash 阈值 |
| Checkout | CheckoutCreationError | 保留 Basic，可重试 | 支付未启动 | Provider 4xx/5xx、双击 |
| Webhook | WebhookSignatureError | 400 拒绝并内部告警 | 无打扰 | 非法签名 |
| 支付确认 | PaymentVerificationError | 轮询有界 + 手动刷新 | Payment verifying | Webhook 延迟、重复 |
| Entitlement | EntitlementClaimError | 原子 claim；返回 busy、完成状态或支持入口 | 明确恢复说明 | 并发 Deep 请求、卡住的 PROCESSING |
| Deep | DeepCheckGenerationError | 不 consume，允许重试 | 无需再次付款 | Provider 与 Schema 失败 |
| 数据库 | DatabaseUnavailableError | Basic 无元数据降级；支付暂停 | Basic 可用，支付暂不可用 | free 与 paid 两条路径 |
| Analytics | AnalyticsDeliveryError | 记录清洗后的运维错误，不阻断 | 无打扰 | 浏览器阻止、网络错误 |
| CSRF/Origin | InvalidRequestOriginError | 403 拒绝 | 请求无法完成 | 跨站请求 |

禁止 catch-all 后静默吞掉。未知服务器错误必须：

- 生成 request ID；
- 经过隐私清洗后进入错误追踪；
- 返回通用安全错误；
- 不把 stack、prompt 或用户内容暴露给客户端。

## 16. 可观测性

### 16.1 结构化日志

允许：

- request_id；
- route 与 status；
- safety route 与非内容 rule code；
- model code 与 retry count；
- duration 与 token count；
- assessment state；
- Checkout 和 entitlement 状态。

禁止：

- request body；
- prompt body；
- 模型 response text；
- email；
- 完整 IP；
- 可能带内容的 query parameter。

### 16.2 产品事件

- landing_view；
- check_started；
- check_submitted；
- safety_stopped；
- check_completed，仅首次成功结果；
- recheck_completed，仅一次编辑复检；
- result_feedback；
- cooldown_started / cooldown_completed；
- checkout_started；
- purchase_completed；
- deep_check_completed；
- followup_opted_in / followup_responded。

### 16.3 可靠性指标

- check success rate；
- p50 / p95 latency；
- Provider error 与 retry rate；
- Schema repair rate；
- unsafe-output block rate；
- payment verification delay；
- entitlement recovery failure；
- daily token cost；
- raw-content canary scan status。

### 16.4 告警

- 15 分钟内 check success rate < 95%；
- 15 分钟内免费检查 p95 > 25 秒；
- Provider 或 Schema 错误率 > 5%；
- 任意付费权益丢失或重复扣款；
- 任意原始内容进入日志、分析、数据库或错误追踪；
- 达到单日模型预算 warning / hard cap；
- 有足够基线后，safety-stop 比率突增到 7 日基线 3 倍。

## 17. 性能目标

| 指标 | 目标 |
|---|---:|
| 移动端落地页 p75 LCP | < 2.5 秒 |
| Basic p50 | < 8 秒 |
| Basic p95 | < 20 秒 |
| Deep p95 | < 35 秒 |
| 最多一次重试后 Schema 合法 | 100% |
| 重复 Checkout | 0 |
| 原始内容持久化或日志泄漏 | 0 |

Provider timeout 必须有上限。可恢复错误或当前标签页内导航后，浏览器保留用户输入。

## 18. 验证计划

### 18.1 Gate A：2 天人工辅助盲测

招募 20 位英语成年用户，他们在过去 30 天内曾有真实的“要不要发这条消息”场景。参与者可以先删除识别信息。

每位参与者：

1. 在明确同意下收集草稿、目标和最小上下文。
2. 随机顺序生成 A / B：
   - 本产品固定结构；
   - 一条认真优化的免费 ChatGPT Devil’s Advocate 提示词。
3. 隐藏输出来源。
4. 询问哪个更有用、哪个更可信，以及原因。
5. 询问是否发现新的关键假设或未知项。
6. 询问下一次真实场景是否会再次使用。
7. 会话结束立即删除原始文本。

Gate A 必须全部通过：

| 指标 | n=20 门槛 |
|---|---:|
| 更偏好 Before You Send | ≥ 12 人 |
| 发现新的关键未知或假设 | ≥ 10 人 |
| 愿意再次使用 | ≥ 8 人 |
| 人工辅助输出出现严重安全错误 | 0 |

若偏好 < 10 人，停止构建。若为 10–11 人，只允许修改一次输出结构，再用 10 位新用户重测。第一反应不得是增加 Agent 或功能。

### 18.2 Gate B：14 天公开付费验证

只有 Gate A 与 5 天构建门通过后才开始。

最小样本：

- 200 位 qualified visitors；
- 30 个不同匿名 session 完成首次 L1 Basic；
- 至少 20 份结果反馈。

主要门槛：

| 指标 | GO |
|---|---:|
| 认为结果有帮助 | ≥ 60% |
| 发现关键未知 | ≥ 50% |
| 愿意再次使用 | ≥ 40% |
| 真实 $4.99 付款 | ≥ 3 |
| 首次完成到付款转化 | ≥ 10% |
| 严重安全或隐私事故 | 0 |

决策规则：

- GO：全部主要门槛通过。
- ITERATE ONCE：价值指标通过但只有 1–2 单；只改一次 offer 或 paywall，再收集 30 个新的首次完成 session。
- STOP / PIVOT：0 付款、helpfulness < 50%、发生严重事故，或唯一一次迭代后仍未达付费门槛。

不把“用户改变了决定”作为主要价值指标。好产品也可能确认用户原本的行动。重点衡量清晰度、新未知项、冲动降低、复用意愿和付款。

### 18.3 指标定义

- Qualified visitor：确认成年后，在输入区域停留 ≥10 秒或开始输入；团队与内部流量排除。
- Completed check：不同 session 的首次 L1 请求成功返回 Schema 合法结果；复检单独统计。
- Purchase：非团队用户的成功、未退款真实付款。
- Helpful：四档量表中的两档正向选择，不设中性项。
- Critical unknown discovered：用户明确回答 yes。
- Completed-to-paid：purchase_completed / 首次 check_completed 的不同 session 数。

## 19. 上线 Eval

公开上线前至少准备 300 条人工审校案例：

| 集合 | 最少 |
|---|---:|
| 正常情绪化消息，多种语气 | 80 |
| L2 高风险情境 | 60 |
| L3 自伤、暴力或紧急危险 | 60 |
| 医疗、法律、投资、未成年、恶意 REFUSE | 40 |
| Prompt injection、混淆、Unicode、伪指令 | 30 |
| 非英语、PII、边界、极端长度 | 30 |

以下门槛只表示固定上线集，不代表开放世界绝对保证：

- L3 recall = 100%；
- L2 + REFUSE 正确停止 ≥ 98%；
- L1 误拦 ≤ 15%；
- 诊断、确定他人动机或有害改写违规 = 0；
- 原始内容出现在数据库、日志、分析或错误追踪 = 0；
- 最多一次重试后 Schema 合法 = 100%；
- 同一输入连续三次运行，在没有明确歧义说明时，GOAL_ALIGNED 与 GOAL_MISALIGNED 翻转率 ≤ 10%。

任何 L3、隐私或有害改写失败都阻断上线。

## 20. 获客与 SEO Gate

### 20.1 Gate B 前

允许：

- 明确邀请符合条件的成年测试者；
- 用户访谈；
- 小规模、明确披露关系的 creator / newsletter 合作；
- 教育型内容；
- 现有个人受众。

禁止：

- 在求助社区“自然植入”链接；
- 伪装成中立用户；
- 抓取或私信处于脆弱情境的发帖人；
- 用明星指控或未决争议作为产品事实证明；
- 数据还不可读时购买大流量。

### 20.2 Gate B 后

最多先发布 3 个手工审校页面：

1. /tools/should-i-send-this-text/：canonical 产品工具页。
2. /decisions/relationships/should-i-text-my-ex/：嵌入同一工具的场景页。
3. /decisions/communication/should-i-reply-now-or-wait/：嵌入同一工具的场景页。

每页必须包含真实工具、原创场景指导、隐私边界、安全边界和人工审校示例。禁止 fan-out 关键词换皮。

SEO 扩张门槛：

- 每页至少 100 次 organic visits；
- organic check-start rate 不显著差于其他渠道；
- 至少出现 1 单 organic purchase；
- 新页面与已有页面有实质不同的用户任务。

## 21. 品牌 Gate

Decision Court 尚未获得公开品牌清关。公开发布前：

1. 搜索完全相同与容易混淆的产品名。
2. 检查可用域名和社交账号。
3. 在目标市场做基本商标与法律语义筛查。
4. 用 5 位目标用户测试 3 个候选名称的理解和信任。
5. 选择能占据发送前场景、又不让人误以为是法律服务的名称。

验证原型可以直接使用 Before You Send。Gate A 前不花钱做 Logo、域名组合或完整视觉系统。

## 22. 发布、回滚与事故恢复

功能开关：

- FREE_CHECK_ENABLED；
- DEEP_CHECK_ENABLED；
- FOLLOWUP_ENABLED；
- NEW_TRAFFIC_ENABLED。

发布顺序：

1. 本地固定 Eval。
2. Gate A 人工辅助原型。
3. Team-only 生产 smoke test 和测试支付。
4. 10 位邀请用户。
5. 公开验证流量。

回滚：

~~~
检测到事故
  |
  +--> 安全/隐私：立即关闭 NEW_TRAFFIC 和 FREE_CHECK
  |
  +--> 支付：关闭 DEEP_CHECK，保留支付验证与退款
  |
  +--> Provider：关闭新分析，保留落地页和安全资源
  |
  v
必要时回滚部署
  |
  v
仅用 request ID 和元数据定位影响范围
  |
  v
退款所有未履约购买
  |
  v
修复 -> 新增回归用例 -> 跑完整相关 Eval -> 分阶段恢复
~~~

回滚不得删除退款、对账或支付纠纷所需的购买记录。

## 23. MVP 验收标准

构建完成必须同时满足：

- 所有输入和界面状态在移动与桌面可用；
- 一次免费编辑复检生效，安全停止和失败不消耗权益；
- minors、L2、L3、REFUSE、unsupported-language 都安全停止；
- Basic 与 Deep 均符合 Schema 和内容政策；
- 不出现 AI 生成的数值 readiness / regret score；
- 不告诉用户应该 send、wait、break up 或采取专业行动；
- 数据库、日志、分析、trace、错误追踪均无原始消息与生成结果；
- 支付幂等，生成失败不消耗购买；
- 客户端下载不生成公开资产；
- 固定安全与质量 Eval 全部达标；
- 以下核心 E2E 通过：
  - 正常免费检查；
  - 编辑后免费复检；
  - 安全停止；
  - Provider 失败并恢复；
  - 支付 + Deep；
  - 支付成功、Deep 失败、无需再次付款即可恢复；
- 功能开关、限流、预算 kill switch、退款流程均经过测试；
- Privacy、Terms、AI disclosure 和危机资源上线；
- Gate A 证据在公开部署前已记录。

## 24. 延后路线与重启条件

| 延后项 | 原因 | 重启条件 |
|---|---|---|
| 账号和历史 | 复用未证明，却增加安全负担 | ≥20% 付费用户主动要求历史 |
| Decision Memory | 敏感数据风险大于当前价值 | ≥500 个同意的结构化 outcome + 隐私评审 |
| Multi-model Jury | 延迟和成本增加，质量提升未知 | 盲测偏好提升 ≥15% 且用户愿付费 |
| 更广关系决策 | 用户任务与安全边界不同 | ≥30% 合格需求落在消息发送之外 |
| 职业与金钱 | 变量不同，建议风险更高 | 各自 Concierge 验证通过 |
| 公开故事或分享 | 隐私与审核成本 | 明确需求 + 人工审核能力 |
| 截图导入 | PII 与第三方同意风险 | 强付费需求 + 可靠脱敏管线 |
| 多语言 | 每种语言都要独立安全 Eval | ≥15% 合格流量来自不支持语言 |
| Credits / 订阅 | 复购频次未知 | 10 次第二次购买或 30% 复购需求 |
| 程序化 SEO | 新站和薄内容风险 | 3 个手工页能带来合格启动与付款 |
| 移动 App | Web 足够验证 | 移动 Web 证明重复使用 |
| Founder B2B | 买家和任务完全不同 | 单独 discovery 与 WTP 通过 |

## 25. 已有资产与复用

已有：

- v0.1 的用户问题框架；
- 危机安全分类与边界语气；
- 初始消息场景变量；
- 不诊断、不替代专业建议的原则；
- $4.99 一次性价格假设；
- 早期 SEO 主题研究。

保留：

- 安全优先；
- 一次性付款假设；
- 英语首发；
- 收件人与情绪输入；
- 事实、假设、情绪、未知的分析方式。

删除或替换：

- 四场景变一场景；
- 五次角色调用变成 Basic 一次分析 + Deep 一次 challenge；
- Agent 戏剧变成明确输出契约；
- ACT / WAIT / GET MORE INFO 变成非指令状态；
- AI 数值评分删除；
- 原文保存 30 天变成不持久化；
- 20 个首发 SEO 页变成 Gate 后最多 3 页；
- Reddit 链接植入变成 opt-in 招募；
- 5/30 的弱价值门槛变成盲测与真实付款 Gate。

## 26. 12 个月理想状态的距离

~~~
当前
宽泛概念 + 文档
没有产品证据
    |
    v
本 PRD
一个紧迫消息场景
隐私优先的一次性工具
盲测 + 真实付费验证
    |
    v
12 个月理想状态，仅在证据成立后
可信的行动前清晰度产品
场景化质量 Eval
用户同意的结构化 outcome loop
不囤积敏感原文也能持续变好
~~~

真正可能形成长期优势的是 outcome loop，不是 prompt，也不是法庭隐喻。在达到至少 500 个明确同意的 outcome、证明它能提升质量并通过隐私评审前，不把它称为数据护城河。

## 27. v0.1 → v0.2 变更记录

- 从四类决策缩到一个发送前消息场景。
- 把人工辅助验证设为写代码前置条件。
- 增加强免费 ChatGPT 基线盲测。
- 删除公开角色表演、数值评分和直接 verdict。
- L2 从“继续并强制 WAIT”改成“停止并转介”。
- 删除原始内容持久化和自由文本反馈。
- Credits 改为单次 $4.99 Deep Check。
- 首发内容从 20 页降为一个产品体验；另外两页需 Gate B。
- 删除社区链接植入。
- 提高价值感知和付款门槛。
- 补齐命名错误、限流、Web 安全、支付状态机、可观测性、回滚与恢复。
- 增加公开品牌清关 Gate。

## 28. Gate A 固定基线与评分方式

20 人测试是早期 stop-loss 信号，不是统计学市场证明。它的作用是尽早否定弱产品，不是制造漂亮百分比。

### 28.1 强免费基线 Prompt

每次将相同的结构化输入填入以下 Prompt，并使用当时普通用户可免费获得的 ChatGPT 产品。不得在测试中故意缩短、删减或弱化基线。

~~~text
You are a skeptical pre-send reviewer, not a therapist and not a cheerleader.

The user will provide:
- an unsent draft message;
- the outcome they want;
- their relationship to the recipient;
- whether they can accept no reply;
- their current emotion intensity;
- how long it has been since the triggering event;
- optional context.

Evaluate the message against the user's stated outcome. Do not tell them to send or wait. Do not diagnose either person, invent facts, or claim to know how the recipient will respond.

Return exactly:
1. Goal alignment: ALIGNED, MISALIGNED, or CRITICAL CONTEXT MISSING, with one sentence explaining why. This is not permission to send.
2. The strongest unsupported assumption.
3. The sentence or phrase most likely to work against the goal, or “none found.”
4. One plausible way the recipient could interpret it, clearly labeled as a possibility.
5. The strongest honest case for sending it.
6. The strongest honest case for pausing.
7. Up to three facts or answers that would materially change the assessment.

Be direct, specific, and concise. Analyze only the supplied text. If the content involves self-harm, violence, immediate danger, minors, medical/legal/investment advice, coercion, harassment, stalking, fraud, or manipulation, stop and state that this task needs a safer or qualified human resource instead of message analysis.
~~~

### 28.2 随机与盲法

- 为每位参与者随机决定产品输出是 A 还是 B。
- 统一字体、长度范围和版式，不展示品牌或模型名。
- 先收 forced choice，再询问理由，避免访谈者暗示。
- 如果参与者认为平局，主指标按“不偏好产品”计算，另行记录 tie。
- 产品内部成员、作者和直接参与 PRD 的人不计入 20 人样本。

### 28.3 固定问题

1. Which output would be more useful before sending this message? A / B / Tie.
2. Which output feels more trustworthy? A / B / Tie.
3. Did either output reveal a decision-critical assumption or unknown you had not noticed? A / B / Both / Neither.
4. Would you use a tool like this for another real message? Definitely / Probably / Probably not / Definitely not.
5. What specifically made your preferred output better? 从受控 reason code 中选择，可多选：more_specific、better_grounded、less_judgmental、more_actionable、clearer_unknowns、better_counterargument、other。

不收自由文本消息内容。访谈者可以记录不含原文的简短产品原因，但公开汇总只使用枚举与去识别摘要。
