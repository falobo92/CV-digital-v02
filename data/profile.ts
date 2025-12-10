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
    summary: `Constructor Civil de la Pontificia Universidad Católica de Chile, con más de nueve años de experiencia en edificación e infraestructura. He trabajado en oficina técnica, terreno y control documental, integrando la gestión de obra con sistemas digitales para ordenar la información, asegurar trazabilidad y mejorar la calidad de los datos. Desarrollador de automatizaciones en Python y entornos Microsoft 365, con foco en convertir datos dispersos en tableros y reportes accionables para la dirección de proyectos.`,

    // Objetivo profesional
    objective: `Diseñar y coordinar la ejecución de estrategias de transformación digital para la industria de la construcción, asegurando la implementación de proyectos de digitalización, soluciones tecnológicas y adopción de nuevas prácticas. Experiencia en levantar y documentar procesos, identificar oportunidades de incorporación tecnológica, y promover la adopción de soluciones mediante capacitaciones y acompañamiento a equipos.`,

    // Competencias principales
    competencies: [
        'Gestión integral de proyectos de edificación e infraestructura: oficina técnica, control de gestión y supervisión de terreno.',
        'Diseño e implementación de sistemas de gestión documental en Microsoft 365 y SharePoint para proyectos complejos.',
        'Desarrollo de automatizaciones con Python y Power Automate para consolidación de datos y generación de reportabilidad.',
        'Aplicación de metodologías Lean Construction y Last Planner System para mejora de planificación y cumplimiento.',
        'Experiencia en tramitación ambiental SEIA: elaboración de EIA, adendas y coordinación con el Servicio de Evaluación Ambiental.',
        'Implementación de planificación BIM 4D con Synchro para visualización de secuencias constructivas.',
        'Coordinación de proyectos de transformación digital asegurando plazos, alcance y objetivos.',
        'Investigación y evaluación de nuevas soluciones digitales, metodologías y buenas prácticas para el sector construcción.'
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
            { name: 'Python', icon: 'fa-brands fa-python', description: 'Automatización y ETL', reason: 'Scripts para procesar metadatos, consolidar bases de datos y generar reportes y dashboards a partir de información de SharePoint y Excel.' },
            { name: 'HTML5 / CSS / JS', icon: 'fa-brands fa-js', description: 'Desarrollo Web', reason: 'Desarrollo de vistas ligeras y paneles de consulta para equipos técnicos y de gestión.' },
            { name: 'JSON & APIs', icon: 'fa-solid fa-code', description: 'Intercambio de Datos', reason: 'Lectura y transformación de archivos JSON exportados desde M365 y otras plataformas para su uso en análisis y reportabilidad.' },
            { name: 'Power Automate', icon: 'fa-solid fa-bolt', description: 'Flujos de Trabajo', reason: 'Flujos de aprobación, notificaciones y envío de correos automáticos según cambios en listas y bibliotecas de SharePoint.' }
        ],
        microsoft365: [
            { name: 'SharePoint / M365', icon: 'fa-brands fa-microsoft', description: 'Gestión Documental (CDE)', reason: 'Arquitectura funcional de sitios, listas y bibliotecas; definición de permisos, vistas y estructuras de carpetas para proyectos complejos.' },
            { name: 'Power BI', icon: 'fa-solid fa-chart-column', description: 'Business Intelligence', reason: 'Cuadros de mando gerenciales para control de avance físico-financiero y desviaciones de presupuesto.' },
            { name: 'Excel + Power Query', icon: 'fa-solid fa-file-excel', description: 'Análisis de Datos', reason: 'Estructuración de bases de datos, análisis de costos y cubicaciones para apoyo a oficina técnica.' }
        ],
        construction: [
            { name: 'Synchro 4D', icon: 'fa-solid fa-layer-group', description: 'Planificación BIM 4D', reason: 'Planificación de obra, secuencias constructivas y análisis de escenarios para anticipar conflictos en terreno.' },
            { name: 'MS Project', icon: 'fa-solid fa-calendar-check', description: 'Programación de Obra', reason: 'Planificación de obra y seguimiento de secuencias constructivas para el control de plazos.' },
            { name: 'QGIS', icon: 'fa-solid fa-map-location-dot', description: 'SIG & Territorio', reason: 'Apoyo a análisis territorial, revisión de áreas de influencia y generación de insumos georreferenciados para equipos ambientales.' },
            { name: 'AutoCAD / Presto', icon: 'fa-solid fa-ruler-combined', description: 'Oficina Técnica', reason: 'Estructuración de bases de datos, análisis de costos y cubicaciones para apoyo a oficina técnica.' }
        ],
        methodologies: [
            { name: 'Last Planner System', icon: 'fa-solid fa-list-check', description: 'Planificación Lean', reason: 'Planificación y seguimiento de actividades mejorando el cumplimiento del plan semanal y la coordinación entre partidas.' },
            { name: 'BIM Management', icon: 'fa-solid fa-cubes', description: 'Coord. Digital', reason: 'Integración de modelos para anticipar interferencias y optimizar la secuencia constructiva.' },
            { name: 'Gestión Documental', icon: 'fa-solid fa-folder-tree', description: 'Control de Información', reason: 'Diseño y administración de sistemas de gestión documental asegurando trazabilidad y orden.' }
        ],
        emerging: [
            { name: 'Inteligencia Artificial', icon: 'fa-solid fa-microchip', description: 'Análisis Predictivo', reason: 'Exploración de herramientas de IA para optimizar procesos de gestión y análisis de datos.' },
            { name: 'No-Code Tools', icon: 'fa-solid fa-laptop-code', description: 'Desarrollo Ágil', reason: 'Creación rápida de soluciones digitales para resolver problemáticas específicas de obra.' }
        ]
    },

    // Referencias profesionales
    references: [
        {
            name: 'Ricardo Glade C.',
            role: 'Gerente General',
            company: 'Tractebel',
            quote: 'Felipe demostró capacidad excepcional para estructurar sistemas de información complejos y liderar la transformación digital del proyecto Aguas Marítimas.'
        },
        {
            name: 'Andrés Navarro V.',
            role: 'Gerente de Proyectos',
            company: 'WSP Chile',
            quote: 'Su manejo del control documental bajo estándares internacionales fue clave para el éxito de la inspección técnica en el proyecto GMT.'
        },
        {
            name: 'Reinaldo Gutiérrez J.',
            role: 'Gerente de Proyectos',
            company: 'Constructora FGS S.A.',
            quote: 'Felipe aportó orden y metodología a nuestros procesos de obra, mejorando significativamente la coordinación entre equipos y el cumplimiento de plazos.'
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
        location: 'Santiago — Modalidad Presencial 4x1',
        category: 'digital' as const,
        highlight: 'Proyecto Emblemático',
        details: [
            'Lideré la implantación de un ecosistema colaborativo en Microsoft 365 y SharePoint para la gestión del EIA y sus adendas, diseñando arquitectura de sitios, bibliotecas, metadatos y nomenclaturas estandarizadas.',
            'Configuré permisos por rol y flujos de revisión para que cada entregable quedara trazable desde su elaboración hasta su envío a la autoridad ambiental.',
            'Desarrollé herramientas locales con Python que leen archivos JSON exportados de SharePoint y generan reportes de seguimiento con estado por anexo, brechas, semáforos y tiempos de respuesta.',
            'Logré reportabilidad ágil para la gerencia y alertas tempranas sobre cuellos de botella, complementando la capa colaborativa con analítica ligera hecha a medida.',
            'Coordinación técnica para elaboración de adendas y respuestas formales al Servicio de Evaluación Ambiental.'
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
            'Implementé Synchro 4D para la planificación y seguimiento, conectando el programa de obra con el modelo BIM para anticipar interferencias y coordinar oficina técnica y terreno.',
            'Control integral de costos: estados de pago, valorizaciones mensuales, análisis de desviaciones y proyecciones de cierre para la gerencia de obra.',
            'Gestión de proveedores y subcontratos: validación técnica de antecedentes, seguimiento de entregables y coordinación de cubicaciones en hitos críticos.'
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
            'Reforcé el control documental en terreno bajo altos estándares de trazabilidad, garantizando la integridad de planos, RFIs y registros de obra.',
            'Apoyo directo a inspección técnica: revisión de avances físicos, verificación de conformidad de materiales, registro fotográfico sistemático y mantenimiento de línea base para auditorías.'
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
            'Implementación de Last Planner System para planificación semanal: programación de compromisos, análisis de restricciones y seguimiento de PPC.',
            'Supervisión directa de terminaciones y coordinación de subcontratos en proyectos de edificación residencial, resguardando cumplimiento de calidad, plazos y condiciones de seguridad.'
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
        challenge: 'Coordinar la elaboración del Estudio de Impacto Ambiental de un proyecto de desalinización, gestionando miles de documentos técnicos entre más de 15 consultoras especializadas.',
        results: [
            'Ecosistema colaborativo en Microsoft 365 con trazabilidad completa desde elaboración hasta envío a autoridad.',
            'Herramientas Python para reportes automáticos con semáforos, brechas y tiempos de respuesta.',
            'Eliminación de reprocesos y mejora significativa en auditorías internas.'
        ],
        tags: ['SharePoint', 'Python', 'Power Automate', 'SEIA', 'JSON']
    },
    {
        id: 'p2',
        title: 'ALONSO SQUARE',
        subtitle: 'Constructora CNB Ltda.',
        year: '2019 — 2021',
        category: 'PLANIFICACIÓN BIM 4D',
        challenge: 'Integrar modelo BIM con programa de obra para un edificio residencial de 18 pisos, anticipando interferencias constructivas y optimizando la secuencia de hormigonado.',
        results: [
            'Primera implementación de Synchro 4D en la empresa.',
            'Detección temprana de conflictos geométricos entre especialidades.',
            'Proyecciones de cierre y control de avance visual para reportes al mandante.'
        ],
        tags: ['Synchro 4D', 'BIM', 'Control de Costos', 'MS Project']
    },
    {
        id: 'p3',
        title: 'GIANT MAGELLAN TELESCOPE',
        subtitle: 'WSP Chile',
        year: '2019',
        category: 'CONTROL DOCUMENTAL INTERNACIONAL',
        challenge: 'Gestionar documentación técnica de obras civiles para uno de los proyectos astronómicos más importantes del mundo, bajo estándares internacionales de calidad.',
        results: [
            'Trazabilidad total de planos, RFIs y registros de obra.',
            'Línea base documental consolidada para auditorías.',
            'Apoyo efectivo a inspección técnica en condiciones exigentes.'
        ],
        tags: ['Control Documental', 'Estándares Internacionales', 'Calidad', 'Inspección']
    },
    {
        id: 'p4',
        title: 'EDIFICACIÓN RESIDENCIAL',
        subtitle: 'Constructora FGS S.A.',
        year: '2015 — 2018',
        category: 'LEAN CONSTRUCTION',
        challenge: 'Mejorar el cumplimiento de programas de obra mediante Last Planner System y coordinación efectiva de subcontratos.',
        results: [
            'Mejora sostenida del PPC mediante planificación colaborativa.',
            'Coordinación efectiva de subcontratos de terminaciones.',
            'Reducción de retrabajos mediante seguimiento sistemático.'
        ],
        tags: ['Last Planner', 'Lean', 'Subcontratos', 'Terreno']
    }
];

// Timeline de evolución profesional
export const TIMELINE = [
    {
        year: '2014',
        label: 'Título PUC',
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

// Categorías de herramientas
export const TECH_CATEGORIES = [
    { id: 'development', title: 'DESARROLLO Y AUTOMATIZACIÓN', icon: 'fa-solid fa-code' },
    { id: 'microsoft365', title: 'ECOSISTEMA MICROSOFT 365', icon: 'fa-brands fa-microsoft' },
    { id: 'construction', title: 'GESTIÓN Y CONSTRUCCIÓN', icon: 'fa-solid fa-helmet-safety' },
    { id: 'methodologies', title: 'METODOLOGÍAS', icon: 'fa-solid fa-sitemap' },
    { id: 'emerging', title: 'TECNOLOGÍAS EMERGENTES', icon: 'fa-solid fa-rocket' }
];

