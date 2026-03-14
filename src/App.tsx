import { motion } from 'framer-motion';
import {
  Bot,
  Terminal,
  MessageSquare,
  ChevronRight,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
  Github,
  Code,
  Database,
  BrainCircuit,
  Cpu
} from 'lucide-react';
import { cn } from './utils/cn';
import { CanvasHero } from './components/CanvasHero';

function App() {
  const bentoVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      {/* Interactive 3D Canvas Background */}
      <CanvasHero />

      {/* High-Tech Background Lines - Overlaying the 3D Canvas partially */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      {/* Nav */}
      <nav className={cn("fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 px-6 py-4")}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cyan-400 font-bold"
          >
            <Bot size={18} className="text-cyan-400 animate-pulse" /> AI.ENG_SUSHANTPATIL
          </motion.div>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest uppercase text-gray-500">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Data_01.Identity</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Data_02.Systems</a>
            <a href="#rabbitron" className="hover:text-cyan-400 transition-colors">Data_03.Agents</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors underline decoration-cyan-500/50 underline-offset-4">Connect</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* Futuristic Bento Grid Layout */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto"
        >
          {/* Main Identity Card */}
          <motion.div variants={bentoVariant} id="about" className="md:col-span-8 bg-zinc-900/40 p-10 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Director of External Affairs @ Rabbitron Labs
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Architecting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 border-b-2 border-dashed border-cyan-500/30 pb-1">
                Autonomous Agents.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed mb-8">
              I am an AI Developer bridging humanity and sophisticated engineering. With an MSc in Computer Science from the University of Birmingham, I specialize in building generative agent systems and orchestrating AI workflows at <strong className="text-white font-medium">Nathan Digital</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                View AI Projects <ChevronRight size={16} />
              </a>
              <a href="https://github.com/sush0677" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-700 transition-all border border-zinc-700 flex items-center gap-2 group-hover:border-cyan-500/50">
                Process GitHub <Github size={16} />
              </a>
            </div>
          </motion.div>

          {/* Profile Picture Card */}
          <motion.div variants={bentoVariant} className="md:col-span-4 bg-zinc-900/40 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-2 min-h-[300px]">
            {/* Tech HUD overlay */}
            <div className="absolute inset-4 border border-cyan-500/20 rounded-[1.25rem] z-10 pointer-events-none" />
            <div className="absolute top-8 left-8 w-2 h-2 border-t border-l border-cyan-400 z-10" />
            <div className="absolute top-8 right-8 w-2 h-2 border-t border-r border-cyan-400 z-10" />
            <div className="absolute bottom-8 left-8 w-2 h-2 border-b border-l border-cyan-400 z-10" />
            <div className="absolute bottom-8 right-8 w-2 h-2 border-b border-r border-cyan-400 z-10" />

            {/* Scanline effect */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

            <img
              src="/my-portfolio/profile.png"
              alt="Sushant Patil - AI Engineer"
              className="w-full h-full object-cover rounded-[1.25rem] filter grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </motion.div>

          {/* Technical Skills Bento */}
          <motion.div variants={bentoVariant} id="skills" className="md:col-span-8 bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-violet-500/30 transition-all">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <BrainCircuit className="text-violet-400" size={20} /> Core AI Frameworks
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4 border-l border-white/5 pl-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Models & Frameworks</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">PyTorch</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">TensorFlow</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">Azure OpenAI LLMs</div>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Agent Orchestration</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">LangChain</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">Hugging Face</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">Self-Critic Agents</div>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Vector Processing</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Database size={14} className="text-emerald-400" /> FAISS</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Database size={14} className="text-emerald-400" /> ChromaDB</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Database size={14} className="text-emerald-400" /> PostgreSQL / SQL</div>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Systems</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Terminal size={14} className="text-cyan-400" /> Python / Flask</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Code size={14} className="text-cyan-400" /> React / UI</div>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium"><Cpu size={14} className="text-cyan-400" /> Pandas / OpenCV</div>
              </div>
            </div>
          </motion.div>

          {/* Hackathon/Experience Card */}
          <motion.div variants={bentoVariant} className="md:col-span-4 bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
              <Bot className="text-emerald-400" size={20} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Hackathon Veteran</h3>
            <p className="text-emerald-400 text-sm font-mono mb-4">Pull Shark Achiever</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Participated in multiple high-stakes AI hackathons. Proven track record of architecting deep-learning solutions (like Compass_hack) under immense pressure and tight deadlines. Over 800+ GitHub contributions built in public.
            </p>
          </motion.div>

          {/* Project Focus / Rabbitron Lab (Wider) */}
          <motion.div variants={bentoVariant} id="projects" className="md:col-span-12 bg-gradient-to-br from-cyan-900/20 via-zinc-900/40 to-violet-900/20 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all">

            <div className="relative z-10 max-w-6xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6">
                <Sparkles size={14} />
                <span>Featured AI Architectures</span>
              </div>

              <h3 className="text-3xl font-medium text-white mb-8">Agentic Systems & Initiatives</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Project 1 */}
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl hover:bg-black/60 transition-colors">
                  <div className="text-violet-400 mb-4"><Database size={24} /></div>
                  <h4 className="text-lg text-white font-medium mb-2">Generative AI Data Agent</h4>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">Agent built with Langchain, FAISS, and ChromaDB powered by Azure OpenAI LLMs to autonomously query and manage massive structured datasets.</p>
                </div>

                {/* Project 2 */}
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl hover:bg-black/60 transition-colors">
                  <div className="text-cyan-400 mb-4"><BrainCircuit size={24} /></div>
                  <h4 className="text-lg text-white font-medium mb-2">Self-Critic Python Agent</h4>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">An advanced autonomous AI agent that evaluates its own generated logic and corrects hallucinations before outputting final results.</p>
                </div>

                {/* Rabbitron */}
                <div className="bg-black/40 border border-white/5 p-6 rounded-2xl hover:bg-black/60 transition-colors relative overflow-hidden border-cyan-500/30">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><GraduationCap size={60} /></div>
                  <div className="text-cyan-400 mb-4"><Sparkles size={24} /></div>
                  <h4 className="text-lg text-white font-medium mb-2">Rabbitron Labs</h4>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">Directing external affairs for an NPO AI club aligned with UAE National AI Strategy 2031, teaching K-12 students about deep tech.</p>

                  <div className="flex gap-2">
                    <a href="https://rabbitronlab.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">Launch Site</a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Contact/Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-zinc-900/40 p-10 md:p-14 rounded-3xl border border-white/5 text-center relative overflow-hidden border-dashed"
          id="contact"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10" />

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl font-medium text-white mb-4">Initialize Handshake.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm">
              &gt; Looking to collaborate on neural networks, agentic workflows, or just need to debug your AI roadmap? Opening comms channel...
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@example.com" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20">
                <Terminal size={16} /> Execute Email()
              </a>
              <a href="https://linkedin.com/in/sushant-p-a105a9240/" target="_blank" rel="noreferrer" className="px-8 py-3 bg-zinc-800 text-white rounded-full font-medium text-sm transition-all border border-zinc-700 hover:border-gray-500 flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

      </main>

      <footer className="py-8 px-6 border-t border-white/5 flex flex-col items-center justify-center gap-2 text-xs font-mono text-gray-600 relative z-10">
        <div>SYS.SUSHANTPATIL // AI_DEV_V.3.1.0 // ONLINE</div>
      </footer>
    </div>
  );
}

export default App;
