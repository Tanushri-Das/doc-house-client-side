import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  console.log(bgClass);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="text-white shadow-xl px-12 py-14 bg-[#07332F] rounded-xl">
        <div className="flex justify-between ">
          <div>
            <img src={icon} alt="Icon" />
          </div>
          <div className="ms-5">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xm font-normal mt-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
