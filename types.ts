
 import type { ReactNode } from 'react';
 
/** Skill item for the skills grid. */
export interface Skill {
    name: string;
    level: number;  // 0–100
    icon: ReactNode;
}

/** Project card data. */
export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: 'AI / Interactive App' | 'Full Stack';
}

/** Service offering for Services section. */
export interface Service {
    title: string;
    description: string;
    details: string;
    price: string;
}

/** Timeline event for About page. */
export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}