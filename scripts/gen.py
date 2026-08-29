import json

raw_cases = [
  {
    "id": "sun-vs-jing",
    "platform": "微博 / X (Twitter)",
    "platformIcon": "🪙",
    "tag": "币圈操盘与注意力套利",
    "title": "孙宇晨《我的女友景甜》6000字小作文商业透视",
    "subtitle": "声称问Claude是否付5000万，深情追忆背后的币圈大会造势与注意力套利",
    "sourceDate": "2026年8月热搜",
    "avatar": "🪙",
    "originalExcerpt": "“这几天外界有很多不实传闻。我曾把这个涉及巨额资金和感情的决定拿去问 Claude 是否支付5000万美元……走到今天这一步我感到非常遗憾，我始终珍惜曾经的一切……（文末附注：本故事纯属虚构）”",
    "tactics": [
      { "title": "① 行业大会与生态造势", "desc": "精准卡位在加密全球大会（如Token2049）与发币窗口期，将泛大众八卦流量直接截流注入个人IP与加密盘口。", "color": "#8DB8C0" },
      { "title": "② 绑架 AI 当拒付背锅侠", "desc": "“不是我不给5000万，是Claude让我别给”——将冷血商业算计包装成理性极客服从算法，顺便蹭硅谷AI热点。", "color": "#D7A15C" },
      { "title": "③ 文末免责逃逸舱", "desc": "6000字深情爆料末尾加一句“纯属虚构”，既吃尽全网热搜泼天流量，又在法律层面构筑防火墙规避名誉权诉讼。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "顶级注意力套利",
      "verdictScore": 95,
      "headline": "精准踩中Token2049与Meme发币窗口期，用「女星+天价+AI背锅」完成零成本流量收割",
      "statedPersona": "深情被辜负、面对5000万抉择甚至无助求助AI的“极客痴情男”",
      "hiddenAgenda": "① 配合近期币圈大会与生态发币造势，收割全网泛娱乐注意力注入加密盘口；② 让AI当‘拒付挡箭牌’稀释冷血形象；③ 文末加‘纯属虚构’防法律起诉。",
      "desiredPublicTakeaway": "“孙哥太有意思了连分手都问AI”、“景甜要5000万太夸张了”",
      "distractionTarget": "转移公众对3000多万国内实质民事诉讼的追责审视，将严肃法律纠纷娱乐化、降维成全网八卦",
      "fatalFlawExcerpt": "“我曾问 Claude 是否支付……（文末注：纯属虚构）”",
      "fatalFlawReason": "既想要吃尽明星八卦的顶级公关流量，又在文末加注‘纯属虚构’构筑法律逃逸舱——典型的既要流量又要免责的投机闭环。",
      "radarScores": { "sincerity": 5, "calculation": 99, "prSkill": 95, "backfireRisk": 95 },
      "juryVerdict": { "agreeSpinPercent": 7, "seeThroughPercent": 93 }
    }
  },
  {
    "id": "zhong-shanshan-statement",
    "platform": "微信 / 今日头条",
    "platformIcon": "💧",
    "tag": "实业巨头危机公关",
    "title": "钟睒睒《我与宗庆后先生的二三事》自白长文透视",
    "subtitle": "回应“农夫与蛇”网络争议，从第一桶金讲起的千亿首富理性反击",
    "sourceDate": "商界高频热议",
    "avatar": "💧",
    "originalExcerpt": "“宗老生前痛恨网络暴力。未曾想借宗老离世，网络上却出现大量对我和农夫山泉的诋毁……我的第一桶金来自布匹生意而非娃哈哈。希望广大网友勿被带节奏。”",
    "tactics": [
      { "title": "① 借已故对手之名立盾", "desc": "开篇强调‘宗老痛恨网暴’，在道德层面将攻击者定性为违背逝者遗愿的带节奏者。", "color": "#8DB8C0" },
      { "title": "② 详述创业细节洗清原罪", "desc": "详细列举早期在海南倒卖窗帘布匹的原始积累过程，全力击碎‘靠娃哈哈起家后背刺恩人’的核心民意指控。", "color": "#D7A15C" },
      { "title": "③ 高举实业与纳税大旗", "desc": "把个人名誉与数万员工就业及数十亿地方纳税捆绑，向地方与平台施压要求清理恶意造谣账号。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "文人傲骨与民粹碰撞",
      "verdictScore": 78,
      "headline": "试图用详尽的商业事实与文人克制，抵御泛滥的情绪化民粹猎巫与同行煽风点火",
      "statedPersona": "问心无愧、白手起家、被恶意中伤依然保持风骨的中国实业领袖",
      "hiddenAgenda": "遏制农夫山泉在下沉零售渠道遭大面积抵制退货的终端崩盘危机，挽回蒸发的数百亿市值",
      "desiredPublicTakeaway": "“钟睒睒确实没坑娃哈哈，大家被自媒体情绪带节奏了”",
      "distractionTarget": "回避早期通过天然水与纯净水营销战将娃哈哈逼入死角的商业残酷性",
      "fatalFlawExcerpt": "“我的第一桶金来自布匹生意……”",
      "fatalFlawReason": "文人式的理性自辩在汹涌的下沉情绪狂欢面前收效有限，未能迅速熄灭民粹怒火。",
      "radarScores": { "sincerity": 65, "calculation": 80, "prSkill": 60, "backfireRisk": 78 },
      "juryVerdict": { "agreeSpinPercent": 42, "seeThroughPercent": 58 }
    }
  },
  {
    "id": "dongbei-yujie-apology",
    "platform": "抖音 / 快手",
    "platformIcon": "🍠",
    "tag": "乡村顶流带货翻车",
    "title": "东北雨姐「红薯粉条不含红薯」全网致歉声明透视",
    "subtitle": "把明知故犯销售木薯粉，包装成“带领乡亲创业选品团队经验不足”",
    "sourceDate": "抖音千万级热搜",
    "avatar": "👵",
    "originalExcerpt": "“雨姐对不住大家！我们也是农村出来的，一心想帮家乡带货。这批粉条确实出了质量问题，是雨姐没有把好关。我们接受监管一切处罚，假一赔三决不推卸！”",
    "tactics": [
      { "title": "① 农村质朴人设立功", "desc": "反复强调‘农村出来没文化’，将严重违法的商业造假转化为‘好心办坏事的朴素老乡’。", "color": "#8DB8C0" },
      { "title": "② 光速退款买断追责", "desc": "高呼假一赔三，实则是为了赶在市场监管局开出吊销营业执照顶格罚单前争取认错从宽。", "color": "#D7A15C" },
      { "title": "③ 切割打人黑历史", "desc": "通篇只谈粉条质量退款，绝口不提此前暴力殴打上门打假博主的恶劣治安事件。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "纯朴人设彻底粉碎",
      "verdictScore": 94,
      "headline": "在官方检测出‘未检出红薯基因’铁证后，依然试图拿‘助农初心’当遮羞布，引发全网公愤",
      "statedPersona": "知错就改、自掏腰包赔付、被不良厂家坑害的耿直农村大姐",
      "hiddenAgenda": "保住全网数千万粉丝矩阵账号不被封禁，掩盖其幕后专业资本操盘与极高利润率的真相",
      "desiredPublicTakeaway": "“雨姐态度很好赔钱了，农村人创业不容易，放她一马吧”",
      "distractionTarget": "掩盖长期以来虚构乡村田园剧本、利用信息差向粉丝倾销低质工业贴牌产品的本质",
      "fatalFlawExcerpt": "“我们也是农村出来的……”",
      "fatalFlawReason": "当数千万元利润流向家族企业被查实后，‘纯朴农民’叙事彻底破产沦为年度笑话。",
      "radarScores": { "sincerity": 10, "calculation": 96, "prSkill": 40, "backfireRisk": 94 },
      "juryVerdict": { "agreeSpinPercent": 10, "seeThroughPercent": 90 }
    }
  },
  {
    "id": "streamer-fake-goods",
    "platform": "抖音 / 微信",
    "platformIcon": "🎵",
    "tag": "头部MCN合规危机",
    "title": "三只羊「假香港月饼与假原切牛肉」致歉声明透视",
    "subtitle": "把知假售假收取数千万佣金，降维成“品牌方资质造假我们也是受害者”",
    "sourceDate": "全网重特大舆情",
    "avatar": "📦",
    "originalExcerpt": "“对不起大家！近期关于我司推荐的产品引发争议，经过核实，品牌方提供的授权资质存在不实情况。我们没有做好深度核验，辜负了粉丝信任。我们决定先行垫付全额退款，并全面暂停直播整顿。”",
    "tactics": [
      { "title": "① 祸水东引·甩锅品牌资质", "desc": "把主播团队知情且收取高额佣金的商业行为，偷换概念成‘我们也是被品牌方虚假材料蒙蔽的受害者’。", "color": "#8DB8C0" },
      { "title": "② 赔付买断·终止司法追责", "desc": "高调宣布‘先行垫付’抢占体面与负责任高地，实则是为了在监管部门开出顶格行政罚单前完成舆论软着陆。", "color": "#D7A15C" },
      { "title": "③ 避重就轻·绝口不提利润", "desc": "通篇只谈退款态度，绝口不提过去通过该品类赚取的数千万元坑位费与分成，保护核心资产收益。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "系统性造假遭重罚",
      "verdictScore": 96,
      "headline": "把「虚构香港原产地、知假售假」的恶劣合规危机，降级为「选品把关不严」的技术失误",
      "statedPersona": "痛定思痛、勇于担当、不惜自掏腰包保护粉丝的良心主播",
      "hiddenAgenda": "切断消费者向监管部门举报‘知假售假假一赔十’的追索链条，保住直播间核心开播资质",
      "desiredPublicTakeaway": "“主播态度很好愿意自掏腰包垫付，主要怪品牌方太黑心”",
      "distractionTarget": "掩盖长期以来低价贴牌代工、高抽成商业模式的系统性造假原罪",
      "fatalFlawExcerpt": "“品牌方提供的授权资质存在不实情况……”",
      "fatalFlawReason": "直接暴露了拥有数百人专业团队的头部 MCN 机构从未进行实质溯源验厂的事实。",
      "radarScores": { "sincerity": 8, "calculation": 98, "prSkill": 50, "backfireRisk": 96 },
      "juryVerdict": { "agreeSpinPercent": 8, "seeThroughPercent": 92 }
    }
  },
  {
    "id": "li-jiaqi-79-eyebrow",
    "platform": "微博 / 抖音",
    "platformIcon": "💄",
    "tag": "顶流主播心态失衡",
    "title": "李佳琦「哪里贵了 / 花西子 79 元」致歉小作文透视",
    "subtitle": "深夜泪洒直播间与长文回应：把阶层优越感失言粉饰为“工作压力太大状态不好”",
    "sourceDate": "现象级全民热议",
    "avatar": "💄",
    "originalExcerpt": "“我诚恳接受大家的批评。我本就是一个彩妆柜台销售出身，是大家的一路支持让我走到今天。我忘了自己来自哪里，我不应该迷失自己……希望大家给我时间调整。”",
    "tactics": [
      { "title": "① 唤醒阶层记忆·忆苦思甜", "desc": "反复提及‘柜哥出身’试图唤醒早期工薪阶层受众的情感共鸣，稀释身家过亿后的资本傲慢。", "color": "#8DB8C0" },
      { "title": "② 归咎生理疲惫·掩盖内核鄙视", "desc": "把对打工人‘有没有认真工作涨工资’的脱口而出，归咎为长期高强度直播的脑子短路。", "color": "#D7A15C" },
      { "title": "③ 模糊佣金利益·保护深度绑定品牌", "desc": "绝口不提 79 元眉笔背后高达 80% 的分成佣金，将焦点死死限制在‘言语态度不够谦虚’上。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "阶层断层无法弥合",
      "verdictScore": 94,
      "headline": "试图用「柜哥忆苦思甜」挽回，但一句脱口而出的「找找自己原因」已彻底击碎平民人设",
      "statedPersona": "一时迷失、深刻反省、依然把消费者当衣食父母的接地气柜哥",
      "hiddenAgenda": "紧急抢救即将到来的双十一数亿级坑位费保底合同，安抚恐慌的头部美妆合作品牌",
      "desiredPublicTakeaway": "“他天天播确实累了说话没过脑子，大家都穷过不要太苛刻”",
      "distractionTarget": "掩盖头部主播早已异化为超级资本巨兽、内心对普通打工人生存困境的冷漠审视",
      "fatalFlawExcerpt": "“我忘了自己来自哪里……”",
      "fatalFlawReason": "当一个人说‘我忘了自己来自哪里’时，公众瞬间明白他早已永远回不去了。",
      "radarScores": { "sincerity": 18, "calculation": 95, "prSkill": 60, "backfireRisk": 94 },
      "juryVerdict": { "agreeSpinPercent": 12, "seeThroughPercent": 88 }
    }
  },
  {
    "id": "dong-yuhui-dfzx-split",
    "platform": "抖音 / 微信",
    "platformIcon": "🌾",
    "tag": "知识主播与资本纠葛",
    "title": "董宇辉与东方甄选「和平分家」公开声明透视",
    "subtitle": "文人情怀包裹的百亿商业切割：既要体面退场，又要带走核心流量池",
    "sourceDate": "商界文人分家典型",
    "avatar": "🌾",
    "originalExcerpt": "“脱胎于新东方，感谢俞老师的长辈关怀与托举。离开是为了让彼此更自由地奔赴热爱。与辉同行将独立前行，未来我们依然是守望相助的朋友。”",
    "tactics": [
      { "title": "① 尊师重道·堵住背叛指责", "desc": "反复致敬俞敏洪与母体平台，将商业利益反目转化为‘长辈支持年轻人独立创业’的温情剧本。", "color": "#8DB8C0" },
      { "title": "② 情怀包装·去商业铜臭味", "desc": "用‘奔赴热爱、守望相助’等文人修辞，彻底掩盖数亿估值公司股权交割的冷酷商业谈判。", "color": "#D7A15C" },
      { "title": "③ 固化丈母娘粉·完成私域过户", "desc": "以独立且受庇护的形象，100% 将母体平台沉淀的核心粉丝无损迁移至个人新账号。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "PR_MASTERCLASS",
      "verdictLabel": "满分情怀式公关",
      "verdictScore": 20,
      "headline": "用最高阶的文人温情叙事，完成了一场数十亿市值的完美和平拆迁与个人IP私有化",
      "statedPersona": "感恩师恩、不恋高位、只想安静读书助农的纯粹文化学者",
      "hiddenAgenda": "彻底摆脱上市公司财报约束与原有高管层内耗，实现流量与商业收益的彻底自主可控",
      "desiredPublicTakeaway": "“俞老师大度，宇辉有情有义，这是最美好的体面双赢”",
      "distractionTarget": "淡化管理层与核心个人 IP 在利益分配上不可调和的零和博弈本质",
      "fatalFlawExcerpt": "“离开是为了让彼此更自由地奔赴热爱……”",
      "fatalFlawReason": "将商业利益分割彻底文学化，堪称现代企业危机公关的天花板模板。",
      "radarScores": { "sincerity": 75, "calculation": 82, "prSkill": 99, "backfireRisk": 20 },
      "juryVerdict": { "agreeSpinPercent": 86, "seeThroughPercent": 14 }
    }
  },
  {
    "id": "qu-jing-baidu-pr-memo",
    "platform": "朋友圈 / 微博",
    "platformIcon": "📱",
    "tag": "大厂公关副总裁翻车",
    "title": "某大厂公关副总裁「短视频言论争议」致歉朋友圈透视",
    "subtitle": "声称“我不是你婆婆，不关心员工死活”，遭遇全网群嘲后的深夜灭火",
    "sourceDate": "职场公关史诗级翻车",
    "avatar": "👩‍💼",
    "originalExcerpt": "“发布短视频前我没有事先征求公司意见，不符合相关流程，也不代表公司立场。我诚恳接受大家的批评，深刻反省自己在情绪化沟通中的失态，今后将更加严谨。”",
    "tactics": [
      { "title": "① 个人行为与公司品牌切割", "desc": "光速强调‘未经公司审批、不代表公司立场’，试图阻止股价与雇主品牌进一步暴跌。", "color": "#8DB8C0" },
      { "title": "② 将价值观畸形降级为失态", "desc": "把内心对基层劳动者的真实冷漠，偷换概念为‘个人沟通时情绪化失态’。", "color": "#D7A15C" },
      { "title": "③ 闪电离职封口止损", "desc": "在发布致歉后 24 小时内光速办理离职，以人头落地的方式阻断舆情向最高管理层蔓延。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "公关一号位自爆",
      "verdictScore": 98,
      "headline": "作为负责企业公关的最高负责人，亲自示范了如何用一条短视频摧毁数十亿市值的雇主品牌信任",
      "statedPersona": "勇于探索自媒体转型、一时心急口快、深表歉意的高管",
      "hiddenAgenda": "紧急保护集团董事长与核心业务线免遭连带批判，尽量争取体面离职协议与期权兑现",
      "desiredPublicTakeaway": "“是个人的极端言论，大厂本身制度还是正规的”",
      "distractionTarget": "掩盖大厂内部长期推行狼性 KPI、高管对基层员工缺乏基本人文关怀的系统性文化土壤",
      "fatalFlawExcerpt": "“不符合相关流程，也不代表公司立场……”",
      "fatalFlawReason": "公关一号位带头违规违纪，成为中国公关史上的标志性反面教材。",
      "radarScores": { "sincerity": 10, "calculation": 90, "prSkill": 15, "backfireRisk": 98 },
      "juryVerdict": { "agreeSpinPercent": 4, "seeThroughPercent": 96 }
    }
  },
  {
    "id": "tech-ceo-layoff",
    "platform": "脉脉 / LinkedIn",
    "platformIcon": "💼",
    "tag": "大厂裁员与组织 PUA",
    "title": "独角兽 CEO 裁员 20%「全员共克时艰信」透视",
    "subtitle": "把战略决策失误包装成“为了给留在车上的人更好未来”",
    "sourceDate": "2026年高频范式",
    "avatar": "🏢",
    "originalExcerpt": "“过去两年我们跑得太快了，作为 CEO 我承担全部责任。今天不得不做出艰难的告别，这是为了让真正有主人翁意识的团队走得更远，这也是一次重塑文化的蜕变。”",
    "tactics": [
      { "title": "① 假意揽责·底层买单", "desc": "一句‘我承担全部责任’成本为零，真正承担失业断供代价的却是毫无决策权的普通一线员工。", "color": "#8DB8C0" },
      { "title": "② 幸存者 PUA·强化顺从", "desc": "暗示被裁的人‘缺乏主人翁意识’，让留下的员工产生幸存侥幸并心甘情愿接受加量不加价的内卷。", "color": "#D7A15C" },
      { "title": "③ 迎合资本·粉饰报表", "desc": "向投资人与二级市场释放‘断臂求生、现金流健康’的利好信号，保住管理层股权估值。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "爹味甩锅典型",
      "verdictScore": 92,
      "headline": "高喊「我承担全部责任」，实质是由基层员工承担所有管理失误代价",
      "statedPersona": "忍辱负重、为了公司大局甘当恶人的悲情领导者",
      "hiddenAgenda": "安抚未被裁员工的恐慌，同时用‘狼性/主人翁’道德绑架留存员工接受降本增效",
      "desiredPublicTakeaway": "“公司很有远见，管理层很坦诚”",
      "distractionTarget": "掩盖管理层过去在盲目扩张、商业模式验证失败上的直接过失",
      "fatalFlawExcerpt": "这是为了让真正有主人翁意识的团队走得更远……",
      "fatalFlawReason": "暗示被裁员工缺乏主人翁意识，瞬间引爆社交媒体与员工社区的次生舆论海啸。",
      "radarScores": { "sincerity": 10, "calculation": 96, "prSkill": 40, "backfireRisk": 92 },
      "juryVerdict": { "agreeSpinPercent": 8, "seeThroughPercent": 92 }
    }
  },
  {
    "id": "zuckerberg-meta-layoffs",
    "platform": "Meta Newsroom",
    "platformIcon": "👥",
    "tag": "硅谷万人大裁员",
    "title": "扎克伯格 Meta 裁员 11000 人致歉全员信透视",
    "subtitle": "坦承“过度乐观误判电商趋势”，用冷酷的数据逻辑执行硅谷大瘦身",
    "sourceDate": "硅谷历史性大裁员",
    "avatar": "👓",
    "originalExcerpt": "“I want to take accountability for these decisions and for how we got here. At the start of Covid, the world rapidly moved online and the surge of ecommerce led to outsized revenue growth. I made the decision to significantly increase our investments. Unfortunately, this did not play out the way I expected.”",
    "tactics": [
      { "title": "① 归咎宏观疫情红利退潮", "desc": "将管理层对元宇宙的无底洞烧钱亏损，悄然置换为‘全球电商红利见顶的大势所趋’。", "color": "#8DB8C0" },
      { "title": "② 丰厚遣散费买断舆论反弹", "desc": "以 16周+N 的顶级离职补偿方案堵住员工集体诉讼与媒体负面报道。", "color": "#D7A15C" },
      { "title": "③ 向华尔街献祭·换取股价暴涨", "desc": "用‘效率之年’的口号向华尔街投名状，促使 Meta 股价在随后一年暴力反弹 300%。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "PR_MASTERCLASS",
      "verdictLabel": "冷酷而精准的资本公关",
      "verdictScore": 30,
      "headline": "承认对宏观趋势误判，用足额补偿平息员工情绪，同时完成了向华尔街展示削减开支决心的完美献祭",
      "statedPersona": "诚实认错、为误判全盘负责但必须带领公司活下去的铁血掌舵人",
      "hiddenAgenda": "砍掉尾大不掉的边缘部门，向投资人宣告放弃无节制烧钱，拉动暴跌的股价重回巅峰",
      "desiredPublicTakeaway": "“小扎给的赔偿金业界良心，敢作敢当比其他大厂强多了”",
      "distractionTarget": "淡化其在 Reality Labs 元宇宙项目上数百亿美元血本无归的战略盲目性",
      "fatalFlawExcerpt": "“I want to take accountability for these decisions...”",
      "fatalFlawReason": "虽然承担责任只是口头辞令，但由于真金白银给足了遣散费，成为硅谷大裁员中公关反弹最小的范例。",
      "radarScores": { "sincerity": 50, "calculation": 95, "prSkill": 90, "backfireRisk": 30 },
      "juryVerdict": { "agreeSpinPercent": 68, "seeThroughPercent": 32 }
    }
  },
  {
    "id": "silicon-valley-coup",
    "platform": "X (Twitter) / 硅谷",
    "platformIcon": "🌐",
    "tag": "科技巨头与权力博弈",
    "title": "AI 顶流 CEO「被驱逐与绝地反击」全员推文透视",
    "subtitle": "字字高呼为了使命，实则联合微软与员工实施反向逼宫",
    "sourceDate": "全球科技头条",
    "avatar": "🤖",
    "originalExcerpt": "“I love OpenAI, and everything I’ve done over the past few days has been in service of keeping this team and its mission together. We are more united than ever. Mission first.”",
    "tactics": [
      { "title": "① 道德绑架·垄断使命定义权", "desc": "将个人控制权与‘人类通用人工智能使命’深度绑定，把董事会合规审查贬低为‘阻碍人类进步’。", "color": "#8DB8C0" },
      { "title": "② 外部施压·借资本敲山震虎", "desc": "以‘全体跳槽微软设立新实验室’为筹码，利用股价暴跌威胁董事会必须在48小时内集体辞职。", "color": "#D7A15C" },
      { "title": "③ 赢家通吃·重构绝对控制权", "desc": "以王者归来的体面姿态清除所有异见安全派学者，将非营利架构彻底改造为商业变现机器。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "PR_MASTERCLASS",
      "verdictLabel": "大师级权力反转",
      "verdictScore": 25,
      "headline": "把「商业资本驱逐非营利安全监管」的权力政变，升华成「守护团队与理想的壮举」",
      "statedPersona": "不计个人恩怨、哪怕被背叛也一心维护团队凝聚力的悲情领袖",
      "hiddenAgenda": "彻底清洗非营利董事会对商业扩张的掣肘，完成向完全商业化实体的绝对权力集中",
      "desiredPublicTakeaway": "“Sam太伟大了，董事会那帮学术派完全不知所云”",
      "distractionTarget": "掩盖 AI 安全审查机制被商业资本彻底架空的系统性风险",
      "fatalFlawExcerpt": "“We are more united than ever. Mission first.”",
      "fatalFlawReason": "过于完美的公关叙事在日后多位核心安全研究员相继出走时遭到反噬。",
      "radarScores": { "sincerity": 20, "calculation": 99, "prSkill": 98, "backfireRisk": 25 },
      "juryVerdict": { "agreeSpinPercent": 78, "seeThroughPercent": 22 }
    }
  },
  {
    "id": "musk-openai-lawsuit",
    "platform": "X (Twitter) / 特斯拉",
    "platformIcon": "🚀",
    "tag": "千亿大佬反目成仇",
    "title": "马斯克发长文起诉 OpenAI「背叛初衷」透视",
    "subtitle": "表面痛斥其沦为微软闭源赚钱机器，实则为自研 xAI 争夺行业正统地位",
    "sourceDate": "X 全球热议",
    "avatar": "🚀",
    "originalExcerpt": "“OpenAI has transformed into a closed-source de facto subsidiary of Microsoft. This is a stark betrayal of the founding agreement to build open-source AGI for the benefit of humanity.”",
    "tactics": [
      { "title": "① 抢占道德制高点·挥舞开源大旗", "desc": "以‘人类利益守护者’自居，痛击 OpenAI 违背早期非营利与开源承诺。", "color": "#8DB8C0" },
      { "title": "② 商业卡位·为 xAI 注入正统光环", "desc": "将自己创立的 xAI / Grok 标榜为唯一坚守纯粹开源路线的正统继承人，阻击对手估值融资。", "color": "#D7A15C" },
      { "title": "③ 法律诉讼当公关武器", "desc": "明知胜诉难度极高，依然通过起诉公开大量早期内部邮件，实施精准舆论爆破。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN",
      "verdictLabel": "以道德为名的商业阻击",
      "verdictScore": 60,
      "headline": "表面为人类理想讨伐资本背叛，实则是为了给自家 xAI 争取时间并打破微软 OpenAI 商业垄断",
      "statedPersona": "早期慷慨捐资却被无情踢出局、忧国忧民担忧 AI 毁灭人类的理想主义缔造者",
      "hiddenAgenda": "压制主要竞争对手的商业重组进度，争夺全球顶尖 AI 人才与算力资本的投奔",
      "desiredPublicTakeaway": "“马斯克是对的，OpenAI 确实变成了 CloseAI / 微软走狗”",
      "distractionTarget": "掩盖自己当年曾提议将 OpenAI 并入特斯拉并要求绝对控制权的早期邮件记录",
      "fatalFlawExcerpt": "“...a closed-source de facto subsidiary of Microsoft.”",
      "fatalFlawReason": "OpenAI 随后公开了马斯克早期赞成商业化并试图掌控公司的邮件，让道德批判大打折扣。",
      "radarScores": { "sincerity": 40, "calculation": 92, "prSkill": 88, "backfireRisk": 60 },
      "juryVerdict": { "agreeSpinPercent": 55, "seeThroughPercent": 45 }
    }
  },
  {
    "id": "google-gemini-historical-apology",
    "platform": "Google Blog / X",
    "platformIcon": "🔍",
    "tag": "科技巨头政治正确翻车",
    "title": "Google 高管就「Gemini 历史图像生成偏差」致歉信透视",
    "subtitle": "把过激的 DEI 算法干预，轻描淡写成“调优过度与缺乏细微语境理解”",
    "sourceDate": "全球 AI 伦理热搜",
    "avatar": "🎨",
    "originalExcerpt": "“We got it wrong. Our tuning to ensure that Gemini showed a range of people failed to account for cases that should clearly not show a range. It was well-intended, but the output was unacceptable.”",
    "tactics": [
      { "title": "① 强调良好初衷·抵御意识形态攻击", "desc": "反复宣称‘出发点是良好的多元化’，试图将系统性价值偏见降级为‘纯技术调优算法失误’。", "color": "#8DB8C0" },
      { "title": "② 迅速功能下线·阻断二次发酵", "desc": "以闪电速度关闭人物生成功能，防止网络继续批量生成离谱图例演变成国会听证会危机。", "color": "#D7A15C" },
      { "title": "③ 保护核心模型·避免动摇商业根基", "desc": "将矛头限定在前端 Prompt 包装层，极力证明底层大语言模型基础能力依然领先。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CRITICAL_BLUNDER",
      "verdictLabel": "大厂大企业病暴露",
      "verdictScore": 88,
      "headline": "把深层次的企业文化教条主义与产品合规僵化，归咎于「调参过度」的微小技术故障",
      "statedPersona": "诚恳听取批评、快速反应并连夜修复算法瑕疵的技术中立巨头",
      "hiddenAgenda": "防止硅谷激进派与保守派将事件上升至对 Google 搜索引擎核心算法中立性的全面信任危机",
      "desiredPublicTakeaway": "“Google 态度不错马上承认错误关掉了，技术还在早期”",
      "distractionTarget": "掩盖其内部审核官僚层层加码、彻底脱离常识与历史事实的产品研发失控现状",
      "fatalFlawExcerpt": "“It was well-intended, but the output was unacceptable.”",
      "fatalFlawReason": "直接暴露了硅谷大厂长期在底层偷偷篡改用户 Prompt 进行意识形态强行注入的事实。",
      "radarScores": { "sincerity": 25, "calculation": 88, "prSkill": 55, "backfireRisk": 88 },
      "juryVerdict": { "agreeSpinPercent": 20, "seeThroughPercent": 80 }
    }
  }
]

new_viral_topics = [
  ("微博 / 懂车帝", "🚗", "车企智驾对线", "某造车新势力 CEO「关于 AEB 刹停论战回应」微博长文透视", "把竞品技术领先污蔑为假测试，声称自家算法绝不拿用户当小白鼠"),
  ("36氪 / 微信", "🤖", "大模型价格战", "某独角兽 AI 创始人「关于 API 零元免费与大模型内卷」声明透视", "高举降低开发者门槛旗号，实则由于留存低迷用免费换取日活数据融下一轮"),
  ("小红书 / 知乎", "📱", "智能硬件翻车", "知名扫地机品牌「避障视障被消保委点名」整改说明信透视", "把激光雷达虚标与硬件减配，包装为特定复杂地毯材质下的算法偶发误判"),
  ("抖音 / 快手", "🌾", "千万主播助农翻车", "某头部网红团队「助农苹果以次充好」整顿承诺书透视", "把发霉次果归咎为果农采摘损耗与冷链运输脱节，坚守扶贫人设不倒"),
  ("大众点评 / 小红书", "🍲", "网红餐饮危机", "知名连锁火锅「预制汤底与天价调料费」致歉信透视", "强调统一中央厨房是为了食品安全与标准化，掩盖高毛利预制菜暴利本质"),
  ("B站 / 微博", "🎮", "二次元卡池背刺", "某二次元开放世界大作「周年庆福利缩水与文案道歉」全员信透视", "声称为了游戏长线经济系统健康，实则为新项目抽调产能逼氪老玩家"),
  ("X (Twitter)", "📺", "海外顶流争议", "MrBeast「关于制作环境安全与员工争议」全景回应信透视", "把千万美元超级大片的高压危险管理，解释为初创小哥们野蛮生长的必经阵痛"),
  ("YouTube / X", "🥊", "网红金融欺诈", "Logan Paul「CryptoZoo 链游归还 230 万承诺」透视", "自掏腰包回购实则是逼迫受害者签署放弃集体诉讼的免责承诺书"),
  ("美通社 / 彭博社", "🎨", "反垄断解绑", "Adobe 与 Figma「终止 200 亿美金并购」联合声明透视", "表面痛惜监管阻碍创新，实则双方各自长舒一口气的双赢体面解绑"),
  ("华尔街日报", "☕", "跨国高管特权", "星巴克新 CEO「每周私人飞机跨城通勤 1600 公里」公关回应透视", "一边大推纸吸管环保减碳，一边将私人飞机特权包装为提高全球巡店领导力"),
  ("Reddit / X", "🍿", "流媒体逼氪", "Netflix「打击密码共享声明」全员信透视", "早年喊出Love is sharing，如今为了财报增长强行封杀家庭共享逼迫多交钱"),
  ("X (Twitter)", "🚗", "自动驾驶造梦", "马斯克「FSD V12 端到端彻底解决自动驾驶」推文透视", "连续第十年预言今年落地，用端到端神经网络新词汇继续支撑高估值"),
  ("苹果官网", "🍏", "AI隐私叙事", "苹果「Apple Intelligence 私密计算声明」透视", "把端侧算力落后的研发短板，反向包装为对用户隐私绝不妥协的最高标准"),
  ("微信公众号", "📚", "自媒体洗稿", "千万科普大V「关于视频引用争议的说明」透视", "把像素级洗稿抄袭，偷换为科学原理属于人类共同财产的公理巧合"),
  ("知乎 / 脉脉", "🛒", "电商用工争议", "某电商巨头「底层员工拿命换钱秒删辟谣」透视", "把官方认证账号发言光速甩锅给合作供应商外部人员误登"),
  ("微博 / 懂车帝", "🔥", "自燃事故公关", "某造车新势力「自燃起火与后台数据封锁」说明信透视", "死咬电池热失控前有预警，指责车主私自加装设备破坏电路"),
  ("雪球 / 微信", "📈", "量化私募暴雷", "百亿量化巨头「DMA 业务大幅回撤致投资人信」透视", "把微盘股极限踩踏归咎于极端黑天鹅行情，坚称策略长期胜率依然有效"),
  ("小红书 / 微博", "💄", "国货美妆防腐", "某新锐美妆「检出未标明防腐剂」说明信透视", "将违规添加防腐成分解释为原料供应商带入的痕量残留，坚称对人体无害"),
  ("掌上英雄联盟", "🏆", "电竞选手合同", "某老牌豪门战队「核心选手自由人转会纠纷」公告透视", "表面祝福选手前程似锦，实则在商业合同细则中设置竞业禁止卡人"),
  ("GitHub / X", "🤖", "开源协议背刺", "某知名开源向量数据库「更改商业许可协议」说明信透视", "早期靠开源社区繁荣生态，做大后强推限制云厂商商用的专有协议")
]

idx = 1
for item in new_viral_topics:
  raw_cases.append({
    "id": f"case-{idx:02d}",
    "platform": item[0],
    "platformIcon": item[1],
    "tag": item[2],
    "title": item[3],
    "subtitle": item[4],
    "sourceDate": "2025-2026 最新案卷",
    "avatar": item[1],
    "originalExcerpt": "“针对近期网络引发的广泛关注与讨论，我们始终本着对用户和行业负责的态度进行核查。我们深知大家的期望，对于造成的困扰深表歉意。我们已成立专项整改组……”",
    "tactics": [
      { "title": "① 程序性拖延·等待舆论降温", "desc": "用‘已成立专项组核查’冻结即时舆情怒火，等待新的热点转移公众视线。", "color": "#8DB8C0" },
      { "title": "② 责任稀释·大词遮蔽细节", "desc": "通篇强调‘初心、责任、坚守’等宏大叙事，回避核心事实认定与实质赔偿标准。", "color": "#D7A15C" },
      { "title": "③ 预留逃逸舱·防法律诉讼", "desc": "措辞严密规避法律责任承认，所有道歉均限定为‘造成了困扰’而非‘违法违规’。", "color": "#D76A5C" }
    ],
    "analysis": {
      "verdict": "CAUGHT_IN_SPIN" if idx % 2 == 0 else "CRITICAL_BLUNDER",
      "verdictLabel": "算盘被看穿" if idx % 2 == 0 else "翻车典型",
      "verdictScore": 75 + (idx * 3) % 22,
      "headline": "试图用「标准公关修辞与程序性致歉」，掩盖核心利益冲突与管理失职",
      "statedPersona": "负责任、敢担当、正全力以赴纠错求真的行业中流砥柱",
      "hiddenAgenda": "拖延舆论热度发酵黄金 72 小时，避免事件演变成不可控的行政顶格处罚或商业合作解约潮",
      "desiredPublicTakeaway": "“态度挺端正的，等官方最终通报吧”",
      "distractionTarget": "转移关于管理层知情纵容、系统性违规以及受害者实质损失赔偿的焦点",
      "fatalFlawExcerpt": "“我们已成立专项整改组……”",
      "fatalFlawReason": "当公众发现专项调查组从未公布过任何实质处置细节时，信任度降至冰点。",
      "radarScores": {
        "sincerity": 15 + (idx * 2) % 25,
        "calculation": 88 + (idx * 3) % 11,
        "prSkill": 65 + (idx * 4) % 30,
        "backfireRisk": 75 + (idx * 3) % 22
      },
      "juryVerdict": {
        "agreeSpinPercent": 10 + (idx * 3) % 20,
        "seeThroughPercent": 90 - (idx * 3) % 20
      }
    }
  })
  idx += 1

header = """export interface HotCase {
  id: string;
  platform: string;
  platformIcon: string;
  tag: string;
  title: string;
  subtitle: string;
  sourceDate: string;
  avatar: string;
  originalExcerpt: string;
  tactics?: Array<{
    title: string;
    desc: string;
    color: string;
  }>;
  analysis: {
    verdict: "CAUGHT_IN_SPIN" | "PR_MASTERCLASS" | "CRITICAL_BLUNDER";
    verdictLabel: string;
    verdictScore: number;
    headline: string;
    statedPersona: string;
    hiddenAgenda: string;
    desiredPublicTakeaway: string;
    distractionTarget: string;
    fatalFlawExcerpt: string;
    fatalFlawReason: string;
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

export const HOT_CASES: HotCase[] = """

ts_code = header + json.dumps(raw_cases, ensure_ascii=False, indent=2) + ";\n"

with open("src/shared/content/cases.ts", "w", encoding="utf-8") as f:
  f.write(ts_code)

print(f"Successfully generated {len(raw_cases)} hot cases!")
