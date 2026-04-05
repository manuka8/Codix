import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default HomePage;
