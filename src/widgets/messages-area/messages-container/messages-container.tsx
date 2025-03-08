import { JSX } from "react";
import MessageWritingZone from "../message-writing-zone/message-writing-zone";
import MessagesList from "../message-list/message-list";

export default function MessagesContainer(): JSX.Element {
  return (
    <div className="messages-container">
      <MessagesList />
      <MessageWritingZone />
    </div>
  );
}
