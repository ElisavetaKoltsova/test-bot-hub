import { JSX } from "react";
import ChatItem from "../chat-item/chat-item";

export default function ChatList(): JSX.Element {
  return (
    <div className="chat-list-container">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
}
