
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { pointThresholds } from "@/data/japanPointsSystem";

interface PointsProgressBarProps {
  totalPoints: number;
}

const PointsProgressBar: React.FC<PointsProgressBarProps> = ({ totalPoints }) => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-white font-medium">{t('currentPoints')}: {totalPoints}</div>
        <div className="text-white font-medium">{t('targetPoints')}: {pointThresholds.highlySkilled}</div>
      </div>
      <Progress 
        value={(totalPoints / pointThresholds.fastTrack) * 100} 
        className={`h-3 rounded-full mt-2 ${
          totalPoints >= pointThresholds.highlySkilled 
            ? 'bg-green-500' 
            : totalPoints >= pointThresholds.highlySkilled * 0.8
            ? 'bg-yellow-500'
            : 'bg-red-500'
        }`}
      />
    </>
  );
};

export default PointsProgressBar;
