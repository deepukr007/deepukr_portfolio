
import React from 'react';
import { HOBBIES } from '../constants';
import { Mountain, Utensils, Activity, Heart } from 'lucide-react';

const Hobbies: React.FC = () => {
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'mountain': return Mountain;
      case 'food': return Utensils;
      case 'running': return Activity;
      default: return Heart;
    }
  };

  const getColor = (iconName: string) => {
    switch(iconName) {
      case 'mountain': return 'text-pastel-green bg-pastel-green/10 group-hover:border-pastel-green';
      case 'food': return 'text-pastel-yellow bg-pastel-yellow/10 group-hover:border-pastel-yellow';
      case 'running': return 'text-pastel-pink bg-pastel-pink/10 group-hover:border-pastel-pink';
      default: return 'text-pastel-purple bg-pastel-purple/10 group-hover:border-pastel-purple';
    }
  };

  return (
    <section id="hobbies" className="py-24 border-t border-pastel-purple/10 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-bg-main/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-display font-bold text-text-main flex items-center gap-3">
            Hobbies <span className="text-pastel-purple">&</span> Interests
          </h2>
          <p className="text-text-muted mt-4 max-w-lg">
            Beyond the code and models, here's how I spend my time recharging and exploring the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOBBIES.map((hobby, index) => {
            const Icon = getIcon(hobby.icon);
            const colorClass = getColor(hobby.icon);
            
            return (
              <div 
                key={hobby.name}
                className={`group relative bg-bg-main border border-border-light rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:bg-white animate-on-scroll`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${colorClass.split(' ').slice(0, 2).join(' ')}`}>
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-display font-bold text-text-main mb-2">{hobby.name}</h3>
                <p className="text-text-muted text-sm">{hobby.description}</p>

                {/* Decorative Border Effect on Hover */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-colors duration-500 ${colorClass.split(' ').pop()}`}></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hobbies;
