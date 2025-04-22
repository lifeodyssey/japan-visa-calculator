
import PointsCalculator from "@/components/PointsCalculator";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <header className="w-full max-w-4xl mb-8 text-center">
        <LanguageSwitch />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-600">
          {t('subtitle')}
        </p>
      </header>
      
      <main className="w-full max-w-4xl mb-8">
        <PointsCalculator />
      </main>
      
      <footer className="w-full max-w-4xl text-center text-sm text-gray-500 mt-8">
        <p>{t('disclaimer')}</p>
        <p>© {new Date().getFullYear()} {t('copyright')}</p>
      </footer>
    </div>
  );
};

export default Index;
