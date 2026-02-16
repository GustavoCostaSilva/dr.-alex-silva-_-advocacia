import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const HeaderPill: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'O Escritório', href: '#about' },
    { label: 'Atuação', href: '#actions' },
    { label: 'Contato', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className={`
          relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ease-in-out
          ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md border border-brand-500/20 shadow-2xl w-full max-w-2xl' : 'bg-transparent w-full max-w-4xl'}
        `}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-serif text-xl font-bold tracking-tighter text-white flex items-center gap-1"
        >
          AS<span className="text-brand-500">.</span> <span className="text-xs font-sans font-light tracking-widest text-zinc-400 ml-2 hidden sm:block">ADVOCACIA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <a 
          href="#actions"
          onClick={(e) => handleNavClick(e, '#actions')}
          className="hidden md:block px-5 py-2 text-xs font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-colors shadow-[0_0_15px_rgba(180,129,63,0.3)]"
        >
          Área do Cliente
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 flex flex-col space-y-2 shadow-2xl md:hidden animate-fade-in-up origin-top">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 font-medium px-4 py-3 rounded-lg transition-all flex items-center justify-between group"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                <span className="opacity-0 group-hover:opacity-100 text-brand-500 transition-opacity">→</span>
              </a>
            ))}
            <div className="h-px bg-zinc-800 my-2"></div>
            <a 
              href="#actions"
              onClick={(e) => handleNavClick(e, '#actions')}
              className="text-center font-semibold text-zinc-900 bg-brand-500 hover:bg-brand-400 px-4 py-3 rounded-lg transition-colors"
            >
              Área do Cliente
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};