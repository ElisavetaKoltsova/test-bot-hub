import { JSX, useEffect, useRef } from "react";
import MessageLeftItem from "../message-item/message-left-item";
import MessageRightItem from "../message-item/message-right-item";
import { getCurrentChatId, getMessages } from "../../../store/chat-process/selectors";
import { useAppSelector } from "../../../hooks";

export default function MessagesList(): JSX.Element {
  const chatId = useAppSelector(getCurrentChatId);

  const messages = useAppSelector(getMessages);
  const sortedMessages = [...messages].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <div className={`message-list-container ${sortedMessages.length === 0 ? 'zero-message' : ''}`}>
      {sortedMessages.length ? sortedMessages.map(({ id, role, content, created_at }) =>
        role === "user" ? (
          <MessageRightItem key={id} message={content} time={new Date(created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
        ) : (
          <MessageLeftItem key={id} message={content} time={new Date(created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} id={chatId} />
        )
      ) : (<span>{chatId === '' ? 'Выберите чат или создайте новый' : 'Начните общение'}</span>)}
      <div ref={messagesEndRef} />
    </div>
  );
}


