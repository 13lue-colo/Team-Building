import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Chapter6 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-8">
      
      <div className="flex flex-col gap-2 text-center items-center">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 06</span>
        <h2 className="text-4xl font-bold text-primary">共に創る未来</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-600 rounded-full mt-4"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-10 mt-4 max-w-4xl mx-auto w-full">
        
        <p className="text-xl text-secondary/90 leading-relaxed text-center font-medium">
          私たちは共通の価値観を持ち、それぞれがオーナー意識を持った<br/>メンバーで構成される<strong className="text-accent mx-1 text-2xl">最強のチーム</strong>を作ります。
        </p>

        {/* 投資回収モデルのハイライト */}
        <div className="w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10"></div>
          
          <h3 className="font-bold text-lg text-primary text-center">ビジネスの成長と投資回収のリアル</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            
            {/* 左側：一般的な貯蓄 */}
            <div className="flex-1 w-full bg-slate-50 rounded-2xl p-6 text-center border border-gray-200">
              <span className="text-xs font-bold text-gray-400 mb-2 block">通常の貯蓄モデル</span>
              <div className="text-3xl font-bold text-secondary mb-1">28<span className="text-sm ml-1 font-normal">年</span></div>
              <p className="text-xs text-secondary/60">月20万円を年利5%で運用して<br/>目標資産（1.3億）に到達する期間</p>
            </div>
            
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={24} />
            </div>

            {/* 右側：TBビジネス */}
            <div className="flex-1 w-full bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 text-center border border-accent/30 shadow-[0_4px_15px_rgba(52,152,219,0.1)] relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-pulse">
                圧倒的スピード
              </div>
              <span className="text-xs font-bold text-accent mb-2 block">コミュニティ主体の起業</span>
              <div className="text-4xl font-bold text-blue-600 mb-1">14<span className="text-sm ml-1 font-normal text-secondary">年</span></div>
              <p className="text-xs text-secondary/80 font-medium">初動3年で年商1,000万の基盤構築<br/>圧倒的な投資回収率とレバレッジ</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-2xl">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-sm font-bold text-primary">同じ方向を向く仲間</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-sm font-bold text-primary">持続可能なビジネスモデル</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-sm font-bold text-primary">物心両面の豊かさ</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-center font-bold text-2xl tracking-wide text-primary">
            目的を<span className="text-accent">「燃料」</span>に変え、私たちと挑戦しませんか。
          </p>
        </div>

      </div>
    </div>
  );
};

export default Chapter6;
