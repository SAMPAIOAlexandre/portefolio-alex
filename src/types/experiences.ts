export interface Experience {
  id: number;
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
  startDate: string;
  endDate?: string;
}
