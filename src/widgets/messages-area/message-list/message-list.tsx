import { JSX } from "react";
import MessageLeftItem from "../message-item/message-left-item";
import MessageRightItem from "../message-item/message-right-item";

export default function MessagesList(): JSX.Element {
  return (
    <div className="message-list-container">
      <MessageRightItem />
      <MessageLeftItem />
    </div>
  );
}
