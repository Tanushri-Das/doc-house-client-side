import React from "react";
import useDoctor from "../../Hooks/useDoctor";
import useAuth from "../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

const DoctorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isDoctor, isDoctorLoading] = useDoctor();

  const location = useLocation();

  if (loading || isDoctorLoading) {
    return <CustomSpinner />;
  }
  if (user && isDoctor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default DoctorRoute;
