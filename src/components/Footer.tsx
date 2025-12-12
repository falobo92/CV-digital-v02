import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ink text-cream relative">
            {/* Color bar decoration */}
            <div className="flex h-1.5">
                <div className="flex-1 bg-accent-yellow"></div>
                <div className="w-24 bg-safety-orange"></div>
                <div className="w-16 bg-eng-blue"></div>
                <div className="w-12 bg-term-green"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                    
                    {/* Left: Branding */}
                    <div className="flex items-center gap-3">
                        <span className="font-display text-lg sm:text-xl uppercase tracking-tight">FLB</span>
                        <span className="w-px h-4 bg-gray-600"></span>
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                            {currentYear}
                        </span>
                    </div>

                    {/* Center: Social icons */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a 
                            href={`mailto:${PROFILE.contact.email}`}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-cream text-ink rounded-sm hover:bg-accent-yellow transition-colors"
                            title="Email"
                        >
                            <i className="fa-solid fa-envelope text-base sm:text-lg"></i>
                        </a>
                        <a 
                            href={PROFILE.contact.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0077B5] text-cream border-2 border-cream rounded-sm hover:bg-accent-yellow hover:border-accent-yellow transition-colors"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin-in text-base sm:text-lg"></i>
                        </a>
                        <a 
                            href="#hero"
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-ink text-cream border-2 border-cream rounded-sm hover:bg-accent-yellow hover:border-accent-yellow hover:text-ink transition-colors"
                            title="Volver arriba"
                        >
                            <i className="fa-solid fa-arrow-up text-base sm:text-lg"></i>
                        </a>
                    </div>

                    {/* Right: Copyright + Made with */}
                    <div className="font-mono text-[10px] sm:text-xs text-gray-500 text-center sm:text-right flex flex-col gap-1">
                        
                        <span>Hecho con <i className="fa-solid fa-heart text-safety-orange"></i>, IA y mucho <span className="text-accent-yellow">&lt;código/&gt;</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
