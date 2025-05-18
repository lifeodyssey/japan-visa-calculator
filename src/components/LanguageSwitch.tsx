
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/data/translations";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'zh', flag: '🇨🇳', name: '中文' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'ja', flag: '🇯🇵', name: '日本語' }
  ];

  return (
    <div className="flex space-x-1">
      {languages.map(({ code, flag, name }) => (
        <TooltipProvider key={code}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={language === code ? "default" : "ghost"}
                size="icon"
                className="h-9 w-9 p-0"
                onClick={() => setLanguage(code)}
                aria-label={`Switch to ${name}`}
              >
                <span className="text-lg">{flag}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default LanguageSwitch;
