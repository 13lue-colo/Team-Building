import { SlideLayout } from '../../ui/SlideLayout';
import { Building2, Users, ArrowRight, ShieldCheck, BarChart3, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const subMarketData = [
  { year: '2019', value: 6835 },
  { year: '2020', value: 8759 },
  { year: '2021', value: 9615 },
  { year: '2022', value: 11440 },
  { year: '2023', value: 13000 },
  { year: '2025', value: 15000 }, // 予測値など（単位: 億円）
];

const Ch4_1 = () => (
  <SlideLayout chapter="Chapter 4" title="不労所得・資産形成への「4つの道」">
    <div className="flex flex-col h-full items-center justify-center gap-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {/* 1. 不動産 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center opacity-70">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">1</div>
          <h3 className="font-bold text-secondary mb-2">不動産</h3>
          <p className="text-xs text-gray-500 mb-4 h-16">投資で年800万の利益を作るには、2億円の物件を買う必要がある<br/>(平均利回り4%)</p>
          <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">膨大な初期資本が必要</span>
        </div>
        
        {/* 2. 株 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center opacity-70">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">2</div>
          <h3 className="font-bold text-secondary mb-2">株・金融投資</h3>
          <p className="text-xs text-gray-500 mb-4 h-16">投資で年800万の利益を作るには、2億円の株を買う必要がある<br/>(平均利回り4%)</p>
          <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">持たざる者は始められない</span>
        </div>

        {/* 3. 権利収入 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center opacity-70">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">3</div>
          <h3 className="font-bold text-secondary mb-2">権利収入（印税等）</h3>
          <p className="text-xs text-gray-500 mb-4 h-16">才能×努力の世界。<br/>(例: ベストセラー作家など)</p>
          <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">圧倒的な「才能」が必要</span>
        </div>

        {/* 4. ビジネス */}
        <div className="bg-white p-6 rounded-2xl border-2 border-accent shadow-[0_4px_20px_rgba(52,152,219,0.15)] flex flex-col items-center text-center relative transform md:-translate-y-4">
          <div className="absolute -top-4 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-md w-max">
            私たちが選ぶべき道
          </div>
          <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-4 mt-2">
            <span className="text-accent text-xl font-bold">4</span>
          </div>
          <h3 className="font-bold text-accent mb-2">ビジネス（起業）</h3>
          <p className="text-xs text-secondary/70 mb-4 h-16 font-medium">自分の「努力」を資本に変え、ゼロからお金と仕組みを作れる唯一の道。</p>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-full">努力で道を切り開ける</span>
        </div>
      </div>

      <div className="text-center max-w-2xl mt-4">
        <p className="text-primary font-medium">
          持たざる者（凡人）がBクワドラント（真の資産家）へ向かうためには、<br/>
          堅実に<span className="text-accent text-lg font-bold mx-1 border-b-2 border-accent">「ビジネス・起業」</span>を選ぶことが唯一の近道です。
        </p>
      </div>
    </div>
  </SlideLayout>
);

const Ch4_2 = () => (
  <SlideLayout chapter="Chapter 4" title="起業のステップ（通常のビジネスとコミュニティ主体の違い）">
     <div className="flex flex-col lg:flex-row gap-6 items-center justify-center h-full mt-4">

        {/* 左側：従来の起業 */}
        <div className="flex-1 bg-slate-50 rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col items-center text-center w-full">
          <h3 className="font-bold text-secondary text-lg mb-6 pb-2 border-b border-gray-300 w-full opacity-70">通常の起業ステップ</h3>
          <div className="flex flex-col gap-3 w-full opacity-60">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
              <span className="text-[10px] font-bold text-gray-400 mb-1">Step 1</span>
              <p className="font-semibold text-sm text-secondary">資金調達</p>
              <p className="text-[10px] text-gray-500 mt-1">数千万必要・自己資金不足は即倒産</p>
            </div>
             <div className="text-gray-300"><ArrowRight size={16} className="rotate-90 mx-auto" strokeWidth={3}/></div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
              <span className="text-[10px] font-bold text-gray-400 mb-1">Step 2</span>
              <p className="font-semibold text-sm text-secondary">ビジネス構築</p>
              <p className="text-[10px] text-gray-500 mt-1">良いモデルほど即座に大手に模倣される</p>
            </div>
             <div className="text-gray-300"><ArrowRight size={16} className="rotate-90 mx-auto" strokeWidth={3}/></div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
              <span className="text-[10px] font-bold text-gray-400 mb-1">Step 3</span>
              <p className="font-semibold text-sm text-secondary">集客（広告）</p>
              <p className="text-[10px] text-gray-500 mt-1">認知度ゼロからの莫大な広告費の消耗戦</p>
            </div>
          </div>
          <p className="text-xs text-red-500 font-bold mt-6">ハイリスクで生存率が極めて低い戦い</p>
        </div>

        {/* VS 矢印 */}
        <div className="bg-accent text-white font-bold p-3 rounded-full flex shrink-0 shadow-lg z-10 -my-4 lg:-mx-4 lg:my-0">
          VS
        </div>

        {/* 右側：コミュニティ起業 */}
        <div className="flex-[1.5] bg-white rounded-2xl p-6 md:p-8 border-2 border-accent/30 shadow-lg relative overflow-hidden w-full h-full flex flex-col">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-bl-full -z-10"></div>
          
          <h3 className="font-bold text-accent text-xl mb-6 pb-2 border-b border-accent/20 flex items-center justify-between">
            <span>コミュニティ主体の起業</span>
            <ShieldCheck size={24} className="text-green-500" />
          </h3>
          
          <div className="flex-1 flex flex-col justify-center gap-4 relative z-10">
            {/* Step 1 */}
            <div className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent mb-0.5 block">Step 1</span>
                <h4 className="font-bold text-primary text-sm mb-1">チーム・仲間づくり</h4>
                <p className="text-xs text-secondary/70 leading-relaxed">
                  共通のビジョンを持つ、信頼できる創業メンバーを<strong className="text-blue-600 mx-0.5">「先に」</strong>集める。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4 bg-green-50/50 p-4 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <BarChart3 size={24} />
              </div>
               <div>
                <span className="text-[10px] font-bold text-accent mb-0.5 block">Step 2</span>
                <h4 className="font-bold text-primary text-sm mb-1">ファン（顧客）づくり</h4>
                <p className="text-xs text-secondary/70 leading-relaxed">
                 「このチームだから買いたい」というファンを<strong className="text-green-600 mx-0.5">「先に」</strong>作る。起業時の圧倒的な売上基盤となる。（※サブスク経済圏のアプローチ）
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <Building2 size={24} />
              </div>
               <div>
                <span className="text-[10px] font-bold text-accent mb-0.5 block">Step 3 & 4</span>
                <h4 className="font-bold text-primary text-sm mb-1">ビジネス構築・店舗出店</h4>
                <p className="text-xs text-secondary/70 leading-relaxed">
                  すでに強固なチームと顧客（需要）があるため、事業参入時点で<strong className="text-amber-600 mx-0.5">必ず成功する状態でスタート</strong>できる。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 新設：市場成長のエビデンス */}
      <div className="w-full flex-shrink-0 mt-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto h-[160px] relative z-10">
        <div className="flex-1">
           <h4 className="text-sm font-bold text-primary mb-1">【エビデンス】 なぜ「ファン（継続的関係）」が最強なのか？</h4>
           <p className="text-xs text-secondary/80 leading-relaxed">
             国内のサブスクリプション（定額・継続課金）市場は右肩上がりで成長を続けており、推計1.5兆円規模に達します。
             これは<strong>「都度売り」から「継続的な関係性（コミュニティ）」へのビジネスのパラダイムシフト</strong>が起きている証拠です。
           </p>
        </div>
        <div className="w-[300px] h-full flex flex-col bg-slate-50 rounded-lg p-2 border border-slate-100">
          <span className="text-[10px] text-gray-500 text-center font-bold mb-1">国内サブスクリプション市場規模推移（億円）</span>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subMarketData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" tick={{fontSize: 10, fill: '#64748B'}} />
                <YAxis tick={{fontSize: 10, fill: '#64748B'}} />
                <Tooltip contentStyle={{ fontSize: '12px' }}/>
                <Bar dataKey="value" fill="#3B82F6" radius={[2, 2, 0, 0]} name="市場規模(億円)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
            
  </SlideLayout>
);

const Ch4_3 = () => (
  <SlideLayout chapter="Chapter 4" title="すでに顧客がいるということの価値">
    <div className="flex flex-col items-center justify-center h-full gap-8">
      
      <p className="text-xl text-primary font-medium text-center">
        世の中のビジネスにおける最大の障壁は<br/>
        <strong className="text-red-500 font-bold border-b-2 border-red-500 pb-1">「認知ゼロからの集客」</strong>です。
      </p>
      
      <div className="w-full max-w-4xl bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-accent"></div>
        <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
          <Zap className="text-yellow-500 fill-yellow-500" />
          コミュニティ主体のエコシステムの強み
        </h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 shrink-0 text-sm">例</div>
             <div>
                <p className="text-sm font-bold text-secondary mb-1">Amazon / Apple</p>
                <p className="text-xs text-secondary/70 leading-relaxed">
                  物理デバイスやECという「プラットフォーム（人が集まる仕組み）」を先に構築。そこに本、家電、音楽、映画、金融サービスを乗せることで、新規事業が一瞬で軌道に乗る。
                </p>
             </div>
          </div>
          <div className="flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 shrink-0 text-sm">例</div>
             <div>
                <p className="text-sm font-bold text-secondary mb-1">LINE / セブンイレブン</p>
                <p className="text-xs text-secondary/70 leading-relaxed">
                  チャットインフラやコンビニ店舗という「日常の拠り所（コミュニティ）」を構築。そこにゲーム、マンガ、証券、コーヒー、ATMを乗せ、インフラとして定着させる。
                </p>
             </div>
          </div>
        </div>
      </div>

       <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl w-full max-w-4xl text-center mt-4">
         <p className="text-lg font-bold text-accent">
           「コミュニティ（顧客・仲間）」を最初に作れば、<br className="md:hidden" />後はそこに「必要なサービス・商品」を乗せるだけ。
         </p>
         <p className="text-sm text-secondary/80 mt-2 font-medium">顧客のニーズに応えるビジネスへの参入が、極めて低リスク・高確率で成功します。</p>
      </div>

    </div>
  </SlideLayout>
);


export const Chapter4Slides = [
  <Ch4_1 key="4-1" />,
  <Ch4_2 key="4-2" />,
  <Ch4_3 key="4-3" />,
];
