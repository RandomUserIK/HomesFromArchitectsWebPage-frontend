export interface AuthResponse {
  id: number;
  username: string;
  roles: Array<string>;
  token: string;
  type: string;
}
