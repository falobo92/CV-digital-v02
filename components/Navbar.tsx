import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'Perfil', href: '#about' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Stack', href: '#stack' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Formación', href: '#educacion' },
    ];

    return (
        <nav className={`border-b-4 border-ink py-5 sticky top-0 z-50 transition-all ${isScrolled ? 'bg-cream/98 backdrop-blur-sm shadow-brutal-sm' : 'bg-cream'
            }`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Logo - Architectural Style */}
                <a href="#hero" className="font-display text-2xl tracking-tighter uppercase group flex items-center gap-2">
                    <div className="w-8 h-8 bg-ink text-cream flex items-center justify-center font-bold text-lg group-hover:bg-safety-orange transition-colors">
                        FL
                    </div>
                    <span className="hidden sm:block group-hover:text-safety-orange transition-colors">
                        Felipe Lobo<span className="text-safety-orange group-hover:text-ink">.</span>
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
                        className="bg-ink text-cream px-6 py-2 font-display uppercase text-sm border-2 border-transparent hover:bg-safety-orange hover:text-ink hover:border-ink transition-all flex items-center gap-2"
                    >
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                        Contactar
                    </a>
                </div>

                {/* Mobile Menu Button - Blocky */}
                <button
                    className="md:hidden w-10 h-10 bg-ink text-cream flex items-center justify-center border-2 border-transparent hover:bg-cream hover:text-ink hover:border-ink transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Changed from setIsOpen to setIsMenuOpen
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i> {/* Changed from isOpen to isMenuOpen */}
                </button>
            </div>

            {/* Mobile Menu - Drawer with Grid */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-cream border-b-4 border-ink overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0' // Changed from isOpen to isMenuOpen
                }`}>
                <div className="flex flex-col p-6 gap-4 bg-grid-small">
                    {links.map((link) => ( // Changed from navLinks to links
                        <a
                            key={link.label} // Changed from link.name to link.label
                            href={link.href}
                            className="font-display text-2xl uppercase hover:text-safety-orange hover:translate-x-2 transition-transform flex items-center gap-3"
                            onClick={() => setIsMenuOpen(false)} // Changed from setIsOpen to setIsMenuOpen
                        >
                            <span className="w-2 h-2 bg-ink"></span>
                            {link.label} {/* Changed from link.name to link.label */}
                        </a>
                    ))}
                    <div className="mt-4 pt-4 border-t-2 border-ink/20">
                        {/* Assuming BrutalButton is a custom component, if not, it needs to be defined or replaced */}
                        {/* <BrutalButton as="a" href="#contacto" variant="primary" className="w-full justify-center">
                            CONTACTAR
                        </BrutalButton> */}
                        <a
                            href="#contacto"
                            className="bg-safety-orange text-cream px-6 py-4 text-center font-display uppercase mt-4 border-4 border-ink shadow-brutal flex items-center justify-center gap-2 w-full justify-center"
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
