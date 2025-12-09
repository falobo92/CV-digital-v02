import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="py-24 lg:py-32 border-b-6 border-ink bg-white">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Header */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-20 text-center uppercase tracking-tight">
                    FORMACIÓN
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-[1200px] mx-auto">
                    {/* Education */}
                    <div>
                        <h3 className="font-display text-2xl border-b-6 border-eng-blue inline-block pb-2 mb-10 uppercase flex items-center gap-3">
                            <i className="fa-solid fa-graduation-cap"></i>
                            EDUCACIÓN
                        </h3>
                        
                        <div className="space-y-8">
                            {EDUCATION.map((edu) => (
                                <article 
                                    key={edu.id}
                                    className="bg-cream border-4 border-ink p-8 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                                >
                                    {/* Distinction */}
                                    {edu.distinction && (
                                        <div className="inline-flex items-center gap-2 bg-accent-yellow text-ink px-4 py-2 text-xs font-bold border-4 border-ink mb-5 shadow-brutal-sm uppercase">
                                            <i className="fa-solid fa-award"></i>
                                            {edu.distinction}
                                        </div>
                                    )}
                                    
                                    {/* Institution */}
                                    <div className="font-mono text-sm text-gray-600 mb-2 flex items-center gap-2">
                                        <i className="fa-solid fa-building-columns"></i>
                                        {edu.institution}
                                    </div>
                                    
                                    {/* Degree */}
                                    <div className="font-display text-xl md:text-2xl mb-3 uppercase">
                                        {edu.degree}
                                    </div>
                                    
                                    {/* Period */}
                                    <div className="inline-block bg-ink text-cream px-4 py-2 text-xs font-bold border-4 border-ink uppercase mb-5">
                                        <i className="fa-solid fa-calendar mr-2"></i>
                                        {edu.period}
                                    </div>
                                    
                                    {/* Details */}
                                    {edu.details && edu.details.length > 0 && (
                                        <div className="mt-5 pt-5 border-t-4 border-gray-200">
                                            <div className="font-bold text-xs uppercase text-gray-500 mb-3 flex items-center gap-2">
                                                <i className="fa-solid fa-book-open"></i>
                                                Especialización:
                                            </div>
                                            <ul className="space-y-2">
                                                {edu.details.map((detail, idx) => (
                                                    <li key={idx} className="text-sm font-mono text-gray-700 flex items-start gap-3">
                                                        <i className="fa-solid fa-caret-right text-eng-blue mt-1"></i>
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

                    {/* Languages */}
                    <div>
                        <h3 className="font-display text-2xl border-b-6 border-safety-orange inline-block pb-2 mb-10 uppercase flex items-center gap-3">
                            <i className="fa-solid fa-globe"></i>
                            IDIOMAS
                        </h3>
                        
                        <div className="space-y-6">
                            {/* Spanish */}
                            <div className="bg-eng-blue border-4 border-ink p-8 shadow-brutal text-cream">
                                <div className="flex justify-between items-center mb-5">
                                    <span className="font-display text-2xl uppercase">ESPAÑOL</span>
                                    <span className="bg-accent-yellow text-ink px-5 py-2 font-bold text-sm border-4 border-ink uppercase">
                                        NATIVO
                                    </span>
                                </div>
                                <div className="h-5 bg-ink border-4 border-cream relative overflow-hidden">
                                    <div className="h-full bg-term-green w-full"></div>
                                </div>
                                <div className="text-right text-xs mt-2 font-mono opacity-80">100%</div>
                            </div>

                            {/* English */}
                            <div className="bg-cream border-4 border-ink p-8 shadow-brutal">
                                <div className="flex justify-between items-center mb-5">
                                    <span className="font-display text-2xl uppercase">INGLÉS</span>
                                    <span className="bg-digital-cyan text-ink px-5 py-2 font-bold text-sm border-4 border-ink uppercase">
                                        INTERMEDIO
                                    </span>
                                </div>
                                <div className="h-5 bg-gray-200 border-4 border-ink relative overflow-hidden">
                                    <div className="h-full bg-eng-blue w-[65%]"></div>
                                </div>
                                <div className="text-right text-xs mt-2 font-mono text-gray-600">65%</div>
                                
                                <div className="mt-5 pt-5 border-t-4 border-gray-200">
                                    <p className="text-sm font-mono text-gray-600 flex items-start gap-2">
                                        <i className="fa-solid fa-circle-info mt-1"></i>
                                        Manejo de documentación técnica, normativas internacionales y comunicación en contextos de proyectos multinacionales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Continuous Learning */}
                        <div className="mt-8 bg-ink text-cream border-4 border-ink p-8 shadow-brutal relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-safety-orange border-l-4 border-b-4 border-ink flex items-center justify-center">
                                <i className="fa-solid fa-lightbulb text-2xl text-cream"></i>
                            </div>
                            <h4 className="font-display text-xl mb-4 text-accent-yellow uppercase flex items-center gap-3">
                                <i className="fa-solid fa-rocket"></i>
                                APRENDIZAJE CONTINUO
                            </h4>
                            <p className="font-mono text-sm leading-relaxed opacity-90">
                                Formación constante en tecnologías de automatización, metodologías ágiles y herramientas de gestión de datos. Enfoque en aplicar nuevas tecnologías a los desafíos reales de la industria de la construcción.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
