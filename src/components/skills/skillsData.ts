import { SkillCategory } from "@/types/skills";

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    color: "text-orange-500",
    skills: [
      {
        id: 1,
        title: "HTML",
        image: { src: "/skills/html.svg", alt: "Logo HTML" },
      },
      {
        id: 2,
        title: "CSS",
        image: { src: "/skills/css.svg", alt: "Logo CSS" },
      },
      {
        id: 11,
        title: "JavaScript",
        image: { src: "/skills/javascript.svg", alt: "Logo Javascript" },
      },
      {
        id: 3,
        title: "React",
        image: { src: "/skills/react.svg", alt: "Logo React" },
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    color: "text-purple-500",
    skills: [
      {
        id: 4,
        title: "Node.js",
        image: { src: "/skills/nodejs.svg", alt: "Logo Node.js" },
      },
      {
        id: 5,
        title: "Express",
        image: { src: "/skills/express.svg", alt: "Logo Express" },
      },
    ],
  },
  {
    id: 3,
    title: "Bases de données",
    color: "text-yellow-500",
    skills: [
      {
        id: 6,
        title: "PostgreSQL",
        image: { src: "/skills/postgresql.svg", alt: "Logo PostgreSQL" },
      },
      {
        id: 7,
        title: "MongoDB",
        image: { src: "/skills/mongodb.svg", alt: "Logo MongoDB" },
      },
    ],
  },
  {
    id: 4,
    title: "Outils",
    color: "text-sky-500",
    skills: [
      {
        id: 8,
        title: "Git",
        image: { src: "/skills/git.svg", alt: "Logo Git" },
      },
      {
        id: 9,
        title:" GitHub",
        image: { src: "/skills/github.svg", alt: "Logo GitHub" },
      },
      {
        id: 10,
        title: "Postman",
        image: { src: "/skills/postman.svg", alt: "Logo Postman" },
      }
    ],
  },
];
