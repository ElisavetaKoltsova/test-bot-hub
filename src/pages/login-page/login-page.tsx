import { useForm } from "react-hook-form";
import CloseIcon from "../../shared/icons/close-icon";
import { useAppDispatch } from "../../hooks";
import { singinUser } from "../../store/user-process/user-process";
import { redirectToRoute } from "../../store/action";
import { AppRoute } from "../../consts";

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
    dispatch(singinUser(data));
    dispatch(redirectToRoute(AppRoute.Chat));
  };

  return (
    <div className="login-page">
      <form className="login-page-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-title-wraper">
          <span className="login-title">Авторизация</span>
          <div>
            <CloseIcon />
          </div>
        </div>
        
        <div className="login-input-wrapper">
          <span>E-Mail</span>
          <input
            className="login-input"
            type="email"
            placeholder="Ваш E-Mail"
            {...register("email", {
              required: "Введите почту",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверная почта",
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        
        <div className="login-input-wrapper">
          <span>Пароль</span>
          <input
            className="login-input"
            type="password"
            placeholder="Ваш пароль"
            {...register("password", {
              required: "Введите пароль",
              maxLength: {
                value: 20,
                message: "Пароль не должен превышать 20 символов",
              },
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <input className="login-submit-button" type="submit" value="Войти" />
      </form>
    </div>
  );
}
