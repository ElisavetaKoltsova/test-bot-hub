import { AuthorizationStatus } from "../consts";
import { store } from "../store";
import { ChatItem, MessagesResponse } from "./chat";
import { User } from "./user-data";

export type ChatProcess = {
  chatItems: ChatItem[];
  messages: MessagesResponse | {data: []};
  isChatItemsDataLoading: boolean;
  isMessagesDataLoading: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  codeVerifier: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;