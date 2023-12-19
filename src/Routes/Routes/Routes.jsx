import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../../Layout/Dashboard";
import AppointmentBookingsList from "../../Pages/Dashboard/AppointmentBookingsList/AppointmentBookingsList";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AllBookingAppointments from "../../Pages/Dashboard/AllBookingAppointments/AllBookingAppointments";
import AddTreatment from "../../Pages/Dashboard/AddTreatment/AddTreatment";
import ManageTreatment from "../../Pages/Dashboard/ManageTreatment/ManageTreatment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import AddReview from "../../Pages/Dashboard/AddReview/AddReview";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import AddDoctorPersonalInfo from "../../Pages/Dashboard/AddDoctorPersonalInfo/AddDoctorPersonalInfo";
import DoctorRoute from "../DoctorRoute/DoctorRoute";
import ManageDoctorInfo from "../../Pages/Dashboard/ManageDoctorInfo/ManageDoctorInfo";

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
        element: <PrivateRoutes><Appointment /></PrivateRoutes>,
      },

    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
    children:[
      {
        path:'myAppointments',
        element:<AppointmentBookingsList/>
      },
      {
        path:'addReview',
        element:<AddReview/>
      },
      {
        path:'myReview',
        element:<MyReviews/>
      },
      {
        path:'allusers',
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path:'bookingAppointments',
        element:<AdminRoute><AllBookingAppointments/></AdminRoute>
      },
      {
        path:'addtreatment',
        element:<AdminRoute><AddTreatment/></AdminRoute>
      },
      {
        path:'managetreatments',
        element:<AdminRoute><ManageTreatment/></AdminRoute>
      },
      {
        path:'adddoctor',
        element:<AdminRoute><AddDoctor/></AdminRoute>
      },
      {
        path:'managedoctor',
        element:<AdminRoute><ManageDoctor/></AdminRoute>
      },
      {
        path:'addDoctorPersonalInfo',
        element:<DoctorRoute><AddDoctorPersonalInfo/></DoctorRoute>
      },
      {
        path:'managedoctorinfo',
        element:<DoctorRoute><ManageDoctorInfo/></DoctorRoute>
      },
    ]
  }
]);
export default routes;
