
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
          Spring 2026 Hackathon
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        The Behrend ACM chapter hosted its Spring 2026 Hackathon, bringing together students across disciplines for an intense eight-hour build event. This year's competition featured three tracks: Open Innovation, where teams had full creative freedom to build anything they envisioned; AI Agents and LLMs, challenging participants to harness large language models and autonomous agents in practical applications; and Ethical Hacking and Security, where teams tackled real-world cybersecurity problems and built tools to expose or defend against vulnerabilities. Across all three tracks, students demonstrated creativity, technical depth, and the ability to ship working software under pressure.
      </p>
    </div>
  );
};

export default HackathonHeader;
