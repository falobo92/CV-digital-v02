import React, { useState } from 'react';
import { TECH_STACK, TECH_CATEGORIES } from '../constants';
import { TechStackItem } from '../types';
import SectionDivider from './ui/SectionDivider';

// Improved Context Helper
const getToolContext = (key: string): string => {
    const contexts: Record<string, string> = {
        // Development
        'dev-0': 'REACT: Desarrollo de dashboards interactivos para visualizar KPIs de obra en tiempo real, reemplazando reportes estáticos en papel.',
        'dev-1': 'TYPESCRIPT: Garantiza que la lógica de cálculo en mis aplicaciones de cubicación sea robusta y sin errores de tipo.',
        'dev-2': 'PYTHON: Scripts automatizados para procesar miles de filas de Excel (ETL), limpiando datos de subcontratos y estados de pago.',

        // Microsoft 365
        'm365-0': 'SHAREPOINT: Creación de Entornos Comunes de Datos (CDE) para centralizar planos, RDI y documentos de calidad en un solo lugar seguro.',
        'm365-1': 'POWER AUTOMATE: Automatización de alertas de vencimiento para boletas de garantía y flujos de aprobación de estados de pago.',
        'm365-2': 'POWER BI: Cuadros de mando gerenciales para control de avance físico-financiero y desviaciones de presupuesto.',

        // Construction Tech
        'construction-0': 'NAVISWORKS: Detección temprana de interferencias (clash detection) entre instalaciones y estructura antes de llegar a obra.',
        'construction-1': 'MS PROJECT: Planificación detallada (Carta Gantt) y seguimiento de la ruta crítica para evitar atrasos en hitos contractuales.',
        'construction-2': 'REVIT: Extracción de cubicaciones precisas (QTO) directamente del modelo BIM para presupuestos más exactos.',

        // Data & Methodologies
        'data-0': 'SQL: Consultas directas a bases de datos de ERPs para extraer información histórica de costos unitarios.',
        'data-1': 'AGILE/SCRUM: Gestión de equipos de oficina técnica mediante sprints semanales para asegurar entregas continuas de documentación.',
    };
    return contexts[key] || 'Herramienta clave seleccionada por su eficiencia en la resolución de problemas técnicos específicos de la industria AEC.';
};

const TechStack: React.FC = () => {
    const [activeTech, setActiveTech] = useState<TechStackItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    // Filter items
    const filteredTech = activeCategory === 'all'
        ? TECH_STACK
        : TECH_STACK.filter(t => t.category === activeCategory);

    const getCategoryColor = (categoryId: string) => {
        const cat = TECH_CATEGORIES.find(c => c.id === categoryId);
        return cat ? `text-${cat.color}` : 'text-white';
    };

    const getCategoryBorder = (categoryId: string) => {
        const cat = TECH_CATEGORIES.find(c => c.id === categoryId);
        return cat ? `border-${cat.color}` : 'border-gray-700';
    };

    // Helper for category-specific selection style
    const getSelectionStyle = (tech: TechStackItem) => {
        const cat = TECH_CATEGORIES.find(c => c.id === tech.category);
        const color = cat?.color || 'gray-500';
        return `bg-ink border-${color} shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-110 z-20 ring-2 ring-${color}`;
    };

    return (
        <section id="stack" className="bg-ink text-cream border-b-8 border-ink relative overflow-hidden pt-0 pb-32">
            <SectionDivider text="FULL STACK  ///  DIGITAL TOOLS  ///  AUTOMATION" theme="accent" direction="left" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full mt-24">
                {/* Header Area */}
                <div className="mb-12 flex flex-col lg:flex-row justify-between items-end gap-8">
                    <div className="flex-1">
                        <h2 className="text-7xl md:text-9xl font-display uppercase tracking-tighter text-white leading-[0.8] mb-6">
                            Stack <span className="text-white bg-digital-cyan px-2 text-ink">Digital</span>
                        </h2>
                        <p className="font-mono text-gray-400 max-w-2xl text-lg">
                            Arquitectura de herramientas de alto rendimiento. Selección estratégica para impacto máximo en construcción y gestión.
                        </p>
                    </div>
                </div>

                {/* Dashboard Grid Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_500px] gap-8">

                    {/* Left Panel: The Grid */}
                    <div className="bg-ink-light border border-gray-800 p-6 md:p-8">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all border border-transparent ${activeCategory === 'all' ? 'bg-white text-ink' : 'bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600'}`}
                            >
                                ALL SYSTEMS
                            </button>
                            {TECH_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 border border-transparent ${activeCategory === cat.id ? `bg-white text-ink border-${cat.color}` : 'bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600'}`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full bg-${cat.color}`}></span>
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Tech Grid - Denser and smaller */}
                        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
                            {filteredTech.map((tech) => {
                                const cat = TECH_CATEGORIES.find(c => c.id === tech.category);
                                return (
                                    <button
                                        key={tech.key}
                                        onClick={() => setActiveTech(tech)}
                                        className={`aspect-square relative flex flex-col items-center justify-center p-1 border transition-all duration-150 group overflow-hidden ${activeTech?.key === tech.key
                                            ? getSelectionStyle(tech)
                                            : 'bg-gray-900 border-gray-800 text-gray-600 hover:border-gray-500 hover:bg-gray-800 hover:text-gray-200'
                                            }`}
                                    >
                                        {/* Corner Accents */}
                                        <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-${cat?.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-${cat?.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                        {/* Main Icon */}
                                        <div className={`text-xl mb-1 transition-transform group-hover:scale-110 ${activeTech?.key === tech.key ? 'text-white' : ''}`}>
                                            <i className={tech.icon}></i>
                                        </div>
                                        {/* Label - Hidden on very small screens or just very small */}
                                        <div className="font-mono text-[9px] font-bold uppercase truncate w-full text-center tracking-tight leading-none opacity-80 group-hover:opacity-100">
                                            {tech.name}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Panel: Data Inspector */}
                    <div className="border border-gray-700 bg-ink relative min-h-[500px] flex flex-col sticky top-8 group">
                        {/* Tech Corners / Hud elements */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

                        {activeTech ? (
                            <div className="animate-fade-in flex flex-col h-full p-8 bg-scanlines">
                                <div className="flex items-start justify-between mb-8 border-b border-gray-800 pb-6 relative">
                                    <div className="absolute -bottom-[1px] -right-2 w-4 h-4 bg-ink border border-gray-800 rotate-45"></div>
                                    <div>
                                        <div className={`font-mono text-xs mb-2 flex items-center gap-2 ${getCategoryColor(activeTech.category)}`}>
                                            <span className={`w-2 h-2 bg-current animate-pulse`}></span>
                                            SYSTEM_SELECTED // {activeTech.key}
                                        </div>
                                        <h3 className="font-display text-5xl text-white uppercase leading-none tracking-tighter">{activeTech.name}</h3>
                                    </div>
                                    <div className={`w-16 h-16 border-2 flex items-center justify-center text-3xl ${getCategoryBorder(activeTech.category)} ${getCategoryColor(activeTech.category)} bg-ink-light`}>
                                        <i className={TECH_CATEGORIES.find(c => c.id === activeTech.category)?.icon}></i>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-8">
                                    {/* Function */}
                                    <div>
                                        <h4 className="font-mono text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">FUNCIONALIDAD</h4>
                                        <p className="font-mono text-lg text-gray-200 leading-tight">
                                            "{activeTech.description}"
                                        </p>
                                    </div>

                                    {/* Use Case */}
                                    <div>
                                        <h4 className={`font-mono text-xs font-bold uppercase mb-3 tracking-widest ${getCategoryColor(activeTech.category)}`}>
                                            <i className="fa-solid fa-crosshairs mr-2"></i>
                                            APLICACIÓN PRÁCTICA
                                        </h4>
                                        <div className="bg-gray-900 border-l-4 border-current p-5 relative overflow-hidden" style={{ borderColor: TECH_CATEGORIES.find(c => c.id === activeTech.category)?.color ? `var(--${TECH_CATEGORIES.find(c => c.id === activeTech.category)?.color})` : '#333' }}>
                                            <p className="font-mono text-base text-white font-medium leading-relaxed relative z-10">
                                                {activeTech.reason}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase border-t border-gray-800">
                                    <span>CONTEXT_ID: {getToolContext(activeTech.key).substring(0, 15)}...</span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        ONLINE
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                <div className="w-24 h-24 border border-gray-800 rounded-full flex items-center justify-center mb-6 animate-spin-slow opacity-20">
                                    <i className="fa-solid fa-circle-notch text-4xl text-white"></i>
                                </div>
                                <h4 className="font-display text-2xl text-white uppercase mb-2 tracking-widest">SISTEMA EN ESPERA</h4>
                                <p className="font-mono text-sm text-gray-500 max-w-[300px]">
                                    // Seleccione un módulo de la matriz para acceder a los protocolos y especificaciones.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
