import { JSX } from "react";
import MessagesContainer from "./messages-container/messages-container";

export default function MessagesArea(): JSX.Element {
  return (
    <section className="message-area-section">
      <MessagesContainer />
    </section>
  );
}
