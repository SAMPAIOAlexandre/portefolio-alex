export interface Experience {
  id: number;
  title: string;
  poste?:string;
  description?: string;
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  startDate: string;
  endDate?: string | null
}
