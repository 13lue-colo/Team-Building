import React from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const Chapter1 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-12">
      
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 01</span>
        <h2 className="text-3xl font-bold text-primary">なぜ今、「働き方」を見直す必要があるのか？</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
            <TrendingDown size={24} />
          </div>
          <h3 className="text-xl font-bold text-primary">構造的な収入の限界</h3>
          <p className="text-secondary/80 leading-relaxed text-sm">
            実質賃金が低下し、社会保険料が上昇する中、会社員としての「労働収入」だけで右肩上がりの生活を描くのは構造的に困難になっています。
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
            <Clock size={24} />
          </div>
          <h3 className="text-xl font-bold text-primary">時間という「最も貴重な資源」の枯渇</h3>
          <p className="text-secondary/80 leading-relaxed text-sm">
            収入を増やすために残業や副業で「自分の時間」を切り売りするモデルでは、一時的にお金は増えても、豊かさからは遠ざかっていきます。
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-xl font-bold text-primary">将来への漠然とした不安</h3>
          <p className="text-secondary/80 leading-relaxed text-sm">
            「このままでいいのか？」心のどこかで感じている限界。今の努力が、本当に自分の望む未来に直結しているのか、見直すタイミングです。
          </p>
        </div>
      </div>

      <div className="mt-auto bg-slate-50 border-l-4 border-accent p-6 rounded-r-lg">
        <p className="text-lg text-primary font-medium">
          「努力が足りない」のではありません。<span className="text-accent font-bold"><br/>あなたがどれだけ優秀でも、現在の「構造（システム）」の上で戦っている以上、結果には限界があります。</span>
        </p>
      </div>

    </div>
  );
};

export default Chapter1;
