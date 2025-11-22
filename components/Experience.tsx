
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Bot, ScanEye, Database, Code2, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {

  // Helper to determine icon and theme based on role/company content
  const getTheme = (role: string, company: string) => {
    const combined = (role + company).toLowerCase();
    
    if (combined.includes('robot') || combined.includes('reutlingen')) {
      return { 
        icon: Bot, 
        color: 'text-pastel-pink', 
        bg: 'bg-pastel-pink/10', 
        border: 'group-hover:border-pastel-pink',
        shadow: 'group-hover:shadow-pastel-pink/10'
      };
    }
    if (combined.includes('iff') || combined.includes('vision') || combined.includes('detection')) {
      return { 
        icon: ScanEye, 
        color: 'text-pastel-mint', 
        bg: 'bg-pastel-mint/10', 
        border: 'group-hover:border-pastel-mint',
        shadow: 'group-hover:shadow-pastel-mint/10'
      };
    }
    if (combined.includes('iwm') || combined.includes('api') || combined.includes('data')) {
      return { 
        icon: Database, 
        color: 'text-pastel-blue', 
        bg: 'bg-pastel-blue/10', 
        border: 'group-hover:border-pastel-blue',
        shadow: 'group-hover:shadow-pastel-blue/10'
      };
    }
    // Default / Software Engineer
    return { 
      icon: Code2, 
      color: 'text-pastel-purple', 
      bg: 'bg-pastel-purple/10', 
      border: 'group-hover:border-pastel-purple',
      shadow: 'group-hover:shadow-pastel-purple/10'
    };
  };

  return (
    <section id="experience" className="py-24 border-t border-pastel-blue/10 bg-gradient-to-b from-white to-pastel-blue/5 relative overflow-hidden">
      {/* Background Pattern - Extremely Subtle */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Experience Column (Wider) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-display font-bold text-text-main mb-12 animate-on-scroll flex items-center gap-3">
              Work <span className="text-pastel-blue">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => {
                const theme = getTheme(job.role, job.company);
                const Icon = theme.icon;

                return (
                  <div 
                    key={job.id} 
                    className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-border-light shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg animate-on-scroll ${theme.border} ${theme.shadow}`}
                    style={{transitionDelay: `${index * 100}ms`}}
                  >
                    {/* Subtle Watermark Icon - Reduced Size & Opacity */}
                    <div className={`absolute -bottom-4 -right-4 opacity-[0.015] transform rotate-12 group-hover:scale-105 transition-transform duration-700 pointer-events-none overflow-hidden`}>
                      <Icon size={140} className={theme.color} />
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 relative z-10">
                      <div className="flex gap-4">
                        {/* Icon Box */}
                        <div className={`w-12 h-12 rounded-xl ${theme.bg} flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
                          <Icon size={24} className={theme.color} />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-display font-bold text-text-main leading-tight group-hover:text-accent-DEFAULT transition-colors duration-300">
                            {job.role}
                          </h3>
                          <div className="font-medium text-text-muted mt-1">{job.company}</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 sm:mt-0 flex flex-col items-start sm:items-end gap-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-hover text-xs font-medium text-text-muted border border-border-light/50">
                          <Calendar size={12} /> {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-text-dim pl-1">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-3 mb-6 relative z-10">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-text-muted text-sm leading-relaxed pl-4 border-l-2 border-border-light group-hover:border-accent-light/30 transition-colors duration-300">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {job.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className={`px-2.5 py-1 bg-white border border-border-light rounded-lg text-xs font-medium text-text-muted shadow-sm group-hover:border-accent-light/20 transition-colors duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Column (Narrower) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-display font-bold text-text-main mb-12 animate-on-scroll delay-200 flex items-center gap-3">
              Education <span className="text-pastel-pink">&</span> Awards
            </h2>
            
            <div className="space-y-6 sticky top-24">
              {EDUCATION.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-border-light hover:border-pastel-pink hover:shadow-lg hover:shadow-pastel-pink/5 transition-all duration-500 hover:-translate-y-1 animate-on-scroll overflow-hidden"
                  style={{transitionDelay: `${(index + 2) * 100}ms`}}
                >
                  {/* Watermark - Reduced Size & Opacity */}
                  <GraduationCap size={100} className="absolute -right-4 -bottom-4 text-pastel-pink opacity-[0.015] transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

                  <div className="flex gap-4 mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-pastel-pink/10 flex items-center justify-center text-pastel-pink flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-text-main leading-tight group-hover:text-pastel-pink transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="text-text-muted text-sm mt-1 font-medium">{edu.institution}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-text-dim relative z-10">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {edu.location}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-border-light relative z-10">
                    <div className="inline-block bg-pastel-pink/10 text-pastel-pink px-3 py-1 rounded-full text-xs font-bold mb-3">
                      Grade: {edu.grade}
                    </div>
                    {edu.details.map((detail, i) => (
                      <p key={i} className="text-sm text-text-muted leading-relaxed">{detail}</p>
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

export default Experience;
