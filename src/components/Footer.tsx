import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ink text-cream py-10 sm:py-12 lg:py-16 border-t-6 border-ink">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
                    {/* Name */}
                    <div className="text-center md:text-left">
                        <div className="font-display text-xl sm:text-2xl lg:text-3xl uppercase">
                            {PROFILE.name.full}
                        </div>
                        <div className="font-mono text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                            {PROFILE.title} — {PROFILE.subtitle}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center">
                        <a href="#about" className="font-mono text-xs sm:text-sm hover:text-accent-yellow transition-colors uppercase">
                            Perfil
                        </a>
                        <a href="#experiencia" className="font-mono text-xs sm:text-sm hover:text-accent-yellow transition-colors uppercase">
                            Experiencia
                        </a>
                        <a href="#stack" className="font-mono text-xs sm:text-sm hover:text-accent-yellow transition-colors uppercase">
                            Stack
                        </a>
                        <a href="#proyectos" className="font-mono text-xs sm:text-sm hover:text-accent-yellow transition-colors uppercase">
                            Proyectos
                        </a>
                        <a href="#contacto" className="font-mono text-xs sm:text-sm hover:text-accent-yellow transition-colors uppercase">
                            Contacto
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3 sm:gap-4">
                        <a 
                            href={`mailto:${PROFILE.contact.email}`}
                            className="bg-cream text-ink border-3 sm:border-4 border-cream w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center font-bold hover:bg-accent-yellow hover:border-accent-yellow transition-colors"
                            title="Email"
                        >
                            <i className="fa-solid fa-envelope text-lg sm:text-xl"></i>
                        </a>
                        <a 
                            href={PROFILE.contact.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077B5] text-cream border-3 sm:border-4 border-cream w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center font-bold hover:bg-accent-yellow hover:text-ink hover:border-accent-yellow transition-colors"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin-in text-lg sm:text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t-3 sm:border-t-4 border-gray-800 my-6 sm:my-8 lg:my-10"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center">
                    <div className="font-mono text-[10px] sm:text-xs text-gray-500">
                        © {currentYear} {PROFILE.name.full}. Construcción + Datos + Transformación Digital.
                    </div>
                    
                    <div className="font-mono text-[10px] sm:text-xs text-gray-500 flex items-center gap-2">
                        Hecho con <i className="fa-solid fa-heart text-safety-orange"></i> y mucho <span className="text-accent-yellow">&lt;código/&gt;</span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs text-gray-500">
                        <i className="fa-solid fa-location-dot"></i>
                        {PROFILE.contact.location.city}, {PROFILE.contact.location.country}
                    </div>
                </div>

                {/* Terminal decoration */}
                <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
                    <div className="inline-block bg-gray-900 border-2 sm:border-4 border-gray-700 px-3 py-2 sm:px-6 sm:py-3">
                        <code className="text-[10px] sm:text-xs text-term-green font-mono">
                            <i className="fa-solid fa-terminal mr-1 sm:mr-2"></i>
                            $ echo "Gracias por visitar" &gt;&gt; log.txt
                        </code>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
