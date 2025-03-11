export enum AppRoute {
  Chat = '/',
  Login = '/login'
}

export enum APIRoute {
  OAuthConsentUrl = '/auth/oauth/consent-url',
  OAuth = '/auth/oauth',
  ChatList = '/chat/list',
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
