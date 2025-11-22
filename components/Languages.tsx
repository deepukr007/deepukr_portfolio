import React from 'react';
import { SPOKEN_LANGUAGES } from '../constants';
import { Globe } from 'lucide-react';

const Languages: React.FC = () => {
  return (
    <section className="py-16 border-t border-pastel-green/10 bg-gradient-to-b from-bg-main to-pastel-mint/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center animate-on-scroll">
          
          <div className="w-12 h-12 bg-pastel-mint/20 rounded-full flex items-center justify-center text-pastel-mint mb-4 animate-float">
            <Globe size={24} className="text-teal-400" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-main mb-8">
            Languages Spoken
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {SPOKEN_LANGUAGES.skills.map((lang, index) => (
              <div 
                key={lang} 
                className="relative group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-mint to-pastel-blue opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white border border-white/50 px-8 py-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="font-display font-medium text-text-main text-lg group-hover:text-teal-500 transition-colors">
                    {lang}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Languages;