export interface AuthResponse {
  id: number;
  username: string;
  roles: Array<string>;
  jwtExpiration: number;
}
