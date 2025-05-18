
import React from 'react';
import BonusPointsSection from "./BonusPointsSection";
import {
  bonusAcademicPoints,
  bonusCareerPoints,
  bonusLanguagePoints,
  bonusSalaryPoints,
  bonusSpecialPoints,
} from "@/data/bonusPoints";
import { useLanguage } from "@/contexts/LanguageContext";

interface BonusPointsContainerProps {
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean, category?: string) => void;
}

const BonusPointsContainer: React.FC<BonusPointsContainerProps> = ({
  selections,
  onSelectionChange,
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{t('bonusPoints')}</h2>
      
      <div className="bg-[#FDE1D3] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
        <BonusPointsSection
          title={t('bonusAcademic')}
          items={bonusAcademicPoints}
          selections={selections}
          onSelectionChange={onSelectionChange}
          category="bonusAcademic"
        />
      </div>

      <div className="bg-[#D6BCFA] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
        <BonusPointsSection
          title={t('bonusCareer')}
          items={bonusCareerPoints}
          selections={selections}
          onSelectionChange={onSelectionChange}
          category="bonusCareer"
        />
      </div>

      <div className="bg-[#F1F0FB] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
        <BonusPointsSection
          title={t('bonusLanguage')}
          items={bonusLanguagePoints}
          selections={selections}
          onSelectionChange={onSelectionChange}
          category="bonusLanguage"
        />
      </div>

      <div className="bg-[#FEC6A1] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
        <BonusPointsSection
          title={t('bonusSalary')}
          items={bonusSalaryPoints}
          selections={selections}
          onSelectionChange={onSelectionChange}
          category="bonusSalary"
        />
      </div>

      <div className="bg-[#E5DEFF] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
        <BonusPointsSection
          title={t('bonusSpecial')}
          items={bonusSpecialPoints}
          selections={selections}
          onSelectionChange={onSelectionChange}
          category="bonusSpecial"
        />
      </div>
    </div>
  );
};

export default BonusPointsContainer;
