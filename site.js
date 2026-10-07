/**
 * 动物派对数学 (Animal Party Math)
 * 官网控制器与多语言引擎 (Option C: 拟物文具黑板手作风格)
 */

const translations = {
  "zhHans": {
    "langName": "简体中文",
    "appName": "动物派对数学",
    "navHome": "首页",
    "navFeatures": "功能介绍",
    "navSupport": "帮助中心",
    "navPrivacy": "隐私政策",
    "downloadBadgeSmall": "即将上线",
    "downloadBadgeTitle": "App Store",
    "homeHeadline": "每一道算术题，都是一场欢快派对！",
    "homeSubtext": "专为小学 1~6 年级设计的趣味算术练习应用。萌宠伙伴运送数字，答对越多音乐与庆典越嗨。练习可离线，无广告，鼓励适度练习与专注。",
    "cards": [
      {
        "title": "58 项核心口算",
        "desc": "贯通加减乘除、两位数竖式、小数与同分母分数，科学分级循序渐进。",
        "stamp": "58 SKILLS"
      },
      {
        "title": "动态合成视听",
        "desc": "Web Audio 实时合成器乐，答对逐级升温，通关更有盛大铜管号角！",
        "stamp": "WEB AUDIO"
      },
      {
        "title": "离线练习，无广告",
        "desc": "学习记录保存在本机，不上传开发者服务器。购买和恢复购买需要联网。",
        "stamp": "OFFLINE PRACTICE"
      }
    ],
    "featuresTitle": "核心功能与教学设计",
    "featuresDesc": "告别枯燥的机械刷题，通过科学的进阶体系与即时正向反馈激发孩子的数学自驱力。",
    "features": [
      {
        "num": "1",
        "title": "1~6 年级 58 项口算大纲",
        "desc": "覆盖 10 的分解合成、两位数竖式、乘法九九乘法表、多位数乘除、小数与分数混合计算。提供「适合水平」初始测评与分支技能树，精准定位起跑线。"
      },
      {
        "num": "2",
        "title": "Web Audio 动态合成器乐",
        "desc": "不依赖任何死板录音文件，基于浏览器纯数字合成。每答对一题配器逐步丰满，通关时高亢铜管号角（Fanfare）齐鸣；答错不打断节奏，消除挫败感。"
      },
      {
        "num": "3",
        "title": "四大独创萌宠伙伴系统",
        "desc": "小青蛙（呱宝）、波波象（波波）、秋田犬（柴小呆）、小白兔（朵朵兔）。各自拥有专属个性配色、纸质肌理与粒子特效，陪伴运算每一步。"
      },
      {
        "num": "4",
        "title": "绿色防沉迷体力与成就",
        "desc": "每日赠送与每小时自然恢复体力，水平测评与错题复习完全免扣体力；支持一次性买断永久免扣；内置每日打卡与 300+ 专属成就奖杯。"
      }
    ],
    "supportTitle": "帮助中心与技术支持",
    "supportDesc": "常见使用说明、体力规则与开发者官方直接支持通道。",
    "supportContactTitle": "需要进一步协助？",
    "supportContactDesc": "如果您在使用过程中遇到任何疑问、应用异常或建议，欢迎随时给我们发送邮件，通常会在 24~48 小时内为您回复。",
    "supportFaqs": [
      {
        "q": "体力（血量）是如何计算与补充的？",
        "a": "所有年级的练习均可免费使用。免费血量上限为 10 点，每日首次打开补充 5 点（不超过上限），每小时恢复 1 点。每道题首次答错扣 1 点；实力测评和错题复习不扣血。满血瓶和永久免扣血买断属于可选内购，可在「设置 → 血量与补血瓶」查看。"
      },
      {
        "q": "更换手机或 iPad 后如何恢复买断？",
        "a": "购买过永久免扣血后，请在新设备上使用原购买 Apple 账户登录 App Store，再打开「设置 → 血量与补血瓶 → 恢复永久购买」，联网恢复已购买的权益，不会重复收费。消耗型满血瓶余额保存在原设备，无法通过此按钮恢复；学习记录也不会自动同步到新设备。"
      },
      {
        "q": "为什么在网页端或手机上听不到声音？",
        "a": "现代移动浏览器出于防骚扰策略，要求用户必须与屏幕产生第一次点击或按键互动后，才能激活 Web Audio 音频上下文。请点击屏幕任意位置，并检查手机侧面静音开关。"
      },
      {
        "q": "答错后会发生什么？",
        "a": "每道题首次答错会扣 1 点血量，实力测评和错题复习除外。音乐不会因答错中断；血量归零仍可完成当前轮。错题会进入免费复习列表，复习不扣血。"
      },
      {
        "q": "如何删除学习记录？",
        "a": "在「设置 → 重置学习数据」中确认重置，会删除学习记录、设置与免费奖励，并保留本机付费血量和永久购买。卸载可能移除本机数据，消耗型余额无法通过恢复永久购买找回。"
      }
    ],
    "privacyTitle": "动物派对数学隐私政策",
    "privacyDesc": "本政策适用于「动物派对数学」iOS 应用。开发者为本应用 App Store 产品页列示的提供者。我们只使用实现数学练习和应用内购买所需的数据。",
    "privacySections": [
      {
        "title": "学习与设置数据",
        "content": "学习进度、答题结果、错题、打卡、奖杯、免费血量、奖励和语言、声音等设置保存在本机，用于继续练习和展示进度。当前 iOS 应用不会把这些记录上传到开发者服务器，也没有开发者账户或跨设备学习同步服务。数学练习可离线进行；获取商品、购买和恢复购买需要连接 Apple 的服务。"
      },
      {
        "title": "应用内购买",
        "content": "购买与恢复由 Apple App Store 处理。应用通过 Apple StoreKit 获取商品信息和已验证的交易、购买权益，并在本机保存交易标识、付费血量余额与使用记录，以避免重复发放和扣除。开发者不会通过本应用获取你的 Apple ID 密码、银行卡或支付卡信息。Apple 对付款、交易与相关数据的处理适用 Apple 的隐私政策。"
      },
      {
        "title": "广告、追踪与诊断",
        "content": "当前 iOS 应用不包含广告、跨应用追踪或第三方分析 SDK，不请求通讯录、照片、麦克风或位置权限。应用中的错误诊断不会发送到开发者服务器。Apple 的商店、系统诊断和备份服务可能按照你的系统设置处理数据。"
      },
      {
        "title": "保存与删除",
        "content": "本机记录会保留到你重置或移除相关应用数据。可在「设置」中选择「重置学习数据」，删除学习记录、设置和免费奖励；此操作保留本机付费血量与永久购买。卸载应用可能移除本机记录，消耗型补血余额不支持通过「恢复永久购买」找回。永久免扣血权益可使用原购买 Apple 账户恢复。Apple 保存的交易记录由 Apple 管理，不会因重置或卸载而删除。系统备份是否保留数据取决于你的 iOS 和 iCloud 设置。"
      },
      {
        "title": "儿童与隐私",
        "content": "本应用可用于数学学习，不要求提供姓名、年龄或联系方式。当前 iOS 应用不会向开发者上传儿童的学习记录，也不使用行为广告或广告追踪。"
      },
      {
        "title": "联系与政策更新",
        "content": "如需咨询隐私或数据删除，请联系 diowang@gmail.com。你主动提供的咨询内容仅用于处理请求，请只提供处理问题所需的信息；可通过同一邮箱请求删除你主动提供的支持资料。功能或数据处理方式发生变化时，我们会更新本政策和日期。"
      },
      {
        "title": "帮助网站与邮件支持",
        "content": "本帮助网站由 GitHub Pages 托管；GitHub 会为安全目的记录访问者的 IP 地址，其处理适用 GitHub 隐私声明。网站不嵌入广告或分析 SDK，只在浏览器本地保存所选语言，可通过清除本站网站数据移除。联系支持时由你的邮件服务发送邮件；如需删除主动提供的支持资料，请联系 diowang@gmail.com。"
      },
      {
        "title": "开源声明与独立品牌说明",
        "content": "本应用基础代码基于 MIT 许可进行独立修改开发，与上游无官方品牌隶属关系。本项目独创角色（呱宝、波波、柴小呆、朵朵兔）、视觉资产与商标受版权保护。字体遵循 SIL Open Font License 1.1。"
      }
    ],
    "footerCopyright": "© 2026 动物派对数学 (Animal Party Math). 保留所有权利。",
    "footerBadge": "离线练习 · 无广告",
    "navLabel": "网站导航",
    "languageLabel": "切换语言",
    "termsLabel": "使用条款",
    "releaseLabel": "App Store · 即将上线",
    "githubPrivacy": "GitHub 隐私声明",
    "privacyUpdated": "更新日期：2026 年 10 月 7 日",
    "applePrivacy": "Apple 隐私政策"
  },
  "ja": {
    "langName": "日本語",
    "appName": "アニマルパーティー さんすう",
    "navHome": "ホーム",
    "navFeatures": "機能紹介",
    "navSupport": "サポート",
    "navPrivacy": "プライバシー",
    "downloadBadgeSmall": "公開準備中",
    "downloadBadgeTitle": "App Store",
    "homeHeadline": "1問とくたび、どんどん盛り上がる！",
    "homeSubtext": "小学校1〜6年生向けの楽しい計算練習アプリ。動物たちが数字を運び、正解するほど音楽とお祭り演出が盛り上がります。練習はオフラインで利用でき、広告はありません。購入と復元にはインターネット接続が必要です。",
    "cards": [
      {
        "title": "58の計算スキル",
        "desc": "小学1〜6年のたし算・ひき算・筆算・九九・小数・分数をスモールステップで網羅。",
        "stamp": "58 SKILLS"
      },
      {
        "title": "リアルタイム音楽フェス",
        "desc": "Web Audio合成によるダイナミックな演奏。正解ごとに音が増え最後はファンファーレ！",
        "stamp": "WEB AUDIO"
      },
      {
        "title": "オフライン練習・広告なし",
        "desc": "学習記録は端末内に保存され、開発者のサーバーには送信されません。購入と復元にはインターネット接続が必要です。",
        "stamp": "OFFLINE PRACTICE"
      }
    ],
    "featuresTitle": "主な機能とカリキュラム",
    "featuresDesc": "退屈な計算ドリルから、自ら進めたくなる冒険へ。学習指導要領に基づく科学的なステップアップ。",
    "features": [
      {
        "num": "1",
        "title": "小学1〜6年 58スキルカリキュラム",
        "desc": "10の分解、2桁・3桁の筆算、九九、小数・分数の四則演算、文字の値まで完全対応。「じぶんレベル診断」でぴったりな難易度からスタートできます。"
      },
      {
        "num": "2",
        "title": "Web Audio 合成サウンドシステム",
        "desc": "固定の音声ファイルを使わずブラウザ内でリアルタイム合成。1問ごとに音と光が盛り上がり、最後は高らかなファンファーレが鳴り響きます。間違えても演奏は止まりません。"
      },
      {
        "num": "3",
        "title": "4体の公式マスコットパートナー",
        "desc": "カエル（ケロちゃん）、こぞう（ボビ）、あきたいぬ（チャイ）、しろウサギ（ドド）。パートナーごとに専用のテーマカラー、紙面テクスチャ、固有パーティクルが連動します。"
      },
      {
        "num": "4",
        "title": "適度な体力設計と300個のトロフィー",
        "desc": "毎日のログインボーナスと1時間ごとの自然回復でやりすぎを予防。実力チェックや復習は体力消費ゼロ。買い切り永久無制限や300個以上のトロフィーも搭載。"
      }
    ],
    "supportTitle": "サポート＆ヘルプセンター",
    "supportDesc": "使い方のご案内、ハート（体力）の仕組み、開発者サポート窓口。",
    "supportContactTitle": "お問い合わせ・ご要望",
    "supportContactDesc": "不具合のご報告や機能のご要望などがございましたら、お気軽にメールにてご連絡ください。通常24〜48時間以内にご返答いたします。",
    "supportFaqs": [
      {
        "q": "ハート（体力）の回復と仕組みについて",
        "a": "すべての学年の練習を無料で利用できます。無料ハートの上限は10個です。毎日の初回起動で上限まで5個追加され、1時間に1個回復します。各問題の最初の間違いで1個消費しますが、実力診断と復習は消費しません。全回復ボトルと永久にハートが減らない買い切りは任意のアプリ内購入で、「せってい → ハートと回復ボトル」で確認できます。"
      },
      {
        "q": "端末を変更した際、購入状態を復元できますか？",
        "a": "永久にハートが減らない商品を購入済みの場合、購入時のAppleアカウントでApp Storeにログインし、「せってい → ハートと回復ボトル → 永久購入を復元」を開いてください。インターネット接続により追加料金なしで購入権利を復元できます。消耗型ボトルの残高は元の端末に保存され、このボタンでは復元できません。学習記録も新しい端末に自動同期されません。"
      },
      {
        "q": "ブラウザで音が鳴らない場合は？",
        "a": "SafariやChromeなどのブラウザでは、自動再生防止のため画面をクリックまたはタップするまで音声がミュートされる仕様になっています。画面の任意の場所を一度タップするか、端末の消音モードをご確認ください。"
      },
      {
        "q": "間違えるとどうなりますか？",
        "a": "実力診断と復習を除き、各問題の最初の間違いでハートを1個消費します。音楽は途切れず、ハートが0になっても現在の問題セットを最後まで続けられます。間違えた問題は無料の復習リストに入り、復習ではハートを消費しません。"
      },
      {
        "q": "学習記録を削除するには？",
        "a": "「せってい → 学習データをリセット」で確認すると、学習記録、設定と無料報酬を削除し、端末内の購入したハートと永久購入を保持します。アンインストールすると端末内のデータが失われる場合があり、消耗型の残高は永久購入の復元では戻りません。"
      }
    ],
    "privacyTitle": "動物パーティー算数 プライバシーポリシー",
    "privacyDesc": "本ポリシーは「動物パーティー算数」iOSアプリに適用されます。開発者は本アプリのApp Store製品ページに記載された提供者です。算数練習とアプリ内購入に必要なデータのみを使用します。",
    "privacySections": [
      {
        "title": "学習記録と設定",
        "content": "進捗、解答、間違えた問題、チェックイン、トロフィー、無料ハート、報酬、言語や音声などの設定は端末内に保存され、練習の継続と進捗の表示に使用されます。現在のiOSアプリはこれらを開発者のサーバーに送信しません。開発者アカウントや端末間の学習同期サービスはありません。算数練習はオフラインで利用できますが、商品情報の取得、購入と復元にはAppleのサービスへの接続が必要です。"
      },
      {
        "title": "アプリ内購入",
        "content": "購入と復元はApple App Storeが処理します。アプリはApple StoreKitから商品情報、検証済みの取引と購入権利を取得します。重複した付与や消費を防ぐため、取引識別子、購入したハートの残高と使用記録を端末内に保存します。開発者は本アプリを通じてApple IDのパスワード、銀行口座や支払いカード情報を取得しません。Appleによる支払い、取引と関連データの処理にはAppleのプライバシーポリシーが適用されます。"
      },
      {
        "title": "広告・追跡・診断",
        "content": "現在のiOSアプリには広告、アプリ間の追跡、第三者の分析SDKはありません。連絡先、写真、マイクや位置情報へのアクセスを要求しません。アプリのエラー診断を開発者のサーバーに送信しません。Appleのストア、システム診断やバックアップはシステム設定に従ってデータを処理する場合があります。"
      },
      {
        "title": "保存と削除",
        "content": "端末内の記録は関連するアプリデータをリセットまたは削除するまで保存されます。設定の「学習データをリセット」で学習記録、設定と無料報酬を削除できます。端末内の購入したハートと永久購入は保持されます。アンインストールすると端末内の記録が失われる場合があり、消耗型ハートの残高は「永久購入を復元」では復元できません。ハートが永久に減らない権利は購入時のAppleアカウントで復元できます。Appleの取引記録はAppleが管理し、リセットやアンインストールでは削除されません。システムバックアップでの保存はiOSとiCloudの設定によります。"
      },
      {
        "title": "子どもとプライバシー",
        "content": "氏名、年齢や連絡先を提供せずに算数を学習できます。現在のiOSアプリは子どもの学習記録を開発者に送信せず、行動ターゲティング広告や広告追跡を使用しません。"
      },
      {
        "title": "お問い合わせと変更",
        "content": "プライバシーやデータ削除についてはdiowang@gmail.comへお問い合わせください。自発的に送信したお問い合わせ内容は回答のためにのみ使用されます。問題の解決に必要な情報のみを提供してください。同じメールアドレスで、ご自身が提供したサポート情報の削除を依頼できます。機能やデータの取り扱いが変わる場合は本ポリシーと更新日を変更します。"
      },
      {
        "title": "サポートサイトとメール",
        "content": "本サポートサイトはGitHub Pagesで公開されています。GitHubはセキュリティ目的で訪問者のIPアドレスを記録し、同社のプライバシー声明に従って処理します。サイトには広告や分析SDKはなく、選択した言語のみブラウザ内に保存します。このサイトのデータを消去すると削除できます。お問い合わせメールはご利用のメールサービスから送信されます。自発的に提供したサポート情報の削除についてはdiowang@gmail.comへお問い合わせください。"
      },
      {
        "title": "オープンソースと独立ブランドについて",
        "content": "本アプリはMITライセンスのコードを元に独自開発された独立製品です。独創マスコットキャラクター、ビジュアルおよび商標は著作権により保護されています。フォントはSIL Open Font License 1.1です。"
      }
    ],
    "footerCopyright": "© 2026 アニマルパーティー さんすう (Animal Party Math). All rights reserved.",
    "footerBadge": "オフライン練習 · 広告なし",
    "navLabel": "サイトナビゲーション",
    "languageLabel": "言語を選択",
    "termsLabel": "利用規約",
    "releaseLabel": "App Store · 公開準備中",
    "githubPrivacy": "GitHubのプライバシー声明",
    "privacyUpdated": "更新日：2026年10月7日",
    "applePrivacy": "Appleのプライバシーポリシー"
  },
  "en": {
    "langName": "English",
    "appName": "Animal Party Math",
    "navHome": "Home",
    "navFeatures": "Features",
    "navSupport": "Support",
    "navPrivacy": "Privacy",
    "downloadBadgeSmall": "Coming soon",
    "downloadBadgeTitle": "App Store",
    "homeHeadline": "Every Math Problem Is a Joyful Party!",
    "homeSubtext": "A fun calculation practice app for elementary Grades 1–6. Animal companions carry your answers as music and celebrations build with each correct answer. Practice works offline without ads; purchases and restoration require internet access.",
    "cards": [
      {
        "title": "58 Aligned Skills",
        "desc": "Master column arithmetic, times tables, decimals, and like-denominator fractions step-by-step.",
        "stamp": "58 SKILLS"
      },
      {
        "title": "Dynamic Audio Festivities",
        "desc": "Web Audio synthesizes harmonic layers with each right answer, building up into a victory fanfare!",
        "stamp": "WEB AUDIO"
      },
      {
        "title": "Offline practice, no ads",
        "desc": "Learning records stay on your device and are not uploaded to a developer server. Purchases and restoration require internet access.",
        "stamp": "OFFLINE PRACTICE"
      }
    ],
    "featuresTitle": "Core Features & Curriculum",
    "featuresDesc": "Say goodbye to boring worksheets and spark intrinsic math motivation through positive feedback.",
    "features": [
      {
        "num": "1",
        "title": "Grades 1–6 Curriculum (58 Skills)",
        "desc": "Comprehensive coverage of number bonds, 2-digit column arithmetic, times tables, decimals, fractions, and introductory algebra. Placement diagnostic quickly finds your child's sweet spot."
      },
      {
        "num": "2",
        "title": "Web Audio Real-Time Synthesis",
        "desc": "Generates sound purely in the browser without static audio files. Beats build up with every correct answer into a celebratory brass fanfare. Mistakes never harshly interrupt the rhythm."
      },
      {
        "num": "3",
        "title": "4 Lovable Mascot Companions",
        "desc": "Froggy (Frog), Bobi (Elephant), Chai (Shiba Dog), and Dodo (Bunny). Each companion features custom color themes, textured paper effects, and celebration particles."
      },
      {
        "num": "4",
        "title": "Mindful Stamina & 300+ Trophies",
        "desc": "Daily bonus hearts and hourly recovery prevent excessive screen fatigue. Placement tests and mistake reviews cost zero stamina. Includes 300+ collectible trophies."
      }
    ],
    "supportTitle": "Support & Help Center",
    "supportDesc": "Find common answers, stamina rules, and developer support.",
    "supportContactTitle": "Need Further Assistance?",
    "supportContactDesc": "If you have questions, feedback, or encounter any issues, feel free to email us. We usually respond within 24 to 48 hours.",
    "supportFaqs": [
      {
        "q": "How does the Heart (Stamina) system work?",
        "a": "Practice in every grade is available for free. Free hearts are capped at 10. Your first visit each day adds 5 hearts up to the cap, and 1 heart recovers each hour. The first mistake on each problem costs 1 heart; placement and mistake review cost none. Full-heart refills and permanent unlimited hearts are optional in-app purchases under “Settings → Hearts & refills”."
      },
      {
        "q": "How do I restore my purchase on a new device?",
        "a": "If you purchased permanent unlimited hearts, sign into the App Store with the Apple account used for the purchase. Open “Settings → Hearts & refills → Restore permanent purchase” and connect to the internet to restore the entitlement without another charge. Consumable refill balances stay on the original device and cannot be recovered through this button. Learning records do not automatically sync to a new device."
      },
      {
        "q": "Why is there no audio in the browser?",
        "a": "Modern browsers require an initial user tap or key interaction before Web Audio can start. Simply tap anywhere on the screen and ensure device mute is turned off."
      },
      {
        "q": "What happens after an incorrect answer?",
        "a": "The first mistake on each problem costs 1 heart, except during placement and mistake review. Music keeps playing, and you can finish the current round even at zero hearts. Mistakes enter your free review list; review costs no hearts."
      },
      {
        "q": "How do I delete learning records?",
        "a": "Confirm “Settings → Reset learning data” to delete learning records, preferences and free rewards while keeping locally stored paid hearts and permanent purchases. Uninstalling may remove local data; consumable balances cannot be recovered through Restore permanent purchase."
      }
    ],
    "privacyTitle": "Animal Party Math Privacy Policy",
    "privacyDesc": "This policy applies to the Animal Party Math iOS app. The developer is the provider listed on its App Store product page. We use only the data needed for math practice and in-app purchases.",
    "privacySections": [
      {
        "title": "Learning and settings",
        "content": "Progress, answers, practice mistakes, check-ins, trophies, free hearts, rewards and preferences such as language and sound are stored on your device to continue practice and display progress. The current iOS app does not upload these records to a developer server. There is no developer account or cross-device learning sync service. Math practice works offline; product loading, purchases and restoration use Apple’s online services."
      },
      {
        "title": "In-app purchases",
        "content": "Apple App Store processes purchases and restoration. The app uses Apple StoreKit to obtain product information, verified transactions and purchase entitlements. Transaction identifiers, paid heart balances and usage records are stored locally to prevent duplicate credits and deductions. The developer does not receive your Apple ID password, bank account or payment card details through this app. Apple processes payments, transactions and related data under its privacy policy."
      },
      {
        "title": "Advertising, tracking and diagnostics",
        "content": "The current iOS app has no advertising, cross-app tracking or third-party analytics SDKs. It does not request access to contacts, photos, microphone or location. App error diagnostics are not sent to a developer server. Apple store, system diagnostics and backup services may process data according to your system settings."
      },
      {
        "title": "Retention and deletion",
        "content": "Local records remain until you reset or remove the relevant app data. Choose “Reset learning data” in Settings to delete learning records, preferences and free rewards. This keeps locally stored paid hearts and permanent purchases. Uninstalling may remove local records; consumable heart balances cannot be recovered through “Restore lifetime purchase”. Permanent unlimited hearts can be restored using the Apple account that made the purchase. Apple manages its transaction records; resetting or uninstalling the app does not delete those records. Your iOS and iCloud settings determine whether system backups retain data."
      },
      {
        "title": "Children and privacy",
        "content": "The app can be used for math learning without providing a name, age or contact details. The current iOS app does not upload children’s learning records to the developer and does not use behavioral advertising or advertising tracking."
      },
      {
        "title": "Contact and changes",
        "content": "For privacy or data deletion questions, contact diowang@gmail.com. Information you voluntarily send in a support request is used only to respond to that request; provide only what is needed to resolve it. You may request deletion of support information you provided by emailing the same address. We will update this policy and its date when features or data practices change."
      },
      {
        "title": "Support website and email",
        "content": "This support website is hosted by GitHub Pages. GitHub logs visitors’ IP addresses for security purposes under its privacy statement. This website has no advertising or analytics SDKs and stores only your language choice in your browser; clear this site’s website data to remove it. Your email service sends messages when you contact support. To request deletion of support information you provided, contact diowang@gmail.com."
      },
      {
        "title": "Open Source & Independent Brand Notice",
        "content": "This independent product modifies MIT-licensed base code. Original mascot characters, brand visuals, and icons are proprietary and protected by copyright. Fonts are licensed under SIL Open Font License 1.1."
      }
    ],
    "footerCopyright": "© 2026 Animal Party Math. All rights reserved.",
    "footerBadge": "Offline practice · No ads",
    "navLabel": "Website navigation",
    "languageLabel": "Choose language",
    "termsLabel": "Terms of Use",
    "releaseLabel": "App Store · Coming soon",
    "githubPrivacy": "GitHub Privacy Statement",
    "privacyUpdated": "Updated: October 7, 2026",
    "applePrivacy": "Apple Privacy Policy"
  }
};

const CHALKBOARD_FORMULAS = [
  "7 + 8 = 15",
  "6 × 7 = 42",
  "16 - 9 = 7",
  "45 ÷ 5 = 9",
  "9 × 8 = 72",
  "28 + 35 = 63",
  "54 ÷ 6 = 9"
];

// Web Audio synthesizer for tactile clicks and chimes
class WebAudioSynth {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }
  playChalk() {
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch (_) {}
  }
}

const synth = new WebAudioSynth();

// Application State
let currentLang = "zhHans";
let currentView = "home";
let formulaIdx = 0;

function getInitialLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && translations[urlLang]) return urlLang;

  let stored;
  try { stored = localStorage.getItem("animalparty-math-lang"); } catch (_) { /* Private mode can disable storage. */ }
  if (stored && translations[stored]) return stored;

  const browserLangs = navigator.languages || [navigator.language || "zh"];
  for (const bl of browserLangs) {
    const l = bl.toLowerCase();
    if (l.startsWith("ja")) return "ja";
    if (l.startsWith("en")) return "en";
    if (l.startsWith("zh")) return "zhHans";
  }
  return "zhHans";
}

function getInitialView() {
  const urlView = new URLSearchParams(window.location.search).get("view");
  if (urlView && ["home", "features", "support", "privacy"].includes(urlView)) {
    return urlView;
  }
  if (document.body && document.body.dataset.initialView) {
    return document.body.dataset.initialView;
  }
  return "home";
}

function updateUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("view", currentView);
  url.searchParams.set("lang", currentLang);
  window.history.replaceState({}, "", url);
}

function setView(view) {
  if (!["home", "features", "support", "privacy"].includes(view)) return;
  currentView = view;
  updateUrl();

  // Update nav tabs
  document.querySelectorAll(".board-nav-item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === currentView);
  });

  // Update view panels
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `view-${currentView}`);
  });
}

function render() {
  const copy = translations[currentLang] || translations.zhHans;
  document.documentElement.lang = currentLang === "zhHans" ? "zh-Hans" : (currentLang === "ja" ? "ja" : "en");

  // Nav Items
  document.querySelectorAll("[data-nav-item]").forEach((el) => {
    const key = el.dataset.navItem;
    if (copy[key]) el.textContent = copy[key];
  });

  document.querySelector(".board-nav-pill-group")?.setAttribute("aria-label", copy.navLabel);
  document.querySelector("#langSelect")?.setAttribute("aria-label", copy.languageLabel);
  const release = document.querySelector("#releaseStatus");
  if (release) {
    release.setAttribute("aria-label", copy.releaseLabel);
    release.querySelector("small").textContent = copy.downloadBadgeSmall;
  }

  document.querySelector(".footer-legal-links")?.setAttribute("aria-label", copy.navLabel);

  // App Title
  document.title = `${copy.appName} — ${copy.homeHeadline}`;

  // Home View
  const homeHeadlineEl = document.querySelector("#homeHeadline");
  if (homeHeadlineEl) homeHeadlineEl.textContent = copy.homeHeadline;
  const homeSubtextEl = document.querySelector("#homeSubtext");
  if (homeSubtextEl) homeSubtextEl.textContent = copy.homeSubtext;

  // Home 3 Stamp Cards
  const cardsContainer = document.querySelector("#homeStampCards");
  if (cardsContainer && copy.cards) {
    cardsContainer.innerHTML = copy.cards.map((c) => `
      <div class="stamp-card">
        <div>
          <h3 class="stamp-card-title">${c.title}</h3>
          <p class="stamp-card-desc">${c.desc}</p>
        </div>
        <div class="stamp-badge-wrap">
          <span class="stamp-badge">${c.stamp}</span>
        </div>
      </div>
    `).join("");
  }

  // Features View
  const featTitleEl = document.querySelector("#featuresTitle");
  if (featTitleEl) featTitleEl.textContent = copy.featuresTitle;
  const featDescEl = document.querySelector("#featuresDesc");
  if (featDescEl) featDescEl.textContent = copy.featuresDesc;

  const featGridEl = document.querySelector("#featuresGrid");
  if (featGridEl && copy.features) {
    featGridEl.innerHTML = copy.features.map((f) => `
      <div class="feature-stamped-item">
        <div class="feature-stamped-header">
          <span class="feature-number-badge">${f.num}</span>
          <h3 class="feature-stamped-title">${f.title}</h3>
        </div>
        <p class="feature-stamped-desc">${f.desc}</p>
      </div>
    `).join("");
  }

  // Support View
  const suppTitleEl = document.querySelector("#supportTitle");
  if (suppTitleEl) suppTitleEl.textContent = copy.supportTitle;
  const suppDescEl = document.querySelector("#supportDesc");
  if (suppDescEl) suppDescEl.textContent = copy.supportDesc;
  const suppContactTitleEl = document.querySelector("#supportContactTitle");
  if (suppContactTitleEl) suppContactTitleEl.textContent = copy.supportContactTitle;
  const suppContactDescEl = document.querySelector("#supportContactDesc");
  if (suppContactDescEl) suppContactDescEl.textContent = copy.supportContactDesc;

  const faqContainer = document.querySelector("#supportFaqList");
  if (faqContainer && copy.supportFaqs) {
    faqContainer.innerHTML = copy.supportFaqs.map((faq, idx) => `
      <div class="faq-paper-item" data-faq-idx="${idx}">
        <button type="button" class="faq-paper-question" aria-expanded="false" aria-controls="faq-answer-${idx}">
          <span>${faq.q}</span>
          <span class="faq-toggle-sym" aria-hidden="true">+</span>
        </button>
        <div class="faq-paper-answer" id="faq-answer-${idx}" hidden>
          <p>${faq.a}</p>
        </div>
      </div>
    `).join("");

    faqContainer.querySelectorAll(".faq-paper-item").forEach((item) => {
      const q = item.querySelector(".faq-paper-question");
      const a = item.querySelector(".faq-paper-answer");
      const sym = item.querySelector(".faq-toggle-sym");
      q.addEventListener("click", () => {
        synth.playChalk();
        const isOpen = !a.hidden;
        a.hidden = isOpen;
        q.setAttribute("aria-expanded", String(!isOpen));
        sym.textContent = isOpen ? "+" : "−";
      });
    });
  }

  // Privacy View
  const privTitleEl = document.querySelector("#privacyTitle");
  if (privTitleEl) privTitleEl.textContent = copy.privacyTitle;
  const privDescEl = document.querySelector("#privacyDesc");
  if (privDescEl) privDescEl.textContent = copy.privacyDesc;

  const privContainer = document.querySelector("#privacySectionsList");
  if (privContainer && copy.privacySections) {
    privContainer.innerHTML = copy.privacySections.map((sec, idx) => `
      <article class="privacy-paper-card">
        <div class="privacy-card-header">
          <span class="privacy-card-idx">${String(idx + 1).padStart(2, "0")}</span>
          <h3>${sec.title}</h3>
        </div>
        <p>${sec.content}</p>
      </article>
    `).join("");
  }

  const updated = document.querySelector("#privacyUpdated");
  if (updated) updated.textContent = copy.privacyUpdated;
  const applePrivacy = document.querySelector("#applePrivacyLink");
  if (applePrivacy) applePrivacy.textContent = copy.applePrivacy;
  const githubPrivacy = document.querySelector("#githubPrivacyLink");
  if (githubPrivacy) githubPrivacy.textContent = copy.githubPrivacy;

  // Footer
  const footerCopyEl = document.querySelector("#footerCopyright");
  if (footerCopyEl) footerCopyEl.textContent = copy.footerCopyright;
  const footerBadgeEl = document.querySelector("#footerBadge");
  if (footerBadgeEl) footerBadgeEl.textContent = copy.footerBadge;
  const privacyLink = document.querySelector("#footerPrivacy");
  if (privacyLink) { privacyLink.textContent = copy.navPrivacy; privacyLink.href = `privacy.html?lang=${currentLang}`; }
  const supportLink = document.querySelector("#footerSupport");
  if (supportLink) { supportLink.textContent = copy.navSupport; supportLink.href = `support.html?lang=${currentLang}`; }
  const termsLink = document.querySelector("#footerTerms");
  if (termsLink) termsLink.textContent = copy.termsLabel;
}

function initChalkboard() {
  const board = document.querySelector("#chalkboard");
  const formulaEl = document.querySelector("#chalkFormula");
  if (!board || !formulaEl) return;

  board.addEventListener("click", () => {
    synth.playChalk();
    formulaIdx = (formulaIdx + 1) % CHALKBOARD_FORMULAS.length;
    formulaEl.textContent = CHALKBOARD_FORMULAS[formulaIdx];
  });

  // Mascot sticker clicks play a cute sound too
  document.querySelectorAll(".mascot-sticker").forEach((s) => {
    s.addEventListener("click", () => {
      synth.playChalk();
    });
  });
}

function initLanguageSelect() {
  const select = document.querySelector("#langSelect");
  if (!select) return;

  select.value = currentLang;
  select.addEventListener("change", () => {
    synth.playChalk();
    currentLang = select.value;
    try { localStorage.setItem("animalparty-math-lang", currentLang); } catch (_) { /* Language switching still works. */ }
    updateUrl();
    render();
  });
}

function initNavButtons() {
  document.querySelectorAll(".board-nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      synth.playChalk();
      setView(btn.dataset.view);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  currentLang = getInitialLanguage();
  currentView = getInitialView();

  initLanguageSelect();
  initNavButtons();
  initChalkboard();

  setView(currentView);
  render();
});
