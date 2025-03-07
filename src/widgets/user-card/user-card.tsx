import { JSX } from "react";
import ExitIcon from "../../shared/icons/exit-icon";
import DefaultAvatar from "../../shared/default-avatar/default-avatar";

export default function UserCard(): JSX.Element {
  return (
    <div className="user-card-section">
      <div className="user-card-data-section">
        <div className="avatar-image-wrapper">
          {/* <img className="avatar-image" src="https://avatars.mds.yandex.net/i?id=9608517450c49cb6fb0a1557f8a357fc_l-10142557-images-thumbs&n=13" alt="" /> */}
          <DefaultAvatar />
        </div>
        <div className="user-card-data">
          <span>Some Name</span>
          <span>12 432 TKN</span>
        </div>
      </div>
      <div className="exit-icon-wrapper">
        <ExitIcon />
      </div>
    </div>
  );
}
