import { createContext, useContext, useState, ReactNode } from 'react';
import en, { TranslationShape } from '../i18n/en';
import es from '../i18n/es';
import { Language } from '../types';

const translations: Record<Language, TranslationShape> = { en, es };

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
