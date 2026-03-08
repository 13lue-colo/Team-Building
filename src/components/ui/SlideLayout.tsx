import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  chapter?: string;
  title?: string;
  bgColor?: string; // e.g. 'bg-white', 'bg-slate-50'
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  chapter,
  title,
  bgColor = 'bg-white',
  className = '',
}) => {
  return (
    <div className={`flex flex-col h-full animate-fade-in gap-8 p-10 md:p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-100 ${bgColor} relative overflow-hidden ${className}`}>
      {/* 共通背景の微細な装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      {/* ヘッダー部分（Chapter & Title がある場合のみ表示） */}
      {(chapter || title) && (
        <div className="flex flex-col gap-2 z-10 shrink-0">
          {chapter && (
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              {chapter}
            </span>
          )}
          {title && (
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {title}
              </h2>
            </div>
          )}
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-blue-500 rounded-full mt-2" />
        </div>
      )}

      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col z-10 w-full min-h-0">
        {children}
      </div>
    </div>
  );
};
