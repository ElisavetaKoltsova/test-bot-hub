
import { AuthorizationStatus, NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getUserData = (state: Pick<State, NameSpace.User>) =>
  state[NameSpace.User].user;

export const getCodeVerifier = (state: Pick<State, NameSpace.User>) =>
  state[NameSpace.User].codeVerifier;
