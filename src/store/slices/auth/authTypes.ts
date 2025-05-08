export interface AuthInfo {
  token: string;
  email: string;
  name: string;
  avatar_Url?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  user: AuthInfo | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
