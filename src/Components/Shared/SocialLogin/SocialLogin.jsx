import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useTheme from "../../../Hooks/useTheme";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { isDarkMode } = useTheme();

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
        style={{ padding: "8px" }}
      >
        <div className="flex items-center justify-center bg-white rounded-full p-2">
          <FaGoogle className={isDarkMode ? "text-[#f78a5b]" : "text-black"} />
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
