import React from "react";

const Button = ({ children, type = 'default', variant = 'big',  href, ...args}) => {
  let modificators = {
    big: "big",
    small: "small",
  };

  let modificator = modificators[variant]
    ? "btn_" + modificators[variant]
    : "btn_default";

  return (
    <React.Fragment>
      {href?
        <a href={href} className={`btn ${modificator}`} {...args}>
        {children}
      </a>
     
      :
      <button type="submit" className={`btn ${modificator}`} {...args}>
       {children}
     </button>
    }

      {type === "danger" ? (
        <div>
          danger
          
         
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Button;
