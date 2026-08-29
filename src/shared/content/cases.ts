export interface HotCase {
  id: string;
  platform: string;
  platformIcon: string;
  tag: string;
  tag_en?: string;
  title: string;
  title_en?: string;
  subtitle: string;
  subtitle_en?: string;
  sourceDate: string;
  sourceDate_en?: string;
  avatar: string;
  originalExcerpt: string;
  originalExcerpt_en?: string;
  tactics?: Array<{
    title: string;
    title_en?: string;
    desc: string;
    desc_en?: string;
    color: string;
  }>;
  analysis: {
    verdict: "CAUGHT_IN_SPIN" | "PR_MASTERCLASS" | "CRITICAL_BLUNDER";
    verdictLabel: string;
    verdictLabel_en?: string;
    verdictScore: number;
    headline: string;
    headline_en?: string;
    statedPersona: string;
    statedPersona_en?: string;
    hiddenAgenda: string;
    hiddenAgenda_en?: string;
    desiredPublicTakeaway: string;
    desiredPublicTakeaway_en?: string;
    distractionTarget: string;
    distractionTarget_en?: string;
    fatalFlawExcerpt: string;
    fatalFlawExcerpt_en?: string;
    fatalFlawReason: string;
    fatalFlawReason_en?: string;
    radarScores: {
      sincerity: number;
      calculation: number;
      prSkill: number;
      backfireRisk: number;
    };
    juryVerdict: {
      agreeSpinPercent: number;
      seeThroughPercent: number;
    };
  };
}

export const HOT_CASES: HotCase[] = [
  {
    "id": "sun-vs-jing",
    "platform": "微博 / X (Twitter)",
    "platformIcon": "🪙",
    "tag": "币圈操盘与注意力套利",
    "tag_en": "Crypto PR & Attention Arbitrage",
    "title": "孙宇晨《我的女友景甜》6000字小作文商业透视",
    "title_en": "Justin Sun’s 6,000-word “My Girlfriend Jing Tian” Statement Deconstructed",
    "subtitle": "声称问Claude是否付5000万，深情追忆背后的币圈大会造势与注意力套利",
    "subtitle_en": "Claiming he asked Claude about a $50M payout — the PR spin behind Token2049 hype",
    "sourceDate": "2026年8月热搜",
    "sourceDate_en": "August 2026 Viral Trending",
    "avatar": "🪙",
    "originalExcerpt": "“这几天外界有很多不实传闻。我曾把这个涉及巨额资金和感情的决定拿去问 Claude 是否支付5000万美元……走到今天这一步我感到非常遗憾，我始终珍惜曾经的一切……（文末附注：本故事纯属虚构）”",
    "originalExcerpt_en": "“There have been many false rumors recently. I actually asked Claude whether I should pay $50 million for this financial and personal dilemma... I feel deeply regretful, and I will always cherish what we had... (Note at end: this story is purely fictional).”",
    "tactics": [
      {
        "title": "① 行业大会与生态造势",
        "title_en": "① Conference Timing & Ecosystem Hype",
        "desc": "精准卡位在加密全球大会（如Token2049）与发币窗口期，将泛大众八卦流量直接截流注入个人IP与加密盘口。",
        "desc_en": "Timed precisely ahead of global crypto conferences (Token2049) to siphon mainstream pop-culture attention straight into his personal brand and token ecosystem.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 绑架 AI 当拒付背锅侠",
        "title_en": "② Weaponizing AI as the Scapegoat",
        "desc": "“不是我不给5000万，是Claude让我别给”——将冷血商业算计包装成理性极客服从算法，顺便蹭硅谷AI热点。",
        "desc_en": "“It wasn't me refusing the $50M; Claude calculated I shouldn't” — disguises cold transactional logic as rational obedience to AI algorithms while riding Silicon Valley hype.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 文末免责逃逸舱",
        "title_en": "③ The Fictional Disclaimer Escape Hatch",
        "desc": "6000字深情爆料末尾加一句“纯属虚构”，既吃尽全网热搜泼天流量，又在法律层面构筑防火墙规避名誉权诉讼。",
        "desc_en": "Milks sensational celebrity gossip for maximum virality, while burying a 'purely fictional' disclaimer at the bottom to dodge defamation lawsuits.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "顶级注意力套利",
      "verdictLabel_en": "MASTERCLASS ATTENTION ARBITRAGE",
      "verdictScore": 95,
      "headline": "精准踩中Token2049与Meme发币窗口期，用「女星+天价+AI背锅」完成零成本流量收割",
      "headline_en": "Leveraging a movie star, a $50M headline, and AI scapegoating to execute zero-cost viral arbitrage ahead of major crypto events",
      "statedPersona": "深情被辜负、面对5000万抉择甚至无助求助AI的“极客痴情男”",
      "statedPersona_en": "A romantic tech geek who was taken advantage of and turned to AI in emotional and financial despair",
      "hiddenAgenda": "① 配合近期币圈大会与生态发币造势，收割全网泛娱乐注意力注入加密盘口；② 让AI当‘拒付挡箭牌’稀释冷血形象；③ 文末加‘纯属虚构’防法律起诉。",
      "hiddenAgenda_en": "1) Channel massive mainstream gossip into crypto token hype; 2) Disguise commercial refusal behind AI neutrality; 3) Use legal disclaimers to evade liability.",
      "desiredPublicTakeaway": "“孙哥太有意思了连分手都问AI”、“景甜要5000万太夸张了”",
      "desiredPublicTakeaway_en": "“Justin Sun is hilarious for asking AI about his breakup; demanding $50M is outrageous”",
      "distractionTarget": "转移公众对3000多万国内实质民事诉讼的追责审视，将严肃法律纠纷娱乐化、降维成全网八卦",
      "distractionTarget_en": "Distract from formal legal lawsuits and domestic asset disputes by degrading serious litigation into a viral internet meme",
      "fatalFlawExcerpt": "“我曾问 Claude 是否支付……（文末注：纯属虚构）”",
      "fatalFlawExcerpt_en": "“I asked Claude whether to pay... (Disclaimer: purely fictional)”",
      "fatalFlawReason": "既想要吃尽明星八卦的顶级公关流量，又在文末加注‘纯属虚构’构筑法律逃逸舱——典型的既要流量又要免责的投机闭环。",
      "fatalFlawReason_en": "A glaring contradiction: weaponizing real celebrity names for viral reach while hiding behind a 'fiction' disclaimer to escape accountability.",
      "radarScores": {
        "sincerity": 5,
        "calculation": 99,
        "prSkill": 95,
        "backfireRisk": 95
      },
      "juryVerdict": {
        "agreeSpinPercent": 7,
        "seeThroughPercent": 93
      }
    }
  },
  {
    "id": "zhong-shanshan-statement",
    "platform": "微信 / 今日头条",
    "platformIcon": "💧",
    "tag": "实业巨头危机公关",
    "tag_en": "Industrial Tycoon Crisis PR",
    "title": "钟睒睒《我与宗庆后先生的二三事》自白长文透视",
    "title_en": "Nongfu Spring Founder’s Viral Memo on Wahaha Relationship Deconstructed",
    "subtitle": "回应“农夫与蛇”网络争议，从第一桶金讲起的千亿首富理性反击",
    "subtitle_en": "Addressing the 'ungrateful protege' smear: a billionaire's historical self-defense",
    "sourceDate": "商界高频热议",
    "sourceDate_en": "Trending Business Dossier",
    "avatar": "💧",
    "originalExcerpt": "“宗老生前痛恨网络暴力。未曾想借宗老离世，网络上却出现大量对我和农夫山泉的诋毁……我的第一桶金来自布匹生意而非娃哈哈。希望广大网友勿被带节奏。”",
    "originalExcerpt_en": "“Mr. Zong despised cyberbullying in his lifetime. I never expected his passing would trigger coordinated attacks against Nongfu Spring... My first pot of gold came from textiles, not Wahaha.”",
    "tactics": [
      {
        "title": "① 借已故对手之名立盾",
        "title_en": "① Invoking the Deceased Rival as Moral Shield",
        "desc": "开篇强调‘宗老痛恨网暴’，在道德层面将攻击者定性为违背逝者遗愿的带节奏者。",
        "desc_en": "Opens by citing the deceased founder's distaste for cyberbullying to frame online attackers as violating his legacy.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 详述创业细节洗清原罪",
        "title_en": "② Detailed Origins to Disprove Betrayal",
        "desc": "详细列举早期在海南倒卖窗帘布匹的原始积累过程，全力击碎‘靠娃哈哈起家后背刺恩人’的核心民意指控。",
        "desc_en": "Traces his earliest profits back to curtain textiles in Hainan, systematically dismantling the narrative that he betrayed his benefactor.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 高举实业与纳税大旗",
        "title_en": "③ Emphasizing Jobs and Tax Contributions",
        "desc": "把个人名誉与数万员工就业及数十亿地方纳税捆绑，向地方与平台施压要求清理恶意造谣账号。",
        "desc_en": "Ties corporate reputation to tens of thousands of manufacturing jobs and billions in tax revenues to demand regulatory cleanup.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "文人傲骨与民粹碰撞",
      "verdictLabel_en": "LITERARY REASON VS POPULIST FERVOR",
      "verdictScore": 78,
      "headline": "试图用详尽的商业事实与文人克制，抵御泛滥的情绪化民粹猎巫与同行煽风点火",
      "headline_en": "Employing measured factual defense against a wave of populist nationalist boycotts and competitive smear campaigns",
      "statedPersona": "问心无愧、白手起家、被恶意中伤依然保持风骨的中国实业领袖",
      "statedPersona_en": "A principled, self-made industrialist unjustly targeted by sensationalist internet mobs",
      "hiddenAgenda": "遏制农夫山泉在下沉零售渠道遭大面积抵制退货的终端崩盘危机，挽回蒸发的数百亿市值",
      "hiddenAgenda_en": "Halt widespread retail boycotts across convenience stores and recover tens of billions in evaporated market cap",
      "desiredPublicTakeaway": "“钟睒睒确实没坑娃哈哈，大家被自媒体情绪带节奏了”",
      "desiredPublicTakeaway_en": "“Nongfu Spring never betrayed Wahaha; consumers were manipulated by social media influencers”",
      "distractionTarget": "回避早期通过天然水与纯净水营销战将娃哈哈逼入死角的商业残酷性",
      "distractionTarget_en": "Downplay past aggressive marketing battles where mineral water campaigns brutally undercut purified water rivals",
      "fatalFlawExcerpt": "“我的第一桶金来自布匹生意……”",
      "fatalFlawExcerpt_en": "“My first pot of gold came from the textile business...”",
      "fatalFlawReason": "文人式的理性自辩在汹涌的下沉情绪狂欢面前收效有限，未能迅速熄灭民粹怒火。",
      "fatalFlawReason_en": "Measured historical receipts struggle to counter deep-seated populist emotional outrage.",
      "radarScores": {
        "sincerity": 65,
        "calculation": 80,
        "prSkill": 60,
        "backfireRisk": 78
      },
      "juryVerdict": {
        "agreeSpinPercent": 42,
        "seeThroughPercent": 58
      }
    }
  },
  {
    "id": "dongbei-yujie-apology",
    "platform": "抖音 / 快手",
    "platformIcon": "🍠",
    "tag": "乡村顶流带货翻车",
    "tag_en": "Top Streamer Fake Product Crisis",
    "title": "东北雨姐「红薯粉条不含红薯」全网致歉声明透视",
    "title_en": "Viral Rural Streamer’s 'Sweet Potato Noodles Without Sweet Potato' Apology Deconstructed",
    "subtitle": "把明知故犯销售木薯粉，包装成“带领乡亲创业选品团队经验不足”",
    "subtitle_en": "Framing synthetic adulteration as 'honest rural startup growing pains'",
    "sourceDate": "抖音千万级热搜",
    "sourceDate_en": "Viral TikTok / Douyin Scandal",
    "avatar": "👵",
    "originalExcerpt": "“雨姐对不住大家！我们也是农村出来的，一心想帮家乡带货。这批粉条确实出了质量问题，是雨姐没有把好关。我们接受监管一切处罚，假一赔三决不推卸！”",
    "originalExcerpt_en": "“I failed everyone! We are simple rural folks trying to help our hometown. There were quality issues with this batch of noodles. We accept all regulatory penalties and offer 3x refunds!”",
    "tactics": [
      {
        "title": "① 农村质朴人设立功",
        "title_en": "① Leaning on the 'Simple Peasant' Persona",
        "desc": "反复强调‘农村出来没文化’，将严重违法的商业造假转化为‘好心办坏事的朴素老乡’。",
        "desc_en": "Repeatedly claims lack of formal education to soften illegal commercial fraud into 'a well-meaning farmer's innocent mistake'.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 光速退款买断追责",
        "title_en": "② Quick Refunds to Avoid Criminal Penalties",
        "desc": "高呼假一赔三，实则是为了赶在市场监管局开出吊销营业执照顶格罚单前争取认错从宽。",
        "desc_en": "Loudly promises 3x compensation to show active remediation before regulators revoke operating licenses.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 切割打人黑历史",
        "title_en": "③ Erasing the Fraud Investigator Assault",
        "desc": "通篇只谈粉条质量退款，绝口不提此前暴力殴打上门打假博主的恶劣治安事件。",
        "desc_en": "Focuses strictly on product refunds while omitting the prior violent physical confrontation with consumer investigators.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "纯朴人设彻底粉碎",
      "verdictLabel_en": "FOLKSY PERSONA OBLITERATED",
      "verdictScore": 94,
      "headline": "在官方检测出‘未检出红薯基因’铁证后，依然试图拿‘助农初心’当遮羞布，引发全网公愤",
      "headline_en": "Attempting to hide blatant product adulteration behind rural charity rhetoric after DNA lab reports confirmed zero sweet potato content",
      "statedPersona": "知错就改、自掏腰包赔付、被不良厂家坑害的耿直农村大姐",
      "statedPersona_en": "A straightforward, honest country woman misled by unscrupulous suppliers",
      "hiddenAgenda": "保住全网数千万粉丝矩阵账号不被封禁，掩盖其幕后专业资本操盘与极高利润率的真相",
      "hiddenAgenda_en": "Prevent permanent account bans across multi-million follower networks and preserve lucrative private-label margins",
      "desiredPublicTakeaway": "“雨姐态度很好赔钱了，农村人创业不容易，放她一马吧”",
      "desiredPublicTakeaway_en": "“She took accountability and refunded customers; rural entrepreneurs deserve a second chance”",
      "distractionTarget": "掩盖长期以来虚构乡村田园剧本、利用信息差向粉丝倾销低质工业贴牌产品的本质",
      "distractionTarget_en": "Distract from scripted rustic lifestyle staging used to offload cheap white-label goods at high margins",
      "fatalFlawExcerpt": "“我们也是农村出来的……”",
      "fatalFlawExcerpt_en": "“We are just simple folks from the countryside...”",
      "fatalFlawReason": "当数千万元利润流向家族企业被查实后，‘纯朴农民’叙事彻底破产沦为年度笑话。",
      "fatalFlawReason_en": "Exposed by business records showing tens of millions routed to corporate holding companies.",
      "radarScores": {
        "sincerity": 10,
        "calculation": 96,
        "prSkill": 40,
        "backfireRisk": 94
      },
      "juryVerdict": {
        "agreeSpinPercent": 10,
        "seeThroughPercent": 90
      }
    }
  },
  {
    "id": "silicon-valley-coup",
    "platform": "X (Twitter) / 硅谷",
    "platformIcon": "🌐",
    "tag": "科技巨头与权力博弈",
    "tag_en": "Big Tech Power Play & Governance",
    "title": "Sam Altman「被逐后绝地反击」全员推文透视",
    "title_en": "Sam Altman’s Ouster & Rebound Memo Deconstructed",
    "subtitle": "字字高呼为了使命，实则联合微软与员工实施反向逼宫",
    "subtitle_en": "Preaching 'Mission First' while executing an engineered corporate coup against safety directors",
    "sourceDate": "全球科技头条",
    "sourceDate_en": "Global Tech Headline",
    "avatar": "🤖",
    "originalExcerpt": "“I love OpenAI, and everything I’ve done over the past few days has been in service of keeping this team and its mission together. We are more united than ever. Mission first.”",
    "originalExcerpt_en": "“I love OpenAI, and everything I’ve done over the past few days has been in service of keeping this team and its mission together. We are more united than ever. Mission first.”",
    "tactics": [
      {
        "title": "① 道德绑架·垄断使命定义权",
        "title_en": "① Monopolizing the 'Mission' Narrative",
        "desc": "将个人控制权与‘人类通用人工智能使命’深度绑定，把董事会合规审查贬低为‘阻碍人类进步’。",
        "desc_en": "Equates personal leadership with the survival of AGI benefits for humanity, framing board oversight as obstructive sabotage.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 外部施压·借资本敲山震虎",
        "title_en": "② Leveraging Microsoft Capital & Staff Threats",
        "desc": "以‘全体跳槽微软设立新实验室’为筹码，利用股价暴跌威胁董事会必须在48小时内集体辞职。",
        "desc_en": "Weaponized an orchestrated staff mass-resignation threat backed by Microsoft to force the board's immediate capitulation.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 赢家通吃·重构绝对控制权",
        "title_en": "③ Total Consolidation of Executive Power",
        "desc": "以王者归来的体面姿态清除所有异见安全派学者，将非营利架构彻底改造为商业变现机器。",
        "desc_en": "Purged safety-focused directors under the banner of unity, clearing the runway for uninhibited commercial capitalization.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "PR_MASTERCLASS",
      "verdictLabel": "大师级权力反转",
      "verdictLabel_en": "MASTERCLASS CORPORATE REBOUND",
      "verdictScore": 25,
      "headline": "把「商业资本驱逐非营利安全监管」的权力政变，升华成「守护团队与理想的壮举」",
      "headline_en": "Sublimating a high-stakes investor-backed coup into a heroic saga of team loyalty and technological destiny",
      "statedPersona": "不计个人恩怨、哪怕被背叛也一心维护团队凝聚力的悲情领袖",
      "statedPersona_en": "A selfless leader bearing no grudges, driven solely by love for his team and humanity's AI future",
      "hiddenAgenda": "彻底清洗非营利董事会对商业扩张的掣肘，完成向完全商业化实体的绝对权力集中",
      "hiddenAgenda_en": "Eliminate non-profit board constraints on commercialization and cement unchecked executive control",
      "desiredPublicTakeaway": "“Sam太伟大了，董事会那帮学术派完全不知所云”",
      "desiredPublicTakeaway_en": "“Sam is irreplaceable; the academic board members were out-of-touch bureaucrats”",
      "distractionTarget": "掩盖 AI 安全审查机制被商业资本彻底架空的系统性风险",
      "distractionTarget_en": "Conceal the complete neutralization of non-profit safety governance mechanisms",
      "fatalFlawExcerpt": "“We are more united than ever. Mission first.”",
      "fatalFlawExcerpt_en": "“We are more united than ever. Mission first.”",
      "fatalFlawReason": "过于完美的公关叙事在日后多位核心安全研究员相继出走时遭到反噬。",
      "fatalFlawReason_en": "Contradicted later by the systematic resignation and whistleblowing of top AI safety researchers.",
      "radarScores": {
        "sincerity": 20,
        "calculation": 99,
        "prSkill": 98,
        "backfireRisk": 25
      },
      "juryVerdict": {
        "agreeSpinPercent": 78,
        "seeThroughPercent": 22
      }
    }
  },
  {
    "id": "musk-openai-lawsuit",
    "platform": "X (Twitter) / 特斯拉",
    "platformIcon": "🚀",
    "tag": "千亿大佬反目成仇",
    "tag_en": "Billionaire Tech Feud & Antitrust",
    "title": "马斯克发长文起诉 OpenAI「背叛初衷」透视",
    "title_en": "Elon Musk’s Lawsuit & Open Letter Against OpenAI Deconstructed",
    "subtitle": "表面痛斥其沦为微软闭源赚钱机器，实则为自研 xAI 争夺行业正统地位",
    "subtitle_en": "Championing open-source ethics to stall commercial rivals while positioning xAI",
    "sourceDate": "X 全球热议",
    "sourceDate_en": "Global X Viral Trend",
    "avatar": "🚀",
    "originalExcerpt": "“OpenAI has transformed into a closed-source de facto subsidiary of Microsoft. This is a stark betrayal of the founding agreement to build open-source AGI for the benefit of humanity.”",
    "originalExcerpt_en": "“OpenAI has transformed into a closed-source de facto subsidiary of Microsoft. This is a stark betrayal of the founding agreement to build open-source AGI for the benefit of humanity.”",
    "tactics": [
      {
        "title": "① 抢占道德制高点·挥舞开源大旗",
        "title_en": "① Moral High Ground: Open Source Crusade",
        "desc": "以‘人类利益守护者’自居，痛击 OpenAI 违背早期非营利与开源承诺。",
        "desc_en": "Styles himself as humanity's champion holding a tech giant accountable to its original non-profit charter.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 商业卡位·为 xAI 注入正统光环",
        "title_en": "② Commercial Positioning for xAI",
        "desc": "将自己创立的 xAI / Grok 标榜为唯一坚守纯粹开源路线的正统继承人，阻击对手估值融资。",
        "desc_en": "Positions his own startup, xAI, as the only true open-source heir to attract top AI talent and investors.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 法律诉讼当公关武器",
        "title_en": "③ Litigation as Public Relations Warfare",
        "desc": "明知胜诉难度极高，依然通过起诉公开大量早期内部邮件，实施精准舆论爆破。",
        "desc_en": "Uses legal discovery and filings as PR weapons to leak embarrassing internal email correspondence.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "以道德为名的商业阻击",
      "verdictLabel_en": "COMMERCIAL ATTACK UNDER ETHICAL CLOAK",
      "verdictScore": 60,
      "headline": "表面为人类理想讨伐资本背叛，实则是为了给自家 xAI 争取时间并打破微软 OpenAI 商业垄断",
      "headline_en": "Wielding ethical crusade rhetoric to stall a dominant rival while buying critical runway for xAI",
      "statedPersona": "早期慷慨捐资却被无情踢出局、忧国忧民担忧 AI 毁灭人类的理想主义缔造者",
      "statedPersona_en": "A betrayed founding benefactor standing up against corporate greed for the safety of humankind",
      "hiddenAgenda": "压制主要竞争对手的商业重组进度，争夺全球顶尖 AI 人才与算力资本的投奔",
      "hiddenAgenda_en": "Disrupt OpenAI's transition to a for-profit entity while diverting top ML engineering talent to xAI",
      "desiredPublicTakeaway": "“马斯克是对的，OpenAI 确实变成了 CloseAI / 微软走狗”",
      "desiredPublicTakeaway_en": "“Elon is right: OpenAI sold out and became 'ClosedAI' / a puppet for Microsoft”",
      "distractionTarget": "掩盖自己当年曾提议将 OpenAI 并入特斯拉并要求绝对控制权的早期邮件记录",
      "distractionTarget_en": "Obscure historical emails showing he previously proposed merging OpenAI under Tesla with himself as CEO",
      "fatalFlawExcerpt": "“...a closed-source de facto subsidiary of Microsoft.”",
      "fatalFlawExcerpt_en": "“...a closed-source de facto subsidiary of Microsoft.”",
      "fatalFlawReason": "OpenAI 随后公开了马斯克早期赞成商业化并试图掌控公司的邮件，让道德批判大打折扣。",
      "fatalFlawReason_en": "OpenAI responded by releasing his own archived emails advocating for for-profit pivots under his leadership.",
      "radarScores": {
        "sincerity": 40,
        "calculation": 92,
        "prSkill": 88,
        "backfireRisk": 60
      },
      "juryVerdict": {
        "agreeSpinPercent": 55,
        "seeThroughPercent": 45
      }
    }
  },
  {
    "id": "case-01",
    "platform": "微博 / 懂车帝",
    "platformIcon": "🚗",
    "tag": "车企智驾对线",
    "tag_en": "Auto CEO Autonomous Driving Debate",
    "title": "某造车新势力 CEO「关于 AEB 刹停论战回应」微博长文透视",
    "title_en": "EV CEO's Defensive Memo on AEB Safety Testing Deconstructed",
    "subtitle": "把竞品技术领先污蔑为假测试，声称自家算法绝不拿用户当小白鼠",
    "subtitle_en": "Reframing competitor technological leads as 'fake stunt tests' while claiming superior user safety ethics",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🚗",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 78,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 17,
        "calculation": 91,
        "prSkill": 69,
        "backfireRisk": 78
      },
      "juryVerdict": {
        "agreeSpinPercent": 13,
        "seeThroughPercent": 87
      }
    }
  },
  {
    "id": "case-02",
    "platform": "36氪 / 微信",
    "platformIcon": "🤖",
    "tag": "大模型价格战",
    "tag_en": "AI Token Price War Memo",
    "title": "某独角兽 AI 创始人「关于 API 零元免费与大模型内卷」声明透视",
    "title_en": "AI Unicorn Founder’s 'Free API Strategy' Open Letter Deconstructed",
    "subtitle": "高举降低开发者门槛旗号，实则由于留存低迷用免费换取日活数据融下一轮",
    "subtitle_en": "Pretending to empower developers while using loss-leader pricing to inflate active user metrics for fundraising",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🤖",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 81,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 19,
        "calculation": 94,
        "prSkill": 73,
        "backfireRisk": 81
      },
      "juryVerdict": {
        "agreeSpinPercent": 16,
        "seeThroughPercent": 84
      }
    }
  },
  {
    "id": "case-03",
    "platform": "小红书 / 知乎",
    "platformIcon": "📱",
    "tag": "智能硬件翻车",
    "tag_en": "Smart Hardware Navigation Defect",
    "title": "知名扫地机品牌「避障视障被消保委点名」整改说明信透视",
    "title_en": "Smart Robot Vacuum's Regulatory Defect Apology Deconstructed",
    "subtitle": "把激光雷达虚标与硬件减配，包装为特定复杂地毯材质下的算法偶发误判",
    "subtitle_en": "Downplaying hardware sensor downgrades as 'rare edge cases on complex carpet textures'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "📱",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 84,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 21,
        "calculation": 97,
        "prSkill": 77,
        "backfireRisk": 84
      },
      "juryVerdict": {
        "agreeSpinPercent": 19,
        "seeThroughPercent": 81
      }
    }
  },
  {
    "id": "case-04",
    "platform": "抖音 / 快手",
    "platformIcon": "🌾",
    "tag": "千万主播助农翻车",
    "tag_en": "Top Influencer Rural Charity Scandal",
    "title": "某头部网红团队「助农苹果以次充好」整顿承诺书透视",
    "title_en": "Mega Influencer’s Rotten Fruit Charity Scandal Response Deconstructed",
    "subtitle": "把发霉次果归咎为果农采摘损耗与冷链运输脱节，坚守扶贫人设不倒",
    "subtitle_en": "Blaming rotten produce on cold-chain logistics while shielding their multi-million dollar staging profits",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🌾",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 87,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 23,
        "calculation": 89,
        "prSkill": 81,
        "backfireRisk": 87
      },
      "juryVerdict": {
        "agreeSpinPercent": 22,
        "seeThroughPercent": 78
      }
    }
  },
  {
    "id": "case-05",
    "platform": "大众点评 / 小红书",
    "platformIcon": "🍲",
    "tag": "网红餐饮危机",
    "tag_en": "Restaurant Pre-Made Food Controversy",
    "title": "知名连锁火锅「预制汤底与天价调料费」致歉信透视",
    "title_en": "Hotpot Chain's Pre-Packaged Broth & Surcharge Apology Deconstructed",
    "subtitle": "强调统一中央厨房是为了食品安全与标准化，掩盖高毛利预制菜暴利本质",
    "subtitle_en": "Praising industrial pre-packaged soups as 'safety standardization' to protect exorbitant gross margins",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🍲",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 90,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 25,
        "calculation": 92,
        "prSkill": 85,
        "backfireRisk": 90
      },
      "juryVerdict": {
        "agreeSpinPercent": 25,
        "seeThroughPercent": 75
      }
    }
  },
  {
    "id": "case-06",
    "platform": "B站 / 微博",
    "platformIcon": "🎮",
    "tag": "二次元卡池背刺",
    "tag_en": "Gacha Game Nerf & Compensation",
    "title": "某二次元开放世界大作「周年庆福利缩水与文案道歉」全员信透视",
    "title_en": "Gacha Gaming Anniversary Reward Nerf Statement Deconstructed",
    "subtitle": "声称为了游戏长线经济系统健康，实则为新项目抽调产能逼氪老玩家",
    "subtitle_en": "Claiming 'long-term economic balance' while siphoning resources to new projects to squeeze veteran players",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🎮",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 93,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 27,
        "calculation": 95,
        "prSkill": 89,
        "backfireRisk": 93
      },
      "juryVerdict": {
        "agreeSpinPercent": 28,
        "seeThroughPercent": 72
      }
    }
  },
  {
    "id": "case-07",
    "platform": "X (Twitter)",
    "platformIcon": "📺",
    "tag": "海外顶流争议",
    "tag_en": "Top YouTuber Workplace Crisis",
    "title": "MrBeast「关于制作环境安全与员工争议」全景回应信透视",
    "title_en": "MrBeast's Safety & Workplace Investigation Memo Deconstructed",
    "subtitle": "把千万美元超级大片的高压危险管理，解释为初创小哥们野蛮生长的必经阵痛",
    "subtitle_en": "Framing systemic workplace safety lapses as 'growing pains of five friends scaling from a bedroom'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "📺",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 96,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 29,
        "calculation": 98,
        "prSkill": 93,
        "backfireRisk": 96
      },
      "juryVerdict": {
        "agreeSpinPercent": 11,
        "seeThroughPercent": 89
      }
    }
  },
  {
    "id": "case-08",
    "platform": "YouTube / X",
    "platformIcon": "🥊",
    "tag": "网红金融欺诈",
    "tag_en": "Crypto NFT Buyback Legal Maneuver",
    "title": "Logan Paul「CryptoZoo 链游归还 230 万承诺」透视",
    "title_en": "Logan Paul’s CryptoZoo $2.3M Refund Program Deconstructed",
    "subtitle": "自掏腰包回购实则是逼迫受害者签署放弃集体诉讼的免责承诺书",
    "subtitle_en": "Packaging a partial refund as benevolence while legally barring victims from class-action lawsuits",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🥊",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 77,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 31,
        "calculation": 90,
        "prSkill": 67,
        "backfireRisk": 77
      },
      "juryVerdict": {
        "agreeSpinPercent": 14,
        "seeThroughPercent": 86
      }
    }
  },
  {
    "id": "case-09",
    "platform": "美通社 / 彭博社",
    "platformIcon": "🎨",
    "tag": "反垄断解绑",
    "tag_en": "Megadeal Termination Joint Release",
    "title": "Adobe 与 Figma「终止 200 亿美金并购」联合声明透视",
    "title_en": "Adobe & Figma's $20B Merger Termination Announcement Deconstructed",
    "subtitle": "表面痛惜监管阻碍创新，实则双方各自长舒一口气的双赢体面解绑",
    "subtitle_en": "Blaming regulatory overreach while both parties quietly breathe a sigh of relief in the new AI landscape",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🎨",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 80,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 33,
        "calculation": 93,
        "prSkill": 71,
        "backfireRisk": 80
      },
      "juryVerdict": {
        "agreeSpinPercent": 17,
        "seeThroughPercent": 83
      }
    }
  },
  {
    "id": "case-10",
    "platform": "华尔街日报",
    "platformIcon": "☕",
    "tag": "跨国高管特权",
    "tag_en": "Executive Corporate Jet Commute",
    "title": "星巴克新 CEO「每周私人飞机跨城通勤 1600 公里」公关回应透视",
    "title_en": "Starbucks CEO’s 1,000-Mile Private Jet Commute Defense Deconstructed",
    "subtitle": "一边大推纸吸管环保减碳，一边将私人飞机特权包装为提高全球巡店领导力",
    "subtitle_en": "Preaching paper-straw environmentalism while defending a private jet commute as 'leadership presence'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "☕",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 83,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 35,
        "calculation": 96,
        "prSkill": 75,
        "backfireRisk": 83
      },
      "juryVerdict": {
        "agreeSpinPercent": 20,
        "seeThroughPercent": 80
      }
    }
  },
  {
    "id": "case-11",
    "platform": "Reddit / X",
    "platformIcon": "🍿",
    "tag": "流媒体逼氪",
    "tag_en": "Streaming Password Sharing Ban",
    "title": "Netflix「打击密码共享声明」全员信透视",
    "title_en": "Netflix’s Password Sharing Crackdown Memo Deconstructed",
    "subtitle": "早年喊出Love is sharing，如今为了财报增长强行封杀家庭共享逼迫多交钱",
    "subtitle_en": "Retiring 'Love is sharing a password' to squeeze paid subscription additions out of household networks",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🍿",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 86,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 37,
        "calculation": 88,
        "prSkill": 79,
        "backfireRisk": 86
      },
      "juryVerdict": {
        "agreeSpinPercent": 23,
        "seeThroughPercent": 77
      }
    }
  },
  {
    "id": "case-12",
    "platform": "X (Twitter)",
    "platformIcon": "🚗",
    "tag": "自动驾驶造梦",
    "tag_en": "Autonomous Driving Vision Memo",
    "title": "马斯克「FSD V12 端到端彻底解决自动驾驶」推文透视",
    "title_en": "Elon Musk’s 'End-to-End Superhuman FSD V12' Hype Deconstructed",
    "subtitle": "连续第十年预言今年落地，用端到端神经网络新词汇继续支撑高估值",
    "subtitle_en": "Revitalizing a decade-old promise with 'end-to-end neural net' buzzwords to bolster Wall Street valuation",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🚗",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 89,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 39,
        "calculation": 91,
        "prSkill": 83,
        "backfireRisk": 89
      },
      "juryVerdict": {
        "agreeSpinPercent": 26,
        "seeThroughPercent": 74
      }
    }
  },
  {
    "id": "case-13",
    "platform": "苹果官网",
    "platformIcon": "🍏",
    "tag": "AI隐私叙事",
    "tag_en": "Apple Intelligence Privacy Narrative",
    "title": "苹果「Apple Intelligence 私密计算声明」透视",
    "title_en": "Apple’s Private Cloud Compute Architecture Statement Deconstructed",
    "subtitle": "把端侧算力落后的研发短板，反向包装为对用户隐私绝不妥协的最高标准",
    "subtitle_en": "Turning compute constraints into a supreme virtue of absolute user privacy guardianship",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🍏",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 92,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 16,
        "calculation": 94,
        "prSkill": 87,
        "backfireRisk": 92
      },
      "juryVerdict": {
        "agreeSpinPercent": 29,
        "seeThroughPercent": 71
      }
    }
  },
  {
    "id": "case-14",
    "platform": "微信公众号",
    "platformIcon": "📚",
    "tag": "自媒体洗稿",
    "tag_en": "Plagiarism vs Universal Knowledge",
    "title": "千万科普大V「关于视频引用争议的说明」透视",
    "title_en": "Popular Creator’s Plagiarism & Script Copying Defense Deconstructed",
    "subtitle": "把像素级洗稿抄袭，偷换为科学原理属于人类共同财产的公理巧合",
    "subtitle_en": "Equating frame-by-frame structural copying with 'universal scientific facts belonging to all humanity'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "📚",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 95,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 18,
        "calculation": 97,
        "prSkill": 91,
        "backfireRisk": 95
      },
      "juryVerdict": {
        "agreeSpinPercent": 12,
        "seeThroughPercent": 88
      }
    }
  },
  {
    "id": "case-15",
    "platform": "知乎 / 脉脉",
    "platformIcon": "🛒",
    "tag": "电商用工争议",
    "tag_en": "Corporate PR Vendor Scapegoat",
    "title": "某电商巨头「底层员工拿命换钱秒删辟谣」透视",
    "title_en": "E-Commerce Giant’s 'Third-Party Vendor Error' PR Scapegoat Deconstructed",
    "subtitle": "把官方认证账号发言光速甩锅给合作供应商外部人员误登",
    "subtitle_en": "Instantly blaming a verified official account post on an external vendor contractor",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🛒",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 76,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 20,
        "calculation": 89,
        "prSkill": 65,
        "backfireRisk": 76
      },
      "juryVerdict": {
        "agreeSpinPercent": 15,
        "seeThroughPercent": 85
      }
    }
  },
  {
    "id": "case-16",
    "platform": "微博 / 懂车帝",
    "platformIcon": "🔥",
    "tag": "自燃事故公关",
    "tag_en": "EV Thermal Runaway Data Disclosure",
    "title": "某造车新势力「自燃起火与后台数据封锁」说明信透视",
    "title_en": "EV Maker’s Battery Fire & Telemetry Withholding Statement Deconstructed",
    "subtitle": "死咬电池热失控前有预警，指责车主私自加装设备破坏电路",
    "subtitle_en": "Deflecting battery cell failure by insinuating aftermarket accessory tampering",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🔥",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 79,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 22,
        "calculation": 92,
        "prSkill": 69,
        "backfireRisk": 79
      },
      "juryVerdict": {
        "agreeSpinPercent": 18,
        "seeThroughPercent": 82
      }
    }
  },
  {
    "id": "case-17",
    "platform": "雪球 / 微信",
    "platformIcon": "📈",
    "tag": "量化私募暴雷",
    "tag_en": "Quant Fund Drawdown Investor Letter",
    "title": "百亿量化巨头「DMA 业务大幅回撤致投资人信」透视",
    "title_en": "Quant Hedge Fund’s Extreme Liquidity Drawdown Letter Deconstructed",
    "subtitle": "把微盘股极限踩踏归咎于极端黑天鹅行情，坚称策略长期胜率依然有效",
    "subtitle_en": "Framing catastrophic leverage crowding as an unprecedented 'black swan' while defending core model viability",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "📈",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 82,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 24,
        "calculation": 95,
        "prSkill": 73,
        "backfireRisk": 82
      },
      "juryVerdict": {
        "agreeSpinPercent": 21,
        "seeThroughPercent": 79
      }
    }
  },
  {
    "id": "case-18",
    "platform": "小红书 / 微博",
    "platformIcon": "💄",
    "tag": "国货美妆防腐",
    "tag_en": "Cosmetics Undisclosed Preservatives",
    "title": "某新锐美妆「检出未标明防腐剂」说明信透视",
    "title_en": "Beauty Brand’s Undisclosed Preservatives Lab Report Defense Deconstructed",
    "subtitle": "将违规添加防腐成分解释为原料供应商带入的痕量残留，坚称对人体无害",
    "subtitle_en": "Downplaying unlisted chemical additives as 'harmless trace carrier residues from raw material suppliers'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "💄",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 85,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 26,
        "calculation": 98,
        "prSkill": 77,
        "backfireRisk": 85
      },
      "juryVerdict": {
        "agreeSpinPercent": 24,
        "seeThroughPercent": 76
      }
    }
  },
  {
    "id": "case-19",
    "platform": "掌上英雄联盟",
    "platformIcon": "🏆",
    "tag": "电竞选手合同",
    "tag_en": "Esports Contract Dispute",
    "title": "某老牌豪门战队「核心选手自由人转会纠纷」公告透视",
    "title_en": "Esports Dynasty’s Star Player Free Agency Dispute Deconstructed",
    "subtitle": "表面祝福选手前程似锦，实则在商业合同细则中设置竞业禁止卡人",
    "subtitle_en": "Publicly wishing a star player well while enforcing punitive non-compete transfer clauses behind closed doors",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🏆",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 88,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 28,
        "calculation": 90,
        "prSkill": 81,
        "backfireRisk": 88
      },
      "juryVerdict": {
        "agreeSpinPercent": 27,
        "seeThroughPercent": 73
      }
    }
  },
  {
    "id": "case-20",
    "platform": "GitHub / X",
    "platformIcon": "🤖",
    "tag": "开源协议背刺",
    "tag_en": "Open Source License Change",
    "title": "某知名开源向量数据库「更改商业许可协议」说明信透视",
    "title_en": "Open-Source Database’s Restrictive License Pivot Deconstructed",
    "subtitle": "早期靠开源社区繁荣生态，做大后强推限制云厂商商用的专有协议",
    "subtitle_en": "Building ecosystem adoption on permissive licenses before enforcing proprietary restrictions against cloud providers",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🤖",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 91,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 30,
        "calculation": 93,
        "prSkill": 85,
        "backfireRisk": 91
      },
      "juryVerdict": {
        "agreeSpinPercent": 10,
        "seeThroughPercent": 90
      }
    }
  },
  {
    "id": "case-21",
    "platform": "脉脉 / 微博",
    "platformIcon": "🏢",
    "tag": "年终奖缩水",
    "tag_en": "Tech Year-End Bonus Reduction",
    "title": "某大厂管理层「年终奖调整与降本增效说明信」透视",
    "title_en": "Tech Giant’s Performance Bonus Reduction Memo Deconstructed",
    "subtitle": "把利润率健康下的强行克扣奖金，包装成给年轻员工更多挑战与锻炼机会",
    "subtitle_en": "Reframing corporate bonus slashing as 'fostering resilience and ownership among rising stars'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🏢",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 94,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 32,
        "calculation": 96,
        "prSkill": 89,
        "backfireRisk": 94
      },
      "juryVerdict": {
        "agreeSpinPercent": 13,
        "seeThroughPercent": 87
      }
    }
  },
  {
    "id": "case-22",
    "platform": "YouTube",
    "platformIcon": "🎧",
    "tag": "播客内容下架",
    "tag_en": "Viral Podcaster Backtrack",
    "title": "某顶流播客主「涉嫌虚假医学信息下架播客致歉」透视",
    "title_en": "Top Podcaster’s Health Misinformation Apology Statement Deconstructed",
    "subtitle": "声称只是提供多元开放讨论视角，绝口不提带货保健品的高额分成",
    "subtitle_en": "Claiming 'just asking curious questions' while concealing lucrative health supplement sponsorships",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🎧",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 75,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 34,
        "calculation": 88,
        "prSkill": 93,
        "backfireRisk": 75
      },
      "juryVerdict": {
        "agreeSpinPercent": 16,
        "seeThroughPercent": 84
      }
    }
  },
  {
    "id": "case-23",
    "platform": "X (Twitter)",
    "platformIcon": "📉",
    "tag": "做空报告反击",
    "tag_en": "Short Seller Rebuttal Letter",
    "title": "某纳斯达克中概股「针对浑水做空报告的严正声明」透视",
    "title_en": "NASDAQ Listed Firm’s Short Seller Attack Rebuttal Deconstructed",
    "subtitle": "把对财务造假的实质质疑降解为恶意做空机构做空牟利，宣布回购稳定军心",
    "subtitle_en": "Framing documented revenue discrepancies as 'malicious short-seller manipulation' while announcing token buybacks",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "📉",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 78,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 36,
        "calculation": 91,
        "prSkill": 67,
        "backfireRisk": 78
      },
      "juryVerdict": {
        "agreeSpinPercent": 19,
        "seeThroughPercent": 81
      }
    }
  },
  {
    "id": "case-24",
    "platform": "抖音",
    "platformIcon": "🎮",
    "tag": "未成年退款",
    "tag_en": "Game Refund Policy Defense",
    "title": "某游戏平台「未成年人退款难与人脸识别机制说明」透视",
    "title_en": "Gaming Platform’s Minor In-Game Purchase Refund Policy Deconstructed",
    "subtitle": "设置极其繁琐的人工审核门槛，表面合规实则大幅降低真实退款率",
    "subtitle_en": "Creating labyrinthine verification barriers to technically satisfy compliance while minimizing actual refund payouts",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🎮",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 81,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 38,
        "calculation": 94,
        "prSkill": 71,
        "backfireRisk": 81
      },
      "juryVerdict": {
        "agreeSpinPercent": 22,
        "seeThroughPercent": 78
      }
    }
  },
  {
    "id": "case-25",
    "platform": "小红书",
    "platformIcon": "👗",
    "tag": "大牌抄袭争议",
    "tag_en": "Fast Fashion Independent Designer",
    "title": "某跨国快时尚巨头「独立设计师版权争议核查函」透视",
    "title_en": "Fast Fashion Brand’s Independent Designer Plagiarism Response Deconstructed",
    "subtitle": "声称设计灵感来源于公共流行趋势，用漫长法务程序拖垮独立设计师",
    "subtitle_en": "Attributing 1:1 copied garments to 'global trend forecasting' while out-litigating independent designers",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "👗",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 84,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 15,
        "calculation": 97,
        "prSkill": 75,
        "backfireRisk": 84
      },
      "juryVerdict": {
        "agreeSpinPercent": 25,
        "seeThroughPercent": 75
      }
    }
  },
  {
    "id": "case-26",
    "platform": "知乎",
    "platformIcon": "🏥",
    "tag": "医疗误诊公关",
    "tag_en": "Hospital Diagnostic Misinterpretation",
    "title": "某民营体检集团「关于早期筛查漏诊争议的通报」透视",
    "title_en": "Private Diagnostic Clinic’s Missed Cancer Screening Statement Deconstructed",
    "subtitle": "把系统性漏检归咎为个体生物学特征差异与影像学极限，回避流水线操作",
    "subtitle_en": "Shifting blame to 'inherent radiological imaging limits' rather than factory-style rushed radiologist workloads",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🏥",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "算盘被看穿",
      "verdictLabel_en": "SPIN CAUGHT",
      "verdictScore": 87,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 17,
        "calculation": 89,
        "prSkill": 79,
        "backfireRisk": 87
      },
      "juryVerdict": {
        "agreeSpinPercent": 28,
        "seeThroughPercent": 72
      }
    }
  },
  {
    "id": "case-27",
    "platform": "微博",
    "platformIcon": "🎤",
    "tag": "演唱会假唱争议",
    "tag_en": "Pop Star Lip-Sync Allegation",
    "title": "某知名歌手巡回演唱会「音响调音与真唱声明」透视",
    "title_en": "Pop Star’s Live Concert Lip-Sync Allegation Response Deconstructed",
    "subtitle": "把半开麦垫音与假唱质疑，包装为场馆混响延迟与声卡技术故障",
    "subtitle_en": "Explaining suspicious pre-recorded vocal tracks as 'acoustic reverberation delays and soundboard synchronization anomalies'",
    "sourceDate": "2025-2026 最新案卷",
    "sourceDate_en": "2025-2026 Recent Dossier",
    "avatar": "🎤",
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "originalExcerpt_en": "“Regarding the recent discussions online, we have initiated an immediate internal review in a responsible manner. We sincerely apologize for any confusion and have established a dedicated remediation team...”",
    "tactics": [
      {
        "title": "① 程序性拖延·等待舆论降温",
        "title_en": "① Procedural Delay for Public Cooling",
        "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。",
        "desc_en": "Uses 'internal investigation underway' to freeze immediate outrage while waiting for news cycles to shift.",
        "color": "#8DB8C0"
      },
      {
        "title": "② 责任稀释·大词遮蔽细节",
        "title_en": "② Diluting Blame with Broad Rhetoric",
        "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。",
        "desc_en": "Heavily emphasizes 'original aspirations and ethics' while dodging concrete timeline and compensation admissions.",
        "color": "#D7A15C"
      },
      {
        "title": "③ 预留逃逸舱·防法律诉讼",
        "title_en": "③ Legal Liability Avoidance",
        "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。",
        "desc_en": "Carefully restricts apologies to 'causing public confusion' rather than admitting regulatory non-compliance.",
        "color": "#D76A5C"
      }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "翻车典型",
      "verdictLabel_en": "CRITICAL BLUNDER",
      "verdictScore": 90,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "headline_en": "Employing boilerplate PR rhetoric and procedural apologies to conceal core conflicts of interest and management failures",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "statedPersona_en": "A diligent, responsible industry veteran striving to rectify misunderstandings with utmost transparency",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "hiddenAgenda_en": "Delay peak scrutiny over the crucial 72-hour window to prevent contract cancellations and regulatory crackdowns",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "desiredPublicTakeaway_en": "“They have a constructive attitude; let's wait for the final official report”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "distractionTarget_en": "Distract from management complicity, systemic compliance failures, and genuine victim compensation",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawExcerpt_en": "“We have established a dedicated remediation team...”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "fatalFlawReason_en": "Public cynicism deepens when internal probe teams consistently fail to publish transparent corrective data.",
      "radarScores": {
        "sincerity": 19,
        "calculation": 92,
        "prSkill": 83,
        "backfireRisk": 90
      },
      "juryVerdict": {
        "agreeSpinPercent": 11,
        "seeThroughPercent": 89
      }
    }
  }
];
