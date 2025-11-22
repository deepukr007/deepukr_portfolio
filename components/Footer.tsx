import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-border-light bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-xl font-display font-bold text-text-main mb-6">Get In Touch</h2>
        
        <div className="flex justify-center gap-8 mb-8">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-accent-DEFAULT transition-colors text-sm font-medium hover:underline decoration-accent-light underline-offset-4"
            >
              {link.platform}
            </a>
          ))}
        </div>

        <div className="text-text-dim text-xs">
          <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;