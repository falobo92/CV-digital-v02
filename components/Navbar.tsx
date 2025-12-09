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
        <nav className={`border-b-4 border-ink py-5 sticky top-0 z-50 transition-all ${
            isScrolled ? 'bg-cream/98 backdrop-blur-sm shadow-brutal-sm' : 'bg-cream'
        }`}>
            <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                {/* Logo */}
                <a 
                    href="#hero" 
                    className="font-display text-lg md:text-xl bg-ink text-cream px-5 py-3 border-4 border-ink shadow-brutal-sm hover:bg-eng-blue transition-colors uppercase tracking-wide"
                >
                    FLB
                </a>

                {/* Mobile Menu */}
                <button 
                    className="md:hidden border-4 border-ink p-3 bg-white shadow-brutal-sm active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="relative group font-bold text-sm uppercase tracking-wide"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-safety-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </a>
                    ))}
                    <a 
                        href="#contacto" 
                        className="brutal-btn bg-safety-orange text-cream px-6 py-3 font-display uppercase text-sm border-4 border-ink shadow-brutal-sm hover:bg-safety-orange-light hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2"
                    >
                        <i className="fa-solid fa-paper-plane"></i>
                        Contactar
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-cream border-b-4 border-ink overflow-hidden transition-all duration-300 ${
                isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="p-8 flex flex-col gap-5">
                    {links.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="text-lg font-bold border-b-4 border-gray-200 pb-4 hover:text-eng-blue transition-colors uppercase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#contacto" 
                        className="bg-safety-orange text-cream px-6 py-4 text-center font-display uppercase mt-4 border-4 border-ink shadow-brutal flex items-center justify-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <i className="fa-solid fa-paper-plane"></i>
                        Contactar
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
