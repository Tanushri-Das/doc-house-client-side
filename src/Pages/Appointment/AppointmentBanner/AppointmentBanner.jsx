import React from "react";
import chair from "../../../images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="md:mx-12 xl:mx-[135px] grid grid-cols-1 md:grid-cols-2 my-12">
      <div className="mx-auto" data-aos="zoom-in" data-aos-duration="1000">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
      <div className="hidden md:block h-full" data-aos="flip-right" data-aos-duration="1000">
        <img src={chair} alt="dentist-chair" className="h-full" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
