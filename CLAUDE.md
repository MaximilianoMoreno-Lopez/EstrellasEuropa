# Federación Estrellas de Europa - Contexto para Claude Code

## El proyecto
Sitio web estático de la **Federación Estrellas de Europa**, que agrupa asociaciones
juveniles comprometidas con la movilidad europea y el aprendizaje no formal.
- **Stack**: Astro 4, contenido en Astro/Markdown, deploy en GitHub Pages
- **Dominio**: https://estrellaseuropa.eu (ya activo, sin base path)

## Organizaciones miembro (5)
Cada una lleva el color de una pieza de la estrella del logo:

| Entidad | Sede | Color | Web |
|---|---|---|---|
| Estrellas del Sur (`eds`) | Córdoba | azul `--c-sur` | estrellasdelsur.eu |
| Estrella Magec (`ema`) | Canarias | amarillo `--c-magec` | sin web |
| Murcia Debate (`mur`) | Murcia | morado `--c-murcia` | sin web |
| Estrella del Rif (`edr`) | Melilla | verde `--c-rif` | estrelladelrif.eu |
| Horizonte Rioja (`hri`) | La Rioja | rojo `--c-rioja` | www.horizonterioja.eu |

- La fuente de los datos es `src/pages/organizaciones.astro`. Los mismos datos se repiten en `Hero.astro`, `MemberOrgs.astro`, `Footer.astro`, `contacto.astro`, el JSON-LD de `index.astro` y las cifras de `Stats.astro` y `sobre-nosotros.astro`. Si cambia el número de entidades, hay que actualizar todos esos sitios.
- Los logos están en `public/orgs/`. Murcia Debate no tiene logo y usa un icono.
- `--c-blue` es un azul genérico de interfaz, no el de ninguna entidad.
- El terracota `--accent` es el color de los botones de la federación.
- No hay que añadir enlaces a webs que no existen.

## URLs internas
Usar siempre `${base}/ruta/` donde `base = import.meta.env.BASE_URL.replace(/\/$/, '')`.

## Diseño
- El logo oficial (`public/logo-star.png`, favicon) no se modifica.
- La estrella ilustrada se genera desde `src/lib/star.js` con los colores originales del logo.
- Los SVG insertados con `set:html` no reciben el CSS con ámbito de Astro, así que hay que darles estilo con `:global(svg)`.
- El contenido debe verse sin JavaScript: `.fade-in` solo anima con `html.js`.
- Contraste AA y `prefers-reduced-motion` respetados.

## Estilo de los textos
Sin guiones largos ni medios, sin emojis decorativos y sin abusar de los dos puntos.

## Identidad
- NIF: G75822320
- Domicilio social: San Valeriano 6, 4A, 28039 Madrid (España)
- Correo: admin@estrellaseuropa.eu

## Proyectos con seguimiento
Cada proyecto con página propia vive en `src/pages/proyectos/<slug>.astro`, con su ficha
en `src/data/<slug>.js` y sus novedades como Markdown en `src/content/bitacora/`
(campo `project` = slug). Proceso completo en [`BITACORA.md`](BITACORA.md).

## Documentos legales
Al actualizar Términos o Privacidad, subir siempre `LEGAL_VERSION` en `src/lib/legal.js`
en el mismo commit que el cambio de texto. Proceso completo en [`LEGAL.md`](LEGAL.md).

## Deploy
Push a `main` → GitHub Actions construye y despliega automáticamente. Comprobar con `gh run list`.
