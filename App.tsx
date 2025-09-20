// Import React hooks 'useState' and 'useEffect' for state management and side effects.
import React, { useState, useEffect } from 'react';
// Import all the components that make up the different sections of the portfolio.
import Preloader from './components/common/Preloader';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import AnimatedSection from './components/common/AnimatedSection';
import Chatbot from './components/chatbot';

/**
 * The main App component.
 * This component acts as the root of the application, managing the overall layout and
 * controlling the initial loading state.
 * @returns {React.ReactElement} The rendered App component.
 */
const App: React.FC = () => {
    // 1. STATE MANAGEMENT
    // 'useState' is a React hook that lets you add state to functional components.
    // Here, we create a 'loading' state variable, initialized to 'true'.
    // 'setLoading' is the function we'll use to update this state.
    const [loading, setLoading] = useState(true);

    // 2. SIDE EFFECTS
    // 'useEffect' is a hook for running side effects in components (e.g., data fetching, timers, subscriptions).
    // This effect runs only once after the component mounts, thanks to the empty dependency array `[]`.
    useEffect(() => {
        // We set up a timer to simulate a loading period (e.g., for fetching initial data or warming up).
        const timer = setTimeout(() => {
            // After 2.5 seconds (2500 milliseconds), we update the 'loading' state to 'false'.
            setLoading(false);
        }, 2500); // The delay in milliseconds.

        // The return function from useEffect is a 'cleanup' function.
        // It runs when the component is unmounted to prevent memory leaks.
        // Here, we clear the timer if the component were to unmount before the timer finishes.
        return () => clearTimeout(timer);
    }, []); // The empty array `[]` means this effect runs only on mount and unmount.

    // 3. CONDITIONAL RENDERING
    // If the 'loading' state is true, we render the Preloader component.
    // This shows the loading animation to the user.
    if (loading) {
        return <Preloader />;
    }

    // 4. MAIN RENDER
    // Once 'loading' is false, we render the main portfolio content.
    return (
        <>
            <div className="bg-black min-h-screen text-white relative overflow-hidden">
                {/* This div creates the animated gradient background effect. */}
                <div 
                    className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black to-[#6049EA]/20"
                    style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradient-wave 15s ease infinite', // CSS animation defined in index.html
                    }}
                />
                
                {/* The Header component is fixed at the top of the page. */}
                <Header />
                {/* The main content of the page is wrapped in a 'main' tag. */}
                <main className="relative z-10">
                    {/* Each section of the portfolio is rendered in order. */}
                    <Hero />
                    <AnimatedSection>
                        <About />
                    </AnimatedSection>
                    <AnimatedSection>
                        <Skills />
                    </AnimatedSection>
                    <AnimatedSection>
                        <Projects />
                    </AnimatedSection>
                    <AnimatedSection>
                        <Services />
                    </AnimatedSection>
                    <AnimatedSection>
                        <Contact />
                    </AnimatedSection>
                </main>
                {/* The Footer component is at the bottom of the page. */}
                <AnimatedSection>
                    <Footer />
                </AnimatedSection>
            </div>
            <Chatbot />
        </>
    );
};

// Export the App component so it can be used in other files (like index.tsx).
export default App;