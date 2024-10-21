import React, { useState } from "react";
import signupImg from "../../images/signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import Button from "../../Components/Shared/Button/Button";
import useTheme from "../../Hooks/useTheme";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const { isDarkMode } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      // Passwords do not match, set passwordsMatch to false
      setPasswordsMatch(false);
      return;
    }

    // Passwords match, proceed with form submission.
    setPasswordsMatch(true);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name).then(() => {
        const saveUser = { name: data.name, email: data.email };
        axiosSecure
          .post("/users", saveUser)
          .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "User added successfully!",
              icon: "success",
              timer: 1500,
            });
            navigate("/");
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
    });
  };
  return (
    <div className="lg:mx-10 xl:mx-20 grid grid-cols-1 lg:grid-cols-2 my-12">
      <div className="w-full flex-shrink-0 sm:max-w-lg hidden lg:block">
        <img src={signupImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center mx-2 sm:mx-0">
        <div
          className={`w-full flex-shrink-0 sm:max-w-lg mx-auto ${
            isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
          }`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-black text-center text-4xl mb-6 font-bold">
              Sign Up
            </h1>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="border text-black border-gray-300 rounded-lg w-full p-3"
              />
              {errors.name && (
                <span className="text-red-600 mt-1">
                  {errors.name?.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="border text-black border-gray-300 rounded-lg w-full p-3"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                    maxLength: 10,
                  })}
                  className="border text-black border-gray-300 rounded-lg w-full p-3"
                />
                <span
                  className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600 mt-1">
                  {errors.password?.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-1">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-1">
                  Password must not exceed 10 characters
                </span>
              )}
            </div>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  className="border text-black border-gray-300 rounded-lg w-full p-3"
                />
                <span
                  className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-600 mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}

              {!passwordsMatch && (
                <span className="text-red-600 mt-1">
                  Password and Confirm Password do not match
                </span>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <Button name={"Sign Up"} />
            </div>
            <p className="text-center text-black text-[16px] font-medium mt-2">
              Already have an account?
              <Link to="/login" className="text-[#f78a5b] ms-1">
                Login
              </Link>
            </p>
            <p className="text-center text-lg font-semibold my-4 text-black">
              Or
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
