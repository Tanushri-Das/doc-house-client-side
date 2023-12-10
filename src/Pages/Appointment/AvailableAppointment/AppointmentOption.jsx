import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentOption = ({ option, selectedDate }) => {
  const { name, slots, img } = option;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    // Open the modal only if slots.length is greater than 0
    if (slots.length > 0) {
      setIsModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="option-card p-6 flex flex-col justify-center items-center">
        <figure>
          <img className="figureImg" src={img} alt="" />
        </figure>
        <h2 className="text-2xl font-bold select-option mt-5 mb-2">{name}</h2>
        <p className="mb-2 text-base font-semibold">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </p>
        <p className="mb-4 text-base font-semibold">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <button className="book-appointment" onClick={handleOpenModal}>
          Book Appointment
        </button>
      </div>

      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          name={name}
          slots={slots}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
};

export default AppointmentOption;
