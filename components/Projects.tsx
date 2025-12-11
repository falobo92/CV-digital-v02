import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import SectionDivider from './ui/SectionDivider';
import BrutalButton from './ui/BrutalButton';

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isAnimating, setIsAnimating] = useState(false);

    // Touch handling state
    const touchStartX = React.useRef<number | null>(null);
    const touchEndX = React.useRef<number | null>(null);

    const nextProject = () => {
        if (isAnimating) return;
        setDirection('right');
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
        setTimeout(() => setIsAnimating(false), 500); // Match animation duration
    };

    const prevProject = () => {
        if (isAnimating) return;
        setDirection('left');
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Keyboard Navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextProject();
            if (e.key === 'ArrowLeft') prevProject();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isAnimating]); // Re-bind when animating state changes to prevent spam

    // Touch Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isSwipeLeft = distance > 50;
        const isSwipeRight = distance < -50;

        if (isSwipeLeft) nextProject();
        if (isSwipeRight) prevProject();

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const currentProject = PROJECTS[currentIndex];

    // Animation Class
    const animationClass = direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left';

    return (
        <section id="proyectos" className="py-0 border-b-6 border-ink bg-cream relative overflow-hidden">
            <SectionDivider text="INNOVACIÓN /// EJECUCIÓN /// RESULTADOS" theme="light" direction="right" />

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="py-10 sm:py-12 lg:py-16 max-w-[1500px] mx-auto px-3 sm:px-4 md:px-8 relative z-10"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-6 sm:gap-8 pointer-events-none">
                    <div className="max-w-[800px]">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-3 sm:mb-4 uppercase tracking-tight leading-[0.9]">
                            <span className="inline-block bg-accent-yellow px-1.5 sm:px-2 mr-1.5 sm:mr-2 border-3 sm:border-4 border-ink text-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">PROYECTOS</span>
                            CLAVE
                        </h2>
                    </div>
                </div>

                {/* Main Carousel Area */}
                <div className="relative">

                    {/* Navigation Buttons (Desktop: Sides / Mobile: Bottom) */}
                    <button
                        onClick={prevProject}
                        className="hidden md:flex absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-30 w-16 h-32 bg-ink text-cream border-2 border-cream shadow-brutal items-center justify-center hover:-translate-x-2 transition-transform group"
                        aria-label="Previous Project"
                    >
                        <i className="fa-solid fa-chevron-left text-3xl group-hover:scale-125 transition-transform"></i>
                    </button>

                    <button
                        onClick={nextProject}
                        className="hidden md:flex absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-30 w-16 h-32 bg-ink text-cream border-2 border-cream shadow-brutal items-center justify-center hover:translate-x-2 transition-transform group"
                        aria-label="Next Project"
                    >
                        <i className="fa-solid fa-chevron-right text-3xl group-hover:scale-125 transition-transform"></i>
                    </button>

                    {/* The Card */}
                    <div className="relative min-h-[600px] overflow-hidden md:mx-10">
                        <article
                            key={currentIndex}
                            className={`bg-white border-4 border-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full relative group overflow-hidden ${animationClass}`}
                        >
                            {/* Technical Header / Progress Bar */}
                            <div className="bg-ink text-cream p-1 border-b-4 border-ink grid grid-cols-[auto_1fr_auto] items-center gap-4">
                                {/* Tab */}
                                <div className="bg-cream text-ink px-6 py-2 font-mono font-bold text-sm uppercase tracking-wider border-r-4 border-ink ml-1 mt-1 rounded-t-sm">
                                    <i className="fa-solid fa-folder-open mr-2"></i>
                                    {currentProject.category}
                                </div>

                                {/* Segmented Progress Bar */}
                                <div className="flex gap-1 h-full items-center px-4 w-full">
                                    {PROJECTS.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-2 flex-grow transition-all duration-300 ${idx === currentIndex ? 'bg-accent-yellow' : idx < currentIndex ? 'bg-gray-600' : 'bg-gray-800'}`}
                                        />
                                    ))}
                                </div>

                                {/* Year/Index */}
                                <div className="px-4 font-mono text-sm font-bold text-gray-400">
                                    {String(currentIndex + 1).padStart(2, '0')}/{String(PROJECTS.length).padStart(2, '0')}
                                </div>
                            </div>

                                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-14 bg-white relative">
                                {/* Decorative "Holes" or Screws */}
                                <div className="absolute top-4 right-4 text-gray-200"><i className="fa-solid fa-plus"></i></div>
                                <div className="absolute bottom-4 left-4 text-gray-200"><i className="fa-solid fa-plus"></i></div>

                                {/* Left Col: Image */}
                                <div className="lg:col-span-5 flex flex-col relative">
                                    <div className="relative w-full aspect-square bg-gray-100 border-4 border-ink overflow-hidden group/image shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
                                        {/* Overlay Effects */}
                                        <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none z-20"></div>

                                        {currentProject.image && (
                                            <img
                                                src={currentProject.image}
                                                alt={currentProject.title}
                                                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover/image:grayscale group-hover/image:scale-105"
                                            />
                                        )}

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4 bg-white border-2 border-ink px-3 py-1 font-mono text-xs font-bold z-30">
                                            STATUS: COMPLETE
                                        </div>

                                        {/* Ref Badge */}
                                        <div className="absolute bottom-4 right-4 bg-eng-blue text-white px-3 py-1 font-mono text-xs font-bold z-30">
                                            {currentProject.id}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col: Info */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-[0.85] mb-3 sm:mb-4 uppercase text-ink">
                                        {currentProject.title}
                                    </h3>
                                    <div className="text-eng-blue font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-8 flex items-center gap-2 font-mono">
                                        <i className="fa-solid fa-chevron-right text-xs sm:text-sm"></i>
                                        {currentProject.subtitle}
                                    </div>

                                    <div className="space-y-5 sm:space-y-8">
                                        {/* Challenge Section */}
                                        <div className="relative pl-4 sm:pl-6 border-l-3 sm:border-l-4 border-gray-300">
                                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2 sm:mb-3">El Desafío</h4>
                                            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-900 font-medium max-w-2xl">
                                                {currentProject.challenge}
                                            </p>
                                        </div>

                                        {/* Results Section */}
                                        <div>
                                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">Resultados Clave</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                                {currentProject.results.map((res, i) => (
                                                    <div key={i} className="flex items-start gap-2 sm:gap-3 bg-gray-50 border sm:border-2 border-gray-200 p-3 sm:p-4 hover:border-ink transition-colors">
                                                        <i className="fa-solid fa-check text-term-green mt-0.5 sm:mt-1 text-xs sm:text-sm"></i>
                                                        <span className="font-mono text-xs sm:text-sm lg:text-base leading-snug text-gray-700">{res}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-6 sm:mt-10">
                                        {currentProject.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 bg-ink text-white uppercase font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Mobile Controls (Visible only on small screens) */}
                    <div className="flex md:hidden justify-between mt-8 gap-4 px-2">
                        <BrutalButton onClick={prevProject} className="flex-1 justify-center">
                            <i className="fa-solid fa-arrow-left"></i>
                        </BrutalButton>
                        <BrutalButton onClick={nextProject} className="flex-1 justify-center">
                            <i className="fa-solid fa-arrow-right"></i>
                        </BrutalButton>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 sm:mt-16 lg:mt-24 flex justify-center px-4">
                    <a
                        href="#contacto"
                        className="group relative inline-flex items-center gap-2 sm:gap-4 bg-accent-yellow text-ink px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-display text-sm sm:text-base lg:text-xl uppercase tracking-wider border-3 sm:border-4 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-center"
                    >
                        Ver Detalle Completo
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
