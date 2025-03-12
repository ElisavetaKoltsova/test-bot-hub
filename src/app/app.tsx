import { JSX } from "react";
import './app.styles.css';
import ChatPage from "../pages/chat-page/chat-page";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoute } from "../consts";
import LoginPage from "../pages/login-page/login-page";
import { store } from "../store";
import { fecthChatListAction } from "../store/api-actions";
import { useAppSelector } from "../hooks";
import { getAuthorizationStatus } from "../store/user-process/selectors";
import PrivateRoute from "../features/private-route/private-route";

store.dispatch(fecthChatListAction());

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}