import { JSX } from "react";
import './app.styles.css';
import ChatPage from "../pages/chat-page/chat-page";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoute } from "../consts";
import { Provider } from "react-redux";
import LoginPage from "../pages/login-page/login-page";
import { store } from "../store";
import { fecthChatListAction, fetchOAuthAction, fetchOAuthConsentUrlAction, singinAction, singupAction } from "../store/api-actions";
import { useAppSelector } from "../hooks";
import { getCodeVerifier } from "../store/user-process/selectors";
import { TOKEN } from "../services/api";

store.dispatch(fetchOAuthConsentUrlAction({provider: 'google', redirect_uri: 'chat'}));
// store.dispatch(fetchOAuthAction({
//   provider: 'google',
//   code: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxNjBhOTAxLWJiMzYtNDIzZS05NGQ1LWVmMzM5YTcxMDQwNSIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3NDAwNjA3NDEsImV4cCI6MjA1NTYzNjc0MX0.JYrAECA8EpzptOqtKIyq7gJWf83hburC9S25yF5Xt3k',
//   device_id: '345023904071',
//   code_verifier: 'cR/zxtgWsGO4MN6RLwa/Z/yEqTPuW6ore/Zj9xjVpKY=',
//   redirect_uri: 'chat'
// }))

// store.dispatch(singinAction({email: 'crokodile.liza@yandex.ru', password: 'S@fdsf2323'}));
store.dispatch(singupAction({email: 'crokodile.liza@yandex.ru', password: 'S@fdsf2323'}));
store.dispatch(fecthChatListAction());

export default function App(): JSX.Element {
  localStorage.getItem(TOKEN)
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