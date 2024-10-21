import React, { useState } from "react";
import useTheme from "../../../Hooks/useTheme";
import { FaXmark } from "react-icons/fa6";
import Button from "../../../Components/Shared/Button/Button";

const Modal = ({ isOpen, onClose, onUpdate, editedService }) => {
  const [updatedService, setUpdatedService] = useState(editedService);
  const { isDarkMode } = useTheme();

  const handleNameChange = (e) => {
    setUpdatedService({
      ...updatedService,
      service_name: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    setUpdatedService({
      ...updatedService,
      price: e.target.value,
    });
  };

  const handleSubmit = () => {
    onUpdate(updatedService);
  };

  return (
    <div
      className={`${
        isOpen ? "flex items-center justify-center" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50`}
    >
      <div
        className={`max-w-lg mx-auto mt-10 p-4 rounded-md shadow-lg ${
          isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-end">
          <FaXmark
            onClick={onClose}
            className={`h-6 w-6 cursor-pointer ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold">
            Treatment Name
          </label>
          <input
            type="text"
            id="name"
            value={updatedService.service_name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-lg text-black mt-2 w-full p-3 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-lg font-semibold">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={updatedService.price}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-lg text-black mt-2 w-full p-3 outline-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <Button onClick={handleSubmit} name={"Update"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
