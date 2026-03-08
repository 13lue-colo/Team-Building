import React from 'react';
import { SlideLayout } from '../../ui/SlideLayout';
import { TrendingDown, Coins, Clock, AlertTriangle, Lightbulb } from 'lucide-react';

const Ch1_1 = () => (
  <SlideLayout chapter="Chapter 1" title="日本の現状①：上がらない給与と物価高">
    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-primary">実質賃金は低下傾向にある</h3>
        <p className="text-secondary/80 leading-relaxed text-sm">
          厚生労働省の統計データによれば、名目賃金（額面）が上がっていても、物価上昇に追いつかず「実質賃金」はマイナスが続く月が多くなっています。
        </p>
        <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400 mt-4">
          <p className="text-sm font-semibold text-red-700">【事実】一生懸命働いても、生活が楽にならない構造的な理由がここにあります。</p>
        </div>
      </div>
      <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center h-full min-h-[300px] w-full">
        {/* ダミーグラフ表現 */}
        <span className="text-xs text-gray-400 mb-4">※エビデンスイメージ：実質賃金の推移グラフ</span>
        <div className="flex items-end gap-2 w-full h-40 border-b border-l border-gray-300 p-2">
          {[80, 75, 78, 70, 65, 60, 55, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-red-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
          <span>過去</span><span>現在</span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch1_2 = () => (
  <SlideLayout chapter="Chapter 1" title="日本の現状②：可処分所得の圧迫">
    <div className="flex flex-col md:flex-row gap-8 items-center h-full">
      <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center h-full min-h-[300px] w-full">
         <span className="text-xs text-gray-400 mb-4">※エビデンスイメージ：国民負担率の推移グラフ</span>
         <div className="flex items-end gap-2 w-full h-40 border-b border-l border-gray-300 p-2">
          {[40, 42, 43, 45, 46, 47, 48, 49].map((h, i) => (
            <div key={i} className="flex-1 bg-blue-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
          <span>過去</span><span>現在 (約47%)</span>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Coins className="text-blue-500" size={28} />
          <h3 className="text-2xl font-bold text-primary">手取りは増えにくい時代</h3>
        </div>
        <p className="text-secondary/80 leading-relaxed text-sm mb-4">
          税金や社会保険料などの「国民負担率」は年々上昇し、現在は約40%後半で推移しています。<br/>給与総額が増えても「手取り（可処分所得）」はそれに比例して増えません。
        </p>
        <p className="text-sm font-semibold text-primary">
          ▶︎ これまでの<span className="text-accent">「会社に依存していれば安心」</span>という常識は、既に通用しないフェーズに入っています。
        </p>
      </div>
    </div>
  </SlideLayout>
);

const Ch1_3 = () => (
  <SlideLayout chapter="Chapter 1" title="構造的な限界（労働収入の天井）">
    <div className="flex flex-col justify-center h-full gap-8 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-center text-primary mb-2">昇給による収入アップのリアル</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-accent mb-2">10年</div>
          <p className="text-sm text-secondary/70">平均的な企業で、月10万円の昇給に必要な年数（目安）</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-accent mb-2">限界</div>
          <p className="text-sm text-secondary/70">役職やポジションにはポストの限りがあり、無制限に上がるわけではない</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-accent mb-2">1：1</div>
          <p className="text-sm text-secondary/70">「自分の時間」と「お金」を交換している以上、24時間という上限がある</p>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-400">
        <p className="text-secondary/80 text-sm leading-relaxed">
          自分が現場で働き続ける「労働集約型」のモデルでは、どんなに優秀でも収入の天井が明確に存在します。
        </p>
      </div>
    </div>
  </SlideLayout>
);

const Ch1_4 = () => (
  <SlideLayout chapter="Chapter 1" title="時間の枯渇：切り売りの罠">
     <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full w-full">
      <div className="w-48 h-48 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
        <Clock size={80} className="text-orange-400" />
      </div>
      <div className="flex flex-col gap-6 max-w-xl">
        <h3 className="text-2xl font-bold text-primary">残業・副業による「時間」の切り売り</h3>
        <p className="text-secondary/80 leading-relaxed">
          収入を増やそうとする際、多くの人が「働く時間を増やす（残業・アルバイト的な副業）」という選択をします。
        </p>
        <p className="text-secondary/80 leading-relaxed font-semibold border-b border-gray-200 pb-4">
          しかし、一時的にお金は増えても「自分の時間」が枯渇し、<br/>人生の豊かさからは遠ざかっていきます。
        </p>
        <p className="text-accent font-bold text-lg">
          私たちは「時間」を犠牲にするのではなく、<br/>「仕組み」によって時間を生み出す必要があります。
        </p>
      </div>
    </div>
  </SlideLayout>
);

const Ch1_5 = () => (
  <SlideLayout chapter="Chapter 1" title="終身雇用の崩壊と「個（自立）」の時代">
    <div className="flex flex-col justify-center h-full gap-8 max-w-4xl mx-auto w-full">
      
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm relative w-full flex flex-col justify-center min-h-[100px]">
          <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-10"><AlertTriangle size={64}/></div>
          <p className="text-lg font-medium text-secondary relative z-10 italic pl-4 border-l-4 border-gray-300">
            「終身雇用を守っていくのは難しい局面にきている」
          </p>
          <span className="text-xs text-gray-400 mt-3 block pl-4">某国内最大手自動車メーカー トップの発言（2019年）</span>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm relative w-full flex flex-col justify-center min-h-[100px]">
          <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-10"><AlertTriangle size={64}/></div>
          <p className="text-lg font-medium text-secondary relative z-10 italic pl-4 border-l-4 border-gray-300">
            「企業が一生面倒を見ることはできない」
          </p>
          <span className="text-xs text-gray-400 mt-3 block pl-4">経団連トップの発言（同上）</span>
        </div>
      </div>

      <div className="bg-accent/5 p-8 rounded-2xl border border-accent/20 mt-2 text-center w-full">
        <h3 className="text-xl font-bold text-accent mb-3">時代は「大企業依存」から「個人の自立」へシフト</h3>
        <p className="text-sm text-secondary/80 leading-relaxed">
          国や会社が一生の面倒を見てくれた時代（親世代の常識）は完全に終わりました。<br/>
          これからは、自らの力で「生きていく基盤」を構築する力（自分世代の常識）が問われます。
        </p>
      </div>

    </div>
  </SlideLayout>
);

const Ch1_6 = () => (
  <SlideLayout chapter="Chapter 1" title="結論：「努力が足りない」のではない">
    <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="p-6 bg-white rounded-full shadow-md">
        <Lightbulb size={48} className="text-yellow-500" />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
        あなたの<span className="text-accent mx-2">「努力不足」</span>ではありません。
      </h2>
      
      <p className="text-xl text-secondary/80 max-w-2xl leading-relaxed font-medium">
        どれだけ優秀で、どれだけ一生懸命働いても、<br/>
        <strong className="text-red-500 mx-1 border-b-2 border-red-500">「構造（システム）」</strong>が原因で頭打ちになるのであれば、<br/>
        変えるべきは<strong className="text-accent mx-1 text-2xl">「戦う場所（構造）」</strong>です。
      </p>

    </div>
  </SlideLayout>
);

export const Chapter1Slides = [
  <Ch1_1 key="1-1" />,
  <Ch1_2 key="1-2" />,
  <Ch1_3 key="1-3" />,
  <Ch1_4 key="1-4" />,
  <Ch1_5 key="1-5" />,
  <Ch1_6 key="1-6" />,
];
