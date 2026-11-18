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
  items: string[]
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
}

export type Training = {
  period: string
  heading: string
  items: string[]
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
  getInTouch: string
  viewWork: string
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
  sections: {
    work: string
    story: string
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
  journey: Study[]
  training: Training
  contactIntro: string
  contactLinks: ContactLink[]
}

/* ------------------------------------------------ Language-neutral data */

const name = 'Richart Vázquez de la Torre'

const repos = {
  nbaStats: 'https://github.com/RichartVT/nbastats',
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
}

/** No proficiency labels by design — the grouping is the only claim made. */
const skillItems = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  frontend: ['React', 'Flutter'],
  backend: ['Node.js', 'Express'],
  data: ['PostgreSQL', 'MySQL'],
  tools: ['Git', 'Docker'],
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
    getInTouch: 'Get in touch',
    viewWork: 'View work',
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
    sections: {
      work: 'Selected Work',
      story: 'My Story',
      approach: 'How I Work',
      skills: 'Technical Skills',
      journey: 'Journey',
      contact: 'Contact',
    },
  },
  navItems: [
    { id: 'work', label: 'Work' },
    { id: 'story', label: 'Story' },
    { id: 'approach', label: 'Approach' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ],
  profile: {
    name,
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
    { category: 'Tools & Platforms', items: skillItems.tools },
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
    },
    {
      period: '2025 — 2026',
      track: 'Community service',
      qualification: 'Open-source community service',
      institution: 'Promoción de la Cultura de Software Libre',
      detail:
        'Completed 480 hours of social service involving collaboration around free software, prototyping or implementation of useful functionality, research and knowledge sharing.',
    },
  ],
  /**
   * A compact supporting block, deliberately not a certificate list. The Cisco
   * entries are Networking Academy course completions — not the standalone
   * CCNA certification exam — so they are named as courses.
   */
  training: {
    period: 'Continuous learning',
    heading: 'Selected training',
    items: [
      'Python programming',
      'JavaScript fundamentals and advanced topics',
      'JavaScript Moderno',
      'React: De cero a experto',
      'Node: De cero a experto',
      'Google Cloud Computing Foundations',
      'Analyze BigQuery Data in Connected Sheets',
      'Gemini for Application Developers',
      'Cisco Networking Academy — CCNA: Switching, Routing, and Wireless Essentials',
      'Cisco Networking Academy — CCNA: Enterprise Networking, Security, and Automation',
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
    getInTouch: 'Contáctame',
    viewWork: 'Ver proyectos',
    profileDetails: 'Datos del perfil',
    location: 'Ubicación',
    studying: 'Estudios',
    lookingFor: 'Busco',
    elsewhere: 'En otros sitios',
    opensInNewTab: '(se abre en una pestaña nueva)',
    code: 'Código',
    liveDemo: 'Demo',
    codeFor: (project) => `de ${project}`,
    demoOf: (project) => `de ${project}`,
    techUsedIn: (project) => `Tecnologías usadas en ${project}`,
    sections: {
      work: 'Proyectos destacados',
      story: 'Mi historia',
      approach: 'Cómo trabajo',
      skills: 'Habilidades técnicas',
      journey: 'Trayectoria',
      contact: 'Contacto',
    },
  },
  navItems: [
    { id: 'work', label: 'Proyectos' },
    { id: 'story', label: 'Historia' },
    { id: 'approach', label: 'Enfoque' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'journey', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
  ],
  profile: {
    name,
    title: 'Desarrollador de Software',
    tagline:
      'Construyo software para aprender a fondo, conectando el desarrollo full-stack, los datos y la mejora continua.',
    location: 'México',
    status:
      'Estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Celaya.',
    objective:
      'Busco una residencia profesional o mi primera oportunidad en desarrollo de software a partir de diciembre de 2026, con especial interés en desarrollo full-stack y datos.',
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
    { category: 'Frontend y móvil', items: skillItems.frontend },
    { category: 'Backend', items: skillItems.backend },
    { category: 'Datos', items: skillItems.data },
    { category: 'Herramientas y plataformas', items: skillItems.tools },
  ],
  journey: [
    {
      period: '2020',
      track: 'Autodidacta',
      qualification: 'Inicio autodidacta',
      detail:
        'Empecé a aprender programación por mi cuenta mientras estudiaba Economía en la UNAM.',
      items: ['Python', 'JavaScript', 'Fundamentos web'],
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
    },
    {
      period: '2025 — 2026',
      track: 'Servicio social',
      qualification: 'Servicio social en software libre',
      institution: 'Promoción de la Cultura de Software Libre',
      detail:
        'Completé 480 horas de servicio social colaborando en torno al software libre: prototipado o implementación de funcionalidades útiles, investigación y difusión de conocimiento.',
    },
  ],
  training: {
    period: 'Aprendizaje continuo',
    heading: 'Formación complementaria',
    items: [
      'Programación en Python',
      'JavaScript: fundamentos y temas avanzados',
      'JavaScript Moderno',
      'React: De cero a experto',
      'Node: De cero a experto',
      'Google Cloud Computing Foundations',
      'Analyze BigQuery Data in Connected Sheets',
      'Gemini for Application Developers',
      'Cisco Networking Academy — CCNA: Switching, Routing, and Wireless Essentials',
      'Cisco Networking Academy — CCNA: Enterprise Networking, Security, and Automation',
    ],
  },
  contactIntro:
    'Actualmente busco una residencia profesional, prácticas o mi primera oportunidad en desarrollo de software, donde pueda contribuir a proyectos reales y seguir creciendo como desarrollador. Me interesa especialmente el trabajo full-stack y orientado a datos. Disponible para residencia profesional a partir de diciembre de 2026.',
  contactLinks: [
    { label: 'Correo', value: email, href: `mailto:${email}` },
    { label: 'GitHub', value: github, href: `https://${github}` },
  ],
}

export const content: Record<Lang, Content> = { en, es }
