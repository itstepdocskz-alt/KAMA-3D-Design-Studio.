import React, { useEffect } from 'react';
import { ProjectItem, Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../config/siteConfig';
import { X, Layers, Calendar, Terminal, ArrowUpRight, CheckCircle2, Box, Info } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  const t = translations[lang];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isRu = lang === 'ru';
  const title = isRu ? project.titleRu : project.titleEn;
  const categoryLabel = isRu ? project.categoryLabelRu : project.categoryLabelEn;
  const description = isRu ? project.descriptionRu : project.descriptionEn;
  const subtitle = isRu ? project.subtitleRu : project.subtitleEn;
  const features = isRu ? project.featuresRu : project.featuresEn;

  const whatsappInquiry = isRu
    ? `Здравствуйте, Камали! Меня заинтересовал проект "${title}". Хочу обсудить аналогичную 3D-визуализацию.`
    : `Hello Kamali! I am interested in the project "${title}". I would like to discuss similar 3D visualization.`;

  const { url: waUrl, isConfigured: waConfigured } = getWhatsAppUrl(lang, whatsappInquiry);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#171717]/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Dialog Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl md:rounded-3xl border border-[#C5A985]/30 bg-[#F4F0E8] shadow-2xl transition-all"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#C5A985]/20 bg-[#EDE8DE] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-wider text-[#A77C57]">
              SLOT // {project.slotNumber}
            </span>
            <span className="h-3 w-px bg-[#C5A985]/40" />
            <span className="text-xs uppercase tracking-wider text-[#171717]/70 font-medium">
              {categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A985]/30 bg-white text-[#171717] transition-colors hover:border-[#171717] hover:bg-[#171717] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A985]"
            title={t.modal.close}
            aria-label={t.modal.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 lg:p-10 space-y-8">
          {/* Main Visual Display */}
          <div className="relative overflow-hidden rounded-2xl border border-[#C5A985]/25 bg-[#171717] text-white">
            {project.image ? (
              <img
                src={project.image}
                alt={title}
                className="w-full h-auto max-h-[550px] object-contain mx-auto"
              />
            ) : (
              /* Architectural 3D Blueprint Frame */
              <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[480px] flex flex-col items-center justify-center p-8 bg-grid-subtle-dark">
                {/* Tech coordinates */}
                <div className="absolute top-4 left-4 font-mono text-[11px] text-[#C5A985]/70 tracking-widest">
                  [CAMERA: PERSPECTIVE // 50MM]
                </div>
                <div className="absolute top-4 right-4 font-mono text-[11px] text-[#C5A985]/70 tracking-widest">
                  RENDER ENGINE: CYCLES / PBR
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[11px] text-[#C5A985]/70 tracking-widest">
                  RESOLUTION: 4096 x 2160 (4K READY)
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[11px] text-[#C5A985]/70 tracking-widest">
                  STATUS: AWAITING_AUTHOR_UPLOAD
                </div>

                {/* Center wireframe graphic */}
                <div className="relative flex flex-col items-center text-center max-w-md">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#C5A985]/40 bg-[#242424]">
                    <Box className="h-12 w-12 text-[#C5A985] animate-pulse" />
                  </div>
                  <h4 className="font-heading text-xl md:text-2xl font-bold text-white tracking-wide">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm text-[#F4F0E8]/70">
                    {subtitle || (isRu ? 'Место для проекта в портфолио' : 'Reserved portfolio project slot')}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C5A985]/30 bg-[#242424]/80 px-4 py-1.5 text-xs font-mono text-[#C5A985]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {t.modal.statusReady}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left 2 Cols: Description & Features */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 id="modal-title" className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight">
                  {title}
                </h3>
                {subtitle && (
                  <p className="mt-1 text-sm font-medium text-[#A77C57] tracking-wide uppercase">
                    {subtitle}
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-2">
                  {t.modal.descriptionTitle}
                </h4>
                <p className="text-base text-[#171717]/85 leading-relaxed">
                  {description}
                </p>
              </div>

              {features && features.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-3">
                    {isRu ? 'Ключевые особенности сцены' : 'Key Visual Elements'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#171717]/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Guide Box for Kamali */}
              <div className="rounded-xl border border-[#C5A985]/30 bg-[#EDE8DE] p-4 text-xs text-[#171717]/80">
                <div className="flex items-center gap-2 font-mono font-semibold text-[#A77C57] mb-1">
                  <Info className="h-4 w-4" />
                  {t.modal.editGuideTitle}
                </div>
                <p className="leading-relaxed">
                  {t.modal.editGuideText}
                </p>
              </div>
            </div>

            {/* Right 1 Col: Metadata & Action */}
            <div className="space-y-6 md:border-l md:border-[#C5A985]/20 md:pl-8">
              {/* Category */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#171717]/50 block mb-1">
                  {t.modal.category}
                </span>
                <span className="text-sm font-semibold text-[#171717]">
                  {categoryLabel}
                </span>
              </div>

              {/* Year */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#171717]/50 block mb-1">
                  {t.modal.year}
                </span>
                <span className="text-sm font-semibold text-[#171717]">
                  {project.year}
                </span>
              </div>

              {/* Software used */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#171717]/50 block mb-2">
                  {t.modal.software}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.software.map((sw) => (
                    <span
                      key={sw}
                      className="font-mono text-xs uppercase bg-[#171717] text-[#F4F0E8] px-2.5 py-1 rounded"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href={waConfigured ? waUrl : '#contact'}
                  target={waConfigured ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (!waConfigured) {
                      onClose();
                      const contactElem = document.getElementById('contact');
                      contactElem?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-semibold text-[#F4F0E8] transition-all hover:bg-[#A77C57] hover:shadow-lg"
                >
                  <span>{t.modal.discussThis}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
