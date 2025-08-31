export interface Skill {
  id: number;
  title: string;
  image: {
    src : string;
    alt: string;
  }
}


export interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}