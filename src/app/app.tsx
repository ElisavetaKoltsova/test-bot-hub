import { JSX } from "react";
import './app.styles.css';
import ChatPage from "../pages/chat-page/chat-page";

export default function App(): JSX.Element {
  return (
    <div className="app">
      <ChatPage />
    </div>
  )
}