import React from 'react';
import { REFERENCES } from '../constants';
import SectionDivider from './ui/SectionDivider';

const References: React.FC = () => {
    return (
        <section id="referencias" className="border-b-6 border-ink bg-cream-dark relative overflow-hidden pb-14 sm:pb-20 lg:pb-32 pt-0">
            <SectionDivider text="TESTIMONIOS /// COLABORACIÓN /// CONFIANZA" theme="light" direction="right" />
            
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14 lg:mb-20">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">06</div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Red Profesional</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-4 sm:mb-6 uppercase tracking-tight">
                        REFERENCIAS
                    </h2>
                    <p className="font-mono text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                        Personas con las que he trabajado codo a codo y pueden contar cómo ordeno equipos, información y plazos.
                    </p>
                </div>

                {/* References Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1200px] mx-auto">
                    {REFERENCES.map((ref) => (
                        <article 
                            key={ref.id}
                            className="bg-white border-3 sm:border-4 border-ink p-5 sm:p-6 lg:p-8 shadow-brutal hover:-translate-y-2 hover:shadow-brutal-xl transition-all relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-3 sm:-top-5 -left-2 sm:-left-4 bg-accent-yellow border-3 sm:border-4 border-ink w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shadow-brutal-sm">
                                <i className="fa-solid fa-quote-left text-base sm:text-xl"></i>
                            </div>

                            {/* Quote */}
                            {ref.quote && (
                                <div className="mb-5 sm:mb-8 pt-4 sm:pt-6">
                                    <p className="font-mono text-sm sm:text-base italic text-gray-600 leading-relaxed">
                                        "{ref.quote}"
                                    </p>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="border-t-3 sm:border-t-4 border-gray-100 pt-4 sm:pt-6">
                                {/* Name */}
                                <div className="font-display text-lg sm:text-xl text-eng-blue uppercase">
                                    {ref.name}
                                </div>
                                
                                {/* Role */}
                                <div className="font-bold text-xs sm:text-sm mt-1 sm:mt-2">
                                    {ref.role}
                                </div>
                                
                                {/* Company */}
                                <div className="font-mono text-[10px] sm:text-xs text-gray-500 mt-1 flex items-center gap-2">
                                    <i className="fa-solid fa-building"></i>
                                    {ref.company}
                                </div>

                                {/* Contact */}
                                <div className="mt-4 sm:mt-5 bg-gray-100 border-2 sm:border-4 border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-xs font-mono text-gray-500 flex items-center gap-2 hover:bg-accent-yellow hover:border-ink hover:text-ink transition-all">
                                    <i className="fa-solid fa-phone"></i>
                                    Disponible a solicitud
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-10 sm:mt-16 text-center px-4">
                    <div className="inline-block bg-white border-3 sm:border-4 border-ink px-4 py-3 sm:px-10 sm:py-5 shadow-brutal">
                        <p className="font-mono text-xs sm:text-sm text-gray-600 flex items-center gap-2 sm:gap-3">
                            <i className="fa-solid fa-circle-check text-term-green"></i>
                            <span className="text-left">Referencias profesionales verificables disponibles previa solicitud.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default References;
