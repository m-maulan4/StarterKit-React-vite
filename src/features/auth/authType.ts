export interface AuthState {
  username: string | null;
  token_user: string | null;
}
export interface LoginRequest {
  username: string;
  password: string;
}
