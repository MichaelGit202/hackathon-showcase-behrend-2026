
import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import { Project, projects } from '../data/projects';
import { Fingerprint, BarChart3, Heart } from 'lucide-react';

const ProjectTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-gestures' | 'algorithmic-trading' | 'health-wellness'>('ai-gestures');
  
  const getFilteredProjects = (): Project[] => {
    return projects.filter(project => project.category === activeTab);
  };
  
  const getTabClass = (tabName: typeof activeTab) => {
    return `px-6 py-4 rounded-t-lg text-base font-medium transition-all ${
      activeTab === tabName ? 'tab-active' : 'tab-inactive'
    }`;
  };

  //jank because martin wanted description on each slide
  const returnDescription = (act) =>{
    if (act == 'ai-gestures') return "Participants tackled the challenge of creating an AI Gesture-based Rock-Paper-Scissors game. This category pushed students to integrate gesture recognition technology, with many opting for MediaPipe, to design a functional and engaging game, from gesture input to on-screen gameplay."
    else if (act == "algorithmic-trading") return "A compelling challenge at the recent Behrend ACM hackathon was the Algorithmic Trader App category, which invited students to delve into the world of financial technology. Participants were provided with access to an API layer, complete with REST services, and tasked with consuming market data to develop sophisticated trading algorithms and intuitive user interfaces. In an impressive demonstration of their skills, over $1 million in simulated trades were executed within the eight-hour event as students strived to build the most effective strategies for portfolio enhancement and tracking."
    else if (act == 'health-wellness') return "The Behrend ACM hackathon also fostered innovation in the realm of personal well-being with its Health & Wellness App category. This broad and flexible challenge empowered students to design and develop applications across various platforms – mobile, tablet, or browser – catering to any aspect of health and wellness that sparked their creativity. Utilizing tools such as Lovable, claude, and Cursor, alongside mobile development frameworks, participants brought their unique visions for promoting healthier lifestyles to life during the intense eight-hour event."
  }
  
  return (
    <div className="max-w-7xl mx-auto mb-20">

    {/*added this jank because martin wanted descriptions for each page*/}
    <div className="my-8 px-4">
        <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center">
          {returnDescription(activeTab)}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row border-b border-gray-700 mb-8 px-4 overflow-x-auto">
        <button
          className={getTabClass('ai-gestures')}
          onClick={() => setActiveTab('ai-gestures')}
        >
          <div className="flex items-center space-x-2">
            <Fingerprint size={18} />
            <span>AI Gestures</span>
          </div>
        </button>
        
        <button
          className={getTabClass('algorithmic-trading')}
          onClick={() => setActiveTab('algorithmic-trading')}
        >
          <div className="flex items-center space-x-2">
            <BarChart3 size={18} />
            <span>Algorithmic Trading</span>
          </div>
        </button>
        
        <button
          className={getTabClass('health-wellness')}
          onClick={() => setActiveTab('health-wellness')}
        >
          <div className="flex items-center space-x-2">
            <Heart size={18} />
            <span>Health & Wellness</span>
          </div>
        </button>
      </div>

      
      {/* Tab Content with Animation */}
      <div className="animate-fade-in">
        <ProjectGrid projects={getFilteredProjects()} />
      </div>
    </div>
  );
};

export default ProjectTabs;
