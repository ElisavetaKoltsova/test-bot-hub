import { createSlice } from "@reduxjs/toolkit";
import { ChatProcess } from "../../types/state";
import { NameSpace } from "../../consts";
import { fecthChatListAction } from "../api-actions";

const initialState: ChatProcess = {
  chatItems: [],
  isChatItemsDataLoading: false
};

export const chatProcess = createSlice({
  name: NameSpace.ChatItems,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fecthChatListAction.pending, (state) => {
        state.isChatItemsDataLoading = true;
      })
      .addCase(fecthChatListAction.fulfilled, (state, action) => {
        state.chatItems = action.payload;
        state.isChatItemsDataLoading = false;
      });
      // .addCase(fecthChatListAction.rejected, (state) => {
      //    state.isChatItemsDataLoading = false;
      // })
  }
});