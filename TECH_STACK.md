# Before You Send — 技术选型与架构决策

版本：v0.1  
日期：2026-08-28  
状态：推荐方案；标记为 Gate 的供应商决策需在实施前确认  
需求基线：[PRD.md](./PRD.md) v0.2、[SAFETY.md](./SAFETY.md)  
开发顺序：[DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)

## 0. 选型结论

推荐采用一个 TypeScript 单体 Web 应用，而不是拆微服务：

- Next.js App Router + React + TypeScript strict；
- Node.js 24 LTS、Vercel Node Runtime；
- Tailwind CSS v4 + CSS variables，不引入整套组件库；
- Zod 作为浏览器 / 服务端 / AI 输出共享运行时契约；
- 一个由固定 Eval 选出的 AI Provider，直接使用官方 SDK；
- Supabase Postgres + Drizzle ORM + postgres.js，仅保存元数据；
- Upstash Redis 负责限流、短期权益和预算 / 运行时开关；
- Paddle Billing 作为默认 Merchant of Record 候选，只有开户和主体 Gate 通过才接真实付款；
- PostHog 只收服务端转发的 allowlist 事件；Sentry 严格清洗且关闭 replay；
- Vitest + React Testing Library + Playwright + axe；
- Vercel + GitHub Actions，Preview / Production 完全隔离。

这套方案的目标不是“最先进”，而是让一位独立开发者在不牺牲安全、隐私和支付正确性的前提下完成 MVP。MVP 不建设多 Provider、多租户、工作流编排、账号系统或通用组件平台。

## 1. 选型原则

按优先级排序：

1. **隐私边界可证明**：原始草稿与结果不进入持久化、观测或第三方分析；
2. **安全失败关闭**：安全服务不确定时不继续分析；
3. **结构可验证**：所有外部输入与 AI 输出有运行时 Schema；
4. **付款可恢复**：Webhook、并发、超时和数据库故障均有明确状态；
5. **独立开发效率**：一个仓库、一个语言、少量供应商和依赖；
6. **可停止**：Gate A / B 失败时没有高额 sunk cost；
7. **版本稳定**：固定 model snapshot 和依赖 lockfile，验证期间不追新版本。

## 2. 推荐栈总表

| 层 | 推荐 | 决策状态 | 选择理由 |
|---|---|---|---|
| Runtime | Node.js 24.x LTS | 已推荐 | 官方为 LTS，Vercel 默认支持 24.x |
| Framework | Next.js 16 App Router | 已推荐 | 页面、Route Handler、部署和安全头在一个应用内完成 |
| UI runtime | React 19.2 | 随 Next.js 固定 | 当前稳定大版本；不单独追 canary |
| Language | TypeScript strict | 已推荐 | API、状态机、DB 与 AI Schema 共享类型 |
| Package manager | pnpm，实施日固定具体版本 | 已推荐 | 确定性 lockfile、磁盘和 CI 效率 |
| Styling | Tailwind CSS v4 + CSS variables | 已推荐 | 快速实现设计 token，零运行时；现代浏览器范围可接受 |
| UI primitives | 原生语义 HTML，必要时少量自建组件 | 已推荐 | 流程简单，不为一次性产品引入整套 UI 库 |
| Fonts | `next/font`：Newsreader、DM Sans、IBM Plex Mono | 已推荐 | 构建时自托管，不产生浏览器到字体 CDN 的请求 |
| Form / state | 原生表单 + Zod + `useReducer` | 已推荐 | 8 个字段与有限状态无需 React Hook Form / XState |
| API | Next.js Route Handlers，Node runtime | 已推荐 | 明确 HTTP 契约、Webhook raw body、SDK 兼容性 |
| AI | 单一 Provider 官方 SDK + strict JSON Schema | Gate | 必须由固定 Eval、隐私和成本共同决定 |
| Database | Supabase Postgres + Drizzle + postgres.js | 已推荐 | 事务、约束、托管备份；只存元数据 |
| Rate limit / runtime flags | Upstash Redis | 已推荐 | serverless 友好，可做原子计数和快速 kill switch |
| Payment | Paddle Billing hosted Checkout | Gate | 默认 MoR，降低全球间接税和账单责任；需先通过开户 / 主体审核 |
| Email | Resend，仅发送无原文的 generic follow-up | Gate-lite | 接入小、Webhook 能力足够；需核对 DPA / retention |
| Product analytics | PostHog，服务端 allowlist 事件 | 已推荐 | Funnel 灵活；不加载浏览器 autocapture / replay |
| Error tracking | Sentry，PII 关闭 + 双层 scrubber | 已推荐 | 成熟的 Next.js 错误追踪；必须禁止 AI 输入输出采集 |
| Unit / integration | Vitest + React Testing Library | 已推荐 | TypeScript 体验轻，适合规则、状态和 UI 状态 |
| E2E / a11y | Playwright + `@axe-core/playwright` | 已推荐 | 跨浏览器、用户可见行为和自动化无障碍检查 |
| Hosting | Vercel 商业套餐 | 已推荐 | Next.js 原生、Preview、rollback、Cron；敏感接口用 Node runtime |
| CI | GitHub Actions | 实施时确认仓库 | 通用、可复现，不依赖开发者本机 |

### 2.1 版本策略

截至 2026-08-28，架构基线是 Node 24 LTS、Next.js 16、React 19.2 和 Tailwind CSS v4。实施当天：

1. 用官方稳定脚手架生成；
2. 检查 release note 和安全公告；
3. 在 `package.json` 与 lockfile 固定实际安装版本；
4. Node 固定为 `24.x`；
5. Gate B 期间只升级安全补丁，不做框架大版本迁移；
6. model 使用具体 snapshot，不使用会静默变化的 `latest` 别名。

目标浏览器由 Tailwind v4 的最低范围决定：Safari 16.4+、Chrome / Edge 111+、Firefox 128+。如果真实流量证明旧浏览器占比重要，再评估 Tailwind 3.4；MVP 不提前承担双版本兼容。

## 3. 总体架构

~~~text
浏览器：页面内存
  - draft / context / Basic / Deep result
  - 不写 localStorage / sessionStorage / IndexedDB
          |
          | TLS + Cache-Control: no-store
          v
Next.js Node Route Handlers
  1. session + CSRF / Origin + rate limit
  2. normalization + Zod
  3. safety pipeline
       - local high-recall rules
       - provider moderation
       - structured safety classifier
  4. Basic / Deep provider call
  5. strict schema + deterministic scan + output moderation
          |
          +------------------------------> 浏览器临时响应
          |
          +--> Supabase：只写枚举、时延、购买、反馈、回访元数据
          +--> Upstash：限流、短 TTL entitlement、预算、kill switch
          +--> PostHog：allowlist 事件，不含自由文本
          +--> Sentry：错误 code / request ID，不含 request body

Hosted Checkout <---- 新标签页 ---- 浏览器
      |
      +---- signed webhook ----> Next.js ---- transaction ----> Supabase
~~~

### 3.1 为什么是单体应用

当前只有一个主要流程、六个写 API 和一组后台恢复任务。拆微服务会增加：

- secrets 和日志面；
- 跨服务 trace 泄漏风险；
- 本地开发与部署复杂度；
- 支付状态的一致性问题；
- Gate 失败后的 sunk cost。

服务边界用目录、接口和数据库事务表达即可。只有未来流量、合规或团队所有权产生真实边界时才拆服务。

## 4. 前端架构

### 4.1 渲染边界

- Server Components：公共页面壳、静态文案、Privacy / Terms / Safety；
- Client Component：草稿表单、页面内状态机、结果、冷却计时、支付验证；
- Route Handlers：所有写操作和供应商通信；
- 原始草稿不进入 URL、query string、server-rendered HTML、React Server Component cache 或 analytics props；
- 所有分析响应带 `Cache-Control: no-store, private`；
- 敏感页面不做 prefetch 到带用户数据的 URL，因为根本不存在这类 URL。

### 4.2 页面状态

使用一个 discriminated-union `useReducer`，而不是多个互相冲突的 boolean：

~~~text
EMPTY -> EDITING -> VALIDATING -> SAFETY_CHECKING -> ANALYZING
  |          |             |              |
  |          |             +--> SAFETY_STOP / UNSUPPORTED / UNAVAILABLE
  |          +--> INVALID
  +---------------------------------------> RECOVERABLE_ERROR

ANALYZING -> BASIC_RESULT -> RECHECK_EDITING -> RECHECKING -> BASIC_RESULT
                         \-> COOLING_DOWN
                         \-> CHECKOUT_PENDING -> PAYMENT_VERIFYING
                                                -> DEEP_PROCESSING -> DEEP_RESULT
~~~

每个状态明确：可见内容、可用动作、保留数据、焦点位置、analytics event 和可恢复路径。MVP 不引入 XState；当状态图真正跨页面、跨设备持久化时再考虑。

### 4.3 表单与校验

- 原生 `<form>`、`label`、`fieldset`、`legend`；
- Zod Schema 共享枚举、长度和跨字段规则；
- 浏览器校验用于即时反馈，服务端是最终边界；
- 错误后保留全部合法字段，并把焦点移到错误摘要；
- 字数在达到限制 80% 后显示；
- model 输出作为纯文本节点渲染，不解释 HTML 或 Markdown；
- 不安装富文本编辑器、Markdown renderer 或 clipboard 监听。

### 4.4 视觉实现

- Tailwind v4 只负责布局与 token utilities；
- 颜色、字体、圆角、阴影、motion 用 CSS variables 定义；
- 不整套引入 shadcn/ui、Material UI、Ant Design；
- 对话框优先避免；必须使用时遵循 WAI-ARIA dialog focus 行为；
- Brief 使用专用 print stylesheet 和浏览器“打印为 PDF”，不引入服务端 PDF 或 canvas 库；
- dark mode、主题切换和动画库不在 MVP。

## 5. API 与服务端边界

### 5.1 Route Handlers

| Route | Runtime | 超时策略 | 数据库依赖 | 说明 |
|---|---|---|---|---|
| `POST /api/check` | Node | 有界 provider timeout + 最多一次 retry | 可降级 | DB 故障时仍可返回 Basic，但不记录元数据 |
| `POST /api/checkout` | Node | 短超时，不自动重复创建 | 必须 | 先写 `CREATING`，再创建 hosted Checkout |
| `POST /api/deep-check` | Node | 有界 timeout + 可恢复 | 必须 | 原子 claim entitlement |
| `POST /api/feedback` | Node | 短超时 | 必须 | 只接受受控枚举 |
| `POST /api/followup` | Node | 短超时 | 必须 | email + consent，不接原文 |
| `POST /api/payment/webhook` | Node | 快速验签与幂等写入 | 必须 | 读取 raw body，不走普通 parser |
| `POST /api/telemetry` | Node | best effort | 不必须 | 只接 event enum + 允许属性 |
| `GET /api/payment/status` | Node | 短轮询 | 必须 | Webhook 延迟恢复 |

`/api/telemetry` 和 `/api/payment/status` 是实现层补充契约；它们不改变 PRD 产品范围。

### 5.2 请求安全

- 高熵随机匿名 session，`Secure; HttpOnly; SameSite=Lax`；
- 服务端签发并绑定 session 的 CSRF token，写请求用自定义 header；
- 同时校验 `Origin` 与允许的 `Host`；
- Webhook 只信 Provider signature 与 raw body，不信浏览器回跳；
- request ID 由服务端生成，客户端不可覆盖；
- 限制 Content-Type、body 大小、字段数量和字符串长度；
- 错误响应只返回 typed code、可恢复提示和 request ID；
- API key、数据库和 payment secret 只在 Node server 环境可见。

### 5.3 缓存与运行时

- AI、支付、反馈接口全部 `no-store`；
- 不使用 Next.js Data Cache 保存任何含用户内容的响应；
- 不使用 Edge runtime 运行 AI、支付和数据库流程，避免 SDK / crypto / transaction 差异；
- 公共静态页可以由 CDN 缓存；
- 恢复任务和 follow-up 使用带 secret 的 Vercel Cron；
- Cron 只处理 purchase / follow-up metadata，不读取原始消息，因为原始消息不存在。

## 6. AI Provider 与模型策略

### 6.1 推荐决策

运行时只接一个 Provider。初始首选候选是 OpenAI Responses API，原因是其官方 SDK 同时提供 strict JSON Schema 和 Moderation API；Anthropic Messages API 作为盲评 challenger。最终选择必须由固定 Eval 决定，不因品牌偏好直接拍板。

推荐选择流程：

| 维度 | 硬门槛 / 权重 | 证明方式 |
|---|---|---|
| L3 recall | 100%，硬门槛 | 固定安全集 |
| L2 + REFUSE | ≥98%，硬门槛 | 固定安全集 |
| 有害改写 / 诊断 / 确定动机 | 0，硬门槛 | 人工审校 + 规则扫描 |
| Schema | 一次修复后 100%，硬门槛 | 自动 contract test |
| excerpt grounded | 100%，硬门槛 | 输入精确 substring 校验 |
| 用户盲测偏好 | 35% | Gate A 与补充盲评 |
| 具体性与关键未知 | 25% | 人工 rubric |
| p95 latency | 15% | 同区域测试 |
| Basic / Deep 成本 | 15% | token 计费实测 |
| 稳定性 | 10% | 相同输入三次运行 |

任何硬门槛失败直接淘汰，不用平均分补偿。

### 6.2 OpenAI 候选配置

- 使用官方 TypeScript SDK 和 Responses API；
- `store: false`；
- 使用支持 `json_schema` 且 `strict: true` 的固定 model snapshot；
- 输入先走 Moderation，再走独立结构化 safety classifier；
- 输出再次走 Moderation 与确定性扫描；
- 不使用 Conversations、Files、Background mode、web search、tools 或远程 MCP；
- 不开启会记录 prompt / response 的 AI telemetry；
- 不把完整 input 放在 exception、span name 或 attributes；
- Basic 和 Deep 都非流式返回，避免渲染半截、未校验内容。

非流式并不意味着假进度。请求期间统一写 `Checking boundaries and goal alignment…`，只说明正在完成的工作，不假装知道服务端当前子步骤，也不展示虚构百分比；超过时延阈值后只切换为 slow state。

### 6.3 数据保留事实

“应用不保存”与“Provider 绝不保留”是两件事：

- OpenAI 官方说明 API 数据默认不用于训练，除非客户主动 opt in；默认 abuse monitoring log 可能保留最多 30 天。Responses API 应显式 `store=false`，ZDR / Modified Abuse Monitoring 需要资格与批准；
- Anthropic 官方说明 API 输入输出标准情况下在 30 天内删除，ZDR 需要另行协议；部分 covered models 即使在某些 ZDR 场景也可能要求有限保留；
- 因此上线文案只能承诺 **“not saved by us”**，除非选定 Provider 的合同与实际配置支持更强说法；
- Provider 名称、保留期、地区和 subprocessors 必须进入 Privacy 文档与上线证据。

### 6.4 Prompt 与 Eval 管理

- prompt、Schema、安全规则和 model snapshot 都有独立版本号；
- 生产事件只记录版本号，不记录 prompt 展开内容；
- Eval fixture 全部是合成或明确授权并去识别的审校文本；
- prompt / model 变更触发相关完整 Eval；
- Gate B 期间不静默切换 model；
- Provider outage 时关闭新分析，不自动切第二 Provider，因为未验证的 fallback 会改变安全行为。

### 6.5 为什么不选 Vercel AI SDK 作为首发抽象

本期不需要多 Provider 运行时、streaming UI 或 tool calling。直接官方 SDK：

- 依赖和故障面更少；
- retention 参数与原始响应更明确；
- 更容易确认没有自动记录 input / output；
- 防止为了“以后可切模型”提前建设未验证抽象。

保留一个很薄的内部函数边界以便测试 mock 即可，不建设 provider registry 或 factory。

## 7. 数据与存储

### 7.1 Supabase Postgres

只启用 Postgres，不启用 Auth、Storage、Realtime。选择理由：

- 支付状态需要 ACID transaction 与数据库约束；
- feedback / follow-up / purchase 都是结构化元数据；
- 托管备份、SQL migration 和恢复能力成熟；
- 未来停止项目时数据导出与删除路径明确。

Vercel serverless 运行流量使用 Supabase transaction pooler；迁移和管理使用 direct connection。postgres.js 在 transaction pooler 下关闭 prepared statements。Drizzle 提供类型和 transaction，但关键状态仍由数据库条件更新 / 函数保证，不依赖 TypeScript 自觉。

### 7.2 数据库强约束

- 所有枚举用数据库 enum 或 check constraint；
- `request_id`、provider event ID、checkout ID、payment ID 唯一；
- purchase 状态更新带 expected previous state；
- claim 使用 transaction + row lock / 原子条件更新；
- 同一 purchase 最多一个 `CONSUMED`；
- 禁止出现 `raw_message`、`context`、`prompt`、`response`、`excerpt`、`generated_result` 字段；
- migration 先向后兼容，再发布依赖代码；
- 数据删除与 90 天聚合任务可重复、可审计。

### 7.3 Follow-up email 加固

PRD 中的逻辑字段 `email` 在物理实现中推荐拆为：

- `email_ciphertext`：应用层 envelope encryption；
- `email_lookup_hash`：HMAC，用于退订、去重和查找；
- `email_key_version`：支持轮换；
- generic 邮件中只包含随机一次性 token，不包含草稿、目标、assessment 文本或结果；
- 回访完成 30 天后删除可识别邮箱；
- provider message ID 只用于投递状态和删除请求。

这是存储实现细化，不改变 PRD 的产品字段和回访范围。

### 7.4 Upstash Redis

用途限定为：

- 3 次 / 10 分钟 session 限流；
- 20 次 / 日 session 限流；
- 每日轮换 IP hash 的补充限流；
- 30 分钟免费复检资格；
- Provider 预估成本原子计数与日预算；
- `FREE_CHECK_ENABLED`、`DEEP_CHECK_ENABLED`、`FOLLOWUP_ENABLED`、`NEW_TRAFFIC_ENABLED` 运行时开关；
- 短期 idempotency / lock，不保存用户文本。

模型接口的 Redis timeout 必须失败关闭，不能沿用 SDK 的默认“超时则允许请求”，否则限流和预算保护在故障时同时失效。静态安全资源和支付恢复不依赖 Redis 才能展示。

## 8. 支付与 Entitlement

### 8.1 默认推荐：Paddle Billing hosted Checkout

原因：Paddle 以 Merchant of Record 身份处理数字产品交易的间接税、发票与部分交易责任，适合尚未建立全球税务流程的独立开发者。采用 hosted Checkout 新标签页，原始草稿继续留在原页面内存，也减少支付脚本进入敏感页面的 CSP 面。

上线前 Gate：

- 销售主体和所在地区可被 Paddle 接受；
- 一次性 $4.99 数字服务、退款政策和账单描述通过审核；
- Webhook、sandbox、退款和对账流程实测；
- Privacy、Terms、Refund 与实际 Provider 一致。

若未通过，不临时改用不合规的直连方案；继续免费验证，直到主体和支付责任清楚。

### 8.2 备选与拒绝

| 方案 | 结论 | 原因 |
|---|---|---|
| Paddle Billing | 默认候选 | 成熟 MoR、hosted Checkout、税务责任更清晰 |
| Stripe direct Checkout | 条件备选 | 只有已有主体、税务登记 / 申报和消费者条款流程时使用 |
| Stripe Managed Payments | 暂不作为 MVP 基线 | 当前官方仍标为 public preview，不把关键付款路径押在预览能力上 |
| 多 Payment Provider | 拒绝 | 验证期没有业务价值，成倍增加 Webhook 和退款测试 |
| 自建银行卡表单 | 拒绝 | PCI、欺诈、无障碍和错误恢复成本不合理 |

代码边界只定义本期需要的 Checkout、verify webhook、refund、get status 四类操作，并只实现一个具体 Provider。若未来迁移，以 ADR 和测试替换实现，不提前做抽象工厂。

### 8.3 状态正确性

- 创建 purchase 后再调用 Checkout，purchase ID 同时作为 idempotency 和 Provider metadata；
- 浏览器回跳只触发状态查询，不能单独授予权益；
- Webhook event ID 去重，签名失败直接 400；
- `PAID → PROCESSING` 原子 claim；
- Deep 通过 Schema 和安全扫描后，先提交 `CONSUMED`，再返回结果；
- 模型失败或超时明确回到 `PAID`；
- `PROCESSING` 超过 5 分钟由 Cron 核对；
- 每日支付平台与数据库对账；
- 所有未履约支付可按 request / purchase ID 定位和退款。

## 9. Analytics、日志与错误追踪

### 9.1 PostHog

不在敏感页面加载 `posthog-js`。浏览器只向同源 `/api/telemetry` 发送：

- 固定 event enum；
- 固定枚举属性；
- duration / count；
- 不可逆、短周期的匿名 session 派生 ID。

服务端再次按 allowlist 校验后发送 PostHog。明确关闭：

- autocapture；
- session replay；
- heatmap；
- form / input capture；
- person profiles 与 `identify`；
- URL query 和 referrer 中非必要信息；
- 完整 IP capture。

这比“先采集再 mask”更适合本产品，因为草稿本身就是最高敏感资产。

### 9.2 Sentry

- `sendDefaultPii: false`；
- 关闭 session replay、user feedback screenshot 和 AI input / output recording；
- client / server `beforeSend` 只保留错误 code、route template、release、request ID；
- 删除 request body、query、headers、cookies、breadcrumbs、extra、span attributes 中的自由文本；
- Sentry 项目端同时开启 IP scrub 与 sensitive field rules；
- exception message 不拼接用户输入或 Provider 原始响应；
- malformed Provider 输出只记录 schema error code 和字段名，不记录值；
- canary 自动验证 SDK 升级后配置没有回退。

### 9.3 应用日志

采用结构化 JSON 和明确字段 allowlist：

~~~text
timestamp, level, request_id, route_code, session_hash,
provider_code, model_code, safety_route, assessment_state,
duration_ms, token_counts, retry_count, error_code, release
~~~

禁止 `console.log(request)`、`console.log(error.response)`、完整 URL、headers、body、prompt 和模型输出。未知错误先清洗，再交给 logger / Sentry。

## 10. Email 与回访

推荐 Resend 只负责事务邮件：

- 邮件标题与正文是 generic reminder；
- 不出现收件人类型、目标、assessment、草稿或改写；
- link 使用随机、单次、过期 token；
- Webhook 验签，只记录 delivered / bounced / complained 枚举；
- 不启用 open / click tracking，除非法律与用户同意评审后明确需要；
- 每封邮件提供退订和删除入口；
- 上线前记录 Resend 对邮件内容与日志的保留方式。

如果 Email Provider 数据处理不能满足要求，先关闭 `FOLLOWUP_ENABLED`；回访不是 Basic / Deep 的上线阻断项。

## 11. 安全控制

| 面 | 控制 |
|---|---|
| Browser | CSP、HSTS、Referrer-Policy、Permissions-Policy、纯文本渲染、无第三方敏感脚本 |
| Session | 高熵 HttpOnly cookie、SameSite、轮换、固定最长寿命 |
| Request | Zod、body limit、Origin + CSRF、rate limit、request ID |
| AI | 输入安全分流、固定 prompt、strict schema、excerpt grounding、输出 moderation |
| Database | server-only credentials、最小字段、transaction、constraint、备份与删除作业 |
| Payment | hosted Checkout、raw-body signature、event 去重、原子 entitlement |
| Observability | allowlist logging、PII scrub、无 replay、canary search |
| Supply chain | lockfile、Dependabot / Renovate 仅提 PR、secret scan、依赖最小化 |
| Incident | Redis runtime flags、回滚、Provider kill switch、退款 runbook |

CSP 初始原则：`default-src 'self'`，按所选 Payment / analytics endpoint 最小放行；不为了省事使用通配符。Hosted Checkout 新标签页可让主工具页保持更严格的 `script-src`。

## 12. 测试技术

### 12.1 Vitest

覆盖：

- Unicode normalization；
- Zod 输入与 AI 输出 Schema；
- safety severity merge；
- typed error mapping；
- excerpt exact match；
- forbidden language / verdict scanner；
- purchase transition；
- analytics / Sentry scrubber；
- daily salt 和 rate-limit key；
- follow-up token 和 email encryption。

### 12.2 Integration

用 provider fixture 和 sandbox，不把真实用户内容放入测试录制：

- moderation + classifier disagreement；
- malformed AI 输出和一次修复；
- DB transaction / concurrent claim；
- duplicate / out-of-order Webhook；
- Redis timeout 的 fail-closed 行为；
- PostHog / Sentry outbound payload snapshot；
- email body snapshot 确认无敏感字段。

### 12.3 Playwright + axe

覆盖 Chrome、WebKit 和移动 viewport；核心 locator 使用 role / label。axe 自动检查 WCAG A / AA 常见问题，并配合手工键盘、VoiceOver / NVDA 和 200% zoom，因为自动化无法证明全部无障碍要求。

### 12.4 AI Eval runner

Eval 与普通 unit test 分开：

- smoke 子集可在 PR 运行；
- 完整 300 条在 prompt / model / safety 变更与发布候选运行；
- 输出只保存 case ID、版本、枚举评分、时延、token 和失败 reason code；
- 对失败样例的人工查看在受控本地环境进行；
- 不把生产用户草稿自动加入 Eval。

## 13. 明确不引入的技术

| 技术 | 当前不引入原因 |
|---|---|
| Redux / Zustand | 单页有限状态可由 `useReducer` 清楚表达 |
| XState | 状态复杂度尚未达到依赖收益点 |
| React Hook Form | 字段少；原生表单 + Zod 足够 |
| shadcn/ui / MUI / Ant Design | 容易带入无关组件、样式和依赖 |
| LangChain / agent framework | 没有 tool graph、memory 或 agent orchestration |
| Vercel AI SDK | 首发不需要多 Provider / streaming 抽象，且要最小化 telemetry 风险 |
| Vector database | 没有知识库、历史或记忆 |
| Supabase Auth / Storage / Realtime | 没有账号、文件或实时协作 |
| Server-side PDF | Brief 可用浏览器 print stylesheet 完成 |
| Feature flag SaaS | 四个开关复用 Redis 即可 |
| Kubernetes / queue platform | 验证期流量与任务不需要 |
| 多区域 active-active | 先证明价值；当前会放大状态与隐私复杂度 |

## 14. 实施前未决 Gate

| Gate | Owner | 最迟时间 | 通过证据 | 未通过动作 |
|---|---|---|---|---|
| AI Provider / model | Product + engineering + safety | Build Day 0 | 固定 Eval、成本、时延、retention 记录 | 不开发分析或只做 mock UI |
| Provider ZDR / retention | Privacy owner | 邀请上线前 | Console / contract 截图、Privacy 一致 | 保守披露或更换 Provider |
| Paddle 主体 / 地区 | Legal / accounting | Build Day 0 | 账户获批、商品和退款规则确认 | 关闭真实付款，继续免费验证 |
| Email DPA / retention | Privacy owner | Day 4 | generic 模板、保留和删除验证 | 关闭 follow-up |
| Vercel / Supabase / PostHog / Sentry region | Privacy owner | 邀请上线前 | 数据流表和 subprocessors | 调整地区或禁用非必要服务 |
| 公开品牌 | Product / legal | 公开 Gate B 前 | PRD §21 清关 | 继续使用验证工作名，不买大规模流量 |

## 15. 官方依据与复核日期

以下页面于 2026-08-28 复核；实施当天仍需再次检查版本和条款：

- [Node.js release schedule](https://nodejs.org/en/about/previous-releases)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js installation and requirements](https://nextjs.org/docs/app/getting-started/installation)
- [React versions](https://react.dev/versions)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Tailwind CSS v4 compatibility](https://tailwindcss.com/docs/compatibility)
- [Next.js font self-hosting](https://nextjs.org/docs/app/api-reference/components/font)
- [OpenAI API data controls](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint)
- [OpenAI Moderations API](https://platform.openai.com/docs/api-reference/moderations)
- [Anthropic API retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- [Anthropic zero data retention scope](https://privacy.claude.com/en/articles/8956058-i-have-a-zero-data-retention-agreement-with-anthropic-what-products-does-it-apply-to)
- [Supabase Postgres connection modes](https://supabase.com/docs/guides/database/connecting-to-postgres)
- [Drizzle transactions](https://orm.drizzle.team/docs/transactions)
- [Upstash rate limit SDK](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview)
- [Paddle as Merchant of Record](https://www.paddle.com/help/sell/tax/how-paddle-handles-vat-on-your-behalf)
- [Stripe Checkout fulfillment and idempotency](https://docs.stripe.com/checkout/fulfillment)
- [Stripe Managed Payments status](https://docs.stripe.com/payments/managed-payments/how-it-works)
- [PostHog data collection controls](https://posthog.com/docs/privacy/data-collection)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

这些链接是能力与当前状态依据，不替代 Provider 合同、当地法律意见或实际账户配置验证。
