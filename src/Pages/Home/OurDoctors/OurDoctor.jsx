import React from "react";
import { FaCalendar } from "react-icons/fa";
import "./OurDoctor.css";
import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";

const OurDoctor = ({ doctor }) => {
  const { name, designation, image, speciality } = doctor;
  const date = new Date();
  const { isDarkMode } = useTheme();

  // Get the current date in the format "Mon, 22 December"
  const options = { weekday: "short", day: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div data-aos="zoom-in-down" data-aos-duration="1000">
      <div className="flex flex-col border border-gray-200 rounded-xl p-3 h-full">
        <img src={image} alt="" className="mb-2 rounded-xl" />
        <h1
          className={`text-xl font-bold text-left mb-2 ${
            isDarkMode ? "text-white" : "text-gray-500"
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
          className={`text-[16px] font-normal mb-3 ${
            isDarkMode ? "text-white" : "text-gray-500"
          }`}
        >
          Speciality in {speciality}
        </p>
        <div className="flex mb-3">
          <FaCalendar className="text-lg mt-1" />
          <p
            className={`text-[16px] font-normal ms-2 ${
              isDarkMode ? "text-white" : "text-gray-500"
            }`}
          >
            Available On {formattedDate} Mon, 22 December
          </p>
        </div>
        <button className="view-profile">View Profile</button>
      </div>
    </div>
  );
};

export default OurDoctor;
