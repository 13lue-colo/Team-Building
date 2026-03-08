import { Target, Heart, Footprints, Medal } from 'lucide-react';

const Chapter5 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-8">
      
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 05</span>
        <h2 className="text-3xl font-bold text-primary">ビジネスの真髄「何をやるか」ではなく「誰がやるか」</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 flex-1 mt-4">

        {/* 4重の輪 (Be Do Have) */}
        <div className="w-full md:w-1/2 flex flex-col pt-4">
          <h3 className="font-bold text-xl text-secondary mb-6 flex items-center gap-2">
            <Target className="text-accent" /> ４重の輪（Be → Do → Have）
          </h3>
          
          <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center relative">
            
            {/* 抽象的なサークル表現 */}
            <div className="relative w-full aspect-square max-w-[300px] mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm">
                <span className="absolute top-4 text-xs font-bold text-slate-400">結果・成果</span>
                
                <div className="w-[75%] h-[75%] border-2 border-accent/20 rounded-full flex items-center justify-center bg-accent/5">
                  <span className="absolute top-1/4 -translate-y-2 text-xs font-bold text-accent/60">考え方・行動</span>
                  
                  <div className="w-[60%] h-[60%] border-2 border-blue-200 rounded-full flex items-center justify-center bg-blue-50">
                    <span className="absolute top-[38%] -translate-y-2 text-xs font-bold text-blue-400">人生観・価値観</span>
                    
                    <div className="w-[50%] h-[50%] bg-gradient-to-br from-accent to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg z-10">
                      <span className="text-sm font-bold leading-tight text-center">存在理由<br/>目的</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-sm text-secondary/80 leading-relaxed font-medium">
              結果や成果は全て自分の内側の反映。<br/>
              <span className="text-accent">「在り方＝Be」</span>が変われば、行動が変わり、結果も変わる。
            </p>
          </div>
        </div>

        {/* 4つのM */}
        <div className="w-full md:w-1/2 flex flex-col pt-4">
          <h3 className="font-bold text-xl text-secondary mb-6 flex items-center gap-2">
            <Heart className="text-red-400" /> 人を動かす4つのM
          </h3>
          
          <div className="flex-1 flex flex-col justify-center gap-4">
            
            {/* Money */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-primary mb-1">Money（お金）</h4>
                <p className="text-xs text-secondary/70">最も裾野が広い動機。生きるための基礎だが「長期的後悔」を生みやすい。</p>
              </div>
            </div>

            {/* Medal */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                 <Medal size={18}/>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Medal（名誉・役職）</h4>
                <p className="text-xs text-secondary/70">認められたい・評価されたい承認欲求。</p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-start gap-4 transform translate-x-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-accent mb-1">Mission（使命）</h4>
                <p className="text-xs text-secondary/70">自分の力を誰かのために使う目的意識。命を賭してでもやりたいこと。</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(52,152,219,0.15)] border border-accent flex items-start gap-4 transform translate-x-8">
              <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Footprints size={18} />
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">Message（影響）</h4>
                <p className="text-xs text-secondary/80 font-medium">あなたにしか与えられない影響。誰かの人生を変える力。「他人の為」の頂点。</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapter5;
