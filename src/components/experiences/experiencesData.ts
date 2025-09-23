import { Experience } from "@/types/experiences";

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Déclarant en douane",
    poste: "Référent équipe apres-midi",
    description:
      "Gestion des opérations douanières, conformité réglementaire et coordination avec les parties prenantes pour assurer le bon déroulement des processus d'importation et d'exportation.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "logo de La Poste",
      priority: true,
    },
    startDate: "2021-05",
    endDate: null,
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    poste: "Stagiaire",
    description:
      "Création d'API RESTful avec Node.js et Express, gestion de bases de données avec PostgreSQL.",
    image: {
      src: "/experiences/logo-laposte.webp",
      alt: "logo de La Poste",
      priority: true,
    },
    startDate: "2025-05",
    endDate: "2025-05",
  },
  {
    id: 3,
    title: "Developpeur Full Stack",
    poste: "Stagiaire",
    description:
      "Développement d'une application web de gestion de tâches avec React pour le frontend et Node.js pour le backend.",
    image: {
      src: "/experiences/logo-humanAI.webp",
      alt: "logo de Ynov",
      priority: true,
    },
    startDate: "2024-11",
    endDate: "2025-01",
  },
];
export default experiencesData;
