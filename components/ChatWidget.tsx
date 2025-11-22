import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Deepu's AI assistant. Ask me anything about his experience, skills, or projects." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse(userText, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-white border border-border-light rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-bg-hover p-4 flex justify-between items-center border-b border-border-light">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent-DEFAULT flex items-center justify-center text-white shadow-md shadow-accent-light/50">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-main">Deepu AI</h3>
                <span className="flex items-center gap-1 text-[10px] text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text-main bg-white p-1 rounded-full shadow-sm border border-border-light">
              <X size={16}/>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-bg-main">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 text-sm rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-accent-DEFAULT text-white rounded-br-none shadow-accent-light/50' 
                      : 'bg-white text-text-main rounded-bl-none border border-border-light'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-full flex gap-1 items-center border border-border-light shadow-sm">
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-border-light">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my experience..."
                className="w-full bg-bg-hover text-text-main placeholder-text-dim rounded-full py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-accent-light/50 border border-transparent transition-all text-sm"
                disabled={isLoading}
                autoFocus
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-accent-DEFAULT rounded-full text-white hover:bg-accent-hover shadow-md shadow-accent-light/50 disabled:opacity-50 disabled:hover:bg-accent-DEFAULT transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 bg-accent-DEFAULT text-white rounded-full shadow-xl shadow-accent-DEFAULT/30 hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 border-4 border-white`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;