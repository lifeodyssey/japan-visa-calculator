
import React from 'react';
import BonusPointsSection from "./BonusPointsSection";
import {
  bonusPointsByCategory,
  allDetailedBonusPoints,
  getBonusPointsForCategory
} from "@/data/detailedBonusPoints";
import { VisaCategory } from "@/data/visaCategories";
import { useLanguage } from "@/contexts/LanguageContext";

interface BonusPointsContainerProps {
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean, category?: string) => void;
  visaCategory?: VisaCategory;
}

const BonusPointsContainer: React.FC<BonusPointsContainerProps> = ({
  selections,
  onSelectionChange,
  visaCategory = 'specialized',
}) => {
  const { t } = useLanguage();

  // Get applicable bonus points for the selected visa category
  const applicableBonusPoints = getBonusPointsForCategory(visaCategory);

  // Convert detailed bonus points to the format expected by BonusPointsSection
  const convertToLegacyFormat = (bonusPoints: typeof applicableBonusPoints) => {
    return bonusPoints.map(item => ({
      id: item.id,
      label: t(item.nameKey, item.nameKey),
      description: t(item.descriptionKey, item.descriptionKey),
      points: item.points
    }));
  };

  // Group bonus points by category
  const groupedBonusPoints = {
    research: convertToLegacyFormat(bonusPointsByCategory.research.filter(item =>
      !item.applicableCategories || item.applicableCategories.includes(visaCategory)
    )),
    qualification: convertToLegacyFormat(bonusPointsByCategory.qualification),
    innovation: convertToLegacyFormat(bonusPointsByCategory.innovation),
    language: convertToLegacyFormat(bonusPointsByCategory.language),
    education: convertToLegacyFormat(bonusPointsByCategory.education),
    investment: convertToLegacyFormat(bonusPointsByCategory.investment.filter(item =>
      !item.applicableCategories || item.applicableCategories.includes(visaCategory)
    )),
    special: convertToLegacyFormat(bonusPointsByCategory.special),
    position: convertToLegacyFormat(bonusPointsByCategory.position.filter(item =>
      !item.applicableCategories || item.applicableCategories.includes(visaCategory)
    ))
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{t('bonusPoints')}</h2>

      {/* Research Achievements (for Specialized/Management categories) */}
      {groupedBonusPoints.research.length > 0 && (
        <div className="bg-[#FDE1D3] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.research.title', 'Research Achievements')}
            items={groupedBonusPoints.research}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusResearch"
          />
        </div>
      )}

      {/* Position (for Management category) */}
      {groupedBonusPoints.position.length > 0 && (
        <div className="bg-[#D6BCFA] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.position.title', 'Executive Position')}
            items={groupedBonusPoints.position}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusPosition"
          />
        </div>
      )}

      {/* Qualifications */}
      {groupedBonusPoints.qualification.length > 0 && (
        <div className="bg-[#F1F0FB] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.qualification.title', 'Professional Qualifications')}
            items={groupedBonusPoints.qualification}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusQualification"
          />
        </div>
      )}

      {/* Innovation & SME */}
      {groupedBonusPoints.innovation.length > 0 && (
        <div className="bg-[#FEC6A1] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.innovation.title', 'Innovation & SME')}
            items={groupedBonusPoints.innovation}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusInnovation"
          />
        </div>
      )}

      {/* Language */}
      {groupedBonusPoints.language.length > 0 && (
        <div className="bg-[#E8F5E8] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.language.title', 'Language Proficiency')}
            items={groupedBonusPoints.language}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusLanguage"
          />
        </div>
      )}

      {/* Education */}
      {groupedBonusPoints.education.length > 0 && (
        <div className="bg-[#FFF2E8] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.education.title', 'Education & Training')}
            items={groupedBonusPoints.education}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusEducation"
          />
        </div>
      )}

      {/* Investment (for Management category) */}
      {groupedBonusPoints.investment.length > 0 && (
        <div className="bg-[#E5F3FF] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.investment.title', 'Investment & Business')}
            items={groupedBonusPoints.investment}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusInvestment"
          />
        </div>
      )}

      {/* Special */}
      {groupedBonusPoints.special.length > 0 && (
        <div className="bg-[#E5DEFF] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <BonusPointsSection
            title={t('bonus.special.title', 'Special Programs')}
            items={groupedBonusPoints.special}
            selections={selections}
            onSelectionChange={onSelectionChange}
            category="bonusSpecial"
          />
        </div>
      )}
    </div>
  );
};

export default BonusPointsContainer;
