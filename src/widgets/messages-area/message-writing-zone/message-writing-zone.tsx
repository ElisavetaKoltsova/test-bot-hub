import { JSX, useState } from "react";
import GPTIcon from "../../../shared/ai-icons/gpt-icon";
import ArrowUpIcon from "../../../shared/icons/arrow-up-icon";
import SendIcon from "../../../shared/icons/send-icon";
import ChoosingAIWidget from "../../choosing-ai-widget/choosing-ai-widget";

export default function MessageWritingZone(): JSX.Element {
  const [choosingAIStatus, setChoosingAIStatus] = useState(false);
  const [activeAI, setActiveAI] = useState('ChatGPT');

  const handleChoosingAIButtonClick = () => {
    setChoosingAIStatus(!choosingAIStatus);
  };

  const handleChangeAIButtonClick = (ai: string) => {
    setActiveAI(ai);
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
        <input className="message-input" type="text" placeholder="Спроси о чём-нибудь..." />
        <div className="send-icon-wrapper">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}