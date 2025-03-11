import { NameSpace } from "../../consts";
import { State } from "../../types/state";

export const getChatItems = (state: Pick<State, NameSpace.ChatItems>) =>
  state[NameSpace.ChatItems].chatItems;
export const getMessages = (state: Pick<State, NameSpace.ChatItems>) =>
  state[NameSpace.ChatItems].messages.data;

export const getChatItemsDataLoadingStatus = (state: Pick<State, NameSpace.ChatItems>) =>
  state[NameSpace.ChatItems].isChatItemsDataLoading;
export const getMessagesDataLoadingStatus = (state: Pick<State, NameSpace.ChatItems>) =>
  state[NameSpace.ChatItems].isMessagesDataLoading;
