import React from 'react';

const Chapter2 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 02</span>
        <h2 className="text-3xl font-bold text-primary">働き方のルール（4つのクワドラント）</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
        
        {/* 左側：労働収入 */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="bg-slate-50 p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-secondary text-lg">左側の世界（労働収入）</h3>
              <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">時間 ＝ お金</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
              {/* E */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  E
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Employee（従業員）</h4>
                  <p className="text-sm text-secondary/80 leading-relaxed">
                    時間を会社に提供して給与を得る。安定しているように見えて、「自分が止まれば収入も止まる」構造であり、収入の天井がある。
                  </p>
                </div>
              </div>
              {/* S */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Self-Employed（自営業）</h4>
                  <p className="text-sm text-secondary/80 leading-relaxed">
                    自分の力で収入を作る。自由度は高いが「自分＝現場」であるため、忙しさの限界が収入の限界になる。拡張しにくいモデル。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：不労収入・仕組み */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="bg-white rounded-2xl shadow-[0_0_20px_rgba(52,152,219,0.1)] border border-accent/20 overflow-hidden flex flex-col h-full relative">
            <div className="bg-accent/5 p-4 border-b border-accent/10 flex items-center justify-between">
              <h3 className="font-bold text-accent text-lg">右側の世界（仕組み収入）</h3>
              <span className="text-xs font-semibold bg-accent text-white px-2 py-1 rounded shadow-sm">資産 ＝ お金</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
              {/* B */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-sm">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Business Owner（ビジネスオーナー）</h4>
                  <p className="text-sm text-secondary/80 leading-relaxed">
                    「仕組み」と「チーム」を所有し、他人の時間と力が価値を生む構造。<span className="font-bold text-accent">自分が不在でも回る</span>ため、再現性とスケールが生まれる。
                  </p>
                </div>
              </div>
              {/* I */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  I
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Investor（投資家）</h4>
                  <p className="text-sm text-secondary/80 leading-relaxed">
                    お金に働かせて収益を得る世界。労働から完全に切り離された収入源だが、膨大な初期資本と高度な判断力が求められる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="mt-4 text-center">
        <p className="text-xl font-bold text-primary tracking-wide bg-white inline-block px-8 py-4 rounded-xl shadow-sm border border-gray-100">
          「努力の量」では人生は変わらない。<br />
          変えるべきは<span className="text-accent border-b-2 border-accent pb-1">「努力する場所 ＝ 構造」</span>である。
        </p>
      </div>

    </div>
  );
};

export default Chapter2;
