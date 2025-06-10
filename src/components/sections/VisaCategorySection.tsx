import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Info, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { VisaCategory, visaCategories } from '@/data/visaCategories';

interface VisaCategorySectionProps {
  selectedCategory: VisaCategory;
  onCategoryChange: (category: VisaCategory) => void;
}

const VisaCategorySection: React.FC<VisaCategorySectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { t } = useLanguage();

  const getCategoryIcon = (category: VisaCategory) => {
    switch (category) {
      case 'academic':
        return <GraduationCap className="h-6 w-6" />;
      case 'specialized':
        return <Briefcase className="h-6 w-6" />;
      case 'management':
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <Info className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: VisaCategory) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
      case 'specialized':
        return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 'management':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100';
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100';
    }
  };

  const getSelectedCategoryColor = (category: VisaCategory) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 border-blue-400 ring-2 ring-blue-200';
      case 'specialized':
        return 'bg-green-100 border-green-400 ring-2 ring-green-200';
      case 'management':
        return 'bg-purple-100 border-purple-400 ring-2 ring-purple-200';
      default:
        return 'bg-gray-100 border-gray-400 ring-2 ring-gray-200';
    }
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="shadow-lg border-0 bg-gradient-to-r from-japan-red/5 to-japan-blue/5">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <Info className="h-5 w-5 text-japan-red" />
            {t('categories.title')}
          </CardTitle>
          <p className="text-gray-600 text-sm">
            {t('categories.description')}
          </p>
        </CardHeader>
        
        <CardContent>
          <RadioGroup
            value={selectedCategory}
            onValueChange={(value) => onCategoryChange(value as VisaCategory)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {visaCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Label
                  htmlFor={category.id}
                  className={`
                    cursor-pointer block p-4 rounded-xl border-2 transition-all duration-200
                    ${selectedCategory === category.id 
                      ? getSelectedCategoryColor(category.id)
                      : getCategoryColor(category.id)
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <RadioGroupItem
                      value={category.id}
                      id={category.id}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoryIcon(category.id)}
                        <h3 className="font-semibold text-gray-800">
                          {t(category.nameKey)}
                        </h3>
                        {category.minimumSalary && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge variant="outline" className="text-xs">
                                  {t('categories.minimumSalary')}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{t('categories.minimumSalaryTooltip', { 
                                  amount: (category.minimumSalary / 1000000).toFixed(0) 
                                })}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t(category.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </Label>
              </motion.div>
            ))}
          </RadioGroup>

          {/* Category-specific information */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-white rounded-lg border border-gray-200"
          >
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              {getCategoryIcon(selectedCategory)}
              {t(`categories.${selectedCategory}.detailsTitle`)}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{t(`categories.${selectedCategory}.details`)}</p>
              
              {selectedCategory !== 'academic' && (
                <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                  <Info className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-800">
                    {t('categories.salaryRequirement', { 
                      amount: '300万円' 
                    })}
                  </span>
                </div>
              )}

              {selectedCategory === 'academic' && (
                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded border border-blue-200">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-800">
                    {t('categories.academic.researchNote')}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VisaCategorySection;
