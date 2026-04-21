
import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import { Project, projects } from '../data/projects';
import { Lightbulb, Bot, ShieldAlert } from 'lucide-react';

type Category = 'open-innovation' | 'ai-agents-llm' | 'ethical-hacking';

const descriptions: Record<Category, string> = {
  'open-innovation': "The Open Innovation track gave teams complete creative freedom to build whatever they wanted. From productivity tools to games to web apps, participants brought their own ideas to life with no constraints on platform, language, or problem domain. This track consistently produces some of the most surprising and inventive projects of the event.",
  'ai-agents-llm': "The AI Agents and LLMs track challenged teams to go beyond basic API calls and build systems that leverage large language models in meaningful ways. Participants explored autonomous agents, retrieval-augmented generation, prompt engineering, and real-time AI integrations, pushing the boundaries of what can be built in a single day.",
  'ethical-hacking': "The Ethical Hacking and Security track put participants in the mindset of both attacker and defender. Teams built tools to identify vulnerabilities, demonstrate exploits, and develop defensive solutions across a range of security domains. This track rewards deep technical knowledge and the ability to think adversarially.",
};

const ProjectTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('open-innovation');

  const getFilteredProjects = (): Project[] =>
    projects.filter(project => project.category === activeTab);

  const getTabClass = (tabName: Category) =>
    `px-6 py-4 rounded-t-lg text-base font-medium transition-all ${
      activeTab === tabName ? 'tab-active' : 'tab-inactive'
    }`;

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="my-8 px-4">
        <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center">
          {descriptions[activeTab]}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row border-b border-gray-700 mb-8 px-4 overflow-x-auto">
        <button className={getTabClass('open-innovation')} onClick={() => setActiveTab('open-innovation')}>
          <div className="flex items-center space-x-2">
            <Lightbulb size={18} />
            <span>Open Innovation</span>
          </div>
        </button>

        <button className={getTabClass('ai-agents-llm')} onClick={() => setActiveTab('ai-agents-llm')}>
          <div className="flex items-center space-x-2">
            <Bot size={18} />
            <span>AI Agents &amp; LLMs</span>
          </div>
        </button>

        <button className={getTabClass('ethical-hacking')} onClick={() => setActiveTab('ethical-hacking')}>
          <div className="flex items-center space-x-2">
            <ShieldAlert size={18} />
            <span>Ethical Hacking &amp; Security</span>
          </div>
        </button>
      </div>

      <div className="animate-fade-in">
        <ProjectGrid projects={getFilteredProjects()} />
      </div>
    </div>
  );
};

export default ProjectTabs;
