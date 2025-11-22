import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-pastel-purple/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-main mb-6">
            Selected <span className="text-pastel-green">Projects</span>
          </h2>
          <p className="text-text-muted">
            A selection of work demonstrating capabilities in Large Language Models, Computer Vision, and System Architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-white border border-border-light p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-pastel-green/20 hover:-translate-y-2 animate-on-scroll ${index % 2 === 0 ? 'delay-100' : 'delay-200'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-text-main mb-1 group-hover:text-pastel-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-pastel-green bg-pastel-green/10 inline-block px-2 py-1 rounded mt-1">{project.subtitle}</p>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-text-dim hover:text-pastel-green transition-colors bg-bg-hover p-2 rounded-full hover:bg-pastel-green/20 hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <ul className="space-y-2 mb-8">
                {project.points.map((point, i) => (
                  <li key={i} className="text-text-muted text-sm leading-relaxed flex items-start">
                    <span className="mr-2 text-pastel-green mt-1.5 w-1.5 h-1.5 bg-pastel-green rounded-full flex-shrink-0 group-hover:bg-green-400 transition-colors"></span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-light/50">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-bg-hover rounded-full text-xs text-text-muted font-medium border border-border-light/50 group-hover:border-pastel-green/30 group-hover:bg-pastel-green/5 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;