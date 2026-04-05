import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: 'Mastering Framer Motion for Premium UI',
      excerpt: 'Learn how to create smooth, high-end animations that elevate your React applications.',
      date: 'May 12, 2024',
      author: 'David Chen',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop'
    },
    {
      title: 'The Future of E-Commerce in 2025',
      excerpt: 'Discover the emerging trends that are shaping the next generation of online shopping.',
      date: 'May 08, 2024',
      author: 'Sarah Jenkins',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Scaling React Apps for Global Success',
      excerpt: 'Architecture patterns and optimization tips for building performant digital products.',
      date: 'May 02, 2024',
      author: 'Michael Rodriguez',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-sm font-medium mb-4"
          >
            Our Insights
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Codix Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Insights, tutorials, and strategy from our team of industry experts and digital pioneers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="glass-panel group rounded-3xl overflow-hidden flex flex-col h-full border border-slate-800/50 hover:border-emerald-500/30 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-slate-700/50 uppercase tracking-widest">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">{blog.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">{blog.excerpt}</p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:text-emerald-400 transition-colors uppercase tracking-widest">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
