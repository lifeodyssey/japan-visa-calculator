
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

const PointsCalculator = () => {
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
    category: string
  ) => {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 justify-between border p-3 rounded-md hover:bg-gray-50">
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
        <CardTitle className="text-2xl text-center">日本高度专门人才积分计算器</CardTitle>
        <CardDescription className="text-white text-center opacity-90">
          按照日本出入国在留管理厅标准计算高度专门人才签证积分
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">当前总分: {totalPoints}</span>
            <span className="font-semibold">目标分数: {pointThresholds.highlySkilled}</span>
          </div>
          <Progress 
            value={(totalPoints / pointThresholds.fastTrack) * 100} 
            className="h-2"
          />
        </div>

        <div className="grid gap-6">
          {renderPointsSection(
            "1. 学历背景",
            "请选择您的最高学历",
            academicPoints,
            "academic"
          )}

          {renderPointsSection(
            "2. 专业工作经验",
            "请选择您相关领域的工作年限",
            careerPoints,
            "career"
          )}

          {renderPointsSection(
            "3. 年收入水平",
            "请选择您的年收入范围（日元）",
            salaryPoints,
            "salary"
          )}

          {renderPointsSection(
            "4. 年龄",
            "请选择您的年龄段",
            agePoints,
            "age"
          )}

          {renderPointsSection(
            "5. 日语能力",
            "请选择您的日语水平",
            japanesePoints,
            "japanese"
          )}

          <div className={`p-6 rounded-lg mt-8 ${
            qualificationStatus.qualified 
              ? qualificationStatus.level === "fastTrack" 
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
              : "bg-red-100 text-red-800"
          }`}>
            <h3 className="text-xl font-bold mb-2">评估结果</h3>
            <p className="text-lg mb-4">{qualificationStatus.message}</p>
            
            {qualificationStatus.qualified && (
              <div className="space-y-4">
                <h4 className="font-bold">高度专门人才签证优势:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>5年后可申请永久居留（普通工作签证通常需要10年）</li>
                  <li>配偶可在日本工作（无需工作许可）</li>
                  <li>可携带父母来日本（在特定条件下）</li>
                  <li>可聘请家政人员（在特定条件下）</li>
                  <li>行政手续简化</li>
                </ul>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            注：本计算器仅供参考，最终认定以日本出入国在留管理厅为准。
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-4">额外加分项目</h2>
          
          <BonusPointsSection
            title="学历相关加分"
            items={bonusAcademicPoints}
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            category="bonusAcademic"
          />

          <BonusPointsSection
            title="职业相关加分"
            items={bonusCareerPoints}
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            category="bonusCareer"
          />

          <BonusPointsSection
            title="语言能力加分"
            items={bonusLanguagePoints}
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            category="bonusLanguage"
          />

          <BonusPointsSection
            title="收入相关加分"
            items={bonusSalaryPoints}
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            category="bonusSalary"
          />

          <BonusPointsSection
            title="特殊加分项目"
            items={bonusSpecialPoints}
            selections={selections}
            onSelectionChange={handleCheckboxChange}
            category="bonusSpecial"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsCalculator;
