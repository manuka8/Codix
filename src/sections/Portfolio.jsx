import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project7 from '../assets/projects/project7.png';

const projects = [
  {
    title: 'Rightway Investment',
    category: 'Finance & Ecommerce',
    image: project1,
    tech: ['React', 'Tailwind', 'Node.js'],
    link: 'https://rightway.lk/'
  },
  {
    title: 'Trave-Land Tourism',
    category: 'Travel & Tourism',
    image: project2,
    tech: ['React', 'Framer Motion', 'Vite'],
    link: 'https://trave-land.vercel.app/'
  },
  {
    title: 'Prime Crust Pizza',
    category: 'Food & Restaurant',
    image: project3,
    tech: ['React', 'Ecommerce', 'UI/UX'],
    link: 'https://prime-crust.vercel.app/-project3'
  },
  {
    title: 'Active Plus Fitness',
    category: 'Gym & Fitness',
    image: project7,
    tech: ['React', 'Health Tech', 'Responsive'],
    link: 'https://activeplusfitness.vercel.app'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
            >
              Our Work
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/projects" 
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 font-medium transition-colors group"
            >
              View All Projects 
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-panel aspect-[4/3] sm:aspect-video"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10 group-hover:bg-slate-900/20 transition-all duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-20 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-cyan-400 font-medium text-sm mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-tight text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center transition-colors shadow-lg shadow-indigo-600/30"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
