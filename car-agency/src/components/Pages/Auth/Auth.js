import SiteSection from "./../Home/SiteSection";
import Button from "../../buttons/Button";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sendRequest } from "../../../utills";


export default function Auth() {
  const authItems = [
    {
      type: "text",
      title: "Имя пользователя",
      name: "username",
    },
    {
      type: "text",
      title: "Пароль",
      name: "password",
    },
  ];

  const authRef = useRef();

  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const auth = authRef.current;
    const authData = new FormData(auth);
    const data = {
      username: authData.get("username"),
      password: authData.get("password"),
    };

    sendRequest("https://job.alidi.ru/api/auth/login", data)
      .then((r) => {
        setErrors(false);
        setSuccess(true)
        console.log(r.data.access_token);
      })
      .catch((e) => {
        setErrors(true);
        setSuccess(false);
      });
  };
 


  const enableFormByInputChange = (event) => {
    setErrors(false);
    setSuccess(false);
  };

  return (
    <React.Fragment>
      <SiteSection>
        <div className="form_container">
          <h3 className="color_white">
            Введите необходимые данные для авторизации
          </h3>
          <form
            className="form"
            onSubmit={(e) => submit(e)}
            ref={authRef}
            id="auth"
          >
            {authItems.map((item, index) => (
              <input
                type={item.type}
                placeholder={item.title}
                name={item.name}
                key={index}
                onChange={(e) => enableFormByInputChange(e)}
              />
            ))}
          </form>
          {errors && <p className="message_error">Данные введены неверно!</p>}
          {success && (
            <p className="message_succes">Авторизация прошла успешно!  </p>
          )}
          <div className="form">
            <Button onClick={(e) => submit(e)} type={"big"}>
              Войти
            </Button>
            <Link to="/reg" className="color_white">
              {" "}
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </SiteSection>
    </React.Fragment>
  );
}
