// ========================================
// CONSTANTES DEL CV
// Re-exporta datos desde el archivo centralizado
// ========================================

import { PROFILE, EXPERIENCES as PROFILE_EXPERIENCES, PROJECTS as PROFILE_PROJECTS, TIMELINE } from './data/profile';
import { ExperienceItem, ProjectItem, TechStackItem, EducationItem, ReferenceItem } from './types';

// Re-exportar experiencias con el tipo correcto
export const EXPERIENCES: ExperienceItem[] = PROFILE_EXPERIENCES;

// Categorías de tecnología
export const TECH_CATEGORIES = [
    { id: 'dev', title: 'DESARROLLO', color: 'digital-cyan', icon: 'fa-solid fa-code' },
    { id: 'm365', title: 'MICROSOFT 365', color: 'eng-blue', icon: 'fa-brands fa-microsoft' },
    { id: 'construction', title: 'CONSTRUCCIÓN', color: 'safety-orange', icon: 'fa-solid fa-helmet-safety' },
    { id: 'data', title: 'METODOLOGÍAS', color: 'accent-yellow', icon: 'fa-solid fa-sitemap' },
    { id: 'emerging', title: 'EMERGENTES', color: 'term-green', icon: 'fa-solid fa-rocket' }
];

// Generar TECH_STACK desde el perfil centralizado
export const TECH_STACK: TechStackItem[] = [
    ...PROFILE.tools.development.map((tool, idx) => ({
        key: `dev-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'dev' as const
    })),
    ...PROFILE.tools.microsoft365.map((tool, idx) => ({
        key: `m365-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'm365' as const
    })),
    ...PROFILE.tools.construction.map((tool, idx) => ({
        key: `construction-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'construction' as const
    })),
    ...PROFILE.tools.methodologies.map((tool, idx) => ({
        key: `data-${idx}`,
        name: tool.name,
        description: tool.description,
        reason: tool.reason,
        icon: tool.icon,
        category: 'data' as const
    })),
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

// Re-exportar Timeline y Perfil
export { TIMELINE, PROFILE };
