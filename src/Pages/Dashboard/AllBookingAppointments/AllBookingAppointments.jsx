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
    <div>
      <div className="font-bold flex justify-center mt-16 items-center">
        <h3 className="text-3xl">Total Booked Appointments : {bookingAppointments.length}</h3>
      </div>
      <div className="mt-10">
        <table className="min-w-full divide-y divide-gray-200 responsive-table">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                TreatmentName
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                Appointment Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                Appointment Slot
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(bookingAppointments) &&
              bookingAppointments.map((bookingAppointment, index) => (
                <tr key={bookingAppointment._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {bookingAppointment.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {bookingAppointment.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {bookingAppointment.treatmentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {bookingAppointment.appointmentDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {bookingAppointment.slot}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  Payment Due
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                    {order.paid ? "Clear Payment" : "Payment Due"}
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookingAppointments;
