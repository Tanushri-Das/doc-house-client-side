import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddDoctorPersonalInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { data: speciality = [], refetch } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await axiosSecure.get("/appointmentSpeciality");
      return res.data;
    },
  });
  const { user } = useAuth();
  console.log(user.email);

  const handleAddDoctorInfo = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name,email, speciality, designation } = data;
          const newDoctorInfo = {
            name,
            email,
            designation,
            speciality,
            image: imgURL,
          };
          console.log(newDoctorInfo);
          axiosSecure.post("/addDoctorInfo", newDoctorInfo).then((data) => {
            console.log("after posting new Doctor", data.data);
            reset();
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add Doctor Personalinfo successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-black text-center text-3xl mb-6 font-bold">
        Add a New Doctor
      </h1>
      <form onSubmit={handleSubmit(handleAddDoctorInfo)} className="form p-6 bg-white rounded-xl w-full lg:w-3/4 mx-auto">
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Name *
          </label>
          <input
            type="text"
            value={user.displayName}
            placeholder="Enter Email"
            className="form-input text-base"
            {...register("name", { required: true, maxLength: 90 })}
          />
        </div>
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Email *
          </label>
          <input
            type="email"
            defaultValue={user.email}
            placeholder="Enter Email"
            className="form-input text-base"
            {...register("email", { required: true, maxLength: 90 })}
            readOnly // Make the input field read-only
          />
        </div>
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Designation *
          </label>
          <input
            type="text"
            placeholder="Enter Designation"
            className="form-input text-base"
            {...register("designation", { required: true, maxLength: 90 })}
          />
        </div>
        <div className="mb-3">
          <label className="block text-black text-lg font-semibold mb-1">
            Speciality *
          </label>
          <select
            {...register("speciality", { required: true })}
            className="form-input text-base"
          >
            <option selected>Pick One</option>
            {Array.isArray(speciality) &&
              speciality.map((special, index) => (
                <option key={special._id} value={special.service_name}>
                  {special.service_name}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
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
            type="submit" // Set the button type to "submit"
            className="login-btn text-[16px] font-semibold text-white"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctorPersonalInfo;
