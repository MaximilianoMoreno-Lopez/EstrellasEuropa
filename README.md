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

**Fuentes:** Playfair Display (títulos) + DM Sans (cuerpo) via Google Fonts  
**Colores:** Navy `#001a6e` · EU Blue `#0033cc` · Gold `#d9a727` · Sand `#f5f0e8`

---

## Estructura del proyecto

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD → GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── logo.jpg
│   └── sitemap.xml                 # Sitemap estático
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Navegación fija con scroll effect
│   │   ├── Footer.astro            # Pie de página con columnas
│   │   ├── Hero.astro              # Hero de portada
│   │   ├── MisionSection.astro     # Misión y pilares
│   │   ├── MemberOrgs.astro        # Cards de las 3 organizaciones
│   │   └── Organigrama.astro       # Organigrama radial SVG
│   ├── layouts/
│   │   └── BaseLayout.astro        # Layout base con SEO completo (OG, JSON-LD)
│   ├── pages/
│   │   ├── index.astro             # Home
│   │   ├── sobre-nosotros.astro    # Historia, valores, organigrama, datos legales
│   │   ├── organizaciones.astro    # Detalle de las 3 organizaciones miembro
│   │   └── contacto.astro          # Info de contacto por organización
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
| `/` | Home: hero, misión, organizaciones miembro, CTA adhesión |
| `/sobre-nosotros/` | Historia, valores, organigrama, NIF y sede social |
| `/organizaciones/` | Detalle de Estrellas del Sur, Estrella Magec y Murcia Debate |
| `/contacto/` | Email de la federación y contacto por organización |

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
