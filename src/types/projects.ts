export interface Project {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
  tech?: string[];
  links?: {
    demo?: string;
    code?: string;
    caseStudy?: string;
  };
  tags?: string[];
  featured?: boolean;
}