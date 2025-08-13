import { Project } from "../../types/projects";

export const projectsData: Project[] = [
  {
    title: "Bot Discord ",
    description:
      "Un bot Discord basé sur Node.js, servant à gérer son temps de travail et à améliorer la productivité grâce à la méthode pomodoros.",
    image: {
      src: "/projects/Pomodojo.png",
      alt: "Capture d'écran de mon portfolio",
      width: 800,
      height: 600,
      priority: true,
    },
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      // demo: "https://mon-portfolio.com",
      code: "https://github.com/SAMPAIOAlexandre/DiscordPomodoro",
    },
    tags: ["Node.js", "Discord", "Productivity"],
    featured: true,
  },
];
