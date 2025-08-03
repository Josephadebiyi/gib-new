export const translations = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      about: "About Us",
      howItWorks: "How It Works",
      faq: "FAQ",
      applyNow: "APPLY NOW",
      registerNow: "REGISTER NOW",
    },
    banner: {
      action: "ACTION! Every participant receives a gift certificate for future studies!",
    },
    hero: {
      gatewayToExcellence: "Your Gateway to Excellence in",
      techBusiness: "Tech, Business,",
      andLanguage: "and Language!",
      jobReadySkills:
        "Master job-ready skills with industry-aligned programs, earn globally recognized certifications, and fast-track your entry into Europe's thriving job market.",
      euRecognized: "EU Recognized",
      jobPlacement: "92% Job Placement",
      europeAccess: "Europe Access",
      startJourney: "Start Your Journey",
      exploreCourses: "Explore Courses",
    },
    courses: {
      industryReady: "Industry-Ready",
      programs: "Programs",
      designedForSuccess: "Designed for success in today's competitive job market",
    },
    jobMarket: {
      europeOpportunity: "Europe's Tech Job Market Opportunity",
      demandGrowing:
        "The demand for skilled tech professionals in Europe is growing faster than ever. Position yourself for success with GITB.",
      whyChooseGitb: "Why Choose GITB?",
      industryAligned: "Industry-aligned curriculum with real-world projects",
      euRecognition: "EU-wide recognition and certification",
      careerSupport: "Dedicated career support and job placement",
      networkAccess: "Access to exclusive employer network",
    },
    students: {
      whereTheyWork: "Where Our",
      graduates: "Graduates Work",
      leadingCompanies: "Our alumni work at leading companies across Europe and beyond",
      techGiants: "Tech Giants",
      consulting: "Consulting Firms",
      startups: "Innovative Startups",
      successStories: "Success Stories",
    },
    partners: {
      trustedBy: "Trusted by",
      industry: "Industry Leaders",
      collaboration: "We collaborate with top companies to ensure our curriculum meets industry standards",
    },
    newsletter: {
      stayUpdated: "Stay Updated",
      getLatest: "Get the latest news about courses, job opportunities, and industry insights",
      fullName: "Full Name",
      email: "Email Address",
      subscribe: "Subscribe",
    },
    stats: {
      jobPlacement: "Job Placement Rate",
      avgSalary: "Average Starting Salary",
      euCountries: "EU Countries",
      partnerCompanies: "Partner Companies",
    },
    footer: {
      description:
        "Global Institute of Tech and Business - Your gateway to excellence in tech, business, and language education across Europe.",
      quickLinks: "Quick Links",
      programs: "Programs",
      contact: "Contact",
    },
  },
  lt: {
    nav: {
      home: "Pagrindinis",
      courses: "Kursai",
      about: "Apie mus",
      howItWorks: "Kaip tai veikia",
      faq: "DUK",
      applyNow: "REGISTRUOTIS",
      registerNow: "REGISTRUOTIS DABAR",
    },
    banner: {
      action: "AKCIJA! Kiekvienas dalyvis gauna dovanų sertifikatą būsimiems mokymams!",
    },
    hero: {
      gatewayToExcellence: "Jūsų kelias į puikumą",
      techBusiness: "technologijose, versle",
      andLanguage: "ir kalbose!",
      jobReadySkills:
        "Įvaldykite darbo rinkos reikalaujamus įgūdžius su pramonės programomis, gaukite globaliai pripažįstamus sertifikatus ir greitai patekite į klestintį Europos darbo rinką.",
      euRecognized: "ES pripažįsta",
      jobPlacement: "92% įdarbinimas",
      europeAccess: "Prieiga prie Europos",
      startJourney: "Pradėti kelionę",
      exploreCourses: "Tyrinėti kursus",
    },
    courses: {
      industryReady: "Pramonės poreikius atitinkančios",
      programs: "Programos",
      designedForSuccess: "Sukurtos sėkmei šiandienos konkurencingoje darbo rinkoje",
    },
    jobMarket: {
      europeOpportunity: "Europos technologijų darbo rinkos galimybės",
      demandGrowing:
        "Poreikis kvalifikuotiems technologijų specialistams Europoje auga greičiau nei kada nors. Pasiruoškite sėkmei su GITB.",
      whyChooseGitb: "Kodėl rinktis GITB?",
      industryAligned: "Pramonės poreikius atitinkanti programa su realiais projektais",
      euRecognition: "ES pripažinimas ir sertifikavimas",
      careerSupport: "Specializuota karjeros pagalba ir įdarbinimas",
      networkAccess: "Prieiga prie išskirtinio darbdavių tinklo",
    },
    students: {
      whereTheyWork: "Kur dirba mūsų",
      graduates: "absolventai",
      leadingCompanies: "Mūsų absolventai dirba pirmaujančiose kompanijose visoje Europoje ir už jos ribų",
      techGiants: "Technologijų gigantai",
      consulting: "Konsultacijų įmonės",
      startups: "Inovatyvūs startuoliai",
      successStories: "Sėkmės istorijos",
    },
    partners: {
      trustedBy: "Pasitiki",
      industry: "pramonės lyderiai",
      collaboration:
        "Bendradarbiaujame su pirmaujančiomis kompanijomis, kad užtikrintume programos atitikimą pramonės standartams",
    },
    newsletter: {
      stayUpdated: "Būkite informuoti",
      getLatest: "Gaukite naujausias žinias apie kursus, darbo galimybes ir pramonės įžvalgas",
      fullName: "Pilnas vardas",
      email: "El. pašto adresas",
      subscribe: "Prenumeruoti",
    },
    stats: {
      jobPlacement: "Įdarbinimo rodiklis",
      avgSalary: "Vidutinis pradinis atlyginimas",
      euCountries: "ES šalys",
      partnerCompanies: "Partnerių kompanijos",
    },
    footer: {
      description:
        "Globalus technologijų ir verslo institutas - jūsų kelias į puikumą technologijų, verslo ir kalbų švietimu visoje Europoje.",
      quickLinks: "Greitos nuorodos",
      programs: "Programos",
      contact: "Kontaktai",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
