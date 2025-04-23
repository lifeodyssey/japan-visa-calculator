import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedCheckbox from "../EnhancedCheckbox";
import { careerPoints } from "@/data/japanPointsSystem";

interface CareerSectionProps {
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean, category?: string) => void;
  isCloseToQualifying: boolean;
}

const CareerSection: React.FC<CareerSectionProps> = ({
  selections,
  onSelectionChange,
  isCloseToQualifying,
}) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="mb-8 p-6 rounded-xl bg-[#F2FCE2] shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{t('career.title')}</h3>
      <p className="text-gray-600 mb-4 text-sm">{t('career.description')}</p>
      <div className="space-y-3">
        {careerPoints.map((item) => (
          <EnhancedCheckbox
            key={item.id}
            id={item.id}
            label={item.label}
            points={item.points}
            checked={selections[item.id] || false}
            onCheckedChange={(checked) => onSelectionChange(item.id, checked, "career")}
            tooltip={item.tooltip}
            isCloseToQualifying={isCloseToQualifying}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CareerSection; 