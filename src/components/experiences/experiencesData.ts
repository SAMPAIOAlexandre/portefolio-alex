import { Experience } from "@/types/experiences";

export const experiencesData: Experience[] = [
  { 
    title: "Développeur Web Junior",
    description: "Développement d'applications web et mobile.",
    image: {
      src: "/experiences/developpeur-web-junior.jpg",
      alt: "Image de développeur web junior",
      width: 800,
      height: 600,
      priority: true,
    },
    startDate: "2022-01-01",
    endDate: "2023-01-01",
  },
  {
    title: "Stagiaire Développeur Frontend",
    description: "Conception et développement d'interfaces utilisateur.",
    image: {
      src: "/experiences/stagiaire-developpeur-frontend.jpg",
      alt: "Image de stagiaire développeur frontend",
      width: 800,
      height: 600,
      priority: true,
    },
    startDate: "2021-06-01",
    endDate: "2021-12-01",
  },
]