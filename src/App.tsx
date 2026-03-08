import React from 'react';
import { Presentation, Slide } from './components/ui/Presentation';

// 各Chapterのスライド配列をインポート
import { Chapter0Slides } from './components/slides/Chapter0';
import { Chapter1Slides } from './components/slides/Chapter1';
import { Chapter2Slides } from './components/slides/Chapter2';
import { Chapter3Slides } from './components/slides/Chapter3';
import { Chapter4Slides } from './components/slides/Chapter4';
import { Chapter5Slides } from './components/slides/Chapter5';
import { Chapter6Slides } from './components/slides/Chapter6';

const App = () => {
  // 全スライドをフラットな配列として結合
  const slides = [
    ...Chapter0Slides,
    ...Chapter1Slides,
    ...Chapter2Slides,
    ...Chapter3Slides,
    ...Chapter4Slides,
    ...Chapter5Slides,
    ...Chapter6Slides,
  ].map((slideContent, index) => (
    <Slide key={`slide-${index}`}>
      {slideContent}
    </Slide>
  ));

  return <Presentation slides={slides} />;
};

export default App;
