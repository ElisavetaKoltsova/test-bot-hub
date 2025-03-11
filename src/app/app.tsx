import { JSX } from "react";
import './app.styles.css';
import ChatPage from "../pages/chat-page/chat-page";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoute } from "../consts";
import { Provider } from "react-redux";
import LoginPage from "../pages/login-page/login-page";
import { store } from "../store";
import { fecthChatListAction } from "../store/api-actions";

store.dispatch(fecthChatListAction());

export default function App(): JSX.Element {

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Chat}
              element={<ChatPage />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}