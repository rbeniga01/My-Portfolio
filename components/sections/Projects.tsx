
import React, { useState, useEffect } from 'react';
import type { Project } from '../../types';
import { PROJECTS_DATA } from '../../constants';
import { GithubIcon, LinkIcon } from '../common/Icons';

/** Expanded project view shown inline when selected, with a smooth collapse/expand animation. */
const ExpandedProjectDetail: React.FC<{ project: Project; isClosing: boolean }> = ({ project, isClosing }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // On mount, wait for the next frame to apply the 'show' class to trigger the transition.
        const timer = requestAnimationFrame(() => setIsMounted(true));
        return () => cancelAnimationFrame(timer);
    }, []);

    const show = isMounted && !isClosing;
    
    return (
        <div 
            className={`
                col-span-1 md:col-span-2 lg:col-span-3 w-full 
                transition-[max-height] duration-500 ease-in-out overflow-hidden
                ${show ? 'max-h-[1000px]' : 'max-h-0'}
            `}
        >
            <div 
                className={`
                    transition-[opacity,transform] duration-300 ease-out
                    ${show ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-0'}
                `}
            >
                <div className="bg-black/50 border-2 border-[#6049EA]/50 rounded-2xl w-full flex flex-col lg:flex-row overflow-hidden shadow-2xl shadow-[#6049EA]/20 mt-4">
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col">
                        <div className="overflow-y-auto custom-scrollbar pr-4 -mr-4 max-h-[60vh]">
                            <span className="px-3 py-1 text-sm bg-[#6049EA]/30 text-[#6049EA] rounded-full font-semibold">{project.category}</span>
                            <h2 className="text-3xl md:text-4xl font-bold my-4 font-['Space_Grotesk']">{project.title}</h2>
                            <p className="text-white/80 leading-relaxed mb-6">
                                {project.fullDescription || project.description}
                            </p>
                            <h3 className="text-xl font-bold mb-3 font-['Space_Grotesk']">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 text-sm bg-white/10 text-white/90 rounded-md font-['Fira_Code']">{tag}</span>
                                ))}
                            </div>
                        </div>
                         <div className="flex flex-wrap items-center gap-4 mt-auto pt-6">
                             {project.liveUrl && (
                                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6049EA] to-purple-500 text-white font-semibold transition-transform duration-300 hover:scale-105">
                                    <LinkIcon /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105">
                                    <GithubIcon /> View Code
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[400px] bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-transparent lg:to-transparent"></div>
                    </div>
                </div>
            </div>
             <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #6049EA;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #7c68f5;
                }
            `}</style>
        </div>
    );
};

/** Project card: hover details, expands on click. */
const ProjectCard: React.FC<{ project: Project; onSelect: () => void; isSelected: boolean }> = ({ project, onSelect, isSelected }) => {
    return (
        <div 
            onClick={onSelect}
            className={`group relative overflow-hidden rounded-xl bg-white/5 border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6049EA]/20 hover:-translate-y-0 cursor-pointer ${isSelected ? 'border-[#6049EA]' : 'border-white/10'}`}>
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-2">{project.title}</h3>
                <p className="text-sm text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-[#6049EA]/20 text-[#6049EA] rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#6049EA] transition-colors"><LinkIcon /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#6049EA] transition-colors"><GithubIcon /></a>}
                </div>
            </div>
        </div>
    );
};

/** Projects: filterable grid with inline expansion. */
const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Frontend'>('All');
    const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | null>(null);
    const [closingProjectTitle, setClosingProjectTitle] = useState<string | null>(null);

    const handleSelectProject = (title: string) => {
        if (closingProjectTitle) return; // Prevent actions during animation

        if (selectedProjectTitle === title) {
            setClosingProjectTitle(title);
            setTimeout(() => {
                setSelectedProjectTitle(null);
                setClosingProjectTitle(null);
            }, 500);
        } else if (selectedProjectTitle) {
            setClosingProjectTitle(selectedProjectTitle);
            setTimeout(() => {
                setSelectedProjectTitle(title);
                setClosingProjectTitle(null);
            }, 500);
        } else {
            setSelectedProjectTitle(title);
        }
    };
    
    const handleFilterChange = (category: 'All' | 'Full Stack' | 'Frontend') => {
        if (closingProjectTitle) return;

        if (selectedProjectTitle) {
            setClosingProjectTitle(selectedProjectTitle);
            setTimeout(() => {
                setFilter(category);
                setSelectedProjectTitle(null);
                setClosingProjectTitle(null);
            }, 500);
        } else {
            setFilter(category);
        }
    };

    const filteredProjects = PROJECTS_DATA.filter(p => filter === 'All' || p.category === filter);

    useEffect(() => {
        if (selectedProjectTitle && !filteredProjects.some(p => p.title === selectedProjectTitle)) {
            setClosingProjectTitle(selectedProjectTitle);
            setTimeout(() => {
                setSelectedProjectTitle(null);
                setClosingProjectTitle(null);
            }, 500);
        }
    }, [filter, selectedProjectTitle, filteredProjects]);


    return (
        <section id="projects" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">Projects Showcase</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>

                <div className="flex justify-center gap-4 mb-12">
                    {(['All', 'Full Stack', 'Frontend'] as const).map(category => (
                        <button 
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 border-2 ${filter === category ? 'bg-[#6049EA] border-[#6049EA] text-white' : 'bg-transparent border-white/20 text-white/70 hover:border-[#6049EA] hover:text-white'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => {
                        const isSelected = selectedProjectTitle === project.title;
                        const isClosing = closingProjectTitle === project.title;

                        return (
                            <React.Fragment key={project.title}>
                                <ProjectCard 
                                    project={project}
                                    onSelect={() => handleSelectProject(project.title)}
                                    isSelected={isSelected && !isClosing}
                                />
                                {isSelected && (
                                    <ExpandedProjectDetail 
                                        project={project} 
                                        isClosing={isClosing} 
                                    />
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;