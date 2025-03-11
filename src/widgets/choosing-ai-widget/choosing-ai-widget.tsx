import { JSX } from "react";
import GPTIcon from "../../shared/ai-icons/gpt-icon";

type ChoosingAIWidgetProps = {
  activeAI: string;
  onClick: (activeAI: string) => void;
}

export default function ChoosingAIWidget({activeAI, onClick}: ChoosingAIWidgetProps): JSX.Element {
  const ais = ['ChatGPT', 'DALL-E', 'Midjourney'];

  return (
    <div className="ai-widget-container">
      {
        ais.map((ai) => <div key={ai} className={`ai-text-wrapper ${ai === activeAI ? 'active' : ''}`}>
        <div>
          <GPTIcon size={18} />
        </div>
        <span
          className="ai-text"
          onClick={() => onClick(ai)}>
          {ai}
        </span>
      </div>)
      }
    </div>
  );
}
