import { JSX, useState } from "react";
import Logo from "../../../shared/icons/logo";
import LangIcon from "../../../shared/icons/lang-icon";
import ArrowDownIcon from "../../../shared/icons/arrow-down-icon";
import ChoosingLangWidget from "../../choosing-lang-widget/choosing-lang-widget";

export default function ChatHeader(): JSX.Element {
  const [choosingLangStatus, setChoosingLangStatus] = useState(false);
  const [activeLang, setActiveLang] = useState('RU');

  const handleChoosingLangButtonClick = () => {
    setChoosingLangStatus(!choosingLangStatus);
  };

  const handleChangeLangButtonClick = (lang: string) => {
    setActiveLang(lang);
    setChoosingLangStatus(false);
  };

  return (
      <div className="chat-header-container">
        <Logo />
        <div className="chat-lang-container" onClick={handleChoosingLangButtonClick}>
          <LangIcon />
          <span>{activeLang}</span>
          <div className="arrow-down-icon-wrapper">
            <ArrowDownIcon />
          </div>
        </div>
        {
            choosingLangStatus ?
            <ChoosingLangWidget activeLang={activeLang} onClick={handleChangeLangButtonClick} />
            : ''
          }
      </div>
  );
}
