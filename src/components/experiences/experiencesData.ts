import { Experience } from "@/types/experiences";

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Développeur Web Frontend",
    poste: "Stagiaire",
    description:
      "Développement d'applications web en utilisant React, TypeScript et Tailwind CSS.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "logo de La Poste",
      priority: true,
    },
    startDate: "2022-01",
    endDate: null,
  },
  {
    id: 2,
    title: "Développeur Web Backend",
    poste: "Stagiaire",
    description:
      "Création d'API RESTful avec Node.js et Express, gestion de bases de données avec PostgreSQL.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "logo de La Poste",
      priority: true,
    },
    startDate: "2021-06",
    endDate: "2021-12",
  },
];
export default experiencesData;
