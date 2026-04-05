import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-pink-400 text-sm font-medium mb-4"
          >
            Join the Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We are looking for passionate individuals who strive for technical excellence and aesthetic perfection. Your next career milestone starts here.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">Why work at Codix?</h2>
              <ul className="space-y-4">
                 {[
                   'Unlimited learning resources',
                   'Modern technology stack',
                   'Inclusive and diverse culture',
                   'Flexible working hours'
                 ].map((perk, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                     <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                     {perk}
                   </li>
                 ))}
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-3xl bg-indigo-600/5 border-indigo-500/20">
               <h3 className="text-xl font-bold text-white mb-2">Can't find a role?</h3>
               <p className="text-sm text-slate-400 mb-6">Send us an open application and tell us how you can contribute.</p>
               <a href="mailto:careers@codix.com" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors underline underline-offset-4">careers@codix.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Active Openings</h2>
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-pink-500/30 transition-all cursor-pointer"
              >
                <div className="flex-1">
                   <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                   <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                     <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                     <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                     <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.salary}</span>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400 border border-slate-700/50 uppercase tracking-wider font-semibold">{tag}</span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-pink-600 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
