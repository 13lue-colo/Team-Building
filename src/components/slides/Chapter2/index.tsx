import React from 'react';
import { SlideLayout } from '../../ui/SlideLayout';

const Ch2_1 = () => (
  <SlideLayout chapter="Chapter 2" title="この世の働き方は4つに分かれる">
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="relative w-full max-w-2xl aspect-video bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col p-8">
        
        {/* 十字線 */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2"></div>
        
        {/* 左上 E */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 flex flex-col items-center justify-center p-4">
          <div className="text-6xl font-black text-blue-500 opacity-90 mb-2">E</div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">Employee</p>
          <span className="text-xs text-slate-400 mt-1">従業員</span>
        </div>
        
        {/* 左下 S */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 flex flex-col items-center justify-center p-4">
          <div className="text-6xl font-black text-green-500 opacity-90 mb-2">S</div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-green-50 px-3 py-1 rounded">Self-Employed</p>
          <span className="text-xs text-slate-400 mt-1">自営業</span>
        </div>

        {/* 右上 B */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 flex flex-col items-center justify-center p-4">
          <div className="text-6xl font-black text-accent opacity-90 mb-2">B</div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">Business Owner</p>
          <span className="text-xs text-slate-400 mt-1">ビジネスオーナー</span>
        </div>

        {/* 右下 I */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 flex flex-col items-center justify-center p-4">
          <div className="text-6xl font-black text-purple-500 opacity-90 mb-2">I</div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded">Investor</p>
          <span className="text-xs text-slate-400 mt-1">投資家</span>
        </div>

      </div>
      
      <p className="text-secondary/80 text-sm font-medium">現在、あなたはどこのクワドラント（領域）に属していますか？</p>
    </div>
  </SlideLayout>
);

const Ch2_2 = () => (
  <SlideLayout chapter="Chapter 2" title="左側の世界（労働収入）の限界">
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="flex-[2] bg-slate-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">「時間」を交換して収入を得る</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 text-secondary/80 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            自分の労働が止まると、収入もストップする（病気やケガのリスク）。
          </li>
          <li className="flex gap-3 text-secondary/80 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            安定して見えるが、構造的な「収入の天井」が存在する。
          </li>
          <li className="flex gap-3 text-secondary/80 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            思考は受動的・他責になりやすい（「上司が悪い」「環境が悪い」）。
          </li>
          <li className="flex gap-3 text-red-600 font-bold text-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
            税金は給与から「引かれてから使う」ため、手元に残りにくい。
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center">
        <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
          <h4 className="font-bold text-lg text-primary mb-2">E（従業員）</h4>
          <p className="text-xs text-secondary/70">会社の仕組みの中で、与えられた役割を果たす。安定の見返りに自由と青天井の収入を放棄している状態。</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <h4 className="font-bold text-lg text-primary mb-2">S（自営業）</h4>
          <p className="text-xs text-secondary/70">自由度は高いが「自分＝商品・現場」。頑張れば一時的に収入は増えるが、忙しさの限界が収益の限界となる。</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch2_3 = () => (
  <SlideLayout chapter="Chapter 2" title="右側の世界（仕組み収入）の力">
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="flex-[2] bg-accent/5 p-8 rounded-2xl border border-accent/20 flex flex-col justify-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-bl-full -z-10" />
        <h3 className="text-2xl font-bold text-accent border-b border-accent/20 pb-2">「仕組み」と「チーム」でレバレッジをかける</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 text-secondary/90 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            他人の時間とお金（力）が価値を生み出し、拡張していく。
          </li>
          <li className="flex gap-3 text-secondary/90 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            自分が現場にいなくても（不在でも）回る構造。
          </li>
          <li className="flex gap-3 text-secondary/90 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            思考は全て「自責（自分がどう動くか）」。
          </li>
          <li className="flex gap-3 text-blue-600 font-bold text-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
            経費を「使ってから課税される」ため、圧倒的に有利な税制。
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center">
        <div className="bg-white p-6 rounded-2xl border-l-4 border-accent shadow-sm">
          <h4 className="font-bold text-lg text-primary mb-2">B（ビジネスオーナー）</h4>
          <p className="text-xs text-secondary/70">ビジネスシステム（権利）を所有する。再現性とスケールが生まれ、本物の時間的・経済的自由を得るステップ。</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-l-4 border-purple-500 shadow-sm">
          <h4 className="font-bold text-lg text-primary mb-2">I（投資家）</h4>
          <p className="text-xs text-secondary/70">労働から完全に切り離され、お金に働かせる世界。最小の時間で最大のレバレッジ。ただ、膨大な資本が必要。</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Ch2_4 = () => (
  <SlideLayout chapter="Chapter 2" title="左側と右側の「決定的な違い」">
    <div className="flex flex-col items-center justify-center gap-8 h-full max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 左 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4">
          <span className="bg-slate-100 text-slate-500 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">E / S</span>
          <h3 className="text-2xl font-bold text-primary">自分自身が仕組みの「一部」</h3>
          <p className="text-sm text-secondary/70">
            歯車の一部として機能する。<br/>自分が止まれば、収入も止まる。
          </p>
          <div className="p-4 bg-slate-50 rounded-xl mt-4 w-full">
            <span className="text-xs font-bold text-gray-400">行動の選択肢</span>
            <p className="text-sm font-semibold text-secondary mt-1">「働くか、辞めるか」</p>
          </div>
        </div>

        {/* 右 */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(52,152,219,0.1)] border-2 border-accent/20 flex flex-col items-center text-center gap-4 relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 rounded-full" />
          <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">B / I</span>
          <h3 className="text-2xl font-bold text-accent">仕組みの「所有者」</h3>
          <p className="text-sm text-secondary/70">
            歯車そのものを創り出し、所有する。<br/>自分が不在でも、収入は生まれ続ける。
          </p>
          <div className="p-4 bg-accent/5 rounded-xl mt-4 w-full">
            <span className="text-xs font-bold text-accent/60">行動の選択肢</span>
            <p className="text-sm font-semibold text-primary mt-1">「誰と組むか、何を創るか」</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl w-full text-center">
        <p className="text-xl font-bold text-primary tracking-wide">
          人生は「どれだけ努力したか」よりも、<br/>
          <span className="text-accent underline decoration-2 underline-offset-4 mx-1">「どのクワドラントで努力したか」</span>で決まります。
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Chapter2Slides = [
  <Ch2_1 key="2-1" />,
  <Ch2_2 key="2-2" />,
  <Ch2_3 key="2-3" />,
  <Ch2_4 key="2-4" />,
];
