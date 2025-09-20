import React, { useState, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

/** Animate children on viewport entry (fade-in + slide-up). */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className || ''}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;