import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          
          {/* Intro Tag */}
          <span className="inline-block py-1.5 px-5 rounded-full bg-white border border-pastel-purple/30 text-accent-DEFAULT text-sm font-semibold mb-8 animate-fade-in-up shadow-sm">
            AI/ML Engineer & Researcher
          </span>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-main leading-tight tracking-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Deepu <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-DEFAULT via-pastel-pink to-pastel-blue">Krishnareddy</span>
          </h1>
          
          {/* Summary */}
          <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {CONTACT_INFO.summary}
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a 
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-text-main text-white rounded-full font-medium hover:bg-accent-DEFAULT hover:text-white hover:shadow-xl hover:shadow-accent-DEFAULT/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4 ml-0 sm:ml-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-text-muted hover:text-white hover:bg-pastel-pink rounded-full transition-all hover:scale-110 transform duration-200 hover:shadow-lg hover:shadow-pastel-pink/30 border border-transparent hover:border-pastel-pink"
                  aria-label={link.platform}
                >
                  {link.platform === 'GitHub' && <Github size={22} />}
                  {link.platform === 'LinkedIn' && <Linkedin size={22} />}
                  {link.platform === 'Email' && <Mail size={22} />}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;