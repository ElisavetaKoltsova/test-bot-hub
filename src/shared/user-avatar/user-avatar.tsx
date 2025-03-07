import { JSX } from "react";

type UserAvatarProps = {
  avatarUrl: string;
}

export default function UserAvatar({avatarUrl}: UserAvatarProps): JSX.Element {
  return (
    <span className="avatar-image-wrapper">
      <img src={avatarUrl} alt="" />
    </span>
  );
}
