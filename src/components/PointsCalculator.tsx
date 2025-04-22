
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  academicPoints, 
  careerPoints, 
  salaryPoints, 
  agePoints, 
  japanesePoints, 
  bonusPoints,
  calculateTotalPoints,
  determineQualification,
  pointThresholds
} from "@/data/japanPointsSystem";

const PointsCalculator = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [qualificationStatus, setQualificationStatus] = useState({
    qualified: false,
    level: "",
    message: ""
  });

  // Calculate total points whenever selections change
  useEffect(() => {
    const calculatedPoints = calculateTotalPoints(selections);
    setTotalPoints(calculatedPoints);
    setQualificationStatus(determineQualification(calculatedPoints));
  }, [selections]);

  // Handle checkbox changes
  const handleCheckboxChange = (
    category: string,
    itemId: string,
    checked: boolean
  ) => {
    // Create a copy of the current selections
    const newSelections = { ...selections };

    // If this is a checkbox that should be exclusive within its category
    if (
      ["academic", "career", "salary", "age", "japanese"].includes(category)
    ) {
      // Uncheck all items in the same category
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

    // Set the new value for this checkbox
    newSelections[itemId] = checked;
    
    // Update the state
    setSelections(newSelections);
  };

  const renderPointsSection = (
    items: { id: string; label: string; points: number }[],
    category: string
  ) => {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 justify-between border p-3 rounded-md hover:bg-gray-50">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id={item.id} 
                checked={selections[item.id] || false}
                onCheckedChange={(checked) => 
                  handleCheckboxChange(category, item.id, checked as boolean)
                }
              />
              <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
            </div>
            <div className="font-semibold text-japan-red">{item.points} 分</div>
          </div>
        ))}
      </div>
    );
  };

  const goToNextTab = () => {
    if (activeTab === "academic") setActiveTab("career");
    else if (activeTab === "career") setActiveTab("salary");
    else if (activeTab === "salary") setActiveTab("age");
    else if (activeTab === "age") setActiveTab("japanese");
    else if (activeTab === "japanese") setActiveTab("bonus");
    else if (activeTab === "bonus") setActiveTab("results");
  };

  const goToPreviousTab = () => {
    if (activeTab === "career") setActiveTab("academic");
    else if (activeTab === "salary") setActiveTab("career");
    else if (activeTab === "age") setActiveTab("salary");
    else if (activeTab === "japanese") setActiveTab("age");
    else if (activeTab === "bonus") setActiveTab("japanese");
    else if (activeTab === "results") setActiveTab("bonus");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-japan-red text-white">
        <CardTitle className="text-2xl text-center">日本高度专门人才积分计算器</CardTitle>
        <CardDescription className="text-white text-center opacity-90">
          按照日本出入国在留管理厅标准计算高度专门人才签证积分
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">当前总分: {totalPoints}</span>
            <span className="font-semibold">目标分数: {pointThresholds.highlySkilled}</span>
          </div>
          <Progress 
            value={(totalPoints / pointThresholds.fastTrack) * 100} 
            className="h-2"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-7 mb-4">
            <TabsTrigger value="academic">学历</TabsTrigger>
            <TabsTrigger value="career">工作经历</TabsTrigger>
            <TabsTrigger value="salary">年收入</TabsTrigger>
            <TabsTrigger value="age">年龄</TabsTrigger>
            <TabsTrigger value="japanese">日语能力</TabsTrigger>
            <TabsTrigger value="bonus">额外加分</TabsTrigger>
            <TabsTrigger value="results">结果</TabsTrigger>
          </TabsList>

          <TabsContent value="academic" className="pt-4">
            <h3 className="text-lg font-bold mb-4">学历背景</h3>
            <p className="mb-4 text-gray-600">请选择您的最高学历</p>
            {renderPointsSection(academicPoints, "academic")}
          </TabsContent>

          <TabsContent value="career" className="pt-4">
            <h3 className="text-lg font-bold mb-4">专业工作经验</h3>
            <p className="mb-4 text-gray-600">请选择您相关领域的工作年限</p>
            {renderPointsSection(careerPoints, "career")}
          </TabsContent>

          <TabsContent value="salary" className="pt-4">
            <h3 className="text-lg font-bold mb-4">年收入水平</h3>
            <p className="mb-4 text-gray-600">请选择您的年收入范围（日元）</p>
            {renderPointsSection(salaryPoints, "salary")}
          </TabsContent>

          <TabsContent value="age" className="pt-4">
            <h3 className="text-lg font-bold mb-4">年龄</h3>
            <p className="mb-4 text-gray-600">请选择您的年龄段</p>
            {renderPointsSection(agePoints, "age")}
          </TabsContent>

          <TabsContent value="japanese" className="pt-4">
            <h3 className="text-lg font-bold mb-4">日语能力</h3>
            <p className="mb-4 text-gray-600">请选择您的日语水平</p>
            {renderPointsSection(japanesePoints, "japanese")}
          </TabsContent>

          <TabsContent value="bonus" className="pt-4">
            <h3 className="text-lg font-bold mb-4">额外加分项</h3>
            <p className="mb-4 text-gray-600">请选择适用的额外加分项（可多选）</p>
            {renderPointsSection(bonusPoints, "bonus")}
          </TabsContent>

          <TabsContent value="results" className="pt-4">
            <div className="text-center space-y-6 py-6">
              <h3 className="text-2xl font-bold">您的总分: {totalPoints}</h3>
              
              <div className={`p-6 rounded-lg ${
                qualificationStatus.qualified 
                  ? qualificationStatus.level === "fastTrack" 
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                  : "bg-red-100 text-red-800"
              }`}>
                <p className="text-lg font-semibold">{qualificationStatus.message}</p>
              </div>
              
              <div className="space-y-4 text-left mt-6">
                <h4 className="font-bold">高度专门人才签证优势:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>5年后可申请永久居留（普通工作签证通常需要10年）</li>
                  <li>配偶可在日本工作（无需工作许可）</li>
                  <li>可携带父母来日本（在特定条件下）</li>
                  <li>可聘请家政人员（在特定条件下）</li>
                  <li>行政手续简化</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  注：本计算器仅供参考，最终认定以日本出入国在留管理厅为准。
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t p-4">
        <Button 
          variant="outline" 
          onClick={goToPreviousTab}
          disabled={activeTab === "academic"}
        >
          上一步
        </Button>
        
        <Button 
          onClick={goToNextTab}
          disabled={activeTab === "results"}
          className="bg-japan-red hover:bg-japan-red/80"
        >
          {activeTab === "bonus" ? "查看结果" : "下一步"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PointsCalculator;
