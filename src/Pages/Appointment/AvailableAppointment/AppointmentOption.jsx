import React from "react";
import useTheme from "../../../Hooks/useTheme";

const AppointmentOption = ({ option, onSelect }) => {
  const { isDarkMode } = useTheme();
  const { service_name, image } = option;

  const handleServiceSelect = () => {
    onSelect(option);
  };

  return (
    <div
      className="option-card p-6 flex items-center cursor-pointer"
      onClick={handleServiceSelect}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <img className="appointmentImg" src={image} alt="" />
      <h2
        className={`text-2xl font-bold ms-6 ${
          isDarkMode ? "text-gray-800" : "text-gray-800"
        }`}
      >
        {service_name}
      </h2>
    </div>
  );
};

export default AppointmentOption;
