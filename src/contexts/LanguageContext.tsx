import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => string | string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to detect browser language
const detectBrowserLanguage = (): Language => {
  try {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'zh' || browserLang === 'en' || browserLang === 'ja') {
      return browserLang as Language;
    }
  } catch (error) {
    console.error('Error detecting browser language:', error);
  }
  return 'en'; // Default to English if not supported or error
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to get language from localStorage, then browser settings, default to English
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
      if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en' || savedLanguage === 'ja')) {
        return savedLanguage;
      }
      return detectBrowserLanguage();
    } catch (error) {
      console.error('Error loading saved language:', error);
      return 'en';
    }
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('preferredLanguage', language);
      // Update document language for accessibility
      document.documentElement.lang = language;
      // Add a data attribute for potential CSS targeting
      document.documentElement.setAttribute('data-language', language);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  }, [language]);

  const t = (path: string, options?: { returnObjects?: boolean }) => {
    try {
      // Handle nested keys like 'bonus8.label'
      const keys = path.split('.');
      let result: any = translations[language];

      for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
          result = result[key];
        } else {
          // If any part of the path is missing, return the original path
          return path;
        }
      }

      // If returnObjects is true and the result is an array or object, return it directly
      if (options?.returnObjects && (Array.isArray(result) || typeof result === 'object')) {
        return result;
      }

      return typeof result === 'string' ? result : path;
    } catch (error) {
      // In case of any error, return the original path
      console.error(`Translation error for key: ${path}`, error);
      return path;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
