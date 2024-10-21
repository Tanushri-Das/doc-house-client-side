// import React, { useState, useEffect } from "react";
// import "./BookingModal.css";
// import { format } from "date-fns";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAuth from "../../../Hooks/useAuth";
// import useTheme from "../../../Hooks/useTheme";

// const BookingModal = ({
//   isOpen,
//   onClose,
//   service_name,
//   slot,
//   selectedDate,
//   price,
//   setIsSlotBooked,
// }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//   });
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const { isDarkMode } = useTheme();

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         username: user.displayName || "",
//         email: user.email || "",
//         phone: "",
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBooking = {
//       appointmentDate: format(selectedDate, "PP"),
//       slot,
//       price,
//       treatmentName: service_name,
//       username: formData.username,
//       email: formData.email,
//       phone: formData.phone,
//     };

//     console.log("New Booking Data:", newBooking);

//     axiosSecure
//       .post("/bookings", newBooking)
//       .then(() => {
//         Swal.fire({
//           title: "Good job!",
//           text: "Booking added successfully!",
//           icon: "success",
//           timer: 1500,
//         });
//         setIsSlotBooked(true); // Set the slot as booked
//         onClose();
//       })
//       .catch((error) => {
//         console.error("Booking failed:", error);
//         Swal.fire({
//           title: "Error",
//           text: "Booking failed. Please try again later.",
//           icon: "error",
//         });
//       });
//   };

//   return (
//     <div>
//       {isOpen && (
//         <div
//           className={`overlay ${isOpen ? "open" : ""}`}
//           onClick={onClose}
//         ></div>
//       )}
//       <div className={`modal ${isOpen ? "open" : ""}`}>
//         <div className="modal-box">
//           <h3 className="font-semibold text-black text-xl">{service_name}</h3>
//           <div className="mt-3">
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 disabled
//                 value={format(selectedDate, "PP")}
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium"
//               />
//               <select
//                 name="slot"
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium"
//                 value={slot}
//                 disabled
//               >
//                 <option value={slot}>{slot}</option>
//               </select>
//               <input
//                 type="text"
//                 disabled
//                 value={price}
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 name="username"
//                 value={user.displayName}
//                 onChange={handleChange}
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={user.email}
//                 onChange={handleChange}
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
//               />
//               <input
//                 type="number"
//                 name="phone"
//                 placeholder="Enter Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
//               />
//               <div className="flex justify-center gap-4 mt-4">
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-red-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
//                   onClick={onClose}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

import React, { useState, useEffect } from "react";
import "./BookingModal.css";
import { format } from "date-fns";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookingModal = ({
  isOpen,
  onClose,
  service_name,
  slot,
  selectedDate,
  price,
  setIsSlotBooked,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract countryCode and phone from phoneNumber
    const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
    const phone = phoneNumber.slice(-10);

    const newBooking = {
      appointmentDate: format(selectedDate, "PP"),
      slot,
      price,
      treatmentName: service_name,
      username: formData.username,
      email: formData.email,
      phone,
      countryCode,
    };

    axiosSecure
      .post("/bookings", newBooking)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Booking added successfully!",
          icon: "success",
          timer: 1500,
        });
        setIsSlotBooked(true); // Set the slot as booked
        onClose();
      })
      .catch((error) => {
        console.error("Booking failed:", error);
        Swal.fire({
          title: "Error",
          text: "Booking failed. Please try again later.",
          icon: "error",
        });
      });
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
          <h3 className="font-semibold text-black text-xl">{service_name}</h3>
          <div className="mt-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                disabled
                value={format(selectedDate, "PP")}
                className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium"
              />
              <select
                name="slot"
                className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium"
                value={slot}
                disabled
              >
                <option value={slot}>{slot}</option>
              </select>
              <input
                type="text"
                disabled
                value={price}
                className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
              />
              <input
                type="text"
                placeholder="Enter Name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="border text-black border-gray-300 rounded-lg w-full mb-2 text-[16px] p-3 font-medium outline-none"
              />
              <div>
                <PhoneInput
                  country={"bd"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputProps={{
                    className:
                      "border text-black border-gray-300 rounded-lg w-full ps-12 py-3 outline-none",
                  }}
                />
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-green-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
