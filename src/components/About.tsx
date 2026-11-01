import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { User, Camera, Sparkles, Check, Compass, Layers } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];
  const isRu = lang === 'ru';

  // Optional author photo URL (empty by default, ready for Kamali)
  const authorPhotoUrl = '';

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#EDE8DE]/50 border-t border-[#C5A985]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 -z-10 h-80 w-80 rounded-full bg-[#C5A985]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait / Visual Place (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luxury Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-[#C5A985]/40 bg-[#171717] p-2.5 shadow-xl">
                {/* Viewfinder crosshairs */}
                <div className="absolute top-5 left-5 z-20 font-mono text-[10px] text-[#C5A985]/70 tracking-widest uppercase">
                  +KAMALI_ALSHAROV
                </div>
                <div className="absolute bottom-5 right-5 z-20 font-mono text-[10px] text-[#C5A985]/70 tracking-widest uppercase">
                  3D_VISUALIZER
                </div>

                {authorPhotoUrl ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                    <img
                      src={authorPhotoUrl}
                      alt="Kamali Alsharov"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  /* High-end Minimalist Portrait Placeholder */
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#1C1C1C] flex flex-col items-center justify-center p-8 text-center bg-grid-subtle-dark">
                    {/* Ambient light ring */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C5A985]/5 to-[#A77C57]/15 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#C5A985]/40 bg-[#252525] text-[#C5A985] shadow-inner">
                        <User className="h-10 w-10" />
                      </div>

                      <span className="font-mono text-xs uppercase tracking-widest text-[#C5A985]">
                        {isRu ? 'Фото автора' : 'Author Portrait'}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-white mt-1">
                        Kamali Alsharov
                      </h4>
                      <p className="mt-3 text-xs text-[#F4F0E8]/60 max-w-[240px] leading-relaxed">
                        {t.about.photoPlaceholder}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-[#C5A985]">
                        <Camera className="h-3 w-3" />
                        <span>{t.about.photoHint}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative side accent bar */}
              <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 -z-10 h-3/4 w-8 rounded-2xl bg-[#C5A985]/20 blur-sm" />
            </div>
          </div>

          {/* Right Column: Editorial Bio & Values (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A77C57]">
                {t.about.sectionBadge}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
              {t.about.title}
            </h2>

            <p className="mt-2 font-mono text-sm uppercase tracking-wider text-[#A77C57] font-semibold">
              {t.about.role}
            </p>

            {/* Authentic Bio Text as requested */}
            <div className="mt-6 relative pl-6 border-l-2 border-[#A77C57]">
              <p className="text-lg sm:text-xl text-[#171717]/85 font-normal leading-relaxed">
                «{t.about.text}»
              </p>
            </div>

            {/* Principles Cards */}
            <div className="mt-10">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-4">
                {t.about.principlesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.about.principles.map((pr, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#C5A985]/20 bg-[#F4F0E8] p-5 transition-all hover:border-[#C5A985]/50 hover:shadow-sm"
                  >
                    <span className="font-mono text-xs font-bold text-[#A77C57] block mb-2">
                      0{idx + 1} //
                    </span>
                    <h4 className="font-heading text-sm font-bold text-[#171717] mb-1.5">
                      {pr.title}
                    </h4>
                    <p className="text-xs text-[#171717]/70 leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
