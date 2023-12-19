import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "./AvailableAppointment.css";
import AppointmentOption from "./AppointmentOption";
import useServices from "../../../Hooks/useServices";
import AvailableAppointmentSlot from "./AvailableAppointmentSlot";
import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";

const AvailableAppointment = ({ selectedDate }) => {
  const { isDarkMode } = useTheme();
  const { services } = useServices();

  // Retrieve booked slots from localStorage or use an empty array
  const initialBookedSlots =
    JSON.parse(localStorage.getItem("bookedSlots")) || [];
  const [bookedSlots, setBookedSlots] = useState(initialBookedSlots);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const isSlotBooked = (slot) => {
    return bookedSlots.includes(slot);
  };

  const handleBooking = (slot) => {
    // Update the booked slots state when a slot is booked
    setBookedSlots((prevBookedSlots) => [...prevBookedSlots, slot]);
  };

  useEffect(() => {
    // Save booked slots to localStorage whenever it changes
    localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  return (
    <div className="lg:mx-[135px] my-24">
      <p className="selected-date text-center text-xl font-medium">
        You picked date: {format(selectedDate, "PP")}.
      </p>
      <div className="my-20">
        <p
          className={`text-4xl font-bold text-center mb-16 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Please select a service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-36">
          {services?.map((option) => (
            <AppointmentOption
              key={option.service_name}
              option={option}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      </div>
      {selectedService && (
        <div>
          <p className="mb-16 text-4xl font-bold text-center">
            Available slots for {selectedService.service_name}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedService.slots.map((slot, index) => (
              <AvailableAppointmentSlot
                key={index}
                service_name={selectedService.service_name}
                price={selectedService.price}
                slot={slot}
                selectedDate={selectedDate}
                bookedSlots={bookedSlots}
                isSlotBooked={isSlotBooked(slot)}
                onBooking={handleBooking}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableAppointment;
