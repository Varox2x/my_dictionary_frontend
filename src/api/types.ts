export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export enum STATUS {
  _200 = 200,
}

export interface ILoginResponse {
  status: STATUS;
  tokens: Tokens;
}
