import { Experience } from "@/types/experiences";

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Développeur Web Frontend",
    poste:"Stagiaire",
    description:
      "Développement d'applications web en utilisant React, TypeScript et Tailwind CSS.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "Image d'un développeur web frontend",
      width: 64,
      height: 40,
      priority: true,
    },
    startDate: "Janvier 2022",
    endDate: "Présent",
  },
  {
    id: 2,
    title: "Développeur Web Backend",
    poste:"Stagiaire",
    description:
      "Création d'API RESTful avec Node.js et Express, gestion de bases de données avec PostgreSQL.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "Image d'un développeur web backend",
      width: 64,
      height: 40,
      priority: true,
    },
    startDate: "Février 2021",
    endDate: "Décembre 2021",
  },
];
export default experiencesData;
