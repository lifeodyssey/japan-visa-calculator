import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedCheckbox from "../EnhancedCheckbox";
import { agePoints } from "@/data/japanPointsSystem";

interface AgeSectionProps {
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean, category?: string) => void;
  isCloseToQualifying: boolean;
}

const AgeSection: React.FC<AgeSectionProps> = ({
  selections,
  onSelectionChange,
  isCloseToQualifying,
}) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="mb-8 p-6 rounded-xl bg-[#D3E4FD] shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{t('age.title')}</h3>
      <p className="text-gray-600 mb-4 text-sm">{t('age.description')}</p>
      <div className="space-y-3">
        {agePoints.map((item) => (
          <EnhancedCheckbox
            key={item.id}
            id={item.id}
            label={item.label}
            points={item.points}
            checked={selections[item.id] || false}
            onCheckedChange={(checked) => onSelectionChange(item.id, checked, "age")}
            tooltip={item.tooltip}
            isCloseToQualifying={isCloseToQualifying}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AgeSection; 