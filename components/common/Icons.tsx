// Import React to define components.
import React from 'react';

// --- General UI Icons ---

/**
 * Hamburger menu icon for mobile navigation toggle.
 */
export const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

/**
 * "X" icon for closing menus or modals.
 */
export const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- Social & Link Icons ---

/**
 * GitHub logo icon.
 */
export const GithubIcon: React.FC = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

/**
 * LinkedIn logo icon.
 */
export const LinkedinIcon: React.FC = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

/**
 * Twitter (X) logo icon.
 */
export const TwitterIcon: React.FC = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.22 3.766 4.66-1.161.315-2.457.211-3.596-.34 1.24 2.53 4.849 3.46 7.218 2.65-2.16 2.02-5.11 2.92-8.38 2.37 2.36 1.52 5.18 2.42 8.18 2.42 9.81 0 15.18-8.12 15.18-15.18 0-.23 0-.46-.015-.69.95-.69 1.78-1.56 2.44-2.54z"/></svg>
);

/**
 * External link icon (box with an arrow).
 */
export const LinkIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);


/**
 * Chat bubble icon for the AI assistant.
 */
export const ChatIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);


/**
 * Send icon for chat input.
 */
export const SendIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


// --- Skill Icons ---
// Each component is a simple SVG for a specific technology.
export const TypeScriptIcon: React.FC = () => (
<img src="/logos/typescript.png" alt="TypeScript" className="w-12 h-12" />
);
export const JavaScriptIcon: React.FC = () => (
<img src="/logos/javascript.png" alt="JavaScript" className="w-12 h-12" />
);
export const PHPIcon: React.FC = () => (
<img src="/logos/php.png" alt="PHP" className="w-12 h-12" />
);
export const PythonIcon: React.FC = () => (
<img src="/logos/python.png" alt="PHP" className="w-12 h-12" />
);
export const RLangIcon: React.FC = () => (
<img src="/logos/r.png" alt="R" className="w-12 h-12" />
);
export const HTMLIcon: React.FC = () => (
<img src="/logos/html.png" alt="HTML" className="w-12 h-12" />
);
export const CSSIcon: React.FC = () => (
<img src="/logos/css.png" alt="CSS" className="w-12 h-12" />
);
export const ReactIcon: React.FC = () => (
<img src="/logos/react.png" alt="React" className="w-12 h-12" />
);
export const LaravelIcon: React.FC = () => (
<img src="/logos/laravel.png" alt="Laravel" className="w-12 h-12" />
);
export const ViteIcon: React.FC = () => (
<img src="/logos/vite.svg" alt="Vite" className="w-12 h-12" />
);
export const TailwindIcon: React.FC = () => (
<img src="/logos/tailwind.svg" alt="Tailwind CSS" className="w-12 h-12" />
);
export const BootstrapIcon: React.FC = () => (
<img src="/logos/bootstrap.png" alt="Bootstrap" className="w-12 h-12" />
);
export const MySQLIcon: React.FC = () => (
<img src="/logos/mysql.png" alt="MySQL" className="w-12 h-12" />
);
export const PostgreSQLIcon: React.FC = () => (
<img src="/logos/postgresql.png" alt="PostgreSQL" className="w-12 h-12" />
);
export const DataWarehouseIcon: React.FC = () => (
<img src="/logos/datawarehouse.png" alt="Data Warehousing" className="w-12 h-12" />
);
export const GitIcon: React.FC = () => (
<img src="/logos/git.png" alt="Git" className="w-12 h-12" />
);
export const GithubSkillIcon: React.FC = () => (
<img src="/logos/github.png" alt="GitHub" className="w-12 h-12" />
);
export const ExpressIcon: React.FC = () => (
<img src="/logos/expressjs.png" alt="ExpressJs" className="w-12 h-12" />
);
export const ShinyIcon: React.FC = () => (
    <img src="/logos/shiny.svg" alt="Shiny" className="w-12 h-12" />
);
export const SQLiteIcon: React.FC = () => (
    <img src="/logos/sqlite.svg" alt="SQLite" className="w-12 h-12" />
);
