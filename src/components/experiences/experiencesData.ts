import { Experience } from "@/types/experiences";


export const experiencesData: Experience[] = [
  {
    id : 1,
    title: "Développeur Web Frontend",
    description:
      "Développement d'applications web en utilisant React, TypeScript et Tailwind CSS.",
    image: {
      src: "",
      alt: "Image d'un développeur web frontend",
      width: 800,
      height: 600,
      priority: true,
    },
    startDate: "Janvier 2022",
    endDate: "Présent",
  },
  {
    id : 2,
    title: "Développeur Web Backend",
    description:
      "Création d'API RESTful avec Node.js et Express, gestion de bases de données avec PostgreSQL.",
    image: {
      src: "",
      alt: "Image d'un développeur web backend",
      width: 800,
      height: 600,
      priority: true,
    },
    startDate: "Février 2021",
    endDate: "Décembre 2021",
  },
];
export default experiencesData;