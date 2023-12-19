import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./ManageDoctor.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useDoctors from "../../../Hooks/useDoctors";

const ManageDoctor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { doctors, loading, refetchDoctors } = useDoctors();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      // Refresh services data
      refetchDoctors();
      setRefresh(false);
    }
  }, [refresh, refetchDoctors]);

  const handleDelete = (doctor) => {
    Swal.fire({
      title: "Are you want to delete this doctor?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/doctors/${doctor._id}`).then((data) => {
          console.log("after posting new review", data.data);

          if (data.data.resultDoctor.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Doctor has been deleted.",
              icon: "success",
              timer: 3000,
              showConfirmButton: false,
            });

            // Trigger a re-fetch after successful deletion
            setRefresh(true);
          }
        });
      }
    });
  };

  return (
    <div className="my-10">
      <div className="font-bold uppercase flex justify-center items-center">
        <h3 className="text-3xl"> Manage Doctor</h3>
      </div>
      <div className="table-responsive overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                Designation
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                Speciality
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-lg font-medium text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors?.map((doctor, index) => (
              <tr key={doctor._id}>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctor.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium flex justify-center">
                  <img src={doctor.image} alt="" className="avatar" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctor.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctor.speciality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center align-middle">
                  <button
                    onClick={() => handleDelete(doctor)}
                    className="d-inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
