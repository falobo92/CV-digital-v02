import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import SectionDivider from './ui/SectionDivider';
import BrutalButton from './ui/BrutalButton';

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    const currentProject = PROJECTS[currentIndex];

    return (
        <section id="proyectos" className="py-0 border-b-6 border-ink bg-cream relative overflow-hidden">
            <SectionDivider text="INNOVATION  ///  EXECUTION  ///  RESULTS" theme="light" direction="right" />

            <div className="py-24 lg:py-32 max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Header & Controls Container */}
                <div className="flex flex-col xl:flex-row justify-between items-end mb-16 gap-10">
                    <div className="max-w-[700px]">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 uppercase tracking-tight">PROYECTOS CLAVE</h2>
                        <p className="font-mono text-gray-600 text-lg">
                            Desliza para ver casos reales donde apliqué gestión documental, automatización y metodologías Lean.
                        </p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex gap-4">
                        <BrutalButton onClick={prevProject} size="md" className="w-16 h-16 !p-0">
                            <i className="fa-solid fa-arrow-left text-xl"></i>
                        </BrutalButton>
                        <div className="font-mono text-4xl font-bold flex items-center px-4">
                            {currentIndex + 1} <span className="text-gray-400 mx-2">/</span> {PROJECTS.length}
                        </div>
                        <BrutalButton onClick={nextProject} size="md" className="w-16 h-16 !p-0">
                            <i className="fa-solid fa-arrow-right text-xl"></i>
                        </BrutalButton>
                    </div>
                </div>

                {/* Carousel Card - Single Display */}
                <div className="relative min-h-[600px]">
                    <article
                        key={currentProject.id}
                        className="bg-white border-4 border-ink shadow-brutal flex flex-col h-full animate-fade-in relative group overflow-hidden"
                    >
                        {/* Blueprint Grid Background */}
                        <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

                        {/* Card Header */}
                        <div className="bg-ink text-cream p-6 flex justify-between items-center border-b-4 border-ink">
                            <span className="font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                                <i className="fa-solid fa-folder-open"></i>
                                {currentProject.category}
                            </span>
                            <span className="text-xs border-2 border-cream px-3 py-1 font-mono">{currentProject.year}</span>
                        </div>

                        <div className="p-8 md:p-12 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Col: Info */}
                            <div className="flex flex-col">
                                <h3 className="text-4xl md:text-5xl font-display leading-none mb-4 uppercase">{currentProject.title}</h3>
                                <div className="text-eng-blue font-bold text-xl mb-8">{currentProject.subtitle}</div>

                                {/* Challenge */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-crosshairs text-xl text-eng-blue"></i>
                                        <p className="font-bold text-sm uppercase tracking-wide border-b-4 border-accent-yellow pb-1">EL DESAFÍO</p>
                                    </div>
                                    <p className="text-base leading-relaxed text-gray-700 font-mono">
                                        {currentProject.challenge}
                                    </p>
                                </div>
                            </div>

                            {/* Right Col: Results & Tags */}
                            <div className="flex flex-col h-full">
                                {/* Results */}
                                <div className="mb-8 flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-trophy text-xl text-safety-orange"></i>
                                        <p className="font-bold text-sm uppercase tracking-wide border-b-4 border-term-green pb-1">RESULTADOS</p>
                                    </div>
                                    <ul className="space-y-4">
                                        {currentProject.results.map((res, i) => (
                                            <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                                                <i className="fa-solid fa-check text-term-green mt-1"></i>
                                                <span className="font-mono">{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="pt-6 border-t-4 border-gray-100 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {currentProject.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-bold px-3 py-2 border-4 border-ink bg-cream uppercase font-mono hover:bg-accent-yellow transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Global CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-block bg-ink text-cream border-4 border-ink p-10 shadow-brutal-xl">
                        <p className="font-mono text-lg mb-6 flex items-center justify-center gap-3">
                            <i className="fa-solid fa-comments"></i>
                            ¿Quieres conocer más detalles sobre estos proyectos?
                        </p>
                        <a
                            href="#contacto"
                            className="brutal-btn inline-flex items-center gap-3 bg-safety-orange text-cream px-10 py-5 font-display uppercase border-4 border-cream shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                            CONVERSEMOS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
