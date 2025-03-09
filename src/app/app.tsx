import { JSX } from "react";
import './app.styles.css';
import ChatPage from "../pages/chat-page/chat-page";
import { Route, Routes } from "react-router";
import { AppRoute } from "../consts";
import { Provider } from "react-redux";
import LoginPage from "../pages/login-page/login-page";

export default function App(): JSX.Element {
  return (
    <Provider store={undefined}>
      <Routes>
        <Route
          path={AppRoute.Chat}
          element={<ChatPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>
    </Provider>
  )
}