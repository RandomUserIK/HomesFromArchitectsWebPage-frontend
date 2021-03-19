export interface ApplicationProperties {
  providers: SetAuthAndResourcesAddress;
  [k: string]: any;
}
export interface SetAuthAndResourcesAddress {
  auth: Auth;
  resources: Resources;

  [k: string]: any;
}
export interface Auth {
  address: string;
  authentication: string;
  sessionBearer?: string;
  endpoints?: string | { [k: string]: string };

  [k: string]: any;
}
export type Resources =
  | Resource
  | Array<Resource>;

export interface Resource {
  name: string;
  address: string;
  format: string;
  openApi?: string;
}
