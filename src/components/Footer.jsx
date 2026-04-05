import React from 'react';
import { Code2, Mail, createLucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Github = createLucideIcon('Github', [
  ['path', { d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.26 1.23-.26 1.87v4', key: 'github-path-1' }]
]);

const Twitter = createLucideIcon('Twitter', [
  ['path', { d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z', key: 'twitter-path-1' }]
]);

const Linkedin = createLucideIcon('Linkedin', [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', key: 'linkedin-path-1' }],
  ['rect', { x: '2', y: '9', width: '4', height: '12', key: 'linkedin-rect-1' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: 'linkedin-circle-1' }]
]);

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 border-r border-slate-800/50 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight text-white">Codix</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming innovative ideas into powerful, scalable digital products. Your trusted partner in web development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">SEO & Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link to="/#contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Codix Web Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/sitemap" className="hover:text-slate-300">Sitemap</Link>
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
