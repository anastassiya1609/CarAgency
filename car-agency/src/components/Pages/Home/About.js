import { React } from "react";
import SiteSection from "./SiteSection";


export default function About() {
  const aboutItems = [
    {
      text: "Своевременную поставку автомобиля",
      icon: "/images/icons/time.png",
    },
    {
      text: "Гарантию от завода-производителя",
      icon: "/images/icons/garanty.png",
    },
    {
      text: "Бесплатное страхование автомобиля на время перевозки",
      icon: "/images/icons/holding.png",
    },
    {
      text: "Возможность отслеживания пути авто в реальном времени",
      icon: "/images/icons/location.png",
    },
    {
      text: "Лучшую цену на рынке китайских автомобилей",
      icon: "/images/icons/money.png",
    },
  ];

  return (
    <SiteSection
      id="about"
      title="Мы - компания по доставке автомобилей из Китая"
      additionalContent={<h3>Выбирая нас, вы получаете:</h3>}
    >
      {aboutItems.map((item, index) => (
        <div className="about_item" key={index}>
          <img className="icon" src={item.icon} alt="icon" />
          <p className="text_basic">{item.text}</p>
        </div>
      ))}
    </SiteSection>
  );
}


