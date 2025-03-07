import { JSX } from "react";
import MinimizeIcon from "../../../shared/icons/minimize-icon";
import AddChatIcon from "../../../shared/icons/add-chat-icon";
import SearchIcon from "../../../shared/icons/search-icon";

export default function ChatFunctionalBar(): JSX.Element {
  return (
    <div className="chat-functional-bar-container">
      <div className="chat-functional-bar-add-search">
        <div className="add-chat-icon-wrapper">
          <AddChatIcon />
        </div>
        <div className="search-icon-wrapper">
          <SearchIcon />
        </div>
      </div>
      <div className="minimize-icon-wrapper">
        <MinimizeIcon />
      </div>
    </div>
  );
}