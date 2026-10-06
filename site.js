/**
 * 动物派对数学 (Animal Party Math)
 * 官网控制器与多语言引擎 (Option C: 拟物文具黑板手作风格)
 */

const translations = {
  zhHans: {
    langName: "简体中文",
    appName: "动物派对数学",
    navHome: "首页",
    navFeatures: "功能介绍",
    navSupport: "帮助中心",
    navPrivacy: "隐私政策",
    downloadBadgeSmall: "Download on the",
    downloadBadgeTitle: "App Store",

    // Home
    homeHeadline: "每一道算术题，都是一场欢快派对！",
    homeSubtext: "专为小学 1~6 年级设计的趣味算术练习应用。萌宠伙伴运送数字，答对越多音乐与庆典越嗨。纯单机无广告，保护视力与专注。",
    cards: [
      {
        title: "58 项核心口算",
        desc: "贯通加减乘除、两位数竖式、小数与同分母分数，科学分级循序渐进。",
        stamp: "58 SKILLS"
      },
      {
        title: "动态合成视听",
        desc: "Web Audio 实时合成器乐，答对逐级升温，通关更有盛大铜管号角！",
        stamp: "WEB AUDIO"
      },
      {
        title: "纯单机零广告",
        desc: "零数据收集与追踪，体力恢复机制鼓励短频高效练习，守护孩子视力。",
        stamp: "100% OFFLINE"
      }
    ],

    // Features
    featuresTitle: "核心功能与教学设计",
    featuresDesc: "告别枯燥的机械刷题，通过科学的进阶体系与即时正向反馈激发孩子的数学自驱力。",
    features: [
      {
        num: "1",
        title: "1~6 年级 58 项口算大纲",
        desc: "覆盖 10 的分解合成、两位数竖式、乘法九九乘法表、多位数乘除、小数与分数混合计算。提供「适合水平」初始测评与分支技能树，精准定位起跑线。"
      },
      {
        num: "2",
        title: "Web Audio 动态合成器乐",
        desc: "不依赖任何死板录音文件，基于浏览器纯数字合成。每答对一题配器逐步丰满，通关时高亢铜管号角（Fanfare）齐鸣；答错不打断节奏，消除挫败感。"
      },
      {
        num: "3",
        title: "四大独创萌宠伙伴系统",
        desc: "小青蛙（呱宝）、波波象（波波）、秋田犬（柴小呆）、小白兔（朵朵兔）。各自拥有专属个性配色、纸质肌理与粒子特效，陪伴运算每一步。"
      },
      {
        num: "4",
        title: "绿色防沉迷体力与成就",
        desc: "每日赠送与每小时自然恢复体力，水平测评与错题复习完全免扣体力；支持一次性买断永久免扣；内置每日打卡与 300+ 专属成就奖杯。"
      }
    ],

    // Support
    supportTitle: "帮助中心与技术支持",
    supportDesc: "常见使用说明、体力规则与开发者官方直接支持通道。",
    supportContactTitle: "需要进一步协助？",
    supportContactDesc: "如果您在使用过程中遇到任何疑问、应用异常或建议，欢迎随时给我们发送邮件，通常会在 24~48 小时内为您回复。",
    supportFaqs: [
      {
        q: "体力（血量）是如何计算与补充的？",
        a: "全学年免费开放。免费体力上限为 10 点，每日首次打开赠送 5 点，每小时自动恢复 1 点。每道题首次答错扣 1 点，特别说明：「实力测评」和「错题复习」模式完全不扣体力。亦可在设置中选择满血瓶或一次性永久买断。"
      },
      {
        q: "更换手机或 iPad 后如何恢复买断？",
        a: "如果您购买了永久买断商品，在新设备上使用相同的 Apple ID 登录后，只需打开应用内的「设置」页面，点击「恢复购买」按钮即可免费自动同步恢复。"
      },
      {
        q: "为什么在网页端或手机上听不到声音？",
        a: "现代移动浏览器出于防骚扰策略，要求用户必须与屏幕产生第一次点击或按键互动后，才能激活 Web Audio 音频上下文。请点击屏幕任意位置，并检查手机侧面静音开关。"
      },
      {
        q: "孩子做错题会受到惩罚或打断吗？",
        a: "完全不会！做错题目时，欢快的背景音乐与视觉节奏不会强行中断，当前轮次一定可以完成。错题会自动归档进专属复习本中，方便随时零体力练习巩固。"
      }
    ],

    // Privacy
    privacyTitle: "隐私政策与关于",
    privacyDesc: "《动物派对数学》严格遵循本地优先、无广告、保护儿童隐私的设计原则。",
    privacySections: [
      {
        title: "核心原则：100% 离线与本地优先",
        content: "《动物派对数学》采用纯单机离线运行架构，不自建任何用户注册中心或后台统计服务器。本应用不要求用户注册账号，亦不收集姓名、手机号、邮箱、学号或广告标识符（IDFA）等任何个人身份信息。所有练习记录、答题进度与奖杯仅存储在设备本地沙盒中。"
      },
      {
        title: "零广告与零第三方追踪",
        content: "应用内完全没有第三方广告 SDK，不存在开屏广告、横幅广告或激励视频广告。我们杜绝一切针对儿童的商业行为追踪与数据画像，创造无干扰、专注高效的学习环境。"
      },
      {
        title: "儿童隐私保护标准 (COPPA & GDPR-K)",
        content: "作为面向小学 1~6 年级儿童的教育工具，我们严格遵守《儿童在线隐私保护法》(COPPA) 和《通用数据保护条例》(GDPR) 针对未成年人的保护准则。应用不会请求相机、麦克风、地理位置、通讯录等敏感权限。"
      },
      {
        title: "应用内购买与服务",
        content: "iOS 版本的满血瓶与永久买断等购买流程全部经由苹果官方 StoreKit 安全体系处理。所有支付凭证由 Apple 官方完成验证，开发者无法接触亦不会留存您的银行卡号或账单信息。"
      },
      {
        title: "开源声明与独立品牌说明",
        content: "本应用基础代码基于 MIT 许可进行独立修改开发，与上游无官方品牌隶属关系。本项目独创角色（呱宝、波波、柴小呆、朵朵兔）、视觉资产与商标受版权保护。字体遵循 SIL Open Font License 1.1。"
      }
    ],

    footerCopyright: "© 2026 动物派对数学 (Animal Party Math). 保留所有权利。",
    footerBadge: "Pure Offline & Ad-Free"
  },

  ja: {
    langName: "日本語",
    appName: "アニマルパーティー さんすう",
    navHome: "ホーム",
    navFeatures: "機能紹介",
    navSupport: "サポート",
    navPrivacy: "プライバシー",
    downloadBadgeSmall: "Download on the",
    downloadBadgeTitle: "App Store",

    // Home
    homeHeadline: "1問とくたび、どんどん盛り上がる！",
    homeSubtext: "小学校1〜6年生のための楽しい計算ドリル。かわいい動物たちが数字を運び、正解するほど音楽とお祭り演出が盛り上がります。完全オフライン・広告なし設計。",
    cards: [
      {
        title: "58の計算スキル",
        desc: "小学1〜6年のたし算・ひき算・筆算・九九・小数・分数をスモールステップで網羅。",
        stamp: "58 SKILLS"
      },
      {
        title: "リアルタイム音楽フェス",
        desc: "Web Audio合成によるダイナミックな演奏。正解ごとに音が増え最後はファンファーレ！",
        stamp: "WEB AUDIO"
      },
      {
        title: "安心の完全オフライン",
        desc: "個人情報送信なし、広告ゼロ。適度な体力回復システムで目の疲れと使いすぎを防止。",
        stamp: "100% OFFLINE"
      }
    ],

    // Features
    featuresTitle: "主な機能とカリキュラム",
    featuresDesc: "退屈な計算ドリルから、自ら進めたくなる冒険へ。学習指導要領に基づく科学的なステップアップ。",
    features: [
      {
        num: "1",
        title: "小学1〜6年 58スキルカリキュラム",
        desc: "10の分解、2桁・3桁の筆算、九九、小数・分数の四則演算、文字の値まで完全対応。「じぶんレベル診断」でぴったりな難易度からスタートできます。"
      },
      {
        num: "2",
        title: "Web Audio 合成サウンドシステム",
        desc: "固定の音声ファイルを使わずブラウザ内でリアルタイム合成。1問ごとに音と光が盛り上がり、最後は高らかなファンファーレが鳴り響きます。間違えても演奏は止まりません。"
      },
      {
        num: "3",
        title: "4体の公式マスコットパートナー",
        desc: "カエル（ケロちゃん）、こぞう（ボビ）、あきたいぬ（チャイ）、しろウサギ（ドド）。パートナーごとに専用のテーマカラー、紙面テクスチャ、固有パーティクルが連動します。"
      },
      {
        num: "4",
        title: "適度な体力設計と300個のトロフィー",
        desc: "毎日のログインボーナスと1時間ごとの自然回復でやりすぎを予防。実力チェックや復習は体力消費ゼロ。買い切り永久無制限や300個以上のトロフィーも搭載。"
      }
    ],

    // Support
    supportTitle: "サポート＆ヘルプセンター",
    supportDesc: "使い方のご案内、ハート（体力）の仕組み、開発者サポート窓口。",
    supportContactTitle: "お問い合わせ・ご要望",
    supportContactDesc: "不具合のご報告や機能のご要望などがございましたら、お気軽にメールにてご連絡ください。通常24〜48時間以内にご返答いたします。",
    supportFaqs: [
      {
        q: "ハート（体力）の回復と仕組みについて",
        a: "全学年を無料で遊べます。無料のハート上限は10個で、毎日の初回起動時に5個プレゼントされ、その後1時間に1個ずつ自動回復します。「じぶんレベル診断」や「間違えた問題の復習」ではハートを消費しません。買い切り商品もご用意しています。"
      },
      {
        q: "端末を変更した際、購入状態を復元できますか？",
        a: "はい。買い切り商品をご購入いただいた場合、同じApple IDでログインした新しい端末の設定画面から「購入を復元」をタップすることで、料金不要で即座に復元できます。"
      },
      {
        q: "ブラウザで音が鳴らない場合は？",
        a: "SafariやChromeなどのブラウザでは、自動再生防止のため画面をクリックまたはタップするまで音声がミュートされる仕様になっています。画面の任意の場所を一度タップするか、端末の消音モードをご確認ください。"
      },
      {
        q: "間違えたときのペナルティはありますか？",
        a: "ありません！間違えても演奏や演出の勢いは落ちず、開始した問題セットは最後までプレイできます。また、間違えた問題は無料復習リストに記録され、納得いくまで練習できます。"
      }
    ],

    // Privacy
    privacyTitle: "プライバシーポリシー",
    privacyDesc: "『アニマルパーティー さんすう』は「ローカル優先・広告ゼロ・子どものプライバシー最優先」の原則に基づき設計されています。",
    privacySections: [
      {
        title: "基本原則：100% オフライン・端末内完結",
        content: "本アプリはサーバーとの通信を一切行わない完全なスタンドアロンアプリです。アカウント登録は不要で、氏名・電話番号・メールアドレス・IDFA（広告識別子）等の個人情報を一切収集しません。学習履歴、到達度、トロフィーはすべて端末内にのみ安全に保存されます。"
      },
      {
        title: "広告なし・サードパーティトラッキングなし",
        content: "アプリ内には第三者の広告配信SDKは一切組み込まれていません。ポップアップや動画広告もなく、お子さまの集中を妨げないクリーンな学習環境を提供します。"
      },
      {
        title: "児童オンラインプライバシー保護 (COPPA / GDPR-K)",
        content: "小学生向け教育アプリとして、COPPAおよびGDPRの児童保護基準に準拠しています。カメラ、マイク、位置情報、連絡先等の権限を要求することもありません。"
      },
      {
        title: "アプリ内課金について",
        content: "iOS版の購入はすべてAppleの公式StoreKitフレームワークを介して安全に処理されます。開発者がお客様のクレジットカード情報や決済詳細を閲覧・保存することはありません。"
      },
      {
        title: "オープンソースと独立ブランドについて",
        content: "本アプリはMITライセンスのコードを元に独自開発された独立製品です。独創マスコットキャラクター、ビジュアルおよび商標は著作権により保護されています。フォントはSIL Open Font License 1.1です。"
      }
    ],

    footerCopyright: "© 2026 アニマルパーティー さんすう (Animal Party Math). All rights reserved.",
    footerBadge: "Pure Offline & Ad-Free"
  },

  en: {
    langName: "English",
    appName: "Animal Party Math",
    navHome: "Home",
    navFeatures: "Features",
    navSupport: "Support",
    navPrivacy: "Privacy",
    downloadBadgeSmall: "Download on the",
    downloadBadgeTitle: "App Store",

    // Home
    homeHeadline: "Every Math Problem Is a Joyful Party!",
    homeSubtext: "A gamified calculation practice app designed for elementary Grades 1–6. Cute animal companions carry your answers while dynamic music and festivities ramp up. 100% offline & ad-free.",
    cards: [
      {
        title: "58 Aligned Skills",
        desc: "Master column arithmetic, times tables, decimals, and like-denominator fractions step-by-step.",
        stamp: "58 SKILLS"
      },
      {
        title: "Dynamic Audio Festivities",
        desc: "Web Audio synthesizes harmonic layers with each right answer, building up into a victory fanfare!",
        stamp: "WEB AUDIO"
      },
      {
        title: "100% Offline & Ad-Free",
        desc: "Zero tracking, zero ads. A mindful health stamina system protects focus and prevents eye fatigue.",
        stamp: "100% OFFLINE"
      }
    ],

    // Features
    featuresTitle: "Core Features & Curriculum",
    featuresDesc: "Say goodbye to boring worksheets and spark intrinsic math motivation through positive feedback.",
    features: [
      {
        num: "1",
        title: "Grades 1–6 Curriculum (58 Skills)",
        desc: "Comprehensive coverage of number bonds, 2-digit column arithmetic, times tables, decimals, fractions, and introductory algebra. Placement diagnostic quickly finds your child's sweet spot."
      },
      {
        num: "2",
        title: "Web Audio Real-Time Synthesis",
        desc: "Generates sound purely in the browser without static audio files. Beats build up with every correct answer into a celebratory brass fanfare. Mistakes never harshly interrupt the rhythm."
      },
      {
        num: "3",
        title: "4 Lovable Mascot Companions",
        desc: "Froggy (Frog), Bobi (Elephant), Chai (Shiba Dog), and Dodo (Bunny). Each companion features custom color themes, textured paper effects, and celebration particles."
      },
      {
        num: "4",
        title: "Mindful Stamina & 300+ Trophies",
        desc: "Daily bonus hearts and hourly recovery prevent excessive screen fatigue. Placement tests and mistake reviews cost zero stamina. Includes 300+ collectible trophies."
      }
    ],

    // Support
    supportTitle: "Support & Help Center",
    supportDesc: "Find common answers, stamina rules, and developer support.",
    supportContactTitle: "Need Further Assistance?",
    supportContactDesc: "If you have questions, feedback, or encounter any issues, feel free to email us. We usually respond within 24 to 48 hours.",
    supportFaqs: [
      {
        q: "How does the Heart (Stamina) system work?",
        a: "All grades are fully free. The free heart cap is 10. You receive 5 hearts upon your first open of the day, plus 1 heart per hour of automatic recovery. 1 heart is deducted on a mistake, but \"Placement Diagnostic\" and \"Mistake Review\" modes NEVER deduct hearts. A permanent buyout is also available."
      },
      {
        q: "How do I restore my purchase on a new device?",
        a: "If you bought the permanent buyout, sign into the new device with the same Apple ID, open \"Settings\" in the app, and tap \"Restore Purchases\" to restore your status immediately at no extra charge."
      },
      {
        q: "Why is there no audio in the browser?",
        a: "Modern browsers require an initial user tap or key interaction before Web Audio can start. Simply tap anywhere on the screen and ensure device mute is turned off."
      },
      {
        q: "Is there any penalty for incorrect answers?",
        a: "Never! The festive music and celebration pace continue without harsh interruption, and you can always finish your run. Mistakes are automatically organized into your free review queue."
      }
    ],

    // Privacy
    privacyTitle: "Privacy Policy",
    privacyDesc: "Animal Party Math is built with local-first, zero ads, and children's privacy as core guiding principles.",
    privacySections: [
      {
        title: "Core Principle: 100% Offline & Local Storage",
        content: "Animal Party Math is an entirely standalone, offline application. We operate no cloud user database or analytics servers. The app requires no user registration and collects zero personal data. All drill records and trophies remain strictly on your local device."
      },
      {
        title: "Zero Third-Party Advertising & Tracking",
        content: "The app contains no third-party advertising SDKs, banner ads, or interstitials. We never track children's behavior or build behavioral profiles, ensuring a safe, distraction-free environment."
      },
      {
        title: "Children's Privacy Protection (COPPA & GDPR-K)",
        content: "Tailored for young learners, our app complies strictly with COPPA and GDPR provisions for minors. The app never requests access to cameras, microphones, location services, or contacts."
      },
      {
        title: "In-App Purchases via Apple StoreKit",
        content: "All in-app purchases on iOS are processed exclusively through Apple's official StoreKit. Payment credentials are handled by Apple; we never receive or store billing information."
      },
      {
        title: "Open Source & Independent Brand Notice",
        content: "This independent product modifies MIT-licensed base code. Original mascot characters, brand visuals, and icons are proprietary and protected by copyright. Fonts are licensed under SIL Open Font License 1.1."
      }
    ],

    footerCopyright: "© 2026 Animal Party Math. All rights reserved.",
    footerBadge: "Pure Offline & Ad-Free"
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

  const stored = localStorage.getItem("animalparty-math-lang");
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
        <div class="faq-paper-question">
          <span>${faq.q}</span>
          <span class="faq-toggle-sym">+</span>
        </div>
        <div class="faq-paper-answer" style="display: none;">
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
        const isOpen = a.style.display === "block";
        a.style.display = isOpen ? "none" : "block";
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

  // Footer
  const footerCopyEl = document.querySelector("#footerCopyright");
  if (footerCopyEl) footerCopyEl.textContent = copy.footerCopyright;
  const footerBadgeEl = document.querySelector("#footerBadge");
  if (footerBadgeEl) footerBadgeEl.textContent = copy.footerBadge;
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
    localStorage.setItem("animalparty-math-lang", currentLang);
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
