/**
 * Turns the raw media folder (phone photos, videos, certificate PDFs) into
 * web-ready files under public/.
 *
 *   node scripts/prepare-media.mjs [sourceDir]     (default: ~/Desktop/cv)
 *
 * - Photos: HEIC → JPEG via macOS `sips`, then cropped/resized to WebP with
 *   sharp. Output carries no EXIF, so no GPS location leaks.
 * - Videos: ffmpeg → 540p H.264, muted, metadata stripped, plus a poster.
 * - Certificates: PDFs copied under neutral names (the originals embed the
 *   student ID and school email) with a first-page WebP thumbnail.
 *
 * Requires macOS (sips, qlmanage) and ffmpeg on PATH.
 */
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { basename, join, resolve } from 'node:path'
import sharp from 'sharp'

const src = resolve(process.argv[2] ?? join(homedir(), 'Desktop', 'cv'))
const pub = resolve(import.meta.dirname, '..', 'public')
const tmp = mkdtempSync(join(tmpdir(), 'media-'))

const run = (cmd, args) => execFileSync(cmd, args, { stdio: 'ignore' })
const out = (...parts) => {
  const file = join(pub, ...parts)
  mkdirSync(resolve(file, '..'), { recursive: true })
  return file
}

/** HEIC/JPG → full-resolution JPEG that sharp can always read. */
function toJpeg(file) {
  const jpg = join(tmp, `${basename(file)}.jpg`)
  run('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '95', join(src, file), '--out', jpg])
  return jpg
}

async function webp(input, target, { width, extract, quality = 78 }) {
  let img = sharp(input).rotate()
  if (extract) img = img.extract(extract)
  const info = await img
    .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' })
    // smartSubsample keeps colour edges crisp at high quality settings.
    .webp({ quality, smartSubsample: quality >= 85, effort: 6 })
    .toFile(target)
  console.log(`✓ ${target.replace(pub, 'public')}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}

/* ------------------------------------------------------------- Portrait */

// Night ride photo, shown whole and untouched at the highest quality that is
// still sensible for the web. Decoded via lossless PNG so the only
// compression step is the final WebP.
const bike = join(tmp, 'bike.png')
run('sips', ['-s', 'format', 'png', join(src, 'IMG_5308.HEIC'), '--out', bike])
await webp(bike, out('images', 'me', 'portrait.webp'), { width: 1600, quality: 92 })
await webp(bike, out('images', 'me', 'portrait-800.webp'), { width: 800, quality: 90 })
// The hero avatar is a small circle, so it needs the face only.
await webp(bike, out('images', 'me', 'avatar.webp'), {
  width: 320,
  quality: 90,
  extract: { left: 990, top: 600, width: 900, height: 900 },
})

/* ------------------------------------------------------------ Life gallery */

const life = [
  ['IMG_0986.HEIC', 'worldcup-monterrey-stadium'],
  ['IMG_1006.HEIC', 'worldcup-monterrey-match'],
  ['IMG_1185.HEIC', 'worldcup-azteca'],
  ['IMG_1240.HEIC', 'worldcup-players'],
]
for (const [file, name] of life) {
  const jpg = toJpeg(file)
  await webp(jpg, out('images', 'life', `${name}.webp`), { width: 1080, quality: 70 })
  await webp(jpg, out('images', 'life', `${name}-sm.webp`), { width: 640 })
}

/* ---------------------------------------------------------------- Videos */

const videos = [
  ['IMG_1089.MOV', 'worldcup-monterrey', 30],
  ['IMG_1222.mov', 'worldcup-cdmx', 28],
]
for (const [file, name, crf] of videos) {
  const mp4 = out('videos', `${name}.mp4`)
  run('ffmpeg', [
    '-y', '-loglevel', 'error', '-i', join(src, file),
    '-an', '-map_metadata', '-1',
    '-vf', 'scale=540:-2,fps=30',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', String(crf),
    '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    mp4,
  ])
  const frame = join(tmp, `${name}.png`)
  run('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '1', '-i', mp4, '-frames:v', '1', frame])
  await webp(frame, out('videos', `${name}-poster.webp`), { width: 540 })
  console.log(`✓ ${mp4.replace(pub, 'public')}`)
}

/* ---------------------------------------------------------- Certificates */

/** slug → a unique fragment of the original file name. */
const certificates = {
  'cisco-ccna-enterprise': 'CCNA-_Enterprise',
  'cisco-ccna-switching': 'CCNA-_Switching',
  'cisco-intro-modern-ai': 'Introduction_to_Modern_AI',
  'cisco-intro-iot': 'Introduction_to_IoT',
  'udemy-react-mern': 'UC-21eed4e7',
  'udemy-node': 'UC-78cbc4b7',
  'udemy-javascript-moderno': 'UC-5af08fd8',
  'udemy-javascript-es9': 'UC-7bfb44bd',
  'mosh-python': 'python-programming-for-beginners',
  'mosh-javascript-1': 'javascript-basics',
  'mosh-javascript-2': 'object-oriented-programming-in-javascript',
  'hackatec-2022': 'Constancia_31',
  'servicio-social': 'carta_terminacion_servicio_Social',
}
const files = readdirSync(src)
for (const [slug, fragment] of Object.entries(certificates)) {
  const file = files.find((f) => f.includes(fragment) && f.endsWith('.pdf'))
  if (!file) {
    console.warn(`! missing certificate for ${slug}`)
    continue
  }
  copyFileSync(join(src, file), out('certificates', `${slug}.pdf`))
  run('qlmanage', ['-t', '-s', '1200', '-o', tmp, join(src, file)])
  await webp(join(tmp, `${file}.png`), out('certificates', `${slug}.webp`), { width: 640 })
}

/* ------------------------------------------------- Credly (Google Cloud) */

// Skill badge verified on Credly; the badge art is the public image Credly
// serves for it.
const badge = await fetch(
  'https://images.credly.com/images/75208396-7fbe-437e-8a42-46277d642697/image.png',
)
if (badge.ok) {
  await webp(Buffer.from(await badge.arrayBuffer()), out('certificates', 'google-bigquery.webp'), {
    width: 320,
  })
}
