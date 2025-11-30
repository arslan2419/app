import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and hide Calendly widget
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
      // Hide Calendly widget when menu is open to prevent overlap
      const calendlyWidgets = document.querySelectorAll('[data-calendly-widget], .calendly-badge-widget, a[href*="calendly.com"]');
      calendlyWidgets.forEach(widget => {
        if (widget) {
          widget.style.display = 'none';
          widget.style.zIndex = '1';
        }
      });
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
      // Show Calendly widget when menu is closed
      const calendlyWidgets = document.querySelectorAll('[data-calendly-widget], .calendly-badge-widget, a[href*="calendly.com"]');
      calendlyWidgets.forEach(widget => {
        if (widget && !widget.hasAttribute('data-hidden')) {
          widget.style.display = '';
          widget.style.zIndex = '';
        }
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-indigo-500/20 shadow-lg shadow-indigo-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent cursor-pointer z-50 relative"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              ZH Solutions
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white"
              >
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 rounded-lg text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* OLD MOBILE MENU DESIGN - COMMENTED OUT */}
      {/* <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-violet-950/30 to-slate-950/50 transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-full max-w-sm bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-l border-indigo-500/20 shadow-2xl shadow-indigo-500/20 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-indigo-500/20">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Menu
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-500/20 transition-all duration-300"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-2">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`group relative px-6 py-4 rounded-xl text-left text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-violet-600/20 border border-transparent hover:border-indigo-500/30 transition-all duration-300 transform hover:translate-x-2 hover:scale-[1.02] ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <span className="relative z-10 text-lg font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {link.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-violet-600/0 group-hover:from-indigo-600/10 group-hover:to-violet-600/10 rounded-xl transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button
            onClick={() => scrollToSection('contact')}
            className={`w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-6 text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50 + 100}ms` : '0ms'
            }}
          >
            Get a Quote
          </Button>
        </div>

        <div className="absolute top-1/4 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2" />
      </div> */}

      {/* NEW MODERN MOBILE MENU */}
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-700 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Animated Backdrop with Blur */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/90 to-slate-950 backdrop-blur-2xl transition-opacity duration-700 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Animated Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-purple-600/20 transition-opacity duration-700 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Modern Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[101] md:hidden w-full max-w-[85vw] sm:max-w-md bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 backdrop-blur-2xl border-r border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.3)_1px,transparent_0)] [background-size:24px_24px]" />
        </div>

        {/* Header Section with Brand */}
        <div className="relative flex items-center justify-between p-6 border-b border-indigo-500/20 bg-gradient-to-r from-indigo-600/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              ZH Solutions
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-indigo-500/20 border border-transparent hover:border-indigo-500/30 transition-all duration-300 transform hover:rotate-90 hover:scale-110"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links with Modern Design */}
        <nav className="relative flex flex-col p-6 gap-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`group relative px-5 py-4 rounded-2xl text-left overflow-hidden transition-all duration-500 ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 80 + 100}ms` : '0ms'
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-violet-600/0 to-purple-600/0 group-hover:from-indigo-600/20 group-hover:via-violet-600/15 group-hover:to-purple-600/20 rounded-2xl transition-all duration-500" />
              
              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/40 rounded-2xl transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center group-hover:from-indigo-600/40 group-hover:to-violet-600/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-violet-400 transition-colors duration-300" />
                </div>
                
                {/* Link Text */}
                <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                
                {/* Arrow Icon */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
            </button>
          ))}
        </nav>

        {/* CTA Button Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent border-t border-indigo-500/20">
          <Button
            onClick={() => scrollToSection('contact')}
            className={`w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:via-violet-500 hover:to-purple-500 text-white py-6 text-lg font-bold shadow-2xl shadow-indigo-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-indigo-500/60 relative overflow-hidden group ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 80 + 200}ms` : '0ms'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get a Quote
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className={`absolute top-1/3 -left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl transition-opacity duration-1000 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl transition-opacity duration-1000 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '300ms' }} />
      </div>
    </>
  );
};

export default Header;
