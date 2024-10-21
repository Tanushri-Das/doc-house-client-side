import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/dochouselogo.png";
import { FiSun, FiMoon } from "react-icons/fi";
import useAuth from "../../../Hooks/useAuth";
import { FaBars, FaXmark } from "react-icons/fa6";
import Button from "../Button/Button";
import useTheme from "../../../Hooks/useTheme";

const Header = () => {
  const { user, logOut } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav
      className={`border-b-[2px] ${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div className="px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="text-lg font-bold md:flex-grow-0">
          <Link to="/">
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt=""
                className="w-[60px] h-[60px] hidden md:block"
              />
              <h2
                className={`text-2xl xl:text-3xl font-semibold header-logo-text ${
                  isDarkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <span className="doc">Dental</span> Ease
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block ml-auto">
            <div className="flex items-center justify-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xl ${
                    isActive
                      ? `${isDarkMode ? "text-white" : "text-black"} font-bold`
                      : "text-[#737373]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  `text-xl ${
                    isActive
                      ? `${isDarkMode ? "text-white" : "text-black"} font-bold`
                      : "text-[#737373]"
                  }`
                }
              >
                Appointment
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-xl ${
                    isActive
                      ? `${isDarkMode ? "text-white" : "text-black"} font-bold`
                      : "text-[#737373]"
                  }`
                }
              >
                Dashboard
              </NavLink>
              <button className="text-xl" onClick={toggleTheme}>
                {isDarkMode ? (
                  <FiSun className="text-2xl" />
                ) : (
                  <FiMoon className="text-2xl" />
                )}
              </button>
              {user ? (
                <>
                  <li className="flex justify-center items-center text-lg font-semibold">
                    {user?.displayName}
                  </li>
                  <li className="flex justify-center">
                    <Button onClick={handleLogout} name={"Logout"} />
                  </li>
                </>
              ) : (
                <>
                  <li className="flex justify-center">
                    <Link to="/login">
                      <Button name={"Login"} />
                    </Link>
                  </li>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <FaBars onClick={toggleDrawer} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
              onClick={closeDrawer}
            ></div>
            <div
              className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-transform duration-300 md:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } ${
                isDarkMode ? "bg-[#151e3d] text-white" : "bg-white text-black"
              }`}
            >
              <div className="p-5">
                <div className="flex justify-end mb-6">
                  <FaXmark
                    onClick={closeDrawer}
                    className={`h-6 w-6 cursor-pointer ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  />
                </div>
                <NavLink
                  to="/"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `text-xl block mb-3 ${
                      isActive
                        ? `${
                            isDarkMode ? "text-white" : "text-black"
                          } font-bold`
                        : "text-[#737373]"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={closeDrawer}
                  to="/appointment"
                  className={({ isActive }) =>
                    `text-xl block mb-3 ${
                      isActive
                        ? `${
                            isDarkMode ? "text-white" : "text-black"
                          } font-bold`
                        : "text-[#737373]"
                    }`
                  }
                >
                  Appointment
                </NavLink>
                <NavLink
                  onClick={closeDrawer}
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-xl block mb-3 ${
                      isActive
                        ? `${
                            isDarkMode ? "text-white" : "text-black"
                          } font-bold`
                        : "text-[#737373]"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <button
                  className="text-xl mb-3 block"
                  onClick={() => {
                    toggleTheme();
                    closeDrawer();
                  }}
                >
                  {isDarkMode ? (
                    <FiSun className="text-2xl" />
                  ) : (
                    <FiMoon className="text-2xl" />
                  )}
                </button>
                {user ? (
                  <div className="">
                    <li className="list-none text-lg font-semibold navtext block mb-5">
                      {user?.displayName}
                    </li>
                    <li className="list-none">
                      <Button onClick={handleLogout} name={"Logout"} />
                    </li>
                  </div>
                ) : (
                  <>
                    <NavLink onClick={closeDrawer} to="/login" className="">
                      <Button name={"Login"} />
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
