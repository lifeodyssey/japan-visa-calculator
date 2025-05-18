
import PointsCalculator from "@/components/PointsCalculator";
import LanguageSwitch from "@/components/LanguageSwitch";
import GitHubStats from "@/components/GitHubStats";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-japan-white via-blue-50 to-purple-50 p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-japan-red/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-japan-blue/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-8 transform transition-all duration-300 hover:shadow-3xl border border-white/20">
        <header className="w-full mb-6 sm:mb-8 text-center relative">
          <div className="absolute right-0 top-0 flex gap-2">
            <GitHubStats />
            <LanguageSwitch />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-japanese text-japan-black mt-10 sm:mt-12 bg-gradient-to-r from-japan-red via-japan-blue to-japan-red bg-clip-text text-transparent animate-gradient">
            {t('title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            {t('subtitle')}
          </p>
        </header>
        
        <main className="w-full mb-6 sm:mb-8">
          <PointsCalculator />
        </main>
        
        <footer className="w-full text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 border-t border-gray-200 pt-4">
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
