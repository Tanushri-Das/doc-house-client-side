import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImg from "../../images/login.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="lg:mx-[135px] grid grid-cols-2 my-16">
      <div className="w-full flex-shrink-0 sm:max-w-lg">
        <img src={loginImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full flex-shrink-0 sm:max-w-lg bg-white mx-auto">
          <form onSubmit={handleLogin} className="form p-6 bg-white rounded-xl">
            <h1 className="text-black text-center text-3xl mb-10 font-bold">
              Sign in to Doc House
            </h1>
            <div className="mb-6">
              <label className="block text-black text-[20px] font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-input"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <label className="block text-black text-[20px] font-semibold">
                  Password
                </label>
                <label className="block text-[#F7A582] text-[16px] font-semibold">
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
                  className="form-input w-full"
                />

                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-black text-[20px] font-semibold mb-3">
                <LoadCanvasTemplate />
              </label>
             
              <input onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="form-input"
              />
            </div>
            <div className="flex justify-center mb-6">
              <button disabled={disabled} className="login-btn text-[16px] font-semibold text-white">
                Login
              </button>
            </div>
            <p className="text-center login-account text-lg">
              Please register at first. Go to
              <Link
                to="/signup"
                className="create-account ms-1 text-lg font-bold"
              >
                SIGN UP
              </Link>
            </p>
            <p className="text-center text-lg font-bold my-5">Or</p>
          {/* <SocialLogin /> */}
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
