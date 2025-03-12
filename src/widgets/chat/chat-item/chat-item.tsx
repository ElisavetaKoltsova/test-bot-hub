import { JSX } from "react";
import ChatIcon from "../../../shared/icons/chat-icon";
import TrashIcon from "../../../shared/icons/trash-icon";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { deleteChatAction, fecthChatItemMessaegsAction } from "../../../store/api-actions";
import { setCurrentChat } from "../../../store/chat-process/chat-process";
import { getCurrentChatId } from "../../../store/chat-process/selectors";

type ChatItemProps = {
  name: string;
  id: string;
}

export default function ChatItem({name, id}: ChatItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeChatId = useAppSelector(getCurrentChatId);

  const handleChatItemButtonClick = () => {
    dispatch(fecthChatItemMessaegsAction({id}));
    dispatch(setCurrentChat(id));
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteChatAction({id}));
  }

  return (
    <div className={`chat-item-container${activeChatId === id ? '-active' : ''}`} data-chat-id={id}>
      <div className="chat-item-info" onClick={handleChatItemButtonClick}>
        <div className="chat-icon-wrapper">
          <ChatIcon />
        </div>
        <span>{name}</span>
      </div>
      <div className="trash-icon-wrapper" onClick={handleDeleteButtonClick}>
        <TrashIcon />
      </div>
    </div>
  );
}
