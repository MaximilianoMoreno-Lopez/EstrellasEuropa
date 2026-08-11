// ─────────────────────────────────────────────────────────────
//  Ficha del proyecto «Decide con Información» (ESC30-SOL)
//  Cuerpo Europeo de Solidaridad · Proyectos de Solidaridad
//
//  ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR para actualizar
//  el estado de las fases y los indicadores del proyecto.
//  Las novedades van en src/content/bitacora/*.md (ver BITACORA.md).
// ─────────────────────────────────────────────────────────────

export const proyecto = {
  slug: 'decide-con-informacion',
  titulo: 'Decide con Información',
  tituloEn: 'Information to make choices',
  programa: 'Cuerpo Europeo de Solidaridad',
  accion: 'Proyectos de Solidaridad (ESC30-SOL)',
  convocatoria: 'Convocatoria 2026 · Ronda 1',
  agencia: 'INJUVE — Agencia Nacional Española de la Juventud (ES02)',
  entidad: 'Federación Estrellas de Europa (OID E10387903)',
  inicio: '2026-08-01',
  fin: '2027-01-31',
  duracion: '6 meses',
  ambito: 'Institutos públicos de la Comunidad de Madrid',
  // El importe de la subvención no se publica aquí; las cuentas de la
  // federación se rinden en /transparencia/.
  grupo: '5 jóvenes',
  prioridad: 'Inclusión y diversidad',
  prioridadSecundaria: 'Objetivos de la Juventud de la UE',
  temas: [
    'Desarrollo de áreas desfavorecidas rurales y urbanas',
    'Eliminación de la brecha intercultural, intergeneracional y social',
    'Inclusión de jóvenes marginados',
  ],

  lead:
    'Un grupo de cinco jóvenes que cursaron itinerarios internacionales de Bachillerato ' +
    'acompaña a estudiantes de institutos públicos madrileños en el momento en que eligen ' +
    'su itinerario, para que Bachibac, Bachillerato Dual y Bachillerato Internacional dejen ' +
    'de ser una oportunidad que solo aprovechan quienes ya tenían la información.',

  problema: [
    'Las modalidades internacionales de Bachillerato están abiertas a cualquier estudiante que cumpla los requisitos académicos, pero en la práctica acceden sobre todo quienes ya cuentan con referentes internacionales en casa.',
    'En centros con ratios altas por orientador, la información llega tarde o no llega. Persisten ideas erróneas sobre su dificultad, su coste o su supuesto carácter elitista.',
    'El resultado es una autolimitación temprana: alumnado con nivel y motivación suficientes descarta la opción antes de valorarla.',
  ],

  cambio: [
    'Que la elección de un itinerario internacional dependa de la motivación y el perfil académico del estudiante, no de su contexto familiar.',
    'Que los centros conserven materiales reutilizables y alumnado referente capaz de orientar a los cursos siguientes.',
    'Que cambie no solo el número de matriculados, sino su composición social.',
  ],

  destinatarios: [
    { grupo: '3.º y 4.º de ESO', edad: '14–16 años', nota: 'Durante el periodo de elección de Bachillerato' },
    { grupo: '1.º de Bachillerato', edad: '16–17 años', nota: 'Cuando empieza a plantearse el futuro universitario' },
    { grupo: '2.º de Bachillerato', edad: '17–18 años', nota: 'Para informar sobre vías todavía accesibles' },
    { grupo: 'Familias y profesorado', edad: 'Comunidad educativa', nota: 'Para que la información permanezca en el centro' },
  ],

  // Estados admitidos: 'completada' | 'en-curso' | 'prevista'
  fases: [
    {
      mes: 'Mes 1',
      periodo: 'Agosto 2026',
      estado: 'en-curso',
      titulo: 'Formación del equipo y preparación metodológica',
      objetivo: 'Garantizar que el equipo transmita información rigurosa, comprensible y adaptada al público juvenil.',
      hitos: [
        'Taller de comunicación y oratoria, gestión de grupos y dinámicas participativas.',
        'Formación en movilidad juvenil: sistemas educativos extranjeros, becas y oportunidades europeas.',
        'Diseño de materiales: mapa interactivo, escape room educativo, Kahoot y guías simplificadas.',
      ],
    },
    {
      mes: 'Mes 2',
      periodo: 'Septiembre 2026',
      estado: 'prevista',
      titulo: 'Contacto con centros y diagnóstico',
      objetivo: 'Seleccionar los institutos adecuados y adaptar el contenido a cada contexto.',
      hitos: [
        'Reuniones con equipos directivos y departamentos de orientación.',
        'Recogida de datos del centro: participación previa, ratio orientador/alumnado y perfil sociolingüístico.',
        'Calendarización de las sesiones por cursos.',
      ],
    },
    {
      mes: 'Mes 3',
      periodo: 'Octubre 2026',
      estado: 'prevista',
      titulo: 'Sesiones grupales informativas',
      objetivo: 'Reducir barreras psicológicas y dar información comprensible.',
      hitos: [
        'Diagnóstico inicial en el aula para detectar creencias erróneas en tiempo real.',
        'Explicación estructurada de Bachibac, Bachillerato Dual e IB, y juego de mitos y realidades.',
        'Escape room educativo: simulación de una solicitud real y entrega del repositorio por QR.',
      ],
    },
    {
      mes: 'Mes 4',
      periodo: 'Noviembre 2026',
      estado: 'prevista',
      titulo: 'Orientación personalizada',
      objetivo: 'Convertir el interés en una decisión informada.',
      hitos: [
        'Tutorías individuales voluntarias y comparación entre modalidades.',
        'Simulación guiada de preinscripción.',
        'Sesiones específicas para familias.',
      ],
    },
    {
      mes: 'Mes 5',
      periodo: 'Diciembre 2026',
      estado: 'prevista',
      titulo: 'Acompañamiento en solicitudes reales',
      objetivo: 'Evitar que el proceso se abandone por barreras administrativas.',
      hitos: [
        'Revisión de documentación, plazos y requisitos.',
        'Apoyo en formularios reales y seguimiento individual.',
        'Coordinación con los departamentos de orientación.',
      ],
    },
    {
      mes: 'Mes 6',
      periodo: 'Enero 2027',
      estado: 'prevista',
      titulo: 'Preparación para la movilidad y cierre',
      objetivo: 'Asegurar una transición realista al programa elegido.',
      hitos: [
        'Tutorías finales con el alumnado admitido y sesión con exalumnos.',
        'Evaluación de impacto del proyecto.',
        'Entrega de materiales al centro para su continuidad.',
      ],
    },
  ],

  // `actual: null` → se muestra como pendiente. Poner el número cuando se tenga el dato.
  indicadores: [
    { label: 'Estudiantes alcanzados', meta: 200, actual: null, unidad: '' },
    { label: 'Centros educativos', meta: 5, actual: null, unidad: '' },
    { label: 'Sesiones grupales', meta: null, actual: null, unidad: '' },
    { label: 'Tutorías individuales', meta: null, actual: null, unidad: '' },
  ],

  metodoEvaluacion: [
    'Cuestionario previo y posterior en cada taller para medir el aumento real de conocimiento.',
    'Preguntas de actitud: cuántos pasan de «no me lo planteo» a «lo veo posible».',
    'Preguntas anónimas de contexto para comprobar que se llega a perfiles infrarrepresentados.',
    'Seguimiento con los centros seis meses después del cierre, con datos agregados de solicitudes.',
  ],

  // El grupo promotor aparece solo con el nombre de pila.
  equipo: [
    { nombre: 'Ziyad', rol: 'Coordinación general', detalle: 'Relación con los centros y supervisión pedagógica de los contenidos. Aporta la experiencia directa del itinerario Bachibac.' },
    { nombre: 'Iker', rol: 'Orientación y apoyo entre iguales', detalle: 'Dinamiza los espacios de diálogo y las tutorías centradas en motivación y toma de decisiones.' },
    { nombre: 'Ane', rol: 'Diseño pedagógico y materiales', detalle: 'Responsable de presentaciones, guías, cuestionarios, escape room y repositorio digital.' },
    { nombre: 'Carlos', rol: 'Comunicación con centros y familias', detalle: 'Gestiona el correo del proyecto y la coordinación con equipos directivos y AMPAs.' },
    { nombre: 'Marta', rol: 'Organización y gestión operativa', detalle: 'Calendario, seguimiento de tareas y registro del presupuesto.' },
  ],

  coaches: [
    { nombre: 'Gonzalo Martínez', rol: 'Comunicación y facilitación', detalle: 'Prepara al equipo en oratoria, gestión de aula y diseño de sesiones participativas e inclusivas.' },
    { nombre: 'Maximiliano Moreno', rol: 'Mentoría y referente cercano', detalle: 'Profesor universitario y exalumno de Bachibac en instituto público. Ayuda a explicar los itinerarios sin tecnicismos.' },
    { nombre: 'Pablo Morente', rol: 'Movilidad juvenil y oportunidades europeas', detalle: 'Asegura el rigor y la actualización de la información sobre requisitos, plazos, becas y transporte sostenible.' },
  ],

  // Se van rellenando conforme se produzcan. `url: null` → aparece como «en preparación».
  materiales: [
    { titulo: 'Mapa informativo de itinerarios, becas y plazos', formato: 'Padlet', url: null },
    { titulo: 'Escape room educativo sobre la solicitud', formato: 'Genially / Canva', url: null },
    { titulo: 'Guías paso a paso de requisitos y documentación', formato: 'PDF', url: null },
    { titulo: 'Presentaciones editables para tutorías', formato: 'Presentación', url: null },
  ],

  contacto: 'admin@estrellaseuropa.eu',
};

export default proyecto;
