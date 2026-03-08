import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="w-full h-[100dvh] bg-background text-primary flex flex-col justify-center items-center px-4 py-8 sm:px-8 md:px-12 lg:px-16 lg:py-12 overflow-hidden relative font-sans">
      {/* 共通のヘッダー・フッターや装飾をここに入れることができる */}
      {/* {children} を実際のコンテンツとする */}
      <div className="w-full max-w-[1200px] h-full flex flex-col justify-center gap-4 sm:gap-8 relative z-10 min-h-0">
        {children}
      </div>
      
      {/* モダンな装飾：うっすらとした背景グラデーション（主張しすぎない程度） */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
    </div>
  );
};

interface PresentationProps {
  slides: React.ReactNode[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-background select-none">
      {/* スライドコンテンツ */}
      {slides[currentSlide]}

      {/* ナビゲーション UI */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm border border-gray-100 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={24} className="text-secondary" />
        </button>
        
        <span className="text-sm font-medium text-secondary min-w-[3rem] text-center">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={24} className="text-secondary" />
        </button>
      </div>

      {/* メニューやロゴ等 */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 z-50">
        <div className="flex items-center gap-2 text-secondary/50 font-semibold tracking-wider text-xs sm:text-sm">
          <span>コミュニティ × ビジネス</span>
        </div>
      </div>
    </div>
  );
};
