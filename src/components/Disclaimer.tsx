
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const Disclaimer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <p className="text-sm text-gray-500 mt-8 text-center">
      {t('disclaimer')}
    </p>
  );
};

export default Disclaimer;
