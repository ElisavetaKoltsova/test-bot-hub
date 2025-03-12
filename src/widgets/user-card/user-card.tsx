import { JSX } from "react";
import ExitIcon from "../../shared/icons/exit-icon";
import DefaultAvatar from "../../shared/default-avatar/default-avatar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUserData } from "../../store/user-process/selectors";
import { exitUser } from "../../store/user-process/user-process";

export default function UserCard(): JSX.Element {
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const handleExitButtonClick = () => {
    dispatch(exitUser());
  };

  return (
    <div className="user-card-section">
      <div className="user-card-data-section">
        <div className="avatar-image-wrapper">
          <DefaultAvatar />
        </div>
        <div className="user-card-data">
          <span>{user ? user.email : 'Name'}</span>
          <span>12 432 TKN</span>
        </div>
      </div>
      <div className="exit-icon-wrapper" onClick={handleExitButtonClick}>
        <ExitIcon />
      </div>
    </div>
  );
}
