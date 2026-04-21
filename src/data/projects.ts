export interface Project {
  id: number;
  title: string;
  teamName: string;
  image: string;
  videoUrl?: string;
  rank?: number;
  category: 'ai-gestures' | 'algorithmic-trading' | 'health-wellness';
}

export const projects: Project[] = [
  // AI Gestures Projects
  {
    id: 2,
    teamName: "Ali Ostowar - Team 2",
    image: "./assets/team2.png",
    title: "Trading dashboard and trading algo",
    category: "algorithmic-trading",
    videoUrl: "./assets/team2.mp4",
    rank: 1
  },
  {
    id: 3,
    teamName: "Mohammed Albattah and Austin Wilson- Team 3",
    image: "./assets/team3.png",
    title: "RPS Game with Graphics and Multiplayer",
    category: "ai-gestures",
    videoUrl: "./assets/team3.mp4",
    rank: 3
  },
  {
    id: 4,
    teamName: "Jackie Thorward - Team 4",
    image: "./assets/team4.png",
    title: "3d Unity RPS game",
    category: "ai-gestures",
    videoUrl: "./assets/team4.mp4",
    rank: 1
  },
  {
    id: 5,
    teamName: "Adam Gavio and Riley Fry - Team 5",
    image: "./assets/team5.png",
    title: "history terminal and trading algorithm",
    category: "algorithmic-trading",
    videoUrl: "./assets/team5.mp4",
  },
  {
    id: 6,
    teamName: "Wai Tee and Muhammad Sallahuddin - Team 6",
    image: "./assets/team6.png",
     title: "Mobile RPS Roulette",
    category: "ai-gestures",
    videoUrl: "./assets/team6.mp4",
    rank: 2
  },

  // Algorithmic Trading Projects

  {
    id: 7,
    teamName: "Michael Meyers and Joseph Letko - Team 7",
    image: "./assets/team7.png",
    title: "RPS Battle",
    category: "ai-gestures",
    videoUrl: "./assets/team7.mp4",
  },
  {
    id: 8,
    teamName: "Muratbek Jusupov - Team 8",
    image: "./assets/team8.png",
    title: "Recipe Website",
    category: "health-wellness",
    videoUrl: "./assets/team8.mp4"
  },
  {
    id: 10,
    teamName: "Yusuf Jabbar and Islombek Shamsiev - Team 10",
    image: "./assets/team10.png",
     title: "Mindful - Best Sales Pitch",
    category: "health-wellness",
    videoUrl: "./assets/team10.mp4"
  },
  {
    id: 11,
    teamName: "Akash Vajjala - Team 11",
    image: "./assets/team11.png",
    title: "RPS with Custom Algo",
    category: "ai-gestures",
    videoUrl: "./assets/team11.mp4"
  },

  // Health & Wellness Projects
  {
    id: 12,
    teamName: "Joel Sander and Dylan Fisher - Team 12",
    image: "./assets/team12.png",
    title: "My Pack",
    category: "health-wellness",
    videoUrl: "./assets/team12.mp4",
    rank: 1
  },
  {
    id: 13,
    teamName: "Kaitlyn Milcoff and Olivia Beck - Team 13",
    image: "./assets/team13.png",
    title: "Trading dashboard and algo",
    category: "algorithmic-trading",
    videoUrl: "./assets/team13.mp4",
    rank: 3
  },
  
  {
    id: 16,
    teamName: "Vitaliy Pikalo and Ghali Ouaritini - Team 16 ", // No associated award info
    image: "./assets/team16.png",
    title: "RPS Multiplayer and RPS with difficulty",
    videoUrl: "./assets/team16.mp4",
    category: "ai-gestures",
  },
  {
    id: 17,
    teamName: "Carl Zhang and John Pham - Team 17", // No associated award info
    image: "./assets/team17.png",
    title: "Trading interface and SMA algo",
    category: "algorithmic-trading",
    videoUrl: "./assets/team17.mp4",
    rank:2 
  },
  {
    id: 19,
    teamName: "Jacob Riggs – Team 19", // No associated award info
    image: "./assets/team19.png",
    title: "Health Explorer",
    category: "health-wellness",
    videoUrl: "./assets/team19.mp4",
    rank: 3
  },
  {
    id: 21,
    teamName: "Owen Larmon and Omar Almutairi – Team 21", // No associated award info
    image: "./assets/team21.png",
    title: "DigiPals",
    category: "health-wellness",
    videoUrl: "./assets/team21.mp4"
  },
  {
    id: 22,
    teamName: "Daniel Pora and Collin Miller – Team 22", // No associated award info
    image: "./assets/team22.png",
    title: "Baby SWENG",
    category: "health-wellness",
    rank: 2,
    videoUrl: "./assets/team22.mp4"
  },
  {
    id: 24,
    teamName: "Liam Good - Team 24", // No associated award info
    image: "./assets/team24.png",
    title: "RPS Game",
    category: "ai-gestures",
    videoUrl: "./assets/team24.mp4"
  },
];
