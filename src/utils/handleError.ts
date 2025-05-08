import axios from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error: unknown, fallback = 'Request failed') => {
  if (axios.isAxiosError(error) && error.response?.data?.error) {
    toast.error(error.response.data.error);
  } else {
    toast.error(fallback);
  }
};
