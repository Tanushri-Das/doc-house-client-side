// import React from "react";
// import {
//   FaShoppingCart,
//   FaShoppingBag,
//   FaUsers,
//   FaPlus,
//   FaGripHorizontal,
//   FaTachometerAlt,
// } from "react-icons/fa";
// import { MdReviews } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import useAdmin from "../../Hooks/useAdmin";
// import useDoctor from "../../Hooks/useDoctor";
// import useTheme from "../../Hooks/useTheme";

// const Sidebar = () => {
//   const [isAdmin] = useAdmin();
//   const [isDoctor] = useDoctor();
//   const { isDarkMode } = useTheme();

//   return (
//     <div
//       className={`w-16 md:w-64 min-h-screen flex flex-col border-r-2 ${
//         isDarkMode
//           ? "bg-dark-background text-dark-text"
//           : "bg-light-background text-light-text"
//       }`}
//     >
//       <nav className="mt-4">
//         <ul>
//           {isAdmin ? (
//             <>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/allusers"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaUsers className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaUsers className="text-lg mt-[2px] me-3" />
//                       {open && "Users"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/bookingAppointments"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaShoppingBag className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaShoppingBag className="text-lg mt-[2px] me-3" />
//                       {open && "All Appointments"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/addtreatment"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaPlus className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaPlus className="text-lg mt-[2px] me-3" />
//                       {open && "Add Treatment"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/managetreatments"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                       {open && "Manage Treatment"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/adddoctor"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaPlus className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaPlus className="text-lg mt-[2px] me-3" />
//                       {open && "Add a Doctor"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/managedoctor"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                       {open && "Manage Doctor"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//             </>
//           ) : isDoctor ? (
//             <>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/addDoctorPersonalInfo"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaPlus className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaPlus className="text-lg mt-[2px] me-3" />
//                       {open && "Add Personal Info"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//               <li className="mb-5">
//                 <NavLink
//                   to="/dashboard/managedoctorinfo"
//                   activeClassName="active-link"
//                   className="uppercase flex"
//                 >
//                   {isSmallScreen() ? (
//                     <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                   ) : (
//                     <>
//                       <FaGripHorizontal className="text-lg mt-[2px] me-3" />
//                       {open && "Manage Personal Info"}
//                     </>
//                   )}
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
//                     isActive ? "bg-gray-700 text-white" : ""
//                   }`
//                 }
//                 end
//               >
//                 <FaTachometerAlt className="text-lg" />
//                 <span className="ml-3 hidden md:block">Dashboard</span>
//               </NavLink>
//               <NavLink
//                 to="/dashboard/myAppointments"
//                 className={({ isActive }) =>
//                   `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
//                     isActive ? "bg-gray-700 text-white" : ""
//                   }`
//                 }
//               >
//                 <FaShoppingCart className="text-lg" />
//                 <span className="ml-3 hidden md:block">My Appointments</span>
//               </NavLink>
//               <NavLink
//                 to="/dashboard/addReview"
//                 className={({ isActive }) =>
//                   `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
//                     isActive ? "bg-gray-700 text-white" : ""
//                   }`
//                 }
//               >
//                 <MdReviews className="text-lg" />
//                 <span className="ml-3 hidden md:block">Add Review</span>
//               </NavLink>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaUsers,
  FaPlus,
  FaGripHorizontal,
  FaTachometerAlt,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useDoctor from "../../Hooks/useDoctor";
import useTheme from "../../Hooks/useTheme";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const [isDoctor] = useDoctor();
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-16 md:w-64 min-h-screen flex flex-col border-r-2 ${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <nav className="mt-4">
        <ul>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                isActive ? "bg-gray-700 text-white" : ""
              }`
            }
            end
          >
            <FaTachometerAlt className="text-lg" />
            <span className="ml-3 hidden md:block">Dashboard</span>
          </NavLink>
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/allusers"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaUsers className="text-lg" />
                <span className="ml-3 hidden md:block">Users</span>
              </NavLink>
              <NavLink
                to="/dashboard/bookingAppointments"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaShoppingBag className="text-lg" />
                <span className="ml-3 hidden md:block">All Appointments</span>
              </NavLink>
              <NavLink
                to="/dashboard/addtreatment"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaPlus className="text-lg" />
                <span className="ml-3 hidden md:block">Add Treatment</span>
              </NavLink>
              <NavLink
                to="/dashboard/managetreatments"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaGripHorizontal className="text-lg" />
                <span className="ml-3 hidden md:block">Manage Treatment</span>
              </NavLink>
              <NavLink
                to="/dashboard/adddoctor"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaPlus className="text-lg" />
                <span className="ml-3 hidden md:block">Add Doctor</span>
              </NavLink>
            </>
          ) : isDoctor ? (
            <>
              <NavLink
                to="/dashboard/addDoctorPersonalInfo"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaPlus className="text-lg" />
                <span className="ml-3 hidden md:block">Add Personal Info</span>
              </NavLink>
              <NavLink
                to="/dashboard/managedoctorinfo"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaPlus className="text-lg" />
                <span className="ml-3 hidden md:block">
                  Manage Personal Info
                </span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/dashboard/myAppointments"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <FaShoppingCart className="text-lg" />
                <span className="ml-3 hidden md:block">My Appointments</span>
              </NavLink>
              <NavLink
                to="/dashboard/addReview"
                className={({ isActive }) =>
                  `flex items-center p-4 hover:bg-gray-700 hover:text-white ${
                    isActive ? "bg-gray-700 text-white" : ""
                  }`
                }
              >
                <MdReviews className="text-lg" />
                <span className="ml-3 hidden md:block">Add Review</span>
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
