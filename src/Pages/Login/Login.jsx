import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signupImg from "../../images/signup.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import Button from "../../Components/Shared/Button/Button";
import useTheme from "../../Hooks/useTheme";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { isDarkMode } = useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "Good job!",
        text: "You Login Successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    });
  };

  return (
    <div className="lg:mx-10 xl:mx-20 grid grid-cols-1 lg:grid-cols-2 my-12">
      <div className="w-full flex-shrink-0 sm:max-w-lg hidden lg:flex">
        <img src={signupImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center mx-2 sm:mx-0">
        <div
          className={`w-full flex-shrink-0 sm:max-w-lg mx-auto ${
            isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
          }`}
        >
          <form
            onSubmit={handleLogin}
            className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
          >
            <h1 className="text-black text-center text-4xl mb-6 font-bold">
              Login
            </h1>
            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="border text-black border-gray-300 rounded-lg w-full p-3"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-gray-700 text-lg font-semibold mb-1">
                  Password
                </label>
                <label className="block text-[#ff7800] text-[16px] font-semibold">
                  <a href="#" className="text-primary link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  className="border text-black border-gray-300 rounded-lg w-full p-3"
                />

                <span
                  className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button name={"Login"} />
            </div>
            <p className="text-center text-[16px] text-black font-medium mt-2">
              Don’t have an account?
              <Link to="/signup" className="text-[#ff7800] ms-1">
                Signup
              </Link>
            </p>
            <p className="text-center text-lg font-bold my-4 text-black">Or</p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
