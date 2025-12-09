import React from 'react';
import BrutalButton from './ui/BrutalButton';
import { PROFILE } from '../constants';
import { generateCV } from '../utils/generateCV';

const Hero: React.FC = () => {
    const badges = [
        { label: 'GESTIÓN DE PROYECTOS', icon: 'fa-solid fa-diagram-project' },
        { label: 'SHAREPOINT & M365', icon: 'fa-brands fa-microsoft' },
        { label: 'PYTHON', icon: 'fa-brands fa-python' },
        { label: 'CONTROL DOCUMENTAL', icon: 'fa-solid fa-folder-tree' }
    ];

    const handleDownloadCV = () => {
        generateCV();
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden border-b-6 border-ink bg-cream">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid pointer-events-none"></div>
            
            {/* Decorative Blocks */}
            <div className="absolute top-24 right-16 w-28 h-28 border-4 border-ink bg-accent-yellow rotate-12 hidden lg:block animate-float shadow-brutal"></div>
            <div className="absolute bottom-32 left-12 w-20 h-20 border-4 border-ink bg-digital-cyan -rotate-6 hidden lg:block animate-float shadow-brutal" style={{animationDelay: '1.5s'}}></div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center py-20 lg:py-28">
                
                {/* Text Content */}
                <div className="flex flex-col">
                    {/* Main Title */}
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.85] mb-10 text-ink uppercase tracking-tight">
                        CONSTRUCCIÓN
                        <br />
                        <span className="text-eng-blue">+ DATOS</span>
                        <br />
                        <span className="text-safety-orange">+ DIGITAL</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-6 max-w-[700px] font-mono font-bold leading-snug">
                        {PROFILE.title} que conecta la gestión de obra tradicional con sistemas digitales y automatización.
                    </p>

                    {/* Value Statement */}
                    <div className="text-base md:text-lg mb-10 max-w-[650px] border-l-6 border-safety-orange pl-6 bg-white py-4 shadow-brutal-sm font-mono">
                        De documentos dispersos y procesos manuales a dashboards en tiempo real, flujos automatizados y trazabilidad total.
                    </div>

                    {/* Badges */}
                    <div className="flex gap-3 mb-10 flex-wrap">
                        {badges.map((badge, idx) => (
                            <span 
                                key={idx}
                                className="bg-ink text-cream px-4 py-2 border-4 border-ink font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:-translate-y-1 transition-transform"
                            >
                                <i className={`${badge.icon}`}></i>
                                {badge.label}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-5 flex-wrap">
                        <BrutalButton as="a" href="#experiencia" variant="primary" size="lg">
                            <i className="fa-solid fa-arrow-down mr-2"></i>
                            VER TRAYECTORIA
                        </BrutalButton>
                        <BrutalButton as="button" onClick={handleDownloadCV} size="lg">
                            <i className="fa-solid fa-file-arrow-down mr-2"></i>
                            DESCARGAR CV
                        </BrutalButton>
                    </div>
                </div>

                {/* Right Column - Con Foto Brutalista */}
                <div className="flex flex-col gap-6">
                    {/* Profile Photo Card - Estilo Brutalista */}
                    <div className="border-4 border-ink bg-white p-4 shadow-brutal-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-4 bg-eng-blue z-10"></div>
                        {/* Foto con efectos brutalistas */}
                        <div className="relative mt-4">
                            {/* Imagen principal con bordes y sombras */}
                            <div className="border-4 border-ink shadow-brutal relative">
                                <img 
                                    src="/profile.png" 
                                    alt={`${PROFILE.name.full} - ${PROFILE.title}`}
                                    className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                {/* Overlay decorativo */}
                                <div className="absolute top-0 left-0 w-full h-full bg-eng-blue/0 hover:bg-eng-blue/10 transition-colors pointer-events-none"></div>
                            </div>
                            {/* Badge decorativo en esquina */}
                            <div className="absolute -top-3 -right-3 bg-accent-yellow border-4 border-ink w-16 h-16 flex items-center justify-center shadow-brutal-sm">
                                <i className="fa-solid fa-user-tie text-2xl text-ink"></i>
                            </div>
                        </div>
                        {/* Info debajo de la foto */}
                        <div className="mt-6 text-center">
                            <div className="font-display text-2xl leading-tight uppercase">{PROFILE.name.first}</div>
                            <div className="font-display text-2xl leading-tight text-eng-blue uppercase">{PROFILE.name.last}</div>
                            <div className="font-mono text-sm mt-2 text-gray-600 flex items-center justify-center gap-2">
                                <i className="fa-solid fa-graduation-cap"></i>
                                {PROFILE.title} — PUC
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'AÑOS EXPERIENCIA', val: `${PROFILE.yearsExperience}+`, icon: 'fa-solid fa-calendar-check' },
                            { label: 'ENFOQUE', val: 'DATA-DRIVEN', icon: 'fa-solid fa-chart-line' },
                            { label: 'STACK', val: 'PYTHON / M365', icon: 'fa-solid fa-code' },
                            { label: 'MÉTODO', val: 'LEAN + DIGITAL', icon: 'fa-solid fa-gears' },
                        ].map((stat, idx) => (
                            <div 
                                key={idx} 
                                className="border-4 border-ink bg-white p-4 text-center shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all"
                            >
                                <i className={`${stat.icon} text-eng-blue text-xl mb-2`}></i>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                <div className="font-display text-lg">{stat.val}</div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Terminal */}
                    <div className="bg-ink border-4 border-ink p-5 shadow-brutal relative">
                        <div className="absolute top-3 left-4 flex gap-2">
                            <div className="w-3 h-3 bg-alert-red border-2 border-ink"></div>
                            <div className="w-3 h-3 bg-accent-yellow border-2 border-ink"></div>
                            <div className="w-3 h-3 bg-term-green border-2 border-ink"></div>
                        </div>
                        <code className="text-sm font-mono block text-term-green mt-6 leading-relaxed">
                            <span className="text-gray-500">$</span> python optimize_project.py<br/>
                            <span className="text-digital-cyan">&gt;</span> Procesando metadatos...<br/>
                            <span className="text-accent-yellow">&gt;</span> Generando dashboard...<br/>
                            <span className="text-term-green">&gt;</span> [OK] Trazabilidad activa.
                        </code>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="border-4 border-ink bg-white px-5 py-3 shadow-brutal-sm font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                    <i className="fa-solid fa-arrow-down"></i>
                    SCROLL
                </div>
            </div>
        </section>
    );
};

export default Hero;
