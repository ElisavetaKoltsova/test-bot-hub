import { JSX } from "react";
import ChatItem from "../chat-item/chat-item";
import { useAppSelector } from "../../../hooks";
import { getChatItems } from "../../../store/chat-process/selectors";

export default function ChatList(): JSX.Element {
  const chatItems = useAppSelector(getChatItems);

  return (
    <div className="chat-list-container">
      {
        chatItems && chatItems.map((chat) => <ChatItem key={chat.id} name={chat.name} id={chat.id} />)
      }
    </div>
  );
}
