export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export enum STATUS {
  _200 = 200,
  _201 = 201,
}

export interface ILoginResponse {
  status: STATUS;
  tokens: Tokens;
}
