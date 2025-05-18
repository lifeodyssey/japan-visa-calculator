
import React, { createContext, useContext, useState } from 'react';
import { Language, translations } from '@/data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: {returnObjects?: boolean}) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

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

    const value = getValue(translations[language], path);
    
    // Return original path if translation not found
    if (value === undefined) {
      console.warn(`Translation not found: ${path}`);
      return path;
    }
    
    // Handle returning objects (like for arrays) if returnObjects is true
    if (options?.returnObjects) return value;
    
    return value;
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
