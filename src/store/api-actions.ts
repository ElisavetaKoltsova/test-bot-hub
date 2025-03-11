import { createAsyncThunk } from "@reduxjs/toolkit"
import { ChatItem } from "../types/chat"
import { AppDispatch, State } from "../types/state"
import { AxiosInstance } from "axios"
import { APIRoute, AppRoute } from "../consts"
import { saveToken, dropToken } from "../services/token"
import { AuthData, OAuth, OAuthData } from "../types/auth-data"
import { User, UserData } from "../types/user-data"
import { redirectToRoute } from "./action"
import { ConsentUrl, Provider } from "../types/consent-url"
import { TOKEN } from "../services/api"

export const APIAction = {
  FETCH_CHAT_LIST: 'chat/list',
  CHECK_AUTH: 'user/checkAuth',
  SINGIN: 'user/singin',
  SINGUP: 'user/singup',
  EXIT: 'user/exit',
  FETCH_OAUTH_CONSENT_URL: 'auth/consent-url',
  FETCH_OAUTH: 'auth/oauth'
}

export const fecthChatListAction = createAsyncThunk<ChatItem[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_CHAT_LIST,
  async(_arg, {extra: api}) => {
    const { data } = await api.get<ChatItem[]>(APIRoute.ChatList, { headers: {
      Authorization: TOKEN,
      "Content-Type": "application/json"
    }});
    return data;
  }
);

export const fetchOAuthConsentUrlAction = createAsyncThunk<ConsentUrl, Provider, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_OAUTH_CONSENT_URL,
  async({provider, redirect_uri}, {extra: api}) => {
    const { data } = await api.get<ConsentUrl>(APIRoute.OAuthConsentUrl, {
      params: { provider, redirect_uri },
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json"
      }
    });
    return data;
  }
);

export const fetchOAuthAction = createAsyncThunk<OAuthData, OAuth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_OAUTH,
  async({provider, code, device_id, code_verifier, redirect_uri}, {extra: api}) => {
    const { data } = await api.post<OAuthData>(APIRoute.OAuth, { provider, code, device_id, code_verifier, redirect_uri }, {
      headers: {
        Authorization: code,
        "Content-Type": "application/json",
      }
    });
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.CHECK_AUTH,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<User>(APIRoute.Singin);
    return data;
  }
);

export const singinAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.SINGIN,
  async ({email, password}, {dispatch, extra: api}) => {
    const {  data } = await api.post<User>(APIRoute.Singin, {email, password}, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json"
      }
    });
    // saveToken(token);
    dispatch(redirectToRoute(AppRoute.Chat));
    return data;
  }
);

export const singupAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.SINGUP,
  async ({email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<User>(APIRoute.Singup, {email, password}, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json"
      }
    });
    // saveToken(token);
    dispatch(redirectToRoute(AppRoute.Chat));
    return data;
  }
);

export const exitAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.EXIT,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Exit);
    dropToken();
  }
);
