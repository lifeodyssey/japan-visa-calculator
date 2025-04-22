
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Info } from "lucide-react";

interface BonusPointsSectionProps {
  title: string;
  items: {
    id: string;
    label: string;
    points: number;
    description: string;
  }[];
  selections: Record<string, boolean>;
  onSelectionChange: (itemId: string, checked: boolean) => void;
}

const BonusPointsSection: React.FC<BonusPointsSectionProps> = ({
  title,
  items,
  selections,
  onSelectionChange,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 justify-between border p-3 rounded-md hover:bg-gray-50">
            <div className="flex items-center space-x-2 flex-1">
              <Checkbox
                id={item.id}
                checked={selections[item.id] || false}
                onCheckedChange={(checked) =>
                  onSelectionChange(item.id, checked as boolean)
                }
              />
              <div className="flex items-center gap-2">
                <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
                <HoverCard>
                  <HoverCardTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">{item.description}</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="font-semibold text-japan-red">{item.points} 分</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusPointsSection;
