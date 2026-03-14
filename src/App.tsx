import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ChevronRight,
  Sparkles,
  Github,
  BrainCircuit,
  Cpu,
  Activity,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from './utils/cn';
import { CanvasHero } from './components/CanvasHero';

const SYSTEM_LOGS = [
  "INITIALIZING_NEURAL_INTERFACE...",
  "O_LOADING_ML_FRAMEWORKS...",
  "CONNECTING_TO_RABBITRON_EDGE_NODES...",
  "SCANNING_VISITOR_METRICS...",
  "OPTIMIZING_LLM_PIPELINES...",
  "STATUS: AGENT_SYSTEM_READY"
];

function App() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % SYSTEM_LOGS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bentoVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      {/* 3D Canvas - Base Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <CanvasHero />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      {/* Vignette & Radial Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-600/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* OS Header */}
      <nav className={cn("fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 px-6 py-2 bg-black/40")}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex items-center gap-3 font-mono text-xs tracking-tighter text-cyan-400 font-bold"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AGENT_SYS_v.2.4.0
          </motion.div>

          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest uppercase text-gray-500">
            <AnimatePresence mode="wait">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-cyan-500/80"
              >
                {SYSTEM_LOGS[logIndex]}
              </motion.span>
            </AnimatePresence>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-cyan-400 hover:glow transition-all">_IDENT</a>
              <a href="#skills" className="hover:text-cyan-400 transition-all">_NODES</a>
              <a href="#rabbitron" className="hover:text-cyan-400 transition-all">_LABS</a>
              <a href="#contact" className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/20 transition-all">_CONNECT</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto"
        >
          {/* Main Agent Identity Card */}
          <motion.div variants={bentoVariant} className="md:col-span-8 bg-zinc-950/40 p-10 md:p-14 rounded-[2.5rem] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-700 shadow-2xl">
            {/* Animated Background Pulse */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] group-hover:bg-cyan-500/10 transition-all" />

            <div className="flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[9px] font-mono uppercase tracking-widest mb-8 w-fit">
                <Activity size={10} className="animate-spin-slow" />
                Live: AI_ADOPTION_STRATEGIST
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                I AM THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-[length:200%_auto] animate-gradient">
                  AGENTIC LAYER.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10">
                I am <span className="text-white font-medium">Sushant Patil</span>. I architect autonomous ecosystems and demystify the complexities of machine intelligence for the next generation.
              </p>

              <div className="flex flex-wrap gap-5">
                <a href="#contact" className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  INITIALIZE DIALOG <ChevronRight size={18} />
                </a>
                <a href="https://github.com/sush0677" target="_blank" rel="noreferrer" className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all border border-white/10 flex items-center gap-3">
                  ACCESS REPOS <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile HUD Card */}
          <motion.div variants={bentoVariant} className="md:col-span-4 bg-zinc-950/40 rounded-[2.5rem] border border-white/10 backdrop-blur-md relative overflow-hidden flex items-center justify-center p-3 aspect-square md:aspect-auto">
            <div className="absolute inset-6 border border-cyan-500/20 rounded-[2rem] z-10 pointer-events-none" />

            {/* Tech HUD indicators */}
            <div className="absolute top-10 left-10 overflow-hidden flex flex-col gap-1 z-20">
              <div className="w-8 h-[1px] bg-cyan-400/40" />
              <div className="w-4 h-[1px] bg-cyan-400/40" />
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 z-20">
              <div className="text-[8px] font-mono text-cyan-400/40 tracking-widest uppercase">ID.SUSHANT.0677</div>
              <div className="w-12 h-[1px] bg-cyan-400/40" />
            </div>

            {/* Vertical Scanning Bar */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-cyan-400/30 z-20 pointer-events-none shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            />

            <img
              src="/my-portfolio/profile.png"
              alt="Sushant Patil AI"
              className="w-full h-full object-cover rounded-[1.8rem] filter saturate-[0.1] contrast-[1.1] hover:saturate-100 transition-all duration-1000 opacity-80"
            />
          </motion.div>

          {/* Neural Nodes Card */}
          <motion.div variants={bentoVariant} id="skills" className="md:col-span-5 bg-zinc-950/40 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md hover:border-violet-500/40 transition-all group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-tighter">0x01: Neural_Architecture</h3>
              <BrainCircuit className="text-violet-400 group-hover:scale-110 transition-transform" />
            </div>

            <div className="space-y-6">
              {[
                { name: "Agent Orchestration", tech: "LangChain / OpenAI / Autogen", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                { name: "Deep Learning", tech: "PyTorch / TensorFlow / Scikit", color: "text-violet-400", bg: "bg-violet-400/10" },
                { name: "Vector Logistics", tech: "FAISS / ChromaDB / Pinecone", color: "text-emerald-400", bg: "bg-emerald-400/10" }
              ].map((skill, i) => (
                <div key={i} className="relative">
                  <div className="text-xs font-mono text-gray-500 mb-2">{skill.name}</div>
                  <div className={cn("px-4 py-3 rounded-xl border border-white/5 font-mono text-xs", skill.color, skill.bg)}>
                    {skill.tech}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mid Row Small Cards */}
          <motion.div variants={bentoVariant} className="md:col-span-3 bg-zinc-950/40 p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-center items-center text-center group hover:border-orange-500/40 transition-all">
            <Cpu className="text-orange-500 mb-6 group-hover:rotate-90 transition-transform duration-500" size={40} />
            <div className="text-3xl font-black text-white mb-2 tracking-tighter">12+</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Systems_Optimized</div>
          </motion.div>

          <motion.div variants={bentoVariant} className="md:col-span-4 bg-zinc-950/40 p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-center gap-6 group hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-blue-400" size={32} />
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Nathan Digital</div>
                <div className="text-[10px] font-mono text-blue-400">ROLE_ADOPTION_COORD</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed italic">
              &gt; Leading AI integration across UAE enterprise sectors...
            </p>
          </motion.div>

          {/* Rabbitron Large Bento */}
          <motion.div variants={bentoVariant} id="rabbitron" className="md:col-span-12 bg-zinc-950/40 p-10 md:p-16 rounded-[3.5rem] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[120%] bg-cyan-600/5 rotate-12 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-14">
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-mono uppercase tracking-widest mb-8">
                  <Sparkles size={12} /> COMMUNITY_MISSION
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none uppercase">Rabbitron <br /> Labs.</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl font-light">
                  Directing external affairs for an NPO AI club aligned with the <span className="text-white border-b border-white/20">UAE National AI Strategy 2031</span>. We empower K-12 and university students through deep-logic AI engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://rabbitronlab.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-cyan-500 text-black rounded-2xl font-bold text-sm hover:scale-105 transition-all flex items-center gap-2">
                    BROWSE SITE <LinkIcon size={16} />
                  </a>
                  <a href="https://lnkd.in/dTUFaskT" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-2xl font-bold text-sm transition-all border border-[#25D366]/30 flex items-center gap-2">
                    JOIN_WA_TRIBE
                  </a>
                </div>
              </div>

              {/* Lab Visual representation */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { label: "K-12_ENGAGEMENT", val: "ACTIVE" },
                  { label: "UNIVERSITY_NODES", val: "LINKED" },
                  { label: "CURRICULUM_SYNC", val: "V.2.0" },
                  { label: "REGION_UAE", val: "HQ" }
                ].map((stat, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 p-6 rounded-3xl group-hover:border-cyan-500/20 transition-all">
                    <div className="text-[9px] font-mono text-gray-500 mb-1">{stat.label}</div>
                    <div className="text-sm font-mono text-cyan-400 font-bold tracking-widest">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Hub */}
          <motion.div variants={bentoVariant} className="md:col-span-12 bg-zinc-950/40 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <div className="text-cyan-500 font-mono text-[10px]">0x03: ACADEMIC_ROOT</div>
                <h4 className="text-xl font-bold text-white tracking-tight">University of Birmingham</h4>
                <p className="text-xs text-gray-500 font-mono uppercase">MSc Artificial Intelligence</p>
              </div>
              <div className="space-y-4">
                <div className="text-violet-500 font-mono text-[10px]">0x04: FIELD_OPERATIONS</div>
                <h4 className="text-xl font-bold text-white tracking-tight">Hackathon Veteran</h4>
                <p className="text-xs text-gray-500 font-mono uppercase">800+ Signal Contributions</p>
              </div>
              <div className="space-y-4">
                <div className="text-emerald-500 font-mono text-[10px]">0x05: STATUS_LOG</div>
                <h4 className="text-xl font-bold text-white tracking-tight">Available to Help</h4>
                <p className="text-xs text-gray-500 font-mono uppercase">Neural_Bridge_Open</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Neural Handshake Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-zinc-950/40 p-14 md:p-24 rounded-[4rem] border border-white/10 text-center relative overflow-hidden border-dashed group hover:border-cyan-500/30 transition-all duration-1000"
          id="contact"
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150 rotate-12" />

          <div className="max-w-2xl mx-auto relative z-10">
            <Zap className="mx-auto text-cyan-400 mb-8 animate-pulse" size={48} />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Handshake.</h2>
            <p className="text-gray-400 mb-12 leading-relaxed font-mono text-sm border-l-2 border-cyan-500/40 pl-6 text-left italic">
              &gt; "I am not here to consult. I am here to help you solve the doubt that stops your next breakthrough. Whether you are a student or a legacy enterprise, let's build the agentic future."
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@example.com" className="px-12 py-6 bg-cyan-500 hover:bg-cyan-400 text-black rounded-2xl font-black tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                START_COMMS()
              </a>
              <a href="https://linkedin.com/in/sushant-p-a105a9240/" target="_blank" rel="noreferrer" className="px-12 py-6 bg-white/5 text-white rounded-2xl font-black tracking-widest text-xs transition-all border border-white/20 hover:bg-white/10">
                P-LINKEDIN_HUD
              </a>
            </div>
          </div>
        </motion.div>

      </main>

      <footer className="py-10 px-6 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-[9px] font-mono text-gray-700 relative z-10">
        <div className="flex gap-10">
          <span>// CPU_TEMP: OPTIMAL</span>
          <span>// LINK: ENCRYPTED</span>
          <span>// ORIGIN: UAE_NODE_01</span>
        </div>
        <div>SYS.SUSHANTPATIL // DEPLOYED_VIA_THOUGHT_CORE // 2026</div>
      </footer>
    </div>
  );
}

function LinkIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default App;
