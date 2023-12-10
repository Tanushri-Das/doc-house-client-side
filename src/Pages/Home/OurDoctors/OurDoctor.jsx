import React from "react";
import { FaStar, FaStarHalf, FaCalendar } from "react-icons/fa";
import "./OurDoctor.css";
import { CiLocationOn } from "react-icons/ci";

const OurDoctor = ({ doctor }) => {
  const { name, designation, location, available, charge, rateus, image } =
    doctor;

  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-4 h-full">
      <img src={image} alt="" className="mb-4" />
      <h1 className="text-xl font-bold text-left mb-1">{name}</h1>
      <h3 className="text-[16px] font-normal mb-3 designation">
        {designation}
      </h3>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex justify-center items-center">
          {Array.from({ length: Math.floor(rateus) }, (_, index) => (
            <FaStar key={index} className="star-color text-lg me-2" />
          ))}
          {rateus % 1 === 0.5 && <FaStarHalf className="star-color text-lg" />}
        </div>
      </div>
      <div className="flex items-center mb-2">
        <CiLocationOn className="text-lg" />
        <p className="designation text-[16px] ms-2">{location}</p>
      </div>
      <div className="flex items-center mb-2">
        <FaCalendar className="text-lg" />
        <p className="designation text-[16px] ms-2">{available}</p>
      </div>
      <div className="flex items-center mb-5">
        <FaCalendar className="text-lg" />
        <p className="designation text-[16px] ms-2">{charge}</p>
      </div>
      <button className="view-profile">View Profile</button>
    </div>
  );
};

export default OurDoctor;
