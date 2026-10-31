const LRM = '‎'

export const SITE = {
  email: 'basel.ibrahim@socialist.agency',
  socialist: 'https://socialist.agency',
  reachflex: 'https://reachflexhub.com',
}

export const projectMeta = [
  {
    id: 'socialist',
    accent: '#8FB8FF',
    url: 'https://socialist.agency',
    images: [{ file: 'socialist-home', w: 1400, h: 875 }],
  },
  {
    id: 'reachflex',
    accent: '#FFC93C',
    url: 'https://ops.reachflexhub.com',
    images: [
      { file: 'rf-overview', w: 1400, h: 875 },
      { file: 'rf-schedule', w: 1400, h: 875 },
    ],
  },
  {
    id: 'zoud',
    accent: '#7CF3C0',
    url: 'https://zoud.sa',
    images: [
      { file: 'zoud-tiktok', w: 1400, h: 906 },
      { file: 'zoud-logo', w: 946, h: 525, fit: 'contain' },
    ],
  },
  {
    id: 'teqball',
    accent: '#FF8A7A',
    url: 'https://www.instagram.com/teqball.sa/',
    images: [
      { file: 'teqball-site', w: 1400, h: 770 },
      { file: 'teqball-ig', w: 1400, h: 726 },
    ],
  },
  {
    id: 'alhout',
    accent: '#C9B2FF',
    url: 'https://www.tiktok.com/@alhoutforseafood',
    images: [
      { file: 'alhout-1', w: 1100, h: 1018 },
      { file: 'alhout-2', w: 1100, h: 732 },
      { file: 'alhout-3', w: 900, h: 1200 },
    ],
  },
]

export const archiveMeta = [
  { id: 'solar-win', file: 'solar-windows', accent: '#FFC93C' },
  { id: 'solar-and', file: 'solar-android', accent: '#7CF3C0' },
  { id: 'bills', file: 'bill-payments', accent: '#8FB8FF' },
  { id: 'twitch', file: 'twitch-designs', accent: '#C9B2FF' },
]

export const copy = {
  en: {
    meta: { title: 'Basel Ibrahim | CTO, Socialist Agency & ReachFlex' },
    nav: { work: 'Work', about: 'About', archive: 'Earlier', contact: 'Contact', toggle: 'عربي', toggleLabel: 'Switch to Arabic' },
    hero: {
      tags: ['CTO · Socialist Agency', 'CTO · ReachFlex'],
      title: ['Two companies.', 'One CTO.', 'Built in-house.'],
      sub: 'I build the software two companies run on, in Arabic and English.',
      cta: 'See the work ↓',
      cta2: 'Talk to me',
      photoAlt: 'Portrait of Basel Ibrahim',
      stickers: ['Teqball KSA · 403K views', '128 B2B leads'],
    },
    marquee: ['Socialist Planner', 'ReachFlex Ops Hub', 'Zoud', 'Teqball KSA', 'Alhout Seafood'],
    work: {
      title: 'Built, launched, grown.',
      visit: 'Visit',
      thumbsLabel: 'Screenshots',
      projects: [
        {
          title: 'Socialist Agency',
          role: 'CTO · Built end to end',
          text: "The agency's public website and the planner the whole team works in every day: content calendar, client pipeline, invoices, budget, revenue, approvals and a blog editor. Arabic and English, with live data shared across the team.",
          tags: ['React 19', 'Supabase', 'Netlify', 'RTL'],
          link: 'socialist.agency',
          note: 'The public site, Arabic version. The planner sits behind a login.',
          alts: ['Socialist Agency homepage in Arabic'],
        },
        {
          title: 'ReachFlex Ops Hub',
          role: 'CTO · Designed and built',
          text: 'Operations dashboard for a call-center and BPO provider: staffing schedule, agent roster, account SLAs, QA and CSAT, sales pipeline, seat-based invoicing and monthly PDF reports. Access is set per user and per page.',
          tags: ['React 19', 'Supabase', 'Row-level security'],
          link: 'Open the preview',
          note: 'Screenshots use sample data.',
          alts: ['ReachFlex Ops Hub overview with account cards', 'ReachFlex Ops Hub staffing schedule grid'],
        },
        {
          title: 'Zoud',
          role: 'Brand, growth and product',
          text: 'A Saudi auction and e-commerce app. I built the brand from day one: identity, content, photo and video. TikTok grew to 13K followers and the app to 100K downloads. I also work on the product itself, across the Flutter app, the Angular web app and the .NET APIs.',
          stats: [
            ['3.5M+', 'social views'],
            ['100K', 'app downloads'],
            ['13.1K', 'TikTok followers'],
          ],
          tags: ['Brand', 'Flutter', 'Angular', '.NET'],
          link: 'zoud.sa',
          note: 'The Zoud TikTok profile and logo.',
          alts: ['Zoud TikTok profile with video grid', 'Zoud logo'],
        },
        {
          title: 'Teqball KSA',
          role: 'Launch campaign and landing page',
          text: 'Launched an unknown sport in Saudi Arabia. Arabic short-form video built awareness, and a B2B email campaign across 33+ sectors opened doors with institutions. One Reel reached 208K views, and 79% of that audience had never heard of Teqball. I also built the bilingual landing page for official Teqball tables.',
          stats: [
            ['403K+', 'Instagram views'],
            ['242K', 'unique reach'],
            ['128', 'new leads'],
          ],
          tags: ['Instagram', 'Short-form video', 'B2B email', 'Landing page'],
          link: 'Teqball KSA on Instagram',
          note: 'The landing page and the Instagram profile.',
          alts: ['Teqball KSA landing page', 'Teqball KSA Instagram profile'],
        },
        {
          title: 'Alhout Seafood',
          role: 'Social media from zero',
          text: "Built the whole social presence from scratch. Visual content around freshness, tradition and appetite, tuned for TikTok's For You page, which drove 98.9% of all views. One video hit 307K views and added 130 followers in a single day. Every DM got a reply.",
          stats: [
            ['560K+', 'views across platforms'],
            ['307K', 'top single video'],
            ['100%', 'DM response rate'],
          ],
          tags: ['TikTok', 'Photography', 'Video'],
          link: 'Alhout on TikTok',
          note: 'Content shot and produced for the account.',
          alts: ['Grilled seafood platter photographed from above', 'Seafood tagine with fresh vegetables', 'The Alhout team outside the restaurant'],
        },
      ],
    },
    about: {
      title: 'I build the tools, then run the company on them.',
      paras: [
        "I'm CTO of Socialist Agency, a social media and digital marketing agency working across Egypt and the GCC. I built the agency's website and the planner the team works in every day.",
        "I'm also CTO of ReachFlex, a call-center and BPO provider. I built its operations hub: staffing, QA, account SLAs, invoicing and reports.",
        'Most business software ignores right-to-left layouts and local ways of working. I build for Arabic and English from the first screen.',
      ],
      facts: ['CTO · Socialist Agency', 'CTO · ReachFlex', 'Arabic + English', 'React · Supabase · Flutter'],
    },
    skills: {
      title: 'How I build.',
      groups: [
        { name: 'Frontend', items: ['React 19', 'Vite', 'RTL and i18n (Arabic + English)', 'Bootstrap'] },
        { name: 'Backend and data', items: ['Supabase (Postgres, auth, realtime, RLS)', '.NET / C#', 'PHP / Laravel', 'REST APIs'] },
        { name: 'Mobile and desktop', items: ['Flutter', 'Android (Java)', 'Windows (C#, .NET Framework)'] },
        { name: 'Automation and ops', items: ['n8n', 'Netlify (Edge Functions)', 'Docker', 'GitHub'] },
      ],
    },
    archive: {
      title: 'Before this.',
      items: [
        {
          title: 'Solar Load Calculator',
          platform: 'Windows',
          text: 'Native Windows app that calculates solar load for buildings from location, time of year and surface orientation. Built in C# for the solar energy branch of Arab International Optronic and shown at LED Expo 2024 in Egypt.',
          tags: ['C#', '.NET Framework', 'Windows Forms'],
          alt: 'Basel at the LED Expo booth next to the calculator kiosk',
        },
        {
          title: 'Solar Load Calculator',
          platform: 'Android',
          text: 'The same tool as an offline Android app, written in Java for the same company and the same expo.',
          tags: ['Java', 'Android Studio'],
          alt: 'Solar Load Calculator Android app screen',
        },
        {
          title: 'Government Bill Payment Website',
          platform: 'Web',
          text: 'WordPress site for paying utility bills and university fees online by card, with bill tracking, payment history and reminders, for users across Egypt.',
          tags: ['WordPress', 'Payment gateway'],
          alt: 'Bill payment website home screen',
        },
        {
          title: 'Twitch Channel Designs',
          platform: 'Graphics',
          text: 'Stream overlays, banners and profile icons for my own Twitch channel, designed in Photoshop.',
          tags: ['Photoshop'],
          alt: 'Twitch stream starting soon overlay',
        },
      ],
    },
    contact: {
      title: "Let's talk.",
      text: 'Product consulting, technical partnerships, or a problem worth solving in the GCC market.',
      button: 'Email me',
      label: 'Email',
    },
    footer: { rights: 'Basel Ibrahim' },
  },

  ar: {
    meta: { title: 'باسل إبراهيم | المدير التقني لـ Socialist Agency و ReachFlex' },
    nav: { work: 'أعمالي', about: 'عنّي', archive: 'سابقاً', contact: 'تواصل', toggle: 'EN', toggleLabel: 'التبديل إلى الإنجليزية' },
    hero: {
      tags: ['المدير التقني · Socialist Agency', 'المدير التقني · ReachFlex'],
      title: ['شركتان.', 'مدير تقني واحد.', 'وكل شيء بُني داخلياً.'],
      sub: 'أبني الأنظمة التي تُشغّل شركاتنا، بالعربي أولاً.',
      cta: 'شاهد الأعمال ↓',
      cta2: 'تحدّث معي',
      photoAlt: 'صورة باسل إبراهيم',
      stickers: ['Teqball KSA · 403K مشاهدة', '128 عميل محتمل B2B'],
    },
    marquee: ['Socialist Planner', 'ReachFlex Ops Hub', 'Zoud', 'Teqball KSA', 'Alhout Seafood'],
    work: {
      title: 'بنيتُها، أطلقتُها، ونمّيتُها.',
      visit: 'زيارة',
      thumbsLabel: 'اللقطات',
      projects: [
        {
          title: 'Socialist Agency',
          role: 'المدير التقني · بنيتُ كل شيء',
          text: 'الموقع العام للوكالة ومنصة التخطيط التي يعمل عليها الفريق كل يوم: تقويم المحتوى، خط العملاء، الفواتير، الميزانية، الإيرادات، الموافقات ومحرر المدونة. بالعربية والإنجليزية، وببيانات حيّة مشتركة بين الفريق.',
          tags: ['React 19', 'Supabase', 'Netlify', 'RTL'],
          link: 'socialist.agency',
          note: 'الموقع العام بالنسخة العربية. المنصة الداخلية خلف تسجيل الدخول.',
          alts: ['الصفحة الرئيسية لموقع Socialist Agency بالعربية'],
        },
        {
          title: 'ReachFlex Ops Hub',
          role: 'المدير التقني · صمّمتُ وبنيتُ',
          text: 'لوحة عمليات لمزوّد خدمات مراكز الاتصال وBPO: جدول التوظيف، سجل الوكلاء، اتفاقيات مستوى الخدمة للحسابات، الجودة ورضا العملاء، خط المبيعات، الفوترة بالمقاعد وتقارير PDF شهرية. والصلاحيات تُضبط لكل مستخدم ولكل صفحة.',
          tags: ['React 19', 'Supabase', 'Row-level security'],
          link: 'افتح النسخة التجريبية',
          note: 'اللقطات ببيانات تجريبية.',
          alts: ['نظرة عامة على حسابات ReachFlex Ops Hub', 'جدول التوظيف في ReachFlex Ops Hub'],
        },
        {
          title: 'Zoud',
          role: 'العلامة والنمو والمنتج',
          text: `تطبيق مزادات وتجارة إلكترونية سعودي. بنيتُ علامته من اليوم الأول: الهوية والمحتوى والتصوير والفيديو، حتى وصل تيك توك إلى 13 ألف متابع والتطبيق إلى 100 ألف تحميل. وأعمل أيضاً على المنتج نفسه: تطبيق Flutter وتطبيق الويب بـ Angular وواجهات ${LRM}.NET${LRM}.`,
          stats: [
            ['3.5M+', 'مشاهدة على السوشيال'],
            ['100K', 'تحميل للتطبيق'],
            ['13.1K', 'متابع على تيك توك'],
          ],
          tags: ['العلامة', 'Flutter', 'Angular', '.NET'],
          link: 'zoud.sa',
          note: 'حساب Zoud على تيك توك والشعار.',
          alts: ['حساب Zoud على تيك توك', 'شعار Zoud'],
        },
        {
          title: 'Teqball KSA',
          role: 'إطلاق حملة وصفحة هبوط',
          text: 'أطلقنا رياضة غير معروفة في السعودية. فيديو عربي قصير بنى الوعي، وحملة بريد B2B على أكثر من 33 قطاعاً فتحت الباب مع المؤسسات. ريل واحد وصل إلى 208 آلاف مشاهدة، و79% منهم لم يسمعوا بالتيكبول من قبل. وبنيتُ أيضاً صفحة الهبوط ثنائية اللغة لطاولات تيكبول الرسمية.',
          stats: [
            ['403K+', 'مشاهدة على إنستغرام'],
            ['242K', 'وصول فريد'],
            ['128', 'عميل محتمل جديد'],
          ],
          tags: ['إنستغرام', 'فيديو قصير', 'بريد B2B', 'صفحة هبوط'],
          link: 'Teqball KSA على إنستغرام',
          note: 'صفحة الهبوط وحساب إنستغرام.',
          alts: ['صفحة هبوط Teqball KSA', 'حساب Teqball KSA على إنستغرام'],
        },
        {
          title: 'Alhout Seafood',
          role: 'سوشيال ميديا من الصفر',
          text: 'بنينا الحضور الرقمي كاملاً من الصفر. محتوى بصري عن الطزاجة والأصالة والشهية، مضبوط لصفحة For You في تيك توك التي جاء منها 98.9% من المشاهدات. فيديو واحد وصل إلى 307 آلاف مشاهدة وأضاف 130 متابعاً في يوم واحد. وكل رسالة خاصة وصلها رد.',
          stats: [
            ['560K+', 'مشاهدة عبر المنصات'],
            ['307K', 'أعلى فيديو'],
            ['100%', 'ردّ على الرسائل'],
          ],
          tags: ['تيك توك', 'تصوير', 'فيديو'],
          link: 'الحوت على تيك توك',
          note: 'محتوى صُوّر وأُنتج للحساب.',
          alts: ['طبق مأكولات بحرية مشوية مصوّر من الأعلى', 'طاجن بحري مع خضار طازجة', 'فريق الحوت أمام المطعم'],
        },
      ],
    },
    about: {
      title: 'أبني الأدوات، ثم أُشغّل الشركة بها.',
      paras: [
        'أنا المدير التقني لـ Socialist Agency، وكالة سوشيال ميديا وتسويق رقمي تعمل في مصر والخليج. بنيتُ موقع الوكالة والمنصة التي يعمل عليها الفريق كل يوم.',
        'وأنا أيضاً المدير التقني لـ ReachFlex، مزوّد خدمات مراكز الاتصال وBPO. بنيتُ مركز عملياتها: التوظيف والجودة واتفاقيات الخدمة والفوترة والتقارير.',
        'أغلب برامج الأعمال تتجاهل الواجهات من اليمين لليسار وطريقة العمل المحلية. أنا أبني بالعربية والإنجليزية من أول شاشة.',
      ],
      facts: ['المدير التقني · Socialist Agency', 'المدير التقني · ReachFlex', 'عربي + English', 'React · Supabase · Flutter'],
    },
    skills: {
      title: 'كيف أبني.',
      groups: [
        { name: 'الواجهات', items: ['React 19', 'Vite', 'RTL و i18n (عربي + إنجليزي)', 'Bootstrap'] },
        { name: 'الخلفية والبيانات', items: ['Supabase (Postgres, auth, realtime, RLS)', '.NET / C#', 'PHP / Laravel', 'REST APIs'] },
        { name: 'الجوال وسطح المكتب', items: ['Flutter', 'Android (Java)', 'Windows (C#, .NET Framework)'] },
        { name: 'الأتمتة والتشغيل', items: ['n8n', 'Netlify (Edge Functions)', 'Docker', 'GitHub'] },
      ],
    },
    archive: {
      title: 'قبل ذلك.',
      items: [
        {
          title: 'حاسبة الأحمال الشمسية',
          platform: 'Windows',
          text: `تطبيق ويندوز أصلي يحسب الحمل الشمسي للمباني بحسب الموقع ووقت السنة واتجاه الأسطح. بُني بلغة C#${LRM} لفرع الطاقة الشمسية في Arab International Optronic وعُرض في LED Expo 2024 في مصر.`,
          tags: ['C#', '.NET Framework', 'Windows Forms'],
          alt: 'باسل في جناح LED Expo بجانب شاشة الحاسبة',
        },
        {
          title: 'حاسبة الأحمال الشمسية',
          platform: 'Android',
          text: 'الأداة نفسها كتطبيق أندرويد يعمل بدون إنترنت، كُتب بلغة Java لنفس الشركة ونفس المعرض.',
          tags: ['Java', 'Android Studio'],
          alt: 'شاشة تطبيق حاسبة الأحمال الشمسية على أندرويد',
        },
        {
          title: 'موقع دفع الفواتير الحكومية',
          platform: 'Web',
          text: 'موقع ووردبريس لدفع فواتير الخدمات والرسوم الجامعية بالبطاقة، مع تتبع الفواتير وسجل الدفع والتذكيرات، لمستخدمين في مصر.',
          tags: ['WordPress', 'Payment gateway'],
          alt: 'الصفحة الرئيسية لموقع دفع الفواتير',
        },
        {
          title: 'تصاميم قناة Twitch',
          platform: 'Graphics',
          text: 'شاشات بث وبانرات وأيقونات لقناتي الخاصة على Twitch، صُمّمت في Photoshop.',
          tags: ['Photoshop'],
          alt: 'شاشة البث قريباً على Twitch',
        },
      ],
    },
    contact: {
      title: 'لنتحدث.',
      text: 'استشارات منتجات، شراكات تقنية، أو مشكلة تستحق الحل في السوق الخليجي.',
      button: 'راسلني',
      label: 'البريد',
    },
    footer: { rights: 'باسل إبراهيم' },
  },
}
