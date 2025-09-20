import React from 'react';
import type { Project, Service, Skill, TimelineEvent } from './types';
import { 
    JavaScriptIcon, TypeScriptIcon, PHPIcon, PythonIcon, RLangIcon, HTMLIcon, CSSIcon,
    ReactIcon, LaravelIcon, TailwindIcon, BootstrapIcon,
    MySQLIcon, PostgreSQLIcon,
    GitIcon, GithubSkillIcon, ViteIcon
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
        { name: 'HTML', level: 100, icon: React.createElement(HTMLIcon) },
        { name: 'CSS', level: 100, icon: React.createElement(CSSIcon) },
    ],
    "Frameworks": [
        { name: 'React.js', level: 100, icon: React.createElement(ReactIcon) },
        { name: 'Laravel', level: 100, icon: React.createElement(LaravelIcon) },
        { name: 'Vite', level: 100, icon: React.createElement(ViteIcon) }, // Added Vite here
        { name: 'Tailwind CSS', level: 100, icon: React.createElement(TailwindIcon) },
        { name: 'Bootstrap', level: 100, icon: React.createElement(BootstrapIcon) },
    ],
    "Databases": [
        { name: 'MySQL', level: 100, icon: React.createElement(MySQLIcon) },
        { name: 'PostgreSQL', level: 100, icon: React.createElement(PostgreSQLIcon) },
        // { name: 'Data Warehousing', level: 100, icon: React.createElement(DataWarehouseIcon) },
    ],
    "Tools & Version Control": [
        { name: 'Git', level: 100, icon: React.createElement(GitIcon) },
        { name: 'GitHub', level: 100, icon: React.createElement(GithubSkillIcon) },
    ],
};

/** Projects data. */
export const PROJECTS_DATA: Project[] = [
    {
        title: 'Policy Information and Analytical System',
        description: 'Data visualization and reporting system built with R to automate institutional reports and improve decision-making.',
        fullDescription: 'The Policy Information and Analytical System (PIAS) is an institutional data reporting and visualization platform developed with R. It automates the generation of policy-related reports, provides interactive charts and dashboards, and streamlines decision-making for administrators. PIAS significantly reduced manual reporting time and improved the accessibility of institutional insights.',
        image: 'images/pias-project.png',
        tags: ['R', 'R Shiy', 'MariaDB', 'Plotly'],
        liveUrl: 'https://richard-beniga.shinyapps.io/PIAS-Demo/',
        githubUrl: SOCIAL_LINKS.github,
        category: 'Full Stack',
    },
    {
        title: 'Aros Pet - AI Robot Partner',
        description: 'An interactive AI-powered virtual pet with expressive personality, games, and playful interactions.',
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
        description: 'A simple, responsive website for students or freelancers to showcase projects, resumes, or portfolios. Clean design with easy navigation.',
        details: 'Delivery: 3–5 days · Up to 3 pages · Mobile-ready · Free basic hosting setup guide',
        price: 'Starts at PHP 1,000'
    },
    {
        title: 'Thesis / School Project Assistance',
        description: 'Development support for capstone, thesis, or major projects. Can cover web apps, dashboards, or data-driven systems depending on requirements.',
        details: 'Delivery: 1–3 weeks depending on scope · Includes documentation help · One round of revisions',
        price: 'PHP 3,000+'
    },
    {
        title: 'Mini Web App',
        description: 'Lightweight web application with login, database, and basic CRUD features. Perfect for learning projects, prototypes, or small organizations.',
        details: 'Delivery: 1–2 weeks · Built with modern frameworks · Includes 1-week support',
        price: 'PHP 7,000+'
    },
    // {
    //     title: 'Tutoring & Guidance',
    //     description: 'One-on-one sessions to guide students through coding concepts, debugging help, or project walkthroughs.',
    //     details: 'Flexible schedule · Online/remote support · Beginner-friendly',
    //     price: 'PHP 300/hr'
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

  