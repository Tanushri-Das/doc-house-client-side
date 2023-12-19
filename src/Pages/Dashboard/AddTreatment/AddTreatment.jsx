import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const timeSlots = [
  "08.00 AM - 08.30 AM",
  "08.30 AM - 09.00 AM",
  "09.00 AM - 9.30 AM",
  "09.30 AM - 10.00 AM",
  "10.00 AM - 10.30 AM",
  "10.30 AM - 11.00 AM",
  "11.00 AM - 11.30 AM",
  "11.30 AM - 12.00 PM",
  "01.00 PM - 01.30 PM",
  "01.30 PM - 02.00 PM",
  "02.00 PM - 02.30 PM",
  "02.30 PM - 03.00 PM",
  "03.00 PM - 03.30 PM",
  "03.30 PM - 04.00 PM",
  "04.00 PM - 04.30 PM",
  "04.30 PM - 05.00 PM",
];

const AddTreatment = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [selectedSlots, setSelectedSlots] = useState([]);

  const toggleSlot = (slot) => {
    const updatedSlots = selectedSlots.includes(slot)
      ? selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
      : [...selectedSlots, slot];
    setSelectedSlots(updatedSlots);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { service_name, price } = data;

          const newService = {
            service_name,
            price: parseFloat(price),
            slots: selectedSlots,
            image: imgURL,
          };

          axiosSecure.post("/services", newService).then((data) => {
            reset();
            setSelectedSlots([]); // Clear selected slots after submission
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Service added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-black text-center text-3xl mb-6 font-bold">
        Add Service
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form p-6 bg-white rounded-xl w-full lg:w-3/4 mx-auto"
      >
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Service Name *
          </label>
          <input
            type="text"
            placeholder="Enter title"
            className="form-input text-base"
            {...register("service_name", { required: true, maxLength: 90 })}
          />
        </div>
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Price *
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            className="form-input text-base"
            {...register("price", { required: true, maxLength: 90 })}
          />
        </div>

        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Slots *
          </label>
          <div className="flex flex-wrap gap-2 text-[16px]">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`cursor-pointer border p-2 ${
                  selectedSlots.includes(slot) ? "bg-blue-200" : "bg-white"
                }`}
                onClick={() => toggleSlot(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-black text-lg font-semibold mb-1">
            Image *
          </label>
          <input
            type="file"
            className="text-base"
            {...register("image", { required: true })}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="login-btn text-[16px] font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTreatment;
