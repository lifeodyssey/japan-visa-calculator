
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BonusPointsSectionProps {
  title: string;
  items: {
    id: string;
    label: string;
    points: number;
    description: string;
  }[];
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean, category?: string) => void;
  category?: string;
}

const BonusPointsSection: React.FC<BonusPointsSectionProps> = ({
  title,
  items,
  selections,
  onSelectionChange,
  category = "bonus",
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-3 rounded-md hover:bg-gray-50 transition-all duration-200">
            <div className="flex items-start space-x-2 flex-1 min-w-0">
              <Checkbox
                id={item.id}
                checked={selections[item.id] || false}
                onCheckedChange={(checked) =>
                  onSelectionChange(item.id, checked as boolean, category)
                }
                className="mt-0.5"
              />
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <Label 
                  htmlFor={item.id} 
                  className="cursor-pointer break-words font-medium"
                >
                  {t(item.label)}
                </Label>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <button 
                      className="inline-flex items-center justify-center rounded-full p-1 hover:bg-gray-100"
                      aria-label="More information"
                    >
                      <Info className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">{t(item.description)}</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="font-semibold text-japan-red flex-shrink-0 ml-2">{item.points} {t('points')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusPointsSection;
