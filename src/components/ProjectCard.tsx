import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { teamName, image, title, rank, videoUrl } = project;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const getCardClass = () => {
    switch (rank) {
      case 1:
        return 'gold-card';
      case 2:
        return 'silver-card';
      case 3:
        return 'bronze-card';
      default:
        return '';
    }
  };
  
  const getBadgeDetails = () => {
    switch (rank) {
      case 1:
        return { color: 'bg-hackathon-gold text-black', emoji: '🥇', label: '1st Place' };
      case 2:
        return { color: 'bg-hackathon-silver text-black', emoji: '🥈', label: '2nd Place' };
      case 3:
        return { color: 'bg-hackathon-bronze text-black', emoji: '🥉', label: '3rd Place' };
      default:
        return null;
    }
  };
  
  const badgeDetails = getBadgeDetails();
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`award-card bg-hackathon-card rounded-xl overflow-hidden transition-all duration-300 
                    hover:animate-card-hover shadow-lg ${getCardClass()} cursor-pointer`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {badgeDetails && (
            <div className={`award-badge ${badgeDetails.color} w-10 h-10 z-20`}>
              <span className="text-lg">{badgeDetails.emoji}</span>
            </div>
          )}
          
          <div className="h-48 overflow-hidden relative">
            {videoUrl ? (
              <>
                <img 
                  src={image} 
                  alt={title} 
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isHovering ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <video 
                  ref={videoRef}
                  src={videoUrl}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovering ? 'opacity-100' : 'opacity-0'
                  }`}
                  muted
                  playsInline
                  loop
                />
              </>
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-300">{teamName}</p>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-[50vw] max-h-[50vh]">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {videoUrl ? (
          <video 
            src={videoUrl}
            className="w-75 h-75"
            controls
            autoPlay
          />
        ) : (
          <img 
            src={image}
            alt={title}
            className="w-full h-80 object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
