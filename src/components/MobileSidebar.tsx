import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Save, Share2, Printer, RotateCcw, ChevronUp, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
    { id: 'academic', number: '1', title: t('academic.title').replace(/^\d+\.\s/, '') },
    { id: 'career', number: '2', title: t('career.title').replace(/^\d+\.\s/, '') },
    { id: 'salary', number: '3', title: t('salary.title').replace(/^\d+\.\s/, '') },
    { id: 'age', number: '4', title: t('age.title').replace(/^\d+\.\s/, '') },
    { id: 'japanese', number: '5', title: t('japanese.title').replace(/^\d+\.\s/, '') },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden no-print">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0 no-print">
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="px-2 py-1 text-xs font-medium">
                {totalPoints} / {targetPoints}
              </Badge>
              {totalPoints >= targetPoints && (
                <Badge className="bg-green-500 hover:bg-green-600 px-2 py-1 text-xs">
                  {t('qualified')}
                </Badge>
              )}
            </div>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-medium text-gray-500 mb-2">{t('sections')}</h3>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsOpen(false);
                  }}
                >
                  <span className="font-bold mr-2">{section.number}.</span>
                  <span className="text-left">{section.title}</span>
                </Button>
              ))}

              <Separator className="my-4" />

              <h3 className="text-sm font-medium text-gray-500 mb-2">{t('actions')}</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" onClick={() => { scrollToTop(); setIsOpen(false); }} className="justify-start">
                  <ChevronUp className="h-4 w-4 mr-2" />
                  {t('scrollToTop')}
                </Button>
                <Button variant="outline" size="sm" onClick={() => { onReset(); setIsOpen(false); }} className="justify-start">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {t('reset')}
                </Button>
                <Button variant="outline" size="sm" onClick={() => { onSave(); setIsOpen(false); }} className="justify-start">
                  <Save className="h-4 w-4 mr-2" />
                  {t('save')}
                </Button>
                <Button variant="outline" size="sm" onClick={() => { onShare(); setIsOpen(false); }} className="justify-start">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('share')}
                </Button>
                <Button variant="outline" size="sm" onClick={() => { onPrint(); setIsOpen(false); }} className="justify-start col-span-2">
                  <Printer className="h-4 w-4 mr-2" />
                  {t('print')}
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;