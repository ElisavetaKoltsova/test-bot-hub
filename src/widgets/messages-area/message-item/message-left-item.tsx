import { JSX, useEffect } from "react";
import GPTIcon from "../../../shared/ai-icons/gpt-icon";
import CopyIcon from "../../../shared/icons/copy-icon";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getMessagesDataLoadingStatus } from "../../../store/chat-process/selectors";
import { fecthChatItemMessaegsAction } from "../../../store/api-actions";

type MessageLeftItemProps = {
  message: string;
  time: string;
  id: string;
}

export default function MessageLeftItem({message, time, id}: MessageLeftItemProps): JSX.Element {
  const isMessageDataLoading = useAppSelector(getMessagesDataLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message === null) {
      dispatch(fecthChatItemMessaegsAction({id}));
    }
  })

  return (
    <div className="message-left-item-container">
      <div className="ai-model">
        <span className="ai-name">ChatGPT</span>
        <div className="ai-type">
          <span>gpt-3.5-turbo</span>
        </div>
      </div>
      <div className="message-left-body">
        <div className="ai-avatar-wrapper">
          <GPTIcon size={40} />
        </div>
        <div className="message-content">
          <div className="message-text">
            <span>{isMessageDataLoading ? <>Loading...</> : message}</span>
          </div>
          <div className="message-info">
            <div className="token-cost-wrapper">
              <span className="token-cost">-223 CAPS</span>
              <CopyIcon />
            </div>
            <div className="message-time-wrapper">
              <span className="message-time">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
