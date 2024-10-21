import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../../../Components/Shared/Button/Button";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = async (data) => {
    // Extract countryCode and phone from phoneNumber
    const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
    const phone = phoneNumber.slice(-10);

    try {
      const newContact = {
        name: data.name,
        email: data.email,
        phone,
        countryCode,
        message: data.message,
      };
      axiosSecure.post("/contacts", newContact).then((data) => {
        reset();
        setPhoneNumber("");
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      console.error("Error storing contact data:", error);
    }
  };

  return (
    <div className="md:mx-12 xl:mx-20 my-12 flex flex-col xl:flex-row justify-center items-center gap-6 bg-[#07332f] rounded-xl p-2 sm:p-6 md:p-10">
      <div className="w-full xl:w-1/2">
        <h2 className="text-4xl font-bold mb-5 text-center text-white">
          Contact With Us
        </h2>
        <p className="text-[16px] text-center mb-8 px-16 text-white">
          Reach out to us with any questions or concerns. Our team is here to
          assist you. We look forward to hearing from you!
        </p>
        <div className="flex justify-center mb-6">
          <BsFillTelephonePlusFill className="mt-1 mr-2 text-white" />
          <p className="text-[16px] text-white">+88 01750 14 14 14</p>
        </div>
        <div className="flex justify-center">
          <MdLocationOn className="mt-1 mr-2 text-white" />
          <p className="text-[16px] text-white">Dhanmondi, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-8 bg-white rounded-xl max-w-xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                {...register("name", { required: true, maxLength: 90 })}
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                {...register("email", { required: true, maxLength: 90 })}
              />
            </div>
          </div>
          <div>
            <PhoneInput
              country={"bd"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputProps={{
                className:
                  "border text-black border-gray-300 rounded-lg w-full ps-12 py-3 outline-none",
              }}
            />
          </div>
          <div>
            <textarea
              resize="none"
              placeholder="Your message"
              className="border h-24 text-black border-gray-300 outline-none rounded-lg w-full p-3"
              {...register("message", { required: true })}
            ></textarea>
          </div>

          <div className="flex justify-center mt-2">
            <Button name={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
