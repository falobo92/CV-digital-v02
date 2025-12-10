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

                        <div className="p-8 md:p-12 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Left Col: Image (Visual Dominance) */}
                            <div className="lg:col-span-5 flex flex-col h-full">
                                <div className="relative w-full h-full min-h-[300px] border-4 border-ink overflow-hidden group/image shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                                    {/* Paper Texture Overlay */}
                                    <div className="absolute inset-0 bg-[#f4f1ea] opacity-20 pointer-events-none z-10 mix-blend-multiply"></div>

                                    {/* The Image */}
                                    {currentProject.image && (
                                        <img
                                            src={currentProject.image}
                                            alt={currentProject.title}
                                            className="w-full h-full object-cover filter grayscale-[50%] contrast-110 brightness-100 transition-all duration-500 group-hover/image:grayscale-0 group-hover/image:scale-105"
                                        />
                                    )}

                                    {/* Technical Marker Overlay */}
                                    <div className="absolute bottom-4 left-4 z-20 bg-white border-2 border-ink px-2 py-1 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        IMG_REF: {currentProject.id.toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Info & Details */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <h3 className="text-4xl md:text-5xl font-display leading-none mb-4 uppercase">{currentProject.title}</h3>
                                    <div className="text-eng-blue font-bold text-xl mb-8 flex items-center gap-2">
                                        <span className="w-12 h-1 bg-eng-blue inline-block"></span>
                                        {currentProject.subtitle}
                                    </div>

                                    {/* Challenge */}
                                    <div className="mb-8 bg-white border-l-4 border-accent-yellow pl-6 py-2">
                                        <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-2">EL DESAFÍO</p>
                                        <p className="text-base leading-relaxed text-gray-800 font-mono">
                                            {currentProject.challenge}
                                        </p>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-8">
                                        <p className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-4 border-b-2 border-gray-200 inline-block">RESULTADOS CLAVE</p>
                                        <ul className="space-y-3">
                                            {currentProject.results.map((res, i) => (
                                                <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                                                    <i className="fa-solid fa-square-check text-term-green mt-1 text-lg"></i>
                                                    <span className="font-mono leading-tight">{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                                        {currentProject.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 uppercase font-mono border border-gray-300"
                                            >
                                                #{tag}
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
