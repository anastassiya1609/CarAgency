import React, { useRef, useState } from "react";
import Button from "../../buttons/Button";
 

export default function MainForm({
  title = "Оставь заявку для дальнейшего сотрудничества!",
}) {
  const formItems = [
    {
      type: "text",
      title: "Имя",
      name: "name",
    },
    {
      type: "phone",
      title: "Номер телефона",
      name: "tel",
    },
    {
      type: "select",
      title: "Модель машины",
      options: [
        "CHANGAN CS75plus Luxury",
        "EXEED RX Platinum",
        "GEELY Coolray New Flagship",
        "HAVAL New H5 Pilot",
      ],
    },
  ];

  const formRef = useRef();

  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      phone: formData.get("tel"),
      model: formData.get("model"),
    };
    console.log({data});
    
    sendRequest(data)
      .then((r) => {
        if (r.ok) {
          setSuccess(true);
          setErrors(false);
        } else {
          setErrors(true);
          setSuccess(false);
        }
      })
      .catch((e) => {
        setErrors(true);
        setSuccess(false);
      });
  };

  const sendRequest = (data) => {
    return fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const enableFormByInputChange = (event) => {
    setErrors(false);
    setSuccess(false);
  };

  return (
    <div className="form_container">
      <h3 className="color_white">{title}</h3>
      <form className="form" id="form" onSubmit={(e) => submit(e)} ref={formRef}>
        {formItems.map((item, index) => (
          <FormField
            onChange={(e) => enableFormByInputChange(e)}
            key={index}
            field={item}
          />
        ))}

        {errors && <p className="message_error">Ошибка!</p>}
        {success && (
          <p className="message_succes">Данные успешно отправлены!</p>
        )}

        <Button    onClick={(e) => submit(e)} type={"big"}>
          Отправить заявку
        </Button>
      </form>
    </div>
  );
}

const FormField = ({ field, ...other }) => {
  return (
    <React.Fragment>
      {field.type === "text" && (
        <input
          type={field.type}
          placeholder={field.title}
          name={field.name}
          {...other}
        />
      )}
      {field.type === "phone" && (
        <input
          type="number"
          placeholder={field.title}
          name={field.name}
          {...other}
        />
      )}
      {field.type === "select" && field.options.length > 0 && (
        <select name={field.name} {...other}>
          {field.options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      )}
    </React.Fragment>
  );
};