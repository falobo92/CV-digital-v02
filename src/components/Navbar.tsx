import React, { useEffect, useMemo, useState } from 'react';

const NAV_LINKS = [
    { label: 'Perfil', href: '#about' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Formación', href: '#educacion' },
    { label: 'Referencias', href: '#referencias' },
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

    const links = useMemo(() => NAV_LINKS, []);

    return (
        <nav className={`border-b-3 sm:border-b-4 border-ink py-2 sm:py-2.5 lg:py-3 sticky top-0 z-50 transition-all ${isScrolled ? 'bg-cream/40 backdrop-blur-2xl shadow-brutal-sm' : 'bg-cream'
            }`}>
            <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 flex justify-between items-center">

                {/* Logo - Architectural Style */}
                <a href="#hero" className="font-display text-base sm:text-lg lg:text-xl tracking-tighter uppercase group flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-ink text-cream flex items-center justify-center font-bold text-xs sm:text-base group-hover:bg-safety-orange transition-colors">
                        FL
                    </div>
                    <span className="hidden sm:block group-hover:text-safety-orange transition-colors">
                        Felipe Lobo B<span className="text-safety-orange group-hover:text-ink">.</span>
                    </span>
                </a>

                {/* Desktop Menu - Technical/Mono */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-mono text-sm font-bold uppercase tracking-wide hover:text-safety-orange hover:underline decoration-2 underline-offset-4 transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="bg-ink text-cream px-5 py-1.5 font-display uppercase text-xs border-2 border-transparent hover:bg-safety-orange hover:text-ink hover:border-ink transition-all flex items-center gap-2"
                    >
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                        Contactar
                    </a>
                </div>

                {/* Mobile Menu Button - Blocky */}
                <button
                    className="md:hidden w-8 h-8 sm:w-9 sm:h-9 bg-ink text-cream flex items-center justify-center border-2 border-transparent hover:bg-cream hover:text-ink hover:border-ink transition-all"
                    type="button"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base sm:text-lg`}></i>
                </button>
            </div>

            {/* Mobile Menu - Drawer with Grid */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-cream border-b-3 sm:border-b-4 border-ink overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4 bg-grid-small">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-display text-lg sm:text-xl lg:text-2xl uppercase hover:text-safety-orange hover:translate-x-2 transition-transform flex items-center gap-2 sm:gap-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ink"></span>
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-2 border-ink/20">
                        <a
                            href="#contacto"
                            className="bg-safety-orange text-cream px-4 sm:px-6 py-3 sm:py-4 text-center font-display text-sm sm:text-base uppercase border-3 sm:border-4 border-ink shadow-brutal flex items-center justify-center gap-2 w-full"
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
