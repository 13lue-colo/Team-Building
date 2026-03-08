import React from 'react';
import { SlideLayout } from '../../ui/SlideLayout';
import { Layers, Target, HandHeart, ChevronRight } from 'lucide-react';

const Ch5_1 = () => (
  <SlideLayout chapter="Chapter 5" title="ビジネスの真髄「何をやるか」ではなく「誰がやるか」">
    <div className="flex flex-col items-center justify-center h-full text-center gap-8">
      
      <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed bg-slate-50 border border-slate-100 p-8 rounded-2xl w-full max-w-4xl shadow-sm">
        どんなに優れた「仕組み（ビジネスモデル）」があっても、<br/>
        そこに命を吹き込むのは最終的に<span className="text-accent underline decoration-2 underline-offset-4 mx-1">「使う人」</span>です。
      </p>
      
       <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-3xl">
          <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-slate-200">
             <div className="text-4xl mb-4">⚙️</div>
             <h3 className="font-bold text-secondary text-lg mb-2">仕組み</h3>
             <p className="text-xs text-secondary/70">ビジネスモデルやノウハウ。<br/>これらはあくまで「車」のようなもの。</p>
          </div>
          
          <div className="shrink-0 text-slate-300">
             <ChevronRight size={32} />
          </div>

          <div className="flex-1 bg-white p-6 rounded-2xl border-2 border-accent shadow-[0_4px_20px_rgba(52,152,219,0.15)] relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">最も重要</div>
             <div className="text-4xl mb-4 mt-2">🧑‍🤝‍🧑</div>
             <h3 className="font-bold text-accent text-lg mb-2">人（在り方）</h3>
             <p className="text-xs text-secondary/70">理念や目的、価値観。<br/>「誰がハンドルを握るか」で結果は変わる。</p>
          </div>
      </div>

    </div>
  </SlideLayout>
);

const Ch5_2 = () => (
  <SlideLayout chapter="Chapter 5" title="四重の輪（Be → Do → Have）">
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="flex-1 bg-slate-50 w-full max-w-4xl rounded-2xl p-8 border border-gray-100 flex flex-col items-center justify-center relative">
        <h3 className="font-bold text-lg text-secondary mb-8 text-center bg-white px-6 py-2 rounded-full border border-gray-200">結果や成果は、全て自分の内側の反映である</h3>
        
        {/* 同心円の図解 */}
        <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center -mt-4">
          
          {/* Layer 4: 結果・成果 (Have) */}
          <div className="absolute inset-0 border-[3px] border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm transition-transform hover:scale-[1.02]">
            <span className="absolute top-4 text-xs font-bold text-slate-400">結果 / 成果（Have）</span>
            <span className="absolute bottom-6 text-[10px] font-medium text-slate-400 bg-slate-50 px-2 rounded">最も外側（見えやすい部分）</span>
            
            {/* Layer 3: 考え方・行動 (Do) */}
            <div className="w-[78%] h-[78%] border-[3px] border-accent/20 rounded-full flex items-center justify-center bg-accent/5 transition-transform hover:scale-[1.02]">
              <span className="absolute top-[22%] -translate-y-2 text-xs font-bold text-accent/60">行動 / 習慣（Do）</span>
              
              {/* Layer 2: 人生観・価値観 */}
              <div className="w-[62%] h-[62%] border-[3px] border-blue-200 rounded-full flex items-center justify-center bg-blue-50 transition-transform hover:scale-[1.02]">
                <span className="absolute top-[36%] -translate-y-2 text-[10px] font-bold text-blue-400">人生観・価値観</span>
                
                {/* Layer 1: 存在理由・目的 (Be) */}
                <div className="w-[50%] h-[50%] bg-gradient-to-br from-accent to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg z-10 text-center transition-transform hover:scale-[1.05]">
                  <span className="text-[9px] font-medium opacity-90 mb-0.5">在り方 (Be)</span>
                  <span className="text-[11px] font-bold leading-tight whitespace-nowrap">目的</span>
                  <span className="text-[11px] font-bold leading-tight whitespace-nowrap">存在理由</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl opacity-80 text-sm border-l-4 border-accent pl-4">
        <p className="flex-1"><strong className="text-accent underline decoration-2 underline-offset-4">内側にあるものほど</strong>、意識的に変える必要がある（在り方）。</p>
        <p className="flex-1">在り方が変われば、行動が変わり、<strong className="text-primary underline decoration-2 underline-offset-4">結果（外側）も必然的に変わる。</strong></p>
      </div>

    </div>
  </SlideLayout>
);

const Ch5_3 = () => (
  <SlideLayout chapter="Chapter 5" title="人を動かす「4つのM」">
    <div className="flex flex-col md:flex-row h-full gap-8">
      {/* 4M リスト（幅を統一し、順番を逆転） */}
      <div className="flex-1 flex flex-col gap-3 justify-center max-w-2xl mx-auto w-full">
        <h3 className="font-bold text-primary mb-2 text-lg text-left">人生の動機（モチベーション）の階層構造</h3>

        {/* Message (一番上) */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl shadow-md border-2 border-accent flex items-center gap-4 relative overflow-hidden transform transition-transform hover:scale-[1.02] w-full">
           <div className="absolute top-0 right-0 p-2 opacity-5"><Target size={64}/></div>
          <div className="w-10 h-10 bg-gradient-to-tr from-accent to-blue-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
             <Target size={16}/>
          </div>
          <div className="relative z-10 flex-1">
            <h4 className="font-bold text-accent text-sm mb-0.5">Message（影響力）</h4>
            <p className="text-xs text-secondary/90 font-medium">誰かの人生を変える力。あなたにしか与えられない影響。「長期的な誇り」へと繋がる究極の軸。</p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-blue-50/50 p-4 rounded-xl shadow-sm border border-blue-200 flex items-center gap-4 transform transition-transform hover:scale-[1.02] w-full">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0">
             <HandHeart size={16}/>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-primary text-sm mb-0.5">Mission（使命）</h4>
            <p className="text-xs text-secondary/80">自分の能力を誰かのために使う目的意識。短期的な苦痛を乗り越える原動力。</p>
          </div>
        </div>

        {/* 境界線 */}
         <div className="flex items-center gap-4 my-1 opacity-50 w-full">
           <div className="flex-1 h-[2px] border-t border-dashed border-gray-400"></div>
           <span className="text-[10px] font-bold text-gray-500 bg-white px-2 rounded-full border border-gray-300">「自分の為」 と 「他人の為」 の境界線</span>
           <div className="flex-1 h-[2px] border-t border-dashed border-gray-400"></div>
         </div>

        {/* Medal */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 w-full">
          <div className="w-10 h-10 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center shrink-0"><Layers size={16}/></div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-sm mb-0.5">Medal（名誉・評価）</h4>
            <p className="text-[10px] text-secondary/70">承認欲求。他者と比較する相対的な価値観。</p>
          </div>
        </div>

        {/* Money */}
        <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 w-full">
          <div className="w-10 h-10 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-sm shrink-0">¥</div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-700 text-sm mb-0.5">Money（お金）</h4>
            <p className="text-[10px] text-secondary/70">生きるための基礎。短期的な快楽を生むが、限界が早い。</p>
          </div>
        </div>

      </div>

    </div>
  </SlideLayout>
);


export const Chapter5Slides = [
  <Ch5_1 key="5-1" />,
  <Ch5_2 key="5-2" />,
  <Ch5_3 key="5-3" />,
];
