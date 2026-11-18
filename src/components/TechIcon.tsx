import { darkVariant, techCatalog, type TechId } from '../data/tech'

// Vite resolves every logo to a hashed URL at build time; nothing loads from
// a CDN at runtime.
const icons = import.meta.glob<string>('../assets/tech/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

function iconUrl(file: string) {
  return icons[`../assets/tech/${file}.svg`]
}

/** Decorative logo: the tech name is always printed next to it. */
function TechIcon({ id, size = 20 }: { id: TechId; size?: number }) {
  const light = iconUrl(id)
  if (!light) return null
  const dark = darkVariant.has(id) ? iconUrl(`${id}-dark`) : undefined

  const img = (
    <img
      className="tech-icon"
      src={light}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      data-tech={techCatalog[id]}
    />
  )

  if (!dark) return img

  // The theme follows the OS setting, so a media query picks the variant.
  return (
    <picture>
      <source srcSet={dark} media="(prefers-color-scheme: dark)" />
      {img}
    </picture>
  )
}

export default TechIcon
