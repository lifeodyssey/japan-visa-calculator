import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  totalPoints: number;
  targetPoints: number;
  onReset: () => void;
  onSave: () => void;
  onShare: () => void;
  onPrint: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  activeSection,
  onSectionChange,
  totalPoints,
  targetPoints,
  onReset,
  onSave,
  onShare,
  onPrint,
}) => {
  const { t } = useLanguage();

  const sections = [
    { id: 'academic', title: t('academic.title') },
    { id: 'career', title: t('career.title') },
    { id: 'salary', title: t('salary.title') },
    { id: 'age', title: t('age.title') },
    { id: 'japanese', title: t('japanese.title') },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden no-print">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 no-print">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-gray-700">{t('currentPoints')}: {totalPoints}</span>
              <span className="text-sm text-gray-500">/</span>
              <span className="text-sm font-medium text-gray-700">{targetPoints}</span>
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => onSectionChange(section.id)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t space-y-2">
            <Button variant="outline" className="w-full" onClick={onReset}>
              {t('reset')}
            </Button>
            <Button variant="outline" className="w-full" onClick={onSave}>
              {t('save')}
            </Button>
            <Button variant="outline" className="w-full" onClick={onShare}>
              {t('share')}
            </Button>
            <Button variant="outline" className="w-full" onClick={onPrint}>
              {t('print')}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar; 