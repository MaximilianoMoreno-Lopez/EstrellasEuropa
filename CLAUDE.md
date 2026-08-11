# Federación Estrellas de Europa - Contexto para Claude Code

## El proyecto
Sitio web estático de la **Federación Estrellas de Europa**, que agrupa asociaciones
juveniles comprometidas con la movilidad europea y el aprendizaje no formal.
- **Stack**: Astro, contenido en Astro/Markdown, deploy en GitHub Pages
- **Dominio**: https://estrellaseuropa.eu (ya activo, sin base path)
- **Organizaciones miembro**: Estrellas del Sur, Estrella Magec, Murcia Debate

## URLs internas
Usar siempre `${base}/ruta/` donde `base = import.meta.env.BASE_URL.replace(/\/$/, '')`.

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
Push a `main` → GitHub Actions construye y despliega automáticamente.
