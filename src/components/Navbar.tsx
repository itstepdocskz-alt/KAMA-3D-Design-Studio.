import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../config/siteConfig';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.works, href: '#works' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const { url: waUrl, isConfigured: waConfigured } = getWhatsAppUrl(lang);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F0E8]/90 backdrop-blur-md border-b border-[#C5A985]/20 py-3.5 shadow-sm'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="font-heading text-2xl font-black tracking-widest text-[#171717] transition-colors group-hover:text-[#A77C57]">
              KAMA
            </span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-[#C5A985]/40" />
            <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#171717]/60">
              3D Designer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-body text-sm font-medium tracking-wide text-[#171717]/80 transition-colors hover:text-[#A77C57] relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: RU/EN Toggle & Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-[#C5A985]/30 bg-[#EDE8DE]/80 p-0.5">
              <button
                onClick={() => onLanguageChange('ru')}
                className={`rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider transition-all ${
                  lang === 'ru'
                    ? 'bg-[#171717] text-[#F4F0E8] shadow-sm'
                    : 'text-[#171717]/60 hover:text-[#171717]'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider transition-all ${
                  lang === 'en'
                    ? 'bg-[#171717] text-[#F4F0E8] shadow-sm'
                    : 'text-[#171717]/60 hover:text-[#171717]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Let's Talk Button */}
            <a
              href={waConfigured ? waUrl : '#contact'}
              target={waConfigured ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!waConfigured) {
                  e.preventDefault();
                  handleNavClick('#contact');
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] transition-all hover:bg-[#A77C57] hover:shadow-md"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Language & Hamburger */}
          <div className="flex items-center gap-3 sm:hidden">
            {/* Mobile Language Switcher */}
            <div className="flex items-center rounded-full border border-[#C5A985]/30 bg-[#EDE8DE]/80 p-0.5">
              <button
                onClick={() => onLanguageChange('ru')}
                className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold ${
                  lang === 'ru' ? 'bg-[#171717] text-white' : 'text-[#171717]/60'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold ${
                  lang === 'en' ? 'bg-[#171717] text-white' : 'text-[#171717]/60'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A985]/30 bg-white/70 text-[#171717]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#C5A985]/20 bg-[#F4F0E8]/98 backdrop-blur-lg px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-heading text-lg font-semibold tracking-wide text-[#171717] hover:text-[#A77C57] py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#C5A985]/20">
              <a
                href={waConfigured ? waUrl : '#contact'}
                target={waConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!waConfigured) {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] py-3 text-sm font-semibold uppercase tracking-wider text-[#F4F0E8]"
              >
                <span>{t.nav.letsTalk}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
