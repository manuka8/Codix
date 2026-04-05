import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Zap, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Next-Gen Web Development
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital</span> <br /> Experiences
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Codix Web Solutions transforms your ideas into pixel-perfect, highly performant, and scalable digital solutions that drive business growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25">
                Our Work <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all">
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Visual Area */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Abstract Graphical Representation */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-slate-800 rounded-2xl border border-slate-700 p-6 glass-panel transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float shadow-2xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Code2 />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-700 rounded-full mb-2" />
                        <div className="h-2 w-16 bg-slate-700 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Layers />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-32 bg-slate-700 rounded-full mb-2" />
                        <div className="h-2 w-20 bg-slate-700 rounded-full" />
                      </div>
                    </div>
                     <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Zap />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2" />
                        <div className="h-2 w-12 bg-slate-700 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
