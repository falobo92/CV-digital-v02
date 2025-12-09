import React from 'react';
import { COMPETENCIES, PROFILE, TIMELINE } from '../constants';

const ValueMap: React.FC = () => {
    const pillars = [
        {
            id: '01',
            title: 'OBRA & TERRENO',
            icon: 'fa-solid fa-helmet-safety',
            desc: `${PROFILE.yearsExperience} años de experiencia directa en inspección técnica, oficina técnica y control de gestión en proyectos de edificación e infraestructura. Conozco las dinámicas reales de obra: plazos, coordinación de subcontratos, control de calidad y los desafíos del día a día en terreno.`
        },
        {
            id: '02',
            title: 'SISTEMAS & AUTOMATIZACIÓN',
            icon: 'fa-solid fa-server',
            desc: 'Diseño e implementación de arquitecturas documentales en SharePoint y Microsoft 365. Desarrollo scripts en Python para extraer, transformar y consolidar datos desde múltiples fuentes, generando dashboards que permiten tomar decisiones basadas en información real.'
        },
        {
            id: '03',
            title: 'METODOLOGÍA & TRAZABILIDAD',
            icon: 'fa-solid fa-sitemap',
            desc: 'Aplicación de Last Planner System y principios Lean, potenciados con trazabilidad digital. Experiencia en gestión documental de Estudios de Impacto Ambiental y coordinación con el Servicio de Evaluación Ambiental, asegurando cumplimiento normativo y control riguroso.'
        }
    ];

    return (
        <section id="about" className="bg-eng-blue text-cream border-b-6 border-ink py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-diagonal opacity-30 pointer-events-none"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 uppercase tracking-tight">
                        PERFIL PROFESIONAL
                    </h2>
                    <p className="text-lg md:text-xl max-w-[950px] opacity-95 leading-relaxed font-mono">
                        {PROFILE.title} de la {PROFILE.education.institution}. Mi carrera ha evolucionado desde el trabajo en terreno hacia la integración de sistemas digitales en la gestión de proyectos. Entiendo que los problemas de la construcción no son solo técnicos: son problemas de flujo de información, trazabilidad y calidad de datos.
                    </p>
                </div>

                {/* Objetivo Profesional */}
                <div className="bg-accent-yellow text-ink border-4 border-ink p-10 shadow-brutal-xl mb-12 relative">
                    <div className="absolute -top-5 -left-3 bg-ink text-cream border-4 border-ink px-5 py-2 font-display text-sm shadow-brutal-sm uppercase">
                        <i className="fa-solid fa-bullseye mr-2"></i>
                        OBJETIVO PROFESIONAL
                    </div>
                    <p className="text-lg leading-relaxed font-mono mt-4">
                        {PROFILE.objective}
                    </p>
                </div>

                {/* Main Summary */}
                <div className="bg-cream text-ink border-4 border-ink p-10 shadow-brutal-xl mb-20 relative">
                    <div className="absolute -top-5 -left-3 bg-safety-orange text-cream border-4 border-ink px-5 py-2 font-display text-sm shadow-brutal-sm uppercase">
                        <i className="fa-solid fa-user mr-2"></i>
                        RESUMEN
                    </div>
                    <p className="text-lg leading-relaxed font-mono mt-4">
                        {PROFILE.summary}
                    </p>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {pillars.map((item) => (
                        <article 
                            key={item.id} 
                            className="bg-cream text-ink border-4 border-ink p-8 relative shadow-brutal transition-all duration-150 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-brutal-xl"
                        >
                            {/* Number */}
                            <div className="absolute -top-5 -right-4 bg-safety-orange border-4 border-ink w-14 h-14 flex items-center justify-center font-display text-xl text-cream shadow-brutal-sm">
                                {item.id}
                            </div>
                            
                            {/* Icon */}
                            <div className="w-16 h-16 bg-ink text-cream flex items-center justify-center mb-6 border-4 border-ink">
                                <i className={`${item.icon} text-2xl`}></i>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-display mb-4 uppercase tracking-tight border-b-4 border-accent-yellow inline-block pb-1">
                                {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="font-mono text-sm leading-relaxed text-gray-700">
                                {item.desc}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Competencies */}
                <div className="bg-ink border-4 border-cream p-10 mb-20 shadow-brutal">
                    <h3 className="font-display text-2xl mb-8 text-accent-yellow uppercase flex items-center gap-3">
                        <i className="fa-solid fa-list-check"></i>
                        COMPETENCIAS CLAVE
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {COMPETENCIES.map((comp, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <i className="fa-solid fa-check text-term-green text-lg mt-1"></i>
                                <span className="font-mono text-sm text-cream/90">{comp}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intereses Profesionales */}
                <div className="bg-digital-cyan text-ink border-4 border-ink p-10 mb-20 shadow-brutal">
                    <h3 className="font-display text-2xl mb-8 uppercase flex items-center gap-3">
                        <i className="fa-solid fa-rocket"></i>
                        INTERESES Y EXPLORACIÓN
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PROFILE.interests.map((interest, idx) => (
                            <div key={idx} className="bg-white border-4 border-ink p-4 shadow-brutal-sm flex items-center gap-3">
                                <i className="fa-solid fa-lightbulb text-accent-yellow text-lg"></i>
                                <span className="font-mono text-sm">{interest}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Evolución - Ultra Modern */}
                <div className="relative">
                    {/* Header con efecto glassmorphism */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border-2 border-cream/30 px-6 py-3 rounded-full mb-6">
                            <div className="w-2 h-2 bg-term-green rounded-full animate-pulse"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-cream/80">Trayectoria Activa</span>
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
                            EVOLUCIÓN PROFESIONAL
                        </h3>
                    </div>
                    
                    {/* Timeline Desktop - Futurista */}
                    <div className="hidden lg:block relative py-8">
                        {/* Línea base con gradiente animado */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-cream/20 -translate-y-1/2">
                            {/* Línea de progreso animada */}
                            <div className="absolute inset-0 bg-gradient-to-r from-safety-orange via-digital-cyan via-accent-yellow to-term-green animate-gradient-x"></div>
                            {/* Efecto glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-safety-orange via-digital-cyan via-accent-yellow to-term-green blur-md opacity-50"></div>
                        </div>
                        
                        {/* Partículas flotantes decorativas */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-digital-cyan rounded-full opacity-40"
                                    style={{
                                        left: `${10 + i * 12}%`,
                                        top: `${30 + (i % 3) * 20}%`,
                                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                />
                            ))}
                        </div>
                        
                        {/* Timeline Items */}
                        <div className="flex justify-between items-center relative">
                            {TIMELINE.map((item, idx) => {
                                const isFirst = idx === 0;
                                const isLast = idx === TIMELINE.length - 1;
                                
                                return (
                                    <div key={idx} className="flex flex-col items-center relative group flex-1">
                                        {/* Connector lines entre nodos */}
                                        {!isLast && (
                                            <div className="absolute top-1/2 left-1/2 w-full h-[2px] -translate-y-1/2 z-0">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/30 to-transparent"></div>
                                            </div>
                                        )}
                                        
                                        {/* Card superior con info */}
                                        <div className={`mb-6 transform transition-all duration-500 group-hover:-translate-y-2 ${idx % 2 === 0 ? 'opacity-100' : 'opacity-0 h-0 mb-0 lg:opacity-100 lg:h-auto lg:mb-6'}`}>
                                            <div className="bg-ink/50 backdrop-blur-sm border border-cream/20 px-4 py-2 rounded-lg relative">
                                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-ink/50"></div>
                                                <p className="font-mono text-[10px] uppercase text-cream/70 leading-tight text-center max-w-[90px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Nodo principal con efectos */}
                                        <div className="relative z-20">
                                            {/* Anillo exterior pulsante */}
                                            <div className={`absolute -inset-3 rounded-full ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:animate-ping`}></div>
                                            
                                            {/* Anillo de glow */}
                                            <div className={`absolute -inset-1 rounded-full ${item.color} opacity-40 blur-sm group-hover:opacity-60 transition-opacity`}></div>
                                            
                                            {/* Nodo principal */}
                                            <div className={`relative w-16 h-16 ${item.color} border-4 border-ink flex items-center justify-center shadow-brutal transition-all duration-300 group-hover:scale-110 group-hover:shadow-brutal-lg group-hover:rotate-12`}>
                                                <i className={`${item.icon} ${item.color === 'bg-accent-yellow' ? 'text-ink' : 'text-cream'} text-2xl transition-transform duration-300 group-hover:scale-110`}></i>
                                            </div>
                                        </div>
                                        
                                        {/* Año y label */}
                                        <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-1">
                                            <div className="font-display text-4xl mb-1 tracking-tight group-hover:text-accent-yellow transition-colors">{item.year}</div>
                                            <div className="font-mono text-[10px] uppercase tracking-wider font-bold text-cream/90 max-w-[100px]">{item.label}</div>
                                        </div>
                                        
                                        {/* Card inferior para items impares */}
                                        <div className={`mt-4 transform transition-all duration-500 group-hover:translate-y-2 ${idx % 2 !== 0 ? 'opacity-100' : 'opacity-0 h-0 mt-0 lg:opacity-0 lg:h-0 lg:mt-0'}`}>
                                            <div className="bg-ink/50 backdrop-blur-sm border border-cream/20 px-4 py-2 rounded-lg relative">
                                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-ink/50"></div>
                                                <p className="font-mono text-[10px] uppercase text-cream/70 leading-tight text-center max-w-[90px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Flecha final animada */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-term-green rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-term-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-term-green rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <i className="fa-solid fa-angles-right text-term-green text-2xl animate-bounce-x"></i>
                        </div>
                    </div>

                    {/* Timeline Tablet (md) */}
                    <div className="hidden md:block lg:hidden relative py-8">
                        <div className="grid grid-cols-5 gap-4">
                            {TIMELINE.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    <div className={`w-14 h-14 ${item.color} border-4 border-ink flex items-center justify-center shadow-brutal-sm transition-all group-hover:scale-110 group-hover:shadow-brutal`}>
                                        <i className={`${item.icon} ${item.color === 'bg-accent-yellow' ? 'text-ink' : 'text-cream'} text-xl`}></i>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="font-display text-2xl">{item.year}</div>
                                        <div className="font-mono text-[9px] uppercase font-bold max-w-[80px]">{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Mobile - Cards apiladas */}
                    <div className="md:hidden relative">
                        {/* Línea vertical con gradiente */}
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-safety-orange via-digital-cyan to-term-green">
                            <div className="absolute inset-0 bg-gradient-to-b from-safety-orange via-digital-cyan to-term-green blur-md opacity-50"></div>
                        </div>
                        
                        <div className="space-y-6 pl-16">
                            {TIMELINE.map((item, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Nodo */}
                                    <div className="absolute -left-[52px] top-4">
                                        <div className={`absolute -inset-1 ${item.color} opacity-30 blur-sm rounded-full`}></div>
                                        <div className={`relative w-12 h-12 ${item.color} border-4 border-ink flex items-center justify-center shadow-brutal-sm`}>
                                            <i className={`${item.icon} ${item.color === 'bg-accent-yellow' ? 'text-ink' : 'text-cream'} text-lg`}></i>
                                        </div>
                                    </div>
                                    
                                    {/* Card */}
                                    <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-5 rounded-lg transition-all group-hover:bg-cream/20 group-hover:border-cream/40">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="font-display text-3xl text-accent-yellow">{item.year}</span>
                                            <span className="font-mono text-xs uppercase font-bold tracking-wider">{item.label}</span>
                                        </div>
                                        <p className="font-mono text-xs text-cream/70">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Footer con flujo visual */}
                    <div className="mt-16 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-ink/50 backdrop-blur-sm border border-cream/20 px-6 py-4 rounded-full">
                            <div className="flex items-center gap-2 text-safety-orange">
                                <i className="fa-solid fa-helmet-safety"></i>
                                <span className="font-mono text-[10px] uppercase">Terreno</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-cream/40 text-xs"></i>
                            <div className="flex items-center gap-2 text-digital-cyan">
                                <i className="fa-solid fa-cube"></i>
                                <span className="font-mono text-[10px] uppercase">BIM</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-cream/40 text-xs"></i>
                            <div className="flex items-center gap-2 text-accent-yellow">
                                <i className="fa-solid fa-microchip"></i>
                                <span className="font-mono text-[10px] uppercase">Digital</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-cream/40 text-xs"></i>
                            <div className="flex items-center gap-2 text-term-green">
                                <i className="fa-solid fa-robot"></i>
                                <span className="font-mono text-[10px] uppercase">IA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueMap;
