import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Privacy Policy</h1>
          
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>Welcome to Codix Web Solutions. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect personal information such as your name, email address, and phone number when you contact us or subscribe to our newsletter. We also collect non-personal data like browser type and IP addresses for analytical purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>Your information is used to provide and improve our services, communicate with you, and send updates. We do not sell or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
              <p>Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, though some features may not function correctly as a result.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@codix.com" className="text-indigo-400 hover:text-indigo-300">privacy@codix.com</a>.</p>
            </section>
          </div>
          
          <p className="mt-12 text-sm text-slate-500">Last updated: May 2024</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
