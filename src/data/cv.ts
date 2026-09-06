export type NavItem = {
  id: string
  label: string
}

export type Job = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export type Project = {
  name: string
  description: string
  tech: string[]
  url?: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Study = {
  institution: string
  qualification: string
  period: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export const profile = {
  name: '[Your Name]',
  title: '[Your Professional Title]',
  tagline: '[One-line summary of what you do and who you do it for]',
  location: '[City, Country]',
  about: [
    '[About paragraph 1 — your background, what you work on, what you care about.]',
    '[About paragraph 2 — what you are looking for next, or how you like to work.]',
  ],
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const experience: Job[] = [
  {
    company: '[Company Name]',
    role: '[Job Title]',
    period: '[Month 20XX] — Present',
    location: '[City, Country]',
    bullets: [
      '[Responsibility or achievement — what you did and the outcome.]',
      '[Responsibility or achievement — include a number where you have one.]',
      '[Responsibility or achievement.]',
    ],
  },
  {
    company: '[Previous Company Name]',
    role: '[Previous Job Title]',
    period: '[Month 20XX] — [Month 20XX]',
    location: '[City, Country]',
    bullets: [
      '[Responsibility or achievement.]',
      '[Responsibility or achievement.]',
    ],
  },
]

export const projects: Project[] = [
  {
    name: '[Project Name]',
    description: '[One or two sentences: what the project does and why you built it.]',
    tech: ['[Tech]', '[Tech]', '[Tech]'],
    url: '#',
  },
  {
    name: '[Project Name]',
    description: '[One or two sentences: what the project does and why you built it.]',
    tech: ['[Tech]', '[Tech]'],
    url: '#',
  },
  {
    name: '[Project Name]',
    description: '[One or two sentences: what the project does and why you built it.]',
    tech: ['[Tech]', '[Tech]', '[Tech]'],
  },
]

export const skills: SkillGroup[] = [
  {
    category: '[Skill Category, e.g. Languages]',
    items: ['[Skill]', '[Skill]', '[Skill]', '[Skill]'],
  },
  {
    category: '[Skill Category, e.g. Frameworks]',
    items: ['[Skill]', '[Skill]', '[Skill]'],
  },
  {
    category: '[Skill Category, e.g. Tools]',
    items: ['[Skill]', '[Skill]', '[Skill]', '[Skill]'],
  },
]

export const education: Study[] = [
  {
    institution: '[Institution Name]',
    qualification: '[Degree or Qualification]',
    period: '[20XX] — [20XX]',
  },
  {
    institution: '[Institution or Course Provider]',
    qualification: '[Certification or Course]',
    period: '[20XX]',
  },
]

export const contactIntro =
  '[One line inviting people to get in touch — what you are open to right now.]'

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: '[your.email@example.com]', href: 'mailto:your.email@example.com' },
  { label: 'GitHub', value: '[github.com/your-username]', href: '#' },
  { label: 'LinkedIn', value: '[linkedin.com/in/your-profile]', href: '#' },
]
