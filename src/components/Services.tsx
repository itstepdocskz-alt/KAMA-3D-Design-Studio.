import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../config/siteConfig';
import { ArrowUpRight, Box, Building2, Home, Check } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang];
  const isRu = lang === 'ru';

  const icons = [
    <Box className="h-6 w-6 text-[#A77C57]" />,
    <Building2 className="h-6 w-6 text-[#A77C57]" />,
    <Home className="h-6 w-6 text-[#A77C57]" />,
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#EDE8DE]/40 border-t border-[#C5A985]/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A77C57]">
              {t.services.sectionBadge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#171717]/70">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.services.list.map((service, index) => {
            const serviceMessage = isRu
              ? `Здравствуйте, Камали! Я хочу обсудить услугу "${service.title}".`
              : `Hello Kamali! I would like to discuss the service "${service.title}".`;

            const { url: waUrl, isConfigured: waConfigured } = getWhatsAppUrl(lang, serviceMessage);

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#C5A985]/25 bg-[#F4F0E8] p-8 transition-all duration-300 hover:border-[#C5A985]/70 hover:shadow-xl hover:shadow-[#171717]/5"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#C5A985]/20">
                    <span className="font-mono text-2xl font-black text-[#A77C57]">
                      {service.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE8DE] border border-[#C5A985]/20 transition-colors group-hover:bg-[#171717] group-hover:text-white">
                      {icons[index]}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-[#171717]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#A77C57] leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#171717]/75 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2 pt-6 border-t border-[#C5A985]/15">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#171717]/80">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A77C57]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Software Badges & WhatsApp Button */}
                <div className="mt-8 pt-6 border-t border-[#C5A985]/15">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.software.map((sw) => (
                      <span
                        key={sw}
                        className="font-mono text-[10px] uppercase tracking-wider text-[#171717]/60 bg-[#EDE8DE] px-2 py-0.5 rounded border border-[#C5A985]/20"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <a
                    href={waConfigured ? waUrl : '#contact'}
                    target={waConfigured ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!waConfigured) {
                        e.preventDefault();
                        const contactEl = document.getElementById('contact');
                        contactEl?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] transition-all hover:bg-[#A77C57] hover:shadow-md"
                  >
                    <span>{t.services.discussBtn}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
