export interface Film {
  id: number;
  name: string;
  poster_image: string;
  previewImage: string;
  background_image: string;
  background_color: string;
  video_link: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scores_count: number;
  director: string;
  starring: string[];
  run_time: number;
  genre: string;
  released: number;
  is_favorite: boolean;
}
