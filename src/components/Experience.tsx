import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceCategory } from '../types';
import SectionDivider from './ui/SectionDivider';

const Experience: React.FC = () => {
    // ... state ...
    const [filter, setFilter] = useState<ExperienceCategory>('all');
    const [expandedId, setExpandedId] = useState<string | null>('1');
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);

    const filteredExperiences = EXPERIENCES.filter(exp =>
        filter === 'all' || exp.category === filter
    );

    // ... useEffect ...
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            // ... logic ...
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
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
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section
            ref={sectionRef}
            id="experiencia"
            className="border-b-6 border-ink bg-white relative overflow-hidden pb-32 pt-0"
        >
            <SectionDivider text="CAREER HISTORY  ///  TRAYECTORIA  ///  EVOLUTION" theme="dark" direction="right" />

            {/* Background Grid - Minimal opacity */}
            <div className="absolute inset-0 opacity-[0.2] bg-grid pointer-events-none mt-12"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-10 sm:pt-16 lg:pt-20">
                {/* Header - Sober & Architectural */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-24 gap-6 sm:gap-8 lg:gap-12">
                    <div>
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink flex items-center justify-center text-white font-mono text-[10px] sm:text-xs font-bold">02</div>
                            <span className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-widest">Evolución Profesional</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-2 text-ink tracking-tighter uppercase leading-[0.9]">
                            Trayectoria
                            <span className="block text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1 sm:mt-2">/ Timeline</span>
                        </h2>
                    </div>

                    {/* Filters - Hard Edge Buttons */}
                    <div className="flex border-3 sm:border-4 border-ink w-full sm:w-auto">
                        {['all', 'digital', 'construction'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as ExperienceCategory)}
                                className={`flex-1 sm:flex-none px-3 sm:px-6 py-3 sm:py-4 font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase transition-all relative overflow-hidden group ${filter === cat
                                    ? 'bg-ink text-white'
                                    : 'bg-white text-ink hover:bg-gray-100'
                                    } ${cat !== 'construction' ? 'border-r-3 sm:border-r-4 border-ink' : 'border-r-0'}`}
                            >
                                <span className="relative z-10">{cat === 'all' ? 'TODO' : cat === 'digital' ? 'DIGITAL' : 'OBRA'}</span>
                                {filter !== cat && <div className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0 hidden sm:block"></div>}
                                {filter !== cat && <span className="absolute inset-0 hidden sm:flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-10 delay-75">{cat === 'all' ? 'TODO' : cat === 'digital' ? 'DIGITAL' : 'OBRA'}</span>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-0 md:pl-8">
                    {/* Structural Beam - Solid Black Line */}
                    <div className="absolute left-[1.2rem] md:left-[3.5rem] top-0 bottom-0 w-1 bg-gray-200 z-0">
                        {/* Progress Fill */}
                        <div
                            className="absolute top-0 left-0 w-full bg-ink transition-all duration-300 ease-out"
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {filteredExperiences.map((job) => {
                            const isExpanded = expandedId === job.id;
                            const isDigital = job.category === 'digital';

                            return (
                                <div
                                    key={job.id}
                                    className={`relative pl-12 md:pl-28 timeline-item group`}
                                >
                                    {/* Timeline Node - Square */}
                                    <div className="absolute left-[0.45rem] md:left-[2.75rem] top-10 -translate-x-1/2 z-10 bg-white p-1">
                                        <div className={`w-6 h-6 border-4 border-ink transition-all duration-300 ${isExpanded ? 'bg-ink rotate-45' : 'bg-white'}`}>
                                        </div>
                                    </div>

                                    {/* Card - Hard Edged */}
                                    <article
                                        onClick={() => handleToggle(job.id)}
                                        className={`relative border-l-4 border-ink pl-6 py-2 transition-all duration-300 cursor-pointer ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                            <div>
                                                {/* Meta Info */}
                                                <div className="flex items-center gap-3 mb-3 font-mono text-xs font-bold uppercase tracking-tight">
                                                    <span className="text-gray-500">{job.period}</span>
                                                    <span className="text-ink">/</span>
                                                    <span className={isDigital ? "text-digital-cyan" : "text-safety-orange"}>
                                                        {isDigital ? 'DIGITAL' : 'CONSTRUCTION'}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-none uppercase mb-2 sm:mb-3 text-ink group-hover:underline decoration-2 sm:decoration-4 underline-offset-4 decoration-safety-orange">
                                                    {job.role}
                                                </h3>
                                                <div className="font-mono text-sm sm:text-base lg:text-lg font-bold text-gray-600">
                                                    @{job.company}
                                                </div>
                                            </div>

                                            <div className="md:text-right">
                                                <div className="font-mono text-xs text-ink uppercase border-2 border-ink px-2 py-1 inline-block">
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                            <div className="border-t-2 border-dashed border-gray-300 pt-6">
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                                                    {job.details.map((detail, idx) => (
                                                        <li key={idx} className="flex gap-3 text-base font-medium text-gray-700 leading-relaxed">
                                                            <span className="text-safety-orange font-bold font-mono mt-1">›</span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex flex-wrap gap-2">
                                                    {job.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-1 bg-ink text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                                                            {tag}
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
                </div>
            </div>
        </section>
    );
};

export default Experience;
