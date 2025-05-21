import PointsCalculator from "@/components/PointsCalculator";
import LanguageSwitch from "@/components/LanguageSwitch";
import GitHubStats from "@/components/GitHubStats";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t, language } = useLanguage();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Set page title based on language
  useEffect(() => {
    document.title = t('title');
  }, [t, language]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-japan-white via-blue-50 to-purple-50 p-2 sm:p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/public/pattern.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-japan-red/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-japan-blue/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Scroll to top button - fixed position */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-japan-red text-white hover:bg-japan-blue transition-colors duration-300"
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 transform transition-all duration-300 hover:shadow-3xl border border-white/20">
        <header className="w-full mb-4 sm:mb-6 md:mb-8 text-center relative">
          <div className="flex justify-end mb-2 sm:mb-4">
            <div className="flex gap-2">
              <GitHubStats />
              <LanguageSwitch />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 font-japanese text-japan-black bg-gradient-to-r from-japan-red via-japan-blue to-japan-red bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            {t('subtitle')}
          </p>
        </header>

        <main className="w-full mb-4 sm:mb-6 md:mb-8">
          <PointsCalculator />
        </main>

        <footer className="w-full text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 md:mt-8 border-t border-gray-200 pt-4">
          <p className="mb-2">{t('disclaimer')}</p>
          <p className="mb-2">© {new Date().getFullYear()} {t('copyright')}</p>
          <p className="text-japan-red font-medium">
            {t('createdBy')} <a href="https://github.com/lifeodyssey" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors duration-200">lifeodyssey</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
