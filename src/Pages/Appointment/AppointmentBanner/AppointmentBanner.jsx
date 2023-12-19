import React, { useState } from "react";
import chair from "../../../images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="md:mx-12 xl:mx-[135px] grid grid-cols-1 lg:grid-cols-2 my-12 border">
      <div className="border">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
      <div className="mt-10 lg:mt-0">
        <img src={chair} alt="dentist-chair" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
// mx-auto