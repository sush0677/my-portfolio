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
  Network
} from 'lucide-react';
import { cn } from './utils/cn';

function App() {
  const bentoVariant: import('framer-motion').Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* High-Tech Background Lines */}
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
            <Terminal size={16} /> SYS.SUSHANT_P
          </motion.div>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest uppercase text-gray-500">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Data_01.About</a>
            <a href="#mission" className="hover:text-cyan-400 transition-colors">Data_02.Mission</a>
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
          <motion.div variants={bentoVariant} className="md:col-span-8 bg-zinc-900/40 p-10 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Resolve Tech Doubts
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Bridging the gap between <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                Humanity and AI.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed mb-8">
              I am an AI advocate and problem solver. As the <strong className="text-white font-medium">AI Adoption Coordinator</strong> at Nathan Digital, and the founder of Rabbitron Lab, my mission is to demystify complex AI concepts and help you build adopting strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-all flex items-center gap-2">
                Ask a Question <MessageSquare size={16} />
              </a>
              <a href="#rabbitron" className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-700 transition-all border border-zinc-700 flex items-center gap-2">
                Join Community <Network size={16} />
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

            <img
              src="/my-portfolio/profile.png"
              alt="Sushant P"
              className="w-full h-full object-cover rounded-[1.25rem] filter grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </motion.div>

          {/* Nathan Digital Card */}
          <motion.div variants={bentoVariant} className="md:col-span-4 bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-all group">
            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
              <Bot className="text-purple-400" size={20} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Nathan Digital</h3>
            <p className="text-purple-400 text-sm font-mono mb-4">AI Adoption Coordinator</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Facilitating the seamless integration of Artificial Intelligence into enterprise workflows, boosting efficiency and modernization.
            </p>
          </motion.div>

          {/* Rabbitron Lab Card (Wider) */}
          <motion.div variants={bentoVariant} id="rabbitron" className="md:col-span-8 bg-gradient-to-br from-cyan-900/20 to-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <GraduationCap size={200} />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-cyan-400" size={20} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Rabbitron Lab</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">Founder & Educator</p>

              <div className="grid md:grid-cols-2 gap-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  A revolutionary non-profit AI club aligned with the UAE National AI Strategy 2031. We don't just talk about the future; we build it by empowering K-12 and university students with hands-on AI engineering logic.
                </p>
                <div className="flex flex-col gap-3 justify-center">
                  <a href="https://rabbitronlab.com" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 rounded-xl text-sm font-medium transition-all flex items-center justify-between border border-cyan-500/20">
                    Visit Rabbitron Lab <ChevronRight size={16} />
                  </a>
                  <a href="https://lnkd.in/dTUFaskT" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-xl text-sm font-medium transition-all flex items-center justify-between border border-[#25D366]/20">
                    Join WhatsApp Tribe <UsersIcon size={16} />
                  </a>
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
          className="mt-6 bg-zinc-900/40 p-10 md:p-14 rounded-3xl border border-white/5 text-center relative overflow-hidden"
          id="contact"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl font-medium text-white mb-4">Have AI Doubts? Let's Talk.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am not here to sell you consulting hours. If you are a student, a builder, or an enthusiast struggling with AI adoption, system architecture, or career paths, I am here to help. Reach out directly.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@example.com" className="px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-all flex items-center gap-2">
                <Mail size={16} /> Send an Email
              </a>
              <a href="https://linkedin.com/in/sushant-p-a105a9240/" target="_blank" rel="noreferrer" className="px-8 py-3 bg-zinc-800 text-white rounded-full font-medium text-sm hover:bg-zinc-700 transition-all border border-zinc-700 flex items-center gap-2">
                <Linkedin size={16} /> Message on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

      </main>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-xs font-mono text-gray-600">
        SYS.SUSHANT_P // VERSION 2.0 // FUTURE-READY
      </footer>
    </div>
  );
}

function UsersIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default App;
