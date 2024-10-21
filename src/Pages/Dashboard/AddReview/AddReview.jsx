import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Button from "../../../Components/Shared/Button/Button";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddReview = () => {
  const { user } = useAuth();
  console.log(user.displayName);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
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
          const { name, email, designation, rateus, review } = data;
          const newReview = {
            name,
            email,
            designation,
            rateus,
            review,
            image: imgURL,
          };
          console.log(newReview);
          axiosSecure.post("/reviews", newReview).then((data) => {
            console.log("after posting new review", data.data);
            reset();
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Review added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log("img_hosting_token", img_hosting_token);
  return (
    <div className="my-12">
      <h3 className="text-center text-4xl font-bold mb-6">Give Review</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              value={user.displayName}
              className="border border-gray-300 text-black rounded-lg w-full p-3"
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              value={user.email}
              className="border border-gray-300 text-black rounded-lg w-full p-3"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Designation
            </label>
            <input
              type="text"
              {...register("designation", { required: true })}
              placeholder="Company’s name, Designation"
              className="border text-black border-gray-300 rounded-lg w-full p-3"
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Rate Us
            </label>
            <select
              className="border border-gray-300 text-black rounded-lg w-full p-3"
              {...register("rateus", { required: true })}
            >
              <option>1</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-lg font-semibold mb-1">
            Image *
          </label>
          <input
            type="file"
            className="border border-gray-300 text-black rounded-lg w-full p-3"
            {...register("image", { required: true })}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-lg font-semibold mb-1">
            Description
          </label>
          <textarea
            className="border border-gray-300 rounded-lg w-full text-black h-24 p-3"
            placeholder="Review in detail"
            {...register("review", { required: true })}
          ></textarea>
        </div>

        <div className="flex justify-center mt-4">
          <Button name={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
