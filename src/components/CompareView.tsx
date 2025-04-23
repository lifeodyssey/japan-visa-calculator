import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CompareArrows } from "lucide-react";

interface CompareViewProps {
  currentPoints: number;
  targetPoints: number;
  currentSelections: Record<string, boolean>;
  onSelectionChange: (selections: Record<string, boolean>) => void;
}

const CompareView: React.FC<CompareViewProps> = ({
  currentPoints,
  targetPoints,
  currentSelections,
  onSelectionChange,
}) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [compareSelections, setCompareSelections] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    if (isOpen) {
      setCompareSelections({ ...currentSelections });
    }
  }, [isOpen, currentSelections]);

  const handleApply = () => {
    onSelectionChange(compareSelections);
    setIsOpen(false);
  };

  const handleReset = () => {
    setCompareSelections({ ...currentSelections });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title={t('compare')} className="no-print">
          <CompareArrows className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] no-print">
        <DialogHeader>
          <DialogTitle>{t('compareTitle')}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-semibold">{t('currentSelection')}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{t('points')}:</span>
                <span className="text-sm font-medium">{currentPoints}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-japan-red rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentPoints / targetPoints) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">{t('compareSelection')}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{t('points')}:</span>
                <span className="text-sm font-medium">
                  {Object.entries(compareSelections).reduce((acc, [key, value]) => {
                    if (value) {
                      // Calculate points based on the selection
                      // This is a simplified version - you'll need to implement the actual calculation
                      return acc + 1;
                    }
                    return acc;
                  }, 0)}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-japan-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Object.entries(compareSelections).reduce((acc, [key, value]) => {
                    if (value) return acc + 1;
                    return acc;
                  }, 0) / targetPoints) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={handleReset}>
            {t('reset')}
          </Button>
          <Button onClick={handleApply}>
            {t('apply')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompareView; 