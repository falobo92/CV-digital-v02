import React from 'react';
import { REFERENCES } from '../constants';

const References: React.FC = () => {
    return (
        <section id="referencias" className="py-24 lg:py-32 border-b-6 border-ink bg-cream-dark">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 uppercase tracking-tight">
                        REFERENCIAS
                    </h2>
                    <p className="font-mono text-gray-600 text-lg">
                        Profesionales con quienes he colaborado en proyectos de construcción e infraestructura.
                    </p>
                </div>

                {/* References Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                    {REFERENCES.map((ref) => (
                        <article 
                            key={ref.id}
                            className="bg-white border-4 border-ink p-8 shadow-brutal hover:-translate-y-2 hover:shadow-brutal-xl transition-all relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-5 -left-4 bg-accent-yellow border-4 border-ink w-14 h-14 flex items-center justify-center shadow-brutal-sm">
                                <i className="fa-solid fa-quote-left text-xl"></i>
                            </div>

                            {/* Quote */}
                            {ref.quote && (
                                <div className="mb-8 pt-6">
                                    <p className="font-mono text-sm italic text-gray-600 leading-relaxed">
                                        "{ref.quote}"
                                    </p>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="border-t-4 border-gray-100 pt-6">
                                {/* Name */}
                                <div className="font-display text-xl text-eng-blue uppercase">
                                    {ref.name}
                                </div>
                                
                                {/* Role */}
                                <div className="font-bold text-sm mt-2">
                                    {ref.role}
                                </div>
                                
                                {/* Company */}
                                <div className="font-mono text-xs text-gray-500 mt-1 flex items-center gap-2">
                                    <i className="fa-solid fa-building"></i>
                                    {ref.company}
                                </div>

                                {/* Contact */}
                                <div className="mt-5 bg-gray-100 border-4 border-gray-200 px-4 py-3 text-xs font-mono text-gray-500 flex items-center gap-2 hover:bg-accent-yellow hover:border-ink hover:text-ink transition-all">
                                    <i className="fa-solid fa-phone"></i>
                                    Disponible a solicitud
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-white border-4 border-ink px-10 py-5 shadow-brutal">
                        <p className="font-mono text-sm text-gray-600 flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-term-green"></i>
                            Referencias profesionales verificables disponibles previa solicitud.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default References;
