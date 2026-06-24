# Estrellas de Europa — Web oficial

Sitio web de **Estrellas de Europa**, federación española de asociaciones juveniles unidas por los valores europeos, la movilidad internacional y la participación activa.

**Web:** [estrellaseuropa.eu](https://estrellaseuropa.eu)

---

## Organizaciones miembro

| Organización | Sede | Color |
|---|---|---|
| Estrellas del Sur | Córdoba, Andalucía | `#c44e2a` |
| Estrella Magec | Islas Canarias | `#d9a727` |
| Murcia Debate | Murcia | `#6b3a8a` |

---

## Stack

| Tecnología | Uso |
|---|---|
| [Astro 4](https://astro.build) | Framework web (SSG) |
| CSS nativo | Estilos (sin framework externo) |
| GitHub Pages | Hosting |
| GitHub Actions | CI/CD automático |

**Fuentes:** Playfair Display (títulos) + DM Sans (cuerpo), self-hosted via `@fontsource-variable` (sin peticiones a Google Fonts)  
**Colores:** Sand `#f3ecdd` · Ink `#2a1f0e` · EU Blue `#003399` · Gold `#d9a727` + los 5 colores del logo

---

## Estructura del proyecto

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD → GitHub Pages
├── public/
│   ├── favicon.svg                 # Estrella de 5 colores de la federación
│   ├── favicon-*.png               # Iconos PNG (32, 192, 512)
│   ├── apple-touch-icon.png
│   ├── site.webmanifest            # PWA manifest
│   ├── og-image.png                # Imagen para redes (1200x630)
│   ├── robots.txt                  # Apunta al sitemap-index.xml
│   ├── logo.jpg
│   └── CNAME                        # Dominio personalizado
│   # sitemap-index.xml lo genera @astrojs/sitemap en el build
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Navegación fija con scroll effect
│   │   ├── Footer.astro            # Pie de página con columnas
│   │   ├── Hero.astro              # Hero de portada
│   │   ├── Stats.astro             # Barra de cifras clave
│   │   ├── MisionSection.astro     # Misión y pilares
│   │   ├── ProyectosSection.astro  # Proyectos activos (KA153, NEST)
│   │   ├── AccionLocal.astro       # Acción local en el territorio
│   │   ├── MemberOrgs.astro        # Cards de las 3 organizaciones
│   │   └── Organigrama.astro       # Organigrama radial SVG
│   ├── layouts/
│   │   └── BaseLayout.astro        # Layout base con SEO completo (OG, JSON-LD)
│   ├── pages/
│   │   ├── index.astro             # Home
│   │   ├── sobre-nosotros.astro    # Historia, valores, organigrama, datos legales
│   │   ├── organizaciones.astro    # Detalle de las 3 organizaciones miembro
│   │   ├── contacto.astro          # Info de contacto por organización
│   │   └── 404.astro               # Página de error con estilo
│   └── styles/
│       └── global.css              # Design tokens y utilidades
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home: hero, cifras, misión, proyectos, acción local, organizaciones, actualidad, organigrama |
| `/organizaciones/` | Detalle de Estrellas del Sur, Estrella Magec y Murcia Debate |
| `/proyectos/` | Proyectos europeos (KA153, NEST) y acciones Erasmus+ |
| `/actualidad/` | Noticias de la federación (colección de contenido) + `/actualidad/[slug]/` |
| `/sobre-nosotros/` | Historia, valores, organigrama, NIF y sede social |
| `/transparencia/` | Portal de transparencia: documentación, junta directiva, datos |
| `/unete/` | Adhesión: beneficios, requisitos y proceso para nuevas organizaciones |
| `/privacidad/` | Política de privacidad (RGPD/LOPDGDD) |
| `/contacto/` | Email de la federación y contacto por organización |
| `/404` | Página de error con estilo |

---

## Despliegue

El despliegue es automático via GitHub Actions al hacer push a `main`.

1. GitHub Actions ejecuta `npm run build`
2. El directorio `dist/` se publica en GitHub Pages
3. El dominio `estrellaseuropa.eu` apunta a GitHub Pages via DNS (Cloudflare)

### Configuración en GitHub

En **Settings → Pages**:
- Source: `GitHub Actions`
- Custom domain: `estrellaseuropa.eu`
- Enforce HTTPS: ✅

---

## Datos legales

- **Nombre:** Federación Estrellas de Europa
- **NIF:** G75822320
- **Sede:** C.C. Los Azahares, Planta Alta 3A · 28039 Madrid, España
- **Email:** federacion@estrellasdelsur.eu
