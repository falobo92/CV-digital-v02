import React from 'react';
import BrutalButton from './ui/BrutalButton';
import { PROFILE } from '../constants';
import { generateCV } from '../utils/generateCV';

const Hero: React.FC = () => {
    const badges = [
        { label: 'INGENIERÍA', icon: 'fa-solid fa-helmet-safety' },
        { label: 'DATOS', icon: 'fa-solid fa-database' },
        { label: 'GESTIÓN', icon: 'fa-solid fa-list-check' },
    ];

    const handleDownloadCV = () => {
        console.log("Hero: Click received, calling generateCV...");
        generateCV();
    };

    return (

        <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden border-b-6 border-ink bg-cream py-20 lg:py-24">
            {/* Background: Interesting Blueprint/Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(17, 17, 17, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(17, 17, 17, 0.03) 1px, transparent 1px),
                        radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 60%)
                     `,
                    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
                }}>
            </div>
            {/* Decorative Noise or speckle */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <div className="flex flex-col">
                    <div className="font-mono text-base font-bold uppercase tracking-widest mb-6 text-gray-600 flex items-center gap-3">
                        <span className="w-3 h-3 bg-ink"></span>
                        CONSTRUCTOR CIVIL PUC & DATA SPECIALIST
                    </div>

                    <h1 className="font-display text-7xl sm:text-8xl lg:text-[8rem] leading-[0.85] mb-10 text-ink uppercase tracking-tight">
                        <span className="bg-accent-yellow text-ink px-1 inline-block transform -skew-x-6">CONSTRUCCIÓN</span>
                        <span className="block text-eng-blue mt-2">
                            & GESTIÓN
                        </span>
                    </h1>

                    {/* Value Statement - Grounded & Convincing */}
                    <p className="text-2xl md:text-3xl mb-12 max-w-[800px] font-mono font-medium leading-relaxed text-gray-800 border-l-4 border-ink pl-8 py-2">
                        Integrando la <span className="bg-digital-cyan text-ink px-1 font-bold">gestión de obra</span> con sistemas digitales para ordenar la información, asegurar <span className="bg-magenta text-white px-1 font-bold">trazabilidad</span> y mejorar la calidad de los datos.
                    </p>

                    {/* Badges - Functional Pills */}
                    <div className="flex gap-4 mb-14 flex-wrap">
                        {badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className="bg-white text-ink px-5 py-2.5 border-2 border-ink font-mono text-base font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none hover:bg-accent-yellow transition-all cursor-default"
                            >
                                <i className={`${badge.icon} mr-2 text-ink`}></i>
                                {badge.label}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-6 flex-wrap">
                        <BrutalButton as="a" href="#experiencia" variant="primary" size="lg">
                            VER MI TRABAJO
                        </BrutalButton>
                        <BrutalButton as="button" onClick={handleDownloadCV} size="lg">
                            DESCARGAR CV
                        </BrutalButton>
                    </div>
                </div>

                {/* Right Column - The "Smart Brutalist" Image */}
                <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                    {/* Image Container - Tactile & Solid */}
                    <div className="relative group cursor-crosshair">

                        {/* Shadow Block (Static) */}
                        <div className="absolute top-5 left-5 w-full h-full bg-ink z-0"></div>

                        {/* Image Block */}
                        <div className="relative w-[360px] h-[450px] bg-white border-4 border-ink z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 select-none overflow-hidden">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale contrast-125 brightness-110 relative z-10 transition-all duration-300 group-hover:grayscale-0 group-hover:saturate-110"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                            />


                            {/* Tag */}
                            <div className="absolute top-0 right-0 bg-accent-yellow border-l-4 border-b-4 border-ink px-4 py-2 font-mono text-base font-bold z-20">
                                FLB_92
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
