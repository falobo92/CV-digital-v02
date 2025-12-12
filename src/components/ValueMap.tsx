import React from 'react';
import { COMPETENCIES, PROFILE } from '../constants';
import SectionDivider from './ui/SectionDivider';

const ValueMap: React.FC = () => {
    const pillars = [
        {
            id: '01',
            title: 'GESTIÓN INTEGRAL',
            icon: 'fa-solid fa-helmet-safety',
            desc: 'Edificación e infraestructura, con mirada completa: oficina técnica, terreno y control de gestión alineados.'
        },
        {
            id: '02',
            title: 'DATOS ACCIONABLES',
            icon: 'fa-solid fa-database',
            desc: 'Convierto datos dispersos en reportes claros para decidir con evidencia y no por intuición.'
        },
        {
            id: '03',
            title: 'DIGITALIZACIÓN',
            icon: 'fa-solid fa-server',
            desc: 'Implemento sistemas en M365 y SharePoint que dejan trazabilidad real, no solo carpetas bonitas.'
        }
    ];

    return (
        <section id="about" className="bg-white text-ink border-b-6 border-ink pt-0 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">

            <SectionDivider text="METODOLOGÍA /// SISTEMAS /// CONSTRUCCIÓN" theme="light" direction="left" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-12 sm:pt-16 lg:pt-20">
                {/* Header */}
                <div className="mb-10 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-end border-b-3 sm:border-b-4 border-ink pb-8 sm:pb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">01</div>
                            <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Propuesta de Valor</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tighter text-ink leading-[0.9]">
                            Enfoque <br /><span className="text-eng-blue">Profesional</span>
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono leading-relaxed text-gray-800">
                            Busco <span className="font-bold bg-accent-yellow text-ink px-1">integrar</span> la gestión tradicional de obra con soluciones digitales que simplifiquen el trabajo diario y reduzcan errores.
                        </p>
                    </div>
                </div>

                {/* Methodologies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 sm:mb-18 lg:mb-24 border-3 sm:border-4 border-ink">
                    {pillars.map((item, idx) => (
                        <div key={idx} className={`bg-white p-5 sm:p-6 lg:p-8 xl:p-10 hover:bg-gray-50 transition-colors group relative ${idx !== 2 ? 'border-b-3 md:border-b-0 md:border-r-3 sm:border-b-4 sm:md:border-r-4 border-ink' : ''}`}>
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 font-display text-4xl sm:text-5xl text-gray-100 group-hover:text-gray-200 transition-colors -z-0">0{idx + 1}</div>

                            <div className="relative z-10">
                                <div className="w-11 h-11 sm:w-14 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center bg-ink text-white">
                                    <i className={`${item.icon} text-lg sm:text-2xl`}></i>
                                </div>
                                <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase mb-2 sm:mb-3 leading-none tracking-tight">{item.title}</h3>
                                <div className="w-8 sm:w-10 h-1 bg-safety-orange mb-3 sm:mb-4"></div>
                                <p className="font-mono text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Competencias - Diseño limpio y claro */}
                <div className="bg-ink p-4 sm:p-6 md:p-8 lg:p-12 border-3 sm:border-4 border-ink relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10 border-b border-gray-800 pb-4 sm:pb-6 lg:pb-8 relative z-10">
                        <div>
                            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-1 sm:mb-2">Dominio Técnico</h3>
                            <p className="font-mono text-gray-400 text-xs sm:text-sm md:text-base">
                                Competencias clave desarrolladas en más de {PROFILE.yearsExperience} años de experiencia
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 relative z-10">
                        {COMPETENCIES.map((comp, idx) => (
                            <div key={idx} className="group bg-gray-900 border sm:border-2 border-gray-700 p-3 sm:p-4 lg:p-5 hover:border-accent-yellow hover:bg-gray-800 transition-all duration-200">
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <span className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-yellow text-ink flex items-center justify-center font-mono text-xs sm:text-sm font-bold">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <i className="fa-solid fa-check text-term-green text-xs sm:text-sm"></i>
                                </div>
                                <h4 className="font-display text-xs sm:text-sm md:text-base lg:text-lg text-white uppercase leading-tight">
                                    {comp}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueMap;
