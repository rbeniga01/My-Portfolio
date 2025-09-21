import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import { MenuIcon, XIcon } from './Icons';

/**
 * The website header, featuring navigation, a responsive mobile menu,
 * and a sticky effect on scroll.
 */
const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMenuRendered, setIsMenuRendered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            setIsMenuRendered(true);
        } else {
            const timer = setTimeout(() => {
                setIsMenuRendered(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [mobileMenuOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg shadow-[#6049EA]/10' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={handleLinkClick} className="text-2xl font-bold font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6049EA]">
                    Portfolio
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-white hover:text-[#6049EA] transition-colors duration-300 relative group">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6049EA] group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {isMenuRendered && (
                <div className={`md:hidden bg-black/80 backdrop-blur-md absolute top-full left-0 w-full ${
                    mobileMenuOpen 
                        ? 'animate-[slide-in-top_0.5s_cubic-bezier(0.250,0.460,0.450,0.940)_both]' 
                        : 'animate-[slide-out-top_0.5s_cubic-bezier(0.550,0.085,0.680,0.530)_both]'
                }`}>
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-lg text-white hover:text-[#6049EA] transition-colors duration-300">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;