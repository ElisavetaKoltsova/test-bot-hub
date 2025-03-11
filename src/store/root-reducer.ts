import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../consts";
import { chatProcess } from "./chat-process/chat-process";
import { userProcess } from "./user-process/user-process";

export const rootReducer = combineReducers({
  [NameSpace.ChatItems]: chatProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});