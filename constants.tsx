// ========================================
// CONSTANTES DEL CV
// Re-exporta datos desde el archivo centralizado
// ========================================

import { PROFILE, EXPERIENCES as PROFILE_EXPERIENCES, PROJECTS as PROFILE_PROJECTS, TIMELINE, TECH_CATEGORIES as PROFILE_TECH_CATEGORIES } from './data/profile';
import { ExperienceItem, ProjectItem, TechStackItem, EducationItem, ReferenceItem } from './types';

// Re-exportar experiencias con el tipo correcto
export const EXPERIENCES: ExperienceItem[] = PROFILE_EXPERIENCES;

// Generar TECH_STACK desde el perfil centralizado
export const TECH_STACK: TechStackItem[] = [
    // Desarrollo y automatización
    ...PROFILE.tools.development.map((tool, idx) => ({
        key: `dev-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'dev' as const
    })),
    // Ecosistema M365
    ...PROFILE.tools.microsoft365.map((tool, idx) => ({
        key: `m365-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'm365' as const
    })),
    // Gestión y construcción
    ...PROFILE.tools.construction.map((tool, idx) => ({
        key: `construction-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'construction' as const
    })),
    // Metodologías
    ...PROFILE.tools.methodologies.map((tool, idx) => ({
        key: `data-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'data' as const
    })),
    // Tecnologías emergentes
    ...PROFILE.tools.emerging.map((tool, idx) => ({
        key: `emerging-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'emerging' as const
    }))
];

// Re-exportar proyectos
export const PROJECTS: ProjectItem[] = PROFILE_PROJECTS;

// Educación desde el perfil
export const EDUCATION: EducationItem[] = [
    {
        id: 'e1',
        institution: PROFILE.education.institution,
        degree: PROFILE.education.degree,
        period: `2010 — ${PROFILE.education.year}`,
        distinction: PROFILE.education.distinction,
        details: PROFILE.education.specializations
    },
    ...PROFILE.courses.map((course, idx) => ({
        id: `e${idx + 2}`,
        institution: course.institution,
        degree: course.name,
        period: String(course.year),
        details: []
    }))
];

// Referencias desde el perfil
export const REFERENCES: ReferenceItem[] = PROFILE.references.map((ref, idx) => ({
    id: `r${idx + 1}`,
    name: ref.name,
    role: ref.role,
    company: ref.company,
    quote: ref.quote
}));

// Competencias desde el perfil
export const COMPETENCIES: string[] = PROFILE.competencies;

// Categorías de tecnología actualizadas
export const TECH_CATEGORIES = [
    { id: 'dev', title: 'DESARROLLO Y AUTOMATIZACIÓN', color: 'digital-cyan', icon: 'fa-solid fa-code' },
    { id: 'm365', title: 'ECOSISTEMA MICROSOFT 365', color: 'eng-blue', icon: 'fa-brands fa-microsoft' },
    { id: 'construction', title: 'GESTIÓN Y CONSTRUCCIÓN', color: 'safety-orange', icon: 'fa-solid fa-helmet-safety' },
    { id: 'data', title: 'METODOLOGÍAS', color: 'accent-yellow', icon: 'fa-solid fa-sitemap' },
    { id: 'emerging', title: 'TECNOLOGÍAS EMERGENTES', color: 'term-green', icon: 'fa-solid fa-rocket' }
];

// Timeline exportado
export { TIMELINE };

// Perfil exportado para uso directo
export { PROFILE };
