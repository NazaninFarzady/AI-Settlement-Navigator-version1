const state = {
  language: 'English',
  profile: null,
  currentPage: 'welcome',
  history: [],
};

const app = document.getElementById('app');

const text = {
  English: {
    start: 'Getting Started',
    title: 'Settlement Navigator',
    subtitle:
      'Helping newcomers understand what to do, when to do it, and where to do it.',
    language: 'Language',
    f1: '✓ Personalized settlement plan',
    f2: '✓ Official government websites',
    f3: '✓ Instant translation support',
    f4: '✓ Municipality services',
    button: 'Start My Journey',
    back: 'Back',
    profileTitle: 'Choose your profile',
    profileSubtitle: 'Select the option that best describes you.',
    student: 'Student',
    worker: 'Worker',
    family: 'Family',
    refugee: 'Refugee',
    other: 'Other',
    continue: 'Continue',
    dashboardTitle: 'Your Settlement Plan',
    dashboardSubtitle: 'Based on your profile, here are your next steps.',
  },

  Arabic: {
    start: 'البدء',
    title: 'دليل الاستقرار',
    subtitle: 'نساعد القادمين الجدد على فهم ما يجب فعله، ومتى، وأين.',
    language: 'اللغة',
    f1: '✓ خطة استقرار مخصصة',
    f2: '✓ مواقع حكومية رسمية',
    f3: '✓ دعم الترجمة الفورية',
    f4: '✓ خدمات البلدية',
    button: 'ابدأ رحلتي',
    back: 'رجوع',
    profileTitle: 'اختر ملفك الشخصي',
    profileSubtitle: 'اختر الخيار الذي يصف حالتك.',
    student: 'طالب',
    worker: 'عامل',
    family: 'عائلة',
    refugee: 'لاجئ',
    other: 'أخرى',
    continue: 'متابعة',
    dashboardTitle: 'خطة الاستقرار الخاصة بك',
    dashboardSubtitle: 'بناءً على حالتك، هذه هي خطواتك التالية.',
  },

  Persian: {
    start: 'شروع',
    title: 'راهنمای استقرار',
    subtitle:
      'به تازه‌واردان کمک می‌کنیم بدانند چه کاری، چه زمانی و کجا انجام دهند.',
    language: 'زبان',
    f1: '✓ برنامه شخصی‌سازی‌شده برای استقرار',
    f2: '✓ وب‌سایت‌های رسمی دولتی',
    f3: '✓ پشتیبانی ترجمه فوری',
    f4: '✓ خدمات شهرداری',
    button: 'شروع مسیر من',
    back: 'بازگشت',
    profileTitle: 'پروفایل خود را انتخاب کنید',
    profileSubtitle:
      'گزینه‌ای را انتخاب کنید که وضعیت شما را بهتر توصیف می‌کند.',
    student: 'دانشجو',
    worker: 'کارمند',
    family: 'خانواده',
    refugee: 'پناهنده',
    other: 'دیگر',
    continue: 'ادامه',
    dashboardTitle: 'برنامه استقرار شما',
    dashboardSubtitle: 'بر اساس وضعیت شما، این مراحل بعدی شماست.',
  },

  Spanish: {
    start: 'Comenzar',
    title: 'Guía de asentamiento',
    subtitle:
      'Ayudamos a los recién llegados a saber qué hacer, cuándo y dónde hacerlo.',
    language: 'Idioma',
    f1: '✓ Plan personalizado',
    f2: '✓ Sitios oficiales del gobierno',
    f3: '✓ Traducción instantánea',
    f4: '✓ Servicios municipales',
    button: 'Crear mi plan',
    back: 'Atrás',
    profileTitle: 'Elige tu perfil',
    profileSubtitle: 'Selecciona la opción que mejor te describe.',
    student: 'Estudiante',
    worker: 'Trabajador',
    family: 'Familia',
    refugee: 'Refugiado',
    other: 'Otro',
    continue: 'Continuar',
    dashboardTitle: 'Tu plan de asentamiento',
    dashboardSubtitle: 'Según tu perfil, estos son tus próximos pasos.',
  },

  Turkish: {
    start: 'Başlangıç',
    title: 'Yerleşim Rehberi',
    subtitle:
      'Yeni gelenlerin neyi, ne zaman ve nerede yapacağını anlamasına yardımcı olur.',
    language: 'Dil',
    f1: '✓ Kişiselleştirilmiş plan',
    f2: '✓ Resmi devlet siteleri',
    f3: '✓ Anında çeviri desteği',
    f4: '✓ Belediye hizmetleri',
    button: 'Yolculuğuma başla',
    back: 'Geri',
    profileTitle: 'Profilini seç',
    profileSubtitle: 'Seni en iyi tanımlayan seçeneği seç.',
    student: 'Öğrenci',
    worker: 'Çalışan',
    family: 'Aile',
    refugee: 'Mülteci',
    other: 'Diğer',
    continue: 'Devam',
    dashboardTitle: 'Yerleşim Planın',
    dashboardSubtitle: 'Profiline göre sonraki adımların burada.',
  },

  Swahili: {
    start: 'Anza',
    title: 'Mwongozo wa Makazi',
    subtitle: 'Tunawasaidia wageni kujua nini cha kufanya, lini, na wapi.',
    language: 'Lugha',
    f1: '✓ Mpango binafsi wa makazi',
    f2: '✓ Tovuti rasmi za serikali',
    f3: '✓ Msaada wa tafsiri ya haraka',
    f4: '✓ Huduma za manispaa',
    button: 'Anza safari yangu',
    back: 'Rudi',
    profileTitle: 'Chagua wasifu wako',
    profileSubtitle: 'Chagua chaguo linalokuelezea vizuri.',
    student: 'Mwanafunzi',
    worker: 'Mfanyakazi',
    family: 'Familia',
    refugee: 'Mkimbizi',
    other: 'Nyingine',
    continue: 'Endelea',
    dashboardTitle: 'Mpango wako wa makazi',
    dashboardSubtitle:
      'Kulingana na wasifu wako, hizi ni hatua zako zinazofuata.',
  },
};

const healthcareText = {
  English: {
    title: 'Register for Healthcare',
    subtitle: 'Learn what you need before visiting the official website.',

    why: 'Why is this important?',
    whyText:
      'Registering gives you access to a GP (Fastlege), prescriptions, referrals and public healthcare services.',

    requirements: 'Before you begin',
    requirementsText:
      'You usually need a Norwegian National ID number and a registered address.',

    keyTerms: 'Key terms',

    official: 'Official website',

    officialText:
      'Always complete your registration through the official Helsenorge website.',

    button: 'Open Helsenorge',
  },

  Persian: {
    title: 'ثبت‌نام خدمات درمانی',

    subtitle: 'قبل از مراجعه به وب‌سایت رسمی، اطلاعات موردنیاز را یاد بگیرید.',

    why: 'چرا این مهم است؟',

    whyText:
      'با ثبت‌نام، به پزشک خانواده، نسخه‌ها، ارجاع پزشکی و خدمات درمانی عمومی دسترسی خواهید داشت.',

    requirements: 'قبل از شروع',

    requirementsText: 'معمولاً به شماره ملی نروژ و آدرس ثبت‌شده نیاز دارید.',

    keyTerms: 'اصطلاحات مهم',

    official: 'وب‌سایت رسمی',

    officialText:
      'همیشه ثبت‌نام را از طریق وب‌سایت رسمی Helsenorge انجام دهید.',

    button: 'ورود به Helsenorge',
  },

  Arabic: {
    title: 'التسجيل في الرعاية الصحية',
    subtitle: 'تعرّف على ما تحتاجه قبل زيارة الموقع الرسمي.',
    why: 'لماذا هذا مهم؟',
    whyText:
      'يمنحك التسجيل إمكانية الوصول إلى طبيب الأسرة والخدمات الصحية العامة.',
    requirements: 'قبل البدء',
    requirementsText: 'عادةً تحتاج إلى رقم هوية نرويجي وعنوان مسجل.',
    keyTerms: 'مصطلحات مهمة',
    official: 'الموقع الرسمي',
    officialText: 'أكمل التسجيل دائماً عبر موقع Helsenorge الرسمي.',
    button: 'فتح Helsenorge',
  },

  Spanish: {
    title: 'Registrarse en el sistema sanitario',
    subtitle: 'Conoce lo que necesitas antes de visitar el sitio oficial.',
    why: '¿Por qué es importante?',
    whyText:
      'Obtendrás acceso a un médico de cabecera y a los servicios públicos de salud.',
    requirements: 'Antes de empezar',
    requirementsText:
      'Normalmente necesitas un número de identidad noruego y una dirección registrada.',
    keyTerms: 'Términos importantes',
    official: 'Sitio web oficial',
    officialText: 'Completa siempre el registro a través de Helsenorge.',
    button: 'Abrir Helsenorge',
  },

  Turkish: {
    title: 'Sağlık Sistemine Kayıt',
    subtitle: 'Resmi siteye gitmeden önce bilmeniz gerekenler.',
    why: 'Bu neden önemlidir?',
    whyText: 'Aile hekimine ve kamu sağlık hizmetlerine erişim sağlar.',
    requirements: 'Başlamadan önce',
    requirementsText:
      'Genellikle Norveç Kimlik Numarası ve kayıtlı adres gerekir.',
    keyTerms: 'Önemli terimler',
    official: 'Resmi web sitesi',
    officialText: 'Kaydı her zaman resmi Helsenorge üzerinden tamamlayın.',
    button: "Helsenorge'u Aç",
  },

  Swahili: {
    title: 'Jiandikishe kwa Huduma za Afya',
    subtitle: 'Jifunze unachohitaji kabla ya kutembelea tovuti rasmi.',
    why: 'Kwa nini ni muhimu?',
    whyText: 'Utapata huduma za daktari wa familia na huduma za afya za umma.',
    requirements: 'Kabla ya kuanza',
    requirementsText:
      'Kwa kawaida unahitaji Nambari ya Utambulisho ya Norway na anwani iliyosajiliwa.',
    keyTerms: 'Maneno muhimu',
    official: 'Tovuti rasmi',
    officialText: 'Kamilisha usajili kupitia tovuti rasmi ya Helsenorge.',
    button: 'Fungua Helsenorge',
  },
};
const glossary = {
  English: {
    nationalIdTitle: 'Norwegian National ID',
    nationalIdDesc:
      'A unique identity number for people registered as living in Norway.',

    dNumberTitle: 'D-number',
    dNumberDesc:
      'A temporary identity number for people who do not yet qualify for a National ID.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: 'Your regular family doctor (GP) in Norway.',

    bankIdTitle: 'BankID',
    bankIdDesc:
      'A secure digital identity used to access Norwegian public services and banks.',
  },

  Persian: {
    nationalIdTitle: 'شماره ملی نروژ',
    nationalIdDesc:
      'شماره شناسایی منحصر‌به‌فرد برای افرادی که در نروژ ثبت اقامت شده‌اند.',

    dNumberTitle: 'شماره D',
    dNumberDesc:
      'شماره شناسایی موقت برای افرادی که هنوز شرایط دریافت شماره ملی نروژ را ندارند.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: 'پزشک خانواده یا پزشک عمومی شما در نروژ.',

    bankIdTitle: 'BankID',
    bankIdDesc: 'شناسه دیجیتال امن برای ورود به خدمات دولتی و بانک‌های نروژ.',
  },

  Arabic: {
    nationalIdTitle: 'الرقم الوطني النرويجي',
    nationalIdDesc: 'رقم تعريف فريد للأشخاص المقيمين في النرويج.',

    dNumberTitle: 'رقم D',
    dNumberDesc: 'رقم تعريف مؤقت لمن لا يحق لهم بعد الحصول على الرقم الوطني.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: 'طبيب الأسرة أو الطبيب العام الخاص بك في النرويج.',

    bankIdTitle: 'BankID',
    bankIdDesc: 'هوية رقمية آمنة للوصول إلى الخدمات الحكومية والبنوك.',
  },

  Spanish: {
    nationalIdTitle: 'Número Nacional Noruego',
    nationalIdDesc:
      'Número de identificación único para residentes registrados en Noruega.',

    dNumberTitle: 'Número D',
    dNumberDesc:
      'Número temporal para quienes aún no cumplen los requisitos del número nacional.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: 'Tu médico de cabecera en Noruega.',

    bankIdTitle: 'BankID',
    bankIdDesc:
      'Identidad digital segura para acceder a servicios públicos y bancos.',
  },

  Turkish: {
    nationalIdTitle: 'Norveç Kimlik Numarası',
    nationalIdDesc: "Norveç'te kayıtlı kişiler için benzersiz kimlik numarası.",

    dNumberTitle: 'D-numarası',
    dNumberDesc:
      'Henüz ulusal kimlik numarası alamayan kişiler için geçici kimlik numarası.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: "Norveç'teki aile hekiminiz.",

    bankIdTitle: 'BankID',
    bankIdDesc: 'Kamu hizmetleri ve bankalar için güvenli dijital kimlik.',
  },

  Swahili: {
    nationalIdTitle: 'Nambari ya Taifa ya Norway',
    nationalIdDesc: 'Nambari ya kipekee kwa watu waliosajiliwa kuishi Norway.',

    dNumberTitle: 'Nambari ya D',
    dNumberDesc:
      'Nambari ya muda kwa watu ambao bado hawajapata Nambari ya Taifa.',

    fastlegeTitle: 'Fastlege',
    fastlegeDesc: 'Daktari wako wa familia nchini Norway.',

    bankIdTitle: 'BankID',
    bankIdDesc:
      'Kitambulisho salama cha kidijitali kwa huduma za serikali na benki.',
  },
};

const planText = {
  English: {
    title: 'My Settlement Plan',
    profile: 'Profile',
    municipality: 'Municipality',

    police: 'Register with Police',
    nationalId: 'Get National ID',
    healthcare: 'Register for Healthcare',
    bank: 'Open Bank Account',
    bankid: 'Get BankID',
    municipalityServices: 'Municipality Services',

    required: 'Required first',
    required2: 'Required before healthcare and bank',
    next: 'Next step',
    upcoming: 'Upcoming',
    local: 'Local services',

    button: 'Continue to Healthcare',
  },

  Persian: {
    title: 'برنامه استقرار من',
    profile: 'پروفایل',
    municipality: 'شهرداری',

    police: 'ثبت‌نام در پلیس',
    nationalId: 'دریافت شماره ملی نروژ',
    healthcare: 'ثبت‌نام خدمات درمانی',
    bank: 'افتتاح حساب بانکی',
    bankid: 'دریافت BankID',
    municipalityServices: 'خدمات شهرداری',

    required: 'ابتدا باید انجام شود',
    required2: 'قبل از خدمات درمانی و بانک لازم است',
    next: 'مرحله بعد',
    upcoming: 'مراحل بعدی',
    local: 'خدمات محلی',

    button: 'ادامه به خدمات درمانی',
  },

  Arabic: {
    title: 'خطة الاستقرار',
    profile: 'الملف الشخصي',
    municipality: 'البلدية',

    police: 'التسجيل لدى الشرطة',
    nationalId: 'الحصول على الرقم الوطني',
    healthcare: 'التسجيل في الرعاية الصحية',
    bank: 'فتح حساب بنكي',
    bankid: 'الحصول على BankID',
    municipalityServices: 'خدمات البلدية',

    required: 'مطلوب أولاً',
    required2: 'مطلوب قبل الرعاية الصحية والبنك',
    next: 'الخطوة التالية',
    upcoming: 'القادم',
    local: 'الخدمات المحلية',

    button: 'المتابعة إلى الرعاية الصحية',
  },

  Spanish: {
    title: 'Mi plan de asentamiento',
    profile: 'Perfil',
    municipality: 'Municipio',

    police: 'Registrarse en la policía',
    nationalId: 'Obtener el número nacional',
    healthcare: 'Registrarse en el sistema sanitario',
    bank: 'Abrir una cuenta bancaria',
    bankid: 'Obtener BankID',
    municipalityServices: 'Servicios municipales',

    required: 'Requerido primero',
    required2: 'Necesario antes de salud y banco',
    next: 'Siguiente paso',
    upcoming: 'Próximamente',
    local: 'Servicios locales',

    button: 'Continuar a Salud',
  },

  Turkish: {
    title: 'Yerleşim Planım',
    profile: 'Profil',
    municipality: 'Belediye',

    police: 'Polise kayıt ol',
    nationalId: 'Ulusal Kimlik Numarası al',
    healthcare: 'Sağlık sistemine kayıt ol',
    bank: 'Banka hesabı aç',
    bankid: 'BankID al',
    municipalityServices: 'Belediye hizmetleri',

    required: 'Önce gerekli',
    required2: 'Sağlık ve bankadan önce gerekli',
    next: 'Sonraki adım',
    upcoming: 'Yakında',
    local: 'Yerel hizmetler',

    button: 'Sağlık hizmetine devam et',
  },

  Swahili: {
    title: 'Mpango wangu wa makazi',
    profile: 'Wasifu',
    municipality: 'Manispaa',

    police: 'Jiandikishe kwa Polisi',
    nationalId: 'Pata Nambari ya Kitaifa',
    healthcare: 'Jiandikishe kwa huduma za afya',
    bank: 'Fungua akaunti ya benki',
    bankid: 'Pata BankID',
    municipalityServices: 'Huduma za manispaa',

    required: 'Inahitajika kwanza',
    required2: 'Inahitajika kabla ya afya na benki',
    next: 'Hatua inayofuata',
    upcoming: 'Inayofuata',
    local: 'Huduma za eneo',

    button: 'Endelea kwa Huduma za Afya',
  },
};

function t() {
  return text[state.language];
}

function changeLanguage(language) {
  state.language = language;
  renderCurrentPage();
}

function goTo(page) {
  if (state.currentPage !== page) {
    state.history.push(state.currentPage);
  }

  state.currentPage = page;
  renderCurrentPage();
}

function goBack() {
  const previousPage = state.history.pop();

  if (previousPage) {
    state.currentPage = previousPage;
    renderCurrentPage();
  }
}

function renderCurrentPage() {
  if (state.currentPage === 'welcome') renderWelcome();
  if (state.currentPage === 'profile') renderProfile();
  if (state.currentPage === 'dashboard') renderDashboard();
  if (state.currentPage === 'healthcare') renderHealthcare();
  if (state.currentPage === 'healthcareWebsite') renderHealthcareWebsite();
  if (state.currentPage === 'officialHealthcare') renderOfficialHealthcare();
}

function renderBackButton() {
  return `<button class="back-btn" onclick="goBack()">${t().back}</button>`;
}

function renderWelcome() {
  const lang = t();

  app.innerHTML = `
    <div class="phone">
      <div class="step">${lang.start}</div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:33%"></div>
      </div>

      <div class="header">🇳🇴</div>

      <h1>${lang.title}</h1>

      <p class="subtitle">${lang.subtitle}</p>

      <div class="section">
        <label class="label">${lang.language}</label>

        <select class="input" onchange="changeLanguage(this.value)">
          <option ${
            state.language === 'English' ? 'selected' : ''
          }>English</option>
          <option ${
            state.language === 'Arabic' ? 'selected' : ''
          }>Arabic</option>
          <option ${
            state.language === 'Persian' ? 'selected' : ''
          }>Persian</option>
          <option ${
            state.language === 'Spanish' ? 'selected' : ''
          }>Spanish</option>
          <option ${
            state.language === 'Turkish' ? 'selected' : ''
          }>Turkish</option>
          <option ${
            state.language === 'Swahili' ? 'selected' : ''
          }>Swahili</option>
        </select>
      </div>

      <div class="feature">${lang.f1}</div>
      <div class="feature">${lang.f2}</div>
      <div class="feature">${lang.f3}</div>
      <div class="feature">${lang.f4}</div>

      <button class="primary-btn" onclick="goTo('profile')">
        ${lang.button}
      </button>
    </div>
  `;
}

function selectProfile(profile) {
  state.profile = profile;
  renderProfile();
}

function renderProfile() {
  const lang = t();

  app.innerHTML = `
    <div class="phone">
      ${renderBackButton()}

      <div class="step">Profile</div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:66%"></div>
      </div>

      <h1>${lang.profileTitle}</h1>

      <p class="subtitle">${lang.profileSubtitle}</p>

      <button class="profile-card ${
        state.profile === 'Student' ? 'selected' : ''
      }" onclick="selectProfile('Student')">🎓 ${lang.student}</button>
      <button class="profile-card ${
        state.profile === 'Worker' ? 'selected' : ''
      }" onclick="selectProfile('Worker')">💼 ${lang.worker}</button>
      <button class="profile-card ${
        state.profile === 'Family' ? 'selected' : ''
      }" onclick="selectProfile('Family')">👨‍👩‍👧 ${lang.family}</button>
      <button class="profile-card ${
        state.profile === 'Refugee' ? 'selected' : ''
      }" onclick="selectProfile('Refugee')">🛡️ ${lang.refugee}</button>
      <button class="profile-card ${
        state.profile === 'Other' ? 'selected' : ''
      }" onclick="selectProfile('Other')">🌍 ${lang.other}</button>

      <button class="primary-btn" onclick="goTo('dashboard')" ${
        state.profile ? '' : 'disabled'
      }>
        ${lang.continue}
      </button>
    </div>
  `;
}

function renderDashboard() {
  const lang = planText[state.language];

  app.innerHTML = `
    <div class="phone">
      ${renderBackButton()}

      <div class="step">My Plan</div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:35%"></div>
      </div>

      <h1>${lang.title}</h1>

      <p class="subtitle">
        ${lang.profile}: <b>${state.profile || 'Not selected'}</b><br>
        ${lang.municipality}: <b>Oslo</b>
      </p>

      <div class="plan-card required">
        <span>1</span>
        <div>
          <b>${lang.police}</b>
          <small>${lang.required}</small>
        </div>
      </div>

      <div class="plan-card required">
        <span>2</span>
        <div>
          <b>${lang.nationalId}</b>
          <small>${lang.required2}</small>
        </div>
      </div>

      <div class="plan-card active" onclick="goTo('healthcare')">
        <span>3</span>
        <div>
          <b>${lang.healthcare}</b>
          <small>${lang.next}</small>
        </div>
      </div>

      <div class="plan-card">
        <span>○</span>
        <div>
          <b>${lang.bank}</b>
          <small>${lang.upcoming}</small>
        </div>
      </div>

      <div class="plan-card">
        <span>○</span>
        <div>
          <b>${lang.bankid}</b>
          <small>${lang.upcoming}</small>
        </div>
      </div>

      <div class="plan-card">
        <span>○</span>
        <div>
          <b>Oslo ${lang.municipalityServices}</b>
          <small>${lang.local}</small>
        </div>
      </div>

      <button class="primary-btn" onclick="goTo('healthcare')">
        ${lang.button}
      </button>
    </div>
  `;
}
function renderHealthcare() {
  const lang = healthcareText[state.language];
  const g = glossary[state.language];

  app.innerHTML = `
    <div class="phone">

      ${renderBackButton()}

      <div class="step">Task Guide</div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:45%"></div>
      </div>

      <h1>${lang.title}</h1>

      <p class="subtitle">
        ${lang.subtitle}
      </p>

      <div class="info-box">
        <h3>${lang.why}</h3>
        <p>${lang.whyText}</p>
      </div>

      <div class="info-box">
        <h3>${lang.requirements}</h3>
        <p>${lang.requirementsText}</p>
      </div>

      <div class="info-box">

        <h3>${lang.keyTerms}</h3>

        <details>
          <summary>${g.nationalIdTitle}</summary>
          <p>${g.nationalIdDesc}</p>
        </details>

        <details>
          <summary>${g.dNumberTitle}</summary>
          <p>${g.dNumberDesc}</p>
        </details>

        <details>
          <summary>${g.fastlegeTitle}</summary>
          <p>${g.fastlegeDesc}</p>
        </details>

        <details>
          <summary>${g.bankIdTitle}</summary>
          <p>${g.bankIdDesc}</p>
        </details>

      </div>

      <div class="info-box">

        <h3>${lang.official}</h3>

        <p>
          ${lang.officialText}
        </p>

      </div>

      <button
        class="primary-btn"
        onclick="window.open('https://www.helsenorge.no/en/gp/about-gp/the-right-to-a-doctor/', '_blank')">

        ${lang.button}

      </button>

    </div>
  `;
}
function renderHealthcareWebsite() {
  app.innerHTML = `

  <div class="phone">

      ${renderBackButton()}

      <div class="step">
          Official Website
      </div>

      <div class="progress-bar">
          <div class="progress-fill"
          style="width:55%">
          </div>
      </div>

      <h1>Helsenorge</h1>

      <p class="subtitle">
          The official healthcare website.
      </p>

      <div class="website-card">

          <h3>Official website</h3>

          <p>
          https://www.helsenorge.no
          </p>

      </div>

      <div class="website-card">

          <h3>Translation Assistant</h3>

          <p>

          This page will show the Norwegian website.

          When you tap a paragraph,
          its translation appears immediately
          below it.

          </p>

      </div>

      <button class="primary-btn">

          Open Helsenorge

      </button>

  </div>

  `;
}

function renderOfficialHealthcare() {
  app.innerHTML = `
    <div class="phone">

      ${renderBackButton()}

      <div class="step">Official Website</div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:60%"></div>
      </div>

      <h1>Helsenorge</h1>

      <p class="subtitle">
        Read the Norwegian page with translation support.
      </p>

      <div class="translation-card">

        <div class="norwegian">
          Kontakt klinikken
        </div>

        <div class="translated">
          Contact the clinic
        </div>

      </div>

      <div class="translation-card">

        <div class="norwegian">
          Fullt navn
        </div>

        <div class="translated">
          Full name
        </div>

        <input class="input" placeholder="">

      </div>

      <div class="translation-card">

        <div class="norwegian">
          Telefonnummer
        </div>

        <div class="translated">
          Phone number
        </div>

        <input class="input">

      </div>

      <div class="translation-card">

        <div class="norwegian">
          Melding
        </div>

        <div class="translated">
          Message
        </div>

        <textarea class="input" rows="5"></textarea>

      </div>

      <button class="primary-btn">
        Send request
      </button>

    </div>
  `;
}

goTo('welcome');
