import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AppointmentBookingsList from "../../Pages/Dashboard/AppointmentBookingsList/AppointmentBookingsList";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AllBookingAppointments from "../../Pages/Dashboard/AllBookingAppointments/AllBookingAppointments";
import AddTreatment from "../../Pages/Dashboard/AddTreatment/AddTreatment";
import ManageTreatment from "../../Pages/Dashboard/ManageTreatment/ManageTreatment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AddReview from "../../Pages/Dashboard/AddReview/AddReview";
import AddDoctorPersonalInfo from "../../Pages/Dashboard/AddDoctorPersonalInfo/AddDoctorPersonalInfo";
import DoctorRoute from "../DoctorRoute/DoctorRoute";
import ManageDoctorInfo from "../../Pages/Dashboard/ManageDoctorInfo/ManageDoctorInfo";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myAppointments",
        element: <AppointmentBookingsList />,
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/bookingAppointments",
        element: (
          <AdminRoute>
            <AllBookingAppointments />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addtreatment",
        element: (
          <AdminRoute>
            <AddTreatment />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managetreatments",
        element: (
          <AdminRoute>
            <ManageTreatment />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctorPersonalInfo",
        element: (
          <DoctorRoute>
            <AddDoctorPersonalInfo />
          </DoctorRoute>
        ),
      },
      {
        path: "/dashboard/managedoctorinfo",
        element: (
          <DoctorRoute>
            <ManageDoctorInfo />
          </DoctorRoute>
        ),
      },
    ],
  },
]);
export default routes;
