# Mantenimiento de los documentos legales

Guía para actualizar los Términos y condiciones y la Política de Privacidad
sin que se desincronice nada. Todo gira en torno a un único sitio.

## Fuente única de la versión

`src/lib/legal.js` contiene la versión legal vigente:

```js
export const LEGAL_VERSION = '2026-07-14';        // AAAA-MM-DD
export const LEGAL_VERSION_LABEL = '14 de julio de 2026';
```

Ese número se muestra en `/terminos/` y en `/privacidad/` leyendo la constante, así
que basta con cambiarlo en un sitio.

## La regla de oro

Cada vez que cambies el TEXTO legal de forma relevante:

1. Edita el contenido en `src/pages/terminos.astro` o `src/pages/privacidad.astro`.
2. Sube la fecha en `src/lib/legal.js` (`LEGAL_VERSION` y `LEGAL_VERSION_LABEL`).
3. Haz los dos cambios en el MISMO commit.

Si cambias el texto pero no subes la fecha, se pierde la prueba de qué versión
estaba vigente en cada momento.

## Cómo se demuestra qué texto estaba vigente

El commit de git de cada versión, con su fecha y su hash en GitHub, prueba palabra
por palabra qué decían los documentos ese día. La versión mostrada en la página
(`LEGAL_VERSION`) apunta a ese commit. Este sitio es informativo y no tiene registro
de usuarios, por lo que no se almacenan aceptaciones individuales.

## Documentos legales y sus fuentes

| Documento | Fuente | Publicado en |
|-----------|--------|--------------|
| Términos y condiciones | `src/pages/terminos.astro` | `/terminos/` |
| Política de Privacidad | `src/pages/privacidad.astro` | `/privacidad/` |

## Checklist rápido al actualizar

- [ ] Texto editado en la página que corresponda.
- [ ] `LEGAL_VERSION` y `LEGAL_VERSION_LABEL` actualizados en `src/lib/legal.js`.
- [ ] Todo en el mismo commit, con un mensaje que describa el cambio legal.
- [ ] `npm run build` sin errores.
- [ ] Push a `main` (GitHub Actions despliega).
