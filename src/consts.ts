
export const STORAGE_KEY = 'userData';
export const AUTH_STATUS_KEY = 'authStatus';

export enum AppRoute {
  Chat = '/',
  Login = '/login'
}

export enum APIRoute {
  OAuthConsentUrl = '/auth/oauth/consent-url',
  OAuth = '/auth/oauth',
  Chat = '/chat',
  ChatList = '/chat/list',
  Message = '/message',
  Messages = '/messages',
  Send = '/send',
  Singin = '/auth/singin',
  Singup = '/auth/singup',
  Exit = '/auth/exit'
}

export enum NameSpace {
  ChatItems = 'CHATITEMS',
  User = 'USER'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
