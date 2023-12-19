import React, { useState } from "react";
import useServices from "../../../Hooks/useServices";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageTreatment = () => {
  const [axiosSecure] = useAxiosSecure();
  const { services, loading, refetchServices } = useServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedService, setEditedService] = useState({
    _id: null,
    service_name: "",
    price: "",
  });

  const handleEdit = (service) => {
    setEditedService({
      _id: service._id,
      service_name: service.service_name,
      price: service.price,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async (updatedService) => {
    try {
      const { _id, ...serviceData } = updatedService;

      const response = await axiosSecure.put(
        `/appointmentOptions/${_id}`,
        serviceData
      );

      if (
        response.data.message === "appointment Options updated successfully"
      ) {
        refetchServices(); // Use the refetch function provided by React Query
        console.log("Updated Service:", updatedService);
        handleCloseModal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Failed to update service:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div>
      <div className="font-bold uppercase flex justify-center mt-16 items-center">
        <h3 className="text-3xl">Manage Treatment</h3>
      </div>
      <div className="mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium"
              >
                Treatment Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service._id}>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {service.service_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  {service.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-medium">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  >
                    <HiOutlinePencilAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
          editedService={editedService}
        />
      )}
    </div>
  );
};

export default ManageTreatment;
