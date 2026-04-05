import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Code, Search, Palette, Database, Shield } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Apps',
    description: 'Scalable, functional, and visually stunning web applications tailored to your business logic.',
    icon: <Code className="w-6 h-6" />,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive user interfaces and engaging user experiences drawn from deep research.',
    icon: <Palette className="w-6 h-6" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Robust online stores built with modern technologies to boost your sales and conversions.',
    icon: <MonitorSmartphone className="w-6 h-6" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    title: 'SEO & Marketing',
    description: 'Optimize your digital presence to rank higher and attract your target audience effectively.',
    icon: <Search className="w-6 h-6" />,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Backend Systems',
    description: 'Secure APIs, database architecture, and complex backend integration handling.',
    icon: <Database className="w-6 h-6" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Security & Maintenance',
    description: 'Ongoing support, updates, and robust security measures to protect your digital assets.',
    icon: <Shield className="w-6 h-6" />,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10'
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            From concept to deployment, we provide end-to-end digital services ensuring a premium experience and flawless performance across all platforms.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-8 rounded-2xl group flex flex-col items-start cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
