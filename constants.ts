import React from 'react';
import type { Project, Service, Skill, TimelineEvent } from './types';
import { 
    JavaScriptIcon, TypeScriptIcon, PHPIcon, PythonIcon, RLangIcon, HTMLIcon, CSSIcon,
    ReactIcon, LaravelIcon, TailwindIcon, BootstrapIcon,
    MySQLIcon, PostgreSQLIcon,
    GitIcon, GithubSkillIcon, ViteIcon, ExpressIcon, ShinyIcon, SQLiteIcon
} from './components/common/Icons';


// constants.tsx
export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/richard-beniga/",
    github: "https://github.com/rbeniga01",
    email: "mailto:youremail@example.com",
    portfolio: "https://yourportfolio.com",
  };

/** Header nav links. */
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

/** Skills grouped by category. */
export const SKILLS_DATA: { [key: string]: Skill[] } = {
    "Programming Languages": [
        { name: 'JavaScript', level: 100, icon: React.createElement(JavaScriptIcon) },
        { name: 'TypeScript', level: 100, icon: React.createElement(TypeScriptIcon) },
        { name: 'PHP', level: 100, icon: React.createElement(PHPIcon) },
        { name: 'Python', level: 100, icon: React.createElement(PythonIcon) },
        { name: 'R', level: 100, icon: React.createElement(RLangIcon) },
    ],
    "Front-End Development": [
        { name: 'React.js', level: 100, icon: React.createElement(ReactIcon) },
        { name: 'Tailwind CSS', level: 100, icon: React.createElement(TailwindIcon) },
        { name: 'HTML', level: 100, icon: React.createElement(HTMLIcon) },
        { name: 'CSS', level: 100, icon: React.createElement(CSSIcon) },
    ],
    "Back-End / Frameworks": [
        { name: 'Laravel', level: 100, icon: React.createElement(LaravelIcon) },
        { name: 'Express.js', level: 100, icon: React.createElement(ExpressIcon) },
        { name: 'Shiny', level: 100, icon: React.createElement(ShinyIcon) },
    ],
    "Databases": [
        { name: 'MySQL', level: 100, icon: React.createElement(MySQLIcon) },
        { name: 'PostgreSQL', level: 100, icon: React.createElement(PostgreSQLIcon) },
        { name: 'SQLite', level: 100, icon: React.createElement(SQLiteIcon) },
    ],
    "Tools & Version Control": [
        { name: 'Git', level: 100, icon: React.createElement(GitIcon) },
        { name: 'GitHub', level: 100, icon: React.createElement(GithubSkillIcon) },
        { name: 'Vite', level: 100, icon: React.createElement(ViteIcon) },
    ],
};

/** Projects data. */
export const PROJECTS_DATA: Project[] = [
    {
        title: 'Policy Information and Analytical System',
        description: 'Automated institutional data reporting and visualization system built with R.',
        fullDescription: 'The Policy Information and Analytical System (PIAS) is an institutional data reporting and visualization platform developed with R. It automates the generation of policy-related reports, provides interactive charts and dashboards, and streamlines decision-making for administrators. PIAS significantly reduced manual reporting time and improved the accessibility of institutional insights.',
        image: 'images/pias-project.png',
        tags: ['R', 'R Shiy', 'MariaDB', 'Plotly'],
        liveUrl: 'https://richard-beniga.shinyapps.io/PIAS-Demo/',
        githubUrl: "",
        category: 'Full Stack',
    },
    {
        title: 'Aros Pet - AI Robot Partner',
        description: 'A playful, interactive, AI-powered virtual pet.',
        fullDescription: 'Aros PET is a virtual pet powered by Google\'s Gemini AI. More than a chatbot, Aros is a playful digital companion with emotions, interactive commands, and fun activities. Users can chat, play games, customize its style, and even manage its needs like energy and snacks. Built as a creative coding project, Aros PET combines front-end animation with modern AI to deliver a delightful companion experience.',
        image: 'images/aros-pet.png',
        tags: ['React', 'TypeScript', 'TailwindCSS', 'Gemini AI'],
        liveUrl: 'https://aros-pet.vercel.app/', 
        githubUrl: 'https://github.com/rbeniga01/aros-pet', 
        category: 'AI / Interactive App',
    }      

];

/** Services data. */
export const SERVICES_DATA: Service[] = [
    {
        title: 'Personal / Portfolio Website',
        description: 'A clean and modern website that tells your story. Perfect for showcasing who you are, your work, or your services. Simple, professional, and works beautifully on any device.',
        details: 'Quick turnaround · Up to 3 pages · Works on phone and computer · Guidance for putting it online',
        price: ''
    },
    {
        title: 'Custom Website or Project Assistance',
        description: 'Got a school project, thesis, or a unique idea for a website or app? I can help turn it into something real — whether it’s a simple site, a system with logins and data, or a special project made just for your needs.',
        details: 'Timeline depends on project scope · Help with documentation · One round of revisions · Includes support after delivery',
        price: ''
    },
    {
        title: 'Full Website Build',
        description: 'A complete website solution built from the ground up. Ideal for businesses, organizations, or anyone who needs a professional online presence with multiple pages, features, and a design tailored to your goals.',
        details: 'Project timeline adjusted to your needs · Mobile-friendly design · Built with modern tools · After-delivery support included',
        price: ''
    },
    // {
    //     title: 'Tutoring & Guidance',
    //     description: 'One-on-one guidance for students or beginners. I can explain coding concepts, help debug errors, or walk you through your project step by step.',
    //     details: 'Flexible schedule · Online sessions · Beginner-friendly',
    //     price: ''
    // }
];

/** Timeline data for About page. */
export const TIMELINE_DATA: TimelineEvent[] = [
    {
        year: '2021-2023',
        title: 'Building the Foundation',
        description: 'Began with front-end basics (HTML, CSS, JS), then explored backend languages like PHP and Java. Focused on developing a solid problem-solving mindset and understanding software architecture, which provided the skills to build robust applications.'
     },
     {
        year: '2024',
        title: 'First Real-World Project',
        description: 'Designed and built PIAS using R, applying my full-stack knowledge to automate institutional data reporting and visualization.'
     },
     {
        year: '2025',
        title: 'Professional Internship',
        description: 'Enhanced PIAS and contributed to other institutional systems, applying my skills in a real-world environment and supporting IT operations.'
     }
];

  