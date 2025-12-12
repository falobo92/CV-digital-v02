import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import SectionDivider from './ui/SectionDivider';
import BrutalButton from './ui/BrutalButton';

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isAnimating, setIsAnimating] = useState(false);

    // Touch handling state
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const animTimeoutRef = useRef<number | null>(null);

    // Guardrail: evita crashes si por algún motivo no hay proyectos
    if (!PROJECTS || PROJECTS.length === 0) {
        return null;
    }

    const clearAnimTimeout = useCallback(() => {
        if (animTimeoutRef.current != null) {
            window.clearTimeout(animTimeoutRef.current);
            animTimeoutRef.current = null;
        }
    }, []);

    const startAnimation = useCallback((dir: 'left' | 'right') => {
        clearAnimTimeout();
        setDirection(dir);
        setIsAnimating(true);
        animTimeoutRef.current = window.setTimeout(() => setIsAnimating(false), 500); // Match animation duration
    }, [clearAnimTimeout]);

    const nextProject = useCallback(() => {
        if (isAnimating) return;
        startAnimation('right');
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, [isAnimating, startAnimation]);

    const prevProject = useCallback(() => {
        if (isAnimating) return;
        startAnimation('left');
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }, [isAnimating, startAnimation]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Evita capturar flechas cuando el usuario está escribiendo en inputs/textarea/contentEditable
            const target = e.target as HTMLElement | null;
            const tag = target?.tagName?.toLowerCase();
            const isEditable = target?.isContentEditable || tag === 'input' || tag === 'textarea' || tag === 'select';
            if (isEditable) return;

            if (e.key === 'ArrowRight') nextProject();
            if (e.key === 'ArrowLeft') prevProject();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextProject, prevProject]);

    // Touch Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current == null || touchEndX.current == null) return;
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
    const imageAnimationClass = useMemo(
        () => (direction === 'right' ? 'animate-project-image-in-right' : 'animate-project-image-in-left'),
        [direction]
    );
    const textAnimationClass = useMemo(
        () => (direction === 'right' ? 'animate-project-text-in-right' : 'animate-project-text-in-left'),
        [direction]
    );

    useEffect(() => {
        return () => clearAnimTimeout();
    }, [clearAnimTimeout]);

    return (
        <section id="proyectos" className="py-0 border-b-6 border-ink bg-cream relative overflow-hidden">
            <SectionDivider text="INNOVACIÓN /// EJECUCIÓN /// RESULTADOS" theme="light" direction="right" />

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-ink-grid-40" />

            <div className="py-10 sm:py-12 lg:py-16 max-w-[1500px] mx-auto px-3 sm:px-4 md:px-8 relative z-10"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-6 sm:gap-8 pointer-events-none">
                    <div className="max-w-[800px]">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">04</div>
                            <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Casos de Éxito</span>
                        </div>
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
                        type="button"
                        aria-label="Previous Project"
                    >
                        <i className="fa-solid fa-chevron-left text-3xl group-hover:scale-125 transition-transform"></i>
                    </button>

                    <button
                        onClick={nextProject}
                        className="hidden md:flex absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-30 w-16 h-32 bg-ink text-cream border-2 border-cream shadow-brutal items-center justify-center hover:translate-x-2 transition-transform group"
                        type="button"
                        aria-label="Next Project"
                    >
                        <i className="fa-solid fa-chevron-right text-3xl group-hover:scale-125 transition-transform"></i>
                    </button>

                    {/* The Card */}
                    <div className="relative h-[700px] sm:h-[740px] lg:h-[780px] overflow-hidden md:mx-10">
                        <article
                            className="bg-white border-4 border-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full relative group overflow-hidden"
                        >
                            {/* Barra superior FIJA (sin animación de carrusel) */}
                            <div className="bg-ink text-cream border-b-4 border-ink">
                                <div className="p-2 sm:p-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    {/* Row 1 (mobile): Category + Index */}
                                    <div className="flex items-center justify-between sm:block min-w-0">
                                        {/* Tab */}
                                        <div className="bg-cream text-ink px-4 sm:px-6 py-2 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider border-r-4 border-ink ml-0.5 sm:ml-1 mt-0.5 sm:mt-1 rounded-t-sm max-w-[70%] sm:max-w-none truncate">
                                            <i className="fa-solid fa-folder-open mr-2"></i>
                                            {currentProject.category}
                                        </div>

                                        {/* Index (mobile) */}
                                        <div className="sm:hidden px-1 font-mono text-xs font-bold text-gray-300 shrink-0">
                                            {String(currentIndex + 1).padStart(2, '0')}/{String(PROJECTS.length).padStart(2, '0')}
                                        </div>
                                    </div>

                                    {/* Progress + Index (desktop: ocupa mitad derecha) */}
                                    <div
                                        className="w-full min-w-0 sm:w-1/2 sm:ml-auto flex items-center gap-3 sm:gap-4"
                                        aria-label={`Proyecto ${currentIndex + 1} de ${PROJECTS.length}`}
                                    >
                                        <div className="flex gap-1 items-center w-full">
                                            {PROJECTS.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-2.5 sm:h-2 flex-1 transition-colors duration-300 ${
                                                        idx === currentIndex ? 'bg-accent-yellow' : idx < currentIndex ? 'bg-gray-600' : 'bg-gray-800'
                                                    }`}
                                                />
                                            ))}
                                        </div>

                                        <div className="hidden sm:block font-mono text-sm font-bold text-gray-400 shrink-0">
                                            {String(currentIndex + 1).padStart(2, '0')}/{String(PROJECTS.length).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-14 bg-white relative min-h-0">
                                {/* Decorative "Holes" or Screws */}
                                <div className="absolute top-4 right-4 text-gray-200"><i className="fa-solid fa-plus"></i></div>
                                <div className="absolute bottom-4 left-4 text-gray-200"><i className="fa-solid fa-plus"></i></div>

                                {/* Left Col: Image (MARCO FIJO; anima solo la imagen dentro) */}
                                <div className="lg:col-span-6 flex items-center justify-center relative min-h-0">
                                    <div className="relative w-full aspect-square bg-gray-100 border-4 border-ink overflow-hidden group/image shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
                                        {/* Overlay Effects */}
                                        <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none z-20"></div>

                                        <div key={currentIndex} className={`absolute inset-0 ${imageAnimationClass}`}>
                                            {currentProject.image && (
                                                <img
                                                    src={currentProject.image}
                                                    alt={currentProject.title}
                                                    className="img-stable img-profile-initial group-hover/image:scale-105 group-hover/image:grayscale-0 group-hover/image:contrast-[1.5] transition-all duration-300 will-change-transform"
                                                    width={900}
                                                    height={900}
                                                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                                                    decoding="async"
                                                    draggable="false"
                                                    onContextMenu={(e) => e.preventDefault()}
                                                />
                                            )}

                                            {/* Ref Badge */}
                                            <div className="absolute bottom-4 right-4 bg-eng-blue text-white px-3 py-1 font-mono text-xs font-bold z-30">
                                                {currentProject.id}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col: Info (contenedor fijo; anima solo el contenido) */}
                                <div className="lg:col-span-6 flex flex-col min-h-0">
                                    <div key={currentIndex} className={`flex flex-col min-h-0 flex-1 ${textAnimationClass}`}>
                                        {/* Header fijo (sin scroll) */}
                                        <div className="shrink-0">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-[0.85] mb-3 sm:mb-4 uppercase text-ink">
                                                {currentProject.title}
                                            </h3>
                                            <div className="text-eng-blue font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-8 flex items-center gap-2 font-mono">
                                                <i className="fa-solid fa-chevron-right text-xs sm:text-sm"></i>
                                                {currentProject.subtitle}
                                            </div>
                                        </div>

                                        {/* Contenido con scroll */}
                                        <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-5 sm:space-y-8 projects-scroll">
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
                                                        <div key={i} className="flex items-start gap-2 sm:gap-3 bg-gray-50 border sm:border-2 border-gray-200 p-2.5 sm:p-3.5 hover:border-ink transition-colors">
                                                            <i className="fa-solid fa-check text-term-green mt-0.5 sm:mt-1 text-xs sm:text-sm"></i>
                                                            <span className="font-mono text-[11px] sm:text-xs lg:text-sm leading-snug text-gray-700">{res}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer Tags fijo (sin scroll) */}
                                        <div className="shrink-0 flex flex-wrap gap-1.5 sm:gap-2 mt-6 sm:mt-10">
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

            </div>
        </section>
    );
};

export default Projects;
