import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceCategory } from '../types';
import BrutalButton from './ui/BrutalButton';

const Experience: React.FC = () => {
    const [filter, setFilter] = useState<ExperienceCategory>('all');
    const [expandedId, setExpandedId] = useState<string | null>('1');
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const timelineRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const filteredExperiences = EXPERIENCES.filter(exp => 
        filter === 'all' || exp.category === filter
    );

    // Scroll progress tracker
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate progress based on how much of the section is visible
            const start = rect.top + windowHeight * 0.3;
            const end = rect.bottom - windowHeight * 0.3;
            const current = windowHeight * 0.5;
            
            if (start > current) {
                setScrollProgress(0);
            } else if (end < current) {
                setScrollProgress(100);
            } else {
                const progress = ((current - start) / (end - start)) * 100;
                setScrollProgress(Math.min(100, Math.max(0, progress)));
            }

            // Update active index based on scroll
            const items = timelineRef.current?.querySelectorAll('.timeline-item');
            items?.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top < windowHeight * 0.5 && itemRect.bottom > windowHeight * 0.3) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [filteredExperiences]);

    const handleToggle = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section 
            ref={sectionRef}
            id="experiencia" 
            className="py-24 lg:py-32 border-b-6 border-ink bg-cream relative overflow-hidden"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 30%, #1E3A5F 1px, transparent 1px),
                        radial-gradient(circle at 80% 70%, #FF4D00 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full opacity-20"
                        style={{
                            background: i % 2 === 0 ? '#00B4D8' : '#FF4D00',
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-digital-cyan to-safety-orange"></div>
                            <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">Evolución Profesional</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 uppercase tracking-tight">TRAYECTORIA</h2>
                        <p className="text-gray-600 text-lg font-mono max-w-xl">
                            De la obra tradicional a la gestión digital — una evolución constante.
                        </p>
                    </div>
                    
                    {/* Filters with Glow Effect */}
                    <div className="flex gap-4 flex-wrap">
                        <BrutalButton 
                            onClick={() => setFilter('all')} 
                            active={filter === 'all'}
                            size="sm"
                        >
                            <i className="fa-solid fa-border-all mr-2"></i>
                            TODO
                        </BrutalButton>
                        <BrutalButton 
                            onClick={() => setFilter('digital')} 
                            active={filter === 'digital'}
                            size="sm"
                        >
                            <i className="fa-solid fa-microchip mr-2"></i>
                            DIGITAL
                        </BrutalButton>
                        <BrutalButton 
                            onClick={() => setFilter('construction')} 
                            active={filter === 'construction'}
                            size="sm"
                        >
                            <i className="fa-solid fa-helmet-safety mr-2"></i>
                            CONSTRUCCIÓN
                        </BrutalButton>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="hidden lg:flex items-center gap-4 mb-12">
                    <span className="font-mono text-xs text-gray-400 uppercase">Progreso</span>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-digital-cyan via-eng-blue to-safety-orange transition-all duration-300 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                    <span className="font-mono text-xs text-gray-400">{Math.round(scrollProgress)}%</span>
                </div>

                {/* Timeline Container */}
                <div ref={timelineRef} className="relative">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200">
                        {/* Animated Progress Line */}
                        <div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-digital-cyan via-eng-blue to-safety-orange transition-all duration-500 ease-out"
                            style={{ 
                                height: `${scrollProgress}%`,
                                boxShadow: '0 0 20px rgba(0, 180, 216, 0.5), 0 0 40px rgba(0, 180, 216, 0.3)'
                            }}
                        />
                        
                        {/* Glowing Orb at Progress Point */}
                        <div 
                            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-digital-cyan transition-all duration-500 ease-out"
                            style={{ 
                                top: `${scrollProgress}%`,
                                boxShadow: '0 0 20px rgba(0, 180, 216, 0.8), 0 0 40px rgba(0, 180, 216, 0.5), 0 0 60px rgba(0, 180, 216, 0.3)',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {filteredExperiences.map((job, index) => {
                            const isExpanded = expandedId === job.id;
                            const isDigital = job.category === 'digital';
                            const isActive = activeIndex === index;
                            const itemProgress = Math.min(100, Math.max(0, (scrollProgress - (index * (100 / filteredExperiences.length))) * (filteredExperiences.length / 100) * 100));
                            
                            return (
                                <div 
                                    key={job.id} 
                                    className={`timeline-item relative pl-16 md:pl-24 transition-all duration-500 ${
                                        isActive ? 'scale-100' : 'scale-[0.98]'
                                    }`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-4 top-8 group">
                                        {/* Outer Ring with Pulse */}
                                        <div className={`absolute -inset-3 rounded-full transition-all duration-500 ${
                                            isActive ? 'animate-ping opacity-30' : 'opacity-0'
                                        } ${isDigital ? 'bg-digital-cyan' : 'bg-safety-orange'}`} />
                                        
                                        {/* Connection Line to Card */}
                                        <div className={`absolute left-full top-1/2 -translate-y-1/2 h-[3px] transition-all duration-300 ${
                                            isActive ? 'w-10 md:w-14' : 'w-6 md:w-10'
                                        } ${isDigital ? 'bg-gradient-to-r from-digital-cyan to-transparent' : 'bg-gradient-to-r from-safety-orange to-transparent'}`} />
                                        
                                        {/* Main Node */}
                                        <div className={`relative w-12 h-12 border-4 border-ink flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 ${
                                            isDigital ? 'bg-digital-cyan' : 'bg-safety-orange'
                                        } ${isActive ? 'shadow-brutal-sm rotate-0' : 'rotate-45'}`}>
                                            <i className={`${isDigital ? 'fa-solid fa-microchip' : 'fa-solid fa-helmet-safety'} text-white text-lg transition-transform duration-300 ${
                                                isActive ? 'rotate-0' : '-rotate-45'
                                            }`}></i>
                                        </div>

                                        {/* Year Badge */}
                                        <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                                            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                        } ${isDigital ? 'text-digital-cyan' : 'text-safety-orange'}`}>
                                            {job.period.split('—')[0].trim()}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <article className={`relative bg-white border-4 border-ink overflow-hidden transition-all duration-500 ${
                                        isExpanded ? 'shadow-brutal-lg' : 'shadow-brutal'
                                    } ${isActive ? 'translate-x-0' : 'translate-x-2'}`}>
                                        {/* Animated Top Border */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 ${isDigital ? 'bg-digital-cyan' : 'bg-safety-orange'}`}>
                                            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 ${
                                                isActive ? 'animate-shimmer' : ''
                                            }`} style={{
                                                backgroundSize: '200% 100%',
                                                animation: isActive ? 'shimmer 2s infinite' : 'none'
                                            }} />
                                        </div>
                                        
                                        {/* Category Indicator */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rotate-45 ${
                                            isDigital ? 'bg-digital-cyan/10' : 'bg-safety-orange/10'
                                        }`} />

                                        {/* Header */}
                                        <div 
                                            className="cursor-pointer p-6 md:p-8 pt-8"
                                            onClick={() => handleToggle(job.id)}
                                        >
                                            {/* Highlight Badge */}
                                            {job.highlight && (
                                                <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold border-4 border-ink mb-4 shadow-brutal-sm uppercase transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal ${
                                                    isDigital ? 'bg-digital-cyan text-white' : 'bg-accent-yellow text-ink'
                                                }`}>
                                                    <i className="fa-solid fa-star animate-pulse"></i>
                                                    {job.highlight}
                                                </span>
                                            )}
                                            
                                            <div className="flex flex-wrap justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-display text-xl md:text-2xl text-eng-blue leading-tight mb-2 uppercase group-hover:text-digital-cyan transition-colors">
                                                        {job.role}
                                                    </h3>
                                                    <div className="font-bold text-lg flex items-center gap-2">
                                                        <span>{job.company}</span>
                                                        {job.project && (
                                                            <>
                                                                <span className="text-gray-300">•</span>
                                                                <span className="font-normal text-gray-600">{job.project}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="font-mono text-sm text-gray-500 mt-3 flex items-center gap-3">
                                                        <span className="flex items-center gap-1.5">
                                                            <i className="fa-solid fa-location-dot text-safety-orange"></i>
                                                            {job.location}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                {/* Period Badge */}
                                                <div className="relative group/period">
                                                    <div className={`absolute inset-0 blur-md transition-opacity duration-300 ${
                                                        isActive ? 'opacity-50' : 'opacity-0'
                                                    } ${isDigital ? 'bg-digital-cyan' : 'bg-safety-orange'}`} />
                                                    <div className="relative bg-ink text-cream px-5 py-2 font-bold text-sm border-4 border-ink uppercase tracking-wide">
                                                        {job.period}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expand Toggle */}
                                            <div className={`flex items-center gap-3 mt-6 font-bold text-sm uppercase transition-all duration-300 ${
                                                isDigital ? 'text-digital-cyan' : 'text-eng-blue'
                                            }`}>
                                                <div className={`w-8 h-8 border-3 border-current flex items-center justify-center transition-all duration-300 ${
                                                    isExpanded ? 'rotate-180 bg-current' : 'rotate-0'
                                                }`}>
                                                    <i className={`fa-solid fa-chevron-down text-xs ${isExpanded ? 'text-white' : ''}`}></i>
                                                </div>
                                                <span>{isExpanded ? 'CONTRAER' : 'VER DETALLES'}</span>
                                                <div className={`flex-1 h-[2px] transition-all duration-500 ${
                                                    isExpanded ? 'opacity-100' : 'opacity-30'
                                                } ${isDigital ? 'bg-digital-cyan' : 'bg-eng-blue'}`} />
                                            </div>
                                        </div>

                                        {/* Expandable Content with Animation */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                                            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="px-6 md:px-8 pb-8 pt-2 border-t-4 border-gray-100">
                                                {/* Details with Staggered Animation */}
                                                <ul className="space-y-4 mb-6">
                                                    {job.details.map((detail, idx) => (
                                                        <li 
                                                            key={idx} 
                                                            className="relative pl-8 text-sm md:text-base leading-relaxed"
                                                            style={{
                                                                animationDelay: `${idx * 100}ms`,
                                                                animation: isExpanded ? 'slideUp 0.4s ease-out forwards' : 'none',
                                                                opacity: isExpanded ? 1 : 0
                                                            }}
                                                        >
                                                            <div className={`absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center ${
                                                                isDigital ? 'text-digital-cyan' : 'text-safety-orange'
                                                            }`}>
                                                                <i className="fa-solid fa-caret-right text-lg"></i>
                                                            </div>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Tags with Hover Effects */}
                                                <div className="flex flex-wrap gap-2 pt-4 border-t-4 border-gray-100">
                                                    {job.tags.map((tag, tagIdx) => (
                                                        <span 
                                                            key={tag} 
                                                            className="relative text-xs font-bold px-3 py-2 border-4 border-ink bg-cream font-mono uppercase overflow-hidden group/tag transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-sm cursor-default"
                                                            style={{
                                                                animationDelay: `${tagIdx * 50}ms`,
                                                                animation: isExpanded ? 'fadeIn 0.3s ease-out forwards' : 'none'
                                                            }}
                                                        >
                                                            <span className={`absolute inset-0 translate-y-full group-hover/tag:translate-y-0 transition-transform duration-300 ${
                                                                isDigital ? 'bg-digital-cyan' : 'bg-accent-yellow'
                                                            }`} />
                                                            <span className="relative group-hover/tag:text-white transition-colors duration-300">{tag}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        </article>
                                    </div>
                                );
                            })}
                    </div>
                    
                    {filteredExperiences.length === 0 && (
                        <div className="py-16 text-center font-mono text-gray-500 bg-white border-4 border-ink p-10 shadow-brutal ml-16 md:ml-24">
                            <i className="fa-solid fa-folder-open text-4xl mb-4 text-gray-300"></i>
                            <p>No se encontraron experiencias para este filtro.</p>
                        </div>
                    )}

                    {/* Timeline End Marker */}
                    <div className="absolute left-6 md:left-10 -bottom-4 flex flex-col items-center">
                        <div className="w-6 h-6 bg-ink rotate-45 border-4 border-ink" />
                        <div className="mt-4 font-mono text-xs text-gray-400 uppercase tracking-widest whitespace-nowrap -ml-8">
                            En constante evolución
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
        </section>
    );
};

export default Experience;
