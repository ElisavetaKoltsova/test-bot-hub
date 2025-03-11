import { User } from "./user-data";

export type AuthData = {
  email: string;
  password: string;
};

export type OAuth = {
  provider: string;
  code: string;
  device_id: string;
  code_verifier: string;
  redirect_uri: string;
};

export type OAuthData = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
