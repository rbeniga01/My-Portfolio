import React, { useState } from 'react';
import { SendIcon } from '../../common/Icons';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        onSendMessage(inputValue);
        setInputValue('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="p-4 border-t border-white/10 flex-shrink-0">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me a question..."
                    disabled={isLoading}
                    className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#6049EA] transition-all disabled:opacity-50"
                />
                <button 
                    onClick={handleSend} 
                    disabled={isLoading || !inputValue.trim()} 
                    className="p-2 rounded-full bg-[#6049EA] text-white transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <SendIcon />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;