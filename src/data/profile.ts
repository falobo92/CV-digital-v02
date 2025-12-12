// ========================================
// DATOS CENTRALIZADOS DEL PERFIL
// Toda la información personal se gestiona desde aquí
// ========================================

export const PROFILE = {
    // Información personal básica
    name: {
        first: 'Felipe',
        last: 'Lobo Boric',
        full: 'Felipe Lobo Boric',
        initials: 'FLB'
    },

    // Título profesional
    title: 'Constructor Civil',
    subtitle: 'Transformación Digital y Gestión de Proyectos',

    // Contacto
    contact: {
        email: 'felipealonso.lobo@gmail.com',
        phone: '+56 9 9871 4263',
        linkedin: {
            url: 'https://www.linkedin.com/in/felipealonsolobo',
            username: 'felipealonsolobo'
        },
        location: {
            city: 'Santiago',
            country: 'Chile',
            availability: 'Presencial / Híbrido'
        }
    },

    // Educación
    education: {
        degree: 'Construcción Civil',
        institution: 'Pontificia Universidad Católica de Chile',
        year: 2014,
        distinction: 'Dos votos de distinción',
        specializations: [
            'Tecnología del hormigón avanzada',
            'Materiales metálicos en la construcción',
            'Acústica ambiental y en edificaciones',
            'Física de la construcción'
        ]
    },

    // Cursos adicionales
    courses: [
        {
            name: 'Marco Legal de Proyectos de Desalinización',
            institution: 'Universidad de los Andes',
            year: 2022
        }
    ],

    // Idiomas
    languages: [
        { name: 'Español', level: 'Nativo', percentage: 100 },
        { name: 'Inglés', level: 'Intermedio', percentage: 65, note: 'Uso habitual en documentación técnica, normativa y proyectos con estándares internacionales' }
    ],

    // Años de experiencia
    yearsExperience: 10,

    // Resumen profesional
    summary: `Constructor Civil UC con 10 años de experiencia combinando terreno, oficina técnica y control documental en proyectos de edificación, infraestructura y energía. Me especializo en estructurar información compleja, asegurar trazabilidad técnica y transformar el avance real de los proyectos en reportes claros para la toma de decisiones. Trabajo con equipos multidisciplinarios, integrando prácticas de construcción con herramientas digitales y automatización ligera en Microsoft 365 y Python.`,

    // Objetivo profesional
    objective: `Impulsar procesos de transformación digital aplicados a proyectos de construcción e infraestructura, partiendo desde la realidad del terreno. Busco ordenar flujos de información, eliminar reprocesos y acompañar a los equipos en la adopción de herramientas que mejoren el control, la coordinación y la calidad de las decisiones.`,

    // Competencias principales (formato: título corto)
    competencies: [
        'Gestión técnica integral con foco en costos, plazos y calidad',
        'Diseño e implementación de Entornos Comunes de Datos (CDE)',
        'Control documental con trazabilidad y enfoque auditable',
        'Automatización práctica para seguimiento y reportabilidad',
        'Planificación colaborativa y Lean Construction',
        'Gestión ambiental SEIA y coordinación de adendas',
        'Integración BIM 4D para control visual de obra',
        'Adopción de cambio y mejora continua'
    ],

    // Intereses y enfoque
    interests: [
        'Optimización de procesos técnicos mediante soluciones digitales aplicadas a proyectos reales',
        'Uso de Inteligencia Artificial como apoyo al análisis, síntesis y control de información técnica',
        'Diseño de soluciones No-Code / Low-Code orientadas a usuarios de obra y oficina técnica',
        'Systems Thinking aplicado a la coordinación de proyectos complejos y multidisciplinarios',
        'Aplicación pragmática de metodologías ágiles en contextos de ingeniería y construcción'
    ],

    // Herramientas y tecnologías
    tools: {
        development: [
            {
                name: 'Python',
                icon: 'fa-brands fa-python',
                description: 'Automatización y análisis de información',
                reason: 'Desarrollo scripts para consolidar datos de avance, control documental y estados de entrega, generando reportes claros y reproducibles para seguimiento técnico y gerencial.'
            },
            {
                name: 'HTML5 / CSS / JS',
                icon: 'fa-brands fa-js',
                description: 'Interfaces técnicas ligeras',
                reason: 'Construyo interfaces simples para visualizar estados de avance, alertas y documentación, facilitando el acceso a información sin depender de plataformas complejas.'
            },
            {
                name: 'JSON & APIs',
                icon: 'fa-solid fa-code',
                description: 'Estructuración e interoperabilidad de datos',
                reason: 'Uso formatos estructurados para asegurar consistencia entre plataformas y permitir análisis automatizado con trazabilidad.'
            },
            {
                name: 'Power Automate',
                icon: 'fa-solid fa-bolt',
                description: 'Automatización de flujos documentales',
                reason: 'Implemento flujos de revisión, aprobación y notificación que reducen reprocesos y aseguran control de estados sin dependencia del correo.'
            }
        ],
        microsoft365: [
            {
                name: 'SharePoint / M365',
                icon: 'fa-brands fa-microsoft',
                description: 'Entorno Común de Datos (CDE)',
                reason: 'Diseño arquitecturas de información con sitios, bibliotecas, permisos y metadatos alineados a procesos reales de proyecto.'
            },
            {
                name: 'Power BI',
                icon: 'fa-solid fa-chart-column',
                description: 'Visualización de información',
                reason: 'Desarrollo tableros que integran avance, estados documentales y métricas clave, manteniendo respaldo técnico en los datos.'
            },
            {
                name: 'Excel + Power Query',
                icon: 'fa-solid fa-file-excel',
                description: 'Modelamiento y control de datos',
                reason: 'Trabajo con planillas estructuradas y consultas reproducibles para control financiero, cubicaciones y seguimiento de avance.'
            }
        ],
        construction: [
            {
                name: 'Synchro 4D',
                icon: 'fa-solid fa-layer-group',
                description: 'Planificación y simulación constructiva',
                reason: 'Integro programación de obra con modelos BIM para validar secuencias, detectar interferencias y comunicar la planificación al equipo.'
            },
            {
                name: 'MS Project',
                icon: 'fa-solid fa-calendar-check',
                description: 'Gestión de cronograma',
                reason: 'Seguimiento de ruta crítica, análisis de desviaciones y elaboración de planes de recuperación claros y explicables.'
            },
            {
                name: 'QGIS',
                icon: 'fa-solid fa-map-location-dot',
                description: 'Análisis territorial y ambiental',
                reason: 'Cruzo información geográfica y ambiental para apoyar procesos de permisos, evaluaciones y respuestas a la autoridad.'
            },
            {
                name: 'AutoCAD / Presto',
                icon: 'fa-solid fa-ruler-combined',
                description: 'Soporte técnico y costos',
                reason: 'Base técnica para presupuestos, estados de pago, análisis de partidas y validaciones con subcontratos.'
            }
        ],
        methodologies: [
            {
                name: 'Last Planner System',
                icon: 'fa-solid fa-list-check',
                description: 'Planificación colaborativa',
                reason: 'Aplicación de compromisos semanales, levantamiento de restricciones y seguimiento de cumplimiento en terreno.'
            },
            {
                name: 'BIM Management',
                icon: 'fa-solid fa-cubes',
                description: 'Coordinación digital',
                reason: 'Gestión de revisiones y coordinación de modelos para anticipar conflictos antes de la ejecución.'
            },
            {
                name: 'Gestión Documental',
                icon: 'fa-solid fa-folder-tree',
                description: 'Control y trazabilidad',
                reason: 'Definición de estándares y flujos documentales que facilitan auditorías, control de versiones y recuperación de información.'
            }
        ],
        emerging: [
            {
                name: 'Inteligencia Artificial',
                icon: 'fa-solid fa-microchip',
                description: 'Apoyo analítico',
                reason: 'Uso IA como apoyo para síntesis de información, generación de borradores y detección de patrones, manteniendo criterio técnico.'
            },
            {
                name: 'No-Code Tools',
                icon: 'fa-solid fa-laptop-code',
                description: 'Prototipado rápido',
                reason: 'Desarrollo soluciones simples para necesidades puntuales de proyecto sin sobrecargar la infraestructura digital.'
            }
        ]
    },

    // Referencias profesionales
    references: [
        {
            name: 'Ricardo Glade C.',
            role: 'Gerente General',
            company: 'Tractebel',
            phone: '(+56 9) 7829 2391',
            email: 'ricardo.glade@tractebel.engie.com',
            quote:
                'En el proyecto Aguas Marítimas, Felipe apoyó de manera consistente la gestión del EIA desde la organización y control de la información. Su trabajo permitió ordenar criterios, mantener trazabilidad y facilitar la coordinación entre los distintos equipos técnicos, lo que fue especialmente valioso durante la interacción con el SEIA.'
        },
        {
            name: 'Andrés Navarro V.',
            role: 'Gerente de Proyectos',
            company: 'WSP Chile',
            phone: '(+56 9) 7768 2114',
            email: 'andres.navarro@wsp.com',
            quote:
                'Conocí el trabajo de Felipe en el proyecto Giant Magellan Telescope, donde se desempeñó en control documental en terreno. Destacó por su forma estructurada de trabajar y por cumplir de manera confiable con los procesos definidos, aportando orden y continuidad en un entorno técnico exigente.'
        },
        {
            name: 'Reinaldo Gutiérrez J.',
            role: 'Gerente de Proyectos',
            company: 'Constructora FGS',
            phone: '(+56 9) 7191 0419',
            email: 'rgutierrez@fgs.cl',
            quote:
                'Durante su etapa en obra, Felipe fue un apoyo directo para el control del avance y la coordinación diaria. Mantenía claridad sobre el estado real del proyecto, tanto en lo físico como en lo financiero, lo que ayudó a anticipar ajustes y a ordenar el trabajo con subcontratos.'
        }
    ]
};

// Experiencia profesional
export const EXPERIENCES = [
    {
        id: '1',
        role: 'Control Documental y Transformación Digital',
        company: 'CRAMSA S.A.',
        project: 'Proyecto Aguas Marítimas',
        period: '2021 — Actual',
        location: 'Santiago',
        category: 'digital' as const,
        highlight: 'Proyecto Emblemático',
        details: [
            'Diseñé e implementé un Entorno Común de Datos (CDE) en Microsoft 365 y SharePoint para el EIA y sus adendas, alineado a los flujos reales de trabajo de consultoras y especialistas.',
            'Definí estructuras documentales, metadatos, nomenclaturas y permisos por rol, asegurando trazabilidad completa desde la elaboración hasta la entrega al SEA.',
            'Desarrollé automatizaciones en Python que procesan datos estructurados desde SharePoint y generan reportes de seguimiento con estados, brechas y tiempos de respuesta.',
            'Implementé reportabilidad periódica para gerencia, facilitando la identificación temprana de cuellos de botella y riesgos de atraso.',
            'Coordiné antecedentes técnicos y documentales para adendas y respuestas a observaciones de la autoridad ambiental.'
        ],
        tags: ['SharePoint', 'QGIS', 'Power Automate', 'JSON', 'SEIA', 'Python']
    },
    {
        id: '2',
        role: 'Jefe de Oficina Técnica',
        company: 'Constructora CNB Ltda.',
        project: 'Edificio Alonso Square',
        period: '2019 — 2021',
        location: 'Santiago — Vitacura',
        category: 'construction' as const,
        highlight: 'Implementación BIM 4D',
        details: [
            'Implementé Synchro 4D integrando programación de obra y modelo BIM para visualizar secuencias constructivas y anticipar interferencias.',
            'Gestioné el control físico y financiero de la obra, incluyendo estados de pago, proyecciones de cierre y análisis de desviaciones.',
            'Coordiné proveedores y subcontratos, asegurando cumplimiento técnico, continuidad operativa y control documental.'
        ],
        tags: ['Synchro 4D', 'BIM', 'Control de Costos', 'MS Project', 'Oficina Técnica']
    },
    {
        id: '3',
        role: 'Inspector Técnico — Control Documental',
        company: 'WSP Chile',
        project: 'Giant Magellan Telescope',
        period: '2019',
        location: 'Región de Atacama',
        category: 'construction' as const,
        highlight: 'Estándares Internacionales',
        details: [
            'Fortalecí el control documental en terreno bajo estándares internacionales, asegurando integridad y trazabilidad de planos, RFIs y registros.',
            'Apoyé labores de inspección técnica mediante revisión de avances, registros fotográficos y preparación de antecedentes para auditorías.'
        ],
        tags: ['Control Documental', 'Calidad', 'Inspección Técnica', 'Estándares Internacionales']
    },
    {
        id: '4',
        role: 'Control de Gestión y Profesional de Terreno',
        company: 'Constructora FGS S.A.',
        period: '2015 — 2018',
        location: 'Santiago',
        category: 'construction' as const,
        details: [
            'Implementé metodología Last Planner para mejorar la confiabilidad de la planificación y la visibilidad de restricciones.',
            'Supervisé terminaciones y coordiné subcontratos en proyectos residenciales, cuidando calidad, seguridad y cumplimiento de plazos.'
        ],
        tags: ['Last Planner', 'Lean Construction', 'Subcontratos', 'Terreno', 'Edificación']
    }
];

// Proyectos destacados
export const PROJECTS = [
    {
        id: 'p1',
        title: 'AGUAS MARÍTIMAS',
        subtitle: 'CRAMSA S.A.',
        year: '2021 — Actual',
        category: 'GESTIÓN DOCUMENTAL SEIA',
        image: '/images/projects/cramsa_sketch.jpg',
        challenge: 'Gestionar un EIA de alta complejidad con múltiples consultoras, manteniendo coherencia técnica, trazabilidad documental y cumplimiento frente a la autoridad ambiental.',
        results: [
            'Implementación de un CDE en Microsoft 365 con control completo del ciclo documental.',
            'Automatización del seguimiento de entregables, reduciendo reprocesos y tiempos de gestión.',
            'Mejor preparación para auditorías internas y respuestas a observaciones del SEA.'
        ],
        tags: ['SharePoint', 'Python', 'Power Automate', 'SEIA', 'JSON']
    },
    {
        id: 'p2',
        title: 'GIANT MAGELLAN TELESCOPE',
        subtitle: 'WSP Chile',
        year: '2019',
        category: 'CONTROL DOCUMENTAL INTERNACIONAL',
        image: '/images/projects/gmt_sketch.jpg',
        challenge: 'Asegurar trazabilidad documental en un proyecto científico de escala mundial, cumpliendo exigentes estándares de calidad y auditoría.',
        results: [
            'Consolidación de una línea base documental sólida para auditorías.',
            'Gestión ordenada de RFIs y planos en terreno.',
            'Apoyo efectivo a la inspección técnica y control de calidad.'
        ],
        tags: ['Control Documental', 'Estándares Internacionales', 'Calidad', 'Inspección']
    },
    {
        id: 'p3',
        title: 'ALONSO SQUARE',
        subtitle: 'Constructora CNB Ltda.',
        year: '2019 — 2021',
        category: 'PLANIFICACIÓN BIM 4D',
        image: '/images/projects/alonso_sketch.jpg',
        challenge: 'Integrar planificación y BIM para reducir riesgos constructivos en una obra en altura.',
        results: [
            'Primera implementación de Synchro 4D en la empresa.',
            'Detección temprana de interferencias constructivas y logísticas.',
            'Mejor comunicación técnica con mandante y equipos de obra.'
        ],
        tags: ['Synchro 4D', 'BIM', 'Control de Costos', 'MS Project']
    },

    {
        id: 'p4',
        title: 'SEMINARIO',
        subtitle: 'Constructora FGS S.A.',
        year: '2015 — 2018',
        category: 'GESTIÓN DE OBRA',
        image: '/images/projects/seminario_sketch.jpg',
        challenge: 'Controlar avance y calidad en un proyecto urbano de alta densidad.',
        results: [
            'Terminaciones controladas con bajo nivel de postventa.',
            'Seguimiento físico y financiero claro para administración.',
            'Gestión preventiva de seguridad y medio ambiente.'
        ],
        tags: ['Gestión de Obra', 'Calidad', 'Seguridad', 'Avance Físico']
    },
    {
        id: 'p5',
        title: 'LAS VIOLETAS',
        subtitle: 'Constructora FGS S.A.',
        year: '2015 — 2018',
        category: 'LEAN CONSTRUCTION',
        image: '/images/projects/las_violetas_sketch.jpg',
        challenge: 'Mejorar productividad en terminaciones mediante planificación colaborativa.',
        results: [
            'Aumento sostenido de PPC con Last Planner.',
            'Reducción de retrabajos en partidas críticas.',
            'Coordinación eficiente de subcontratos.'
        ],
        tags: ['Last Planner', 'Lean', 'Subcontratos', 'Terreno']
    }
];

// Timeline de evolución profesional
export const TIMELINE = [
    {
        year: '2014',
        label: 'Título Profesional',
        description: 'Constructor Civil',
        icon: 'fa-solid fa-graduation-cap',
        color: 'bg-eng-blue'
    },
    {
        year: '2015',
        label: 'Terreno & Obra',
        description: 'Gestión y control en proyectos de edificación',
        icon: 'fa-solid fa-helmet-safety',
        color: 'bg-safety-orange'
    },
    {
        year: '2019',
        label: 'Oficina Técnica',
        description: 'Planificación, costos y BIM 4D',
        icon: 'fa-solid fa-cube',
        color: 'bg-digital-cyan'
    },
    {
        year: '2021',
        label: 'Transformación Digital',
        description: 'CDE, SharePoint y automatización',
        icon: 'fa-solid fa-microchip',
        color: 'bg-accent-yellow'
    },
    {
        year: '2025',
        label: 'Gestión Data-Driven',
        description: 'Analítica, IA y mejora continua',
        icon: 'fa-solid fa-robot',
        color: 'bg-term-green'
    }
];
