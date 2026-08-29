// Ficha de "Frames of Us", intercambio juvenil KA152-YOU concedido a la
// federacion en la convocatoria 2026 ronda 1 de Erasmus+ Juventud.
//
// Todo el contenido procede del formulario de solicitud aprobado. Como en el
// resto del sitio, NO se publica el importe de la subvencion ni el
// identificador del formulario: son datos del expediente, no informacion
// publica.

export const proyecto = {
  slug: 'frames-of-us',
  titulo: 'Frames of Us',
  tituloEn: 'Youth Storytelling for Wellbeing & Participation',
  acronimo: 'FoU',
  programa: 'Erasmus+',
  accion: 'Movilidad de jóvenes: intercambios juveniles (KA152-YOU)',
  formato: 'Intercambio juvenil (Youth Exchange)',
  coordinadora: 'Federación Estrellas de Europa',
  entidad: 'Organización solicitante y coordinadora del proyecto',
  lugar: 'Madrid, barrio de Usera (España)',
  inicio: '2026-10-05',
  fin: '2026-10-12',
  fechas: 'Del 5 al 12 de octubre de 2026',
  duracion: '8 días de programa, 48 horas de educación no formal',
  plazas: '30 jóvenes de seis países: 4 participantes y 1 responsable de grupo por país',
  idioma: 'Inglés',
  edad: 'De 16 a 24 años; los responsables de grupo, a partir de 18',
  certificado: 'Youthpass y certificación de Red Reconoce',
  proyectoInicio: '2026-07-01',
  proyectoFin: '2027-06-30',

  lead:
    'Intercambio juvenil de ocho días en Madrid, coordinado por la federación con cinco ' +
    'organizaciones de Chequia, Portugal, Chipre, Polonia y Grecia. Treinta jóvenes ' +
    'trabajan la relación entre bienestar, identidad y participación a través de la ' +
    'narración: fotovoz, teatro silencioso, relato digital y cine social. Termina con un ' +
    'Día Comunitario abierto al barrio de Usera.',

  contexto: [
    'La ansiedad, la falta de confianza, el aislamiento y no sentirse parte de nada reducen las ganas de una persona joven de hablar, de dejarse ver, de participar y de tomar la iniciativa. Le ocurre especialmente a quien tiene menos oportunidades.',
    'Frames of Us entra por ahí: usa el arte, el bienestar y las prácticas de seguridad psicosocial como puerta de entrada para que las personas jóvenes ganen confianza y den el paso de participar en su comunidad.',
    'El proyecto responde a un desenganche creciente de la vida cívica y social entre quienes afrontan barreras sociales, económicas, educativas o emocionales, y que a menudo no encuentran formas accesibles y con sentido de expresarse.',
  ],

  objetivos: [
    'Dar a las 30 personas participantes micro-prácticas de bienestar y salud mental y herramientas creativas —fotovoz, cuadros de teatro silencioso, arcos narrativos— y acompañarlas a construir un plan de práctica personal.',
    'Promover la creatividad, la iniciativa y la capacidad de resolver problemas.',
    'Fomentar relaciones empáticas y sentido cívico a través de la alfabetización mediática.',
    'Crear un Día Comunitario conducido por los propios jóvenes, que abra la actividad al vecindario y fomente la comprensión intercultural.',
    'Explorar los valores y las oportunidades de la Unión Europea y practicar una lengua extranjera en la comunicación diaria.',
    'Reconocer el aprendizaje con Youthpass y Red Reconoce, y acompañar en documentar las competencias para el CV, LinkedIn o Europass.',
  ],

  resultados: [
    {
      titulo: 'Día Comunitario en Usera',
      detalle:
        'Evento público conducido por las personas participantes que muestra al barrio lo creado durante la semana y cierra formalmente la actividad.',
    },
    {
      titulo: 'Piezas de narración propia',
      detalle:
        'Series de fotovoz, cuadros de teatro silencioso y piezas de cine social producidas por los equipos internacionales durante los Story Labs.',
    },
    {
      titulo: 'Testimonios en vídeo',
      detalle:
        'Cada participante documenta su recorrido en formato vlog, de la preparación al seguimiento, y lo termina después de la movilidad.',
    },
    {
      titulo: 'Proyecciones locales de seguimiento',
      detalle:
        'Mini-proyecciones y exposiciones en la comunidad de cada organización socia, conducidas por quienes participaron.',
    },
    {
      titulo: 'Métodos reutilizables',
      detalle:
        'Story Labs, plantillas de consentimiento y herramientas de reflexión que las entidades socias incorporan a su trabajo habitual con juventud.',
    },
    {
      titulo: 'Reconocimiento del aprendizaje',
      detalle:
        'Youthpass y certificación de Red Reconoce, con apoyo para trasladar las competencias adquiridas al CV, LinkedIn o Europass.',
    },
  ],

  perfil: [
    'Jóvenes de 16 a 24 años: estudiantes, personas que ni estudian ni trabajan, jóvenes trabajadores y voluntarios.',
    'Interés por la narración, el bienestar, la pertenencia y la participación, y ganas de reforzar la confianza y la comunicación.',
    'Prioridad para jóvenes con menos oportunidades: al menos 3 de cada 5 personas de cada equipo nacional afrontan barreras económicas, sociales, geográficas, culturales, de discriminación o de salud.',
    'Responsables de grupo mayores de 18 años, ya activos con juventud en entidades, grupos, centros juveniles, centros educativos o iniciativas comunitarias.',
    'Disposición a trabajar con métodos creativos e interculturales y a respetar reglas claras de espacio seguro, consentimiento y confidencialidad.',
  ],

  cubre: [
    'Viaje cubierto por Erasmus+ según el baremo de distancia, con incentivo de viaje sostenible (green travel).',
    'Alojamiento y manutención durante los ocho días del intercambio.',
    'Todas las actividades y los materiales del programa.',
    'Apoyo a la inclusión para quien lo necesite, previsto en el presupuesto del proyecto.',
    'Youthpass y certificación de Red Reconoce al terminar.',
  ],

  // Consta expresamente en la solicitud: no se pide contribucion economica a las
  // personas participantes.
  sinCuota: true,

  socios: [
    { pais: 'España', nombre: 'Federación Estrellas de Europa', rol: 'Coordinadora' },
    { pais: 'Chequia', nombre: 'EDDA, z.ú.', rol: 'Socia' },
    {
      pais: 'Portugal',
      nombre: 'Hawk Stars — Associação para a Educação, Inovação e Desenvolvimento Social',
      rol: 'Socia',
    },
    { pais: 'Chipre', nombre: 'Make it Happen', rol: 'Socia' },
    { pais: 'Polonia', nombre: 'Fundacja See Beyond', rol: 'Socia' },
    { pais: 'Grecia', nombre: 'Municipality of Fyli', rol: 'Socia' },
  ],

  metodos: [
    'Fotovoz',
    'Teatro silencioso',
    'Relato digital',
    'Cine social',
    'Círculos de bienestar',
    'Entrevistas de calle',
    'Juego de rol',
    'Presentaciones interculturales',
  ],

  aplicar: {
    // No hay formulario publico todavia. El equipo espanol se selecciona por
    // convocatoria abierta con formulario y entrevista, asi que aqui se enlaza
    // el buzon de la federacion en vez de inventar una URL que no existe.
    correo: 'admin@estrellaseuropa.eu',
    nota:
      'El equipo español lo forman 4 participantes y 1 responsable de grupo, en su mayoría de Madrid y del propio barrio de Usera. La selección se hace por convocatoria abierta, con formulario de solicitud y entrevista.',
  },

  contacto: 'admin@estrellaseuropa.eu',
};

export default proyecto;
