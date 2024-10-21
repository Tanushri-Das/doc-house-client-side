import React from "react";
import useBooking from "../../../Hooks/useBooking";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AppointmentBookingsList = () => {
  const [axiosSecure] = useAxiosSecure();
  const [bookings, refetch] = useBooking();

  const handleDelete = (booking) => {
    console.log(booking._id);
    Swal.fire({
      title: "Are you sure you want to delete this appointment?",
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
              text: "Your appointment has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Dental Ease | My Appointments</title>
      </Helmet>
      <div className="my-12">
        {bookings.length > 0 ? (
          <>
            <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center">
              My Appointments : {bookings.length}
            </h1>
            <div className="mt-9">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full font-light">
                  <thead className="bg-gray-700 text-gray-200">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        #
                      </th>
                      <th scope="col" className="text-lg text-center px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="text-lg text-center px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="text-lg text-center px-6 py-3">
                        Treatment
                      </th>
                      <th scope="col" className="text-lg text-center px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="text-lg text-center px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody className="bg-white divide-y divide-gray-200 text-center">
                    {bookings?.map((booking, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {booking.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {booking.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {booking.treatmentName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {booking.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          <button
                            onClick={() => handleDelete(booking)}
                            className="bg-red-600 text-white px-4 py-3 rounded-lg ms-2"
                          >
                            <FaTrashAlt className="text-lg" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center mt-8">
            <p className="text-xl text-black font-semibold">
              No Appointments Found
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AppointmentBookingsList;
