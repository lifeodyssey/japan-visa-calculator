import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: {returnObjects?: boolean}) => any;
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

  const t = (path: string, options?: {returnObjects?: boolean}) => {
    // Handle dot notation for nested objects
    const getValue = (obj: any, path: string) => {
      const keys = path.split('.');
      let value = obj;

      // Traverse the object using the path
      for (const key of keys) {
        if (value === undefined || value === null) return undefined;
        value = value[key];
      }

      return value;
    };

    try {
      const value = getValue(translations[language], path);

      // Return original path if translation not found
      if (value === undefined) {
        console.warn(`Translation not found: ${path}`);
        return path;
      }

      // Handle returning objects (like for arrays) if returnObjects is true
      if (options?.returnObjects) return value;

      return value;
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
