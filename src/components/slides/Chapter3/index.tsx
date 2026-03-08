import { SlideLayout } from '../../ui/SlideLayout';
import { User, Users, Coins } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const happinessData = [
  { income: '200万', happiness: 30 },
  { income: '400万', happiness: 55 },
  { income: '600万', happiness: 75 },
  { income: '800万', happiness: 90 }, // ここでほぼピーク
  { income: '1000万', happiness: 92 },
  { income: '1500万', happiness: 94 },
  { income: '2000万', happiness: 95 },
];

const Ch3_1 = () => (
  <SlideLayout chapter="Chapter 3" title="人生を豊かにする「3つの資本」とは？">
    <div className="flex flex-col items-center justify-center h-full text-center gap-8">
      <p className="text-xl text-secondary/80 leading-relaxed font-medium">
        私たちが100年時代を生き抜くために必要な資産は<br />
        大きく分けて<strong className="text-accent text-2xl mx-1">3つ</strong>あります。
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center w-64">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <User size={32} />
          </div>
          <h3 className="text-lg font-bold text-primary mb-2">人的資本</h3>
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">自分自身（スキル・健康）</span>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex flex-col items-center w-64">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-lg font-bold text-primary mb-2">社会資本</h3>
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">つながり（人脈・信頼）</span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col items-center w-64">
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-4">
            <Coins size={32} />
          </div>
          <h3 className="text-lg font-bold text-primary mb-2">金融資本</h3>
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">お金（収入・資産）</span>
        </div>
      </div>
      
      <p className="text-accent font-bold text-lg mt-6">
        多くの人は「金融資本（お金）」だけを追い求めますが、<br />
        この3つには<span className="underline decoration-2 underline-offset-4">獲得すべき「絶対的な順序」</span>が存在します。
      </p>
    </div>
  </SlideLayout>
);

const Ch3_2 = () => (
  <SlideLayout chapter="Chapter 3" title="人的資本（自分自身という資産）">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="flex-[2] space-y-6">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
          <div className="bg-blue-50 p-4 rounded-xl text-blue-600"><User size={32}/></div>
          <div>
            <span className="text-xs font-bold text-blue-500 tracking-widest uppercase">Human Capital</span>
            <h3 className="text-2xl font-bold text-primary">自分自身の「スキル・魅力・健康」</h3>
          </div>
        </div>
        <p className="text-secondary/80 leading-relaxed text-sm">
          自らの努力によって育てることができる最初の資本。<br/>
          成長すれば収入を生むが、最大の弱点は<strong>「持続性がない」</strong>ことです。
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
             時間とともに衰え、年齢とともに減少していく
          </li>
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
             病気やケガで突然ゼロになるリスク（労働集約型の弱点）
          </li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-4">
          <p className="text-sm font-semibold text-blue-800">
            結論：自分一人に依存する働き方は持続しない。<br/>
            人的資本は「他者と組んで拡張する」ためのツールに過ぎない。
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
         <span className="text-xs text-gray-400 mb-6">※ライフサイクル（年齢と価値の推移イメージ）</span>
         <div className="w-full h-32 relative flex items-end">
            {/* 年齢ごとの上昇と下降のカーブ */}
            <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
              <path d="M 0 50 Q 50 -20 100 50" fill="none" stroke="#3b82f6" strokeWidth="3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="2" />
            </svg>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-bold">働き盛り</div>
         </div>
         <div className="flex justify-between w-full text-xs text-gray-400 mt-2">
            <span>若年層</span><span>高齢期</span>
         </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch3_3 = () => (
  <SlideLayout chapter="Chapter 3" title="社会資本（つながりから生まれる資産）">
    <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <div className="w-full h-48 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-green-50/50 rounded-full blur-2xl" />
          <Users size={80} className="text-green-500 relative z-10" />
          {/* 本来はネットワークツリー等の図解を入れる */}
        </div>
        <p className="text-xs text-secondary/60 mt-4 font-semibold uppercase tracking-widest text-center">Network / Trust / Community</p>
      </div>

      <div className="flex-[2] space-y-6">
        <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
          <div className="bg-green-50 p-4 rounded-xl text-green-600"><Users size={32}/></div>
          <div>
             <span className="text-xs font-bold text-green-500 tracking-widest uppercase">Social Capital</span>
            <h3 className="text-2xl font-bold text-primary">人脈・紹介・信頼関係</h3>
          </div>
        </div>
        <p className="text-secondary/80 leading-relaxed text-sm">
          唯一、死ぬまで価値が減らない本質的な資本。<br/>
          目には見えないが、使い方次第で<span className="font-bold text-accent">金融資本よりもはるかに強いレバレッジ</span>を持つ。
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
             どんな困難に陥っても、助け合える仲間がいることの強さ
          </li>
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
             自分のリソース（時間・能力）の限界を、他者の力で突破できる
          </li>
        </ul>
        <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500 mt-4">
          <p className="text-sm font-semibold text-green-800">
            結論：ビジネスも人生も、人との関係（コミュニティ）の中でしか拡大しない。
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch3_4 = () => (
  <SlideLayout chapter="Chapter 3" title="金融資本（お金が生み出す価値）">
     <div className="flex flex-col md:flex-row gap-8 h-full items-center">
      <div className="flex-[2] space-y-6">
         <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
          <div className="bg-amber-50 p-4 rounded-xl text-amber-600"><Coins size={32}/></div>
          <div>
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">Financial Capital</span>
            <h3 className="text-2xl font-bold text-primary">収入・資産・目に見える数値</h3>
          </div>
        </div>
        <p className="text-secondary/80 leading-relaxed text-sm">
          誰もが最初に欲しがる資本。しかし、目的が曖昧なままの金融資本は、量が増えるほどに空虚になっていく性質があります。
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
             年収800万円（世帯年収約1500万円）を超えると幸福度は頭打ちになる（※行動経済学・カーネマン教授の研究等）
          </li>
          <li className="flex gap-3 text-sm text-secondary">
             <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
             お金だけで集まった人間関係は、お金が尽きると容易に崩壊する
          </li>
        </ul>
        <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500 mt-4">
          <p className="text-sm font-semibold text-amber-800">
            結論：お金＝幸せではない。<br/>金融資本は、より良い目的のために「使う」ことで初めて価値を持つ。
          </p>
        </div>
      </div>

       <div className="flex-1 w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
         <span className="text-sm font-bold text-secondary mb-1 block">年収と幸福度の相関イメージ</span>
         <span className="text-[10px] text-gray-400 mb-4 block">※ダニエル・カーネマンらの研究に基づく傾向</span>
         
         <div className="w-full h-40 relative flex items-end">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={happinessData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHappiness" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="income" tick={{fontSize: 10, fill: '#64748B'}} />
                <YAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Area type="monotone" dataKey="happiness" stroke="#f59e0b" fillOpacity={1} fill="url(#colorHappiness)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
             <div className="absolute top-4 right-4 bg-amber-100 border border-amber-200 text-amber-800 text-xs px-2 py-1 rounded shadow-sm font-bold">約800万で頭打ち</div>
         </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch3_5 = () => (
  <SlideLayout chapter="Chapter 3" title="獲得すべき「順序」の間違いと正解">
     <div className="flex flex-col items-center justify-center h-full gap-10 max-w-4xl mx-auto w-full">
      
      {/* 失敗する順序 */}
      <div className="w-full flex flex-col gap-2">
         <span className="text-sm font-bold text-red-500">❌ 失敗する多くの人が陥る罠（お金を先に追う）</span>
         <div className="bg-slate-50 border border-red-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 opacity-70">
            <div className="bg-white p-3 rounded-lg border border-gray-200 flex-1 text-center w-full">
               <span className="text-xs text-gray-400 block mb-1">Step 1</span>
               <span className="font-bold text-primary">金融資本（お金）</span>
            </div>
            <span className="text-red-400 font-bold">→</span>
            <div className="bg-white p-3 rounded-lg border border-gray-200 flex-1 text-center w-full">
               <span className="text-xs text-gray-400 block mb-1">Step 2</span>
               <span className="font-bold text-primary text-sm">人的資本（健康）を失う</span>
            </div>
            <span className="text-red-400 font-bold">→</span>
            <div className="bg-white p-3 rounded-lg border border-gray-200 flex-1 text-center w-full">
               <span className="text-xs text-gray-400 block mb-1">Step 3</span>
               <span className="font-bold text-primary text-sm">社会資本（人・信頼）が離れる</span>
            </div>
         </div>
      </div>

      {/* 成功する順序 */}
       <div className="w-full flex flex-col gap-2">
         <span className="text-sm font-bold text-accent">⭕️ 成功する「手に入れるべく順番」</span>
         <div className="bg-white border-2 border-accent/30 shadow-[0_4px_20px_rgba(52,152,219,0.1)] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex-1 text-center w-full relative">
               <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">土台</span>
               <span className="text-xs text-blue-400 block mb-1">Step 1</span>
               <span className="font-bold text-blue-700">人的資本（自己成長）</span>
            </div>
            <span className="text-accent font-bold text-xl">＋</span>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex-1 text-center w-full relative">
               <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">レバレッジ</span>
               <span className="text-xs text-green-400 block mb-1">Step 2</span>
               <span className="font-bold text-green-700">社会資本（仲間・信頼）</span>
            </div>
            <span className="text-accent font-bold text-2xl">＝</span>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-200 p-4 rounded-xl border border-amber-200 flex-1 text-center w-full relative shadow-sm transform scale-105">
               <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">結果</span>
               <span className="text-xs text-amber-600 block mb-1">Step 3</span>
               <span className="font-bold text-amber-900">金融資本（大きな富）</span>
            </div>
         </div>
      </div>

       <p className="text-center font-bold text-primary mt-4">
         「自分自身を磨き（人的）」、そして「仲間と信頼を築く（社会）」。<br/>
         その強固なプラットフォームがあって初めて、<span className="text-accent">圧倒的かつ持続的な結果（金融）</span>が生まれます。
       </p>

    </div>
  </SlideLayout>
);


export const Chapter3Slides = [
  <Ch3_1 key="3-1" />,
  <Ch3_2 key="3-2" />,
  <Ch3_3 key="3-3" />,
  <Ch3_4 key="3-4" />,
  <Ch3_5 key="3-5" />,
];
