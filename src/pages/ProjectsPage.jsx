import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import project6 from '../assets/projects/project6.png';
import project7 from '../assets/projects/project7.png';

const projectsData = [
  {
    id: 1,
    title: 'Rightway',
    category: 'Investment / Ecommerce',
    keywords: ['landing page', 'frontend', 'ecommerce', 'investment company'],
    description: 'A dedicated platform for an investment company featuring e-commerce capabilities and a modern frontend.',
    image: project1,
    link: 'https://rightway.lk/'
  },
  {
    id: 2,
    title: 'Trave-Land',
    category: 'Travel and Tourism',
    keywords: ['landing page', 'frontend', 'ecommerce', 'travel', 'tourism'],
    description: 'Tourism promoting platform offering integrated travel packages directly tailored for users.',
    image: project2,
    link: 'https://trave-land.vercel.app/'
  },
  {
    id: 3,
    title: 'Prime Crust',
    category: 'Restaurant and Food',
    keywords: ['landing page', 'frontend', 'ecommerce', 'restaurant', 'food'],
    description: 'A robust e-commerce landing page designed exclusively for a pizza restaurant to showcase and sell food.',
    image: project3,
    link: 'https://prime-crust.vercel.app/-project3'
  },
  {
    id: 4,
    title: 'Tropical Waves',
    category: 'Travel and Tourism',
    keywords: ['landing page', 'frontend', 'ecommerce', 'travel', 'tourism', 'tour packages'],
    description: 'A comprehensive travel system pushing tourism packages through an elegant frontend landing interface.',
    image: project4,
    link: 'https://tropical-waves.vercel.app/'
  },
  {
    id: 5,
    title: 'Sri Lanka Classy Tours',
    category: 'Travel and Tourism',
    keywords: ['landing page', 'frontend', 'ecommerce', 'travel', 'tourism'],
    description: 'Premium platform advertising luxury tourism and dedicated travel packages across Sri Lanka.',
    image: project5,
    link: 'https://www.srilankaclassytours.com/'
  },
  {
    id: 6,
    title: 'Eco Team',
    category: 'Travel and Tourism',
    keywords: ['landing page', 'frontend', 'ecommerce', 'travel', 'tourism', 'ecotourism'],
    description: 'An eco-tourism specialized framework promoting sustainable travel packages and outdoor experiences.',
    image: project6,
    link: 'https://www.ecoteam.lk/'
  },
  {
    id: 7,
    title: 'Active Plus Fitness',
    category: 'Gym & Fitness',
    keywords: ['landing page', 'frontend', 'ecommerce', 'gym', 'fitness', 'healthy'],
    description: 'Dynamic frontend interface for a modern gym, focusing on healthy lifestyles and active fitness solutions.',
    image: project7,
    link: 'https://activeplusfitness.vercel.app'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <div className="pt-24 pb-20 relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-4"
            >
              Our Portfolio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Explore some of our recently delivered digital solutions across multiple industries, from e-commerce platforms to dedicated travel portals at scale.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group glass-panel rounded-3xl overflow-hidden flex flex-col border border-slate-700 hover:border-indigo-500/50 transition-colors"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply z-10 flex group-hover:bg-transparent transition-all duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-medium text-cyan-400 border border-slate-700/50">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.keywords.slice(0, 3).map((keyword, kIdx) => (
                      <span key={kIdx} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800/60 px-2 py-1 rounded border border-slate-700/50">
                        <Tag className="w-3 h-3 text-indigo-400" />
                        {keyword}
                      </span>
                    ))}
                    {project.keywords.length > 3 && (
                      <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-800/40 px-2 py-1 rounded border border-slate-700/30">
                        +{project.keywords.length - 3} more
                      </span>
                    )}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-indigo-500/25"
                  >
                    View Live Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
