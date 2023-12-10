import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/dochouselogo.png";
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-8">
      <div className="max-w-7xl lg:mx-[135px] mx-auto px-4 sm:px-6 lg:px-8 border">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="h-8 w-8" />
              <h2 className="text-lg font-semibold header-logo-text"><span className="doc">Doc</span> House</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block ml-auto">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                  About
                </NavLink>
                <NavLink
                  to="/appointment"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                  Appointment
                </NavLink>
                <NavLink
                  to="/"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                  Reviews
                </NavLink>
                <NavLink
                  to="/"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                 Contact Us
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-lg font-semibold navtext pe-[40px]"
                >
                  Login
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-[#f63e7b] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#f63e7b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-4 pt-8 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="text-lg font-semibold navtext block mb-5"
            >
              Home
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
