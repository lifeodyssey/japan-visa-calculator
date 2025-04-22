
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/data/translations";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' }
  ];

  return (
    <div className="flex gap-2 justify-center mb-4">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant={language === code ? "default" : "outline"}
          onClick={() => setLanguage(code)}
          className="min-w-[80px]"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
