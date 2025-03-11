import { createAsyncThunk } from "@reduxjs/toolkit"
import { ChatItem, MessagesResponse } from "../types/chat"
import { AppDispatch, State } from "../types/state"
import { AxiosInstance } from "axios"
import { APIRoute, AppRoute } from "../consts"
import { dropToken } from "../services/token"
import { AuthData, OAuth, OAuthData } from "../types/auth-data"
import { User } from "../types/user-data"
import { redirectToRoute } from "./action"
import { ConsentUrl, Provider } from "../types/consent-url"

export const APIAction = {
  FETCH_CHAT_LIST: 'chat/list',
  FETCH_CHAT_ITEM_MESSAGES: 'chat/list/messages',
  CREATE_CHAT: '/chat/new',
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
    const { data: {data} } = await api.get(APIRoute.ChatList);
    return data;
  }
);

export const fecthChatItemMessaegsAction = createAsyncThunk<MessagesResponse, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_CHAT_ITEM_MESSAGES,
  async({id}, {extra: api}) => {
    const { data } = await api.get<MessagesResponse>(`${APIRoute.Chat}/${id}${APIRoute.Messages}`);
    return data;
  }
);

export const createNewChatAction = createAsyncThunk<ChatItem[], {name: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.CREATE_CHAT,
  async({name}, {extra: api}) => {
    await api.post(APIRoute.Chat, {name: name});
    const { data: {data} } = await api.get(APIRoute.ChatList);
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
      params: { provider, redirect_uri }
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
    const { data } = await api.post<OAuthData>(APIRoute.OAuth, { provider, code, device_id, code_verifier, redirect_uri });
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
    const {  data } = await api.post<User>(APIRoute.Singin, {email, password});
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
    const { data } = await api.post<User>(APIRoute.Singup, {email, password});
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
