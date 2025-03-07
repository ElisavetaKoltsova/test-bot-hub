import { JSX } from "react";
import ChatHeader from "./chat-header/chat-header";
import ChatFunctionalBar from "./chat-functional-bar/chat-functional-bar";
import ChatList from "./chat-list/chat-list";

export default function Chat(): JSX.Element {
  return (
    <div className="chat-section">
      <ChatHeader />
      <ChatFunctionalBar />
      <ChatList />
    </div>
  );
}
