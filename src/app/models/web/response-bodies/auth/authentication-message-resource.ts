export interface AuthenticationMessageResource {
  id: number;
  username: string;
  roles: Array<string>;
  jwtExpiration: number;
}
