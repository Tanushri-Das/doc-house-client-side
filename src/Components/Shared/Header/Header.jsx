import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/dochouselogo.png";
import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";
import useAuth from "../../../Hooks/useAuth";
import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";

const Header = () => {
  const { user, logOut } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav
      className={`${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div className="px-4 sm:px-6 py-3 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="h-8 w-8" />
              <h2
                className={`text-2xl xl:text-4xl font-semibold header-logo-text ${
                  isDarkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <span className="doc">Dental</span> Ease
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block ml-auto">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className="text-lg font-semibold navtext lg:pe-2 xl:pe-[20px]"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/appointment"
                  className="text-lg font-semibold nav text lg:pe-2 xl:pe-[20px]"
                >
                  Appointment
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold nav text lg:pe-2 xl:pe-[20px]"
                >
                  Dashboard
                </NavLink>
                <button
                  className="text-lg lg:pe-2 xl:pe-[20px]"
                  onClick={toggleTheme}
                >
                  {isDarkMode ? (
                    <FiSun className="text-2xl" />
                  ) : (
                    <FiMoon className="text-lg" />
                  )}
                </button>
                {user ? (
                  <>
                    <li className="flex justify-center items-center text-lg font-semibold lg:pe-2 xl:pe-[20px]">
                      {user?.displayName}
                    </li>
                    <li className="flex justify-center">
                      <button
                        onClick={handleLogout}
                        className="logout-btn text-lg font-semibold text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex justify-center">
                      <Link
                        className="login-btn text-[16px] font-semibold text-white"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-[#07332F] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#07332F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-4 pt-8 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="text-lg font-semibold navtext block">
              Home
            </NavLink>
            <NavLink
              to="/appointment"
              className="text-lg font-semibold navtext block"
            >
              Appointment
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-lg font-semibold navtext block"
            >
              Dashboard
            </NavLink>
            <button className="text-lg block" onClick={toggleTheme}>
              {isDarkMode ? (
                <FiSun className="text-2xl" />
              ) : (
                <FiMoon className="text-lg" />
              )}
            </button>
            {user ? (
              <div className="">
                <li className="list-none text-lg font-semibold navtext block mb-5">
                  {user?.displayName}
                </li>
                <li className="list-none">
                  <button
                    onClick={handleLogout}
                    className="login-btn text-[16px] font-semibold text-white"
                  >
                    Logout
                  </button>
                </li>
              </div>
            ) : (
              <>
                <li className="list-none pt-7">
                  <Link
                    className="logout-btn text-[16px] font-semibold text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
