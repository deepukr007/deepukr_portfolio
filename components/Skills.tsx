import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-pastel-purple/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-pink/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Header */}
          <div className="md:w-1/3 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-4">
              Technical <span className="text-pastel-purple">Expertise</span>
            </h2>
            <p className="text-text-muted leading-relaxed">
              A comprehensive toolkit spanning machine learning pipelines, generative AI, and full-stack development.
            </p>
          </div>

          {/* Skills Container */}
          <div className="md:w-2/3 flex flex-col gap-12">
            
            {/* Technical Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {SKILLS.map((category, idx) => (
                <div 
                  key={category.name} 
                  className={`animate-on-scroll ${idx % 2 === 0 ? 'delay-100' : 'delay-200'}`}
                >
                  <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4 border-b-2 border-pastel-blue/30 pb-2 inline-block">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-white border border-border-light rounded-lg text-sm text-text-muted shadow-sm hover:border-pastel-purple hover:text-pastel-purple hover:bg-pastel-purple/5 hover:shadow-md hover:shadow-pastel-purple/10 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;