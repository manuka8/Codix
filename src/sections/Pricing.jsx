import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Package A',
    price: 'Rs.35,000',
    description: 'Wordpress website for businesses getting started.',
    features: [
      'Completed web development',
      'Responsive design',
      'SEO optimization',
      'Free Facebook page management (6 months)',
      'Any number of pages',
      'Use Wordpress',
      'Free Domain for one year',
      'Free Hosting for one year',
      'Free $10 boosting',
      '1 Year free maintenance'
    ]
  },
  {
    name: 'Package B',
    price: 'Rs.35,000',
    description: 'Modern React website for high-performance needs.',
    features: [
      'Completed web development',
      'Responsive design',
      'SEO optimization',
      'Any number of pages',
      'Use React',
      'Free Domain for one year',
      'Free Facebook page management (6 months)',
      'Free Hosting for 2 months',
      'Free $10 boosting',
      '1 Year free maintenance'
    ]
  },
  {
    name: 'Package C',
    price: 'Rs.55,000',
    description: 'Full-stack React solution with backend capabilities.',
    isPopular: true,
    features: [
      'Completed web development with backend',
      'Professional Admin dashboard',
      'Responsive design',
      'SEO optimization',
      'Any number of pages',
      'Use React',
      'Free Facebook page management (6 months)',
      'Free Hosting for 2 months',
      'Free $10 boosting',
      '1 Year free maintenance'
    ]
  },
  {
    name: 'Package D',
    price: 'Rs.65,000',
    description: 'Standalone Mobile App Development.',
    features: [
      'Mobile App Development',
      'Responsive design',
      'SEO optimization',
      'Google Play integration',
      'Use React Native',
      'Free Domain for one year',
      'Free Facebook page management (6 months)',
      'Free Hosting for 2 months',
      'Free $10 Facebook boosting',
      '1 Year free maintenance'
    ]
  },
  {
    name: 'Package E',
    price: 'Rs.85,000',
    description: 'Complete mobile app ecosystem with portals.',
    features: [
      'Mobile App Development with landing page & admin portal',
      'Responsive design',
      'SEO optimization',
      'Google Play integration',
      'Use React Native',
      'Free Domain for one year',
      'Free Facebook page management (6 months)',
      'Free Hosting for 2 months',
      'Free $10 Facebook boosting',
      '1 Year free maintenance'
    ]
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-pink-400 text-sm font-medium mb-4"
          >
            Flexible Plans
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Clear & Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Choose the perfect package tailored to your exact needs. From simple websites to fully integrated mobile applications.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`glass-panel p-8 rounded-3xl relative flex flex-col ${pkg.isPopular ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10' : ''}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-3.5 rounded-xl text-center font-medium transition-all ${pkg.isPopular ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}
              >
                Choose {pkg.name}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Package CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass-panel p-8 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-pink-500/20 bg-gradient-to-r from-slate-900 to-indigo-900/20"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need something different?</h3>
            <p className="text-slate-400">We offer customized packages tailored exclusively to your business requirements. Let's discuss your vision.</p>
          </div>
          <a shrink-0 
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors shadow-xl whitespace-nowrap"
          >
            Contact Us for Custom Packages
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
