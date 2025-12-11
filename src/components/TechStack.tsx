import React, { useState, useCallback, useMemo } from 'react';
import { TECH_STACK, TECH_CATEGORIES } from '../constants';
import { TechStackItem } from '../types';
import SectionDivider from './ui/SectionDivider';

// ============================================
// ARSENAL DIGITAL - TERMINAL CONSOLE INTERFACE
// Visualización estilo consola/PowerShell
// ============================================

const TechStack: React.FC = () => {
    const [activeTech, setActiveTech] = useState<TechStackItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [commandHistory, setCommandHistory] = useState<string[]>([
        'PS C:\\arsenal> Get-DigitalTools -Category All',
        `Cargando ${TECH_STACK.length} módulos del sistema...`,
        ''
    ]);

    // Filtrar tecnologías
    const filteredTech = useMemo(() => 
        activeCategory === 'all'
            ? TECH_STACK
            : TECH_STACK.filter(t => t.category === activeCategory),
        [activeCategory]
    );

    // Colores de consola por categoría
    const consoleColors: Record<string, string> = {
        'dev': '#9CDCFE',      // Azul claro (variables en PS)
        'm365': '#569CD6',     // Azul (keywords en PS)
        'construction': '#CE9178', // Naranja (strings en PS)
        'data': '#DCDCAA',     // Amarillo (funciones en PS)
        'emerging': '#4EC9B0'  // Cyan (tipos en PS)
    };

    const getColor = useCallback((category: string) => 
        consoleColors[category] || '#D4D4D4',
        []
    );

    // Obtener información de categoría
    const getCategoryInfo = useCallback((categoryId: string) => {
        return TECH_CATEGORIES.find(c => c.id === categoryId) || 
            { title: 'OTROS', icon: 'fa-solid fa-circle', id: 'other' };
    }, []);

    // Manejar selección de herramienta
    const handleSelectTech = (tech: TechStackItem) => {
        if (activeTech?.key === tech.key) {
            setActiveTech(null);
            setCommandHistory(prev => [
                ...prev,
                `PS C:\\arsenal> Clear-Selection`,
                ''
            ]);
        } else {
            setActiveTech(tech);
            setCommandHistory(prev => [
                ...prev,
                `PS C:\\arsenal> Get-Module -Name "${tech.name}"`,
                ''
            ]);
        }
    };

    // Manejar cambio de categoría
    const handleCategoryChange = (catId: string) => {
        setActiveCategory(catId);
        setActiveTech(null);
        const catName = catId === 'all' ? 'All' : getCategoryInfo(catId).title;
        setCommandHistory(prev => [
            ...prev,
            `PS C:\\arsenal> Get-DigitalTools -Category "${catName}"`,
            `Filtrando módulos...`,
            ''
        ]);
    };

    return (
        <section id="stack" className="bg-[#0a0a0a] text-cream border-b-6 border-ink relative overflow-hidden pt-0 pb-20">
            <SectionDivider text="FULL STACK /// HERRAMIENTAS DIGITALES /// AUTOMATIZACIÓN" theme="accent" direction="left" />

            <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8 relative z-10 w-full mt-10 sm:mt-16">
                
                {/* Header compacto */}
                <div className="mb-6 sm:mb-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tighter text-white leading-[0.85] mb-2 sm:mb-3">
                        ARSENAL <span className="text-accent-yellow">DIGITAL</span>
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-gray-500">
                        <span className="text-[#4EC9B0]">{TECH_STACK.length}</span> módulos · 
                        <span className="text-[#DCDCAA]"> {TECH_CATEGORIES.length}</span> categorías
                    </p>
                </div>

                {/* Consola Principal */}
                <div className="bg-[#1E1E1E] border border-[#3C3C3C] rounded-sm overflow-hidden shadow-2xl">
                    
                    {/* Barra de título de ventana */}
                    <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-[#3C3C3C]">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <button className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"></button>
                                <button className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors"></button>
                                <button className="w-3 h-3 rounded-full bg-[#27CA40] hover:bg-[#27CA40]/80 transition-colors"></button>
                            </div>
                            <span className="font-mono text-xs text-gray-400 ml-2">
                                Windows PowerShell — arsenal-digital.ps1
                            </span>
                        </div>
                        <div className="font-mono text-[10px] text-gray-500">
                            v5.1.22621
                        </div>
                    </div>

                    {/* Tabs de categorías estilo terminal */}
                    <div className="bg-[#252526] border-b border-[#3C3C3C] px-2 py-1 flex items-center gap-1 overflow-x-auto">
                        <button
                            onClick={() => handleCategoryChange('all')}
                            className={`px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap ${
                                activeCategory === 'all'
                                    ? 'bg-[#1E1E1E] text-white border-t-2 border-[#007ACC]'
                                    : 'text-gray-400 hover:text-white hover:bg-[#2D2D2D]'
                            }`}
                        >
                            <i className="fa-solid fa-layer-group mr-1.5 text-[10px]"></i>
                            ALL [{TECH_STACK.length}]
                        </button>
                        {TECH_CATEGORIES.map(cat => {
                            const count = TECH_STACK.filter(t => t.category === cat.id).length;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap ${
                                        activeCategory === cat.id
                                            ? 'bg-[#1E1E1E] text-white border-t-2'
                                            : 'text-gray-400 hover:text-white hover:bg-[#2D2D2D]'
                                    }`}
                                    style={activeCategory === cat.id ? { borderColor: getColor(cat.id) } : {}}
                                >
                                    <i className={`${cat.icon} mr-1.5 text-[10px]`} style={{ color: getColor(cat.id) }}></i>
                                    {cat.title.split(' ')[0].toUpperCase()} [{count}]
                                </button>
                            );
                        })}
                    </div>

                    {/* Contenido de la consola */}
                    <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm min-h-[350px] sm:min-h-[400px] max-h-[500px] sm:max-h-[600px] overflow-y-auto">
                        
                        {/* Historial de comandos */}
                        <div className="mb-4 text-gray-500 text-xs">
                            {commandHistory.slice(-5).map((line, i) => (
                                <div key={i} className={line.startsWith('PS') ? 'text-[#DCDCAA]' : ''}>
                                    {line}
                                </div>
                            ))}
                        </div>

                        {/* Output: Lista de herramientas */}
                        <div className="mb-4">
                            <div className="text-gray-500 text-xs mb-3">
                                --- Módulos Disponibles ({filteredTech.length}) ---
                            </div>

                            <div className="space-y-0.5">
                                {filteredTech.map((tech, idx) => {
                                    const isActive = activeTech?.key === tech.key;
                                    const color = getColor(tech.category);
                                    const catInfo = getCategoryInfo(tech.category);
                                    
                                    return (
                                        <div key={tech.key}>
                                            {/* Línea principal del módulo */}
                                            <button
                                                onClick={() => handleSelectTech(tech)}
                                                className={`w-full text-left px-2 py-1.5 transition-colors flex items-center gap-3 group ${
                                                    isActive 
                                                        ? 'bg-[#264F78]' 
                                                        : 'hover:bg-[#2D2D2D]'
                                                }`}
                                            >
                                                {/* Número de línea */}
                                                <span className="text-[#858585] text-xs w-6 text-right shrink-0">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                
                                                {/* Indicador de estado */}
                                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-[#27CA40]' : 'bg-gray-600'}`}></span>
                                                
                                                {/* Icono */}
                                                <i className={`${tech.icon} w-5 text-center`} style={{ color }}></i>
                                                
                                                {/* Nombre */}
                                                <span className="text-white font-medium min-w-[100px] sm:min-w-[140px] text-xs sm:text-sm">
                                                    {tech.name}
                                                </span>
                                                
                                                {/* Categoría tag */}
                                                <span 
                                                    className="text-[10px] px-1.5 py-0.5 rounded-sm shrink-0"
                                                    style={{ backgroundColor: `${color}20`, color }}
                                                >
                                                    {catInfo.title.substring(0, 3)}
                                                </span>
                                                
                                                {/* Descripción */}
                                                <span className="text-gray-500 text-xs truncate flex-1 hidden sm:block">
                                                    {tech.description}
                                                </span>
                                                
                                                {/* Flecha expandir */}
                                                <span className={`text-gray-500 text-xs transition-transform ${isActive ? 'rotate-90' : ''}`}>
                                                    ▶
                                                </span>
                                            </button>
                                            
                                            {/* Panel de detalle expandido */}
                                            {isActive && (
                                                <div className="bg-[#1A1A1A] border-l-2 ml-8 py-3 px-4 my-1" style={{ borderColor: color }}>
                                                    {/* Comentario de código */}
                                                    <div className="text-[#6A9955] text-xs mb-2">
                                                        {'/**'}
                                                    </div>
                                                    <div className="text-[#6A9955] text-xs mb-2">
                                                        {' * @module '}<span className="text-[#9CDCFE]">{tech.name}</span>
                                                    </div>
                                                    <div className="text-[#6A9955] text-xs mb-2">
                                                        {' * @category '}<span className="text-[#CE9178]">{catInfo.title}</span>
                                                    </div>
                                                    <div className="text-[#6A9955] text-xs mb-2">
                                                        {' * @description '}<span className="text-[#D4D4D4]">{tech.description}</span>
                                                    </div>
                                                    <div className="text-[#6A9955] text-xs mb-3">
                                                        {' */'}
                                                    </div>
                                                    
                                                    {/* Caso de uso */}
                                                    <div className="text-[#C586C0] text-xs mb-1">
                                                        <span className="text-[#569CD6]">function</span> <span className="text-[#DCDCAA]">useCase</span><span className="text-[#D4D4D4]">() {'{'}</span>
                                                    </div>
                                                    <div className="text-[#D4D4D4] text-xs pl-4 mb-1">
                                                        <span className="text-[#569CD6]">return</span> <span className="text-[#CE9178]">"{tech.reason || 'Herramienta esencial para proyectos de construcción.'}"</span>;
                                                    </div>
                                                    <div className="text-[#D4D4D4] text-xs mb-3">
                                                        {'}'}
                                                    </div>
                                                    
                                                    {/* Stats como objeto */}
                                                    <div className="text-[#569CD6] text-xs">
                                                        const <span className="text-[#9CDCFE]">stats</span> = {'{'}
                                                    </div>
                                                    <div className="text-xs pl-4">
                                                        <span className="text-[#9CDCFE]">experience</span>: <span className="text-[#B5CEA8]">
                                                            {tech.category === 'dev' ? '3' : 
                                                             tech.category === 'm365' ? '4' : 
                                                             tech.category === 'construction' ? '5' : '2'}
                                                        </span>,
                                                    </div>
                                                    <div className="text-xs pl-4">
                                                        <span className="text-[#9CDCFE]">level</span>: <span className="text-[#CE9178]">"PRO"</span>,
                                                    </div>
                                                    <div className="text-xs pl-4">
                                                        <span className="text-[#9CDCFE]">status</span>: <span className="text-[#569CD6]">true</span>
                                                    </div>
                                                    <div className="text-[#D4D4D4] text-xs">
                                                        {'}'};
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Prompt actual */}
                        <div className="flex items-center gap-2 mt-6">
                            <span className="text-[#DCDCAA]">PS C:\arsenal&gt;</span>
                            <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
                        </div>
                    </div>

                    {/* Barra de estado inferior */}
                    <div className="bg-[#007ACC] px-4 py-1 flex items-center justify-between text-white text-xs font-mono">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5">
                                <i className="fa-solid fa-code-branch"></i>
                                main
                            </span>
                            <span className="flex items-center gap-1.5">
                                <i className="fa-solid fa-sync-alt"></i>
                                Synced
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>{filteredTech.length} módulos</span>
                            <span>UTF-8</span>
                            <span>PowerShell</span>
                        </div>
                    </div>
                </div>

                {/* Resumen por categoría (mini cards) */}
                <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {TECH_CATEGORIES.map(cat => {
                        const count = TECH_STACK.filter(t => t.category === cat.id).length;
                        const color = getColor(cat.id);
                        const isActive = activeCategory === cat.id;
                        
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`p-2 sm:p-3 border transition-all text-center ${
                                    isActive 
                                        ? 'bg-[#1E1E1E] border-[#3C3C3C]' 
                                        : 'bg-transparent border-gray-800/30 hover:border-gray-700'
                                }`}
                                style={isActive ? { borderColor: color } : {}}
                            >
                                <div 
                                    className="font-display text-xl sm:text-2xl md:text-3xl mb-1"
                                    style={{ color: isActive ? color : '#666' }}
                                >
                                    {count}
                                </div>
                                <div className="font-mono text-[8px] sm:text-[9px] text-gray-500 uppercase truncate">
                                    {cat.title.split(' ')[0]}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
