import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SoftwareProps {
  lang: Language;
}

export const Software: React.FC<SoftwareProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F4F0E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A77C57]">
              {t.software.sectionBadge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {t.software.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#171717]/70">
            {t.software.subtitle}
          </p>
        </div>

        {/* 4 Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Blender */}
          <div className="group relative rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/70 p-7 transition-all duration-300 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              {/* Blender Logo */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#171717] p-2.5 shadow-md">
                <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
                  {/* Blender iconic orange/blue shape */}
                  <circle cx="50" cy="58" r="24" fill="#EA7600" />
                  <circle cx="50" cy="58" r="11" fill="#225780" />
                  <ellipse cx="32" cy="30" rx="9" ry="16" transform="rotate(-30 32 30)" fill="#EA7600" />
                  <ellipse cx="68" cy="30" rx="9" ry="16" transform="rotate(30 68 30)" fill="#EA7600" />
                  <circle cx="50" cy="22" r="7" fill="#EA7600" />
                  <circle cx="50" cy="58" r="5" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A77C57]">
                3D // CORE
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
              Blender
            </h3>
            <p className="text-xs font-semibold text-[#A77C57] leading-snug mb-3">
              {t.software.tools[0].role}
            </p>
            <p className="text-xs text-[#171717]/70 leading-relaxed">
              {t.software.tools[0].description}
            </p>
          </div>

          {/* 2. SketchUp */}
          <div className="group relative rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/70 p-7 transition-all duration-300 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              {/* SketchUp Logo */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#171717] p-2.5 shadow-md">
                <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
                  {/* SketchUp iconic red architectural staircase cube */}
                  <rect x="18" y="18" width="64" height="64" rx="8" fill="#E6242B" />
                  {/* Stair steps lines */}
                  <path
                    d="M30 70 L30 54 L44 54 L44 38 L58 38 L58 22 L72 22 L72 70 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M30 70 L72 70 L72 22"
                    stroke="#C41C22"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A77C57]">
                ARCH // CAD
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
              SketchUp
            </h3>
            <p className="text-xs font-semibold text-[#A77C57] leading-snug mb-3">
              {t.software.tools[1].role}
            </p>
            <p className="text-xs text-[#171717]/70 leading-relaxed">
              {t.software.tools[1].description}
            </p>
          </div>

          {/* 3. Adobe Photoshop */}
          <div className="group relative rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/70 p-7 transition-all duration-300 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              {/* Photoshop Logo */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#001E36] p-2.5 shadow-md border border-[#31A8FF]/30">
                <span className="font-heading font-black text-2xl text-[#31A8FF] tracking-tighter">
                  Ps
                </span>
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A77C57]">
                POST // 2D
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
              Adobe Photoshop
            </h3>
            <p className="text-xs font-semibold text-[#A77C57] leading-snug mb-3">
              {t.software.tools[2].role}
            </p>
            <p className="text-xs text-[#171717]/70 leading-relaxed">
              {t.software.tools[2].description}
            </p>
          </div>

          {/* 4. Adobe Illustrator */}
          <div className="group relative rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/70 p-7 transition-all duration-300 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
              {/* Illustrator Logo */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#330000] p-2.5 shadow-md border border-[#FF9A00]/30">
                <span className="font-heading font-black text-2xl text-[#FF9A00] tracking-tighter">
                  Ai
                </span>
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A77C57]">
                VECTOR // CAD
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
              Adobe Illustrator
            </h3>
            <p className="text-xs font-semibold text-[#A77C57] leading-snug mb-3">
              {t.software.tools[3].role}
            </p>
            <p className="text-xs text-[#171717]/70 leading-relaxed">
              {t.software.tools[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
