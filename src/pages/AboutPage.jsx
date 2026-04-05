import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Founded', value: '2020', icon: <Globe className="w-5 h-5 text-indigo-400" /> },
    { label: 'Projects', value: '100+', icon: <Target className="w-5 h-5 text-cyan-400" /> },
    { label: 'Team', value: '25+', icon: <Users className="w-5 h-5 text-pink-400" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-medium mb-4"
          >
            Our Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Codix</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto"
          >
            Empowering businesses through cutting-edge digital solutions. We are a team of visionary developers, creative designers, and strategic thinkers dedicated to transforming complex ideas into seamless user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              We believe that every business, regardless of size, deserves access to world-class technology. Our mission is to bridge the gap between complex digital requirements and intuitive solutions, enabling our clients to scale effectively and lead their industries.
            </p>
            <h2 className="text-3xl font-bold text-white pt-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To become the global cornerstone for digital transformation, setting new standards for speed, security, and aesthetics in web and mobile applications. We strive to be more than just a vendor; we aim to be your strategic digital partner.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="glass-panel p-10 rounded-3xl overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
               <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
               <ul className="space-y-4">
                 {[
                   'Full-stack expertise in modern frameworks',
                   'Pixel-perfect, responsive UI/UX designs',
                   'Aesthetic excellence and visual branding',
                   'Transparent collaboration and clear communication',
                   'Dedicated post-launch support and maintenance'
                 ].map((point, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                     <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
