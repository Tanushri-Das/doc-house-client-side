import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllBookingAppointments = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: bookingAppointments = [] } = useQuery({
    queryKey: ["bookingAppointments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookingAppointments");
      return res.data;
    },
  });
  return (
    <div className="my-12">
      {bookingAppointments.length > 0 ? (
        <>
          <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center">
            Booked Appointments : {bookingAppointments.length}
          </h1>
          <div className="mt-8">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="min-w-full font-light">
                <thead className="bg-gray-700 text-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      TreatmentName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Appointment Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Appointment Slot
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(bookingAppointments) &&
                    bookingAppointments.map((bookingAppointment, index) => (
                      <tr key={bookingAppointment._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {bookingAppointment.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {bookingAppointment.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {bookingAppointment.treatmentName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {bookingAppointment.appointmentDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                          {bookingAppointment.slot}
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
            No booking appointment
          </p>
        </div>
      )}
    </div>
  );
};

export default AllBookingAppointments;
