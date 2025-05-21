
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

interface PrintSummaryProps {
  totalPoints: number;
  qualificationStatus: {
    message: string;
  };
}

const PrintSummary: React.FC<PrintSummaryProps> = ({
  totalPoints,
  qualificationStatus
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="hidden print-only mt-8 p-4 border-t">
      <h3 className="text-lg font-bold mb-2">{t('printSummary')}</h3>
      <p className="text-sm mb-2">{t('printDate')}: {new Date().toLocaleDateString()}</p>
      <p className="text-sm mb-2">{t('printPoints')}: {totalPoints}</p>
      <p className="text-sm mb-2">{t('printStatus')}: {t(qualificationStatus.message)}</p>
    </div>
  );
};

export default PrintSummary;
