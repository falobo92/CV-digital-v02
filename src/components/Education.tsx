import React, { useState, useEffect, useRef } from 'react';
import { EDUCATION, PROFILE } from '../constants';
import SectionDivider from './ui/SectionDivider';

const Education: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSpecIndex, setActiveSpecIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Detectar visibilidad para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Cursos y certificaciones adicionales
    const continuousLearning = [
        { name: 'Automatización con Power Platform', status: 'completed', year: '2024', icon: 'fa-solid fa-bolt' },
        { name: 'Análisis de Datos con Python', status: 'in_progress', year: '2025', icon: 'fa-brands fa-python' },
        { name: 'IA Generativa para Productividad', status: 'in_progress', year: '2025', icon: 'fa-solid fa-microchip' },
    ];

    return (
        <section
            ref={sectionRef}
            id="educacion"
            className="border-b-6 border-ink bg-white relative overflow-hidden pb-24 lg:pb-32"
        >
            <SectionDivider text="ACADÉMICO /// APRENDIZAJE CONTINUO /// HABILIDADES" theme="light" direction="left" />

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 border-4 border-dashed border-gray-200 rotate-12 opacity-50 hidden lg:block"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-gray-200 -rotate-6 opacity-50 hidden lg:block"></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14 lg:mb-20">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">05</div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Formación & Aprendizaje</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tight">
                        FORMACIÓN
                    </h2>
                    <p className="font-mono text-sm sm:text-base text-gray-500 mt-4 max-w-2xl mx-auto">
                        Base técnica sólida + actualización constante = capacidad de adaptación
                    </p>
                </div>

                {/* Main Grid - 3 Columns on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1400px] mx-auto">

                    {/* Column 1: Formal Education */}
                    <div className="lg:col-span-5">
                        <h3 className="font-display text-xl sm:text-2xl border-b-4 sm:border-b-6 border-eng-blue inline-block pb-2 mb-8 sm:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                            <i className="fa-solid fa-graduation-cap"></i>
                            EDUCACIÓN FORMAL
                        </h3>

                        <div className="space-y-6 sm:space-y-8">
                            {EDUCATION.map((edu, index) => (
                                <article
                                    key={edu.id}
                                    className={`bg-cream border-3 sm:border-4 border-ink p-5 sm:p-8 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all relative group ${isVisible ? 'animate-slide-in-left' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Distinction Badge */}
                                    {edu.distinction && (
                                        <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-accent-yellow text-ink px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold border-2 sm:border-4 border-ink shadow-brutal-sm uppercase z-10">
                                            <i className="fa-solid fa-award mr-1 sm:mr-2"></i>
                                            <span className="hidden sm:inline">{edu.distinction}</span>
                                            <span className="sm:hidden">Distinción</span>
                                        </div>
                                    )}

                                    {/* Number Badge */}
                                    <div className="absolute -left-3 top-6 w-8 h-8 bg-eng-blue text-white flex items-center justify-center font-mono text-sm font-bold border-2 border-ink">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Institution */}
                                    <div className="font-mono text-xs sm:text-sm text-gray-500 mb-2 flex items-center gap-2 font-bold tracking-wider uppercase pl-4">
                                        <i className="fa-solid fa-building-columns text-eng-blue"></i>
                                        {edu.institution}
                                    </div>

                                    {/* Degree */}
                                    <h4 className="font-display text-xl sm:text-2xl md:text-3xl mb-3 uppercase leading-none text-ink pl-4">
                                        {edu.degree}
                                    </h4>

                                    {/* Period */}
                                    <div className="inline-block bg-ink text-cream px-4 py-2 text-xs font-bold font-mono uppercase mb-4 ml-4">
                                        <i className="fa-solid fa-calendar-days mr-2"></i>
                                        {edu.period}
                                    </div>

                                    {/* Specializations - Interactive */}
                                    {edu.details && edu.details.length > 0 && (
                                        <div className="pt-4 border-t-2 border-dashed border-gray-300 mt-4">
                                            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3 pl-4">
                                                Especialización
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {edu.details.map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        onMouseEnter={() => setActiveSpecIndex(idx)}
                                                        onMouseLeave={() => setActiveSpecIndex(null)}
                                                        className={`text-xs sm:text-sm font-mono text-gray-700 p-2 sm:p-3 border-2 border-transparent hover:border-eng-blue hover:bg-eng-blue/5 transition-all cursor-default flex items-start gap-2 ${activeSpecIndex === idx ? 'border-eng-blue bg-eng-blue/5' : ''
                                                            }`}
                                                    >
                                                        <i className={`fa-solid fa-caret-right mt-0.5 transition-colors ${activeSpecIndex === idx ? 'text-eng-blue' : 'text-safety-orange'}`}></i>
                                                        <span>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Languages + Skills */}
                    <div className="lg:col-span-4 space-y-8 sm:space-y-12">
                        {/* Languages */}
                        <div>
                            <h3 className="font-display text-xl sm:text-2xl border-b-4 sm:border-b-6 border-safety-orange inline-block pb-2 mb-8 sm:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                                <i className="fa-solid fa-globe"></i>
                                IDIOMAS
                            </h3>

                            <div className="space-y-5 sm:space-y-6">
                                {/* Spanish */}
                                <div
                                    className={`bg-eng-blue border-3 sm:border-4 border-ink p-4 sm:p-6 shadow-brutal text-cream relative overflow-hidden ${isVisible ? 'animate-slide-in-right' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: '200ms' }}
                                >
                                    <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10">
                                        <i className="fa-solid fa-comments text-5xl sm:text-7xl"></i>
                                    </div>

                                    <div className="flex justify-between items-center mb-3 relative z-10 gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🇨🇱</span>
                                            <span className="font-display text-xl sm:text-2xl uppercase">ESPAÑOL</span>
                                        </div>
                                        <span className="font-mono text-[10px] sm:text-xs font-bold bg-accent-yellow text-ink px-2 py-1 sm:px-3 sm:py-1">NATIVO</span>
                                    </div>

                                    <div className="h-3 bg-ink/30 w-full mb-1 overflow-hidden">
                                        <div
                                            className={`h-full bg-term-green transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                                            style={{ transitionDelay: '500ms' }}
                                        ></div>
                                    </div>
                                    <div className="text-right font-mono text-xs text-cream/70">100%</div>
                                </div>

                                {/* English */}
                                <div
                                    className={`bg-white border-3 sm:border-4 border-ink p-4 sm:p-6 shadow-brutal relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'
                                        }`}
                                    style={{ animationDelay: '350ms' }}
                                >
                                    <div className="flex justify-between items-center mb-3 gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🇬🇧</span>
                                            <span className="font-display text-xl sm:text-2xl uppercase">INGLÉS</span>
                                        </div>
                                        <span className="font-mono text-[10px] sm:text-xs font-bold bg-digital-cyan text-ink px-2 py-1 sm:px-3 sm:py-1 whitespace-nowrap">INTERMEDIO (B2)</span>
                                    </div>

                                    <div className="h-3 bg-gray-100 border border-gray-300 w-full mb-1 overflow-hidden">
                                        <div
                                            className={`h-full bg-eng-blue transition-all duration-1000 ease-out relative ${isVisible ? 'w-[65%]' : 'w-0'}`}
                                            style={{ transitionDelay: '700ms' }}
                                        >
                                            <div className="absolute -right-1 -top-0.5 w-3 h-4 bg-ink"></div>
                                        </div>
                                    </div>
                                    <div className="text-right font-mono text-xs text-gray-500">65%</div>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                                            <i className="fa-solid fa-check text-term-green"></i>
                                            Documentación técnica
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                                            <i className="fa-solid fa-check text-term-green"></i>
                                            Normativas internacionales (ASTM/ISO)
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                                            <i className="fa-solid fa-check text-term-green"></i>
                                            Comunicación en proyectos
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Core Competencies Preview */}
                        <div
                            className={`bg-cream border-3 sm:border-4 border-ink p-5 sm:p-6 shadow-brutal ${isVisible ? 'animate-slide-in-right' : 'opacity-0'
                                }`}
                            style={{ animationDelay: '500ms' }}
                        >
                            <h4 className="font-display text-lg sm:text-xl mb-4 uppercase flex items-center gap-2">
                                <i className="fa-solid fa-star text-accent-yellow"></i>
                                COMPETENCIAS CLAVE
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {PROFILE.competencies.slice(0, 6).map((comp, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-ink text-cream text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wide border-2 border-ink hover:bg-cream hover:text-ink transition-colors cursor-default"
                                    >
                                        {comp.split(' ').slice(0, 3).join(' ')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Continuous Learning */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-xl sm:text-2xl border-b-4 sm:border-b-6 border-term-green inline-block pb-2 mb-8 sm:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                            <i className="fa-solid fa-rotate"></i>
                            ACTUALIZACIÓN
                        </h3>

                        {/* Learning Timeline */}
                        <div
                            className={`bg-ink text-cream border-3 sm:border-4 border-ink p-5 sm:p-6 shadow-brutal relative overflow-hidden ${isVisible ? 'animate-slide-in-right' : 'opacity-0'
                                }`}
                            style={{ animationDelay: '600ms' }}
                        >
                            {/* Background decoration */}
                            <div className="absolute -right-8 -bottom-8 text-gray-800 opacity-20 transform -rotate-12">
                                <i className="fa-solid fa-brain text-8xl"></i>
                            </div>

                            <div className="relative z-10 space-y-4">
                                {continuousLearning.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`border-l-4 pl-4 py-2 transition-all ${item.status === 'completed'
                                                ? 'border-term-green'
                                                : 'border-digital-cyan animate-pulse'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <i className={`${item.icon} text-sm ${item.status === 'completed' ? 'text-term-green' : 'text-digital-cyan'}`}></i>
                                            <span className={`text-[10px] font-mono uppercase tracking-wider ${item.status === 'completed' ? 'text-term-green' : 'text-digital-cyan'
                                                }`}>
                                                {item.status === 'completed' ? 'COMPLETADO' : 'EN CURSO'}
                                            </span>
                                            <span className="text-[10px] font-mono text-gray-500 ml-auto">{item.year}</span>
                                        </div>
                                        <div className="font-bold text-sm sm:text-base">{item.name}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-700 mt-6 pt-4 relative z-10">
                                <div className="flex items-center gap-2 text-accent-yellow text-xs font-mono uppercase">
                                    <i className="fa-solid fa-lightbulb"></i>
                                    Filosofía
                                </div>
                                <p className="font-mono text-xs leading-relaxed text-gray-400 mt-2 italic">
                                    "La tecnología no es el fin, es el medio para reducir incertidumbre y controlar costos."
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div
                            className={`mt-6 grid grid-cols-2 gap-3 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                            style={{ animationDelay: '750ms' }}
                        >
                            <div className="bg-eng-blue text-cream border-3 border-ink p-4 text-center shadow-brutal">
                                <div className="font-display text-3xl sm:text-4xl">{PROFILE.yearsExperience}+</div>
                                <div className="font-mono text-[10px] uppercase tracking-wider">Años Exp.</div>
                            </div>
                            <div className="bg-safety-orange text-ink border-3 border-ink p-4 text-center shadow-brutal">
                                <div className="font-display text-3xl sm:text-4xl">4</div>
                                <div className="font-mono text-[10px] uppercase tracking-wider">Proyectos</div>
                            </div>
                        </div>

                        {/* Interests */}
                        <div
                            className={`mt-6 border-3 border-ink bg-white p-4 shadow-brutal ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                            style={{ animationDelay: '900ms' }}
                        >
                            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">
                                Áreas de interés
                            </div>
                            <div className="space-y-2">
                                {PROFILE.interests.slice(0, 4).map((interest, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-gray-600">
                                        <i className="fa-solid fa-arrow-right text-safety-orange mt-0.5 text-[10px]"></i>
                                        <span>{interest.split(' ').slice(0, 5).join(' ')}...</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
