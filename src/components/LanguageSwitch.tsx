import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/data/translations";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string }[] = [
    { code: 'zh', flag: '🇨🇳' },
    { code: 'en', flag: '🇺🇸' },
    { code: 'ja', flag: '🇯🇵' }
  ];

  return (
    <div className="flex space-x-1">
      {languages.map(({ code, flag }) => (
        <Button
          key={code}
          variant={language === code ? "default" : "ghost"}
          size="icon"
          className="h-9 w-9 p-0"
          onClick={() => setLanguage(code)}
        >
          {flag}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
