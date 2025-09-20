import React from 'react';
import { ChatIcon, XIcon } from '../../common/Icons';

interface FloatingButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => (
    <button
        onClick={onClick}
        className="fixed bottom-4 right-4 sm:right-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#6049EA] to-purple-500 text-white flex items-center justify-center shadow-lg shadow-[#6049EA]/40 transition-all duration-300 hover:scale-110 z-50 transform-gpu"
        aria-label="Toggle AI Chat"
    >
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
           <ChatIcon />
        </div>
         <div className={`absolute transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
           <XIcon />
        </div>
    </button>
);

export default FloatingButton;