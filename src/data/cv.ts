import type { TechId } from './tech'

export type Lang = 'en' | 'es'

export const languages: { code: Lang; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
]

export type NavItem = {
  id: string
  label: string
}

export type Project = {
  name: string
  description: string
  /** Scope and honesty about it: solo/team, rough timeframe. */
  context: string
  tech: string[]
  /** What was hard, or what it taught. Optional but valuable. */
  learned?: string
  repo?: string
  demo?: string
}

export type Principle = {
  title: string
  body: string
}

export type SkillGroup = {
  category: string
  items: TechId[]
}

export type Study = {
  period: string
  /** Free-text rail label, e.g. "Degree", "Competition", "Community service". */
  track: string
  qualification: string
  /** Omitted where there is no institution — self-directed entries have none. */
  institution?: string
  detail?: string
  /** Short supporting list, rendered like a project's tech line. */
  items?: string[]
  /** Link to the supporting document (certificate, official letter). */
  proof?: string
}

export type Certification = {
  /** Course title exactly as printed on the certificate. */
  title: string
  issuer: string
  /** Completion month; formatted per language at render time. */
  date: { year: number; month: number }
  /** First-page thumbnail. */
  image: string
  /** The PDF, or the issuer's verification page. */
  href: string
  verifiedOn?: 'Credly'
}

export type Training = {
  heading: string
  intro: string
  items: Certification[]
}

export type MediaItem =
  | { kind: 'image'; src: string; thumb: string; alt: string; caption: string }
  | { kind: 'video'; src: string; poster: string; alt: string; caption: string }

export type Interest = {
  icon: 'learn' | 'gym' | 'bike' | 'football'
  title: string
  body: string
}

export type About = {
  portraitAlt: string
  intro: string
  interests: Interest[]
  galleryHeading: string
  gallery: MediaItem[]
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

/** Interface copy that is not CV content: buttons, labels, screen-reader text. */
export type UiStrings = {
  skipLink: string
  mainNav: string
  languageSwitch: string
  openMenu: string
  closeMenu: string
  getInTouch: string
  profileDetails: string
  location: string
  studying: string
  lookingFor: string
  elsewhere: string
  opensInNewTab: string
  code: string
  liveDemo: string
  codeFor: (project: string) => string
  demoOf: (project: string) => string
  techUsedIn: (project: string) => string
  copyEmail: string
  copied: string
  downloadCv: string
  /** File name stem under /cv/, e.g. Richart-Vazquez-CV-EN.pdf */
  cvFile: string
  cvProfile: string
  stackHeading: string
  mernCaption: string
  viewCertificate: string
  verifyOn: (platform: string) => string
  viewDocument: string
  playVideo: string
  closeDialog: string
  previous: string
  next: string
  sections: {
    work: string
    story: string
    about: string
    approach: string
    skills: string
    journey: string
    contact: string
  }
}

export type Content = {
  meta: { title: string; description: string }
  ui: UiStrings
  navItems: NavItem[]
  profile: {
    name: string
    /** Leading part of the name that fits the phone header. */
    shortName: string
    title: string
    tagline: string
    location: string
    status: string
    objective: string
    about: string[]
  }
  projects: Project[]
  principles: Principle[]
  skills: SkillGroup[]
  about: About
  journey: Study[]
  training: Training
  contactIntro: string
  contactLinks: ContactLink[]
}

/* ------------------------------------------------ Language-neutral data */

const name = 'Richart Vázquez de la Torre'
const shortName = 'Richart Vázquez'

const repos = {
  nbaStats: 'https://github.com/RichartVT/nbastats',
  evaluacionEgreso: 'https://github.com/RichartVT/evaluacion-egreso',
  homeBites: 'https://github.com/RichartVT/home-bites',
  runtahPedia: 'https://github.com/RichartVT/flutter_runtahpedia',
}

const tech = {
  nbaStats: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'],
  flightBook: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
  runtahPedia: [
    'Flutter',
    'Dart',
    'Firebase Authentication',
    'SQLite',
    'Provider',
    'MVVM',
  ],
  dataWarehouse: ['SQL Server', 'SSIS', 'SSAS', 'SQL', 'OLAP'],
  evaluacionEgreso: ['Node.js', 'Express', 'MySQL', 'JWT', 'bcrypt', 'Nodemailer'],
  homeBites: [
    'Flutter',
    'Dart',
    'Firebase',
    'Cloud Messaging',
    'Stripe',
    'Provider',
  ],
}

/** No proficiency labels by design — the grouping is the only claim made. */
const skillItems = {
  languages: ['javascript', 'typescript', 'python', 'java', 'dart', 'sql'],
  frontend: ['react', 'astro', 'flutter'],
  backend: ['nodejs', 'express', 'fastapi'],
  data: ['postgresql', 'mysql', 'sqlserver', 'mongodb', 'powerbi', 'dbeaver'],
  cloud: ['aws', 'docker', 'git'],
} satisfies Record<string, TechId[]>

const portrait = '/images/me/portrait.webp'
export const portraitSrcSet =
  '/images/me/portrait-800.webp 800w, /images/me/portrait.webp 1600w'
export const avatar = '/images/me/avatar.webp'
export { portrait }

const life = (name: string) => ({
  src: `/images/life/${name}.webp`,
  thumb: `/images/life/${name}-sm.webp`,
})
const clip = (name: string) => ({
  src: `/videos/${name}.mp4`,
  poster: `/videos/${name}-poster.webp`,
})

const cert = (slug: string) => ({
  image: `/certificates/${slug}.webp`,
  href: `/certificates/${slug}.pdf`,
})

/**
 * Every entry here is backed by a certificate on file. Most recent first.
 * The Cisco CCNA entries are Networking Academy course completions, not the
 * standalone CCNA certification exam, so they keep Cisco's course names.
 */
const certifications: Certification[] = [
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    date: { year: 2026, month: 7 },
    ...cert('cisco-ccna-enterprise'),
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: { year: 2026, month: 7 },
    ...cert('cisco-ccna-switching'),
  },
  {
    title: 'Node: De cero a experto',
    issuer: 'Udemy · DevTalles',
    date: { year: 2026, month: 9 },
    ...cert('udemy-node'),
  },
  {
    title: 'Aprende JavaScript ES9, HTML, CSS3 y NodeJS desde cero',
    issuer: 'Udemy',
    date: { year: 2026, month: 9 },
    ...cert('udemy-javascript-es9'),
  },
  {
    title: 'Introducción a la IA moderna',
    issuer: 'Cisco Networking Academy',
    date: { year: 2025, month: 11 },
    ...cert('cisco-intro-modern-ai'),
  },
  {
    title: 'Introducción al Internet de las Cosas y Transformación Digital',
    issuer: 'Cisco Networking Academy',
    date: { year: 2025, month: 11 },
    ...cert('cisco-intro-iot'),
  },
  {
    title: 'Analyze BigQuery Data in Connected Sheets',
    issuer: 'Google Cloud',
    date: { year: 2025, month: 5 },
    image: '/certificates/google-bigquery.webp',
    href: 'https://www.credly.com/badges/fb0acaa6-78a6-410f-afc7-d33b78fb65c2',
    verifiedOn: 'Credly',
  },
  {
    title: 'React: De cero a experto (Hooks y MERN)',
    issuer: 'Udemy',
    date: { year: 2021, month: 4 },
    ...cert('udemy-react-mern'),
  },
  {
    title: 'JavaScript Moderno: Guía para dominar el lenguaje',
    issuer: 'Udemy',
    date: { year: 2020, month: 12 },
    ...cert('udemy-javascript-moderno'),
  },
  {
    title: 'Ultimate JavaScript Part 2: Advanced Topics',
    issuer: 'Code with Mosh',
    date: { year: 2020, month: 11 },
    ...cert('mosh-javascript-2'),
  },
  {
    title: 'Ultimate JavaScript Part 1: Fundamentals',
    issuer: 'Code with Mosh',
    date: { year: 2020, month: 11 },
    ...cert('mosh-javascript-1'),
  },
  {
    title: 'Complete Python Mastery',
    issuer: 'Code with Mosh',
    date: { year: 2020, month: 10 },
    ...cert('mosh-python'),
  },
]

const proofs = {
  hackatec: '/certificates/hackatec-2022.pdf',
  socialService: '/certificates/servicio-social.pdf',
}

const email = 'richartvdt@gmail.com'
const github = 'github.com/RichartVT'

/* --------------------------------------------------------------- English */

const en: Content = {
  meta: {
    title: `${name} — Software Developer`,
    description:
      'Software Developer and Computer Systems Engineering student focused on full-stack development and data, seeking a professional residency or internship.',
  },
  ui: {
    skipLink: 'Skip to content',
    mainNav: 'Main',
    languageSwitch: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    getInTouch: 'Get in touch',
    profileDetails: 'Profile details',
    location: 'Location',
    studying: 'Studying',
    lookingFor: 'Looking for',
    elsewhere: 'Elsewhere',
    opensInNewTab: '(opens in a new tab)',
    code: 'Code',
    liveDemo: 'Live demo',
    codeFor: (project) => `for ${project}`,
    demoOf: (project) => `of ${project}`,
    techUsedIn: (project) => `Technologies used in ${project}`,
    copyEmail: 'Copy email',
    copied: 'Copied',
    downloadCv: 'Download CV',
    cvFile: '/cv/Richart-Vazquez-CV-EN.pdf',
    cvProfile: 'Profile',
    stackHeading: 'Stack',
    mernCaption: 'MongoDB · Express · React · Node.js',
    viewCertificate: 'View certificate',
    verifyOn: (platform) => `Verify on ${platform}`,
    viewDocument: 'View certificate',
    playVideo: 'Play video',
    closeDialog: 'Close',
    previous: 'Previous',
    next: 'Next',
    sections: {
      work: 'Selected Work',
      story: 'My Story',
      about: 'About Me',
      approach: 'How I Work',
      skills: 'Technical Skills',
      journey: 'Journey',
      contact: 'Contact',
    },
  },
  navItems: [
    { id: 'work', label: 'Work' },
    { id: 'story', label: 'Story' },
    { id: 'about', label: 'About' },
    { id: 'approach', label: 'Approach' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
  profile: {
    name,
    shortName,
    title: 'Software Developer',
    tagline:
      'I build software to learn deeply, connecting full-stack development, data, and continuous improvement.',
    location: 'México',
    status:
      'Computer Systems Engineering student at Instituto Tecnológico de Celaya.',
    objective:
      'Seeking a professional residency or first software development opportunity starting in December 2026, with a particular interest in full-stack development and data.',
    about: [
      'Programming entered my life during the 2020–2021 pandemic, when I had just started studying Economics at UNAM. With more time at home, I decided I wanted to build a website and began learning programming on my own. One of the things that immediately caught my attention was seeing a line of HTML turn into something visible in the browser. I liked the direct connection between an idea, the code I wrote and the result it produced.',
      'What began as curiosity eventually changed the direction I wanted for my career. I continued learning programming independently and, in 2022, began studying Computer Systems Engineering. Since then, I have combined my university education with self-directed learning. The university has given me important foundations, while courses, documentation and personal projects have allowed me to explore technologies that are not always part of the classroom.',
      'Today, I am especially interested in full-stack development and data. I enjoy learning how the different pieces of a system connect: interfaces, APIs, databases and the information that moves through them. I am looking for my first professional opportunity where I can contribute what I already know while continuing to learn from real software development.',
    ],
  },
  projects: [
    {
      name: 'NBA Stats / NBA Analytics',
      description:
        'A full-stack NBA analytics platform that turns five seasons of data into player and team analysis, reliability studies and out-of-sample game forecasts through a FastAPI backend and React/TypeScript interface.',
      context: 'Personal project · Ongoing development',
      tech: tech.nbaStats,
      learned:
        'This project has taught me how much the quality of a data product depends on decisions made before the information ever reaches the interface: how data is modeled, ingested, queried and optimized. It is also the clearest example of how I tend to keep iterating on something even after the first version works.',
      repo: repos.nbaStats,
    },
    {
      name: 'Evaluación de Atributos de Egreso',
      description:
        'A web platform built during my social service to assess the knowledge expected of graduating students. Students request access and answer a survey per course; coordinators manage courses, attributes, criteria and levels; administrators manage degree programs, students and users and review dashboard reports.',
      context: 'Social service project · Instituto Tecnológico de Celaya',
      tech: tech.evaluacionEgreso,
      learned:
        'My first system designed around several roles. I built role-based access with JWT stored in HTTP-only cookies, hashed passwords with bcrypt, rate-limited the access-request endpoint and emailed students a temporary password, which made security a design decision from the start rather than an afterthought.',
      repo: repos.evaluacionEgreso,
    },
    {
      name: 'FlightBookApp',
      description:
        'A full-stack airline management and booking application covering several connected business flows, including users, airports, routes, aircraft, flights, seats, reservations, boarding passes, baggage and payments.',
      context: 'Academic / software development project',
      tech: tech.flightBook,
      learned:
        'Building FlightBookApp helped me understand how the different layers of an application depend on one another. It required connecting frontend interactions, backend APIs, authentication, relational data and multiple business entities rather than treating each part as an isolated exercise.',
    },
    {
      name: 'RuntahPedia',
      description:
        'A cross-platform mobile application that combines sustainable e-commerce with environmental content. Users can authenticate, browse products, manage a shopping cart and purchase history, read environmental news and create their own publications.',
      context: 'Mobile development project',
      tech: tech.runtahPedia,
      learned:
        'RuntahPedia taught me how concepts such as state management, persistence, authentication and separation of concerns translate into mobile development. It also gave me experience organizing an application around an MVVM-style architecture rather than putting business logic directly into the interface.',
      repo: repos.runtahPedia,
    },
    {
      name: 'HomeBites',
      description:
        'A mobile app for ordering home-cooked food. Users browse kitchens and dishes, save favorites, pay through Stripe, subscribe to a plan and follow their order until it is delivered, with push notifications along the way.',
      context: 'Mobile development project',
      tech: tech.homeBites,
      learned:
        "HomeBites was my first app with real payments: Stripe's PaymentSheet backed by a server-side payment intent, plus Firebase Cloud Messaging for notifications. I organized the code by feature (auth, products, orders, payments) so each part could grow without tangling the others.",
      repo: repos.homeBites,
    },
    {
      name: 'Data Warehouse / Business Intelligence',
      description:
        'A data warehousing and business intelligence project focused on extracting, transforming and loading data and then analyzing it through multidimensional models.',
      context: 'Academic data project',
      tech: tech.dataWarehouse,
      learned:
        'This project introduced me to the difference between storing transactional data and preparing information specifically for analysis. I worked with ETL processes, dimensional structures and OLAP concepts, which helped strengthen my interest in data-oriented software.',
    },
  ],
  /**
   * Only traits with evidence behind them. Each body cites something real —
   * a project, a competition, something learned without a course.
   */
  principles: [
    {
      title: 'Self-directed',
      body: 'My path into programming started before my current degree. I began learning Python, JavaScript and web development independently and have continued using courses, documentation and projects to explore technologies beyond my university curriculum.',
    },
    {
      title: 'Build to learn',
      body: 'Courses and documentation give me a foundation, but I understand technologies best when I have to use them to solve a real problem. Projects such as FlightBookApp, RuntahPedia and NBA Stats have been where concepts from different areas finally connect.',
    },
    {
      title: 'Always iterating',
      body: 'I rarely consider the first working version to be the final one. When something works, I tend to look for what can be improved next. My NBA statistics project is the clearest example: I have continued revisiting its structure, data model and implementation as I learn better ways to solve the same problems.',
    },
  ],
  skills: [
    { category: 'Languages', items: skillItems.languages },
    { category: 'Frontend & Mobile', items: skillItems.frontend },
    { category: 'Backend', items: skillItems.backend },
    { category: 'Data', items: skillItems.data },
    { category: 'Cloud & Tools', items: skillItems.cloud },
  ],
  /**
   * Formal education and independent learning on one timeline, oldest first so
   * the two tracks read as having progressed in parallel.
   */
  journey: [
    {
      period: '2020',
      track: 'Self-directed',
      qualification: 'Self-directed start',
      detail:
        'Started learning programming independently while studying Economics at UNAM.',
      items: ['Python', 'JavaScript', 'Web fundamentals'],
    },
    {
      period: '2021',
      track: 'Self-directed',
      qualification: 'Web development',
      detail:
        'Continued independent learning focused on modern web development, including React.',
      items: ['React', 'JavaScript'],
    },
    {
      period: '2022 — December 2026',
      track: 'Degree',
      qualification: 'Computer Systems Engineering',
      institution: 'Instituto Tecnológico de Celaya',
      detail:
        'Formal education in software development, computer science, databases, networking and related areas. Expected completion: December 2026.',
    },
    {
      period: '2022',
      track: 'Competition',
      qualification: 'Hackatec',
      detail:
        'Participated in the local phase of Hackatec as part of the National Summit of Technological Development, Research and Innovation.',
      proof: proofs.hackatec,
    },
    {
      period: '2025 — 2026',
      track: 'Community service',
      qualification: 'Open-source community service',
      institution: 'Promoción de la Cultura de Software Libre',
      detail:
        'Completed 480 hours of social service involving collaboration around free software, prototyping or implementation of useful functionality, research and knowledge sharing.',
      proof: proofs.socialService,
    },
  ],
  training: {
    heading: 'Certifications & courses',
    intro:
      'Courses I completed alongside my degree. Each one links to its certificate.',
    items: certifications,
  },
  about: {
    portraitAlt: 'Richart with his mountain bike on a ride with friends',
    intro:
      'Besides programming, I like to keep learning and stay active: I go to the gym, play football and head out on bike routes. Different things, but they reward the same habit: showing up consistently and getting a bit better each time.',
    interests: [
      {
        icon: 'learn',
        title: 'Always learning',
        body: 'I enjoy picking up new technologies on my own: reading the docs, trying the tools and building something small to understand how they really work.',
      },
      {
        icon: 'gym',
        title: 'Gym & exercise',
        body: "I train five times a week and like staying active in general. It taught me that discipline outlasts motivation: progress comes from showing up, especially on the days I don't feel like it.",
      },
      {
        icon: 'football',
        title: 'Football',
        body: 'I play it and I follow it. In 2026 I fulfilled a dream: I was lucky enough to win World Cup tickets and watched matches live in Monterrey and at Estadio Azteca, including Mexico vs. England. Being in the stadium for a World Cup at home is something I will never forget.',
      },
      {
        icon: 'bike',
        title: 'Bike routes',
        body: 'I like heading out on routes by bike. It is how I disconnect and come back with a clearer head.',
      },
    ],
    galleryHeading: 'World Cup 2026',
    gallery: [
      {
        kind: 'image',
        ...life('worldcup-monterrey-stadium'),
        alt: 'Estadio Monterrey before kickoff, with the Cerro de la Silla behind the roof',
        caption: 'Monterrey',
      },
      {
        kind: 'video',
        ...clip('worldcup-monterrey'),
        alt: 'Fans celebrating at pitch level in Monterrey',
        caption: 'Monterrey',
      },
      {
        kind: 'image',
        ...life('worldcup-monterrey-match'),
        alt: 'Opening ceremony in Monterrey with a giant flag on the pitch',
        caption: 'Monterrey',
      },
      {
        kind: 'image',
        ...life('worldcup-azteca'),
        alt: 'Mexico and England flags laid out on the pitch at Estadio Azteca before the match',
        caption: 'Mexico vs. England · Estadio Azteca',
      },
      {
        kind: 'video',
        ...clip('worldcup-cdmx'),
        alt: 'A penalty kick seen from the stands in Mexico City',
        caption: 'Mexico City',
      },
      {
        kind: 'image',
        ...life('worldcup-players'),
        alt: 'Two Mexico players waving to the crowd after the match against England',
        caption: 'Mexico vs. England · Estadio Azteca',
      },
    ],
  },
  contactIntro:
    'I am currently looking for a professional residency, internship or first software development opportunity where I can contribute to real projects and continue growing as a developer. I am especially interested in full-stack and data-oriented work. Available for professional residency opportunities starting in December 2026.',
  /** LinkedIn omitted — no profile exists yet, so no placeholder row. */
  contactLinks: [
    { label: 'Email', value: email, href: `mailto:${email}` },
    { label: 'GitHub', value: github, href: `https://${github}` },
  ],
}

/* --------------------------------------------------------------- Español */

const es: Content = {
  meta: {
    title: `${name} — Desarrollador de Software`,
    description:
      'Desarrollador de software y estudiante de Ingeniería en Sistemas Computacionales enfocado en desarrollo full-stack y datos, en busca de residencia profesional o prácticas.',
  },
  ui: {
    skipLink: 'Saltar al contenido',
    mainNav: 'Principal',
    languageSwitch: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    getInTouch: 'Contáctame',
    profileDetails: 'Datos del perfil',
    location: 'Ubicación',
    studying: 'Estudios',
    lookingFor: 'Qué busco',
    elsewhere: 'Links',
    opensInNewTab: '(se abre en una pestaña nueva)',
    code: 'Código',
    liveDemo: 'Demo',
    codeFor: (project) => `de ${project}`,
    demoOf: (project) => `de ${project}`,
    techUsedIn: (project) => `Tecnologías usadas en ${project}`,
    copyEmail: 'Copiar email',
    copied: 'Copiado',
    downloadCv: 'Descargar CV',
    cvFile: '/cv/Richart-Vazquez-CV-ES.pdf',
    cvProfile: 'Perfil',
    stackHeading: 'Stack',
    mernCaption: 'MongoDB · Express · React · Node.js',
    viewCertificate: 'Ver certificado',
    verifyOn: (platform) => `Verificar en ${platform}`,
    viewDocument: 'Ver constancia',
    playVideo: 'Reproducir video',
    closeDialog: 'Cerrar',
    previous: 'Anterior',
    next: 'Siguiente',
    sections: {
      work: 'Proyectos destacados',
      story: 'Mi historia',
      about: 'Sobre mí',
      approach: 'Cómo trabajo',
      skills: 'Habilidades técnicas',
      journey: 'Trayectoria',
      contact: 'Contacto',
    },
  },
  navItems: [
    { id: 'work', label: 'Proyectos' },
    { id: 'story', label: 'Historia' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'approach', label: 'Enfoque' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'journey', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
  ],
  profile: {
    name,
    shortName,
    title: 'Desarrollador de Software',
    tagline:
      'Construyo software para aprender a fondo, conectando el desarrollo full-stack, los datos y la mejora continua.',
    location: 'México',
    status:
      'Estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Celaya.',
    objective:
      'Residencia profesional o primer empleo como desarrollador de software a partir de diciembre de 2026, idealmente en full-stack y datos.',
    about: [
      'La programación llegó a mi vida durante la pandemia de 2020–2021, cuando acababa de empezar a estudiar Economía en la UNAM. Con más tiempo en casa, decidí que quería construir un sitio web y empecé a aprender a programar por mi cuenta. Una de las cosas que más me llamó la atención fue ver cómo una línea de HTML se convertía en algo visible en el navegador. Me gustó esa conexión directa entre una idea, el código que escribía y el resultado que producía.',
      'Lo que empezó como curiosidad terminó cambiando el rumbo que quería para mi carrera. Seguí aprendiendo a programar de forma autodidacta y, en 2022, comencé a estudiar Ingeniería en Sistemas Computacionales. Desde entonces he combinado mi formación universitaria con el aprendizaje autodirigido. La universidad me ha dado bases importantes, mientras que los cursos, la documentación y los proyectos personales me han permitido explorar tecnologías que no siempre forman parte del aula.',
      'Hoy me interesan especialmente el desarrollo full-stack y los datos. Disfruto entender cómo se conectan las distintas piezas de un sistema: interfaces, APIs, bases de datos y la información que fluye entre ellas. Busco mi primera oportunidad profesional, donde pueda aportar lo que ya sé mientras sigo aprendiendo del desarrollo de software real.',
    ],
  },
  projects: [
    {
      name: 'NBA Stats / NBA Analytics',
      description:
        'Una plataforma full-stack de análisis de la NBA que convierte cinco temporadas de datos en análisis de jugadores y equipos, estudios de confiabilidad y pronósticos de partidos fuera de muestra, con un backend en FastAPI y una interfaz en React/TypeScript.',
      context: 'Proyecto personal · En desarrollo continuo',
      tech: tech.nbaStats,
      learned:
        'Este proyecto me ha enseñado cuánto depende la calidad de un producto de datos de las decisiones que se toman antes de que la información llegue a la interfaz: cómo se modelan, ingieren, consultan y optimizan los datos. También es el ejemplo más claro de cómo suelo seguir iterando sobre algo incluso después de que la primera versión funciona.',
      repo: repos.nbaStats,
    },
    {
      name: 'Evaluación de Atributos de Egreso',
      description:
        'Una plataforma web que desarrollé durante mi servicio social para evaluar los conocimientos esperados en los egresados. Los alumnos solicitan acceso y responden una encuesta por materia; los coordinadores gestionan materias, atributos, criterios y niveles; los administradores gestionan carreras, alumnos y usuarios, y consultan reportes en un dashboard.',
      context: 'Proyecto de servicio social · Instituto Tecnológico de Celaya',
      tech: tech.evaluacionEgreso,
      learned:
        'Mi primer sistema diseñado alrededor de varios roles. Implementé acceso por rol con JWT en cookies HTTP-only, contraseñas cifradas con bcrypt, límite de solicitudes en el registro y envío de una contraseña temporal por correo; la seguridad fue una decisión de diseño desde el inicio, no un agregado al final.',
      repo: repos.evaluacionEgreso,
    },
    {
      name: 'FlightBookApp',
      description:
        'Una aplicación full-stack de gestión y reservas para una aerolínea que abarca varios flujos de negocio conectados: usuarios, aeropuertos, rutas, aeronaves, vuelos, asientos, reservaciones, pases de abordar, equipaje y pagos.',
      context: 'Proyecto académico / de desarrollo de software',
      tech: tech.flightBook,
      learned:
        'Construir FlightBookApp me ayudó a entender cómo dependen entre sí las distintas capas de una aplicación. Requirió conectar interacciones del frontend, APIs del backend, autenticación, datos relacionales y múltiples entidades de negocio, en lugar de tratar cada parte como un ejercicio aislado.',
    },
    {
      name: 'RuntahPedia',
      description:
        'Una aplicación móvil multiplataforma que combina comercio electrónico sustentable con contenido ambiental. Los usuarios pueden autenticarse, explorar productos, gestionar un carrito y su historial de compras, leer noticias ambientales y crear sus propias publicaciones.',
      context: 'Proyecto de desarrollo móvil',
      tech: tech.runtahPedia,
      learned:
        'RuntahPedia me enseñó cómo conceptos como el manejo de estado, la persistencia, la autenticación y la separación de responsabilidades se traducen al desarrollo móvil. También me dio experiencia organizando una aplicación con una arquitectura tipo MVVM, en lugar de poner la lógica de negocio directamente en la interfaz.',
      repo: repos.runtahPedia,
    },
    {
      name: 'HomeBites',
      description:
        'Una app móvil para pedir comida casera. Los usuarios exploran cocinas y platillos, guardan favoritos, pagan con Stripe, se suscriben a un plan y siguen su pedido hasta la entrega, con notificaciones push en el camino.',
      context: 'Proyecto de desarrollo móvil',
      tech: tech.homeBites,
      learned:
        'HomeBites fue mi primera app con pagos reales: PaymentSheet de Stripe respaldado por un payment intent en el servidor, más Firebase Cloud Messaging para las notificaciones. Organicé el código por funcionalidad (auth, productos, pedidos, pagos) para que cada parte pudiera crecer sin enredarse con las demás.',
      repo: repos.homeBites,
    },
    {
      name: 'Data Warehouse / Business Intelligence',
      description:
        'Un proyecto de data warehousing e inteligencia de negocios enfocado en extraer, transformar y cargar datos, y luego analizarlos mediante modelos multidimensionales.',
      context: 'Proyecto académico de datos',
      tech: tech.dataWarehouse,
      learned:
        'Este proyecto me mostró la diferencia entre almacenar datos transaccionales y preparar información específicamente para el análisis. Trabajé con procesos ETL, estructuras dimensionales y conceptos OLAP, lo que fortaleció mi interés por el software orientado a datos.',
    },
  ],
  principles: [
    {
      title: 'Autodidacta',
      body: 'Mi camino en la programación empezó antes de mi carrera actual. Comencé a aprender Python, JavaScript y desarrollo web por mi cuenta, y he seguido usando cursos, documentación y proyectos para explorar tecnologías más allá del plan de estudios.',
    },
    {
      title: 'Construir para aprender',
      body: 'Los cursos y la documentación me dan una base, pero entiendo mejor una tecnología cuando tengo que usarla para resolver un problema real. Proyectos como FlightBookApp, RuntahPedia y NBA Stats han sido donde finalmente se conectan conceptos de distintas áreas.',
    },
    {
      title: 'Siempre iterando',
      body: 'Rara vez considero que la primera versión que funciona sea la final. Cuando algo funciona, suelo buscar qué se puede mejorar después. Mi proyecto de estadísticas de la NBA es el ejemplo más claro: he seguido revisando su estructura, su modelo de datos y su implementación conforme aprendo mejores formas de resolver los mismos problemas.',
    },
  ],
  skills: [
    { category: 'Lenguajes', items: skillItems.languages },
    { category: 'Frontend & Mobile', items: skillItems.frontend },
    { category: 'Backend', items: skillItems.backend },
    { category: 'Datos', items: skillItems.data },
    { category: 'Cloud y herramientas', items: skillItems.cloud },
  ],
  journey: [
    {
      period: '2020',
      track: 'Autodidacta',
      qualification: 'Inicio autodidacta',
      detail:
        'Empecé a aprender programación por mi cuenta mientras estudiaba Economía en la UNAM.',
      items: ['Python', 'JavaScript', 'Web fundamentals'],
    },
    {
      period: '2021',
      track: 'Autodidacta',
      qualification: 'Desarrollo web',
      detail:
        'Continué aprendiendo por mi cuenta, enfocado en desarrollo web moderno, incluido React.',
      items: ['React', 'JavaScript'],
    },
    {
      period: '2022 — diciembre 2026',
      track: 'Carrera',
      qualification: 'Ingeniería en Sistemas Computacionales',
      institution: 'Instituto Tecnológico de Celaya',
      detail:
        'Formación en desarrollo de software, ciencias de la computación, bases de datos, redes y áreas relacionadas. Fecha estimada de término: diciembre de 2026.',
    },
    {
      period: '2022',
      track: 'Competencia',
      qualification: 'Hackatec',
      detail:
        'Participé en la etapa local de Hackatec, parte de la Cumbre Nacional de Desarrollo Tecnológico, Investigación e Innovación.',
      proof: proofs.hackatec,
    },
    {
      period: '2025 — 2026',
      track: 'Servicio social',
      qualification: 'Servicio social en software libre',
      institution: 'Promoción de la Cultura de Software Libre',
      detail:
        'Completé 480 horas de servicio social colaborando en torno al software libre: prototipado o implementación de funcionalidades útiles, investigación y difusión de conocimiento.',
      proof: proofs.socialService,
    },
  ],
  training: {
    heading: 'Certificaciones y cursos',
    intro:
      'Cursos que completé en paralelo a la carrera. Cada uno enlaza a su certificado.',
    items: certifications,
  },
  about: {
    portraitAlt: 'Richart con su bicicleta de montaña en una ruta con amigos',
    intro:
      'Además de programar, me gusta seguir aprendiendo y mantenerme activo: voy al gimnasio, juego fútbol y salgo de ruta en bici. Son cosas distintas, pero premian el mismo hábito: ser constante y mejorar un poco cada vez.',
    interests: [
      {
        icon: 'learn',
        title: 'Aprender siempre',
        body: 'Disfruto aprender tecnologías nuevas por mi cuenta: leer la documentación, probar las herramientas y construir algo pequeño para entender cómo funcionan de verdad.',
      },
      {
        icon: 'gym',
        title: 'Gimnasio y ejercicio',
        body: 'Entreno cinco veces por semana y en general me gusta mantenerme activo. Me enseñó que la disciplina dura más que la motivación: el progreso llega por presentarse, sobre todo los días que no tengo ganas.',
      },
      {
        icon: 'football',
        title: 'Fútbol',
        body: 'Me gusta jugarlo y seguirlo. En 2026 cumplí un sueño: tuve la suerte de ganarme boletos para el Mundial y vi partidos en vivo en Monterrey y en el Estadio Azteca, incluido el México vs. Inglaterra. Estar en el estadio en un Mundial en casa es algo que nunca voy a olvidar.',
      },
      {
        icon: 'bike',
        title: 'Rutas en bici',
        body: 'Me gusta salir de ruta en bici. Es mi forma de desconectarme y volver con la cabeza más clara.',
      },
    ],
    galleryHeading: 'Mundial 2026',
    gallery: [
      {
        kind: 'image',
        ...life('worldcup-monterrey-stadium'),
        alt: 'El Estadio Monterrey antes del partido, con el Cerro de la Silla detrás del techo',
        caption: 'Monterrey',
      },
      {
        kind: 'video',
        ...clip('worldcup-monterrey'),
        alt: 'Aficionados celebrando a nivel de cancha en Monterrey',
        caption: 'Monterrey',
      },
      {
        kind: 'image',
        ...life('worldcup-monterrey-match'),
        alt: 'Ceremonia previa en Monterrey con una bandera gigante sobre la cancha',
        caption: 'Monterrey',
      },
      {
        kind: 'image',
        ...life('worldcup-azteca'),
        alt: 'Las banderas de México e Inglaterra extendidas en la cancha del Estadio Azteca antes del partido',
        caption: 'México vs. Inglaterra · Estadio Azteca',
      },
      {
        kind: 'video',
        ...clip('worldcup-cdmx'),
        alt: 'Un penal visto desde la tribuna en la Ciudad de México',
        caption: 'Ciudad de México',
      },
      {
        kind: 'image',
        ...life('worldcup-players'),
        alt: 'Dos jugadores de México saludan a la afición después del partido contra Inglaterra',
        caption: 'México vs. Inglaterra · Estadio Azteca',
      },
    ],
  },
  contactIntro:
    'Estoy buscando una residencia profesional, prácticas o mi primer empleo en desarrollo de software: un equipo donde pueda aportar en proyectos reales y seguir creciendo como desarrollador. Me interesa sobre todo el trabajo full-stack y con datos. Disponible a partir de diciembre de 2026.',
  contactLinks: [
    { label: 'Email', value: email, href: `mailto:${email}` },
    { label: 'GitHub', value: github, href: `https://${github}` },
  ],
}

export const content: Record<Lang, Content> = { en, es }
