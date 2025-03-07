import { JSX } from "react";
import Sidebar from "../../widgets/sidebar/sidebar";
import MessageArea from "../../widgets/message-area/message-area";

export default function ChatPage(): JSX.Element {
  return (
    <main className="chat-page-container">
      <Sidebar />
      <MessageArea />
    </main>
  );
}
