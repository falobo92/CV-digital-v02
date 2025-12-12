import React from 'react';
import BrutalButton from './ui/BrutalButton';
import { PROFILE, PROJECTS, TECH_STACK } from '../constants';

const Hero: React.FC = () => {
    const yearsExp = PROFILE.yearsExperience;

    return (
        <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden border-b-6 border-ink bg-cream">

            {/* Background Grid - Blueprint style */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-blueprint-grid-60" />

            {/* Diagonal accent stripe */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-yellow opacity-10 transform rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-0">

                {/* Text Content */}
                <div className="flex flex-col order-2 lg:order-1">

                    {/* Section Title (homologado) */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">00</div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Presentación</span>
                    </div>

                    {/* Label */}
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="w-10 sm:w-16 h-1 bg-ink"></div>
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-ink">
                            Constructor Civil PUC
                        </span>
                    </div>

                    {/* Main Title - RAW BRUTAL */}
                    <h1 className="font-display text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] leading-[0.85] mb-6 sm:mb-8 text-ink uppercase tracking-tighter">
                        <span className="block">FELIPE</span>
                        <span className="block relative">
                            <span className="relative z-10">LOBO</span>
                            {/* Yellow highlight block */}
                            <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-4 sm:h-6 md:h-10 lg:h-12 bg-accent-yellow -z-0 transform -skew-x-3"></span>
                        </span>
                    </h1>

                    {/* Subtitle with brutal border */}
                    <div className="bg-ink text-cream px-4 sm:px-6 py-3 sm:py-4 mb-8 sm:mb-10 max-w-fit border-3 sm:border-4 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-mono text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide">
                            Construcción + Datos + Transformación Digital
                        </span>
                    </div>

                    {/* Value proposition */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-[600px] font-mono leading-relaxed text-gray-700">
                        {yearsExp}+ años uniendo <span className="bg-accent-yellow text-ink px-1 font-bold">gestión de obra</span> y sistemas digitales. Ordeno la información, dejo trazabilidad clara y convierto los datos en decisiones rápidas.
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 lg:mb-16 flex-wrap">
                        <div className="border-l-3 sm:border-l-4 border-ink pl-3 sm:pl-4">
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl text-ink">+{yearsExp}</div>
                            <div className="font-mono text-[10px] sm:text-xs uppercase text-gray-500 tracking-wider">Años Exp.</div>
                        </div>
                        <div className="border-l-3 sm:border-l-4 border-safety-orange pl-3 sm:pl-4">
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl text-ink">{PROJECTS.length}</div>
                            <div className="font-mono text-[10px] sm:text-xs uppercase text-gray-500 tracking-wider">Proyectos</div>
                        </div>
                        <div className="border-l-3 sm:border-l-4 border-eng-blue pl-3 sm:pl-4">
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl text-ink">{TECH_STACK.length}</div>
                            <div className="font-mono text-[10px] sm:text-xs uppercase text-gray-500 tracking-wider">Herramientas</div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-4 flex-wrap mt-2 sm:mt-4">
                        <BrutalButton as="a" href="#experiencia" variant="primary" size="lg">
                            <i className="fa-solid fa-arrow-down mr-2"></i>
                            VER TRAYECTORIA
                        </BrutalButton>
                        <BrutalButton as="a" href="/CV_Felipe_Lobo.pdf" download="CV_Felipe_Lobo.pdf" size="lg">
                            <i className="fa-solid fa-file-pdf mr-2"></i>
                            DESCARGAR CV
                        </BrutalButton>
                    </div>
                </div>

                {/* Image - BRUTAL STYLE */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative group cursor-pointer inline-block">

                        {/* Architectural Grid Background - Subtle */}
                        <div className="absolute -inset-4 bg-blueprint-grid-60 opacity-20 z-0"></div>

                        {/* Main Frame Shadow - Sharp Offset */}
                        <div className="absolute top-0 left-0 w-full h-full bg-ink translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>

                        {/* Secondary Accent Line - Electric Orange */}
                        <div className="absolute -top-1 -right-1 w-24 h-24 border-t-4 border-r-4 border-safety-orange z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-24 h-24 border-b-4 border-l-4 border-eng-blue z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Main Image Container */}
                        <div className="relative w-[260px] h-[325px] sm:w-[300px] sm:h-[380px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] border-4 border-ink bg-gray-100 z-10 overflow-hidden">

                            {/* The Image */}
                            <img
                                src="/profile.png"
                                alt="Felipe Lobo Boric - Constructor Civil"
                                className="img-stable object-cover w-full h-full filter grayscale contrast-125 brightness-110 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                                width={400}
                                height={500}
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                            />

                            {/* Tech overlay scanlines */}
                            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none z-20"></div>

                            {/* Hover info overlay */}
                            <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-30"></div>

                            {/* Name Label - Modern & Sharp */}
                            <div className="absolute bottom-0 left-0 right-0 bg-ink/85 backdrop-blur-sm p-4 transform translate-y-0 transition-transform duration-300 z-40">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">2025 // SANTIAGO</div>
                                        <div className="font-display text-xl md:text-2xl text-white uppercase tracking-tight">FLB</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-term-green"></span>
                                        <span className="font-mono text-xs text-term-green uppercase">Disponible</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decoration bar */}
            <div className="absolute bottom-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-ink"></div>
                <div className="w-32 h-2 bg-accent-yellow"></div>
                <div className="w-24 h-2 bg-safety-orange"></div>
                <div className="w-16 h-2 bg-eng-blue"></div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                <i className="fa-solid fa-chevron-down text-ink"></i>
            </div>
        </section>
    );
};

export default Hero;
