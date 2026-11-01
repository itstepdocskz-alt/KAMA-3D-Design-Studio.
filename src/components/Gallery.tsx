import React, { useState, useMemo } from 'react';
import { ProjectItem, ProjectCategory, Language } from '../types';
import { initialProjects } from '../data/projects';
import { translations } from '../data/translations';
import { ProjectCardPlaceholder } from './ProjectCardPlaceholder';
import { ProjectModal } from './ProjectModal';
import { Filter, Layers, Info, Code } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return initialProjects;
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: t.gallery.categories.all, count: initialProjects.length },
    {
      key: '3d-models',
      label: t.gallery.categories['3d-models'],
      count: initialProjects.filter((p) => p.category === '3d-models').length,
    },
    {
      key: 'architecture',
      label: t.gallery.categories.architecture,
      count: initialProjects.filter((p) => p.category === 'architecture').length,
    },
    {
      key: 'interior',
      label: t.gallery.categories.interior,
      count: initialProjects.filter((p) => p.category === 'interior').length,
    },
    {
      key: 'automotive',
      label: t.gallery.categories.automotive,
      count: initialProjects.filter((p) => p.category === 'automotive').length,
    },
  ];

  return (
    <section id="works" className="relative py-24 sm:py-32 bg-[#F4F0E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#C5A985]/20">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A77C57]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A77C57]">
                {t.gallery.sectionBadge}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#171717]/70 max-w-2xl">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Quick Notice for Kamali */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#A77C57] bg-[#EDE8DE] px-4 py-2.5 rounded-xl border border-[#C5A985]/25">
            <Code className="h-4 w-4 shrink-0" />
            <span>src/data/projects.ts</span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-8 mb-12 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#171717] text-[#F4F0E8] shadow-md'
                    : 'bg-[#EDE8DE]/80 text-[#171717]/75 hover:bg-[#EDE8DE] hover:text-[#171717]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? 'text-[#C5A985]' : 'text-[#171717]/50'
                  }`}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Visual Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#C5A985]/40 p-16 text-center">
            <Layers className="mx-auto h-12 w-12 text-[#A77C57]/40 mb-3" />
            <p className="text-base text-[#171717]/60 font-medium">
              {t.gallery.emptyFilter}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(320px,auto)]">
            {filteredProjects.map((project) => (
              <ProjectCardPlaceholder
                key={project.id}
                project={project}
                lang={lang}
                onOpen={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        )}

        {/* Friendly instruction banner at bottom */}
        <div className="mt-14 rounded-2xl border border-[#C5A985]/25 bg-[#EDE8DE]/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-[#C5A985]">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-[#171717]">
                {lang === 'ru' ? 'Централизованное управление проектами' : 'Centralized Project Data'}
              </div>
              <p className="text-xs text-[#171717]/70 mt-0.5">
                {t.gallery.instructionHint}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#A77C57] hover:text-[#171717] transition-colors"
          >
            {lang === 'ru' ? 'Задать вопрос' : 'Ask a question'} →
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
