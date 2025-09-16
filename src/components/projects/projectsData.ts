import { Project } from "../../types/projects";

export const projectsData: Project[] = [
  {
    title: "Bot Discord ",
    description:
      "Un bot Discord basé sur Node.js, servant à gérer son temps de travail et à améliorer la productivité grâce à la méthode pomodoros.",
    image: {
      src: "/projects/Pomodojo.png",
      alt: "Capture d'écran du logo du bot Pomodojo",
      width: 800,
      height: 600,
      priority: true,
    },
    tech: ["Discord.js", "Node.js", "JavaScript"],
    links: {
      // demo: "https://mon-portfolio.com",
      code: "https://github.com/SAMPAIOAlexandre/DiscordPomodoro",
    },
    tags: ["Node.js", "Discord", "Productivity"],
    featured: true,
  },
  {
    title: "Senior Love",
    description:
      "Projet de fin de formation visant à créer un réseau social pour les seniors, facilitant la communication et le partage d'expériences pour les seniors.",
    image: {
      src: "/projects/Senior-Love.webp",
      alt: "Capture d'écran du logo Senior Love",
      width: 800,
      height: 600,
      priority: true,
    },
    tech: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      " Express",
      "PostgreSQL",
    ],
    links: {
      // demo: "https://senior-love.vercel.app",
      code: "https://github.com/SAMPAIOAlexandre/SeniorLoveFront",
    },
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    featured: true,
  },
  {
    title: "SceneForge",
    description:
      "Un générateur d'image IA utilisant l'API d'OpenAI pour créer des images à partir de descriptions textuelles.",
    image: {
      src: "/projects/SceneForge.png",
      alt: "Capture d'écran du logo de SceneForge",
      width: 800,
      height: 600,
      priority: true,
    },
    tech: ["Node.js", "JavaScript"],
    links: {
      // demo: "https://mon-portfolio.com",
      code: "https://github.com/SAMPAIOAlexandre/ai-image-pipeline",
    },
    tags: ["Node.js", "Javascript", "API"],
    featured: true,
  },
];
