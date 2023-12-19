import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaUsers,
  FaUserPlus,
  FaPlus,
  FaGripHorizontal,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDoctor from "../Hooks/useDoctor";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  // Function to check if the screen width is below a certain breakpoint
  const isSmallScreen = () => window.innerWidth <= 640; // You can adjust the breakpoint as needed

  const [isAdmin] = useAdmin();
  const [isDoctor] = useDoctor();

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#07332F] ${
          open ? "w-60" : "w-16"
        } duration-500 text-white font-semibold px-4 h-screen`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 gap-4 relative">
          <ul>
            {isAdmin ? (
              <>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/allusers"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaUsers className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaUsers className="text-lg mt-[2px] me-3" />
                        {open && "Users"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/bookingAppointments"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaShoppingBag className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaShoppingBag className="text-lg mt-[2px] me-3" />
                        {open && "All Appointments"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/addtreatment"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaPlus className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaPlus className="text-lg mt-[2px] me-3" />
                        {open && "Add Treatment"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/managetreatments"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                        {open && "Manage Treatment"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/adddoctor"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaPlus className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaPlus className="text-lg mt-[2px] me-3" />
                        {open && "Add a Doctor"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/managedoctor"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                        {open && "Manage Doctor"}
                      </>
                    )}
                  </NavLink>
                </li>
              </>
            ) : isDoctor ? (
              <>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/addDoctorPersonalInfo"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaPlus className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaPlus className="text-lg mt-[2px] me-3" />
                        {open && "Add Personal Info"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/managedoctorinfo"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaGripHorizontal className="text-lg mt-[2px] me-3" />
                        {open && "Manage Personal Info"}
                      </>
                    )}
                  </NavLink>
                </li>
                
              </>
            ) : (
              <>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/myAppointments"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <FaShoppingCart className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <FaShoppingCart className="text-lg mt-[2px] me-3" />
                        {open && "My Appointments"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/addReview"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <MdReviews className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <MdReviews className="text-lg mt-[2px] me-3" />
                        {open && "Add Review"}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="mb-5">
                  <NavLink
                    to="/dashboard/myReview"
                    activeClassName="active-link"
                    className="uppercase flex"
                  >
                    {isSmallScreen() ? (
                      <MdReviews className="text-lg mt-[2px] me-3" />
                    ) : (
                      <>
                        <MdReviews className="text-lg mt-[2px] me-3" />
                        {open && "My Reviews"}
                      </>
                    )}
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li className="mb-5">
              <NavLink
                to="/"
                activeClassName="active-link"
                className="uppercase flex"
              >
                {isSmallScreen() ? (
                  <AiFillHome className="text-lg mt-[2px] me-3" />
                ) : (
                  <>
                    <AiFillHome className="text-lg mt-[2px] me-3" />
                    {open && "Home"}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold md:w-3/4 mx-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
