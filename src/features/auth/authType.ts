export interface AuthState {
  username: string;
  token_user: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  username: string;
}
