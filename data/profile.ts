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
        { name: 'Inglés', level: 'Intermedio', percentage: 65, note: 'Documentación técnica y normativa internacional' }
    ],

    // Años de experiencia
    yearsExperience: 9,

    // Resumen profesional
    summary: `Constructor Civil de la PUC con más de 9 años entre obra, oficina técnica y control documental. Me dedico a ordenar la información, dejar trazabilidad limpia y convertir el avance de los proyectos en reportes accionables para que la gerencia decida con evidencia. Combino trabajo en terreno con automatizaciones en Python y Microsoft 365.`,

    // Objetivo profesional
    objective: `Guiar la digitalización de proyectos de construcción: mapear procesos, elegir tecnología que sirva al terreno y acompañar a los equipos hasta que adopten la nueva forma de trabajar. Quiero que la información fluya sin fricciones y que los equipos tomen decisiones más rápido.`,

    // Competencias principales (formato: título corto)
    competencies: [
        'Dirección técnica con foco en costos, plazos y calidad',
        'Arquitectura de información (CDE) en SharePoint/M365',
        'Automatización práctica con Python y Power Automate',
        'Lean Construction y planificación colaborativa',
        'Gestión ambiental SEIA con trazabilidad',
        'Coordinación BIM 4D y control visual',
        'Transformación digital y adopción de cambio',
        'Innovación aplicada (IA, low-code)'
    ],

    // Intereses y enfoque
    interests: [
        'Exploración constante de nuevas herramientas y tecnologías emergentes',
        'Aplicación de Inteligencia Artificial en procesos complejos de gestión',
        'Plataformas No-Code/Low-Code para desarrollo ágil de soluciones',
        'Systems Thinking y diseño de servicios',
        'Metodologías ágiles y Product Discovery'
    ],

    // Herramientas y tecnologías
    tools: {
        development: [
            { name: 'Python', icon: 'fa-brands fa-python', description: 'Ingeniería de Datos & ETL', reason: 'Scripts cortos para limpiar datos de obra, cruzarlos con SharePoint/Excel y entregar reportes listos para la gerencia.' },
            { name: 'HTML5 / CSS / JS', icon: 'fa-brands fa-js', description: 'Front-end Ligero', reason: 'Interfaces simples para que equipos no técnicos consulten planos, avances o alertas sin perderse en portales complejos.' },
            { name: 'JSON & APIs', icon: 'fa-solid fa-code', description: 'Interoperabilidad', reason: 'Intercambio limpio de datos entre M365 y herramientas de análisis, cuidando la consistencia y la trazabilidad.' },
            { name: 'Power Automate', icon: 'fa-solid fa-bolt', description: 'Orquestación de Flujos', reason: 'Automatizar aprobaciones, notificaciones y envíos de documentos para que nada quede atrapado en correos o cadenas informales.' }
        ],
        microsoft365: [
            { name: 'SharePoint / M365', icon: 'fa-brands fa-microsoft', description: 'Entorno Común de Datos', reason: 'Diseño sitios y bibliotecas con permisos claros y metadatos útiles para que cualquier entregable se encuentre y audite rápido.' },
            { name: 'Power BI', icon: 'fa-solid fa-chart-column', description: 'Business Intelligence', reason: 'Tableros gerenciales que muestran costos, avances y calidad sin perder el detalle técnico que respalda los números.' },
            { name: 'Excel + Power Query', icon: 'fa-solid fa-file-excel', description: 'Modelado de Datos', reason: 'Planillas ordenadas y reproducibles para cubicaciones y control financiero; menos macros misteriosos, más trazabilidad.' }
        ],
        construction: [
            { name: 'Synchro 4D', icon: 'fa-solid fa-layer-group', description: 'Simulación Constructiva', reason: 'Unir programa y BIM para validar la secuencia, visualizar riesgos y alinear a oficina técnica con terreno.' },
            { name: 'MS Project', icon: 'fa-solid fa-calendar-check', description: 'Control de Cronograma', reason: 'Ruta crítica clara, seguimiento de desvíos y planes de recuperación explicados en lenguaje simple.' },
            { name: 'QGIS', icon: 'fa-solid fa-map-location-dot', description: 'Inteligencia Territorial', reason: 'Cruzo variables geográficas y ambientales para preparar permisos y evidencias con anticipación.' },
            { name: 'AutoCAD / Presto', icon: 'fa-solid fa-ruler-combined', description: 'Ingeniería de Costos', reason: 'Base técnica para estudiar propuestas, controlar presupuestos y conversar con subcontratos con datos en mano.' }
        ],
        methodologies: [
            { name: 'Last Planner System', icon: 'fa-solid fa-list-check', description: 'Planificación Colaborativa', reason: 'Compromisos semanales claros, restricciones visibles y seguimiento que reduce la variabilidad en terreno.' },
            { name: 'BIM Management', icon: 'fa-solid fa-cubes', description: 'Coordinación Virtual', reason: 'Hago que la construcción digital ocurra antes que la física, coordinando modelos y revisiones con los equipos.' },
            { name: 'Gestión Documental', icon: 'fa-solid fa-folder-tree', description: 'Control de Activos de Info.', reason: 'Estructuro estándares y flujos para que cada documento sea fácil de auditar, encontrar y versionar.' }
        ],
        emerging: [
            { name: 'Inteligencia Artificial', icon: 'fa-solid fa-microchip', description: 'Asistencia Analítica', reason: 'Uso modelos para acelerar informes, detectar patrones y documentar hallazgos sin perder rigor técnico.' },
            { name: 'No-Code Tools', icon: 'fa-solid fa-laptop-code', description: 'Prototipado Rápido', reason: 'Prototipo soluciones rápidas para dolores puntuales de obra, sin esperar a un gran desarrollo de software.' }
        ]
    },

    // Referencias profesionales
    references: [
        {
            name: 'Ricardo Glade C.',
            role: 'Gerente General',
            company: 'Tractebel',
            quote: 'Felipe estructuró un sistema de información claro y mantenible; gracias a eso pudimos responder al SEIA con evidencia al día y sin sobresaltos.'
        },
        {
            name: 'Andrés Navarro V.',
            role: 'Gerente de Proyectos',
            company: 'WSP Chile',
            quote: 'Su control documental y criterio técnico permitieron sostener estándares internacionales en un proyecto tan exigente como el GMT.'
        },
        {
            name: 'Reinaldo Gutiérrez J.',
            role: 'Gerente de Proyectos',
            company: 'Constructora FGS S.A.',
            quote: 'Felipe trajo orden y método a la obra. Con sus rutinas de seguimiento y coordinación redujimos atrasos y retrabajos.'
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
        location: 'Santiago — Modalidad Presencial',
        category: 'digital' as const,
        highlight: 'Proyecto Emblemático',
        details: [
            'Diseñé un CDE en Microsoft 365 y SharePoint para el EIA y sus adendas, con sitios, metadatos y nomenclaturas que los especialistas pudieran usar sin fricción.',
            'Configuré permisos por rol y flujos de revisión para dejar trazabilidad completa desde el borrador hasta el envío a la autoridad ambiental.',
            'Desarrollé scripts en Python que leen JSON de SharePoint y generan reportes con semáforos, brechas y tiempos de respuesta por anexo.',
            'Entregué reportes semanales digeribles para gerencia, con alertas tempranas sobre cuellos de botella y responsables.',
            'Coordiné adendas y respuestas al SEA, ordenando antecedentes técnicos con los equipos consultores.'
        ],
        tags: ['SharePoint', 'Python', 'Power Automate', 'JSON', 'SEIA', 'Microsoft 365']
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
            'Implementé Synchro 4D conectando programa y modelo BIM para anticipar interferencias y mostrar la secuencia a todo el equipo.',
            'Controlé costos y flujos de caja: estados de pago, valorizaciones, desviaciones y proyecciones de cierre explicadas a gerencia con claridad.',
            'Gestioné proveedores y subcontratos con seguimiento de entregables críticos y validaciones técnicas oportunas.'
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
            'Refuercé el control documental en terreno con trazabilidad completa de planos, RFIs y registros de obra bajo estándares internacionales.',
            'Acompañé a la inspección técnica: revisión de avances, conformidad de materiales, registro fotográfico y mantenimiento de línea base para auditorías.'
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
            'Implementé Last Planner para que los compromisos semanales fueran visibles, medibles y sostenibles, levantando restricciones con anticipación.',
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
        challenge: 'Orquestar la información de un EIA complejo con más de 15 consultoras, asegurando que cada entrega llegue correcta y trazable al SEA.',
        results: [
            'CDE en Microsoft 365 con trazabilidad completa del ciclo documental y permisos claros.',
            'Analítica automatizada en Python para monitorear entregables en tiempo casi real y reducir tiempos de gestión.',
            'Auditorías internas más ágiles gracias a metadatos y evidencias ordenadas.'
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
        challenge: 'Mantener la integridad documental en un proyecto astronómico mundial, cumpliendo estándares estrictos de calidad y auditoría.',
        results: [
            'Línea base documental sólida para auditorías y control de cambios.',
            'Gestión ordenada de RFIs y planos que facilitó la inspección técnica en un entorno exigente.',
            'Mayor cultura de calidad con registros de campo rigurosos y accesibles.'
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
        challenge: 'Modernizar el control de una obra en altura integrando BIM con el programa para reducir riesgos en hormigonado e instalaciones.',
        results: [
            'Primera implementación de Synchro 4D en la empresa, instalando un nuevo estándar de control.',
            'Detección temprana de conflictos geométricos y logísticos, evitando paralizaciones en terreno.',
            'Reportes visuales de avance y cierres proyectados que mejoraron la comunicación con el mandante.'
        ],
        tags: ['Synchro 4D', 'BIM', 'Control de Costos', 'MS Project']
    },
    {
        id: 'p4',
        title: 'LAS VIOLETAS',
        subtitle: 'Constructora FGS S.A.',
        year: '2015 — 2018',
        category: 'LEAN CONSTRUCTION',
        image: '/images/projects/las_violetas_sketch.jpg',
        challenge: 'Elevar la productividad en terminaciones con metodologías Lean, coordinando una red compleja de subcontratos.',
        results: [
            'PPC en alza sostenida aplicando Last Planner System y seguimiento visible para todos.',
            'Menos retrabajos gracias a revisiones colaborativas y listas de control simples.',
            'Coordinación eficiente de partidas críticas que mantuvo la obra fluyendo.'
        ],
        tags: ['Last Planner', 'Lean', 'Subcontratos', 'Terreno']
    },
    {
        id: 'p5',
        title: 'SEMINARIO',
        subtitle: 'Constructora FGS S.A.',
        year: '2015 — 2018',
        category: 'GESTIÓN DE OBRA',
        image: '/images/projects/seminario_sketch.jpg',
        challenge: 'Optimizar la gestión de terreno en un proyecto de alta densidad, cuidando hitos contractuales y calidad.',
        results: [
            'Terminaciones supervisadas con foco en postventa mínima y entregas limpias.',
            'Control de avance físico y financiero con reportes claros para administración.',
            'Gestión proactiva de seguridad y medio ambiente en entorno urbano exigente.'
        ],
        tags: ['Gestión de Obra', 'Calidad', 'Seguridad', 'Avance Físico']
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
        description: 'Constructora FGS',
        icon: 'fa-solid fa-helmet-safety',
        color: 'bg-safety-orange'
    },
    {
        year: '2019',
        label: 'Oficina Técnica',
        description: 'BIM 4D & Control',
        icon: 'fa-solid fa-cube',
        color: 'bg-digital-cyan'
    },
    {
        year: '2021',
        label: 'Transformación Digital',
        description: 'SharePoint & Python',
        icon: 'fa-solid fa-microchip',
        color: 'bg-accent-yellow'
    },
    {
        year: '2025',
        label: 'Data-Driven PM',
        description: 'IA & Automatización',
        icon: 'fa-solid fa-robot',
        color: 'bg-term-green'
    }
];

