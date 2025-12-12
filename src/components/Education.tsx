import React from 'react';
import { EDUCATION } from '../constants';
import SectionDivider from './ui/SectionDivider';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="border-b-6 border-ink bg-white relative overflow-hidden pb-24 lg:pb-32">
            <SectionDivider text="ACADÉMICO /// APRENDIZAJE CONTINUO /// HABILIDADES" theme="light" direction="left" />
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-10 sm:mb-14 lg:mb-20 text-center uppercase tracking-tight">
                    FORMACIÓN
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 max-w-[1400px] mx-auto">
                    {/* Education */}
                    <div>
                        <h3 className="font-display text-xl sm:text-2xl border-b-4 sm:border-b-6 border-eng-blue inline-block pb-2 mb-8 sm:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                            <i className="fa-solid fa-graduation-cap"></i>
                            EDUCACIÓN
                        </h3>

                        <div className="space-y-6 sm:space-y-10">
                            {EDUCATION.map((edu) => (
                                <article
                                    key={edu.id}
                                    className="bg-cream border-3 sm:border-4 border-ink p-5 sm:p-8 lg:p-10 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all relative group"
                                >
                                    {/* Distinction Badge */}
                                    {edu.distinction && (
                                        <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-accent-yellow text-ink px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold border-2 sm:border-4 border-ink shadow-brutal-sm uppercase">
                                            <i className="fa-solid fa-award mr-1 sm:mr-2"></i>
                                            <span className="hidden sm:inline">{edu.distinction}</span>
                                            <span className="sm:hidden">Distinción</span>
                                        </div>
                                    )}

                                    {/* Institution */}
                                    <div className="font-mono text-sm text-gray-500 mb-2 flex items-center gap-2 font-bold tracking-wider uppercase">
                                        <i className="fa-solid fa-building-columns text-eng-blue"></i>
                                        {edu.institution}
                                    </div>

                                    {/* Degree */}
                                    <h4 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 uppercase leading-none text-ink">
                                        {edu.degree}
                                    </h4>

                                    {/* Period */}
                                    <div className="inline-block bg-ink text-cream px-4 py-2 text-xs font-bold font-mono uppercase mb-6">
                                        {edu.period}
                                    </div>

                                    {/* Details */}
                                    {edu.details && edu.details.length > 0 && (
                                        <div className="pt-6 border-t-2 border-dashed border-gray-300">
                                            <ul className="space-y-3">
                                                {edu.details.map((detail, idx) => (
                                                    <li key={idx} className="text-sm font-mono text-gray-700 flex items-start gap-3 leading-relaxed">
                                                        <i className="fa-solid fa-caret-right text-safety-orange mt-1"></i>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Languages & Continuous Learning */}
                    <div className="space-y-10 sm:space-y-16">
                        {/* Languages */}
                        <div>
                            <h3 className="font-display text-xl sm:text-2xl border-b-4 sm:border-b-6 border-safety-orange inline-block pb-2 mb-8 sm:mb-12 uppercase flex items-center gap-2 sm:gap-3">
                                <i className="fa-solid fa-globe"></i>
                                IDIOMAS
                            </h3>

                            <div className="space-y-4 sm:space-y-8">
                                {/* Spanish */}
                                <div className="bg-eng-blue border-3 sm:border-4 border-ink p-4 sm:p-6 lg:p-8 shadow-brutal text-cream relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10">
                                        <i className="fa-solid fa-comments text-5xl sm:text-8xl"></i>
                                    </div>
                                    <div className="flex justify-between items-end mb-3 sm:mb-4 relative z-10 gap-2">
                                        <span className="font-display text-xl sm:text-2xl lg:text-3xl uppercase">ESPAÑOL</span>
                                        <span className="font-mono text-[10px] sm:text-xs font-bold bg-accent-yellow text-ink px-2 py-0.5 sm:px-3 sm:py-1">NATIVO</span>
                                    </div>
                                    <div className="h-3 sm:h-4 bg-ink/30 w-full mb-1">
                                        <div className="h-full bg-term-green w-full"></div>
                                    </div>
                                </div>

                                {/* English */}
                                <div className="bg-white border-3 sm:border-4 border-ink p-4 sm:p-6 lg:p-8 shadow-brutal relative">
                                    <div className="flex justify-between items-end mb-3 sm:mb-4 gap-2">
                                        <span className="font-display text-xl sm:text-2xl lg:text-3xl uppercase">INGLÉS</span>
                                        <span className="font-mono text-[10px] sm:text-xs font-bold bg-digital-cyan text-ink px-2 py-0.5 sm:px-3 sm:py-1 whitespace-nowrap">INTERMEDIO (B2)</span>
                                    </div>
                                    <div className="h-3 sm:h-4 bg-gray-100 border border-gray-300 w-full mb-3 sm:mb-4">
                                        <div className="h-full bg-eng-blue w-[65%] relative">
                                            <div className="absolute -right-1.5 sm:-right-2 -top-0.5 sm:-top-1 w-3 sm:w-4 h-4 sm:h-6 bg-ink"></div>
                                        </div>
                                    </div>

                                    <p className="font-mono text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed border-l-3 sm:border-l-4 border-gray-200 pl-3 sm:pl-4">
                                        Lectura de documentación técnica, normativas internacionales (ASTM/ISO) y comunicación en entornos de proyecto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Continuous Learning */}
                        <div className="bg-ink text-cream border-3 sm:border-4 border-ink p-5 sm:p-8 lg:p-10 shadow-brutal relative overflow-hidden">
                            <div className="absolute -right-6 sm:-right-10 -bottom-6 sm:-bottom-10 text-gray-800 opacity-20 transform -rotate-12">
                                <i className="fa-solid fa-microchip text-6xl sm:text-9xl"></i>
                            </div>

                            <h4 className="font-display text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-accent-yellow uppercase flex items-center gap-2 sm:gap-3 relative z-10">
                                <i className="fa-solid fa-rotate"></i>
                                ACTUALIZACIÓN CONSTANTE
                            </h4>

                            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                                <div className="border border-gray-700 p-3 sm:p-4 bg-white/5">
                                    <div className="text-[10px] sm:text-xs font-mono text-digital-cyan mb-1 sm:mb-2">LAST_UPDATE</div>
                                    <div className="font-bold text-sm sm:text-base">Automatización con Power Platform</div>
                                </div>
                                <div className="border border-gray-700 p-3 sm:p-4 bg-white/5">
                                    <div className="text-[10px] sm:text-xs font-mono text-digital-cyan mb-1 sm:mb-2">IN_PROGRESS</div>
                                    <div className="font-bold text-sm sm:text-base">Análisis de Datos con Python</div>
                                </div>
                            </div>

                            <p className="font-mono text-xs sm:text-sm leading-relaxed text-gray-400 mt-4 sm:mt-6 border-t border-gray-800 pt-4 sm:pt-6">
                                "La tecnología en construcción no es el fin, es el medio para reducir la incertidumbre y controlar los costos."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Education;
