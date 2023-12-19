import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      axiosSecure
        .post("/users", saveUser)
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "User added successfully!",
            icon: "success",
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          // Handle error, display an error message, etc.
          console.error("User addition failed:", error);
          Swal.fire({
            title: "Error",
            text: "User addition failed. Please try again later.",
            icon: "error",
          });
        });
    });
  };

  return (
    <div className="flex justify-center items-center google-btn-div">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center py-4 border border-gray-500 rounded-full"
        style={{ padding: "8px" }} // Adjust the padding as needed
      >
        <div
          className="flex items-center justify-center bg-white rounded-full p-2"
         
        >
          <FaGoogle />
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
