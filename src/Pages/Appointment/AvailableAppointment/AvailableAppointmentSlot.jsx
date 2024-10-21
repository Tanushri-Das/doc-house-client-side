import React, { useState } from "react";
import "./AvailableAppointment.css";
import BookingModal from "../BookingModal/BookingModal";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

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
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBookAppointment = () => {
    if (user && user.email) {
      if (!bookedSlots.includes(slot)) {
        onBooking(slot);
        handleOpenModal();
      }
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
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
