import React, { useState } from "react";
import "./AvailableAppointment.css";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointmentSlot = ({
  service_name,
  slot,
  selectedDate,
  price,
  bookedSlots,
  onBooking,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlotBooked, setIsSlotBooked] = useState(bookedSlots.includes(slot));

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBookAppointment = () => {
    if (!bookedSlots.includes(slot)) {
      onBooking(slot);
      handleOpenModal();
    }
  };

  return (
    <div>
      <div className={`appointment-slot-card p-6 cursor-pointer`}>
        <p className="text-xl font-bold mb-2 text-black">{slot}</p>
        <p className="text-[16px] font-semibold mb-4 text-black">${price}</p>
        <button
          onClick={handleBookAppointment}
          className={`book-appointment ${isSlotBooked ? "disabled" : ""}`}
          disabled={isSlotBooked}
        >
          {isSlotBooked ? "Slot Booked" : "Book Appointment"}
        </button>
      </div>
      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service_name={service_name}
          slot={slot}
          price={price}
          selectedDate={selectedDate}
          setIsSlotBooked={setIsSlotBooked}
        />
      )}
    </div>
  );
};

export default AvailableAppointmentSlot;
