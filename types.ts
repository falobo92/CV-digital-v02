export type ExperienceCategory = 'all' | 'digital' | 'construction';

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    project?: string;
    period: string;
    location: string;
    category: 'digital' | 'construction';
    highlight?: string;
    details: string[];
    tags: string[];
}

export interface TechStackItem {
    key: string;
    name: string;
    description: string;
    icon: string;
    reason?: string;
    category: 'dev' | 'm365' | 'construction' | 'data' | 'emerging';
}

export interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    year: string;
    category: string;
    image?: string;
    challenge: string;
    results: string[];
    tags: string[];
}

export interface EducationItem {
    id: string;
    institution: string;
    degree: string;
    period: string;
    distinction?: string;
    details?: string[];
}

export interface ReferenceItem {
    id: string;
    name: string;
    role: string;
    company: string;
    quote?: string;
}

export interface NavLink {
    label: string;
    href: string;
    primary?: boolean;
}
