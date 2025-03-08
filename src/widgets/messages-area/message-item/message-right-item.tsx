import { JSX } from "react";
import CopyIcon from "../../../shared/icons/copy-icon";
import DefaultAvatar from "../../../shared/default-avatar/default-avatar";

export default function MessageRightItem(): JSX.Element {
  return (
    <div className="message-right-item-container">
      <div className="copy-icon-wrapper">
        <CopyIcon />
      </div>
      <div className="message-right-body">
        <div className="message-text">
          <span>Hello!</span>
        </div>
        <span className="message-time">22:51</span>
      </div>
      <div className="avatar-image-massege-wrapper">
        <DefaultAvatar />
      </div>
    </div>
  );
}
