import React, { useState } from 'react';
import type { Skill } from '../../types';
import { SKILLS_DATA } from '../../constants';

/** Skill card with circular progress. */
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-[#6049EA]/50 hover:-translate-y-2">
            <div className="relative w-28 h-28 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} stroke="#fff" strokeWidth="5" fill="none" opacity="0.1" />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="url(#skill-gradient)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-1000 ease-out"
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    />
                     <defs>
                        <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: "#6049EA", stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: "#8A2BE2", stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center p-3">
                    {skill.icon}
                </div>
            </div>
            <h3 className="font-['Fira_Code'] font-medium text-lg">{skill.name}</h3>
        </div>
    );
};

/** Skills: grouped with category filter. */
const Skills: React.FC = () => {
    const categories = Object.keys(SKILLS_DATA);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="skills" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">My Tech Stack</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>

                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 border-2 ${activeCategory === category ? 'bg-[#6049EA] border-[#6049EA] text-white' : 'bg-transparent border-white/20 text-white/70 hover:border-[#6049EA] hover:text-white'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {SKILLS_DATA[activeCategory].map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;