import PointsCalculator from "@/components/PointsCalculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">日本高度专门人才积分计算器</h1>
        <p className="text-gray-600">
          根据日本出入国在留管理厅公布的高度专门人才评分标准，计算您的积分是否符合高度专门人才签证要求
        </p>
      </header>
      
      <main className="w-full max-w-4xl mb-8">
        <PointsCalculator />
      </main>
      
      <footer className="w-full max-w-4xl text-center text-sm text-gray-500 mt-8">
        <p>本计算器仅供参考，积分标准可能随政策变化而调整。</p>
        <p>© {new Date().getFullYear()} 日本高度专门人才积分计算器</p>
      </footer>
    </div>
  );
};

export default Index;
