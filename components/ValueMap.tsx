import React from 'react';
import { COMPETENCIES, PROFILE } from '../constants';
import SectionDivider from './ui/SectionDivider';

const ValueMap: React.FC = () => {
    const pillars = [
        {
            id: '01',
            title: 'GESTIÓN INTEGRAL',
            icon: 'fa-solid fa-helmet-safety',
            desc: 'Experiencia en edificación e infraestructura, integrando oficina técnica, terreno y control de gestión.'
        },
        {
            id: '02',
            title: 'DATOS ACCIONABLES',
            icon: 'fa-solid fa-database',
            desc: 'Transformo datos dispersos en reportes claros para apoyar la toma de decisiones basada en evidencia.'
        },
        {
            id: '03',
            title: 'DIGITALIZACIÓN',
            icon: 'fa-solid fa-server',
            desc: 'Implementación de sistemas en M365 y SharePoint para asegurar trazabilidad y orden en la información.'
        }
    ];

    return (
        <section id="about" className="bg-white text-ink border-b-6 border-ink pt-0 pb-24 relative overflow-hidden">

            <SectionDivider text="METHODOLOGY  ///  SYSTEMS  ///  CONSTRUCTION" theme="light" direction="left" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mt-20">
                {/* Header */}
                <div className="mb-20 flex flex-col lg:flex-row gap-12 items-end border-b-4 border-ink pb-12">
                    <div className="flex-1">
                        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-ink leading-none">
                            Enfoque <br /><span className="text-eng-blue">Profesional</span>
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg md:text-xl font-mono leading-relaxed text-gray-800">
                            Mi objetivo es <span className="font-bold bg-digital-cyan text-ink px-1">integrar</span> la gestión tradicional de obra con soluciones digitales que aporten orden y eficiencia.
                        </p>
                    </div>
                </div>

                {/* Methodologies */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-24 border-4 border-ink">
                    {pillars.map((item, idx) => (
                        <div key={idx} className={`bg-white p-8 lg:p-10 hover:bg-gray-50 transition-colors group relative ${idx !== 2 ? 'border-b-4 lg:border-b-0 lg:border-r-4 border-ink' : ''}`}>
                            <div className="absolute top-4 right-4 font-display text-5xl text-gray-100 group-hover:text-gray-200 transition-colors -z-0">0{idx + 1}</div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                    <i className={`${item.icon} text-3xl text-ink`}></i>
                                </div>
                                <h3 className="font-display text-2xl uppercase mb-3 leading-none tracking-tight">{item.title}</h3>
                                <div className="w-8 h-1 bg-safety-orange mb-4"></div>
                                <p className="font-mono text-sm leading-relaxed text-gray-600 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Competencies - Visual Overhaul (Tags/Specs) */}
                {/* Competencies - Visual Overhaul (System Specs) */}
                <div className="bg-ink p-8 md:p-12 border-4 border-ink relative overflow-hidden">
                    {/* Background Tech Deco */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-gray-800 pb-8 relative z-10">
                        <div>
                            <h3 className="font-display text-4xl uppercase text-white mb-2">Dominio Técnico</h3>
                            <p className="font-mono text-gray-400 text-sm">ESPECIFICACIONES DEL SISTEMA PROFESIONAL</p>
                        </div>
                        <div className="font-mono text-xs text-term-green flex items-center gap-3 border border-term-green/30 px-4 py-2 bg-term-green/10">
                            <span className="w-2 h-2 bg-term-green rounded-full animate-pulse"></span>
                            SYSTEM_STATUS: OPERATIONAL
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                        {COMPETENCIES.map((comp, idx) => (
                            <div key={idx} className="group bg-gray-900 border border-gray-700 p-4 hover:border-digital-cyan hover:bg-gray-800 transition-all duration-300 relative overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-digital-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                <div className="flex justify-between items-start mb-3">
                                    <span className="font-mono text-[10px] text-gray-500">SPEC_0{idx + 1}</span>
                                    <i className="fa-solid fa-check text-term-green text-xs opacity-50 group-hover:opacity-100"></i>
                                </div>

                                <h4 className="font-mono text-sm font-bold text-gray-200 uppercase mb-4 tracking-tight group-hover:text-white group-hover:translate-x-1 transition-transform">
                                    {comp}
                                </h4>

                                {/* Fake 'Load' Bar for visual tech feel */}
                                <div className="w-full h-1 bg-gray-800 mt-auto">
                                    <div
                                        className="h-full bg-digital-cyan/50 group-hover:bg-digital-cyan transition-all duration-500"
                                        style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueMap;
