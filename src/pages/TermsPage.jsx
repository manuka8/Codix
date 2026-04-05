import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Terms & Conditions</h1>
          
          <div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
            <p>Welcome to Codix. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Codix if you do not agree to all of the terms and conditions stated on this page.</p>
            
            <section>
              <h2 className="text-lg font-semibold text-white mb-2">1. Intellectual Property</h2>
              <p>Unless otherwise stated, Codix and/or its licensors own the intellectual property rights for all material on Codix. All intellectual property rights are reserved.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-2">2. User Responsibilities</h2>
              <p>You must not republish material from Codix, sell, rent, or sub-license material from Codix, or reproduce, duplicate, or copy material from Codix without our express written consent.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-2">3. Service Provision</h2>
              <p>We reserve the right to modify or discontinue our services at any time without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-2">4. Limitation of Liability</h2>
              <p>In no event shall Codix be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Codix.</p>
            </section>
          </div>
          
          <p className="mt-12 text-sm text-slate-500 italic">By using this site, you agree to these terms.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
