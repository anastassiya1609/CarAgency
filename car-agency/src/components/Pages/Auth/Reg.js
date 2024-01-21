import SiteSection from "./../Home/SiteSection";
import Button from "../../buttons/Button";
import React from "react";



export default function Reg() {
    const regItems = [
      {
        type: "text",
        title: "Введите ваше имя",
        name: "username",
      },
      {
        type: "number",
        title: "Введите ваш номер телефона",
        name: "phone",
      },
      {
        type: "email",
        title: "Введите адрес электронной почты",
        name: "mail",
      },
      {
        type: "text",
        title: "Придумайте пароль",
        name: "password",
      },
    ];

    return (
        <React.Fragment>
          <SiteSection>
            <div className="form_container">
              <h3 className="color_white">
                Введите необходимые данные для регистрации
              </h3>
              <form
                className="form"
              >
                {regItems.map((item, index) => (
                  <input
                    type={item.type}
                    placeholder={item.title}
                    name={item.name}
                    key={index}
                  />
                ))}
              </form>
              <div className="form">
               <Button   type={"big"}>Зарегестрироваться</Button>
              </div>
              
            </div>
          </SiteSection>
        </React.Fragment>
      );

}