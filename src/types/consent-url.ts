export type Provider = {
  provider: string;
  redirect_uri: string;
}

export type ConsentUrl = {
  consentURL: string;
  code_verifier: string;
}