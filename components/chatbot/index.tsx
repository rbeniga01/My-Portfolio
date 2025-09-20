import React, { useState } from 'react';
import FloatingButton from './components/FloatingButton';
import ChatWindow from './components/ChatWindow';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <FloatingButton isOpen={isOpen} onClick={toggleChat} />
        </>
    );
};

export default Chatbot;