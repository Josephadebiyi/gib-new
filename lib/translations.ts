export const translations = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      about: "About Us",
      howItWorks: "How It Works",
      faq: "FAQ",
      applyNow: "APPLY NOW",
    },
    hero: {
      title: "Global Tech Skills for the Real World",
      subtitle:
        "Master industry-demanded skills with hands-on projects, earn globally recognized certifications, and launch your tech career across Europe.",
      startJourney: "Start Your Journey",
      exploreCourses: "Explore Courses",
      euRecognized: "EU-Recognized Tech Education",
    },
    stats: {
      graduates: "Graduates",
      jobPlacement: "Job Placement",
      euCountries: "EU Countries",
    },
    stepByStep: {
      title: "Your Path to Tech Success",
      subtitle: "Follow our proven 6-step process to transform your career and join Europe's thriving tech industry",
      steps: {
        explore: { title: "Explore Courses", desc: "Browse our industry-aligned programs" },
        apply: { title: "Apply Online", desc: "Submit your application with €50 fee" },
        accepted: { title: "Get Accepted", desc: "Receive confirmation within 48 hours" },
        learn: { title: "Start Learning", desc: "Join live classes and hands-on projects" },
        certified: { title: "Get Certified", desc: "Earn industry-recognized credentials" },
        job: { title: "Land Your Job", desc: "Access our exclusive job placement network" },
      },
    },
    footer: {
      description:
        "Global Institute of Tech and Business - Empowering careers through technology education across Europe.",
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
    },
    hero: {
      title: "Globalūs technologijų įgūdžiai realiam pasauliui",
      subtitle:
        "Įvaldykite pramonės reikalaujamus įgūdžius su praktiniais projektais, gaukite globaliai pripažįstamus sertifikatus ir pradėkite technologijų karjerą Europoje.",
      startJourney: "Pradėti kelionę",
      exploreCourses: "Tyrinėti kursus",
      euRecognized: "ES pripažįstas technologijų švietimas",
    },
    stats: {
      graduates: "Absolventai",
      jobPlacement: "Darbo paskyrimas",
      euCountries: "ES šalys",
    },
    stepByStep: {
      title: "Jūsų kelias į technologijų sėkmę",
      subtitle: "Sekite mūsų išbandytą 6 žingsnių procesą, kad transformuotumėte savo karjerą",
      steps: {
        explore: { title: "Tyrinėti kursus", desc: "Naršykite mūsų pramonės programas" },
        apply: { title: "Registruotis", desc: "Pateikite paraišką su 50 € mokesčiu" },
        accepted: { title: "Būti priimtam", desc: "Gaukite patvirtinimą per 48 valandas" },
        learn: { title: "Pradėti mokytis", desc: "Prisijunkite prie tiesioginių pamokų" },
        certified: { title: "Gauti sertifikatą", desc: "Įgykite pramonės pripažįstamus įgaliojimus" },
        job: { title: "Rasti darbą", desc: "Naudokitės mūsų darbo tinklu" },
      },
    },
    footer: {
      description:
        "Globalus technologijų ir verslo institutas - suteikiame galimybes karjerai per technologijų švietimą Europoje.",
      quickLinks: "Greitos nuorodos",
      programs: "Programos",
      contact: "Kontaktai",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
