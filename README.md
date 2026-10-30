# Estrellas de Europa, web oficial

Sitio web de la **Federación Estrellas de Europa**, que une asociaciones juveniles españolas en torno a los valores europeos, la movilidad internacional y la participación activa.

**Web:** [estrellaseuropa.eu](https://estrellaseuropa.eu)

---

## Organizaciones miembro

Cada entidad lleva el color de una de las cinco piezas de la estrella del logo.

| Organización | Sede | Color | Variable CSS | Web | Logo |
|---|---|---|---|---|---|
| Estrellas del Sur | Córdoba, Andalucía | azul `#1f4fa8` | `--c-sur` | [estrellasdelsur.eu](https://estrellasdelsur.eu) | `public/orgs/estrellas-del-sur.png` |
| Estrella Magec | Islas Canarias | amarillo `#d9a727` | `--c-magec` | sin web | `public/orgs/estrella-magec.png` |
| Murcia Debate | Murcia | morado `#6b3a8a` | `--c-murcia` | sin web | sin logo (icono) |
| Estrella del Rif | Melilla | verde `#2f7d42` | `--c-rif` | [estrelladelrif.eu](https://estrelladelrif.eu) | `public/orgs/estrella-del-rif.svg` |
| Horizonte Rioja | La Rioja | rojo `#b83a44` | `--c-rioja` | [horizonterioja.eu](https://www.horizonterioja.eu) | `public/orgs/horizonte-rioja.svg` |

Los datos de cada entidad (descripción, actividades, correo, web) están en `src/pages/organizaciones.astro`. La portada (`Hero.astro`, `MemberOrgs.astro`), el pie y la página de contacto repiten parte de esos datos: si cambia algo, hay que actualizarlo en todos esos sitios.

---

## Stack

| Tecnología | Uso |
|---|---|
| [Astro 4](https://astro.build) | Web estática |
| CSS propio | Estilos, sin framework |
| GitHub Pages + Actions | Hosting y despliegue automático |

**Fuentes:** Playfair Display (títulos) y DM Sans (texto), servidas desde el propio sitio con `@fontsource-variable`.

**Colores:** tokens en `src/styles/global.css`.
- Azul noche para cabeceras, pie y 404 (`--night-*`).
- Terracota `--accent` para los botones principales.
- Azul UE `#003399`.
- Los cinco colores de entidad, con variantes `-light` para fondos oscuros.
- La "franja federal" (`--fed-band`) son los cinco colores seguidos y aparece bajo el menú, bajo las cabeceras y sobre el pie.

---

## Estructura del proyecto

```
/
├── .github/workflows/deploy.yml    # CI/CD a GitHub Pages
├── public/
│   ├── favicon.svg, favicon-*.png, apple-touch-icon.png, site.webmanifest
│   ├── logo-star.png, logo.jpg     # Logo oficial (no modificar)
│   ├── og-image.png                # Imagen para redes (1200x630)
│   ├── orgs/                       # Logos de las organizaciones miembro
│   ├── docs/                       # PDF del portal de transparencia
│   ├── robots.txt, CNAME
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Menú con franja federal; menú móvil accesible
│   │   ├── Footer.astro            # Pie azul noche con miembros y datos legales
│   │   ├── Hero.astro              # Portada: estrella con las cinco entidades alrededor
│   │   ├── Stats.astro             # Cifras clave
│   │   ├── MisionSection.astro     # Misión y pilares
│   │   ├── ProyectosSection.astro  # Proyectos activos
│   │   ├── AccionLocal.astro       # Acción local en el territorio
│   │   ├── MemberOrgs.astro        # Tarjetas de las cinco organizaciones
│   │   ├── Organigrama.astro       # Junta directiva (portada, sobre nosotros, transparencia)
│   │   ├── StarPieces.astro        # Piezas de la estrella como ilustración
│   │   └── EUBanner.astro
│   ├── content/                    # noticias/ y bitacora/ (Markdown)
│   ├── data/                       # Fichas de proyecto (<slug>.js)
│   ├── lib/
│   │   ├── star.js                 # Coordenadas de las cinco piezas del logo
│   │   └── legal.js                # LEGAL_VERSION
│   ├── layouts/BaseLayout.astro    # SEO (OG, JSON-LD)
│   ├── pages/                      # Ver tabla de páginas
│   └── styles/global.css           # Tokens y utilidades
├── BITACORA.md, LEGAL.md
└── astro.config.mjs
```

---

## Desarrollo local

```bash
npm install      # solo la primera vez
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

---

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Portada: hero, misión, cifras, proyectos, acción local, organizaciones, actualidad, junta |
| `/organizaciones/` | Ficha de cada una de las cinco organizaciones (anclas `#eds`, `#ema`, `#mur`, `#edr`, `#hri`) |
| `/proyectos/` | Proyectos europeos, con página propia para Frames of Us, Decide con Información y 2Fast2Innovative |
| `/actualidad/` | Noticias + `/actualidad/[slug]/` |
| `/sobre-nosotros/` | Historia, cronología, valores, junta y datos legales |
| `/transparencia/` | Documentación pública, junta directiva y datos identificativos |
| `/unete/` | Adhesión de nuevas organizaciones |
| `/contacto/` | Correo de la federación y contacto de cada organización |
| `/privacidad/`, `/terminos/` | Textos legales (ver `LEGAL.md`) |
| `/404` | Página de error |

---

## Despliegue

Cada push a `main` construye y publica la web con GitHub Actions en un par de minutos. El dominio `estrellaseuropa.eu` apunta a GitHub Pages (Settings → Pages, Source: GitHub Actions, HTTPS forzado).

---

## Datos legales

- **Nombre:** Federación Estrellas de Europa
- **NIF:** G75822320
- **Domicilio social:** San Valeriano 6, 4A, 28039 Madrid (España)
- **Correo:** admin@estrellaseuropa.eu
