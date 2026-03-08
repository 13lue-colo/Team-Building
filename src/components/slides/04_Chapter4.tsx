import React from 'react';
import { Building2, Users, Store, BarChart3, ArrowRight } from 'lucide-react';

const Chapter4 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-8">
      
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 04</span>
        <h2 className="text-3xl font-bold text-primary">コミュニティ主体の起業（ビジネスモデル）</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full mt-4">

        {/* 左側：従来の起業 */}
        <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-gray-200 opacity-80 flex flex-col items-center text-center">
          <h3 className="font-bold text-secondary text-lg mb-6 pb-2 border-b border-gray-300 w-full">通常の起業ステップ</h3>
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold text-gray-400 mb-1 block">Step 1</span>
              <p className="font-semibold text-secondary">資金調達</p>
              <p className="text-xs text-gray-500 mt-1">自己資金不足は即倒産リスク</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold text-gray-400 mb-1 block">Step 2</span>
              <p className="font-semibold text-secondary">ビジネス構築</p>
              <p className="text-xs text-gray-500 mt-1">大手資本に模倣されるリスク</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs font-bold text-gray-400 mb-1 block">Step 3</span>
              <p className="font-semibold text-secondary">集客（広告）</p>
              <p className="text-xs text-gray-500 mt-1">「良いものを作れば売れる」は幻想</p>
            </div>
          </div>
          <p className="text-sm text-red-500 font-bold mt-6">✖️ ハードルが高く、失敗時のダメージ大</p>
        </div>

        {/* 右側：コミュニティ起業 */}
        <div className="flex-[2] bg-white rounded-2xl p-8 border border-accent/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10"></div>
          <h3 className="font-bold text-accent text-xl mb-6 pb-2 border-b border-accent/20">チームで学ぶ起業（コミュニティ主体）</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <Users size={28} />
              </div>
              <span className="text-xs font-bold text-accent mb-1">Step 1</span>
              <h4 className="font-bold text-primary text-sm mb-2">チーム・仲間づくり</h4>
              <p className="text-xs text-secondary/70 leading-relaxed">
                信頼できる創業メンバーを先に集める。同じ目標に向かう仲間を得る。
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center -mx-4 z-10 text-gray-300">
               <ArrowRight size={20} />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
                <BarChart3 size={28} />
              </div>
              <span className="text-xs font-bold text-accent mb-1">Step 2</span>
              <h4 className="font-bold text-primary text-sm mb-2">ファンづくり</h4>
              <p className="text-xs text-secondary/70 leading-relaxed">
                ファン（顧客）を先に作ることで、起業した時の優位性（売上の基盤）を生む。
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center -mx-4 z-10 text-gray-300">
               <ArrowRight size={20} />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
                <Building2 size={28} />
              </div>
              <span className="text-xs font-bold text-accent mb-1">Step 3</span>
              <h4 className="font-bold text-primary text-sm mb-2">ビジネス構築</h4>
              <p className="text-xs text-secondary/70 leading-relaxed">
                相性が良いビジネス（人材・不動産等）を選ぶ。負けない経営ができる。
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center -mx-4 z-10 text-gray-300">
               <ArrowRight size={20} />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-3">
                <Store size={28} />
              </div>
              <span className="text-xs font-bold text-accent mb-1">Step 4</span>
              <h4 className="font-bold text-primary text-sm mb-2">店舗出店</h4>
              <p className="text-xs text-secondary/70 leading-relaxed">
                すでに強固なチームと顧客がいる状態で出店。仕入れも有利。社会的信用力UP。
              </p>
            </div>
          </div>

          <div className="mt-10 bg-accent/5 border border-accent/20 p-5 rounded-xl text-center">
            <p className="text-primary font-bold">
              「社会資本（仲間・ファン）」を中心にし、「信用」を深めることで、<br/>
              ビジネス構築時の<span className="text-accent text-lg mx-1">圧倒的優位性</span>と<span className="text-accent text-lg mx-1">持続可能な基盤</span>を築く。
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Chapter4;
