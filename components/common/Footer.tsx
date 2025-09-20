import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { SOCIAL_LINKS } from '../../constants';
/** Footer with social links and copyright. */
const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black/50 border-t border-white/10 py-8">
            <div className="container mx-auto px-6 text-center text-white/50">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href={SOCIAL_LINKS.github} target="_blank" className="text-white/70 hover:text-[#6049EA] transition-colors duration-300"><GithubIcon /></a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-white/70 hover:text-[#6049EA] transition-colors duration-300"><LinkedinIcon /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Richard Beniga. Crafted with code & curiosity.</p>
            </div>
        </footer>
    );
};

export default Footer;