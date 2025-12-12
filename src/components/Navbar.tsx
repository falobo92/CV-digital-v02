import React, { useEffect, useMemo, useState } from 'react';

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

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const links = useMemo(() => NAV_LINKS, []);

    return (
        <nav className={`border-b-3 sm:border-b-4 border-ink py-2 sm:py-2.5 lg:py-3 sticky top-0 z-50 transition-all ${isScrolled ? 'bg-cream/40 backdrop-blur-2xl shadow-brutal-sm' : 'bg-cream'
            }`}>
            <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 flex justify-between items-center">

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

                {/* Mobile/Tablet Menu Button - Visible hasta lg */}
                <button
                    className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-3 transition-all relative z-[60] ${
                        isMenuOpen 
                            ? 'bg-cream text-ink border-ink' 
                            : 'bg-ink text-cream border-ink hover:bg-safety-orange hover:text-ink'
                    }`}
                    type="button"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base sm:text-lg`}></i>
                </button>
            </div>

            {/* Mobile Menu - BRUTAL Full Screen Overlay (visible hasta lg) */}
            <div 
                className={`lg:hidden fixed inset-0 top-0 bg-ink z-[55] transition-all duration-300 ease-out ${
                    isMenuOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-blueprint-grid-60" />
                
                {/* Decorative corner marks */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-accent-yellow opacity-60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-accent-yellow opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-accent-yellow opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-accent-yellow opacity-60"></div>

                {/* Menu Content */}
                <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
                    
                    {/* Navigation Links */}
                    <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group flex items-center gap-3 sm:gap-4 py-3 sm:py-4 border-b-2 border-white/10 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {/* Number */}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 border-2 border-white/20 flex items-center justify-center font-mono text-[10px] sm:text-xs text-white/60 group-hover:bg-accent-yellow group-hover:border-accent-yellow group-hover:text-ink transition-all shrink-0">
                                    {link.num}
                                </div>
                                
                                {/* Icon + Label */}
                                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                    <i className={`fa-solid ${link.icon} text-base sm:text-lg text-accent-yellow group-hover:text-safety-orange transition-colors shrink-0`}></i>
                                    <span className="font-display text-xl sm:text-2xl text-cream uppercase tracking-tight group-hover:text-accent-yellow transition-colors truncate">
                                        {link.label}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <i className="fa-solid fa-arrow-right text-white/30 group-hover:text-accent-yellow group-hover:translate-x-2 transition-all shrink-0"></i>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="shrink-0 mt-6 sm:mt-8">
                        <a
                            href="#contacto"
                            className="flex items-center justify-center gap-3 w-full bg-safety-orange text-ink py-4 sm:py-5 font-display text-base sm:text-lg uppercase border-4 border-cream shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                            Contactar
                        </a>
                    </div>

                    {/* Footer info */}
                    <div className="shrink-0 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-white/10">
                        <div className="flex items-center justify-between text-white/40 font-mono text-[10px] sm:text-xs">
                            <span>FELIPE LOBO B.</span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-term-green rounded-full animate-pulse"></span>
                                Disponible
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
