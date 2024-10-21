import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../../../Components/Shared/Button/Button";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const newContact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };
      axiosSecure.post("/contacts", newContact).then((data) => {
        reset();
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
    <div className="md:mx-12 xl:mx-20 my-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 bg-[#07332f] rounded-xl py-12">
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
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-8 bg-white rounded-xl max-w-lg mx-auto"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="form-input text-base w-full"
              {...register("name", { required: true, maxLength: 90 })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:gap-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="form-input text-base"
                {...register("email", { required: true, maxLength: 90 })}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                className="form-input text-base"
                {...register("phone", { required: true, maxLength: 90 })}
              />
            </div>
          </div>

          <div>
            <textarea
              resize="none"
              className="form-input h-24 text-base"
              placeholder="Your Message"
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
