import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Scale } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá. Sou o assistente virtual do Dr. Alex Silva. Como posso auxiliar com o agendamento da sua consulta ou informações sobre o escritório?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 w-full max-w-md h-[600px] rounded-lg shadow-2xl border border-zinc-800 flex flex-col overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-brand-900/30 flex items-center justify-center text-brand-500 border border-brand-500/20">
              <Scale size={20} />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white">Atendimento Virtual</h3>
              <p className="text-xs text-brand-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Dr. Alex Silva (IA)
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-zinc-950/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`
                  max-w-[85%] p-3 rounded-lg text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-brand-700 text-white rounded-tr-sm border border-brand-600' 
                    : 'bg-zinc-800 text-zinc-200 rounded-tl-sm border border-zinc-700'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-lg rounded-tl-sm border border-zinc-700 flex space-x-2">
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-700 rounded-sm px-4 py-3 focus-within:border-brand-500/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-zinc-500 font-light"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 text-brand-500 hover:text-brand-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};