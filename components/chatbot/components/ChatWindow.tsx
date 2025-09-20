import React from 'react';
import { useGeminiChat } from '../hooks/useGeminiChat';
import { KNOWLEDGE_BASE } from '../knowledge';
import { XIcon } from '../../common/Icons';
import MessageList from './MessageList';
import ChatInput from './ChatInput';


interface ChatWindowProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
    const { messages, isLoading, sendMessage } = useGeminiChat(KNOWLEDGE_BASE);

    return ( 
        <div className={`fixed bottom-24 right-4 sm:right-6 w-[calc(100%-2rem)] sm:w-96 h-[60vh] max-h-[700px] bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl shadow-[#6049EA]/20 flex flex-col transition-all duration-300 ease-in-out transform-gpu z-50 ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
                <h3 className="font-['Space_Grotesk'] font-bold text-lg">AI Assistant</h3>
                <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                    <XIcon />
                </button>
            </div>

            <MessageList messages={messages} isLoading={isLoading} />
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
    );
};

export default ChatWindow;