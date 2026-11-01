import React from 'react';
import { ProjectItem, Language } from '../types';
import { Box, Layers, Maximize2, Sparkles } from 'lucide-react';

interface ProjectCardPlaceholderProps {
  project: ProjectItem;
  lang: Language;
  onOpen: (project: ProjectItem) => void;
}

export const ProjectCardPlaceholder: React.FC<ProjectCardPlaceholderProps> = ({
  project,
  lang,
  onOpen,
}) => {
  const isRu = lang === 'ru';
  const title = isRu ? project.titleRu : project.titleEn;
  const categoryLabel = isRu ? project.categoryLabelRu : project.categoryLabelEn;
  const subtitle = isRu ? project.subtitleRu : project.subtitleEn;

  // Visual aspect ratio classes
  const aspectClass =
    project.aspectRatio === 'tall'
      ? 'md:row-span-2 min-h-[440px] md:min-h-[560px]'
      : project.aspectRatio === 'wide'
      ? 'md:col-span-2 min-h-[340px] md:min-h-[380px]'
      : 'min-h-[340px] md:min-h-[380px]';

  return (
    <div
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C5A985]/20 bg-[#EDE8DE]/60 p-6 md:p-8 transition-all duration-500 hover:border-[#C5A985]/60 hover:bg-[#EDE8DE] hover:shadow-xl hover:shadow-[#171717]/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A985] ${aspectClass}`}
    >
      {/* Background Subtle Wireframe Architectural Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

      {/* Decorative Blueprint Corner Crosshairs */}
      <div className="pointer-events-none absolute left-4 top-4 text-[#A77C57]/40 font-mono text-[10px] tracking-widest select-none">
        +{project.slotNumber} // [3D_VIEWPORT]
      </div>
      <div className="pointer-events-none absolute right-4 top-4 text-[#A77C57]/40 font-mono text-[10px] tracking-widest select-none">
        COORD: X-0 Y-0 Z-1
      </div>
      <div className="pointer-events-none absolute left-4 bottom-4 text-[#A77C57]/40 font-mono text-[10px] tracking-widest select-none">
        {project.year}
      </div>

      {/* If real image is provided by user in projects.ts, display it */}
      {project.image ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={project.image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent" />
        </div>
      ) : (
        /* Award-winning minimalist 3D Wireframe / Viewport graphic */
        <div className="relative my-auto flex flex-col items-center justify-center py-10 transition-transform duration-500 group-hover:scale-105">
          <div className="relative mb-6 flex h-28 w-28 md:h-36 md:w-36 items-center justify-center">
            {/* Ambient warm glow circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C5A985]/20 to-[#A77C57]/10 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:from-[#C5A985]/35" />

            {/* Architectural Isometric Cube Wireframe SVG */}
            <svg
              className="relative h-24 w-24 md:h-28 md:w-28 text-[#A77C57] transition-all duration-700 ease-out group-hover:rotate-6 group-hover:text-[#171717]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer isometric cube */}
              <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" opacity="0.8" />
              <path d="M50 15 L50 55 L85 75" />
              <path d="M50 55 L15 75" />
              <path d="M50 55 L85 35" strokeDasharray="3 3" opacity="0.4" />
              <path d="M50 55 L15 35" strokeDasharray="3 3" opacity="0.4" />

              {/* Inner geometric focal cross */}
              <circle cx="50" cy="55" r="3" fill="#C5A985" />
              <line x1="50" y1="40" x2="50" y2="70" stroke="#C5A985" strokeWidth="0.8" />
              <line x1="35" y1="55" x2="65" y2="55" stroke="#C5A985" strokeWidth="0.8" />
              
              {/* Isometric grid helper lines */}
              <path d="M25 41 L50 26 L75 41" stroke="#C5A985" strokeWidth="0.6" opacity="0.5" />
              <path d="M25 69 L50 84 L75 69" stroke="#C5A985" strokeWidth="0.6" opacity="0.5" />
            </svg>
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#A77C57]">
              <Box className="h-3.5 w-3.5" />
              {isRu ? 'Место для проекта' : 'Project Slot'}
            </span>
            <p className="mt-1 text-xs text-[#171717]/60">
              {isRu ? 'Слот готов к публикации рендера' : 'Ready for your 3D render'}
            </p>
          </div>
        </div>
      )}

      {/* Top Bar Info */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#A77C57]">
            PROJ // {project.slotNumber}
          </span>
          <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#171717]/70">
            {categoryLabel}
          </div>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A985]/30 bg-white/80 backdrop-blur-sm text-[#171717] transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
          <Maximize2 className="h-4 w-4" />
        </div>
      </div>

      {/* Bottom Bar Info */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#C5A985]/15">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg md:text-xl font-bold tracking-tight text-[#171717] transition-colors group-hover:text-[#A77C57]">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-0.5 text-xs text-[#171717]/60">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Software tags */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {project.software.map((sw) => (
            <span
              key={sw}
              className="text-[11px] font-mono uppercase tracking-wider text-[#171717]/70 bg-white/60 px-2 py-0.5 rounded border border-[#C5A985]/20"
            >
              {sw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
