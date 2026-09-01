# How to Fish — SEO 攻略工具站

**域名**: howtofishthegame.com（精确匹配 .com 被抢光后仍可注的最强品牌域；"the game" 消歧「字面钓鱼」）
**目标游戏**: 《How to Fish》 — Steam App 4001890, Dazed Games, 2026-08-20 上线
**游戏类型**: 物理钓鱼 + 4人联机合作, $7.99, Overwhelmingly Positive (16k+ 评测 / 95%)
**立项日期**: 2026-09-01

## 战略定位（务必牢记）
- **头部词 "how to fish" 不可赢**：被 wikiHow / Take Me Fishing / Bass Pro 等几十年权重的「字面钓鱼教学」站锁死。**只打游戏限定长尾。**
- **付费单机 = 无 codes = 衰减型发布尖峰流量**：不是常青 codes 站，靠 walkthrough/成就/鱼类图鉴/联机指南吃 launch spike。**速度 > 完美**，抢在同行（已一周内抢注 5+ TLD）之前铺内容。
- 内容必须**基于真实游戏数据**，不做空壳薄页（付费单机站尤其如此）。

## 内容架构（待研究 agent 数据回填后定稿）
- `/` 首页 hub — 游戏概览 + 导航到各攻略
- `/fish-list` 全鱼类图鉴（+ 单鱼 programmatic 长尾页 `/fish/[name]`）
- `/achievements` 28 个成就全解锁指南（+ 单成就页可选）
- `/multiplayer` 联机/合作指南（如何和朋友玩、crossplay、人数）
- `/beginner-guide` 上手/操作/如何抛竿/如何卖鱼
- `/best-rod` / `/upgrades` 装备与升级
- `/maps` 地图/钓点/生物群系
- `/faq` 常见问题（时长/价格/是否上主机/配置要求/值不值）

## 技术栈（沿用 Ghost Driver / dispatchgame 模式）
- Next.js 静态导出 或 Astro → Cloudflare Pages
- 变现: Adsterra（728x90 + 300x250），沿用近期项目打法（AdSense 对新游戏站审核慢）
- SEO: FAQ Schema + VideoGame Schema + sitemap + IndexNow

## 关键真相（2026-09-01 研究确认，改了内容写法）
- **不是钓鱼模拟，是物理 FPS**：抓→用武器打死→卖钱→买枪/船→打 Boss→过岛。内容按此写，搜索词仍用 fish。
- **竞争已高**：Game8/IGN 深度 wiki + 6 媒体 + ~15 山寨。**"all 28 achievements" 别正面刚**。赢点：联机 hub（玩家第一需求）、平台/主机/crossplay FAQ、操作键位（全网无）、鱼类库/单鱼页、技术修复。

## 状态
- [x] 域名 howtofishthegame.com 已注册（¥61.02/年）
- [x] 游戏数据 + 长尾词研究（49 生物 / 28 成就带解锁率 / 5 岛，不确定项未采信）
- [x] 竞品分析（.com 计算器护城河、.app 隐私 tracker，共同缺口=鱼类库/成就/操作/FAQ）
- [x] 站点脚手架 + 「深海声呐」主题
- [x] 首批页面：首页 hub + fish-list + achievements + multiplayer + beginner-guide + faq(Schema) + 4 信任页
- [x] `next build` 通过（15 路由全静态）
- [ ] 部署 Cloudflare（用户建站/连域名）
- [ ] Adsterra 广告位（用户建站拿脚本 → 填 ads.tsx）
- [ ] IndexNow 提交 + GSC 收录
- [ ] GA4 接入（layout.tsx 有占位）
