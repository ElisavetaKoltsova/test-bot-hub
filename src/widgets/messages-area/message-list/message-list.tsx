import { JSX } from "react";
import MessageLeftItem from "../message-item/message-left-item";
import MessageRightItem from "../message-item/message-right-item";
import { getMessages } from "../../../store/chat-process/selectors";
import { useAppSelector } from "../../../hooks";

export default function MessagesList(): JSX.Element {
  const messages = useAppSelector(getMessages);
  const sortedMessages = [...messages].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  
  return (
    <div className={`message-list-container ${sortedMessages.length === 0 ? 'zero-message' : ''}`}>
      {sortedMessages.length ? sortedMessages.map(({ id, role, content, created_at }) =>
        role === "user" ? (
          <MessageRightItem key={id} message={content} time={new Date(created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
        ) : (
          <MessageLeftItem key={id} message={content} time={new Date(created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
        )
      ) : (<span>Начните общение</span>)}
    </div>
  );
}


