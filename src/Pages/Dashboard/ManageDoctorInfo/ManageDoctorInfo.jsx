import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageDoctorInfo = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [doctorInfo, setDoctorInfo] = useState(null);
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
      } catch (error) {
        console.error("Error fetching doctor info:", error);
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
    <>
      <Helmet>
        <title>Dental Ease | Manage Personal Info</title>
      </Helmet>
      <div className="my-12">
        <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center">
          Manage Doctor Info
        </h1>
        <div className="mt-8">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full font-light">
              <thead className="bg-gray-700 text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Speciality
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {doctorInfo ? (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {doctorInfo.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center font-medium">
                      <img
                        src={doctorInfo.image}
                        alt=""
                        className="w-24 h-24 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {doctorInfo.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {doctorInfo.speciality}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
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
    </>
  );
};

export default ManageDoctorInfo;
