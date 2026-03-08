import { User, Users, Coins } from 'lucide-react';

const Chapter3 = () => {
  return (
    <div className="flex flex-col h-full animate-fade-in gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Chapter 03</span>
        <h2 className="text-3xl font-bold text-primary">人生を豊かにする「3つの資本」</h2>
        <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
      </div>

      <p className="text-secondary/80 text-lg">
        100年時代を生き抜くために必要な資産は、お金だけではありません。
        <strong className="text-primary mx-1">獲得する「順序」</strong>が決定的です。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mt-4">
        
        {/* Step 1: 人的資本 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:border-accent/40 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">人的資本</h3>
              <span className="text-xs text-secondary/60 font-semibold uppercase tracking-wider">Skill / Health / Attraction</span>
            </div>
          </div>
          <div className="mb-6 text-blue-500">
            <User size={40} strokeWidth={1.5} />
          </div>
          <h4 className="font-semibold text-primary mb-2">自分自身という資産</h4>
          <p className="text-sm text-secondary/70 leading-relaxed mb-4">
            スキル、魅力、体力など、自らの努力によって育てる資本。成長すれば収入を生むが、時間とともに衰え、年齢とともに減少していくリスクがある。
          </p>
          <div className="mt-auto bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border border-blue-100 font-medium">
            ▶ 自分一人に依存する働き方は、持続しない。「他者と組んで拡張する」土台。
          </div>
        </div>

        {/* Step 2: 社会資本 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:border-accent/40 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">社会資本</h3>
              <span className="text-xs text-secondary/60 font-semibold uppercase tracking-wider">Connection / Trust</span>
            </div>
          </div>
          <div className="mb-6 text-green-500">
            <Users size={40} strokeWidth={1.5} />
          </div>
          <h4 className="font-semibold text-primary mb-2">信頼とつながりから生まれる資本</h4>
          <p className="text-sm text-secondary/70 leading-relaxed mb-4">
            人脈、紹介、信頼。唯一、死ぬまで価値が減らない本質的な資本。目には見えないが、**金融資本よりもはるかに強いレバレッジ**を持つ。
          </p>
          <div className="mt-auto bg-green-50 p-4 rounded-xl text-sm text-green-800 border border-green-100 font-medium">
            ▶ ビジネスも人生も、人との関係の中（コミュニティ）でしか拡大しない。
          </div>
        </div>

        {/* Step 3: 金融資本 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:border-accent/40 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">金融資本</h3>
              <span className="text-xs text-secondary/60 font-semibold uppercase tracking-wider">Money / Asset</span>
            </div>
          </div>
          <div className="mb-6 text-amber-500">
            <Coins size={40} strokeWidth={1.5} />
          </div>
          <h4 className="font-semibold text-primary mb-2">お金が生み出す価値</h4>
          <p className="text-sm text-secondary/70 leading-relaxed mb-4">
            収入、資産、投資など、数値で可視化される資本。努力の「結果」として最後に手に入るもの。
          </p>
          <div className="mt-auto bg-amber-50 p-4 rounded-xl text-sm text-amber-800 border border-amber-100 font-medium">
            ▶ 目的が曖昧なままの金融資本は、量が増えるほど空虚になる。お金＝幸せではない。
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Chapter3;
