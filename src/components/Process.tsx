import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MessageSquare, LayoutTemplate, Box, CheckCircle } from 'lucide-react';

interface ProcessProps {
  lang: Language;
}

export const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang];

  const icons = [
    <MessageSquare className="h-5 w-5 text-[#A77C57]" />,
    <LayoutTemplate className="h-5 w-5 text-[#A77C57]" />,
    <Box className="h-5 w-5 text-[#A77C57]" />,
    <CheckCircle className="h-5 w-5 text-[#A77C57]" />,
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#F4F0E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A77C57]">
              {t.process.sectionBadge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {t.process.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#171717]/70">
            {t.process.subtitle}
          </p>
        </div>

        {/* Work Process: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A985]/40 to-transparent -translate-y-12 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.stages.map((stage, idx) => (
              <div
                key={stage.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/70 p-6 md:p-7 transition-all duration-300 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-lg"
              >
                <div>
                  {/* Top Bar with Step Index */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-[#A77C57]">
                      {stage.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#C5A985]/20 shadow-sm transition-colors group-hover:bg-[#171717] group-hover:text-white">
                      {icons[idx]}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-heading text-lg font-bold text-[#171717] mb-2">
                    {stage.title}
                  </h3>

                  {/* Stage Summary */}
                  <p className="text-xs text-[#171717]/75 leading-relaxed mb-4">
                    {stage.summary}
                  </p>
                </div>

                {/* Sub-steps */}
                <div className="pt-4 border-t border-[#C5A985]/15 space-y-1.5">
                  {stage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-[#171717]/70">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#A77C57]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
