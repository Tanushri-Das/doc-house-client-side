import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import useTheme from "../../../Hooks/useTheme";

const OurDoctor = ({ doctor }) => {
  const { name, designation, image, speciality } = doctor;
  const { isDarkMode } = useTheme();

  return (
    <div data-aos="zoom-in-down" data-aos-duration="1000">
      <div className="flex flex-col items-center border border-gray-200 rounded-xl px-3 py-5 h-full">
        <img src={image} alt="" className="w-24 h-24 rounded-full mb-2" />
        <div className="flex flex-col text-center justify-between flex-grow">
          <h1
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {name}
          </h1>
          <h3
            className={`text-[16px] font-normal mb-2 ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            {designation}
          </h3>
          <p
            className={`text-[16px] font-normal mb-4 ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Speciality in {speciality}
          </p>
          <div className="mt-auto flex justify-center">
            <Button name={"View Profile"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctor;
