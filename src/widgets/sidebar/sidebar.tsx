import { JSX } from "react";
import Chat from "../chat/chat";
import UserCard from "../user-card/user-card";

export default function Sidebar(): JSX.Element {
  return (
    <section className="sidebar-section">
      <Chat />
      <UserCard />
    </section>
  );
}
