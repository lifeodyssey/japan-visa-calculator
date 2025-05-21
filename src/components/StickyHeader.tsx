import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Save, Share2, Printer, RotateCcw, ChevronUp } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { cn } from "@/lib/utils";

interface StickyHeaderProps {
  totalPoints: number;
  targetPoints: number;
  onReset: () => void;
  onSave: () => void;
  onShare: () => void;
  onPrint: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  totalPoints,
  targetPoints,
  onReset,
  onSave,
  onShare,
  onPrint,
  activeSection,
  onSectionChange,
}) => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Add shadow when scrolled
      setIsScrolled(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Map of section IDs to numeric-only titles for more compact display
  const shortTitles = {
    academic: "1",
    career: "2",
    salary: "3",
    age: "4",
    japanese: "5"
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={cn(
        "sticky z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 no-print transition-all duration-300",
        isScrolled ? "shadow-md" : "shadow-sm",
        isVisible ? "top-0" : "-top-full"
      )}
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 sm:gap-2">
          <div className="flex items-center w-full">
            <MobileSidebar
              activeSection={activeSection}
              onSectionChange={onSectionChange}
              totalPoints={totalPoints}
              targetPoints={targetPoints}
              onReset={onReset}
              onSave={onSave}
              onShare={onShare}
              onPrint={onPrint}
            />

            <div className="hidden md:block w-full overflow-x-auto">
              <Tabs value={activeSection} onValueChange={onSectionChange} className="w-auto min-w-full">
                <TabsList className="w-auto flex justify-start overflow-visible">
                  {["academic", "career", "salary", "age", "japanese"].map((section) => (
                    <TabsTrigger
                      key={section}
                      value={section}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 flex gap-1 items-center whitespace-nowrap min-w-max"
                    >
                      <span className="font-bold">{shortTitles[section as keyof typeof shortTitles]}.</span>
                      <span className="text-xs sm:text-sm">
                        {t(`${section}.title`).replace(/^\d+\.\s/, '')}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 justify-end">
            <div className="flex items-center space-x-2 bg-gray-50 px-2 sm:px-3 py-1 rounded-full flex-shrink-0 text-xs sm:text-sm">
              <span className="font-medium text-gray-700">{totalPoints}</span>
              <span className="text-gray-500">/</span>
              <span className="font-medium text-gray-700">{targetPoints}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" onClick={scrollToTop} title={t('scrollToTop')} className="h-7 w-7 sm:h-8 sm:w-8">
                <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onReset} title={t('reset')} className="h-7 w-7 sm:h-8 sm:w-8">
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onSave} title={t('save')} className="h-7 w-7 sm:h-8 sm:w-8">
                <Save className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onShare} title={t('share')} className="h-7 w-7 sm:h-8 sm:w-8">
                <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onPrint} title={t('print')} className="h-7 w-7 sm:h-8 sm:w-8">
                <Printer className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;