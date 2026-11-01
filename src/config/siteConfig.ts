/**
 * SITE CONFIGURATION & CONTACT DATA
 * 
 * ВАЖНО:
 * Здесь вы можете в любой момент изменить ваши контактные данные.
 * Номер WhatsApp по умолчанию оставлен пустым согласно вашему запросу.
 * Как только вы укажете номер (например: "77011234567" без плюса или спецсимволов),
 * кнопки WhatsApp автоматически начнут перенаправлять в диалог с вами.
 */

export const siteConfig = {
  brandName: 'KAMA',
  authorName: 'Kamali Alsharov',
  roleRu: '3D-дизайнер',
  roleEn: '3D Designer',
  
  // WhatsApp: укажите свой номер в международном формате БЕЗ знака '+' и пробелов.
  // Например: "77011234567" или "79991234567"
  WHATSAPP_NUMBER: '', // <--- Вставьте сюда ваш номер WhatsApp

  // Подготовленные сообщения для WhatsApp
  whatsappMessages: {
    ru: 'Здравствуйте! Я хочу обсудить с вами 3D-проект.',
    en: 'Hello! I would like to discuss a 3D project with you.',
  },

  // Социальные сети и контакты (замените на ваши никнеймы/почту)
  socials: {
    telegram: 'kamali_3d',      // Ваш ник в Telegram (без @)
    instagram: 'kama.3dvisual',  // Ваш ник в Instagram (без @)
    email: 'kamali.alsharov@gmail.com', // Ваша рабочая почта
    behance: 'kamalialsharov',  // Профиль на Behance (опционально)
    artstation: 'kama_3d',      // Профиль на ArtStation (опционально)
  },

  // Специализации
  specializationsRu: [
    '3D-моделирование',
    'Архитектурная визуализация',
    'Дизайн интерьеров',
    'Автомобили и транспорт',
  ],
  specializationsEn: [
    '3D Modeling',
    'Architectural Visualization',
    'Interior Design',
    'Automotive & Transport',
  ],

  // Программы
  softwareList: ['Blender', 'SketchUp', 'Adobe Photoshop', 'Adobe Illustrator'],
};

/**
 * Вспомогательная функция для генерации ссылки на WhatsApp
 */
export function getWhatsAppUrl(lang: 'ru' | 'en' = 'ru', customMessage?: string): { url: string; isConfigured: boolean } {
  const number = siteConfig.WHATSAPP_NUMBER.trim().replace(/[^0-9]/g, '');
  const message = customMessage || siteConfig.whatsappMessages[lang];
  const encodedMsg = encodeURIComponent(message);

  if (!number) {
    return {
      url: '#contact',
      isConfigured: false,
    };
  }

  return {
    url: `https://wa.me/${number}?text=${encodedMsg}`,
    isConfigured: true,
  };
}
