import React, { useEffect, useRef } from 'react';

interface Message {
    role: 'user' | 'model';
    text: string;
}

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className="flex-1 p-4 overflow-y-auto minimal-scrollbar">
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6049EA] to-purple-500 flex-shrink-0 flex items-center justify-center font-bold text-sm">AR</div>}
                        <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-[#6049EA] text-white rounded-br-none' : 'bg-white/10 text-white/90 rounded-bl-none'}`}>
                            <p className="text-sm break-words whitespace-pre-wrap">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex items-end gap-2 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6049EA] to-purple-500 flex-shrink-0 flex items-center justify-center font-bold text-sm">AR</div>
                        <div className="max-w-[80%] p-3 rounded-xl bg-white/10 text-white/90 rounded-bl-none">
                            <div className="flex items-center justify-center gap-1.5 p-1">
                                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                                <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default MessageList;