import React from 'react';
import { EDUCATION } from '../constants';
import SectionDivider from './ui/SectionDivider';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="border-b-6 border-ink bg-white relative overflow-hidden pb-24 lg:pb-32">
            <SectionDivider text="ACADEMIC  ///  CONTINUOUS LEARNING  ///  SKILLS" theme="light" direction="left" />
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            <div className="max-w-[1600px] mx-auto px-12 py-24">
                {/* Header */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-20 text-center uppercase tracking-tight">
                    FORMACIÓN
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1400px] mx-auto">
                    {/* Education */}
                    <div>
                        <h3 className="font-display text-2xl border-b-6 border-eng-blue inline-block pb-2 mb-12 uppercase flex items-center gap-3">
                            <i className="fa-solid fa-graduation-cap"></i>
                            EDUCACIÓN
                        </h3>

                        <div className="space-y-10">
                            {EDUCATION.map((edu) => (
                                <article
                                    key={edu.id}
                                    className="bg-cream border-4 border-ink p-10 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all relative group"
                                >
                                    {/* Distinction Badge */}
                                    {edu.distinction && (
                                        <div className="absolute -top-4 -right-4 bg-accent-yellow text-ink px-4 py-2 text-xs font-bold border-4 border-ink shadow-brutal-sm uppercase transform rotate-2 group-hover:rotate-0 transition-transform">
                                            <i className="fa-solid fa-award mr-2"></i>
                                            {edu.distinction}
                                        </div>
                                    )}

                                    {/* Institution */}
                                    <div className="font-mono text-sm text-gray-500 mb-2 flex items-center gap-2 font-bold tracking-wider uppercase">
                                        <i className="fa-solid fa-building-columns text-eng-blue"></i>
                                        {edu.institution}
                                    </div>

                                    {/* Degree */}
                                    <h4 className="font-display text-3xl mb-4 uppercase leading-none text-ink">
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
                    <div className="space-y-16">
                        {/* Languages */}
                        <div>
                            <h3 className="font-display text-2xl border-b-6 border-safety-orange inline-block pb-2 mb-12 uppercase flex items-center gap-3">
                                <i className="fa-solid fa-globe"></i>
                                IDIOMAS
                            </h3>

                            <div className="space-y-8">
                                {/* Spanish */}
                                <div className="bg-eng-blue border-4 border-ink p-8 shadow-brutal text-cream relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <i className="fa-solid fa-comments text-8xl"></i>
                                    </div>
                                    <div className="flex justify-between items-end mb-4 relative z-10">
                                        <span className="font-display text-3xl uppercase">ESPAÑOL</span>
                                        <span className="font-mono text-xs font-bold bg-accent-yellow text-ink px-3 py-1">NATIVO</span>
                                    </div>
                                    <div className="h-4 bg-ink/30 w-full mb-1">
                                        <div className="h-full bg-term-green w-full"></div>
                                    </div>
                                </div>

                                {/* English */}
                                <div className="bg-white border-4 border-ink p-8 shadow-brutal relative">
                                    <div className="flex justify-between items-end mb-4">
                                        <span className="font-display text-3xl uppercase">INGLÉS</span>
                                        <span className="font-mono text-xs font-bold bg-digital-cyan text-ink px-3 py-1">INTERMEDIO (B2)</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 border border-gray-300 w-full mb-4">
                                        <div className="h-full bg-eng-blue w-[65%] relative">
                                            <div className="absolute -right-2 -top-1 w-4 h-6 bg-ink"></div>
                                        </div>
                                    </div>

                                    <p className="font-mono text-sm text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4">
                                        Capacidad para lectura de documentación técnica, normativas internacionales (ASTM/ISO) y comunicación efectiva en entornos de proyecto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Continuous Learning */}
                        <div className="bg-ink text-cream border-4 border-ink p-10 shadow-brutal relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 text-gray-800 opacity-20 transform -rotate-12">
                                <i className="fa-solid fa-microchip text-9xl"></i>
                            </div>

                            <h4 className="font-display text-2xl mb-6 text-accent-yellow uppercase flex items-center gap-3 relative z-10">
                                <i className="fa-solid fa-rotate"></i>
                                ACTUALIZACIÓN CONSTANTE
                            </h4>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border border-gray-700 p-4 bg-white/5">
                                    <div className="text-xs font-mono text-digital-cyan mb-2">LAST_UPDATE</div>
                                    <div className="font-bold">Automatización con Power Platform</div>
                                </div>
                                <div className="border border-gray-700 p-4 bg-white/5">
                                    <div className="text-xs font-mono text-digital-cyan mb-2">IN_PROGRESS</div>
                                    <div className="font-bold">Análisis de Datos con Python</div>
                                </div>
                            </div>

                            <p className="font-mono text-sm leading-relaxed text-gray-400 mt-6 border-t border-gray-800 pt-6">
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
