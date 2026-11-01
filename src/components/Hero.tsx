import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../config/siteConfig';
import { ArrowDown, ArrowUpRight, Box, Compass, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];
  const isRu = lang === 'ru';
  const { url: waUrl, isConfigured: waConfigured } = getWhatsAppUrl(lang);

  // Optional custom hero image if Kamali sets one
  const [heroCustomImage] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#C5A985]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-[#A77C57]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Powerhouse (7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Author Identification Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#A77C57] animate-ping" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]/80">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08]">
              {isRu ? (
                <>
                  Создаю идеи в <br />
                  <span className="text-[#A77C57] underline decoration-[#C5A985]/40 underline-offset-8">
                    трёх измерениях
                  </span>
                </>
              ) : (
                <>
                  Turning Ideas Into <br />
                  <span className="text-[#A77C57] underline decoration-[#C5A985]/40 underline-offset-8">
                    3D Reality.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-[#171717]/75 max-w-xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Primary: Explore Works (Smooth scroll to gallery) */}
              <button
                onClick={() => scrollToSection('works')}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#171717] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wider text-[#F4F0E8] transition-all duration-300 hover:bg-[#A77C57] hover:shadow-xl hover:shadow-[#171717]/10 cursor-pointer"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </button>

              {/* Secondary: Let's talk / Discuss Project */}
              <a
                href={waConfigured ? waUrl : '#contact'}
                target={waConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!waConfigured) {
                    e.preventDefault();
                    scrollToSection('contact');
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#171717]/30 bg-transparent px-7 py-4 font-body text-sm font-semibold uppercase tracking-wider text-[#171717] transition-all duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-[#F4F0E8]"
              >
                <span>{t.hero.contactBtn}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Specialization Tags Row */}
            <div className="mt-14 pt-8 border-t border-[#C5A985]/20 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-[#A77C57]">
                {isRu ? 'Фокус:' : 'Core Focus:'}
              </span>
              {t.hero.specList.map((spec, i) => (
                <div key={spec} className="flex items-center gap-2 text-xs font-medium text-[#171717]/80">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-[#C5A985]" />}
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Hero Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luxury Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-[#C5A985]/40 bg-[#171717] p-2 shadow-2xl shadow-[#171717]/15">
                {/* Tech Blueprint Corner Badges */}
                <div className="absolute top-5 left-5 z-20 font-mono text-[10px] text-[#C5A985]/80 tracking-widest uppercase">
                  RENDER_VIEWPORT // 01
                </div>
                <div className="absolute top-5 right-5 z-20 font-mono text-[10px] text-[#C5A985]/80 tracking-widest uppercase">
                  PBR_MATERIAL_LAB
                </div>

                {heroCustomImage ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <img
                      src={heroCustomImage}
                      alt="Kamali Alsharov 3D Visual"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  /* Editorial Architectural 3D Composition */
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1E1E1E] flex flex-col justify-between p-6 sm:p-8 bg-grid-subtle-dark">
                    {/* Atmospheric Lighting Gradient */}
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#C5A985]/25 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#A77C57]/20 blur-3xl" />

                    {/* Architectural 3D Vector Isometric Sculpture Artwork */}
                    <div className="relative my-auto flex items-center justify-center py-6">
                      <svg
                        className="w-full max-w-[280px] h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                        viewBox="0 0 320 320"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Soft volumetric glow */}
                        <circle cx="160" cy="160" r="110" fill="url(#heroGlow)" opacity="0.15" />

                        {/* Architectural Pedestal / Plinth */}
                        <polygon
                          points="60,240 160,285 260,240 160,195"
                          fill="#2A2A2A"
                          stroke="#C5A985"
                          strokeWidth="1"
                        />
                        <polygon
                          points="60,240 160,285 160,305 60,260"
                          fill="#222222"
                          stroke="#C5A985"
                          strokeWidth="0.8"
                        />
                        <polygon
                          points="260,240 160,285 160,305 260,260"
                          fill="#1A1A1A"
                          stroke="#C5A985"
                          strokeWidth="0.8"
                        />

                        {/* Monolithic Archway (Architectural Form) */}
                        <path
                          d="M100 210 L100 110 Q100 60 160 60 Q220 60 220 110 L220 210"
                          stroke="#C5A985"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M120 205 L120 120 Q120 85 160 85 Q200 85 200 120 L200 205"
                          stroke="#A77C57"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          fill="none"
                        />

                        {/* Floating Sphere (Geometric Precision) */}
                        <circle cx="160" cy="140" r="38" fill="url(#sphereGradient)" />
                        <ellipse cx="160" cy="188" rx="28" ry="6" fill="#0A0A0A" opacity="0.6" />

                        {/* Light Ray Accents */}
                        <line x1="160" y1="40" x2="160" y2="70" stroke="#C5A985" strokeWidth="1" strokeDasharray="2 2" />
                        <circle cx="160" cy="35" r="3" fill="#C5A985" />

                        <defs>
                          <radialGradient id="sphereGradient" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#EDE8DE" />
                            <stop offset="45%" stopColor="#C5A985" />
                            <stop offset="85%" stopColor="#5E432A" />
                            <stop offset="100%" stopColor="#1A1510" />
                          </radialGradient>
                          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#C5A985" />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Bottom Info Plate */}
                    <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[#C5A985]">
                            {t.hero.heroVisualTitle}
                          </div>
                          <div className="font-heading text-sm font-semibold text-white mt-0.5">
                            Kamali Alsharov
                          </div>
                        </div>
                        <span className="font-mono text-xs text-white/50">
                          CYCLES 4.2
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#F4F0E8]/70 leading-relaxed">
                        {t.hero.heroVisualSubtitle}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-[#C5A985]/30 bg-[#F4F0E8] p-4 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#171717] text-[#C5A985]">
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#A77C57]">
                    KAMA 3D STUDIO
                  </div>
                  <div className="font-heading text-xs font-bold text-[#171717]">
                    {t.hero.statusAvailable}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
