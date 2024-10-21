import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useTheme from "../../../Hooks/useTheme";
import Button from "../../../Components/Shared/Button/Button";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddDoctorPersonalInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const { isDarkMode } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { data: speciality = [] } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await axiosSecure.get("/appointmentSpeciality");
      return res.data;
    },
  });
  const { user } = useAuth();

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
          const { name, email, speciality, designation } = data;
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
    <>
      <Helmet>
        <title>Dental Ease | Add Personal Info</title>
      </Helmet>
      <div className="my-12">
        <h1
          className={`text-black text-center text-4xl mb-6 font-bold ${
            isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
          }`}
        >
          Add Personal Information
        </h1>

        <form
          onSubmit={handleSubmit(handleAddDoctorInfo)}
          className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-black text-lg font-semibold mb-1">
                Name *
              </label>
              <input
                type="text"
                value={user.displayName}
                placeholder="Enter Email"
                className="border border-gray-300 rounded-lg w-full p-3 text-black"
                {...register("name", { required: true, maxLength: 90 })}
              />
            </div>
            <div className="w-full">
              <label className="block text-black text-lg font-semibold mb-1">
                Email *
              </label>
              <input
                type="email"
                defaultValue={user.email}
                placeholder="Enter Email"
                className="border border-gray-300 rounded-lg w-full p-3 text-black"
                {...register("email", { required: true, maxLength: 90 })}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-black text-lg font-semibold mb-1">
                Designation *
              </label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="border border-gray-300 rounded-lg w-full p-3 text-black"
                {...register("designation", { required: true, maxLength: 90 })}
              />
            </div>
            <div className="w-full">
              <label className="block text-black text-lg font-semibold mb-1">
                Speciality *
              </label>
              <select
                {...register("speciality", { required: true })}
                className="border border-gray-300 rounded-lg w-full p-3 text-black"
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
          </div>
          <div>
            <label className="block text-black text-lg font-semibold mb-1">
              Image *
            </label>
            <input
              type="file"
              className="border border-gray-300 rounded-lg w-full p-3 text-black"
              {...register("image", { required: true })}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button name={"Submit"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDoctorPersonalInfo;
