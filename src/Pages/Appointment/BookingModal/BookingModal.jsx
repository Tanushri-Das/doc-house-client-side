import React from "react";
import "./BookingModal.css";
import { format } from "date-fns";

const BookingModal = ({ isOpen, onClose, name, selectedDate, slots }) => {
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      slot,
      name,
      email,
      phone,
    };
    console.log(booking);
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div
          className={`overlay ${isOpen ? "open" : ""}`}
          onClick={onClose}
        ></div>
      )}
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-semibold text-xl">{name}</h3>
          <hr className="my-3" />
          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              className="form-input w-full mb-2 text-[16px] font-medium"
            />
            <select name="slot" className="form-input mb-2 font-normal">
              {slots?.map((slot) => (
                <option value={slot} key={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-input w-full mb-2 text-[16px] font-medium"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-input w-full mb-2 text-[16px] font-medium"
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone Number"
              className="form-input w-full mb-2 text-[16px] font-medium"
            />
            <div className="flex justify-evenly mt-4">
              <button
                type="submit"
                className="btn bg-green-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
              <button
                className="btn bg-red-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
