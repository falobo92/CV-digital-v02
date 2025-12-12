import React, { useEffect, useMemo, useRef, useState } from 'react';

const NAV_LINKS = [
    { label: 'Perfil', href: '#about', icon: 'fa-user', num: '01' },
    { label: 'Experiencia', href: '#experiencia', icon: 'fa-briefcase', num: '02' },
    { label: 'Stack', href: '#stack', icon: 'fa-layer-group', num: '03' },
    { label: 'Proyectos', href: '#proyectos', icon: 'fa-folder-open', num: '04' },
    { label: 'Formación', href: '#educacion', icon: 'fa-graduation-cap', num: '05' },
    { label: 'Referencias', href: '#referencias', icon: 'fa-users', num: '06' },
] as const;

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        // Inicializa estado (por si se carga con scroll)
        setIsScrolled(window.scrollY > 50);

        let rafId: number | null = null;
        const handleScroll = () => {
            // Throttle con rAF para evitar setState excesivos
            if (rafId != null) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = null;
                setIsScrolled(window.scrollY > 50);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId != null) window.cancelAnimationFrame(rafId);
        };
    }, []);

    // Bloquear scroll del body cuando el menú está abierto (robusto para mobile)
    useEffect(() => {
        if (!isMenuOpen) return;

        const scrollY = window.scrollY;
        const { style } = document.body;
        style.position = 'fixed';
        style.top = `-${scrollY}px`;
        style.left = '0';
        style.right = '0';
        style.width = '100%';
        style.overflow = 'hidden';

        return () => {
            const top = document.body.style.top;
            const y = top ? -parseInt(top, 10) : scrollY;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, y);
        };
    }, [isMenuOpen]);

    // Cerrar con Escape cuando está abierto
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);

    // Cerrar automáticamente si pasamos a desktop (>= lg)
    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)');
        const onChange = () => {
            if (mql.matches) setIsMenuOpen(false);
        };
        onChange();
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, []);

    // Enfocar el botón de cerrar al abrir (mejora UX/accesibilidad en mobile)
    useEffect(() => {
        if (isMenuOpen) closeBtnRef.current?.focus();
    }, [isMenuOpen]);

    const links = useMemo(() => NAV_LINKS, []);
    const mobileDelayClasses = useMemo(
        () => ['delay-100', 'delay-150', 'delay-200', 'delay-[250ms]', 'delay-300', 'delay-[350ms]'] as const,
        []
    );

    return (
        <nav className="sticky top-0 z-50 py-2 sm:py-2.5 lg:py-3">
            {/* Background Layer with Backdrop Filter - Separated to avoid 'fixed' child issues */}
            <div className={`absolute inset-0 w-full h-full border-b-3 sm:border-b-4 border-ink transition-all ${isScrolled ? 'bg-cream/40 backdrop-blur-2xl shadow-brutal-sm' : 'bg-cream'
                }`} />

            {/* Content Container */}
            <div className="relative z-[60] max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 flex justify-between items-center">

                {/* Logo - Architectural Style */}
                <a href="#hero" className="font-display text-base lg:text-xl tracking-tighter uppercase group flex items-center gap-1.5 sm:gap-2 relative z-[60] shrink-0">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-ink text-cream flex items-center justify-center font-bold text-sm lg:text-base group-hover:bg-safety-orange transition-colors">
                        FL
                    </div>
                    {/* Nombre: oculto en mobile, visible desde lg (cuando hay espacio para el menú) */}
                    <span className="hidden lg:block group-hover:text-safety-orange transition-colors whitespace-nowrap">
                        Felipe Lobo B<span className="text-safety-orange group-hover:text-ink">.</span>
                    </span>
                </a>

                {/* Desktop Menu - Solo visible desde lg (1024px) */}
                <div className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 items-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-mono text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-safety-orange hover:underline decoration-2 underline-offset-4 transition-all whitespace-nowrap"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="bg-ink text-cream px-4 xl:px-5 py-1.5 font-display uppercase text-xs border-2 border-transparent hover:bg-safety-orange hover:text-ink hover:border-ink transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
                    >
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                        Contactar
                    </a>
                </div>

                {/* Mobile/Tablet Menu Button - Visible hasta lg. Solo visible cuando el menú está CERRADO */}
                <button
                    className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-3 transition-all relative z-[60] bg-ink text-cream border-ink hover:bg-safety-orange hover:text-ink ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    aria-controls="mobile-menu"
                    aria-label="Open menu"
                >
                    <i className="fa-solid fa-bars text-base sm:text-lg"></i>
                </button>
            </div>

            {/* Mobile Menu - BRUTAL Full Screen Overlay (visible hasta lg) */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                className={`lg:hidden fixed inset-0 top-0 bg-ink/85 backdrop-blur-2xl z-[80] h-[100dvh] min-h-[100svh] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none -translate-y-4'
                    }`}
            >
                {/* Punto decorativo (amarillo advertencia) */}
                <div
                    className={`absolute top-[calc(0.25rem+env(safe-area-inset-top))] right-[calc(0.25rem+env(safe-area-inset-right))] w-2.5 h-2.5 bg-accent-yellow rounded-full shadow-[0_0_18px_rgba(255,214,0,0.35)] transition-all duration-700 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                />

                {/* Close Button - Tied to Menu */}
                <button
                    ref={closeBtnRef}
                    className="absolute top-[calc(0.5rem+env(safe-area-inset-top))] sm:top-[calc(0.6rem+env(safe-area-inset-top))] right-3 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-3 border-cream text-cream hover:bg-cream hover:text-ink transition-all z-10"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <i className="fa-solid fa-xmark text-lg sm:text-xl"></i>
                </button>

                {/* Menu Content */}
                <div className="flex flex-col h-full pt-[calc(5rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] px-4 sm:px-6 overflow-y-auto overscroll-contain ios-scroll">

                    {/* Navigation Links */}
                    <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-2">
                        {links.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`group flex items-center gap-3 sm:gap-4 py-3 sm:py-4 border-b-2 border-white/10 transition-all duration-300 ${mobileDelayClasses[index] ?? 'delay-100'} ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {/* Number */}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 border-2 border-white/20 flex items-center justify-center font-mono text-[10px] sm:text-xs text-white/60 group-hover:bg-accent-yellow group-hover:border-accent-yellow group-hover:text-ink transition-all shrink-0">
                                    {link.num}
                                </div>

                                {/* Icon + Label */}
                                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                    <i className={`fa-solid ${link.icon} text-sm sm:text-base text-accent-yellow group-hover:text-safety-orange transition-colors shrink-0`}></i>
                                    <span className="font-display text-lg sm:text-2xl text-cream uppercase tracking-tight leading-none group-hover:text-accent-yellow transition-colors truncate">
                                        {link.label}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <i className="fa-solid fa-arrow-right text-white/30 group-hover:text-accent-yellow group-hover:translate-x-2 transition-all shrink-0"></i>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div
                        className={`shrink-0 mt-6 sm:mt-8 transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <a
                            href="#contacto"
                            className="flex items-center justify-center gap-3 w-full bg-safety-orange text-ink py-4 sm:py-5 font-display text-sm sm:text-base uppercase border-4 border-cream shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:bg-cream hover:text-ink hover:border-safety-orange hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
