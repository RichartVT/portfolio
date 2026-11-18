/**
 * Builds the downloadable CVs (public/cv/Richart-Vazquez-CV-{EN,ES}.pdf) from
 * the same content the site renders, so the PDF never drifts from the page.
 *
 *   npm run cv
 *
 * Needs a local Chrome/Chromium for printing (CHROME_PATH overrides the
 * default macOS location). The PDFs are committed, so Vercel never runs this.
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')
const chrome =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// Let Vite load the TypeScript data modules exactly as the app sees them.
const vite = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
})
const { content } = await vite.ssrLoadModule('/src/data/cv.ts')
const { techCatalog, mernStack } = await vite.ssrLoadModule('/src/data/tech.ts')
await vite.close()

const esc = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const strip = (url) => url.replace(/^(https?:\/\/|mailto:)/, '')

function render(t, lang) {
  const { profile, ui } = t
  const contact = [
    profile.location,
    ...t.contactLinks.map(
      (link) => `<a href="${esc(link.href)}">${esc(strip(link.href))}</a>`,
    ),
    '<a href="https://www.richart.dev">richart.dev</a>',
  ].join('<span class="sep">·</span>')

  const skills = [
    `<tr><th>${esc(ui.stackHeading)}</th><td>MERN (${mernStack
      .map((id) => esc(techCatalog[id]))
      .join(', ')})</td></tr>`,
    ...t.skills.map(
      (group) =>
        `<tr><th>${esc(group.category)}</th><td>${group.items
          .map((id) => esc(techCatalog[id]))
          .join(', ')}</td></tr>`,
    ),
  ].join('')

  const projects = t.projects
    .map(
      (p) => `
      <article class="item">
        <header>
          <h3>${esc(p.name)}</h3>
          ${p.repo ? `<a class="link" href="${esc(p.repo)}">${esc(strip(p.repo))}</a>` : ''}
        </header>
        <p class="meta">${esc(p.context)}</p>
        <p>${esc(p.description)}</p>
        <p class="tech">${p.tech.map(esc).join(' · ')}</p>
      </article>`,
    )
    .join('')

  const journey = [...t.journey]
    .reverse()
    .map(
      (s) => `
      <article class="item item--row">
        <p class="period">${esc(s.period)}</p>
        <div>
          <h3>${esc(s.qualification)}</h3>
          ${s.institution ? `<p class="meta">${esc(s.institution)}</p>` : ''}
          ${s.detail ? `<p>${esc(s.detail)}</p>` : ''}
        </div>
      </article>`,
    )
    .join('')

  const training = t.training.items
    .map(
      (c) =>
        `<li><a href="${esc(c.href.startsWith('http') ? c.href : `https://www.richart.dev${c.href}`)}">${esc(c.title)}</a> <span class="meta">— ${esc(c.issuer)}, ${c.date.year}</span></li>`,
    )
    .join('')

  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<title>${esc(profile.name)} — CV</title>
<style>
  @page { size: Letter; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 9.6pt/1.42 -apple-system, "Helvetica Neue", Arial, sans-serif; color: #2a2733; }
  a { color: inherit; text-decoration: none; }
  h1 { margin: 0; font-size: 22pt; line-height: 1.1; letter-spacing: -0.02em; color: #0e0f13; }
  .title { margin: 2pt 0 6pt; font-size: 11pt; color: #7c22ce; font-weight: 600; }
  .contact { font-size: 8.8pt; color: #5c5566; }
  .sep { margin: 0 5pt; color: #b8b2c4; }
  .objective { margin: 9pt 0 0; padding: 7pt 9pt; border-left: 2.5pt solid #7c22ce; background: #f6f2fb; }
  section { margin-top: 13pt; }
  h2 { margin: 0 0 6pt; padding-bottom: 3pt; border-bottom: 0.75pt solid #dedbe4;
       font-size: 8.6pt; letter-spacing: 0.14em; text-transform: uppercase; color: #7c22ce;
       break-after: avoid; }
  h3 { margin: 0; font-size: 10.2pt; color: #0e0f13; }
  p { margin: 0 0 3pt; }
  .item { margin-bottom: 8pt; break-inside: avoid; }
  .item header { display: flex; justify-content: space-between; align-items: baseline; gap: 10pt; }
  .item--row { display: grid; grid-template-columns: 100pt 1fr; gap: 10pt; }
  .meta, .period { color: #6b6477; font-size: 8.8pt; }
  .link { font-size: 8.4pt; color: #7c22ce; white-space: nowrap; }
  .tech { font-size: 8.2pt; letter-spacing: 0.04em; color: #6b6477; text-transform: uppercase; }
  table { border-collapse: collapse; width: 100%; }
  th { width: 120pt; padding: 2pt 10pt 2pt 0; text-align: left; vertical-align: top; font-weight: 600; color: #0e0f13; }
  td { padding: 2pt 0; }
  ul { margin: 0; padding-left: 12pt; columns: 2; column-gap: 18pt; }
  li { margin-bottom: 2pt; break-inside: avoid; }
</style></head><body>
  <header>
    <h1>${esc(profile.name)}</h1>
    <p class="title">${esc(profile.title)}</p>
    <p class="contact">${contact}</p>
    <p class="objective">${esc(profile.objective)}</p>
  </header>
  <section><h2>${esc(ui.cvProfile)}</h2><p>${esc(profile.status)} ${esc(profile.tagline)}</p></section>
  <section><h2>${esc(ui.sections.skills)}</h2><table>${skills}</table></section>
  <section><h2>${esc(ui.sections.work)}</h2>${projects}</section>
  <section><h2>${esc(ui.sections.journey)}</h2>${journey}</section>
  <section><h2>${esc(t.training.heading)}</h2><ul>${training}</ul></section>
</body></html>`
}

const outDir = join(root, 'public', 'cv')
mkdirSync(outDir, { recursive: true })
const work = mkdtempSync(join(tmpdir(), 'cv-'))

for (const lang of Object.keys(content)) {
  const html = join(work, `cv-${lang}.html`)
  writeFileSync(html, render(content[lang], lang))
  const pdf = join(root, 'public', content[lang].ui.cvFile)
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdf}`,
    pathToFileURL(html).href,
  ], { stdio: 'ignore' })
  console.log(`✓ ${pdf.replace(root + '/', '')}`)
}
