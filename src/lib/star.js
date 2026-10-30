// Las cinco piezas de la estrella del logo (viewBox 0 0 557 510), trazadas sobre
// public/logo-star.png y pintadas con los colores originales del logo.
// Las piezas no representan a ninguna entidad: los colores de cada organización
// se usan solo en etiquetas, pastillas y tarjetas.
// Ilustración decorativa: el logo oficial (PNG) no se modifica.
export const PIECES = [
  { id: 'blue',   pts: '165,3 237,133 123,213',   c: 'var(--logo-blue)',   l: 'var(--logo-blue-l)',   cx: 175, cy: 116 },
  { id: 'red',    pts: '208,40 393,18 302,85',    c: 'var(--logo-red)',    l: 'var(--logo-red-l)',    cx: 301, cy: 48 },
  { id: 'yellow', pts: '382,50 553,205 382,125',  c: 'var(--logo-yellow)', l: 'var(--logo-yellow-l)', cx: 439, cy: 127 },
  { id: 'green',  pts: '3,255 283,218 357,357',   c: 'var(--logo-green)',  l: 'var(--logo-green-l)',  cx: 214, cy: 277 },
  { id: 'purple', pts: '384,205 487,192 392,507', c: 'var(--logo-purple)', l: 'var(--logo-purple-l)', cx: 421, cy: 301 },
];

// Centro óptico de la estrella, para separar las piezas hacia fuera.
export const STAR_CENTER = { x: 300, y: 235 };
