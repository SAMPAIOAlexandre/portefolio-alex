import { SkillCategory } from "@/types/skills";

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
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
        id: 3,
        title: "React",
        image: { src: "/skills/react.svg", alt: "Logo React" },
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
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
    title : "Outils",
    skills: [
      {
        id: 8,
        title: "Git",
        image: { src: "/skills/git.svg", alt: "Logo Git" },
      },
    ]
    },
];
