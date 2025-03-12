import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { AUTH_STATUS_KEY, AuthorizationStatus, NameSpace, STORAGE_KEY } from '../../consts';
import { UserData } from '../../types/user-data';

const initialState: UserProcess = {
  authorizationStatus: 
    (localStorage.getItem(AUTH_STATUS_KEY) as AuthorizationStatus) || AuthorizationStatus.Unknown,
  user: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'),
  codeVerifier: ''
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    singinUser: (state, action: PayloadAction<UserData>) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      localStorage.setItem(AUTH_STATUS_KEY, AuthorizationStatus.Auth);
    },
    exitUser: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;

      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(AUTH_STATUS_KEY, AuthorizationStatus.NoAuth);
    }
  }
});

export const { singinUser, exitUser } = userProcess.actions;
