import { JSX } from "react";
import Sidebar from "../../widgets/sidebar/sidebar";
import MessagesArea from "../../widgets/messages-area/message-area";

export default function ChatPage(): JSX.Element {  
  return (
    <main className="chat-page-container">
      <Sidebar />
      <MessagesArea />
    </main>
  );
}

