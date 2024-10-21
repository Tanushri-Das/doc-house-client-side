import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import Button from "../../../Components/Shared/Button/Button";
import useTheme from "../../../Hooks/useTheme";

const MakeDoctor = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [email, setEmail] = useState("");
  const { isDarkMode } = useTheme();

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
          console.log("User has been made a doctor.");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User has been made a doctor.",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmail("");
        } else {
          console.log("Failed to make the user a doctor.");
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to make the user a doctor.",
          });
        }
      } else {
        console.log("Email doesn't exist in the collection");
        Swal.fire({
          icon: "error",
          title: "Email Not Found",
          text: "The entered email does not exist in the collection.",
        });
      }
    } catch (error) {
      console.error("Error making user a doctor:", error);
    }
  };

  return (
    <div className="my-12">
      <h1
        className={`text-black text-center text-4xl mb-6 font-bold ${
          isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
        }`}
      >
        Make Doctor
      </h1>
      <div className="flex justify-center items-center mx-2 sm:mx-0">
        <div
          className={`w-full flex-shrink-0 sm:max-w-2xl mx-auto ${
            isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
          }`}
        >
          <form
            className="space-y-4 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl"
            onSubmit={handleMakeDoctor}
          >
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border text-black border-gray-300 rounded-lg w-full p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button name={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeDoctor;
