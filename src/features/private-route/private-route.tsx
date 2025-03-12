import { JSX } from 'react';
import { AuthorizationStatus } from '../../consts';
import ChatPage from '../../pages/chat-page/chat-page';
import LoginPage from '../../pages/login-page/login-page';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <ChatPage />
      : <LoginPage />
  );
}

export default PrivateRoute;