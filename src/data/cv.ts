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

export const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'story', label: 'Story' },
  { id: 'approach', label: 'Approach' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Richart Vázquez de la Torre',
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
}

export const projects: Project[] = [
  {
    name: 'NBA Stats / NBA Analytics',
    description:
      'A data-focused NBA statistics project built to collect, structure and analyze basketball data. It has evolved beyond simply displaying statistics into a project where I have worked on data ingestion, database modeling and analytical queries.',
    context: 'Personal project · Ongoing development',
    tech: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'SQL'],
    learned:
      'This project has taught me how much the quality of a data product depends on decisions made before the information ever reaches the interface: how data is modeled, ingested, queried and optimized. It is also the clearest example of how I tend to keep iterating on something even after the first version works.',
  },
  {
    name: 'FlightBookApp',
    description:
      'A full-stack airline management and booking application covering several connected business flows, including users, airports, routes, aircraft, flights, seats, reservations, boarding passes, baggage and payments.',
    context: 'Academic / software development project',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
    learned:
      'Building FlightBookApp helped me understand how the different layers of an application depend on one another. It required connecting frontend interactions, backend APIs, authentication, relational data and multiple business entities rather than treating each part as an isolated exercise.',
  },
  {
    name: 'RuntahPedia',
    description:
      'A cross-platform mobile application that combines sustainable e-commerce with environmental content. Users can authenticate, browse products, manage a shopping cart and purchase history, read environmental news and create their own publications.',
    context: 'Mobile development project',
    tech: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'SQLite',
      'Provider',
      'MVVM',
    ],
    learned:
      'RuntahPedia taught me how concepts such as state management, persistence, authentication and separation of concerns translate into mobile development. It also gave me experience organizing an application around an MVVM-style architecture rather than putting business logic directly into the interface.',
    repo: 'https://github.com/RichartVT/flutter_runtahpedia',
  },
  {
    name: 'Data Warehouse / Business Intelligence',
    description:
      'A data warehousing and business intelligence project focused on extracting, transforming and loading data and then analyzing it through multidimensional models.',
    context: 'Academic data project',
    tech: ['SQL Server', 'SSIS', 'SSAS', 'SQL', 'OLAP'],
    learned:
      'This project introduced me to the difference between storing transactional data and preparing information specifically for analysis. I worked with ETL processes, dimensional structures and OLAP concepts, which helped strengthen my interest in data-oriented software.',
  },
]

/**
 * Only traits with evidence behind them. Each body cites something real —
 * a project, a competition, something learned without a course.
 */
export const principles: Principle[] = [
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
]

/** No proficiency labels by design — the grouping is the only claim made. */
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Flutter'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker'],
  },
]

/**
 * Formal education and independent learning on one timeline, oldest first so
 * the two tracks read as having progressed in parallel.
 */
export const journey: Study[] = [
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
]

/**
 * A compact supporting block, deliberately not a certificate list. The Cisco
 * entries are Networking Academy course completions — not the standalone CCNA
 * certification exam — so they are named as courses.
 */
export const training: Training = {
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
}

export const contactIntro =
  'I am currently looking for a professional residency, internship or first software development opportunity where I can contribute to real projects and continue growing as a developer. I am especially interested in full-stack and data-oriented work. Available for professional residency opportunities starting in December 2026.'

/** LinkedIn omitted — no profile exists yet, so no placeholder row. */
export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'richartvdt@gmail.com',
    href: 'mailto:richartvdt@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/RichartVT',
    href: 'https://github.com/RichartVT',
  },
]
