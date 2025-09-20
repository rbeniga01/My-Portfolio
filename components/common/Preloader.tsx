import React from 'react';

/** Preloader: orbital animation while content loads. */
const Preloader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black fixed inset-0 z-50">
            <div className="relative flex items-center justify-center w-48 h-48">
                <div className="absolute w-full h-full rounded-full border-2 border-dashed border-[#6049EA] animate-[orbital-spin_10s_linear_infinite]"></div>
                
                <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-dashed border-white/50 animate-[orbital-spin_8s_linear_infinite_reverse]"></div>
                
                <div className="text-white font-mono text-2xl font-bold tracking-widest text-center">
                    <span className="text-[#6049EA]">{'{'}</span>
                    <span className="animate-[text-focus-in_1s_cubic-bezier(0.550,0.085,0.680,0.530)_both]">...</span>
                    <span className="text-[#6049EA]">{'}'}</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;