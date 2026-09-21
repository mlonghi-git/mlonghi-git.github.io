const revealItems = document.querySelectorAll('.reveal');
const year = document.querySelector('#year');
const themeToggle = document.querySelector('[data-theme-toggle]');
const languageToggle = document.querySelector('[data-language-toggle]');
const translations = {
  it: {
    pageTitle: 'Mirko Longhi | SAP Integration Architect',
    metaDescription: 'Portfolio professionale di Mirko Longhi, SAP Integration Architect e Technical Lead.',
    homeAriaLabel: "Torna all'inizio",
    navigationAriaLabel: 'Navigazione principale',
    themeToggleAriaLabel: 'Attiva tema scuro',
    navProfile: 'Profilo', navSkills: 'Competenze', navExperience: 'Esperienza', navContact: 'Contatti', downloadCv: 'Scarica CV',
    role: 'SAP Integration Architect / Technical Lead',
    heroTitle: 'Integro sistemi.<br><em>Accendo possibilità.</em>',
    heroLead: 'Sono Mirko Longhi, SAP Integration Architect e Technical Lead. Progetto connessioni solide tra piattaforme, persone e processi complessi.',
    talk: 'Parliamone', discover: 'Scopri il percorso', profileAriaLabel: 'Profilo professionale sintetico', consoleProfile: 'PROFILO / 2026',
    profilePhotoAlt: 'Ritratto di Mirko Longhi', basedIn: 'CON BASE A', experienceLabel: 'ESPERIENZA', experienceYears: '8+ ANNI',
    strengthsAriaLabel: 'Punti di forza', yearsExperience: 'anni di esperienza', enterpriseIntegrations: 'integrazioni enterprise', certifications2026: 'certificazioni nel 2026',
    profile: 'Profilo', profileTitle: 'La complessità,<br><em>resa leggibile.</em>',
    profileLead: 'Trasformo landscape SAP articolati in ecosistemi che comunicano in modo affidabile. Seguo ogni fase della soluzione: analisi, architettura, sviluppo, delivery e supporto al cliente.',
    profileBody: 'Mi occupo anche di prevendita, workshop tecnici e mentoring, con una cura particolare per qualità del codice, manutenibilità e scalabilità.',
    skills: 'Competenze',
    sapCloud: 'SAP BTP, Integration Suite, Cloud Integration, API Management, Integration Advisor, Cloud Connector, S/4HANA, ECC, SuccessFactors, SAP Sales and Service Cloud (C4C) e SAP CPQ.',
    enterpriseIntegration: 'Enterprise Integration', enterpriseIntegrationBody: 'REST, OData, SOAP, GraphQL, RFC, JDBC, IDoc, EDIFACT, AS2 e integrazioni B2B/B2G.',
    development: 'Development', developmentBody: 'Groovy, XSLT, ABAP, mapping avanzati, scripting, trasformazione dati e orchestrazione API.',
    security: 'Security', securityBody: 'OAuth 2.0, SAML, keystore, truststore e configurazione di landscape ibridi sicuri.',
    experience: 'Esperienza', currentPeriod: '01 / 2018 — OGGI',
    job1: 'Progetto architetture d’integrazione scalabili su SAP BTP e SAP Integration Suite.',
    job2: 'Realizzo flussi iFlow con routing, mapping e trasformazioni avanzate in Groovy e XSLT.',
    jobInnovation: 'Esploro e valuto soluzioni tecniche, trasformandole in pattern, best practice, template e linee guida per rendere il lavoro del team più efficace e coerente.',
    jobTools: 'Realizzo strumenti interni per i tecnici, tra cui applicazioni web per documentare tenant CPI e confrontare deploy e versioni tra ambienti di test e produzione.',
    job3: 'Integro S/4HANA, ECC, SuccessFactors, SAP Sales and Service Cloud (C4C), SAP CPQ e applicazioni di terze parti tramite API e protocolli enterprise.',
    job4: 'Implemento integrazioni B2B/B2G per processi di fatturazione elettronica internazionale.',
    job5: 'Supporto prevendita, PoC e workshop tecnici con clienti e stakeholder.',
    job6: 'Accompagno la crescita del team con formazione, code review e mentoring.',
    internTitle: 'Stagista Programmatore <em>ABAP</em>', internJob1: 'Sviluppo di programmi ABAP e gestione dati tramite SAP Data Dictionary.',
    internJob2: 'Creazione di report ALV, SAPscript e Smart Forms.', internJob3: 'Implementazione di logiche ABAP Objects e ottimizzazione delle performance.',
    studentWorkPeriod: '2012 — 2017', studentWorkContext: 'DURANTE GLI STUDI UNIVERSITARI',
    studentWorkTitle: 'Esperienze professionali<br><em>durante gli studi</em>',
    studentWorkIntro: 'Ho affiancato gli studi universitari a diversi lavori, sviluppando affidabilità, autonomia e attenzione alle persone.',
    studentWorkRoles: 'Check-in agent aeroportuale, portalettere, parcheggiatore e autista di navette, falegname e commesso in tabaccheria.',
    certificationsLabel: 'CERTIFICAZIONI / 2026', certificationsTitle: 'Costruire competenza.<br><em>Dimostrarla.</em>',
    beyondCode: 'Oltre il codice', beyondCodeTitle: 'Curiosità<br><em>concreta.</em>',
    beyondCodeBody: 'La stessa attenzione che porto nei sistemi mi accompagna fuori dal lavoro: montagne, musica e cucina.',
    interest1: 'Mountain bike & outdoor', interest2: 'Sassofono contralto', interest3: 'Cucina e nuove ricette',
    contactLabel: '05 / CONTATTI', contactTitle: 'Hai un sistema<br>da <em>connettere?</em>',
    location: 'Jerago con Orago, VA · Italia', footerTagline: 'Progettato per connessioni che contano.'
  },
  en: {
    pageTitle: 'Mirko Longhi | SAP Integration Architect',
    metaDescription: 'Professional portfolio of Mirko Longhi, SAP Integration Architect and Technical Lead.',
    homeAriaLabel: 'Back to top', navigationAriaLabel: 'Main navigation', themeToggleAriaLabel: 'Enable dark theme',
    navProfile: 'Profile', navSkills: 'Skills', navExperience: 'Experience', navContact: 'Contact', downloadCv: 'Download CV',
    role: 'SAP Integration Architect / Technical Lead', heroTitle: 'I connect systems.<br><em>I unlock possibilities.</em>',
    heroLead: 'I am Mirko Longhi, an SAP Integration Architect and Technical Lead. I design reliable connections between platforms, people, and complex processes.',
    talk: "Let's talk", discover: 'Explore my journey', profileAriaLabel: 'Professional profile summary', consoleProfile: 'PROFILE / 2026',
    profilePhotoAlt: 'Portrait of Mirko Longhi', basedIn: 'BASED IN', experienceLabel: 'EXPERIENCE', experienceYears: '8+ YEARS',
    strengthsAriaLabel: 'Key strengths', yearsExperience: 'years of experience', enterpriseIntegrations: 'enterprise integrations', certifications2026: 'certifications in 2026',
    profile: 'Profile', profileTitle: 'Complexity,<br><em>made legible.</em>',
    profileLead: 'I turn complex SAP landscapes into ecosystems that communicate reliably. I lead every phase of a solution: analysis, architecture, development, delivery, and customer support.',
    profileBody: 'I also work in presales, technical workshops, and mentoring, with particular attention to code quality, maintainability, and scalability.',
    skills: 'Skills',
    sapCloud: 'SAP BTP, Integration Suite, Cloud Integration, API Management, Integration Advisor, Cloud Connector, S/4HANA, ECC, SuccessFactors, SAP Sales and Service Cloud (C4C), and SAP CPQ.',
    enterpriseIntegration: 'Enterprise Integration', enterpriseIntegrationBody: 'REST, OData, SOAP, GraphQL, RFC, JDBC, IDoc, EDIFACT, AS2, and B2B/B2G integrations.',
    development: 'Development', developmentBody: 'Groovy, XSLT, ABAP, advanced mapping, scripting, data transformation, and API orchestration.',
    security: 'Security', securityBody: 'OAuth 2.0, SAML, keystore, truststore, and secure hybrid landscape configuration.',
    experience: 'Experience', currentPeriod: '01 / 2018 — PRESENT',
    job1: 'I design scalable integration architectures on SAP BTP and SAP Integration Suite.',
    job2: 'I build iFlow processes with routing, mapping, and advanced Groovy and XSLT transformations.',
    jobInnovation: 'I explore and assess technical solutions, turning them into patterns, best practices, templates, and guidelines that make the team’s work more effective and consistent.',
    jobTools: 'I build internal tools for technical teams, including web applications to document CPI tenants and compare deployments and versions across test and production environments.',
    job3: 'I integrate S/4HANA, ECC, SuccessFactors, SAP Sales and Service Cloud (C4C), SAP CPQ, and third-party applications through APIs and enterprise protocols.',
    job4: 'I implement B2B/B2G integrations for international e-invoicing processes.',
    job5: 'I support presales, proofs of concept, and technical workshops with customers and stakeholders.',
    job6: 'I support team growth through training, code review, and mentoring.',
    internTitle: 'ABAP Developer <em>Intern</em>', internJob1: 'Developed ABAP programs and managed data through the SAP Data Dictionary.',
    internJob2: 'Created ALV reports, SAPscript, and Smart Forms.', internJob3: 'Implemented ABAP Objects logic and optimized performance.',
    studentWorkPeriod: '2012 — 2017', studentWorkContext: 'WHILE STUDYING AT UNIVERSITY',
    studentWorkTitle: 'Professional experience<br><em>while studying</em>',
    studentWorkIntro: 'Alongside my university studies, I held several roles that developed reliability, independence, and a strong focus on people.',
    studentWorkRoles: 'Airport check-in agent, postal worker, parking attendant and shuttle driver, carpenter, and tobacco shop assistant.',
    certificationsLabel: 'CERTIFICATIONS / 2026', certificationsTitle: 'Build expertise.<br><em>Prove it.</em>',
    beyondCode: 'Beyond code', beyondCodeTitle: 'Curiosity,<br><em>grounded.</em>',
    beyondCodeBody: 'The same attention I bring to systems follows me outside work: mountains, music, and cooking.',
    interest1: 'Mountain biking & outdoors', interest2: 'Alto saxophone', interest3: 'Cooking and new recipes',
    contactLabel: '05 / CONTACT', contactTitle: 'Have a system<br>to <em>connect?</em>',
    location: 'Jerago con Orago, VA · Italy', footerTagline: 'Designed for meaningful connections.'
  }
};

const getPreference = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const savePreference = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The website works normally when storage is unavailable.
  }
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  const language = document.documentElement.lang || 'it';
  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? (language === 'it' ? 'Attiva tema chiaro' : 'Enable light theme') : translations[language].themeToggleAriaLabel);
  }
  savePreference('theme', theme);
};

const setLanguage = (language) => {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = copy[element.dataset.i18nHtml]; });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => { element.setAttribute('content', copy[element.dataset.i18nContent]); });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.setAttribute('alt', copy[element.dataset.i18nAlt]); });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => { element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]); });
  if (languageToggle) {
    const isEnglish = language === 'en';
    languageToggle.textContent = isEnglish ? 'IT' : 'EN';
    languageToggle.setAttribute('aria-label', isEnglish ? 'Passa all’italiano' : 'Switch to English');
  }
  setTheme(document.documentElement.dataset.theme || 'light');
  savePreference('language', language);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

setTheme(getPreference('theme', 'light'));
setLanguage(getPreference('language', 'it'));

themeToggle?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
languageToggle?.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'it' : 'en'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
