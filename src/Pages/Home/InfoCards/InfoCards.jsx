import React from "react";
import clock from "../../../images/clock.png";
import marker from "../../../images/location.png";
import contact from "../../../images/contact.png";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00 pm Everyday",
      icon: clock,
      bgClass: "#07332F",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Dhanmondi 17, Dhaka -1200, Bangladesh",
      icon: marker,
      bgClass: "#07332F",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+88 01750 00 00 00  +88 01750 00 00 00",
      icon: contact,
      bgClass: "#07332F",
    },
  ];

  return (
    <div className="md:mx-12 xl:mx-[135px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
      {cardData?.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
