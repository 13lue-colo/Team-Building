import React from 'react';
import { SlideLayout } from '../../ui/SlideLayout';
import { CheckCircle2 } from 'lucide-react';

const Ch6_1 = () => (
  <SlideLayout chapter="Chapter 6" title="コミュニティ×ビジネスの目指すステップ">
    <div className="flex flex-col items-center justify-center h-full gap-8">
      
      <p className="text-secondary/80 font-medium text-center">
        私たちは「仲間づくり」から始まり、最終的に完全な資産収入（不動産・株）を手にするまでの<br/>明確なロードマップを用意しています。
      </p>

      {/* 階段図解（右肩上がりのリボン型） */}
      <div className="w-full max-w-4xl relative mt-16 mb-24 h-[400px] mx-auto">
        
        {/* 背景の矢印 */}
        <div className="absolute inset-0 z-0 pl-10 pr-4 pt-10 pb-20 pointer-events-none opacity-40">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
             <polygon points="10,95 85,35 85,45 100,25 85,5 85,15 5,80" fill="#e2e8f0" />
          </svg>
        </div>

        {/* STEP 1 */}
        <div className="absolute left-[0%] bottom-[60px] w-[22%] z-10 group cursor-default">
           <div className="w-full h-[50px] bg-blue-800 flex items-center justify-center text-white font-bold tracking-widest shadow-lg rounded-sm relative transform transition-transform group-hover:-translate-y-1">
               <span className="absolute -top-3 left-2 text-[10px] bg-white text-blue-800 px-3 py-0.5 rounded-full shadow-md font-bold">現在地</span>
               STEP 01
           </div>
           <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[140%] pt-4 text-center transition-transform group-hover:-translate-y-1">
             <h4 className="font-bold text-slate-800 mb-1 text-sm">チーム作り<br/><span className="text-xs font-normal text-secondary/70">(START)</span></h4>
             <p className="text-[10px] sm:text-xs text-secondary/60 leading-relaxed font-medium">仲間集めと<br/>コミュニティ枠組み作り</p>
           </div>
        </div>

        {/* LINK 1 */}
        <div className="absolute left-[21.9%] bottom-[60px] w-[4.2%] h-[130px] bg-slate-800 z-0" style={{ clipPath: 'polygon(0 80px, 100% 0, 100% 50px, 0 100%)' }}></div>

        {/* STEP 2 */}
        <div className="absolute left-[26%] bottom-[140px] w-[22%] z-10 group cursor-default">
           <div className="w-full h-[50px] bg-blue-600 flex items-center justify-center text-white font-bold tracking-widest shadow-lg rounded-sm relative transform transition-transform group-hover:-translate-y-1">
               STEP 02
           </div>
           <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[140%] pt-4 text-center transition-transform group-hover:-translate-y-1">
             <h4 className="font-bold text-slate-800 mb-1 text-sm">ビジネス構築<br/><span className="text-xs font-normal text-secondary/70">(収益化)</span></h4>
             <p className="text-[10px] sm:text-xs text-secondary/60 leading-relaxed font-medium">初期の収益モデルを<br/>確立するフェーズ</p>
           </div>
        </div>

        {/* LINK 2 */}
        <div className="absolute left-[47.9%] bottom-[140px] w-[4.2%] h-[130px] bg-blue-800 z-0" style={{ clipPath: 'polygon(0 80px, 100% 0, 100% 50px, 0 100%)' }}></div>

        {/* STEP 3 */}
        <div className="absolute left-[52%] bottom-[220px] w-[22%] z-10 group cursor-default">
           <div className="w-full h-[50px] bg-blue-500 flex items-center justify-center text-white font-bold tracking-widest shadow-lg rounded-sm relative transform transition-transform group-hover:-translate-y-1">
               STEP 03
           </div>
           <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[140%] pt-4 text-center transition-transform group-hover:-translate-y-1">
             <h4 className="font-bold text-slate-800 mb-1 text-sm">法人化・組織化</h4>
             <br/><br/>
             <p className="text-[10px] sm:text-xs text-secondary/60 leading-relaxed font-medium -mt-8">社会的信用を得るための<br/>組織基盤の強化</p>
           </div>
        </div>

        {/* LINK 3 */}
        <div className="absolute left-[73.9%] bottom-[220px] w-[4.2%] h-[130px] bg-blue-600 z-0" style={{ clipPath: 'polygon(0 80px, 100% 0, 100% 50px, 0 100%)' }}></div>

        {/* STEP 4 */}
        <div className="absolute left-[78%] bottom-[300px] w-[22%] z-10 group cursor-default">
           <div className="w-full h-[50px] bg-sky-400 flex items-center justify-center text-white font-bold tracking-widest shadow-lg relative transform transition-transform group-hover:-translate-y-1 pr-2" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}>
               STEP 04
           </div>
           <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[140%] pt-4 text-center transition-transform group-hover:-translate-y-1">
             <h4 className="font-bold text-slate-800 mb-1 text-sm">店舗・実業者へ<br/><span className="text-xs font-normal text-secondary/70">(GOAL)</span></h4>
             <p className="text-[10px] sm:text-xs text-secondary/60 leading-relaxed font-medium">資産収入（不動産・株）<br/>を手にする</p>
           </div>
        </div>

      </div>
    </div>
  </SlideLayout>
);

const Ch6_2 = () => (
  <SlideLayout chapter="Chapter 6" title="共に創る未来 〜私たちと挑戦しませんか〜">
    <div className="flex flex-col items-center justify-center h-full gap-10 w-full max-w-4xl mx-auto">
      
       <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full relative overflow-hidden text-center flex flex-col items-center gap-6">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-600"></div>
         <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
         
         <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mt-4">
           「努力の方向性」を間違えなければ、<br/>誰もが物心両面の豊かさを手に入れられます。
         </h3>

         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-2xl mt-4 z-10">
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-full border border-gray-200">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-sm font-bold text-secondary">同じ方向を向く仲間</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-full border border-gray-200">
            <CheckCircle2 className="text-green-500" size={20} />
            <span className="text-sm font-bold text-secondary">持続可能で低リスクなモデル</span>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl md:px-12 mt-4 z-10 w-full">
           <p className="font-bold text-xl text-accent">
              あなたの「目的」を燃料に変え、<br className="md:hidden" />最強のチームで一緒に未来を描きませんか。
           </p>
        </div>

       </div>

    </div>
  </SlideLayout>
);

export const Chapter6Slides = [
  <Ch6_1 key="6-1" />,
  <Ch6_2 key="6-2" />,
];
