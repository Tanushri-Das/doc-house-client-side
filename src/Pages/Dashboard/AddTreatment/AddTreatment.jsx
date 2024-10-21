import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTheme from "../../../Hooks/useTheme";
import Button from "../../../Components/Shared/Button/Button";
import { Helmet } from "react-helmet-async";

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
  const { isDarkMode } = useTheme();
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

          axiosSecure.post("/services", newService).then(() => {
            reset();
            setSelectedSlots([]);
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
    <>
      <Helmet>
        <title>Dental Ease | Add Treatment</title>
      </Helmet>
      <div className="my-12">
        <h1
          className={`text-black text-center text-4xl mb-6 font-bold ${
            isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
          }`}
        >
          Add Service
        </h1>
        <div className="flex justify-center items-center mx-2 sm:mx-0">
          <div
            className={`w-full flex-shrink-0 sm:max-w-2xl mx-auto ${
              isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
            }`}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-700 text-lg font-semibold mb-1">
                    Service Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                    {...register("service_name", {
                      required: true,
                      maxLength: 90,
                    })}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 text-lg font-semibold mb-1">
                    Price *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                    {...register("price", { required: true, maxLength: 90 })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-1">
                  Slots *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[14px]">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer text-center rounded text-black border p-2 ${
                        selectedSlots.includes(slot)
                          ? "bg-blue-200"
                          : "bg-white"
                      }`}
                      onClick={() => toggleSlot(slot)}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-semibold mb-1">
                  Image *
                </label>
                <input
                  type="file"
                  className="border border-gray-300 text-black rounded-lg w-full p-3 hover:cursor-pointer"
                  {...register("image", { required: true })}
                />
              </div>
              <div className="flex justify-center">
                <Button name={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTreatment;
