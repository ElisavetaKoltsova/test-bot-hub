import { JSX } from "react";
import GPTIcon from "../../../shared/ai-icons/gpt-icon";
import CopyIcon from "../../../shared/icons/copy-icon";

type MessageLeftItemProps = {
  message: string;
  time: string;
}

export default function MessageLeftItem({message, time}: MessageLeftItemProps): JSX.Element {
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
            <span>{message}</span>
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
