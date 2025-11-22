import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b animate-fade-in-down ${isScrolled ? 'bg-white/80 backdrop-blur-md border-pastel-purple/10 shadow-sm shadow-pastel-purple/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold tracking-tight text-text-main hover:text-pastel-purple transition-colors relative group">
            Deepu<span className="text-pastel-purple group-hover:animate-ping">.</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-pastel-purple transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pastel-purple after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="text-sm font-medium px-5 py-2 rounded-full bg-text-main text-white hover:bg-pastel-purple hover:shadow-lg hover:shadow-pastel-purple/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-main focus:outline-none hover:bg-bg-hover rounded-md transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border-light shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium text-text-muted hover:text-pastel-purple hover:bg-pastel-purple/5 rounded-lg px-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-pastel-purple hover:bg-pastel-purple/10 rounded-lg px-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;