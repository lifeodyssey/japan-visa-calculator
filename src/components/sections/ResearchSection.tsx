import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Info, Award, FileText, Lightbulb, Trophy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  allResearchAchievements, 
  calculateResearchAchievementPoints,
  researchCategories 
} from '@/data/researchAchievements';

interface ResearchSectionProps {
  selectedAchievements: string[];
  onAchievementChange: (achievementIds: string[]) => void;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({
  selectedAchievements,
  onAchievementChange,
}) => {
  const { t } = useLanguage();

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'patent':
        return <Lightbulb className="h-5 w-5" />;
      case 'grant':
        return <Award className="h-5 w-5" />;
      case 'publication':
        return <FileText className="h-5 w-5" />;
      case 'award':
        return <Trophy className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const handleAchievementToggle = (achievementId: string, checked: boolean) => {
    let newSelections: string[];
    if (checked) {
      newSelections = [...selectedAchievements, achievementId];
    } else {
      newSelections = selectedAchievements.filter(id => id !== achievementId);
    }
    onAchievementChange(newSelections);
  };

  const totalPoints = calculateResearchAchievementPoints(selectedAchievements);
  const hasMultipleAchievements = selectedAchievements.length >= 2;

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <Award className="h-5 w-5 text-blue-600" />
            {t('research.title', 'Research Achievements')}
            <Badge variant="outline" className="ml-auto">
              {totalPoints} {t('points', 'points')}
            </Badge>
          </CardTitle>
          <p className="text-gray-600 text-sm">
            {t('research.description', 'Select your research achievements (Academic Research category only)')}
          </p>
          
          {hasMultipleAchievements && (
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
              <Trophy className="h-4 w-4 text-green-600" />
              <span className="text-green-800 text-sm font-medium">
                {t('research.validation.multiple_achievements_bonus', 'Special bonus: 25 points total for 2+ achievements')}
              </span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {researchCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                {getCategoryIcon(category.id)}
                <h4 className="font-semibold text-gray-800">
                  {t(category.nameKey, category.id)}
                </h4>
              </div>
              
              <div className="space-y-2 pl-7">
                {category.achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <Checkbox
                      id={achievement.id}
                      checked={selectedAchievements.includes(achievement.id)}
                      onCheckedChange={(checked) => 
                        handleAchievementToggle(achievement.id, checked as boolean)
                      }
                      className="mt-1"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <label 
                          htmlFor={achievement.id}
                          className="font-medium text-gray-800 cursor-pointer"
                        >
                          {t(achievement.nameKey, achievement.nameKey)}
                        </label>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.points} {t('points', 'pts')}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        {t(achievement.descriptionKey, achievement.descriptionKey)}
                      </p>
                      
                      {achievement.detailsKey && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-1 text-xs text-blue-600 cursor-help">
                                <Info className="h-3 w-3" />
                                {t('research.details', 'Details')}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p className="text-sm">
                                {t(achievement.detailsKey, achievement.detailsKey)}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {selectedAchievements.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Award className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>{t('research.no_selections', 'No research achievements selected')}</p>
              <p className="text-sm mt-1">
                {t('research.select_hint', 'Select your research achievements to earn additional points')}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResearchSection;
