import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  academicPoints, 
  careerPoints, 
  salaryPoints, 
  agePoints, 
  japanesePoints,
  calculateTotalPoints,
  determineQualification,
  pointThresholds
} from "@/data/japanPointsSystem";
import {
  bonusAcademicPoints,
  bonusCareerPoints,
  bonusLanguagePoints,
  bonusSalaryPoints,
  bonusSpecialPoints,
} from "@/data/bonusPoints";
import BonusPointsSection from "./BonusPointsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import StickyHeader from "./StickyHeader";
import EnhancedCheckbox from "./EnhancedCheckbox";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import CompareView from "./CompareView";
import { Loader2 } from "lucide-react";

// Lazy load sections
const AcademicSection = lazy(() => import("./sections/AcademicSection"));
const CareerSection = lazy(() => import("./sections/CareerSection"));
const SalarySection = lazy(() => import("./sections/SalarySection"));
const AgeSection = lazy(() => import("./sections/AgeSection"));
const JapaneseSection = lazy(() => import("./sections/JapaneseSection"));

const PointsCalculator = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [qualificationStatus, setQualificationStatus] = useState({
    qualified: false,
    level: "",
    message: ""
  });
  const [activeSection, setActiveSection] = useState("academic");
  const [isLoading, setIsLoading] = useState(false);

  // Load saved selections on mount
  useEffect(() => {
    const savedSelections = localStorage.getItem('japanVisaSelections');
    if (savedSelections) {
      setSelections(JSON.parse(savedSelections));
    }
  }, []);

  useEffect(() => {
    const calculatedPoints = calculateTotalPoints(selections);
    setTotalPoints(calculatedPoints);
    setQualificationStatus(determineQualification(calculatedPoints));
  }, [selections]);

  const handleCheckboxChange = useCallback((
    itemId: string, 
    checked: boolean,
    category?: string
  ) => {
    setIsLoading(true);
    const newSelections = { ...selections };
    
    if (category && ["academic", "career", "salary", "age", "japanese"].includes(category)) {
      const categoryItems = 
        category === "academic" ? academicPoints :
        category === "career" ? careerPoints :
        category === "salary" ? salaryPoints :
        category === "age" ? agePoints :
        japanesePoints;

      categoryItems.forEach(item => {
        newSelections[item.id] = false;
      });
    }

    newSelections[itemId] = checked;
    setSelections(newSelections);
    setTimeout(() => setIsLoading(false), 300);
  }, [selections]);

  const handleReset = useCallback(() => {
    setSelections({});
    toast({
      title: t('resetSuccess'),
      description: t('resetDescription'),
    });
  }, [t, toast]);

  const handleSave = useCallback(() => {
    localStorage.setItem('japanVisaSelections', JSON.stringify(selections));
    toast({
      title: t('saveSuccess'),
      description: t('saveDescription'),
    });
  }, [selections, t, toast]);

  const handleShare = useCallback(() => {
    const shareText = `${t('shareText')} ${totalPoints} ${t('points')}`;
    if (navigator.share) {
      navigator.share({
        title: t('title'),
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: t('copySuccess'),
        description: t('copyDescription'),
      });
    }
  }, [totalPoints, t, toast]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const renderSection = () => {
    const props = {
      selections,
      onSelectionChange: handleCheckboxChange,
      isCloseToQualifying: totalPoints >= pointThresholds.highlySkilled * 0.8,
    };

    return (
      <Suspense fallback={
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-japan-red" />
        </div>
      }>
        <AnimatePresence mode="wait">
          {activeSection === "academic" && <AcademicSection {...props} />}
          {activeSection === "career" && <CareerSection {...props} />}
          {activeSection === "salary" && <SalarySection {...props} />}
          {activeSection === "age" && <AgeSection {...props} />}
          {activeSection === "japanese" && <JapaneseSection {...props} />}
        </AnimatePresence>
      </Suspense>
    );
  };

  return (
    <>
      <StickyHeader
        totalPoints={totalPoints}
        targetPoints={pointThresholds.highlySkilled}
        onReset={handleReset}
        onSave={handleSave}
        onShare={handleShare}
        onPrint={handlePrint}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <Card className="w-full max-w-4xl mx-auto shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-japan-red to-japan-blue text-white rounded-t-xl">
          <CardTitle className="text-2xl text-center font-bold">{t('title')}</CardTitle>
          <CardDescription className="text-white text-center opacity-90">
            {t('subtitle')}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="mb-8 bg-gray-50 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">{t('currentPoints')}: {totalPoints}</span>
              <span className="font-semibold text-gray-700">{t('targetPoints')}: {pointThresholds.highlySkilled}</span>
            </div>
            <Progress 
              value={(totalPoints / pointThresholds.fastTrack) * 100} 
              className={`h-3 rounded-full ${
                totalPoints >= pointThresholds.highlySkilled 
                  ? 'bg-green-500' 
                  : totalPoints >= pointThresholds.highlySkilled * 0.8
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            />
          </div>

          {renderSection()}

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{t('bonusPoints')}</h2>
            
            <div className="bg-[#FDE1D3] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <BonusPointsSection
                title={t('bonusAcademic')}
                items={bonusAcademicPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusAcademic"
              />
            </div>

            <div className="bg-[#D6BCFA] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <BonusPointsSection
                title={t('bonusCareer')}
                items={bonusCareerPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusCareer"
              />
            </div>

            <div className="bg-[#F1F0FB] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <BonusPointsSection
                title={t('bonusLanguage')}
                items={bonusLanguagePoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusLanguage"
              />
            </div>

            <div className="bg-[#FEC6A1] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <BonusPointsSection
                title={t('bonusSalary')}
                items={bonusSalaryPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusSalary"
              />
            </div>

            <div className="bg-[#E5DEFF] p-6 rounded-xl mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <BonusPointsSection
                title={t('bonusSpecial')}
                items={bonusSpecialPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusSpecial"
              />
            </div>
          </div>

          <div className={`mt-12 p-6 rounded-xl ${
            qualificationStatus.qualified 
              ? qualificationStatus.level === "fastTrack" 
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-blue-50 text-blue-800 border border-blue-200"
              : "bg-red-50 text-red-800 border border-red-200"
          } shadow-sm hover:shadow-md transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2">{t('evaluationTitle')}</h3>
            <p className="text-lg mb-4">{qualificationStatus.message}</p>
            
            {qualificationStatus.qualified && (
              <div className="space-y-4">
                <h4 className="font-bold">{t('benefits.title')}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {t('benefits.items').split(',').map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-end mt-4 no-print">
            <CompareView
              currentPoints={totalPoints}
              targetPoints={pointThresholds.highlySkilled}
              currentSelections={selections}
              onSelectionChange={setSelections}
            />
          </div>

          {/* Print-only summary */}
          <div className="hidden print-only mt-8 p-4 border-t">
            <h3 className="text-lg font-bold mb-2">{t('printSummary')}</h3>
            <p className="text-sm mb-2">{t('printDate')}: {new Date().toLocaleDateString()}</p>
            <p className="text-sm mb-2">{t('printPoints')}: {totalPoints}</p>
            <p className="text-sm mb-2">{t('printStatus')}: {qualificationStatus.message}</p>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            {t('disclaimer')}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default PointsCalculator;
