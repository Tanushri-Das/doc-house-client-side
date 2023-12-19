import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import CustomSpinner from "../../../Components/CustomSpinner/CustomSpinner";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import Swal from "sweetalert2";

const ManageDoctorInfo = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedDesignation, setEditedDesignation] = useState("");
  const [editingDoctorInfo, setEditingDoctorInfo] = useState(null);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      try {
        const response = await axiosSecure.get(`/doctors/${user.email}`);
        setDoctorInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor info:", error);
        setLoading(false);
      }
    };

    fetchDoctorInfo();
  }, [axiosSecure, user.email, shouldCloseModal, editingDoctorInfo]);

  const handleEdit = (doctor) => {
    setEditedName(doctor.name);
    setEditedDesignation(doctor.designation);
    setEditingDoctorInfo(doctor);
    setIsModalOpen(true);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setEditedDesignation(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async () => {
    if (!editingDoctorInfo) {
      console.log("No item is being edited");
      return;
    }

    try {
      const response = await axiosSecure.put(
        `/doctors/${editingDoctorInfo._id}`,
        {
          name: editedName,
          designation: editedDesignation,
        }
      );

      const { message, updatedDoctor } = response.data;

      if (message && updatedDoctor) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Doctor information updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log("Updated Doctor Data:", updatedDoctor);
        setDoctorInfo(updatedDoctor); // Update the state with the correct data
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Close the modal after updating, whether successful or not
      setShouldCloseModal(true);
    }
  };

  // Use useEffect to close the modal when doctorInfo is updated
  useEffect(() => {
    if (shouldCloseModal && doctorInfo !== null) {
      handleCloseModal();
      setShouldCloseModal(false); // Reset the state variable
    }
  }, [shouldCloseModal, doctorInfo]);

  return (
    <div className="my-10">
      <div className="font-bold uppercase flex justify-center items-center">
        <h3 className="text-3xl"> Manage Doctor Info</h3>
      </div>
      <div className="table-responsive overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  <CustomSpinner />
                </td>
              </tr>
            ) : doctorInfo ? (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctorInfo.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  <img src={doctorInfo.image} alt="" className="avatar" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctorInfo.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  {doctorInfo.speciality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium text-center">
                  <button
                    onClick={() => handleEdit(doctorInfo)}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg me-2 sm:me-0 mb-2 sm:mb-0 sm:ml-2"
                  >
                    <HiOutlinePencilAlt className="text-xl" />
                  </button>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleUpdate}
          editedName={editedName}
          editedDesignation={editedDesignation}
          onNameChange={handleNameChange}
          onDesignationChange={handleDesignationChange}
        />
      )}
    </div>
  );
};

export default ManageDoctorInfo;
