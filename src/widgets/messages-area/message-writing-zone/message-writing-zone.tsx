import { JSX, useRef, useState } from "react";
import GPTIcon from "../../../shared/ai-icons/gpt-icon";
import ArrowUpIcon from "../../../shared/icons/arrow-up-icon";
import SendIcon from "../../../shared/icons/send-icon";
import ChoosingAIWidget from "../../choosing-ai-widget/choosing-ai-widget";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getCurrentChatId } from "../../../store/chat-process/selectors";
import { postMessageAction } from "../../../store/api-actions";

export default function MessageWritingZone(): JSX.Element {
  const [choosingAIStatus, setChoosingAIStatus] = useState(false);
  const [activeAI, setActiveAI] = useState('ChatGPT');
  const inputRef = useRef(null);
  const chatId = useAppSelector(getCurrentChatId);
  const dispatch = useAppDispatch();

  const handleChoosingAIButtonClick = () => {
    setChoosingAIStatus(!choosingAIStatus);
  };

  const handleChangeAIButtonClick = (ai: string) => {
    setActiveAI(ai);
  };

  const handleSendButtonClick = () => {
    const message = (inputRef.current as unknown as HTMLInputElement).value;
    if (message.length) {
      dispatch(postMessageAction({chatId, message}));
      (inputRef.current as unknown as HTMLInputElement).value = '';
    }
  };
  
  return (
    <div className="message-writing-zone-container">
      {
        choosingAIStatus ?
        <ChoosingAIWidget activeAI={activeAI} onClick={handleChangeAIButtonClick} />
        : ''
      }
      <div className="ai-name-container" onClick={handleChoosingAIButtonClick}>
        <div className="ai-icon-wrapper">
          <GPTIcon size={18} />
        </div>
        <span>{activeAI}</span>
        <div className="arrow-down-icon-wrapper">
          <ArrowUpIcon />
        </div>
      </div>
      <div className="message-input-container">
        <input className="message-input" type="text" placeholder="Спроси о чём-нибудь..." ref={inputRef} />
        <button className="send-icon-wrapper" onClick={handleSendButtonClick} disabled={chatId === ''}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}