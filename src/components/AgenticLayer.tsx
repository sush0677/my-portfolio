import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Send, Cpu, Bot } from 'lucide-react';
import { cn } from '../utils/cn';

const QA_DATABASE = [
  { keywords: ['hello', 'hi', 'hey'], answer: "Greetings. I am the Agentic Proxy for Sushant. How can I assist you in navigating this portfolio?" },
  { keywords: ['experience', 'work', 'job', 'nathan'], answer: "Sushant is an AI Adoption Coordinator at Nathan Digital. He specializes in bridging the gap between cutting-edge AI technology and scalable enterprise implementations." },
  { keywords: ['education', 'degree', 'university', 'college', 'birmingham'], answer: "Sushant holds a BSc in Computer Science from KLS Gogte Institute of Technology (2023) and is currently completing his MSc in Artificial Intelligence at the University of Birmingham (2025)." },
  { keywords: ['contact', 'email', 'hire', 'message'], answer: "You can initiate a direct connection by sending an email or connecting via LinkedIn. Feel free to use the 'Connect' section at the bottom of the page." },
  { keywords: ['rabbitron', 'labs', 'startup'], answer: "Rabbitron Labs is an AI tech hub aligned with the UAE National AI Strategy 2031, aiming to empower the next generation of engineers." },
  { keywords: ['skills', 'tech', 'stack', 'neural'], answer: "The core stack includes LLM Orchestration (LangChain, CrewAI), ML Pipelines (PyTorch, TensorFlow), and Vector Infrastructure (Pinecone, ChromaDB)." }
];

export function AgenticLayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'agent', text: string}[]>([
    { role: 'agent', text: "SYSTEM ONLINE. I am the Agentic Layer Proxy. Ask me about Sushant's background, journey, or vision." }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Simulate agent processing
    setTimeout(() => {
       let foundAnswer = "I'm a localized agent wrapper. For complex inquiries or partnership details, please send Sushant a direct message via email or LinkedIn.";
       const lowerMsg = userMsg.toLowerCase();
       for (const qa of QA_DATABASE) {
         if (qa.keywords.some(kw => lowerMsg.includes(kw))) {
            foundAnswer = qa.answer;
            break;
         }
       }
       setMessages(prev => [...prev, { role: 'agent', text: foundAnswer }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Agent Button */}
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={cn("fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary backdrop-blur-md hover:bg-primary/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]", isOpen && "hidden")}
      >
        <Bot size={24} />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
      </motion.button>

      {/* The Agentic Layer Overlay UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[400px] h-[500px] bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] z-[100] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <Cpu className="text-primary animate-pulse" size={20} />
                <div>
                  <div className="text-xs font-bold text-white tracking-widest uppercase">Agentic_Layer</div>
                  <div className="text-[9px] font-mono text-primary">v.1.0 // ACTIVE</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Log */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm font-mono scrollbar-hide flex flex-col">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={cn("flex", msg.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                   <div className={cn("max-w-[85%] p-3 rounded-2xl", msg.role === 'user' ? 'bg-primary text-background rounded-tr-sm' : 'bg-white/5 border border-white/10 text-zinc-300 rounded-tl-sm')}>
                     {msg.text}
                   </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Command Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <Terminal className="absolute left-4 text-zinc-500" size={16} />
                <input 
                  type="text" 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Query agent..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-zinc-600 font-mono"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2 bg-primary text-background rounded-full hover:scale-105 transition-transform"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
