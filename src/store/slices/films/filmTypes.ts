import { Film } from '@/types/film';

export interface FilmsState {
  all: Film[];
  isLoading: boolean;
  error: string | null;
  selectedGenre: string;
  shownCount: number;
}
