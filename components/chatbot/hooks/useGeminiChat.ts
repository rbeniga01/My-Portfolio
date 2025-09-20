import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

// Read API key from Vite client env
const API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY as string | undefined;
if (!API_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_GEMINI_API_KEY is not set. Add it to .env.local and restart the dev server."
  );
}

interface Message {
    role: 'user' | 'model';
    text: string;
}

export const useGeminiChat = ( systemInstruction: string) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "Hi! I'm Aros, your AI assistant. Ask me anything about Richard's portfolio." },
        { role: 'model', text: "I am still in development, so I may not have all the informatio but feel free to ask." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);

    useEffect(() => {
        if (API_KEY) {
            try {
                const ai = new GoogleGenAI({ apiKey: API_KEY });
                const chat = ai.chats.create({
                  model: 'gemini-2.5-flash-lite',
                  config: { systemInstruction },
                });
                chatRef.current = chat;
            } catch (error) {
                console.error("Failed to initialize Gemini AI:", error);
                setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to my brain right now." }]);
            }
        }
    }, [systemInstruction]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            if (!chatRef.current) {
                throw new Error("Chat is not initialized.");
            }
            const response = await chatRef.current.sendMessage({ message: userMessage.text });
            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { role: 'model', text: "Oops! Something went wrong. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return { messages, isLoading, sendMessage };
};