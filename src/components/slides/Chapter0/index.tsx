import { SlideLayout } from '../../ui/SlideLayout';
import { Network, Hand } from 'lucide-react';

const TitleSlide = () => (
  <SlideLayout bgColor="bg-slate-50">
    <div className="flex flex-col items-center justify-center h-full text-center space-y-10">
      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white shadow-md rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 transition-transform hover:scale-105">
        <Network size={36} className="text-accent sm:w-12 sm:h-12" />
      </div>
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-accent font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">Community × Business</h2>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
          これからの時代の<br />
          新しい<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">「働き方」</span>と<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">「在り方」</span>
        </h1>
      </div>
      <p className="text-base sm:text-xl text-secondary/70 max-w-2xl mt-6 sm:mt-10 font-light tracking-wide">
        努力する「場所」を変え、仲間と共に物心両面で豊かな経営者へ
      </p>
    </div>
  </SlideLayout>
);

const AgendaSlide = () => (
  <SlideLayout chapter="導入" title="本日のアジェンダ">
    <div className="flex flex-col justify-center h-full max-w-4xl mx-auto w-full gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {[
          { num: '01', title: '現状の確認', desc: 'なぜ今、働き方を見直す必要があるのか' },
          { num: '02', title: '資本主義のルール', desc: '4つのクワドラントと努力する「構造」' },
          { num: '03', title: '3つの資本', desc: '100年時代を生き抜くための資産構築の順序' },
          { num: '04', title: 'コミュニティ主体の起業', desc: 'ファンを先に作るリスクの低いビジネスモデル' },
          { num: '05', title: 'ビジネスの真髄', desc: '「何をやるか」ではなく「誰がやるか」と在り方' },
          { num: '06', title: '共に創る未来', desc: '投資回収のリアルと、最強のチーム作り' },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-xl transition-colors">
            <span className="text-xl sm:text-2xl font-bold text-accent/30">{item.num}</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-secondary/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

const QuestionSlide = () => (
  <SlideLayout bgColor="bg-accent text-white">
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12 relative z-10 w-full">
      <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm">
        <Hand size={48} className="text-white" />
      </div>
      <div className="space-y-4 sm:space-y-6 max-w-4xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          あなたは今の「働き方・収入・時間」に<br/>心から満足していますか？
        </h2>
        <p className="text-base sm:text-xl text-white/80 font-light mt-4 sm:mt-6 leading-relaxed">
          一生懸命働いているのに、なぜか豊かさを実感できない。<br/>
          その「違和感」の正体から、今日はお話しします。
        </p>
      </div>
    </div>
  </SlideLayout>
);

export const Chapter0Slides = [
  <TitleSlide key="0-1" />,
  <AgendaSlide key="0-2" />,
  <QuestionSlide key="0-3" />,
];
