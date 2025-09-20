import React from 'react';
import { TIMELINE_DATA, SOCIAL_LINKS } from '../../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/Icons';

/** About section: intro, socials, and timeline. */
const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Space_Grotesk']">About Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6049EA] to-transparent mx-auto mb-12"></div>
                
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    
                    <div className="lg:col-span-3 space-y-6 text-white/80 text-lg leading-relaxed">
                        {/* <p>
                        I'm a Full-Stack Developer dedicated to building effective and reliable software. My professional foundation was built on backend development with technologies like PHP and Laravel, culminating in a significant achievement during my internship: designing and implementing the Policy Information and Analytical System (PIAS) for Southern Leyte State University. This project streamlined institutional reporting and provided administrators with the tools for data-backed decision-making.
                        </p>
                        <p>
                        I specialize in creating comprehensive applications from the ground up, handling everything from the user-facing design to the underlying systems that make them work. I thrive in collaborative environments and am committed to writing clean, maintainable code that solves real-world problems. I am actively building new projects to showcase my full-stack capabilities and am eager to contribute to a team focused on creating impactful and user-centric products.
                        </p> */}
                        <p>
                        I'm a Full-Stack Developer with hands-on experience in building data-driven systems from start to finish. My journey culminated in my key achievement: designing and developing the Policy Information and Analytical System (PIAS) during my internship at Southern Leyte State University (SLSU). For this project, I handled the entire system, from building the back-end logic and database to creating the functional front-end interface.
                        </p>
                        <p>
                        I specialize in creating practical applications that solve real-world problems. I thrive in collaborative environments and am passionate about applying my skills to build clean, impactful software. I am actively building new projects to expand my portfolio and demonstrate my full-stack capabilities with other modern technologies.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                            <a href={SOCIAL_LINKS.github} target="_blank" className="text-white/70 hover:text-[#6049EA] transition-colors duration-300"><GithubIcon /></a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-white/70 hover:text-[#6049EA] transition-colors duration-300"><LinkedinIcon /></a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <h3 className="text-2xl font-bold text-center lg:text-left font-['Space_Grotesk']">My Journey</h3>
                        <div className="relative border-l-2 border-[#6049EA]/30 ml-4">
                            {TIMELINE_DATA.map((event, index) => (
                                <div key={index} className="mb-8 ml-8 relative">
                                    <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#6049EA] border-2 border-black"></div>
                                    <p className="text-sm font-semibold text-[#6049EA]">{event.year}</p>
                                    <h4 className="font-bold text-lg">{event.title}</h4>
                                    <p className="text-white/70 text-sm">{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;