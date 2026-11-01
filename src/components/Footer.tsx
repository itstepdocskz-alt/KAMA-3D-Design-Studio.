import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ArrowUp, Box } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.works, href: '#works' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#C5A985]/20 bg-[#141414] text-[#F4F0E8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-black tracking-widest text-white">
                KAMA
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#C5A985]">
                Kamali Alsharov
              </span>
            </div>
            <p className="mt-2 text-xs text-white/50 max-w-sm font-light">
              {lang === 'ru'
                ? '3D-моделирование, архитектурная визуализация, интерьерный дизайн и транспорт.'
                : '3D modeling, architectural visualization, interior design, and automotive.'}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-white/70 transition-colors hover:text-[#C5A985]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-white/80 transition-all hover:border-[#C5A985] hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} KAMA — Kamali Alsharov. {t.footer.copyright}
          </div>
          <div className="flex items-center gap-2">
            <span>Blender • SketchUp • Photoshop • Illustrator</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
