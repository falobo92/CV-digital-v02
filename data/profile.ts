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
    summary: `Constructor Civil de la Pontificia Universidad Católica de Chile con más de nueve años de experiencia en edificación e infraestructura. He trabajado en oficina técnica, terreno y control documental, integrando la gestión de obra con sistemas digitales para ordenar la información, asegurar trazabilidad y mejorar la calidad de los datos. Especialista en diseñar sistemas de gestión documental en Microsoft 365 y desarrollar automatizaciones con Python que transforman datos dispersos en reportes accionables para la toma de decisiones.`,
    
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
            { name: 'Python', description: 'Automatización, procesamiento de datos, generación de reportes desde SharePoint y Excel' },
            { name: 'HTML / CSS / JavaScript', description: 'Desarrollo de interfaces web, paneles de consulta y dashboards' },
            { name: 'JSON y APIs', description: 'Procesamiento de datos exportados desde Microsoft 365 y otras plataformas' },
            { name: 'Power Automate', description: 'Flujos de trabajo automatizados, aprobaciones y notificaciones' },
            { name: 'Visual Studio Code / Cursor', description: 'Entornos de desarrollo para scripts y soluciones locales' }
        ],
        microsoft365: [
            { name: 'SharePoint Online', description: 'Arquitectura de sitios, bibliotecas documentales, metadatos y permisos' },
            { name: 'Excel + Power Query', description: 'Modelado de datos, consolidación y análisis para oficina técnica' },
            { name: 'MS Project', description: 'Control de hitos, rutas críticas y programación de obra' }
        ],
        construction: [
            { name: 'Synchro 4D', description: 'Planificación visual y simulación de secuencias constructivas (BIM 4D)' },
            { name: 'AutoCAD', description: 'Revisión de planos técnicos y documentación' },
            { name: 'QGIS', description: 'Análisis territorial y generación de insumos georreferenciados' },
            { name: 'Presto', description: 'Presupuestos y cubicaciones' }
        ],
        methodologies: [
            { name: 'Last Planner System', description: 'Planificación colaborativa y mejora del PPC' },
            { name: 'Lean Construction', description: 'Eliminación de desperdicios y mejora continua' },
            { name: 'Metodologías Ágiles', description: 'Iteraciones cortas, retrospectivas y tableros de progreso' }
        ],
        emerging: [
            { name: 'Inteligencia Artificial', description: 'Aplicación en procesos complejos de gestión y análisis' },
            { name: 'No-Code/Low-Code', description: 'Exploración de plataformas para desarrollo ágil' },
            { name: 'Figma / Notion', description: 'Herramientas colaborativas de diseño y documentación' }
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

