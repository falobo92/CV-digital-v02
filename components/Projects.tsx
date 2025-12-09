import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="py-24 lg:py-32 border-b-6 border-ink bg-cream">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 uppercase tracking-tight">PROYECTOS CLAVE</h2>
                    <p className="font-mono text-gray-600 text-lg max-w-[800px]">
                        Casos donde apliqué gestión documental, automatización y metodologías Lean para resolver desafíos reales en proyectos de construcción e infraestructura.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {PROJECTS.map((project) => (
                        <article 
                            key={project.id} 
                            className="bg-white border-4 border-ink shadow-brutal flex flex-col h-full transition-all duration-150 hover:-translate-y-2 hover:shadow-brutal-xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-ink text-cream p-6 flex justify-between items-center border-b-4 border-ink">
                                <span className="font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                                    <i className="fa-solid fa-folder-open"></i>
                                    {project.category}
                                </span>
                                <span className="text-xs border-2 border-cream px-3 py-1 font-mono">{project.year}</span>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-display leading-none mb-2 uppercase">{project.title}</h3>
                                <div className="text-eng-blue font-bold text-lg mb-8">{project.subtitle}</div>

                                {/* Challenge */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-crosshairs text-xl text-eng-blue"></i>
                                        <p className="font-bold text-sm uppercase tracking-wide border-b-4 border-accent-yellow pb-1">EL DESAFÍO</p>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-700 font-mono">
                                        {project.challenge}
                                    </p>
                                </div>
                                
                                {/* Results */}
                                <div className="mb-8 flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-trophy text-xl text-safety-orange"></i>
                                        <p className="font-bold text-sm uppercase tracking-wide border-b-4 border-term-green pb-1">RESULTADOS</p>
                                    </div>
                                    <ul className="space-y-3">
                                        {project.results.map((res, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                <i className="fa-solid fa-check text-term-green mt-1"></i>
                                                <span className="font-mono">{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="pt-6 border-t-4 border-gray-100 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
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
                        </article>
                    ))}
                </div>

                {/* CTA */}
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
