import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../locales/en';
import { ar } from '../locales/ar';

type Language = 'en' | 'ar';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  t: (key: keyof typeof en) => string;
  changeLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  isRTL: false,
  t: (key) => '',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  const isRTL = language === 'ar';

  const translations: Record<Language, Translations> = {
    en,
    ar,
  };

  const t = (key: keyof typeof en): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, isRTL, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};