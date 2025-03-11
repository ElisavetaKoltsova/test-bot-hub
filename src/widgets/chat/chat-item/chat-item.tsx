import { JSX } from "react";
import ChatIcon from "../../../shared/icons/chat-icon";
import TrashIcon from "../../../shared/icons/trash-icon";
import { useAppDispatch } from "../../../hooks";
import { fecthChatItemMessaegsAction } from "../../../store/api-actions";

type ChatItemProps = {
  name: string;
  id: string;
}

export default function ChatItem({name, id}: ChatItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleChatItemButtonClick = () => {
    dispatch(fecthChatItemMessaegsAction({id}));
  };

  return (
    <div className="chat-item-container" data-chat-id={id}>
      <div className="chat-item-info" onClick={handleChatItemButtonClick}>
        <div className="chat-icon-wrapper">
          <ChatIcon />
        </div>
        <span>{name}</span>
      </div>
      <div className="trash-icon-wrapper">
        <TrashIcon />
      </div>
    </div>
  );
}
