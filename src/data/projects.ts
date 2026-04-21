export interface Project {
  id: number;
  teamName: string;
  image: string;
  videoUrl?: string;
  rank?: number;
  award?: string;
  category: 'open-innovation' | 'ai-agents-llm' | 'ethical-hacking';
}

export const projects: Project[] = [
  // Open Innovation
  {
    id: 1,
    teamName: "Morgan Koch and Jamie Frantz - Team 1",
    image: "./assets/team1.png",
    videoUrl: "./assets/team1.mp4",
    rank: 1,
    category: "open-innovation",
  },
  {
    id: 2,
    teamName: "Dylan Fisher and Nathan Englert - Team 2",
    image: "./assets/team2.png",
    videoUrl: "./assets/team2.mp4",
    category: "open-innovation",
  },
  {
    id: 4,
    teamName: "Isaac Bruner - Team 4",
    image: "./assets/team4.png",
    videoUrl: "./assets/team4.mp4",
    award: "Most Needed By Engineers",
    category: "open-innovation",
  },
  {
    id: 5,
    teamName: "Shane Lawrence and Owen Larmon - Team 5",
    image: "./assets/team5.png",
    videoUrl: "./assets/team5.mp4",
    award: "Best Forensics App",
    category: "open-innovation",
  },
  {
    id: 8,
    teamName: "Olivia Beck and Kaitlyn Milcoff - Team 8",
    image: "./assets/team8.png",
    videoUrl: "./assets/team8.mp4",
    award: "Most Commits",
    category: "open-innovation",
  },

  {
    id: 17,
    teamName: "Adzfar Daniel Aria Putera - Team 17",
    image: "./assets/team17.png",
    videoUrl: "./assets/team17.mp4",
    category: "open-innovation",
  },
  {
    id: 18,
    teamName: "Eric Zurn - Team 18",
    image: "./assets/team18.png",
    videoUrl: "./assets/team18.mp4",
    rank: 3,
    category: "open-innovation",
  },
  {
    id: 20,
    teamName: "Ian Perez and Luke Hackworth - Team 20",
    image: "./assets/team20.png",
    videoUrl: "./assets/team20.mp4",
    category: "open-innovation",
  },
  {
    id: 24,
    teamName: "Flame - Team 24",
    image: "./assets/team24.png",
    videoUrl: "./assets/team24.mp4",
    category: "open-innovation",
  },
  {
    id: 25,
    teamName: "Liam Good - Team 25",
    image: "./assets/team25.png",
    videoUrl: "./assets/team25.mp4",
    rank: 2,
    category: "open-innovation",
  },
  {
    id: 26,
    teamName: "Logan Lott - Team 26",
    image: "./assets/team26.png",
    videoUrl: "./assets/team26.mp4",
    category: "open-innovation",
  },
  {
    id: 28,
    teamName: "Davis Saynuk and Daniel Squair - Team 28",
    image: "./assets/team28.png",
    videoUrl: "./assets/team28.mp4",
    category: "open-innovation",
  },


  // AI Agents & LLMs
  {
    id: 32,
    teamName: "Alex Hasenbein - Team 32",
    image: "./assets/team32.png",
    videoUrl: "./assets/team32.mp4",
    rank: 1,
    category: "ai-agents-llm",
  },
  {
    id: 6,
    teamName: "Joel Sander and Nathan Mascia - Team 6",
    image: "./assets/team6.png",
    videoUrl: "./assets/team6.mp4",
    rank: 2,
    category: "ai-agents-llm",
  },
  {
    id: 9,
    teamName: "Mohammed Albattah and Alex Wriglesworth - Team 9",
    image: "./assets/team9.png",
    videoUrl: "./assets/team9.mp4",
    rank: 3,
    category: "ai-agents-llm",
  },
  {
    id: 3,
    teamName: "Jacqueline Thorward - Team 3",
    image: "./assets/team3.png",
    videoUrl: "./assets/team3.mp4",
    category: "ai-agents-llm",
  },
  {
    id: 11,
    teamName: "Dania Nasreen Abd Aziz - Team 11",
    image: "./assets/team11.png",
    videoUrl: "./assets/team11.mp4",
    category: "ai-agents-llm",
  },
  {
    id: 12,
    teamName: "Riley Fry and Adam Gavio - Team 12",
    image: "./assets/team12.png",
    videoUrl: "./assets/team12.mp4",
    award: "Best Sales Pitch Video",
    category: "ai-agents-llm",
  },
  {
    id: 15,
    teamName: "Uday Aditya Jain and Arjun Tiyagi - Team 15",
    image: "./assets/team15.png",
    videoUrl: "./assets/team15.mp4",
    award: "Funniest App Name",
    category: "ai-agents-llm",
  },
  {
    id: 21,
    teamName: "Muratbek Jusupov and Waisoon Tee - Team 21",
    image: "./assets/team21.png",
    videoUrl: "./assets/team21.mp4",
    award: "Most Hacky App",
    category: "ai-agents-llm",
  },
  {
    id: 27,
    teamName: "Christopher Zampogna and Patrick Zhao - Team 27",
    image: "./assets/team27.png",
    videoUrl: "./assets/team27.mp4",
    category: "ai-agents-llm",
  },
  {
    id: 31,
    teamName: "Justin Williams - Team 31",
    image: "./assets/team31.png",
    videoUrl: "./assets/team31.mp4",
    category: "ai-agents-llm",
  },

  // Ethical Hacking & Security
  {
    id: 19,
    teamName: "Christian Pritchard-Geddie and Siddharth Perumal - Team 19",
    image: "./assets/team19.png",
    videoUrl: "./assets/team19.mp4",
    rank: 1,
    category: "ethical-hacking",
  },
  {
    id: 7,
    teamName: "Nathan Fantoni and Lucas Mosher - Team 7",
    image: "./assets/team7.png",
    videoUrl: "./assets/team7.mp4",
    rank: 2,
    category: "ethical-hacking",
  },
  {
    id: 22,
    teamName: "Oludemilade Adenubi - Team 22",
    image: "./assets/team22.png",
    videoUrl: "./assets/team22.mp4",
    rank: 3,
    category: "ethical-hacking",
  },
];
