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
        return `bg-ink border-${color} shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105 z-10 ring-1 ring-${color}`;
    };

    return (
        <section id="stack" className="bg-ink text-cream border-b-8 border-ink relative overflow-hidden pt-0 pb-32">
            <SectionDivider text="FULL STACK  ///  DIGITAL TOOLS  ///  AUTOMATION" theme="accent" direction="left" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full mt-24">
                {/* Header Area */}
                <div className="mb-12 flex flex-col lg:flex-row justify-between items-end gap-8">
                    <div className="flex-1">
                        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-white leading-none mb-4">
                            Stack <span className="text-white bg-digital-cyan px-2 text-ink">Digital</span>
                        </h2>
                        <p className="font-mono text-gray-400 max-w-2xl">
                            Selecciono mis herramientas por su capacidad de impacto. No uso tecnología por moda, la uso para resolver problemas específicos de construcción y gestión.
                        </p>
                    </div>
                </div>

                {/* Dashboard Grid Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_450px] gap-8">

                    {/* Left Panel: The Grid */}
                    <div className="bg-ink-light border border-gray-800 p-6 md:p-8">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-4 py-2 font-mono text-xs font-bold uppercase transition-all border border-transparent ${activeCategory === 'all' ? 'bg-white text-ink' : 'bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600'}`}
                            >
                                ALL
                            </button>
                            {TECH_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 border border-transparent ${activeCategory === cat.id ? `bg-white text-ink border-${cat.color}` : 'bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600'}`}
                                >
                                    <span className={`w-2 h-2 rounded-full bg-${cat.color}`}></span>
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Tech Grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {filteredTech.map((tech) => {
                                const cat = TECH_CATEGORIES.find(c => c.id === tech.category);
                                return (
                                    <button
                                        key={tech.key}
                                        onClick={() => setActiveTech(tech)}
                                        className={`aspect-square relative flex flex-col items-center justify-center p-3 border-2 transition-all duration-200 group ${activeTech?.key === tech.key
                                            ? getSelectionStyle(tech)
                                            : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-600 hover:bg-gray-800 hover:text-gray-300'
                                            }`}
                                    >
                                        {/* Category Indicator Dot */}
                                        <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-${cat?.color} opacity-50 group-hover:opacity-100`}></div>

                                        {/* Main Icon */}
                                        <div className={`text-4xl mb-3 transition-colors flex items-center justify-center ${activeTech?.key === tech.key ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                                            <i className={tech.icon}></i>
                                        </div>
                                        <div className="font-mono text-[9px] sm:text-[10px] font-bold uppercase truncate w-full text-center tracking-tight leading-tight">
                                            {tech.name}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Panel: Data Inspector */}
                    <div className="border-4 border-white bg-ink relative min-h-[450px] p-8 flex flex-col shadow-brutal-xl sticky top-8">
                        {activeTech ? (
                            <div className="animate-fade-in flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8 border-b border-gray-800 pb-6">
                                    <div>
                                        <div className={`font-mono text-xs mb-2 flex items-center gap-2 ${getCategoryColor(activeTech.category)}`}>
                                            <span className={`w-2 h-2 rounded-full bg-current animate-pulse`}></span>
                                            SELECTED_TOOL
                                        </div>
                                        <h3 className="font-display text-3xl md:text-4xl text-white uppercase leading-none">{activeTech.name}</h3>
                                    </div>
                                    <div className={`w-12 h-12 border-2 flex items-center justify-center text-xl ${getCategoryBorder(activeTech.category)} ${getCategoryColor(activeTech.category)}`}>
                                        <i className={TECH_CATEGORIES.find(c => c.id === activeTech.category)?.icon}></i>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-8">
                                    {/* Function */}
                                    <div>
                                        <h4 className="font-mono text-xs font-bold text-gray-500 uppercase mb-2">PARA QUÉ SIRVE</h4>
                                        <p className="font-mono text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-700">
                                            {activeTech.description}
                                        </p>
                                    </div>

                                    {/* Use Case */}
                                    <div>
                                        <h4 className={`font-mono text-xs font-bold uppercase mb-3 ${getCategoryColor(activeTech.category)}`}>
                                            <i className="fa-solid fa-crosshairs mr-2"></i>
                                            PARA QUÉ LA USO
                                        </h4>
                                        <div className="bg-gray-900/50 p-5 border border-gray-700 relative overflow-hidden group">
                                            {/* Decorative element */}
                                            <div className={`absolute top-0 left-0 w-1 h-full bg-${TECH_CATEGORIES.find(c => c.id === activeTech.category)?.color} transition-all duration-300 group-hover:w-1.5`}></div>

                                            <p className="font-mono text-sm text-white font-medium leading-relaxed relative z-10">
                                                {activeTech.reason}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase">
                                    <span>ID: {activeTech.key}</span>
                                    <span>STATUS: DEPLOYED</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
                                <div className="w-20 h-20 border-2 border-dashed border-white rounded-full flex items-center justify-center mb-6 animate-spin-slow">
                                    <i className="fa-solid fa-gear text-3xl text-white"></i>
                                </div>
                                <h4 className="font-display text-xl text-white uppercase mb-2">SISTEMA EN ESPERA</h4>
                                <p className="font-mono text-sm text-gray-400 max-w-[250px]">
                                    Selecciona una herramienta del grid para inspeccionar sus detalles técnicos.
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
