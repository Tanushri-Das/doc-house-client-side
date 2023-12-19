import React from "react";
import "./ManageDoctor.css";

const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  editedName,
  editedDesignation,
  onNameChange,
  onDesignationChange
}) => {
  return (
    <>
      {isOpen && (
        <div
          className={`overlay ${isOpen ? "open" : ""}`}
          onClick={onClose}
        ></div>
      )}
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-box">
          <div className="mb-3 text-start flex flex-col">
            <label
              htmlFor="Name"
              className="block text-black text-lg font-semibold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              value={editedName}
              className="form-input w-full text-[16px] font-medium"
              onChange={onNameChange}
            />
          </div>
          <div className="mb-3 text-start flex flex-col">
            <label
              htmlFor="Designation"
              className="block text-black text-lg font-semibold mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              value={editedDesignation}
              className="form-input w-full text-[16px] font-medium"
              onChange={onDesignationChange}
            />
          </div>
          <div className="flex justify-evenly">
            <button
              className=" bg-green-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
              onClick={onConfirm}
            >
              Save
            </button>
            <button
              className=" bg-red-600 text-[16px] font-medium text-white py-2 px-4 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;