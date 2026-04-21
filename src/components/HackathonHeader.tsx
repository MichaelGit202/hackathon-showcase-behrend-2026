
import React from 'react';

const HackathonHeader: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 mb-8">
      <div className="flex justify-center items-center mb-6 space-x-8">
        {/* Logo placeholders - replace with actual logo images when available */}
        <div className="bg-hackathon-card p-2 rounded-md w-32 h-32 flex items-center justify-center border border-hackathon-accent/30">
            <img className="rounded-md" src='./assets/behrend.jpg'></img>  
        </div>
        
        <div className="inline-block bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 p-[2px] rounded-lg">
          <div className="bg-hackathon-background rounded-lg px-6 py-2">
            <h4 className="font-inter font-medium text-hackathon-accent">ACM Behrend</h4>
          </div>
        </div>
        
        <div className="bg-hackathon-card p-2 rounded-md w-32 h-32 flex items-center justify-center border border-hackathon-accent/30">
          <img src='./assets/acm.png'></img>  
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-hackathon-accent to-hackathon-accent2 bg-clip-text text-transparent">
          Spring 2025 Hackathon
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        The Behrend ACM chapter recently hosted an engaging and fast-paced hackathon that challenged passionate students to conceive, develop, and test innovative projects within a compressed eight-hour timeframe. This year's event showcased a diverse range of technical interests, with participants tackling categories such as an AI gesture-based Rock-Paper-Scissors game leveraging technologies like Google MediaPipe, an algorithmic trading system, and a health & wellness application potentially utilizing React Native and REST services, alongside resources like Lovable, Cursor, React, and Claude.
      </p>
    </div>
  );
};

export default HackathonHeader;
