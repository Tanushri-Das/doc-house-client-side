import React, { useState } from "react";
import chair from "../../../images/chair.png";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  return (
    <div className="lg:mx-[135px] flex justify-between items-center my-12 border">
      <div className="border mx-auto">
        <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate}/>
    
      </div>
      <div>
        <img src={chair} alt="dentist-chair" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
