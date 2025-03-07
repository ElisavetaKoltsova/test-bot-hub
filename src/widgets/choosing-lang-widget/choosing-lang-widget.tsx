import { JSX } from "react";

type ChoosingLangWidgetProps = {
  activeLang: string;
  onClick: (activeLang: string) => void;
}

export default function ChoosingLangWidget({onClick, activeLang}: ChoosingLangWidgetProps): JSX.Element {
  const langs = ['RU', 'EN'];
  return (
    <div className="lang-widget-container">
      {/* <span className="lang-text active" >RU</span>
      <span className="lang-text">EN</span> */}
      {
        langs.map((lang) => <span key={lang}
        className={`lang-text ${lang === activeLang ? 'active' : ''}`}
        onClick={() => onClick(lang)}>
          {lang}
        </span>)
      }
    </div>
  );
}
