import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import {
  MessageCircle,
  Send,
  Instagram,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  AlertCircle,
  Phone,
} from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];
  const isRu = lang === 'ru';
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState<'general' | 'modeling' | 'archviz' | 'interior' | 'automotive'>('general');
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  // Dynamic message based on visitor choice
  const serviceTextMap = {
    general: isRu ? '3D-проект' : 'a 3D project',
    modeling: isRu ? 'создание 3D-модели' : '3D modeling',
    archviz: isRu ? 'архитектурную 3D-визуализацию' : 'architectural visualization',
    interior: isRu ? 'дизайн и визуализацию интерьера' : 'interior design visualization',
    automotive: isRu ? '3D-визуализацию транспорта / автомобиля' : 'automotive 3D visualization',
  };

  const dynamicMessage = isRu
    ? `Здравствуйте, Камали! Я хочу обсудить с вами ${serviceTextMap[selectedService]}.`
    : `Hello Kamali! I would like to discuss ${serviceTextMap[selectedService]} with you.`;

  const { url: waUrl, isConfigured: waConfigured } = getWhatsAppUrl(lang, dynamicMessage);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!waConfigured) {
      e.preventDefault();
      setShowConfigNotice(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#171717] text-[#F4F0E8] overflow-hidden">
      {/* Background Architectural Grid Lines & Ambient Warmth */}
      <div className="absolute inset-0 bg-grid-subtle-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#C5A985]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 h-80 w-80 rounded-full bg-[#A77C57]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Statement & Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A985]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#C5A985]">
                  {t.contact.sectionBadge}
                </span>
              </div>

              {/* Big Expressive Title requested by user */}
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                LET'S CREATE <br />
                <span className="text-[#C5A985]">SOMETHING GREAT.</span>
              </h2>

              {/* Subtitle requested by user */}
              <p className="mt-4 text-xl sm:text-2xl text-[#C5A985] font-light">
                {t.contact.subtitle}
              </p>

              <p className="mt-6 text-base text-[#F4F0E8]/70 max-w-xl leading-relaxed">
                {t.contact.text}
              </p>
            </div>

            {/* Author status card */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-[#C5A985] uppercase tracking-wider block">
                  {t.contact.statusBadge}
                </span>
                <span className="text-sm font-medium text-white/90">
                  Blender • SketchUp • Photoshop • Illustrator
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#C5A985]/30 bg-white/5 px-3 py-1 font-mono text-[11px] text-[#C5A985]">
                <span className="h-2 w-2 rounded-full bg-[#C5A985] animate-pulse" />
                <span>{t.contact.availableNotice}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Topic Selector */}
            <div className="rounded-2xl border border-white/10 bg-[#202020] p-6 shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C5A985] block mb-3">
                {t.contact.quickMessagePrompt}
              </span>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { id: 'general', label: isRu ? 'Общий 3D' : 'General 3D' },
                  { id: 'modeling', label: '3D Models' },
                  { id: 'archviz', label: 'Architecture' },
                  { id: 'interior', label: 'Interior' },
                  { id: 'automotive', label: 'Automotive' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item.id as any)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                      selectedService === item.id
                        ? 'bg-[#C5A985] text-[#171717] font-bold'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Message Preview Box */}
              <div className="rounded-xl border border-white/5 bg-[#171717] p-3 text-xs text-white/80 font-mono italic">
                "{dynamicMessage}"
              </div>
            </div>

            {/* Primary Action: WhatsApp Button */}
            <div className="relative">
              <a
                href={waConfigured ? waUrl : '#'}
                target={waConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="group flex w-full items-center justify-between rounded-2xl bg-[#25D366] px-6 py-5 text-[#171717] font-bold transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-[#25D366]/20 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/10">
                    <MessageCircle className="h-6 w-6 text-[#171717]" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading text-lg font-bold leading-tight">
                      {t.contact.whatsappBtn}
                    </div>
                    <div className="text-xs font-medium text-[#171717]/80">
                      {isRu ? 'Быстрый ответ в течение дня' : 'Fast response within 24h'}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Notice if WhatsApp number is still the initial placeholder */}
              {showConfigNotice && !waConfigured && (
                <div className="mt-3 rounded-xl border border-[#C5A985]/40 bg-[#242424] p-4 text-xs text-[#F4F0E8] animate-fadeIn">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-[#C5A985] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#C5A985]">
                        {isRu ? 'Настройка номера WhatsApp' : 'WhatsApp Number Setup'}
                      </p>
                      <p className="mt-1 text-white/80 leading-relaxed">
                        {t.contact.whatsappMissingWarning}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-white/60">
                        Файл: <code className="text-[#C5A985]">src/config/siteConfig.ts</code> → <code className="text-[#C5A985]">WHATSAPP_NUMBER</code>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Socials & Direct Links: Telegram & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Telegram */}
              <a
                href={`https://t.me/${siteConfig.socials.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#202020] px-5 py-4 transition-all hover:border-[#229ED9]/60 hover:bg-[#202020]/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#229ED9]/15 text-[#229ED9]">
                    <Send className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 font-mono">Telegram</div>
                    <div className="font-semibold text-sm text-white">
                      @{siteConfig.socials.telegram}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white" />
              </a>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${siteConfig.socials.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#202020] px-5 py-4 transition-all hover:border-[#E1306C]/60 hover:bg-[#202020]/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E1306C]/15 text-[#E1306C]">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 font-mono">Instagram</div>
                    <div className="font-semibold text-sm text-white">
                      @{siteConfig.socials.instagram}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white" />
              </a>
            </div>

            {/* Direct Email with Copy function */}
            <div className="rounded-2xl border border-white/10 bg-[#202020] p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#C5A985]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-white/50 font-mono block">
                      {t.contact.emailTitle}
                    </span>
                    <a
                      href={`mailto:${siteConfig.socials.email}`}
                      className="text-sm font-semibold text-white hover:text-[#C5A985] truncate block transition-colors"
                    >
                      {siteConfig.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-mono text-white/80 transition-all hover:bg-white/10 hover:text-white cursor-pointer"
                  title={t.contact.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-green-400" />
                      <span className="text-green-400">{isRu ? 'Скопировано!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{isRu ? 'Копировать' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
