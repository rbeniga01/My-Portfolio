import React from 'react';
 
/** Floating particle for the animated background. */
const Particle: React.FC<{ animation: string, className: string }> = ({ animation, className }) => (
    <div 
        className={`absolute rounded-full bg-gradient-to-br from-[#6049EA]/80 to-transparent ${className}`}
        style={{ animation: `${animation} infinite` }}
    />
);

/** Hero: headline, profile, and CTAs. */
const Hero: React.FC = () => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden p-6">
            <div className="absolute inset-0 z-0">
                <Particle animation="particle-float-1 20s" className="w-16 h-16 top-1/4 left-1/4" />
                <Particle animation="particle-float-2 25s" className="w-8 h-8 top-1/2 left-3/4" />
                <Particle animation="particle-float-3 18s" className="w-12 h-12 bottom-1/4 right-1/4" />
                <Particle animation="particle-float-1 30s" className="w-4 h-4 bottom-1/3 left-1/5" />
                <Particle animation="particle-float-2 22s" className="w-10 h-10 top-1/3 right-1/5" />
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
                
                <div className="relative group animate-[slide-in-bottom_0.8s_ease-out_0.2s_both]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6049EA] to-transparent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                        src="images/richard-beniga-profile.png"
                        alt="A professional headshot of Richard Beniga" 
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-black/50 p-1 bg-black transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                    />
                </div>
                
                <div className="text-center lg:text-left max-w-2xl animate-[slide-in-bottom_0.8s_ease-out_0.4s_both]">
                    <h1 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tighter mb-4">
                        Hi, I'm Richard Beniga,<br/> Full Stack Developer
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                    Building real-world solutions—where practical design meets efficient, reliable technology.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href="#projects" onClick={handleScrollClick} className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#6049EA] to-purple-500 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6049EA]/30">
                            Explore Projects
                        </a>
                        <a href="#contact" onClick={handleScrollClick} className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-[#6049EA] text-white font-semibold transition-all duration-300 hover:bg-[#6049EA]/20 hover:scale-105">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;