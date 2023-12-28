import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MakeDoctor = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("Effect: isAdmin", isAdmin);
    checkAdminStatus();
  }, [axiosSecure, user.email, isAdmin]);

  const checkAdminStatus = async () => {
    try {
      const response = await axiosSecure.get(
        `/users/admin/email/${user.email}`
      );
      console.log(response.data);
      setIsAdmin(response.data.isAdmin);
    } catch (error) {
      console.error("Error checking admin status:", error);
      // Handle error if needed
    }
  };

  const handleMakeDoctor = async (e) => {
    e.preventDefault();
    console.log("Input Email Value:", email);

    try {
      // Check if the email exists in the usersCollection
      const emailCheckResponse = await axiosSecure.get(
        `/users/check-email/${email}`
      );
      if (emailCheckResponse.data.emailExists) {
        // Email exists in the collection, proceed to make the user a doctor
        const makeDoctorResponse = await axiosSecure.patch(
          `/users/doctor/${email}`
        );

        if (
          makeDoctorResponse.data.message === "User has been made a doctor."
        ) {
          // User has been successfully made a doctor
          console.log("User has been made a doctor.");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User has been made a doctor.",
            showConfirmButton: false,
            timer: 1500,
          });
          // Clear the email input field
          setEmail("");
        } else {
          // Failed to make the user a doctor
          console.log("Failed to make the user a doctor.");
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to make the user a doctor.",
          });
        }
      } else {
        // Email doesn't exist in the collection
        console.log("Email doesn't exist in the collection");
        Swal.fire({
          icon: "error",
          title: "Email Not Found",
          text: "The entered email does not exist in the collection.",
        });
      }
    } catch (error) {
      console.error("Error making user a doctor:", error);
      // Handle error if needed
    }
  };

  return (
    <div className="my-16">
      <h1 className="text-black text-center text-3xl mb-6 font-bold">
        Make Doctor
      </h1>
      {/* <div className="mb-3">
        <p>Role: {isAdmin ? "Admin" : "User"}</p>
      </div> */}
      <form
        className="form p-6 bg-white rounded-xl w-full flex-shrink-0 sm:max-w-lg mx-auto"
        onSubmit={handleMakeDoctor}
      >
        <div className="mb-3">
          <label className="block text-black text-xl font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input text-[16px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-4">
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

export default MakeDoctor;
