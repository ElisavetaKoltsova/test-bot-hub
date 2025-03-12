import { AuthorizationStatus } from "../consts";
import { store } from "../store";
import { ChatItem, MessagesResponse } from "./chat";
import { UserData } from "./user-data";

export type ChatProcess = {
  chatItems: ChatItem[];
  messages: MessagesResponse | {data: []};
  isChatItemsDataLoading: boolean;
  isMessagesDataLoading: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  codeVerifier: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;