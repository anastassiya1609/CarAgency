import { React } from "react";
import SiteSection from "./SiteSection";

export default function Case() {
  const caseItems = [
    {
      img: " images/case/changan.jpg",
      carName: "CHANGAN CS75plus Luxury",
      price: "11 000 000 тенге",
      link: "#changan",
    },
    {
      img: " images/case/exeed.jpg",
      carName: "EXEED RX Platinum",
      price: "11 000 000 тенге",
      link: "#exeed",
    },
    {
      img: " images/case/geely.jpg",
      carName: "GEELY Coolray New Flagship",
      price: "11 000 000 тенге",
      link: "#geely",
    },
    {
      img: " images/case/haval.jpg",
      carName: "HAVAL New H5 Pilot",
      price: "11 000 000 тенге",
      link: "#haval",
    },
  ];

  return (
    <SiteSection id="case" title="Примеры успешных кейсов" type="color_white">
      {caseItems.map((item, index) => (
        <a href={item.link} className="case_item" key={index}>
          <img alt="car" className="case_icon" src={item.img}></img>
          <h3>{item.carName}</h3>
          <h4>{item.price}</h4>
        </a>
      ))}
    </SiteSection>
  );
}
