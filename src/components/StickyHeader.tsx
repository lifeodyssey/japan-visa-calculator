import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Save, Share2, Printer, RotateCcw } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

interface StickyHeaderProps {
  totalPoints: number;
  targetPoints: number;
  onReset: () => void;
  onSave: () => void;
  onShare: () => void;
  onPrint: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  totalPoints,
  targetPoints,
  onReset,
  onSave,
  onShare,
  onPrint,
  activeSection,
  onSectionChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm no-print">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MobileSidebar
              activeSection={activeSection}
              onSectionChange={onSectionChange}
              totalPoints={totalPoints}
              targetPoints={targetPoints}
              onReset={onReset}
              onSave={onSave}
              onShare={onShare}
              onPrint={onPrint}
            />
            
            <div className="hidden md:block">
              <Tabs value={activeSection} onValueChange={onSectionChange} className="w-[400px]">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="academic">{t('academic.title')}</TabsTrigger>
                  <TabsTrigger value="career">{t('career.title')}</TabsTrigger>
                  <TabsTrigger value="salary">{t('salary.title')}</TabsTrigger>
                  <TabsTrigger value="age">{t('age.title')}</TabsTrigger>
                  <TabsTrigger value="japanese">{t('japanese.title')}</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-gray-700">{t('currentPoints')}: {totalPoints}</span>
              <span className="text-sm text-gray-500">/</span>
              <span className="text-sm font-medium text-gray-700">{targetPoints}</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={onReset} title={t('reset')}>
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onSave} title={t('save')}>
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onShare} title={t('share')}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onPrint} title={t('print')}>
                <Printer className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader; 