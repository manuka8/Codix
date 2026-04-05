import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import Pricing from './sections/Pricing';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-50 w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
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
