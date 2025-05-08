import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentGet, CommentPost } from '@/types/comment';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchComments = createAsyncThunk<
  CommentGet[],
  { film_id: number },
  { rejectValue: string }
>('films/fetchComments', async ({ film_id }, thunkAPI) => {
  try {
    const { data } = await api.get<CommentGet[]>(`/comments/${film_id}`);
    return data;
  } catch (error) {
    handleError(error, 'Failed to load comments');
    return thunkAPI.rejectWithValue('Failed to load comments');
  }
});

export const postComment = createAsyncThunk<
  CommentGet,
  { film_id: number; commentData: CommentPost },
  { rejectValue: string }
>('films/postComment', async ({ film_id, commentData }, thunkAPI) => {
  try {
    const { data } = await api.post<CommentGet>(`/comments/${film_id}`, commentData);
    return data;
  } catch (error) {
    handleError(error, 'Failed to post comment');
    return thunkAPI.rejectWithValue('Failed to post comment');
  }
});
