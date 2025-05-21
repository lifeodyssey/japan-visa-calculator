
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

interface QualificationStatusProps {
  qualificationStatus: {
    qualified: boolean;
    level: string;
    message: string;
  };
}

const QualificationStatus: React.FC<QualificationStatusProps> = ({
  qualificationStatus
}) => {
  const { t } = useLanguage();

  return (
    <div className={`mt-12 p-4 sm:p-6 rounded-xl ${
      qualificationStatus.qualified 
        ? qualificationStatus.level === "fastTrack" 
          ? "bg-green-50 text-green-800 border border-green-200"
          : "bg-blue-50 text-blue-800 border border-blue-200"
        : "bg-red-50 text-red-800 border border-red-200"
    }`}>
      <h3 className="text-lg font-semibold mb-2">{t('evaluationTitle')}</h3>
      <p className="text-base">
        {t(qualificationStatus.message)}
      </p>
      
      {qualificationStatus.qualified && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">{t('benefits.title')}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {t('benefits.items').map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QualificationStatus;
