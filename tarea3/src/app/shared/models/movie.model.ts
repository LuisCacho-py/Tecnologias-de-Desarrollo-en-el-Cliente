export interface Movie {
  id: number;
  title: string;
  director: string;
  producer: string;
  genre: string;
  year: number;
  description: string;
  imageUrl: string;
  backdropUrl?: string;
  rating?: number;
  duration?: string;
  cast?: string[];
}
