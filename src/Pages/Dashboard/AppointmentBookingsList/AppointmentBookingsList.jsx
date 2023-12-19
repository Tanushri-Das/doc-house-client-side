import React from "react";
import useBooking from "../../../Hooks/useBooking";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AppointmentBookingsList = () => {
  const [axiosSecure] = useAxiosSecure();
  const [bookings, refetch] = useBooking();

  const handleDelete = (booking) => {
    console.log(booking._id);
    Swal.fire({
      title: "Are you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookings/${booking._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Appointment has been deleted.",
              icon: "success",
              timer: 3000, // Time in milliseconds (e.g., 3000ms = 3 seconds)
              showConfirmButton: false, // Hide the "OK" button
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="font-bold uppercase flex flex-col justify-center mt-16 items-center">
        <h3 className="text-3xl mb-6 block">
          My Appointments : {bookings.length}
        </h3>
      </div>

      <div className="mt-12">
        <table className="min-w-full divide-y divide-gray-200 text-center">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xl font-medium text-center">#</th>
              <th className="px-6 py-3 text-xl font-medium text-center">
                Name
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium">
                Email
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium">
                Treatment
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium">
                Price
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium">
                Action
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings?.map((booking, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {booking.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {booking.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {booking.treatmentName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {booking.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  <div className="flex items-center">
                    <button className="bg-[#07332F] py-2 px-5 rounded-lg text-lg font-semibold text-white">
                      PAY
                    </button>
                    <button
                      onClick={() => handleDelete(booking)}
                      className="bg-red-600 text-white px-4 py-3 rounded-lg ms-2"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentBookingsList;
