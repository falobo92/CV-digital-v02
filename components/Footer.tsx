import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ink text-cream py-16 border-t-6 border-ink">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Main */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                    {/* Name */}
                    <div className="text-center md:text-left">
                        <div className="font-display text-3xl uppercase">
                            {PROFILE.name.full}
                        </div>
                        <div className="font-mono text-sm text-gray-400 mt-2">
                            {PROFILE.title} — {PROFILE.subtitle}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 flex-wrap justify-center">
                        <a href="#about" className="font-mono text-sm hover:text-accent-yellow transition-colors uppercase">
                            Perfil
                        </a>
                        <a href="#experiencia" className="font-mono text-sm hover:text-accent-yellow transition-colors uppercase">
                            Experiencia
                        </a>
                        <a href="#stack" className="font-mono text-sm hover:text-accent-yellow transition-colors uppercase">
                            Stack
                        </a>
                        <a href="#proyectos" className="font-mono text-sm hover:text-accent-yellow transition-colors uppercase">
                            Proyectos
                        </a>
                        <a href="#contacto" className="font-mono text-sm hover:text-accent-yellow transition-colors uppercase">
                            Contacto
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        <a 
                            href={`mailto:${PROFILE.contact.email}`}
                            className="bg-cream text-ink border-4 border-cream w-14 h-14 flex items-center justify-center font-bold hover:bg-accent-yellow hover:border-accent-yellow transition-colors"
                            title="Email"
                        >
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </a>
                        <a 
                            href={PROFILE.contact.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077B5] text-cream border-4 border-cream w-14 h-14 flex items-center justify-center font-bold hover:bg-accent-yellow hover:text-ink hover:border-accent-yellow transition-colors"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t-4 border-gray-800 my-10"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                    <div className="font-mono text-xs text-gray-500">
                        © {currentYear} {PROFILE.name.full}. Construcción + Datos + Transformación Digital.
                    </div>
                    
                    <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
                        Hecho con <i className="fa-solid fa-heart text-safety-orange"></i> y mucho <span className="text-accent-yellow">&lt;código/&gt;</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
                        <i className="fa-solid fa-location-dot"></i>
                        {PROFILE.contact.location.city}, {PROFILE.contact.location.country}
                    </div>
                </div>

                {/* Terminal decoration */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-gray-900 border-4 border-gray-700 px-6 py-3">
                        <code className="text-xs text-term-green font-mono">
                            <i className="fa-solid fa-terminal mr-2"></i>
                            $ echo "Gracias por visitar" &gt;&gt; log.txt
                        </code>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
