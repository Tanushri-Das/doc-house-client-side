import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onUpdate, editedService }) => {
  const [updatedService, setUpdatedService] = useState(editedService);

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
      <div className="modal-container bg-white w-2/5 mx-auto mt-10 p-4 rounded-md shadow-lg">
        <div className="flex justify-end">
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-xl">Treatment Name</label>
          <input
            type="text"
            id="name"
            value={updatedService.service_name}
            onChange={handleNameChange}
            className="border px-2 py-1 w-full rounded mt-2 text-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={updatedService.price}
            onChange={handlePriceChange}
            className="border px-2 py-1 w-full rounded mt-2 text-lg"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
