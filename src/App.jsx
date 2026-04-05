import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import Pricing from './sections/Pricing';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SitemapPage from './pages/SitemapPage';
import CareersPage from './pages/CareersPage';
import BlogsPage from './pages/BlogsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/pricing" element={
              <div className="pt-20 lg:pt-24">
                <Pricing />
              </div>
             } />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
