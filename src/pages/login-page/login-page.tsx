import { JSX } from "react";
import CloseIcon from "../../shared/icons/close-icon";

export default function LoginPage(): JSX.Element {
  return (
    <div className="login-page">
      <div className="login-page-container">

        <div className="login-title-wraper">
          <span className="login-title">Авторизация</span>
          <div>
            <CloseIcon />
          </div>
        </div>
        
        <div className="login-input-wrapper">
          <span>E-Mail</span>
          <input className="login-input" type="text" placeholder="Ваш E-Mail" />
        </div>
        
        <div className="login-input-wrapper">
          <span>Пароль</span>
          <input className="login-input" type="password" placeholder="Ваш пароль" />
        </div>

        <input className="login-submit-button" type="button" value="Войти" />
      </div>
    </div>
    
  );
}