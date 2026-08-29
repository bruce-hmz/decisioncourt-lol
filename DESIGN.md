# Design System — Before You Send

版本：v0.1  
日期：2026-08-28  
状态：推荐设计方向；本轮按要求未生成 HTML、组件代码或可点击原型  
需求基线：[PRD.md](./PRD.md) v0.2、[SAFETY.md](./SAFETY.md)  
技术实现边界：[TECH_STACK.md](./TECH_STACK.md)

## 0. 设计结论

### 0.1 方向

**Quiet Editorial Checkpoint / 安静的编辑式检查点**

它不是法庭、聊天机器人、治疗空间或数据仪表盘。它更像用户在发送前把手机放下一会儿，读到一份冷静、具体、没有立场表演的编辑批注。

用户进入后的前三秒应产生三个判断：

1. “这里看起来很私密。”
2. “它不会评判我，也不会替我做决定。”
3. “我现在就能把消息放进去检查。”

### 0.2 记忆点

产品最应被记住的不是某种 AI 角色，而是结果页的 **Goal Mirror / 目标镜像**：

> You said you want to repair the relationship.  
> Some wording in this draft may work against that goal.

结果先复述用户自己声明的目标，再指出草稿和目标的关系。这个顺序让分析显得有依据，也持续提醒用户：产品在检查文字是否服务于目标，不是在给“发送许可”。

### 0.3 设计原则

- 先降噪，再给信息；
- 先展示依据，再展示判断；
- 让用户保有行动权；
- 不把情绪做成娱乐；
- 不用颜色制造道德判决；
- 隐私说明必须在输入前可见；
- 安全停止必须比付费和转化更优先；
- 每个状态都有明确恢复路径；
- 移动端是一等体验，不是桌面缩小版。

## 1. Product Context

- **What this is:** 一次性的发送前消息检查。用户粘贴未发送草稿，声明希望得到的结果，产品揭示文字、假设或缺失信息如何可能影响该目标。
- **Who it is for:** 年满 18 岁、正准备发送一条可能后悔的英语消息、希望先获得清晰度的人。
- **Space / category:** AI 辅助沟通、关系与情绪化行动前工具，但不定位为 dating coach、therapy、message generator 或 chatbot。
- **Project type:** 响应式 Web 工具，单一主流程，少量静态信任页面。
- **Primary context:** 很多用户会在单手手机、强情绪、低耐心和对隐私敏感的状态下使用。
- **Public name:** Before You Send 是体验名；Decision Court 仍为内部工作名，品牌清关前不把法庭隐喻视觉化。

本设计没有采用竞品视觉复刻。方向直接由产品任务、隐私承诺和安全边界推导，避免重新落入常见 AI Chat 或 Dating Coach 视觉。

## 2. Coherent Design Proposal

| 维度 | 决策 | 理由 |
|---|---|---|
| Aesthetic | 安静、编辑式、克制 | 让情绪化用户感到被认真对待，而非被娱乐或诊断 |
| Decoration | intentional minimal | 由排版、纸张色和少量分隔线建立气质，不用装饰图形抢注意力 |
| Layout | hybrid | 落地首屏用不对称编辑布局；输入后与结果使用严格单列阅读布局 |
| Color | restrained | 一个深青主色、一个琥珀暂停色、暖中性色；颜色稀少且有意义 |
| Typography | Newsreader + DM Sans + IBM Plex Mono | Serif 带来反思感，Sans 保证表单清晰，Mono 只用于计时与 request ID |
| Spacing | 4px 基础、comfortable | 高情绪场景需要可呼吸，但不能让移动流程显得冗长 |
| Motion | minimal-functional | 只帮助理解状态变化，不用动效制造紧迫或兴奋 |
| Theme | 首发仅 light | 暖纸张方向是核心气质；dark mode 会使关键状态与对比测试翻倍 |

这些选择相互强化：暖纸张背景和编辑 Serif 建立“冷静阅读”感，DM Sans 与严格单列保证任务效率，深青色表达可信而非医疗感，琥珀只表达“停一下看看”，轻微 motion 避免让用户更激动。

### 2.1 Safe choices

- **主流程单列化**：输入、错误、结果和恢复都符合成熟表单习惯，用户不需要学习聊天或 Agent 界面。
- **原生表单语义与可见 label**：在低耐心和辅助技术环境中稳定可用。
- **状态不用颜色单独表达**：满足无障碍，也避免把 Goal alignment 误读为红绿批准。
- **付费权益和价格直白**：不使用倒计时、假折扣、模糊 credits 或订阅诱导。

### 2.2 Deliberate risks

1. **AI 工具使用编辑 Serif 作为展示字体**  
   收益：比常见全 Sans AI SaaS 更有人味、更像经过思考的阅读工具。  
   成本：技术感更弱；如果使用过量会降低表单效率。  
   控制：Newsreader 只用于 Hero、主要结果标题和少量 pull quote，所有操作与正文仍用 DM Sans。

2. **桌面首屏采用不对称 Hero + 可直接输入，而不是居中 Hero + CTA**  
   收益：第一屏同时完成品牌表达和真实任务，减少高意图用户一次点击。  
   成本：响应式设计比居中模板复杂。  
   控制：768px 以下完全回到单列，不保留强行左右布局。

3. **三种 assessment 共用中性结果容器，不给 ALIGNED 绿色批准或 MISALIGNED 红色警告**  
   收益：降低 AI 被当成行为许可或道德判决的风险。  
   成本：状态快速扫描速度略慢。  
   控制：通过明确标题、图形符号和说明文案区分，而不是通过红绿。

## 3. Anti-patterns

本产品明确不使用：

- 法槌、天平、法官袍、陪审团、审判席；
- Advocate / Prosecutor / Judge 卡片和头像；
- Chat bubbles、打字中头像或拟人 AI；
- 红绿 verdict、大勾或大叉；
- readiness、regret、emotion 仪表盘和进度环；
- 紫色 AI 渐变、玻璃拟态、发光边缘；
- 三列图标功能墙；
- 居中一切的通用 SaaS 首页；
- 装饰性 stock photo、伤心人物或情侣照片；
- 每个元素都使用 pill 或大圆角；
- 付费倒计时、限时折扣、假稀缺；
- 自动滚动、庆祝彩带、脉冲式催促；
- 通过字体、颜色或长度把某一 assessment 暗示为“正确选择”。

## 4. Information Architecture

### 4.1 MVP routes

| Route | 目的 | SEO / cache | 备注 |
|---|---|---|---|
| `/` | 进入产品 | 308 到 canonical 工具页 | 减少维护两个落地版本 |
| `/tools/should-i-send-this-text/` | Hero + 完整工具主流程 | Gate B GO 前 `noindex`；用户结果 `no-store` | 从 MVP 起稳定使用未来 canonical URL，验证通过后再开放索引 |
| `/safety` | 产品边界、危机资源、拒绝范围 | 静态可缓存 | 安全停止页可深链 |
| `/privacy` | 数据流、Provider、保留和删除 | 静态可缓存 | 文案必须与实际配置一致 |
| `/terms` | 使用条款与年龄边界 | 静态可缓存 | 不夸大专业能力 |
| `/refund` | 一次性购买退款规则 | 静态可缓存 | 与 Payment Provider 一致 |
| `/payment/return` | 付款返回与验证 | `no-store` | 不依赖回跳直接授予权益 |
| `/follow-up/[token]` | 结构化 outcome 回访 | `noindex, no-store` | token 不含用户信息 |

Gate B 后的两个场景页复用同一工具组件和设计系统，不复制第二套状态逻辑。

### 4.2 Global navigation

Header 保持最小：

- 左：`Before You Send` wordmark；
- 右：`How it works`、`Privacy`、`Safety`；
- 移动端不做汉堡菜单，保留 `Privacy` 与 `Safety` 两个文本链接，`How it works` 可下移到页内；
- 无 Login、Dashboard、History；
- 工具已经在首屏，不重复放醒目的导航 CTA。

Footer：

- `Privacy`、`Safety`、`Terms`、`Refunds`；
- “AI can be wrong. This is not therapy, legal, medical, or emergency support.”；
- 工作品牌和版权；
- 不放社交 feed、testimonial carousel 或用户消息案例。

## 5. Layout

### 5.1 Grid

- 全局最大宽度：1200px；
- 页面左右安全边距：移动 16px、平板 24px、桌面 32px；
- Desktop Hero：12 栏，左 5 栏文案，右 7 栏输入面板；
- 输入展开后：最大 720px 单列；
- Basic / Deep 结果：最大 760px 单列；
- 法律与安全文章：最大 680px；
- 桌面结果中的“双重诚实理由”可在容器内做 2 栏，其他结果保持单列；
- 不用永久 sidebar，避免移动端信息重排和桌面仪表盘感。

### 5.2 Breakpoints

| 名称 | 范围 | 行为 |
|---|---|---|
| Base | 320–767px | 全单列；按钮默认全宽；header 只保留必要链接 |
| Medium | 768–1023px | Hero 仍单列但增加留白；结果动作可横排 |
| Large | 1024–1279px | 12 栏 Hero；输入面板与文案并列 |
| XLarge | ≥1280px | 固定 1200px 容器，不无限拉宽 |

必须实测 320、360、390、768、1024、1280px，以及 200% zoom。

### 5.3 First viewport

桌面 1024px+：

~~~text
┌────────────────────────────────────────────────────────────────────────────┐
│ Before You Send                         How it works  Privacy  Safety       │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Before you send it,              ┌─────────────────────────────────────┐  │
│  check what it actually does.     │ Your unsent message                 │  │
│                                   │ ┌─────────────────────────────────┐ │  │
│  Paste the message, name the      │ │                                 │ │  │
│  outcome you want, and see        │ │                                 │ │  │
│  where wording or assumptions     │ └─────────────────────────────────┘ │  │
│  work against that goal.          │                                     │  │
│                                   │ What do you want this message to do? │  │
│  Private by default.              │ ○ Clarify        ○ Repair            │  │
│  Not saved by us.                 │ ○ Set boundary   ○ Apologize         │  │
│                                   │ [More outcomes…]                     │  │
│                                   └─────────────────────────────────────┘  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
~~~

移动端：

~~~text
┌──────────────────────────────┐
│ Before You Send     Privacy  │
│                     Safety   │
├──────────────────────────────┤
│ Before you send it,          │
│ check what it actually does. │
│                              │
│ Private by default.          │
│ Not saved by us.             │
│                              │
│ Your unsent message          │
│ ┌──────────────────────────┐ │
│ │                          │ │
│ │                          │ │
│ └──────────────────────────┘ │
│                              │
│ What outcome do you want?    │
│ ○ Clarify                    │
│ ○ Repair                     │
│ ○ Set a boundary             │
│ ○ More…                      │
└──────────────────────────────┘
~~~

Hero 高度不强制占满屏；在常见手机首屏应至少看见 textarea 顶部，避免只有营销文案。

## 6. Typography

### 6.1 Font roles

- **Display / Hero:** Newsreader variable — 温和的编辑感，适合反思而不显奢华或法律化；
- **Body / UI / Labels:** DM Sans variable — 字面开放，移动端表单和长结果清晰；
- **Timer / Request ID:** IBM Plex Mono — 只用于需要固定宽数字和技术定位的极少场景；
- **Loading:** 通过 `next/font` 构建时下载并自托管，浏览器不请求 Google Fonts；
- **Fallback:** 由 `next/font` 自动调整，避免 layout shift。

不使用 Inter、Roboto、Arial、Helvetica、Poppins、Space Grotesk 作为主字体，也不使用手写字体营造“情感陪伴”。

### 6.2 Type scale

| Token | Desktop | Mobile | Font | Usage |
|---|---|---|---|---|
| `display-xl` | 56/60, 500 | 42/46, 500 | Newsreader | Hero，仅一处 |
| `display-lg` | 42/48, 500 | 36/42, 500 | Newsreader | 结果主标题 |
| `heading-1` | 36/42, 500 | 32/38, 500 | Newsreader | 静态页 H1 |
| `heading-2` | 28/34, 600 | 26/32, 600 | Newsreader | 主要区块 |
| `heading-3` | 20/27, 600 | 20/27, 600 | DM Sans | 卡片 / 结果栏目 |
| `body-lg` | 18/29, 400 | 18/28, 400 | DM Sans | Hero 支持文案、结果 summary |
| `body` | 16/25, 400 | 16/25, 400 | DM Sans | 默认正文与输入 |
| `label` | 14/20, 600 | 14/20, 600 | DM Sans | label、button、eyebrow |
| `small` | 14/21, 400 | 14/21, 400 | DM Sans | 帮助、隐私说明 |
| `micro` | 12/17, 500 | 12/17, 500 | DM Sans | request ID、字符计数 |
| `timer` | 40/44, 500 | 36/40, 500 | IBM Plex Mono | 冷却倒计时 |

规则：

- Serif 不用于按钮、输入内容、错误和危机资源；
- 正文每行 55–75 个英文字符；
- 不用全大写长文本；eyebrow 只允许 1–3 个词；
- link 使用下划线或明显 text decoration，不仅靠颜色；
- 结果中的用户原文 excerpt 使用 DM Sans，不用斜体美化敏感文字。

## 7. Color

### 7.1 Approach

**Restrained**：暖纸张中性色 + 深青主色 + 琥珀暂停色。Assessment 不使用 success / error 色。

### 7.2 Core palette

| Token | Hex | 用途 |
|---|---|---|
| `canvas` | `#F4F0E8` | 页面暖纸张背景 |
| `surface` | `#FFFCF7` | 表单和结果主体 |
| `surface-raised` | `#FFFFFF` | 需要与 surface 区分的少量浮层 |
| `ink` | `#182422` | 主文本；在 canvas 对比度约 14.06:1 |
| `text-muted` | `#596660` | 次级文本；在 canvas 约 5.29:1 |
| `text-subtle` | `#65706A` | 非必要辅助文字；在 canvas 仍保持约 4.53:1 对比度 |
| `border` | `#D7D1C5` | 默认边界与分隔线 |
| `border-strong` | `#AFA89B` | focus 外的强调边界 |
| `primary` | `#1F5664` | 主要 CTA；白字对比度约 8.16:1 |
| `primary-hover` | `#174652` | hover / active |
| `focus` | `#2A6F83` | 2–3px focus ring；在 canvas 约 4.99:1 |
| `pause` | `#C27B32` | 少量暂停标识，不作正文底色 |
| `pause-soft` | `#F2E2C7` | 用户主动进入的冷却状态淡背景 |

### 7.3 Semantic palette

| Token | Foreground | Background | 用途 |
|---|---|---|---|
| `info` | `#294F62` | `#E7EEF2` | 中性提示、payment verifying |
| `warning` | `#6A4219` | `#F7EBD7` | 可恢复风险、超时、冷却结束 |
| `danger` | `#7B2937` | `#F7E6E8` | 即时危险与 destructive clear，不用于 assessment |
| `success` | `#285D45` | `#E5F0E9` | 支付确认、反馈保存等事实成功，不用于 GOAL_ALIGNED |

以上前景 / 背景组合对比度均大于 6.5:1。开发时仍需对实际字号、透明度、hover 和 disabled 状态做自动与人工对比检查。

### 7.4 Assessment treatment

三种 assessment 使用相同 `surface`、`border-strong` 和 `ink`：

| Internal state | User-facing title | Symbol | 禁止 |
|---|---|---|---|
| GOAL_ALIGNED | “No obvious conflict with your goal found.” | 两条接近平行线 | 绿色、勾、Approved |
| GOAL_MISALIGNED | “Some wording may work against your goal.” | 两条分岔线 | 红色、叉、Do not send |
| CRITICAL_CONTEXT_MISSING | “One missing detail changes this check.” | 断开的线 | 黄色警报、Incomplete score |

每个标题下固定展示：`This is not a recommendation to send or wait.`

### 7.5 Dark mode

MVP 不提供 dark mode。原因不是技术困难，而是：

- 暖纸张背景是核心识别；
- 安全、assessment、支付状态要额外完成一套对比和误读测试；
- Gate A / B 不验证主题需求。

若未来真实用户明显要求，再作为完整 surface redesign，而非简单颜色反转。

## 8. Spacing, Radius and Elevation

### 8.1 Spacing

- 基础单位：4px；
- scale：2、4、8、12、16、20、24、32、40、48、64、80、96；
- 默认字段间距：20px；
- section 间距：40px mobile、56px desktop；
- Hero 上下：48px mobile、80px desktop；
- 结果栏目内部：16–24px；
- 长结果不靠大量卡片分隔，优先用 heading、留白和 1px rule。

### 8.2 Radius

| Token | Value | 用途 |
|---|---:|---|
| `radius-sm` | 6px | 小标签、inline notice |
| `radius-md` | 10px | input、button |
| `radius-lg` | 14px | 主表单、结果面板 |
| `radius-xl` | 18px | 仅 Hero 输入 surface |
| `radius-full` | 9999px | radio dot、状态点；不用于所有卡片 |

### 8.3 Elevation

- 默认 surface 用 border，不用 shadow；
- Hero 输入面板可用 `0 16px 48px rgba(24, 36, 34, 0.07)`；
- sticky mobile action bar 用 `0 -8px 24px rgba(24, 36, 34, 0.06)`；
- 不做多层浮动卡片和 glow；
- focus ring 永远不能被 shadow 吃掉。

## 9. Motion

### 9.1 Approach

Minimal-functional。动效只说明“内容出现、状态替换、焦点移动”，不制造情绪。

| 类型 | 时长 | Easing | 用途 |
|---|---:|---|---|
| Micro | 80–120ms | ease-out | hover、pressed、focus color |
| Short | 160–220ms | ease-out | 渐进字段展开、error reveal |
| Medium | 240–320ms | ease-in-out | 表单到结果的轻微 opacity / translate |
| Exit | 120–180ms | ease-in | 关闭 inline confirm |

规则：

- 最大位移 8px；
- 不弹跳、不摇晃错误、不循环脉冲；
- loading 可用低对比、恒速细线或静态 spinner，不做“AI 思考头像”；
- 倒计时数字不逐秒缩放或闪烁；
- `prefers-reduced-motion` 下移除位移和非必要 transition；
- 安全停止直接出现，不使用戏剧化转场。

## 10. Core Flow and Screen States

### 10.1 Flow

~~~text
LANDING / EMPTY
      |
      v
EDITING -- invalid --> INLINE ERRORS + ERROR SUMMARY
      |
      v
REQUEST IN FLIGHT
  | cancel / provider error --> RECOVERABLE ERROR
  | L2 / L3 / REFUSE -------> SAFETY STOP
  | unsupported ------------> ENGLISH-ONLY STOP
  | safe success -----------> BASIC RESULT
                                  |
               +------------------+------------------+
               |                  |                  |
               v                  v                  v
          EDIT + RECHECK      10-MIN PAUSE      DEEP OFFER
                                                       |
                                                       v
                                              HOSTED CHECKOUT
                                                       |
                                      +----------------+---------------+
                                      |                                |
                                      v                                v
                              PAYMENT VERIFYING                    PAID
                                                                       |
                                                                       v
                                                               DEEP RESULT
                                                                       |
                                                         DOWNLOAD / FOLLOW-UP
~~~

### 10.2 Required state matrix

| State | Title / primary copy | Primary action | Secondary action | Data behavior |
|---|---|---|---|---|
| Empty | “Before you send it…” | 先输入，无 CTA 空壳 | Privacy / Safety | 页面内存为空 |
| Editing | “Check what this message does.” | `Check my message` | `Clear` | 只在内存 |
| Invalid | “Check the highlighted fields.” | `Review fields` | 无 | 保留全部有效输入 |
| In flight | “Checking boundaries and goal alignment…” | `Cancel this check` | 无 | 请求作用域；页面内存保留 |
| Slow | “This is taking longer than usual.” | `Keep waiting` | `Cancel` | 不重复提交 |
| Recoverable error | “We couldn’t complete this check.” | `Try again` | `Edit message` | 草稿不清空 |
| Rate limited | “You’ve reached the current check limit.” | 显示准确重试时间 | `Return to your draft` | 不调用模型 |
| L3 stop | “This needs immediate human support, not message analysis.” | 对应即时资源 | `See other regions` | 不展示分析 / 付费 |
| L2 stop | “This is outside a safe message check.” | 安全、专业或可信人支持 | `Read our safety boundary` | 不展示分析 / 付费 |
| REFUSE | “I can’t help optimize this message.” | 合法安全替代方向 | `Read why` | 不展示改写 / 付费 |
| Unsupported | “This check currently works only in English.” | `Return to your draft` | 全球资源 | 不兜底分析 |
| Basic | Goal Mirror + assessment title | `Edit and recheck` | `Take 10 minutes` | 结果仅页面内存 |
| Recheck used | 更新结果 | `Take 10 minutes` | `Clear this check` | 不再显示复检 CTA |
| Cooldown | `10:00` + “Your draft is still here.” | `Return to result` | `End pause` | 刷新会结束 timer |
| Deep offer | “Look line by line before you decide.” | `Unlock Deep Check — $4.99` | `Keep Basic only` | 草稿仍在原页 |
| Checkout open | “Keep this tab open.” | `I’ve paid — verify` | `Payment help` | Checkout 新标签页 |
| Verifying | “Payment received; confirming access…” | `Refresh status` | `Get support` | 有界轮询 |
| Deep processing | “Building your deeper check…” | `Cancel waiting` | 无 | entitlement 不因 UI cancel 丢失 |
| Deep result | “Review these drafts before copying.” | `Print private brief` | `Set a follow-up` | 结果仅页面内存 |
| Feedback saved | “Thanks — only your structured answers were saved.” | `Clear this check` | 无 | 不收自由文本 |

“Checking boundaries and goal alignment…” 是统一的请求中说明，不显示虚构百分比或假装知道服务端正在执行哪一条内部子步骤。超过阈值只切换为 slow state。

## 11. Input Experience

### 11.1 Progressive disclosure

首屏只显示：

1. `Your unsent message`；
2. `What do you want this message to do?`。

当用户在草稿中输入或选择目标后，在同一页面渐进出现：

3. `Who is it for?`；
4. `Could you accept no reply?`；
5. `How strong is the emotion right now?`；
6. `How long since the triggering event?`；
7. `Optional context`；
8. 成年确认、AI 和隐私披露、提交按钮。

渐进出现不使用多步骤 Wizard：

- 用户可随时向上修改；
- browser back 不承担步骤状态；
- 屏幕阅读器通过可感知 section heading 了解新增字段；
- 进入字段时不突然抢焦点；
- 用户关闭页面时不尝试保存草稿。

### 11.2 Field treatment

| Field | 控件 | 设计 |
|---|---|---|
| Draft | textarea，最小 180px desktop / 200px mobile | label 常驻；下方隐私提示；达到 4,000 字符显示计数 |
| Goal | 两列 radio rows，移动单列 | 不是 pills；每项 ≥44px；`Other` 展开 detail |
| Goal detail | 单行或 2 行 textarea | 所有 goal 可选，Other 必填 |
| Recipient | select | 不需要头像或图标 |
| No reply acceptance | 3 个 radio buttons | Yes / No / Unsure 同等视觉 |
| Emotion | 1–5 radio group | 端点写 Low / Very high；不做 slider 和 AI 解读 |
| Time | select / radio list | 采用 PRD 固定区间 |
| Context | textarea，最多 3,000 | 明示可留空，不鼓励粘贴整段聊天 |
| Age | checkbox | 紧邻提交；未勾选不允许请求 |

### 11.3 Privacy notice

textarea 上方简短说明：

> Remove names, phone numbers, usernames, and anything you do not want processed.

提交区说明：

> Your message is processed for this check and is not saved by us. Our AI provider may retain data for safety as described in Privacy.

不写模糊的 `100% private`、`never stored anywhere` 或锁头图标代替事实。

### 11.4 Validation

- 字段错误紧跟字段，并在表单顶部汇总；
- 错误色不是唯一线索：加文字、边框和 `aria-describedby`；
- submit 后焦点移到错误汇总，汇总链接回字段；
- 纯空白、超长、非法枚举和不支持语言有不同文案；
- 双击 submit 只产生一个请求；
- 服务端错误不把用户滚回空表单。

## 12. Basic Result

### 12.1 Information order

1. Goal Mirror；
2. 中性 assessment 标题；
3. 一句 summary；
4. 最强隐藏假设；
5. 最可能破坏目标的原文片段；
6. 一种可能解读；
7. 两个诚实理由：发送 / 暂停；
8. 最多三个 decision changers；
9. 编辑、冷却、结束；
10. Deep offer；
11. 结构化反馈。

### 12.2 Wireframe

~~~text
┌──────────────────────────────────────────────────────────────┐
│ YOUR GOAL                                                    │
│ Repair the relationship without restarting the argument.     │
│                                                              │
│ Some wording may work against your goal.                     │
│ The draft asks for repair but opens by assigning motive.     │
│ This is not a recommendation to send or wait.                │
├──────────────────────────────────────────────────────────────┤
│ THE ASSUMPTION DOING THE MOST WORK                            │
│ You may be assuming silence means they do not care.          │
├──────────────────────────────────────────────────────────────┤
│ THE LINE MOST LIKELY TO DERAIL THE GOAL                       │
│ “You clearly never cared about any of this.”                  │
│                                                              │
│ HOW IT COULD LAND                                             │
│ They could read this as a conclusion about their motives...  │
├────────────────────────────┬─────────────────────────────────┤
│ AN HONEST CASE FOR SENDING │ AN HONEST CASE FOR PAUSING      │
│ ...                        │ ...                             │
├────────────────────────────┴─────────────────────────────────┤
│ WHAT WOULD CHANGE THIS CHECK                                 │
│ 1. ...                                                       │
│ 2. ...                                                       │
├──────────────────────────────────────────────────────────────┤
│ [Edit and recheck] [Take 10 minutes] [Clear this check]      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Want a line-by-line check and two goal-aligned rewrites?     │
│ Deep Check — one time, $4.99                                 │
│ [See what’s included]                                        │
└──────────────────────────────────────────────────────────────┘
~~~

### 12.3 Result rules

- assessment 标题不用内部 enum；
- `highest_risk_excerpt` 以引用块呈现，但不染红；
- 空 excerpt 时该区写 `No single line stood out more than the overall pattern.`，不得虚构原文；
- possible interpretation 必须以 `could`、`may` 等可能性措辞；
- 两个 honest cases 使用同尺寸、同标题级别、同背景和同边界；不让 sending 或 pausing 获得额外颜色权重；
- 决策改变项是列表，不做 checklist 或 score；
- result 进入后把程序焦点移到可聚焦的结果 H1，不直接聚焦 CTA；
- Basic 全部展示后才出现 Deep offer，不能模糊或锁住免费结果。

## 13. Cooldown

目标是制造可选择的停顿，不是用倒计时命令用户等待。

~~~text
┌────────────────────────────────────┐
│ A ten-minute pause                 │
│                                    │
│             09:42                  │
│                                    │
│ Your draft stays in this tab.      │
│ Closing or refreshing ends the     │
│ timer; we do not save it.          │
│                                    │
│ [Review or edit draft]             │
│ [End pause]                        │
└────────────────────────────────────┘
~~~

规则：

- 默认不播放声音、不震动、不发通知；
- timer 在后台标签页恢复时按真实时间计算，不逐秒累积误差；
- 用户可以随时结束，无羞辱文案；
- 结束后写：`Ten minutes have passed. Read your goal and draft once more before deciding.`；
- 不出现 `Now it is safe to send`；
- 刷新后 timer 丢失是隐私设计的一部分，提前明确说明。

## 14. Deep Check and Payment

### 14.1 Offer

Deep offer 是独立、非模态区块：

> **Look line by line before you decide.**  
> Deep Check adds a line review, a short pre-mortem, the strongest counterargument, and two drafts aligned with your stated goal.  
> **$4.99 one time**  
> [Unlock Deep Check]

下方明确：

- `No subscription.`；
- `Your original message is still not saved by us.`；
- `Rewrites are drafts for you to review, not guaranteed outcomes.`；
- `Refund policy` link。

不使用 feature comparison table、折扣锚点或“Most popular”。

### 14.2 Checkout handoff

- 点击后先展示一行提示：`Checkout opens in a new tab. Keep this page open so your draft stays here.`；
- hosted Checkout 新标签页；
- 原页面进入 `Checkout pending`，不清空 Basic；
- 用户回来可点 `I’ve paid — verify`；
- Webhook 延迟显示 payment verifying，不要求再次付款；
- 原页被关时，付款恢复页明确要求重新粘贴原草稿，不声称能恢复内容。

### 14.3 Deep result order

1. `Review these drafts before copying.`；
2. line-by-line alignment review；
3. short pre-mortem；
4. strongest counterargument to Basic；
5. Rewrite A / B；
6. 每个 rewrite 的 `What changed`；
7. Copy、Print private brief；
8. optional follow-up。

Rewrite cards：

- 全文可选中，默认不自动复制；
- `Copy draft` 成功后按钮变 `Copied`，这是事实 success 色允许场景；
- 标题写 `Draft A — clearer and shorter`，不写 `Best reply`；
- 每个卡片顶部固定：`Review every line before using it.`；
- 不提供 `Send` 按钮或消息 App deep link；
- Brief 通过 print stylesheet 生成，打印预览前可选择是否包含原始草稿；默认不包含。

## 15. Safety and Refusal Screens

### 15.1 L3

结构：

1. 明确停止：`This needs immediate human support, not message analysis.`；
2. 如有即时危险：`Call local emergency services now.`；
3. 按用户主动选择的地区展示 US / Canada / UK & ROI / Elsewhere；
4. 显示可点击电话和官方资源；
5. `If you can, move toward another person or a safer place.` 等 SAFETY 已批准文案；
6. 不展示原始草稿、结果、Deep offer、feedback 或增长 CTA。

视觉：danger-soft 只用于顶部 4px rule 和资源提示，不整屏涂红；标题仍用 DM Sans，避免编辑 Serif 美化危机内容。

### 15.2 L2

标题：`This is outside a safe message check.`

说明系统不会继续分析，给出可信任的人、专业支持或安全计划等经 SAFETY 批准的替代方向。禁止偷偷生成“更安全版本”的原消息。

### 15.3 REFUSE

标题：`I can’t help optimize this message.`

说明具体边界类型，例如威胁、胁迫、骚扰、跟踪、欺诈或操纵，但不复述有害细节。允许提供非接触、尊重边界或合法支持方向。

### 15.4 Unsupported / unavailable

- Unsupported：英语限制 + 返回草稿；如包含危险信号仍先走更高安全级别；
- Safety unavailable：`We can’t safely complete this check right now.`，只提供重试和安全资源；
- 所有停止页都有 `request ID`，使用 IBM Plex Mono micro text，便于支持但不暴露内部 rule code。

## 16. Component Inventory

| Component | 责任 | 关键状态 |
|---|---|---|
| `AppHeader` | wordmark、Privacy、Safety | desktop / mobile |
| `TrustLine` | AI、18+、not saved by us | concise / expanded |
| `DraftField` | textarea、PII 提醒、字符计数 | empty / focused / error / near-limit |
| `GoalPicker` | goal radio rows + detail | default / selected / other |
| `ContextFields` | progressive secondary inputs | hidden / revealed / error |
| `ConsentBlock` | age、AI disclosure、Privacy | unchecked / checked / error |
| `RequestState` | in-flight、slow、cancel | normal / slow / canceling |
| `SafetyStopPanel` | L2/L3/REFUSE/unsupported | route-specific |
| `GoalMirror` | 用户目标 + assessment | aligned / misaligned / missing |
| `InsightSection` | 结果正文区块 | text / excerpt / empty excerpt |
| `BalancedCases` | sending / pausing 并列 | desktop 2-col / mobile stack |
| `DecisionChangers` | 最多 3 项 | 1–3 items |
| `ResultActions` | edit、cooldown、clear | recheck available / used |
| `CooldownPanel` | timer、edit、end | running / finished |
| `DeepOffer` | 价格与权益 | collapsed / expanded / disabled |
| `PaymentStatus` | new-tab、verifying、support | pending / verifying / paid / failed |
| `DeepResult` | line review、pre-mortem、rewrites | success / recoverable failure |
| `FeedbackForm` | 结构化反馈 | empty / saving / saved / error |
| `FollowupOptIn` | email、24/72h、consent | disabled / enabled / saved |
| `InlineErrorSummary` | 表单错误导航 | hidden / visible |
| `AppFooter` | 法律与产品边界 | standard |

每个组件只接受结构化 props；任何观测 hook 都不能收到 draft、context 或 result 文本。

## 17. Buttons, Inputs and Links

### 17.1 Buttons

- Primary：深青底、白字、最小 44px 高、10px radius；
- Secondary：surface 背景、primary border；
- Quiet：无底色、下划线或明显 hover surface；
- Destructive：只用于 clear / delete consent，danger 文本 + soft background；
- Loading 时保留原标签语义并加状态文字，不只显示 spinner；
- disabled 与 busy 不混为一谈；busy 使用 `aria-disabled` 和可读状态；
- 一个 viewport 最多一个高强调 primary action。

### 17.2 Inputs

- 默认 1px border，focus 2–3px ring + 1px border；
- label 永远在外部，不用 placeholder 代替；
- placeholder 使用虚构、非操纵、无名的短例子；
- textarea resize 在桌面允许 vertical，移动端保持自然高度；
- error 文案具体：`Message must be 5,000 characters or fewer.`；
- select 使用浏览器原生行为，外观只做轻度统一；
- radio 整行可点，不做小圆点精确点击。

### 17.3 Links

- 法律、Privacy、Safety link 始终可见下划线；
- 电话资源使用 `tel:` 并展示完整号码；
- 外链标识“opens official resource”，不靠只有图标的 external-link control；
- Checkout 外链按钮明确新标签页；
- 不把普通导航伪装成按钮，也不把 action 做成普通文本 link。

## 18. Copy System

### 18.1 Voice

- Calm：短句、低戏剧性；
- Direct：说清楚产品做了什么和没做什么；
- Specific：引用文字和目标，不泛泛谈“energy”或“red flags”；
- Non-judgmental：不羞辱用户、收件人或选择；
- Conditional：对他人反应使用 could / may / one possible reading；
- Non-clinical：不诊断、不使用治疗承诺；
- Non-commanding：不说 send、wait、leave、confront。

### 18.2 Preferred terms

| 使用 | 不使用 |
|---|---|
| check / review | verdict / judgment |
| your stated goal | the right decision |
| could be read as | they will think |
| an assumption | the truth |
| a reason to pause | you must wait |
| a draft to review | the perfect reply |
| not saved by us | 100% private / never stored anywhere |
| AI can be wrong | unbiased AI / objective truth |

### 18.3 Error copy pattern

~~~text
[What happened]
[What was preserved]
[What the user can do next]
[Request ID when support may be needed]
~~~

例：

> We couldn’t complete the check. Your draft is still in this tab. Try again, or edit it before retrying. Request ID: BYS-…

不展示 Provider 名称、内部 safety route、stack 或原始错误 body。

## 19. Accessibility

目标：WCAG 2.2 AA，并对高频控件采用 44×44px 触控目标，超过 AA 的 24px 最低要求。

### 19.1 Required behavior

- 页面使用 `header`、`main`、`footer` 和正确 heading 顺序；
- 每个控件有可见 label 和程序化名称；
- radio groups 使用 fieldset / legend；
- error summary 在提交失败后接收焦点；
- in-flight / slow / complete 使用 `aria-live="polite"`；
- L3 紧急标题可用 `role="alert"`，资源列表不作为一个长 `aria-describedby`；
- 结果切换后聚焦结果标题，并保持完整语义结构；
- focus 不被 sticky action bar 遮挡；
- 所有动作可用 Tab、Shift+Tab、Enter、Space；
- 不依赖 drag、hover、swipe；
- 200% zoom 无横向滚动，320px 宽主流程可完成；
- 字体放大不截断 timer、按钮和状态；
- 颜色不是唯一状态信息；
- reduced motion 移除位移和循环动画；
- high contrast / forced colors 模式保留边框与 focus；
- 自动 axe 检查配合人工键盘和读屏测试。

### 19.2 Timed interaction

冷却 timer 是用户主动开启且可随时退出，不阻断其他操作。付款验证轮询结束后必须提供手动刷新和支持入口，不能让用户无限等待。

### 19.3 Dialogs

MVP 尽量用 inline reveal，避免 modal。必须使用确认 dialog 时：

- 打开后焦点进入标题或第一个适当控件；
- Tab 不离开 dialog；
- Escape 可关闭非强制 dialog；
- 关闭后焦点回到触发按钮；
- destructive confirmation 默认聚焦取消；
- dialog 外区域真实 inert，不只视觉变暗。

## 20. Responsive and Mobile Behavior

- mobile input 首屏优先于长 marketing 内容；
- textarea、radio row、button 使用满宽或足够触控面积；
- keyboard 打开时 primary submit 不做覆盖输入的 fixed button；
- 结果 action 在 mobile 可用底部 sticky bar，但展开 error / keyboard 时自动回到文档流；
- 双列 honest cases 在 768px 以下按“sending 后 pausing”顺序堆叠，标题强调相同；
- payment 和 safety 资源不使用横向表格；
- timer 不占满屏，始终能看到编辑 / 结束选项；
- 长 URL、邮箱和 request ID 可换行；
- iOS safe-area inset 用于底部 action padding；
- 不禁止 pinch zoom。

## 21. Design QA Checklist

### 21.1 Visual

- [ ] Hero 在 360px 能看到 textarea；
- [ ] 1024px+ 才启用左右 Hero；
- [ ] 结果正文最大宽度不超过 760px；
- [ ] 同一 viewport 不超过一个 primary CTA；
- [ ] assessment 没有红绿批准 / 拒绝视觉；
- [ ] 所有正文和按钮对比满足 WCAG 2.2 AA；
- [ ] Serif 只用于规定角色；
- [ ] 无紫色渐变、玻璃拟态、Agent 头像和三列功能墙；
- [ ] 支付和安全状态不被普通结果组件稀释。

### 21.2 Interaction

- [ ] 渐进字段出现不抢焦点；
- [ ] 失败后输入保留；
- [ ] submit 防双击；
- [ ] loading 无虚构百分比；
- [ ] cancel、retry、payment verify 都有确定状态；
- [ ] 唯一一次复检用完后 CTA 正确消失；
- [ ] 冷却可退出且刷新丢失已说明；
- [ ] Deep 失败不显示再次付款；
- [ ] copy / print 不把内容上传服务端；
- [ ] clear 操作不会误导用户以为服务端保存过内容。

### 21.3 Safety and privacy

- [ ] Privacy 提示在输入和提交前可见；
- [ ] 只使用 “not saved by us” 等可证明文案；
- [ ] L2 / L3 / REFUSE 无 paywall；
- [ ] L3 官方资源可点击且人工核对；
- [ ] unsupported language 不进入英语分析结果；
- [ ] 任何页面不展示内部 rule code；
- [ ] analytics / error hooks 不接收文字 props；
- [ ] screenshot、replay、rich-text render 均不存在。

### 21.4 Accessibility

- [ ] 仅键盘可完成 Basic、复检、冷却、支付返回和反馈；
- [ ] fieldset / legend、labels、errors 正确；
- [ ] live region 不重复朗读长结果；
- [ ] 200% zoom 和 320px 无阻断；
- [ ] reduced motion 生效；
- [ ] focus ring 全程可见；
- [ ] 自动 axe 无 A / AA 阻断，且完成手工读屏 smoke。

## 22. Design Acceptance Criteria

设计实现只有在以下全部成立时可进入邀请上线：

1. 首屏同时表达价值、隐私和可输入入口；
2. 用户无需学习聊天或 Agent UI 即可完成一次检查；
3. 所有 PRD §9.2 状态都有完成的视觉与恢复方式；
4. 用户无法把 GOAL_ALIGNED 视觉误解为批准发送；
5. L2 / L3 / REFUSE 明显停止正常流程且无付费诱导；
6. 错误、slow、cancel、payment verifying 不清空草稿；
7. Basic 免费结果完整可读后才出现 Deep offer；
8. Deep rewrites 明确是需审核的草稿，没有 Send 集成；
9. mobile、keyboard、screen reader 和 reduced motion 达标；
10. 视觉实现与本 DESIGN.md 的 token、布局和反模式约束一致。

## 23. Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-08-28 | 采用 Quiet Editorial Checkpoint | 高情绪、隐私敏感任务需要冷静阅读感，而非 AI 表演 |
| 2026-08-28 | 不视觉化 Decision Court | 法庭隐喻容易形成判决、法律和角色误解 |
| 2026-08-28 | Newsreader + DM Sans + IBM Plex Mono | 分别承担反思、任务和计时，角色清楚且不落入常见 AI 字体组合 |
| 2026-08-28 | 暖纸张 + 深青 + 琥珀 restrained palette | 可信、冷静，琥珀可表达暂停但不构成危险判决 |
| 2026-08-28 | 三种 assessment 共用中性 surface | 防止把 AI 状态当发送许可或道德红灯 |
| 2026-08-28 | Desktop asymmetric Hero，app 单列 | 落地有识别度，任务和结果仍保持可用性 |
| 2026-08-28 | MVP 仅 light mode | 保持设计一致，避免关键状态测试翻倍 |
| 2026-08-28 | 跳过 HTML / AI mockup preview | 用户明确要求当前不动具体代码；本轮只交付文档和线框 |

## 24. Reference Standards

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WAI-ARIA Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [Next.js font optimization](https://nextjs.org/docs/app/api-reference/components/font)

本文件是后续所有 UI 决策的 source of truth。若视觉实现需要偏离，必须先记录偏离内容、产品理由、无障碍与安全影响，再更新本文件。
