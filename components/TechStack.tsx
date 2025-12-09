import React, { useState } from 'react';
import { TECH_STACK, TECH_CATEGORIES } from '../constants';
import { TechStackItem } from '../types';

const TechStack: React.FC = () => {
    const [activeTech, setActiveTech] = useState<TechStackItem | null>(null);

    const getCategoryIcon = (categoryId: string): string => {
        const category = TECH_CATEGORIES.find(c => c.id === categoryId);
        return category?.icon || 'fa-solid fa-cube';
    };

    const getCategoryColor = (categoryId: string): string => {
        const colors: Record<string, string> = {
            dev: 'bg-digital-cyan',
            m365: 'bg-eng-blue',
            construction: 'bg-safety-orange',
            data: 'bg-accent-yellow text-ink',
            emerging: 'bg-term-green'
        };
        return colors[categoryId] || 'bg-gray-600';
    };

    return (
        <section id="stack" className="bg-ink text-cream py-24 lg:py-32 border-b-6 border-ink relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 uppercase tracking-tight">
                        STACK TECNOLÓGICO
                    </h2>
                    <p className="font-mono text-lg text-gray-400 max-w-[750px] mx-auto">
                        Herramientas para diseñar sistemas de gestión, automatizar procesos y generar reportabilidad en proyectos de construcción e infraestructura.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14">
                    {/* Categories */}
                    <div className="space-y-10">
                        {TECH_CATEGORIES.map(cat => {
                            const techsInCategory = TECH_STACK.filter(t => t.category === cat.id);
                            if (techsInCategory.length === 0) return null;
                            
                            return (
                                <div key={cat.id}>
                                    {/* Category Header */}
                                    <div className={`inline-flex items-center gap-3 ${getCategoryColor(cat.id)} text-cream px-5 py-3 font-display text-sm border-4 border-cream mb-5 shadow-brutal-sm uppercase`}>
                                        <i className={getCategoryIcon(cat.id)}></i>
                                        {cat.title}
                                    </div>
                                    
                                    {/* Tech Items */}
                                    <div className="flex flex-wrap gap-3">
                                        {techsInCategory.map(tech => (
                                            <button 
                                                key={tech.key}
                                                className={`px-5 py-3 border-4 font-mono font-bold text-sm cursor-pointer transition-all duration-100 hover:-translate-y-1 ${
                                                    activeTech?.key === tech.key 
                                                        ? 'bg-accent-yellow text-ink border-accent-yellow' 
                                                        : 'bg-ink-light border-gray-700 text-cream hover:border-cream'
                                                }`}
                                                onMouseEnter={() => setActiveTech(tech)}
                                                onClick={() => setActiveTech(tech)}
                                            >
                                                {tech.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Terminal Panel */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="bg-black border-4 border-cream shadow-brutal-xl relative overflow-hidden">
                            {/* Terminal Header */}
                            <div className="bg-gray-900 border-b-4 border-gray-700 px-5 py-4 flex justify-between items-center">
                                <span className="font-mono text-xs text-gray-500">
                                    <i className="fa-solid fa-terminal mr-2"></i>
                                    felipe@lobo:~/tools
                                </span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-alert-red border-2 border-gray-800"></div>
                                    <div className="w-3 h-3 bg-accent-yellow border-2 border-gray-800"></div>
                                    <div className="w-3 h-3 bg-term-green border-2 border-gray-800"></div>
                                </div>
                            </div>
                            
                            {/* Terminal Content */}
                            <div className="p-6 min-h-[320px] font-mono">
                                {activeTech ? (
                                    <div className="animate-fade-in">
                                        <div className="text-gray-500 mb-3">
                                            <span className="text-term-green">$</span> info --tool "{activeTech.name}"
                                        </div>
                                        
                                        <div className="border-l-4 border-accent-yellow pl-5 mb-6">
                                            <div className="text-accent-yellow font-bold text-lg mb-3 uppercase">
                                                {activeTech.name}
                                            </div>
                                            <div className="text-cream text-sm leading-relaxed">
                                                {activeTech.description}
                                            </div>
                                        </div>
                                        
                                        <div className="text-digital-cyan text-xs flex items-center gap-2">
                                            <i className="fa-solid fa-folder"></i>
                                            Categoría: {TECH_CATEGORIES.find(c => c.id === activeTech.category)?.title}
                                        </div>
                                        <div className="text-term-green text-xs mt-3 typing flex items-center gap-2">
                                            <i className="fa-solid fa-circle-check"></i>
                                            HERRAMIENTA ACTIVA
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-500">
                                        <div className="mb-4">
                                            <span className="text-term-green">$</span> help
                                        </div>
                                        <div className="text-term-green mb-3 flex items-center gap-2">
                                            <i className="fa-solid fa-circle-info"></i>
                                            Comandos:
                                        </div>
                                        <div className="text-cream text-sm space-y-2 ml-4">
                                            <div><i className="fa-solid fa-hand-pointer mr-2 text-gray-600"></i>Selecciona una herramienta del panel</div>
                                            <div><i className="fa-solid fa-arrow-pointer mr-2 text-gray-600"></i>Hover para ver detalles</div>
                                            <div><i className="fa-solid fa-mouse mr-2 text-gray-600"></i>Click para fijar selección</div>
                                        </div>
                                        <div className="text-accent-yellow mt-8 typing flex items-center gap-2">
                                            <i className="fa-solid fa-terminal"></i>
                                            Esperando input...
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-eng-blue border-4 border-cream p-5 text-center">
                                <div className="font-display text-4xl">{TECH_STACK.length}</div>
                                <div className="text-xs font-mono opacity-80 uppercase mt-1">Herramientas</div>
                            </div>
                            <div className="bg-safety-orange border-4 border-ink p-5 text-center text-ink">
                                <div className="font-display text-4xl">{TECH_CATEGORIES.length}</div>
                                <div className="text-xs font-mono uppercase mt-1">Categorías</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
