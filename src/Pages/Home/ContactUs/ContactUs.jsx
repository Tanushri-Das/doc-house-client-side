import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import "./ContactUs.css";
import Swal from "sweetalert2";
import axios from "axios";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Log the form data to the console
      console.log("Form Data:", data);

      // Create a newContact object
      const newContact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };

      // Log the newContact object to the console
      console.log("New Contact:", newContact);

      // Make a POST request to your server
      const response = await axios.post(
        "https://doc-house-server-side-hoqxfra72-tanushri-das.vercel.app/contacts",
        newContact
      );
      console.log("Server Response:", response.data);

      // Reset the form after successful submission
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Contact added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error storing contact data:", error);
    }
  };
  return (
    <div className="md:mx-12 xl:mx-[135px] my-[130px] grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 contactus py-12">
      <div>
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
      <div className="pe-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form p-6 bg-white rounded-xl w-full"
        >
          <div className="mb-3">
            <label className="block text-white text-[16px] font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              placeholder="Name"
              className="form-input text-base w-full"
              {...register("name", { required: true, maxLength: 90 })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:gap-6">
            <div>
              <div className="mb-3">
                <label className="block text-white text-[16px] font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input text-base"
                  {...register("email", { required: true, maxLength: 90 })}
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label className="block text-white text-[16px] font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-input text-base"
                  {...register("phone", { required: true, maxLength: 90 })}
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-white text-[16px] font-semibold mb-2">
              Message *
            </label>
            <textarea
              className="form-input h-28 text-base"
              placeholder="Your Message"
              {...register("message", { required: true })}
            ></textarea>
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
    </div>
  );
};

export default ContactUs;
