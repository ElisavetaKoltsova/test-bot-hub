import { JSX } from "react";
import CopyIcon from "../../../shared/icons/copy-icon";
import DefaultAvatar from "../../../shared/default-avatar/default-avatar";

type MessageRightItemProps = {
  message: string;
  time: string;
}

export default function MessageRightItem({message, time}: MessageRightItemProps): JSX.Element {
  return (
    <div className="message-right-item-container">
      <div className="copy-icon-wrapper">
        <CopyIcon />
      </div>
      <div className="message-right-body">
        <div className="message-text">
          <span>{message}</span>
        </div>
        <span className="message-time">{time}</span>
      </div>
      <div className="avatar-image-message-wrapper">
        <DefaultAvatar />
      </div>
    </div>
  );
}
