/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Software } from './components/Software';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';
import { HelpCircle } from 'lucide-react';

export default function App() {
  // Default language is 'ru' as requested
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('kama_lang');
    return saved === 'en' ? 'en' : 'ru';
  });

  const [guideOpen, setGuideOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('kama_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#171717] selection:bg-[#C5A985]/35 selection:text-[#171717] font-body relative">
      {/* Top Navigation */}
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Screen */}
        <Hero lang={lang} />

        {/* 2. Selected Works (Gallery) */}
        <Gallery lang={lang} />

        {/* 3. About Me */}
        <About lang={lang} />

        {/* 4. Software & Tools */}
        <Software lang={lang} />

        {/* 5. Services */}
        <Services lang={lang} />

        {/* 6. Work Process */}
        <Process lang={lang} />

        {/* 7. Contact (Graphite Dark section) */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Author Guide Trigger Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setGuideOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-[#C5A985]/40 bg-[#171717]/90 px-4 py-2.5 text-xs font-mono text-[#F4F0E8] shadow-2xl backdrop-blur-md transition-all hover:bg-[#171717] hover:border-[#C5A985] hover:scale-105 cursor-pointer"
          title={lang === 'ru' ? 'Как добавить свои работы?' : 'How to add your renders?'}
        >
          <HelpCircle className="h-4 w-4 text-[#C5A985]" />
          <span className="hidden sm:inline">
            {lang === 'ru' ? 'Инструкция для Kamali' : 'Author Guide'}
          </span>
        </button>
      </div>

      {/* Author Guidance Modal */}
      <GuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
        lang={lang}
      />
    </div>
  );
}
