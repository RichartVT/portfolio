/**
 * Technology catalog. Names are brand names, so they are never translated.
 * Each id matches an SVG in src/assets/tech/ (Devicon, MIT; Power BI from
 * the Iconify "logos" set, CC0); ids listed in
 * `darkVariant` also have an `<id>-dark.svg` for dark backgrounds.
 */
export const techCatalog = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  dart: 'Dart',
  sql: 'SQL',
  react: 'React',
  astro: 'Astro',
  flutter: 'Flutter',
  nodejs: 'Node.js',
  express: 'Express',
  fastapi: 'FastAPI',
  mongodb: 'MongoDB',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  powerbi: 'Power BI',
  sqlserver: 'SQL Server',
  dbeaver: 'DBeaver',
  aws: 'AWS',
  docker: 'Docker',
  git: 'Git',
} as const

export type TechId = keyof typeof techCatalog

/** Logos whose dark artwork (black, or MySQL's deep blue) vanishes on the
 *  dark theme. */
export const darkVariant: ReadonlySet<TechId> = new Set<TechId>([
  'express',
  'astro',
  'aws',
  'mysql',
])

export const mernStack: TechId[] = ['mongodb', 'express', 'react', 'nodejs']
