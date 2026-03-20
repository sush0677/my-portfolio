import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, type MouseEvent } from 'react';
import {
  Sparkles,
  Github,
  Cpu,
  Activity,
  ShieldCheck,
  Zap,
  ExternalLink,
  MessageSquare,
  Network
} from 'lucide-react';
import { cn } from './utils/cn';
import { CanvasHero } from './components/CanvasHero';
import { AgenticLayer } from './components/AgenticLayer';

const SYSTEM_LOGS = [
  "INITIALIZING_NEURAL_INTERFACE...",
  "LOADING_ML_FRAMEWORKS...",
  "SYNCING_RABBITRON_NODES...",
  "OPTIMIZING_LLM_PIPELINES...",
  "STATUS: AGENT_SYSTEM_READY"
];

// --- Sub-components for Polish ---

function GlowCard({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      id={id}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden glass-card p-8 md:p-10",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
          ),
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

function App() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % SYSTEM_LOGS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-zinc-400 font-sans relative selection:bg-primary/20 selection:text-primary">
      {/* Background visual layers */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <CanvasHero />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* OS-Style Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 font-mono text-[10px] sm:text-xs tracking-tighter text-primary font-bold"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            CORE_INTERFACE_v.2.5.0
          </motion.div>

          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest uppercase text-zinc-600">
            <AnimatePresence mode="wait">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-primary/70"
              >
                {SYSTEM_LOGS[logIndex]}
              </motion.span>
            </AnimatePresence>
            <div className="flex gap-6 items-center">
              <a href="#about" className="hover:text-white transition-colors font-bold">About</a>
              <a href="#journey" className="hover:text-white transition-colors font-bold">Journey</a>
              <a href="#labs" className="hover:text-white transition-colors font-bold">Labs</a>
              <a href="#contact" className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full hover:bg-primary/20 transition-all font-bold">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Hero Section Card */}
          <GlowCard className="md:col-span-8 p-12 md:p-16 flex flex-col justify-center min-h-[450px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono font-bold uppercase tracking-widest mb-8 w-fit shrink-0">
              <Activity size={12} className="animate-spin-slow" />
              STATUS: OPEN FOR OPPORTUNITIES
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-white">
              Sushant Patil.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient text-4xl md:text-6xl uppercase">
                AI Architect & Strategist
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
              I architect autonomous ecosystems and demystify the complexities of machine intelligence for the next generation.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm hover:translate-y-[-2px] transition-all flex items-center gap-3 shadow-xl">
                Start Conversation <MessageSquare size={18} />
              </a>
              <a href="https://github.com/sush0677" target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all border border-white/10 flex items-center gap-3">
                GitHub Repos <Github size={18} />
              </a>
            </div>
          </GlowCard>

          {/* Profile Card */}
          <GlowCard className="md:col-span-4 aspect-square flex items-center justify-center p-0 relative group">
            <div className="absolute inset-8 border border-primary/20 rounded-[2rem] z-10 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute bottom-10 left-10 text-xs font-mono text-primary/60 tracking-[0.2em] uppercase z-20 font-bold">
              Sushant Patil // UAE
            </div>

            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-primary/40 z-20 pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />

            <img
              src="/my-portfolio/profile.png"
              alt="Sushant Patil"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105"
            />
          </GlowCard>

          {/* Neural Architecture Card */}
          <GlowCard id="nodes" className="md:col-span-5 border-secondary/20 hover:border-secondary/40">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold uppercase tracking-tight">Core Expertise</h3>
              <Network className="text-secondary animate-pulse" />
            </div>

            <div className="space-y-6">
              {[
                { name: "Agent Orchestration", tech: "LangChain • CrewAI • Autogen", color: "text-primary", bg: "bg-primary/5" },
                { name: "ML Ecosystem", tech: "PyTorch • Transformers • Scikit", color: "text-secondary", bg: "bg-secondary/5" },
                { name: "Knowledge Graphs", tech: "Neo4j • Vector DBs • RAG", color: "text-emerald-400", bg: "bg-emerald-400/5" }
              ].map((skill, i) => (
                <div key={i} className="group/skill">
                  <div className="text-[10px] font-mono text-zinc-600 mb-2 group-hover/skill:text-zinc-400 transition-colors">{skill.name}</div>
                  <div className={cn("px-4 py-3 rounded-xl border border-white/5 font-mono text-[11px] font-medium", skill.color, skill.bg)}>
                    {skill.tech}
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Statistics Card */}
          <GlowCard className="md:col-span-3 items-center justify-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <Cpu className="text-primary relative z-10 animate-spin-slow" size={48} />
            </div>
            <div className="text-5xl font-black text-white mb-2 tracking-tighter">12+</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">Enterprise Projects</div>
          </GlowCard>

          {/* Current Mission Card */}
          <GlowCard className="md:col-span-4 border-emerald-500/20 hover:border-emerald-500/40 justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="text-emerald-400" size={24} />
              </div>
              <div>
                <div className="text-lg font-bold">Nathan Digital</div>
                <div className="text-[10px] font-mono text-emerald-400">AI STRATEGIST</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-light italic opacity-80 decoration-primary/30">
              Leading the shift towards autonomous enterprise in the UAE...
            </p>
          </GlowCard>

          {/* Labs Highlight Section */}
          <GlowCard id="labs" className="md:col-span-12 p-12 md:p-16 bg-zinc-950/20 border-primary/20 ring-1 ring-primary/5">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-mono font-bold uppercase tracking-widest mb-8">
                  <Sparkles size={12} /> MISSION:01
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-none">RABBITRON<br />LABS.</h3>
                <p className="text-xl text-zinc-400 leading-relaxed mb-10 font-light max-w-xl">
                  Fueling the next generation of AI engineers across the UAE. From K-12 curiosity to university-level deep-logic, we are the bridge to <span className="text-white font-medium underline decoration-primary/50 underline-offset-4">Strategic AI 2031</span>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://rabbitronlab.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-primary text-black rounded-2xl font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                    EXPLORE LAB <ExternalLink size={16} />
                  </a>
                  <a href="https://lnkd.in/dTUFaskT" target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900 border border-white/10 text-white rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all flex items-center gap-2">
                    JOIN THE HUB
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                {[
                  { label: "ACADEMY", val: "ACTIVE" },
                  { label: "COMMUNITY", val: "2.5K+" },
                  { label: "NODES", val: "GLOBAL" },
                  { label: "CURRICULUM", val: "CUSTOM" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] min-w-[140px] group-hover:border-primary/20 transition-all">
                    <div className="text-[10px] font-mono text-zinc-600 mb-1">{stat.label}</div>
                    <div className="text-sm font-bold text-white tracking-widest">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>

          {/* My Journey Section */}
          <GlowCard id="journey" className="md:col-span-12 p-12 md:p-16 border-white/5">
            <h3 className="text-3xl font-black mb-12 tracking-tight flex items-center gap-4 text-white">
              <Activity className="text-primary" /> My Journey
            </h3>
            
            <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
              {/* Present */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary z-10" />
                <div className="text-primary font-mono text-xs font-bold mb-2">2023 — 2025</div>
                <h4 className="text-xl font-bold text-white">University of Birmingham</h4>
                <p className="text-sm font-mono text-zinc-400 mb-4">Postgraduate in Artificial Intelligence & Machine Learning</p>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Completing my Master's degree in AI, exploring advanced ML pipelines and neural network architectures. Simultaneously leading AI strategies at <span className="text-zinc-300 font-medium">Nathan Digital</span> and completing various startup internships in the tech space.
                </p>
              </div>

              {/* Past */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-zinc-700 z-10" />
                <div className="text-zinc-500 font-mono text-xs font-bold mb-2">2019 — 2023</div>
                <h4 className="text-xl font-bold text-white">KLS Gogte Institute of Technology</h4>
                <p className="text-sm font-mono text-zinc-400 mb-4">Undergraduate in Computer Science</p>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                  Built a strong foundation in computer science and software engineering, participating heavily in university events, competitive programming, and Hackathons.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                  🏆 Winner: Manthan Hackathon 2021
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Contact CTA Section */}
        <section id="contact" className="mt-24 text-center">
          <GlowCard className="bg-zinc-950/40 p-16 md:p-32 rounded-[4rem] border-dashed border-zinc-800 hover:border-primary/30 group">
             <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <Zap className="mx-auto text-primary mb-10 animate-pulse-slow" size={64} />
                <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase italic">Ready?</h2>
                <p className="text-lg md:text-2xl text-zinc-400 mb-14 leading-relaxed font-light mx-auto">
                  Stop looking for consultants. Start looking for architects. <br className="hidden md:block" />
                  Let's build something that thinks for itself.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <a href="mailto:contact@example.com" className="px-14 py-6 bg-primary text-black rounded-2xl font-black tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                    Send Email
                  </a>
                  <a href="https://linkedin.com/in/sushant-p-a105a9240/" target="_blank" rel="noreferrer" className="px-14 py-6 bg-white/5 text-white rounded-2xl font-black tracking-widest text-sm border border-white/10 hover:bg-white/10 transition-all">
                    LinkedIn Profile
                  </a>
                </div>
             </div>
          </GlowCard>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 flex flex-col items-center justify-center gap-6 text-[10px] font-mono text-zinc-700 relative z-10">
        <div className="flex gap-12 flex-wrap justify-center">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SYSTEM_ONLINE</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> SESSION_ENCRYPTED</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> UAE_REGION_PROX</span>
        </div>
        <div className="flex items-center gap-4">
           <span>SUSHANT PATIL // 2026 // AGENTIC_CORE_DEPLOY</span>
           <div className="w-[1px] h-3 bg-zinc-800" />
           <a href="#about" className="hover:text-zinc-400 transition-colors">BACK_TO_TOP</a>
        </div>
      </footer>

      {/* Floating Agentic Layer Chat UI */}
      <AgenticLayer />
    </div>
  );
}

export default App;
