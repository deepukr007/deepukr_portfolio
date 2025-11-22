
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import CVBackground from './components/CVBackground';

const App: React.FC = () => {
  
  // Global Scroll Observer for Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-main text-text-main selection:bg-pastel-pink selection:text-white overflow-x-hidden">
      {/* 1. Base Grid Pattern (Subtle texture) - Reduced opacity for readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.15]"></div>
      
      {/* 2. Pastel Ambient Orbs (Soft lighting) - Reduced opacity */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-pastel-purple opacity-[0.07] blur-[120px] rounded-full pointer-events-none z-0 animate-blob mix-blend-multiply"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-pastel-mint opacity-[0.07] blur-[120px] rounded-full pointer-events-none z-0 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      
      {/* 3. CV/ML Themed Background (Objects, Masks, Lines) */}
      <CVBackground />

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Languages />
          <Hobbies />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
