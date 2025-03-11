import { JSX, useEffect } from "react";
import Sidebar from "../../widgets/sidebar/sidebar";
import MessagesArea from "../../widgets/messages-area/message-area";
import { getCodeVerifier } from "../../store/user-process/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchOAuthAction } from "../../store/api-actions";

export default function ChatPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const codeVerifier = useAppSelector(getCodeVerifier);
  // console.log(codeVerifier)

  // useEffect(() => {
  //   dispatch(fetchOAuthAction({
  //     provider: 'google',
  //     code: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxNjBhOTAxLWJiMzYtNDIzZS05NGQ1LWVmMzM5YTcxMDQwNSIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3NDAwNjA3NDEsImV4cCI6MjA1NTYzNjc0MX0.JYrAECA8EpzptOqtKIyq7gJWf83hburC9S25yF5Xt3k',
  //     device_id: '345023904071',
  //     code_verifier: codeVerifier,
  //     redirect_uri: 'chat'
  //   }))
  // }, [codeVerifier, dispatch]);
  
  return (
    <main className="chat-page-container">
      <Sidebar />
      <MessagesArea />
    </main>
  );
}

