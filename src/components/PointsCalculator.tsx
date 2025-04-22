import React, { useState, useEffect } from "react";
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

const PointsCalculator = () => {
  const { t } = useLanguage();
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [qualificationStatus, setQualificationStatus] = useState({
    qualified: false,
    level: "",
    message: ""
  });

  useEffect(() => {
    const calculatedPoints = calculateTotalPoints(selections);
    setTotalPoints(calculatedPoints);
    setQualificationStatus(determineQualification(calculatedPoints));
  }, [selections]);

  const handleCheckboxChange = (
    itemId: string, 
    checked: boolean,
    category?: string
  ) => {
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
  };

  const renderPointsSection = (
    title: string,
    description: string,
    items: { id: string; label: string; points: number }[],
    category: string,
    bgColor: string
  ) => {
    return (
      <div className={`mb-8 p-6 rounded-lg ${bgColor}`}>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 justify-between bg-white/90 p-3 rounded-md hover:bg-white transition-colors duration-200">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={item.id} 
                  checked={selections[item.id] || false}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange(item.id, checked as boolean, category)
                  }
                />
                <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
              </div>
              <div className="font-semibold text-japan-red">{item.points} 分</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-japan-red text-white">
        <CardTitle className="text-2xl text-center">{t('title')}</CardTitle>
        <CardDescription className="text-white text-center opacity-90">
          {t('subtitle')}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">{t('currentPoints')}: {totalPoints}</span>
            <span className="font-semibold">{t('targetPoints')}: {pointThresholds.highlySkilled}</span>
          </div>
          <Progress 
            value={(totalPoints / pointThresholds.fastTrack) * 100} 
            className="h-2"
          />
        </div>

        <div className="space-y-6">
          {renderPointsSection(
            t('academic.title'),
            t('academic.description'),
            academicPoints,
            "academic",
            "bg-[#E5DEFF]"
          )}

          {renderPointsSection(
            t('career.title'),
            t('career.description'),
            careerPoints,
            "career",
            "bg-[#F2FCE2]"
          )}

          {renderPointsSection(
            t('salary.title'),
            t('salary.description'),
            salaryPoints,
            "salary",
            "bg-[#FEF7CD]"
          )}

          {renderPointsSection(
            t('age.title'),
            t('age.description'),
            agePoints,
            "age",
            "bg-[#D3E4FD]"
          )}

          {renderPointsSection(
            t('japanese.title'),
            t('japanese.description'),
            japanesePoints,
            "japanese",
            "bg-[#FFDEE2]"
          )}

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">{t('bonusPoints')}</h2>
            
            <div className="bg-[#FDE1D3] p-6 rounded-lg mb-6">
              <BonusPointsSection
                title={t('bonusAcademic')}
                items={bonusAcademicPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusAcademic"
              />
            </div>

            <div className="bg-[#D6BCFA] p-6 rounded-lg mb-6">
              <BonusPointsSection
                title={t('bonusCareer')}
                items={bonusCareerPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusCareer"
              />
            </div>

            <div className="bg-[#F1F0FB] p-6 rounded-lg mb-6">
              <BonusPointsSection
                title={t('bonusLanguage')}
                items={bonusLanguagePoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusLanguage"
              />
            </div>

            <div className="bg-[#FEC6A1] p-6 rounded-lg mb-6">
              <BonusPointsSection
                title={t('bonusSalary')}
                items={bonusSalaryPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusSalary"
              />
            </div>

            <div className="bg-[#E5DEFF] p-6 rounded-lg mb-6">
              <BonusPointsSection
                title={t('bonusSpecial')}
                items={bonusSpecialPoints}
                selections={selections}
                onSelectionChange={handleCheckboxChange}
                category="bonusSpecial"
              />
            </div>
          </div>
        </div>

        {/* Move evaluation result to bottom */}
        <div className={`mt-12 p-6 rounded-lg ${
          qualificationStatus.qualified 
            ? qualificationStatus.level === "fastTrack" 
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
            : "bg-red-100 text-red-800"
        }`}>
          <h3 className="text-xl font-bold mb-2">{t('evaluationTitle')}</h3>
          <p className="text-lg mb-4">{qualificationStatus.message}</p>
          
          {qualificationStatus.qualified && (
            <div className="space-y-4">
              <h4 className="font-bold">{t('benefits.title')}</h4>
              <ul className="list-disc pl-5 space-y-2">
                {t('benefits.items').split(',').map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          {t('disclaimer')}
        </p>
      </CardContent>
    </Card>
  );
};

export default PointsCalculator;
