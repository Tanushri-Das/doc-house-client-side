import React, { useState } from "react";
import useServices from "../../../Hooks/useServices";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "./Modal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageTreatment = () => {
  const [axiosSecure] = useAxiosSecure();
  const { services, refetchServices } = useServices();
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
        refetchServices();
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
    <div className="my-12">
      <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center">
        Manage Treatment
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
                  Treatment Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {services.map((service, index) => (
                <tr key={service._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {service.service_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {service.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
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
