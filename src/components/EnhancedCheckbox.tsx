import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface EnhancedCheckboxProps {
  id: string;
  label: string;
  points: number;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  tooltip?: string;
  isCloseToQualifying?: boolean;
}

const EnhancedCheckbox: React.FC<EnhancedCheckboxProps> = ({
  id,
  label,
  points,
  checked,
  onCheckedChange,
  tooltip,
  isCloseToQualifying,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className={`flex items-start space-x-2 justify-between bg-white/90 p-4 rounded-lg hover:bg-white transition-all duration-200 border ${
              checked ? 'border-japan-red/50' : 'border-gray-100'
            } ${
              isCloseToQualifying ? 'ring-2 ring-green-500/50' : ''
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start space-x-3 min-w-0">
              <Checkbox 
                id={id} 
                checked={checked}
                onCheckedChange={onCheckedChange}
                className="h-5 w-5 border-2 mt-0.5"
                aria-label={`Select ${label}`}
              />
              <Label htmlFor={id} className="cursor-pointer text-gray-700 break-words">{label}</Label>
            </div>
            <motion.div 
              className="font-semibold text-japan-red bg-red-50 px-3 py-1 rounded-full text-sm flex-shrink-0 ml-2"
              animate={{
                scale: checked ? [1, 1.1, 1] : 1,
                backgroundColor: checked ? ['#FEE2E2', '#FECACA', '#FEE2E2'] : '#FEE2E2',
              }}
              transition={{ duration: 0.3 }}
            >
              {points} 分
            </motion.div>
          </motion.div>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent>
            <p className="max-w-xs text-sm">{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedCheckbox; 