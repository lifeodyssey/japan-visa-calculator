
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  academicPoints,
  careerPoints,
  salaryPoints,
  agePoints,
  japanesePoints,
  calculateTotalPoints,
  calculateTotalPointsDetailed,
  determineQualification,
  pointThresholds
} from "@/data/japanPointsSystem";
import { VisaCategory } from "@/data/visaCategories";
import { useLanguage } from "@/contexts/LanguageContext";
import StickyHeader from "./StickyHeader";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import PointsProgressBar from "./PointsProgressBar";
import BonusPointsContainer from "./BonusPointsContainer";
import QualificationStatus from "./QualificationStatus";
import PrintSummary from "./PrintSummary";
import Disclaimer from "./Disclaimer";
import CompareView from "./CompareView";

// Lazy load sections
const VisaCategorySection = lazy(() => import("./sections/VisaCategorySection"));
const AcademicSection = lazy(() => import("./sections/AcademicSection"));
const CareerSection = lazy(() => import("./sections/CareerSection"));
const SalarySection = lazy(() => import("./sections/SalarySection"));
const AgeSection = lazy(() => import("./sections/AgeSection"));
const JapaneseSection = lazy(() => import("./sections/JapaneseSection"));
const ResearchSection = lazy(() => import("./sections/ResearchSection"));

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
  const [activeSection, setActiveSection] = useState("category");
  const [isLoading, setIsLoading] = useState(false);

  // New state for enhanced calculation
  const [visaCategory, setVisaCategory] = useState<VisaCategory>('specialized');
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(5000000);
  const [researchAchievements, setResearchAchievements] = useState<string[]>([]);
  const [professionalDegree, setProfessionalDegree] = useState(false);

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
        {activeSection === "category" && (
          <VisaCategorySection
            selectedCategory={visaCategory}
            onCategoryChange={setVisaCategory}
          />
        )}
        {activeSection === "academic" && <AcademicSection {...props} />}
        {activeSection === "career" && <CareerSection {...props} />}
        {activeSection === "salary" && <SalarySection {...props} />}
        {activeSection === "age" && <AgeSection {...props} />}
        {activeSection === "japanese" && <JapaneseSection {...props} />}
        {activeSection === "research" && visaCategory === 'academic' && (
          <ResearchSection
            selectedAchievements={researchAchievements}
            onAchievementChange={setResearchAchievements}
          />
        )}
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
          <PointsProgressBar totalPoints={totalPoints} />
        </CardHeader>
        
        <CardContent className="p-6">
          {renderSection()}

          <BonusPointsContainer
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            visaCategory={visaCategory}
          />

          <QualificationStatus qualificationStatus={qualificationStatus} />

          <div className="flex justify-end mt-4 no-print">
            <CompareView
              currentPoints={totalPoints}
              targetPoints={pointThresholds.highlySkilled}
              currentSelections={selections}
              onSelectionChange={setSelections}
            />
          </div>

          <PrintSummary 
            totalPoints={totalPoints}
            qualificationStatus={qualificationStatus}
          />

          <Disclaimer />
        </CardContent>
      </Card>
    </>
  );
};

export default PointsCalculator;
