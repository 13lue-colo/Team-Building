import React from 'react';
import { Network } from 'lucide-react';

const CoverSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in">
      <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mb-4">
        <Network size={48} className="text-accent" />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-accent font-semibold tracking-widest text-sm uppercase">Community × Business</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
          これからの時代の<br />
          新しい<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">「働き方」</span>と<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">「在り方」</span>
        </h1>
      </div>
      
      <p className="text-lg text-secondary/70 max-w-2xl mt-8 font-light">
        努力する「場所」を変え、仲間と共に物心両面で豊かな経営者へ
      </p>
      
      <div className="pt-16">
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default CoverSlide;
