import { JSX } from "react";
import ChatIcon from "../../../shared/icons/chat-icon";
import TrashIcon from "../../../shared/icons/trash-icon";



export default function ChatItem(): JSX.Element {
  return (
    <div className="chat-item-container">
      <div className="chat-item-info">
        <div className="chat-icon-wrapper">
          <ChatIcon />
        </div>
        <span>Новый чат</span>
      </div>
      <div className="trash-icon-wrapper">
        <TrashIcon />
      </div>
    </div>
  );
}
