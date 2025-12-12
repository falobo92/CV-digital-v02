import React, { useState, useCallback } from 'react';
import { REFERENCES } from '../constants';
import SectionDivider from './ui/SectionDivider';

const References: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextRef = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % REFERENCES.length);
    }, []);

    const prevRef = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + REFERENCES.length) % REFERENCES.length);
    }, []);

    const currentRef = REFERENCES[currentIndex];

    return (
        <section id="referencias" className="border-b-6 border-ink bg-cream-dark relative overflow-hidden pb-14 sm:pb-20 lg:pb-32 pt-0">
            <SectionDivider text="TESTIMONIOS /// COLABORACIÓN /// CONFIANZA" theme="light" direction="right" />
            
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24">
                {/* Header */}
                <div className="mb-10 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-end border-b-3 sm:border-b-4 border-ink pb-8 sm:pb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">06</div>
                            <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Red Profesional</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-1 text-ink tracking-tighter uppercase leading-[0.9]">
                            REFERENCIAS
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="font-mono text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                            Personas con las que he trabajado codo a codo y pueden contar cómo ordeno equipos, información y plazos.
                        </p>
                    </div>
                </div>

                {/* ===== MOBILE: Carrusel ===== */}
                <div className="sm:hidden">
                    {/* Card actual */}
                    <div className="relative">
                        <article 
                            key={currentRef.id}
                            className="bg-white border-4 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative animate-fade-in"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-3 bg-accent-yellow border-4 border-ink w-12 h-12 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <i className="fa-solid fa-quote-left text-lg"></i>
                            </div>

                            {/* Quote */}
                            {currentRef.quote && (
                                <div className="mb-6 pt-6">
                                    <p className="font-mono text-sm italic text-gray-600 leading-relaxed">
                                        "{currentRef.quote}"
                                    </p>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="border-t-4 border-gray-100 pt-5">
                                {/* Name */}
                                <div className="font-display text-xl text-eng-blue uppercase">
                                    {currentRef.name}
                                </div>
                                
                                {/* Role */}
                                <div className="font-bold text-sm mt-2">
                                    {currentRef.role}
                                </div>
                                
                                {/* Company */}
                                <div className="font-mono text-xs text-gray-500 mt-1 flex items-center gap-2">
                                    <i className="fa-solid fa-building"></i>
                                    {currentRef.company}
                                </div>

                                {/* Contact */}
                                <div className="mt-5 bg-gray-100 border-3 border-gray-200 px-4 py-3 text-xs font-mono text-gray-500 flex items-center gap-2">
                                    <i className="fa-solid fa-phone"></i>
                                    Disponible a solicitud
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Controles del carrusel */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                        {/* Botón anterior */}
                        <button
                            onClick={prevRef}
                            className="w-12 h-12 bg-ink text-cream border-3 border-ink flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                            type="button"
                            aria-label="Referencia anterior"
                        >
                            <i className="fa-solid fa-chevron-left text-lg"></i>
                        </button>

                        {/* Indicadores */}
                        <div className="flex gap-2 items-center">
                            {REFERENCES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 border-2 border-ink transition-all ${
                                        idx === currentIndex 
                                            ? 'bg-accent-yellow scale-125' 
                                            : 'bg-white hover:bg-gray-200'
                                    }`}
                                    aria-label={`Ir a referencia ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Botón siguiente */}
                        <button
                            onClick={nextRef}
                            className="w-12 h-12 bg-ink text-cream border-3 border-ink flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                            type="button"
                            aria-label="Referencia siguiente"
                        >
                            <i className="fa-solid fa-chevron-right text-lg"></i>
                        </button>
                    </div>

                    {/* Contador */}
                    <div className="mt-4 text-center">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(REFERENCES.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* ===== DESKTOP: Grid ===== */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1200px] mx-auto">
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
