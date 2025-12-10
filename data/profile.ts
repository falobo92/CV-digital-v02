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
        'Gestión Técnica de Proyectos: Dirección integral en oficina técnica y terreno, equilibrando el control de costos, plazos y calidad en proyectos de edificación e infraestructura crítica.',
        'Arquitectura de Información (CDE): Diseño y despliegue de Entornos Comunes de Datos (CDE) en SharePoint/M365, garantizando la integridad, seguridad y accesibilidad de la información técnica.',
        'Automatización de Procesos (RPA): Desarrollo de scripts en Python y flujos en Power Automate para eliminar tareas repetitivas, reducir el error humano y acelerar la reportabilidad.',
        'Lean Construction & Planificación: Implementación práctica de Last Planner System para optimizar la confiabilidad del plan semanal y fomentar una cultura colaborativa en obra.',
        'Gestión Ambiental Estratégica: Coordinación técnica en el marco del SEIA, asegurando la trazabilidad rigurosa de expedientes, adendas y cumplimiento normativo ante la autoridad.',
        'Coordinación Digital BIM 4D: Integración de modelos tridimensionales con la programación (Synchro), anticipando conflictos constructivos antes de llegar a terreno.',
        'Liderazgo en Transformación Digital: Capacidad para traducir necesidades operativas de la construcción en soluciones tecnológicas, gestionando la adopción y el cambio cultural en los equipos.',
        'Innovación Aplicada: Evaluación continua de tecnologías emergentes (Low-Code, IA) para resolver problemáticas reales de la industria, evitando la digitalización por mera tendencia.'
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
            { name: 'Python', icon: 'fa-brands fa-python', description: 'Ingeniería de Datos & ETL', reason: 'Desarrollo de scripts para limpieza de datos, automatización de reportes complejos y conexión de silos de información (SharePoint/Excel) hacia tableros de control.' },
            { name: 'HTML5 / CSS / JS', icon: 'fa-brands fa-js', description: 'Front-end Ligero', reason: 'Creación de interfaces web ágiles y personalizadas para facilitar la consulta de datos técnicos a equipos no digitales.' },
            { name: 'JSON & APIs', icon: 'fa-solid fa-code', description: 'Interoperabilidad', reason: 'Gestión del intercambio de datos estructurados entre plataformas M365 y herramientas de análisis, asegurando la integridad de la información.' },
            { name: 'Power Automate', icon: 'fa-solid fa-bolt', description: 'Orquestación de Flujos', reason: 'Automatización de procesos de negocio: aprobaciones, notificaciones críticas y enrutamiento de documentos sin intervención manual.' }
        ],
        microsoft365: [
            { name: 'SharePoint / M365', icon: 'fa-brands fa-microsoft', description: 'Entorno Común de Datos', reason: 'Arquitectura de la información: diseño de sitios y bibliotecas con gobernanza clara de permisos y metadatos para proyectos de gran envergadura.' },
            { name: 'Power BI', icon: 'fa-solid fa-chart-column', description: 'Business Intelligence', reason: 'Transformación de datos operativos en dashboards gerenciales para el monitoreo de KPIs financieros, de avance y calidad.' },
            { name: 'Excel + Power Query', icon: 'fa-solid fa-file-excel', description: 'Modelado de Datos', reason: 'Estandarización de planillas complejas y cubicaciones, permitiendo análisis rápidos y confiables para la oficina técnica.' }
        ],
        construction: [
            { name: 'Synchro 4D', icon: 'fa-solid fa-layer-group', description: 'Simulación Constructiva', reason: 'Vinculación del cronograma al modelo BIM para validar visualmente la estrategia de ejecución y detectar riesgos espaciales.' },
            { name: 'MS Project', icon: 'fa-solid fa-calendar-check', description: 'Control de Cronograma', reason: 'Gestión tradicional de plazos, análisis de ruta crítica y seguimiento de desviaciones en la programación maestra.' },
            { name: 'QGIS', icon: 'fa-solid fa-map-location-dot', description: 'Inteligencia Territorial', reason: 'Análisis espacial de áreas de influencia y cruce de variables geográficas para apoyar la gestión ambiental y de permisos.' },
            { name: 'AutoCAD / Presto', icon: 'fa-solid fa-ruler-combined', description: 'Ingeniería de Costos', reason: 'Base técnica para el estudio de propuestas, control de presupuestos y gestión de subcontratos.' }
        ],
        methodologies: [
            { name: 'Last Planner System', icon: 'fa-solid fa-list-check', description: 'Planificación Colaborativa', reason: 'Gestión de compromisos semanales para aumentar la confiabilidad del flujo de trabajo y reducir la variabilidad en terreno.' },
            { name: 'BIM Management', icon: 'fa-solid fa-cubes', description: 'Coordinación Virtual', reason: 'Gestión de la información de modelos para asegurar que la construcción digital preceda y facilite la construcción física.' },
            { name: 'Gestión Documental', icon: 'fa-solid fa-folder-tree', description: 'Control de Activos de Info.', reason: 'Implementación de estándares ISO y buenas prácticas para garantizar que la documentación sea auditable y accesible.' }
        ],
        emerging: [
            { name: 'Inteligencia Artificial', icon: 'fa-solid fa-microchip', description: 'Asistencia Analítica', reason: 'Exploración de modelos para optimizar la redacción técnica, análisis de patrones en datos de obra y soporte a la decisión.' },
            { name: 'No-Code Tools', icon: 'fa-solid fa-laptop-code', description: 'Prototipado Rápido', reason: 'Desarrollo ágil de micro-soluciones para resolver "dolores" específicos de la obra sin depender de grandes desarrollos de software.' }
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
        image: '/images/projects/cramsa_sketch.jpg',
        challenge: 'Orquestar la gestión de información para un Estudio de Impacto Ambiental de alta complejidad, centralizando y validando el flujo documental técnico entre más de 15 consultoras especializadas y el equipo titular.',
        results: [
            'Implementación exitosa de un CDE en Microsoft 365, garantizando 100% de trazabilidad en el ciclo de vida documental.',
            'Desarrollo de analítica automatizada (Python) para monitoreo de entregables en tiempo real, reduciendo tiempos de gestión.',
            'Optimización de auditorías internas gracias a la estructuración rigurosa de metadatos y evidencias.'
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
        challenge: 'Asegurar la integridad documental en las obras civiles de uno de los proyectos astronómicos más relevantes a nivel mundial, cumpliendo con exigentes estándares internacionales de calidad y auditoría.',
        results: [
            'Consolidación de una línea base documental robusta para auditorías y control de cambios.',
            'Gestión impecable de RFIs y planos, facilitando la labor de la inspección técnica en un entorno de alta complejidad.',
            'Aporte a la cultura de calidad mediante un control riguroso de registros de campo.'
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
        challenge: 'Modernizar el control de un proyecto de edificación en altura (18 pisos) mediante la integración del modelo BIM con el programa de obra, buscando mitigar riesgos en la secuencia de hormigonado e instalaciones.',
        results: [
            'Liderazgo en la primera implementación de Synchro 4D en la compañía, estableciendo un nuevo estándar de control.',
            'Detección preventiva de conflictos geométricos y logísticos, evitando paralizaciones en terreno.',
            'Mejora en la comunicación con el mandante mediante reportes visuales de avance y proyecciones de cierre precisas.'
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
        challenge: 'Elevar los estándares de productividad y cumplimiento en obra mediante la adopción de metodologías Lean, gestionando una red compleja de subcontratos de terminaciones.',
        results: [
            'Incremento sostenido del PPC (Porcentaje de Plan Cumplido) a través de la metodología Last Planner System.',
            'Reducción significativa de retrabajos gracias a un seguimiento sistemático y colaborativo en terreno.',
            'Coordinación eficiente de partidas críticas, asegurando la continuidad operacional.'
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
        challenge: 'Optimización de la gestión de terreno en proyecto inmobiliario de alta densidad, asegurando el cumplimiento de hitos contractuales y estándares de calidad.',
        results: [
            'Supervisión rigurosa de terminaciones y entrega a propietarios, minimizando observaciones de postventa.',
            'Control de avance físico y financiero, reportando directamente a la administración de obra.',
            'Gestión proactiva de seguridad y medio ambiente en un entorno urbano denso.'
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

// Categorías de herramientas
export const TECH_CATEGORIES = [
    { id: 'development', title: 'DESARROLLO Y AUTOMATIZACIÓN', icon: 'fa-solid fa-code' },
    { id: 'microsoft365', title: 'ECOSISTEMA MICROSOFT 365', icon: 'fa-brands fa-microsoft' },
    { id: 'construction', title: 'GESTIÓN Y CONSTRUCCIÓN', icon: 'fa-solid fa-helmet-safety' },
    { id: 'methodologies', title: 'METODOLOGÍAS', icon: 'fa-solid fa-sitemap' },
    { id: 'emerging', title: 'TECNOLOGÍAS EMERGENTES', icon: 'fa-solid fa-rocket' }
];
