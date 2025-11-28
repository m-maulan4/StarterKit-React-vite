export interface AuthState {
  username: string;
  isLogin: boolean;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  username: string;
}
