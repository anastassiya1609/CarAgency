import React from "react";
import SiteSection from "./SiteSection";
import MainForm from './MainForm';

export default function Feedback() {
  const contactItem = [
    {
      icon: "images/icons/whatsapp.png",
      name: "WhatsApp",
      link: "/",
    },
    {
      icon: "images/icons/instagram.png",
      name: "Instagram",
      link: "/",
    },
    {
      icon: "images/icons/telegram.png",
      name: "Telegram",
      link: "/",
    },
  ];
  const callcenter = [
    {
      type: "color_orange",
      text: "Служба поддержки рядом с вами 24/7",
    },
    {
      type: "color_black",
      text: "8 777 888 77 99",
    },
    {
      type: "color_black",
      text: "8 777 888 77 98",
    },
  ];
  return (
    <div id="feedback">
      <MainForm/>
      <SiteSection id="contact" title="Контакты">
        {contactItem.map((item, index) => (
          <a href={item.link} className="contact_media" key={index}>
            <img className="icon" alt="logo" src={item.icon}></img>
            <h4 className="color_black">{item.name}</h4>
          </a>
        ))}
        <div className="call_container">
          {callcenter.map((item, index) => (
            <h4 className={item.type} key={index}>
              {item.text}
            </h4>
          ))}
        </div>
      </SiteSection>
    </div>
  );
}
