import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import './AvailableAppointment.css';
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions]=useState([])
    useEffect(()=>{
        fetch("AppointmentOptions.json")
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
  return (
    <div className="lg:mx-[135px]">
      <p className="selected-date text-center mb-3 text-xl font-medium">You picked date : {format(selectedDate, "PP")}.</p> 
      <p className="mb-12 text-4xl font-bold text-center select-option">Please select a service.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            appointmentOptions?.map(option=><AppointmentOption option={option} selectedDate={selectedDate}/>)
        }
      </div>
    </div>
  );
};

export default AvailableAppointment;
