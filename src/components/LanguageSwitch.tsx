import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/data/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'zh', flag: '🇨🇳', name: '中文' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'ja', flag: '🇯🇵', name: '日本語' }
  ];

  // Find current language
  const currentLanguage = languages.find(lang => lang.code === language) || languages[1];

  // For small screens, use a dropdown menu
  return (
    <>
      {/* Desktop view - buttons */}
      <div className="hidden sm:flex space-x-1">
        {languages.map(({ code, flag }) => (
          <Button
            key={code}
            variant={language === code ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9 p-0"
            onClick={() => setLanguage(code)}
            aria-label={`Switch to ${code} language`}
            title={`Switch to ${code} language`}
          >
            {flag}
          </Button>
        ))}
      </div>

      {/* Mobile view - dropdown */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Switch language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map(({ code, flag, name }) => (
              <DropdownMenuItem
                key={code}
                onClick={() => setLanguage(code)}
                className={language === code ? "bg-accent" : ""}
              >
                <span className="mr-2">{flag}</span>
                <span>{name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default LanguageSwitch;
