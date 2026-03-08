import { SlideLayout } from '../../ui/SlideLayout';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const simulationData = [
  { year: '1年目', normal: -500, community: -100, amtNorm: '赤字', amtCom: '投資期' },
  { year: '3年目', normal: 0, community: 300, amtNorm: '回収', amtCom: '黒字化' },
  { year: '5年目', normal: 300, community: 1000, amtNorm: '成長', amtCom: '組織化' },
  { year: '10年目', normal: 1000, community: 5000, amtNorm: '安定', amtCom: '実業展開' },
];

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
  <SlideLayout chapter="Chapter 6" title="投資・回収と資産形成のシミュレーション">
    <div className="flex flex-col md:flex-row gap-8 items-center h-full max-w-5xl mx-auto">
      <div className="flex-[1.5] w-full h-80 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-sm font-bold text-secondary text-center mb-6">利益（リターン）の推移シミュレーション比較</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={simulationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="year" tick={{fontSize: 12, fill: '#64748B'}} />
            <YAxis tick={{fontSize: 12, fill: '#64748B'}} />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}} />
            <Bar dataKey="normal" name="一般的な起業・投資" fill="#94A3B8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="community" name="コミュニティ起業モデル" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
          <TrendingUp className="text-accent" size={28} />
          <h3 className="text-xl font-bold text-primary">圧倒的な回収スピード</h3>
        </div>
        
        <p className="text-sm text-secondary/80 leading-relaxed">
          一般的な起業は初期費用が大きく（数百万〜数千万）、黒字化して投資を回収するまでに最低でも3〜5年かかると言われています（※生存率の低さは前述の通り）。
        </p>
        
        <div className="bg-blue-50 border-l-4 border-accent p-4 rounded-r-xl">
          <p className="text-sm font-semibold text-primary mb-1">コミュニティモデルの強み</p>
          <p className="text-xs text-secondary/80 leading-relaxed">
            すでに「顧客（ファン）」がいる状態で作るため、**初月から爆発的な利益**を生み出すことが可能。初期投資の少なさと相まって、回収・事業拡大のスピードが一般的なビジネスとは次元が異なります。
          </p>
        </div>
      </div>

    </div>
  </SlideLayout>
);

const Ch6_3 = () => (
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
  <Ch6_3 key="6-3" />,
];
