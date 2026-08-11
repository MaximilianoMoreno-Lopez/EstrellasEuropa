# Cómo publicar novedades de un proyecto

Los proyectos con seguimiento público tienen una **bitácora**: un listado de
novedades ordenado por fecha que aparece en la página del proyecto.

Ahora mismo el proyecto con bitácora es:

| Proyecto | Slug | Página |
|---|---|---|
| Decide con Información (ESC30-SOL) | `decide-con-informacion` | `/proyectos/decide-con-informacion/` |

---

## Publicar una novedad

1. Copia `src/content/bitacora/_plantilla.md` a un archivo nuevo en la misma
   carpeta, con un nombre descriptivo en minúsculas y con guiones:

   ```
   src/content/bitacora/primera-sesion-ies-tirso-de-molina.md
   ```

   > El nombre del archivo es el ancla del enlace directo a la novedad
   > (`…/decide-con-informacion/#n-primera-sesion-ies-tirso-de-molina`).

2. Rellena la cabecera y escribe el texto en Markdown.
3. Quita `draft: true` (si no, no se publica).
4. `git push` a `main`. GitHub Actions despliega solo.

### Campos de la cabecera

| Campo | ¿Obligatorio? | Qué es |
|---|---|---|
| `title` | Sí | Título de la novedad |
| `project` | Sí | Slug del proyecto (ver tabla de arriba) |
| `date` | Sí | Fecha en formato `YYYY-MM-DD` |
| `kind` | No | `Hito`, `Actividad`, `Material`, `Centro`, `Evaluación` o `Difusión`. Por defecto `Actividad`. Determina el color de la entrada |
| `phase` | No | Fase del proyecto, p. ej. `"Mes 3 · Sesiones grupales"` |
| `location` | No | Lugar |
| `description` | No | Resumen de 1-2 frases, destacado bajo el título |
| `metrics` | No | Cifras destacadas: `- label: "Estudiantes"` / `value: "48"` |
| `links` | No | Enlaces: `- label: "Ver material"` / `url: "https://…"` |
| `draft` | No | `true` → se guarda pero no se publica |

Las novedades se ordenan **de más reciente a más antigua** por `date`. No hay
que tocar ningún otro archivo.

---

## Actualizar el estado del proyecto

Las fases, los indicadores, el equipo y los materiales viven en un único archivo:

```
src/data/decide-con-informacion.js
```

Lo que se toca con más frecuencia:

- **Fases** (`fases[].estado`): `'completada'`, `'en-curso'` o `'prevista'`.
  La barra de progreso de la portada y el «Mes X de 6» se calculan a partir de
  ahí, así que conviene moverlo al empezar cada mes.
- **Indicadores** (`indicadores[].actual`): está en `null` mientras no haya dato
  (se muestra como `—`). En cuanto se sepa la cifra, se pone el número.
- **Materiales** (`materiales[].url`): `null` mientras esté en preparación. Al
  publicarlo, se pone la URL y el enlace se activa solo.

---

## Añadir un proyecto nuevo con bitácora

1. Crea `src/data/<slug>.js` copiando la estructura de
   `src/data/decide-con-informacion.js`.
2. Crea `src/pages/proyectos/<slug>.astro` a partir de
   `src/pages/proyectos/decide-con-informacion.astro` (cambia el import y el
   color de acento).
3. Añade la tarjeta del proyecto en `src/pages/proyectos.astro` con su `href`.
4. Añade la fila correspondiente a la tabla del principio de este documento.

Las novedades del nuevo proyecto se distinguen por el campo `project` de cada
archivo `.md`; no hace falta crear otra carpeta.

---

## Notas

- Si publicas un hito importante (concesión, cierre, resultados), plantéate
  además una noticia en `src/content/noticias/` para que aparezca en
  **Actualidad** y enlace a la página del proyecto.
- Nunca publiques datos personales de participantes menores de edad,
  identificadores del formulario ni números PRN.
