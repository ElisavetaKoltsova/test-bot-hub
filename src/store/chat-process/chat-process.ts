import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatProcess } from "../../types/state";
import { NameSpace } from "../../consts";
import { createNewChatAction, deleteChatAction, fecthChatItemMessaegsAction, fecthChatListAction, postMessageAction } from "../api-actions";

const initialState: ChatProcess = {
  chatItems: [],
  messages: { data: [] },
  isChatItemsDataLoading: false,
  isMessagesDataLoading: false,
  currentChatId: '',
  isMessageDataLoading: false
};

export const chatProcess = createSlice({
  name: NameSpace.ChatItems,
  initialState,
  reducers: {
    setCurrentChat: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fecthChatListAction.pending, (state) => {
        state.isChatItemsDataLoading = true;
      })
      .addCase(fecthChatListAction.fulfilled, (state, action) => {
        state.chatItems = action.payload;
        state.isChatItemsDataLoading = false;
      })
      .addCase(fecthChatListAction.rejected, (state) => {
        state.isChatItemsDataLoading = false;
      })
      .addCase(fecthChatItemMessaegsAction.pending, (state) => {
        state.isMessagesDataLoading = true;
      })
      .addCase(fecthChatItemMessaegsAction.fulfilled, (state, action) => {
        state.isMessagesDataLoading = false;
        state.messages = action.payload;
      })
      .addCase(fecthChatItemMessaegsAction.rejected, (state) => {
        state.isMessagesDataLoading = false;
      })
      .addCase(createNewChatAction.pending, (state,) => {
        state.isChatItemsDataLoading = true;
      })
      .addCase(createNewChatAction.fulfilled, (state, action) => {
        state.chatItems = action.payload;
        state.isChatItemsDataLoading = false;
      })
      .addCase(deleteChatAction.fulfilled, (state, action) => {
        state.chatItems = action.payload;
      })
      .addCase(postMessageAction.pending, (state) => {
        state.isMessageDataLoading = true;
      })
      .addCase(postMessageAction.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.isMessageDataLoading = false;
      });
  }
});

export const { setCurrentChat } = chatProcess.actions;
