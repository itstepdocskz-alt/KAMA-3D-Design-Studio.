import React from 'react';
import { Language } from '../types';
import { X, Code, FileText, CheckCircle2, Phone, Image as ImageIcon } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isRu = lang === 'ru';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#171717]/80 backdrop-blur-sm"
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#C5A985]/30 bg-[#F4F0E8] p-6 sm:p-8 shadow-2xl text-[#171717]"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#C5A985]/20">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-[#C5A985]">
              <Code className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">
                {isRu ? 'Инструкция для автора (Kamali)' : 'Author Guide (Kamali)'}
              </h3>
              <p className="text-xs text-[#171717]/60">
                {isRu ? 'Как быстро настроить портфолио под свои работы' : 'How to publish your own renders'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A985]/30 bg-white text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          {/* Step 1: Projects */}
          <div className="rounded-2xl border border-[#C5A985]/25 bg-[#EDE8DE] p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-[#A77C57]">
              <ImageIcon className="h-4 w-4" />
              <span>1. {isRu ? 'Загрузка своих 3D-работ' : 'Adding your 3D renders'}</span>
            </div>
            <p className="text-[#171717]/80 leading-relaxed">
              {isRu ? (
                <>
                  Откройте файл <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">src/data/projects.ts</code>.
                  В нём уже заготовлены слоты для проектов. Просто укажите путь к вашему рендеру в свойстве <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">image</code>, а также напишите реальное название и описание.
                </>
              ) : (
                <>
                  Open <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">src/data/projects.ts</code>.
                  Update the <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">image</code>, title, and description.
                </>
              )}
            </p>
          </div>

          {/* Step 2: WhatsApp Number */}
          <div className="rounded-2xl border border-[#C5A985]/25 bg-[#EDE8DE] p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-[#A77C57]">
              <Phone className="h-4 w-4" />
              <span>2. {isRu ? 'Номер WhatsApp' : 'WhatsApp Number'}</span>
            </div>
            <p className="text-[#171717]/80 leading-relaxed">
              {isRu ? (
                <>
                  Откройте файл <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">src/config/siteConfig.ts</code>.
                  Вставьте ваш реальный номер телефона в переменную <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">WHATSAPP_NUMBER</code> (без плюса и дефисов, например: <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono">77011234567</code>). Кнопка «Написать в WhatsApp» сразу начнет открывать диалог с вами.
                </>
              ) : (
                <>
                  Open <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">src/config/siteConfig.ts</code> and enter your phone number into <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">WHATSAPP_NUMBER</code>.
                </>
              )}
            </p>
          </div>

          {/* Step 3: Socials & Photo */}
          <div className="rounded-2xl border border-[#C5A985]/25 bg-[#EDE8DE] p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-[#A77C57]">
              <FileText className="h-4 w-4" />
              <span>3. {isRu ? 'Контакты и фото автора' : 'Socials & Photo'}</span>
            </div>
            <p className="text-[#171717]/80 leading-relaxed">
              {isRu ? (
                <>
                  В том же файле <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">siteConfig.ts</code> настройте ники Telegram, Instagram и Email. Фотографию автора можно указать в <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">src/components/About.tsx</code>.
                </>
              ) : (
                <>
                  Configure your Telegram, Instagram, and Email in <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-[#171717]">siteConfig.ts</code>. Add your photo in <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-[#A77C57]">src/components/About.tsx</code>.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#171717] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] hover:bg-[#A77C57] transition-all cursor-pointer"
          >
            {isRu ? 'Понятно, спасибо' : 'Got it, thanks'}
          </button>
        </div>
      </div>
    </div>
  );
};
