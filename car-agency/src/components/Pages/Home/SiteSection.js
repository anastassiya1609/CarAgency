import { React } from "react";


export default function SiteSection ({
    children,
    title,
    type,
    with_container = true,
    additionalContent = null,
    before_title = null,
    ...other}) {
    const render_content = () => {
      return <div className="wrapper">{children}</div>;
    };
  
    return (
      <section {...other}>
        {before_title ?? null}
  
        <h2 className={type}>{title}</h2>
  
        {additionalContent ?? null}
  
        {with_container ? (
          <div className="container">{render_content()} </div>
        ) : (
          render_content()
        )}
      </section>
    );
  };