import { Film } from '@/types/film';

export interface PromoState {
  data: Film | null;
  isLoading: boolean;
  error: string | null;
}
