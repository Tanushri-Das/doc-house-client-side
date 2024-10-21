import React from "react";
import useAdmin from "../../Hooks/useAdmin";
import useDoctor from "../../Hooks/useDoctor";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isDoctor] = useDoctor();
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Dental Ease | Dashboard</title>
      </Helmet>
      <div className="my-12 text-center">
        {isAdmin ? (
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-6">
              Welcome, Admin! You have full control.
            </h1>
            <p className="text-lg">
              This is your dashboard. You can manage all website operations and
              view detailed insights here.
            </p>
          </div>
        ) : isDoctor ? (
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-6">
              Welcome, Doctor! We're glad to have you here.
            </h1>
            <p className="text-lg">
              This is your dashboard. You can add and manage your personal
              information.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-6">
              Hi, {user?.displayName}! Welcome back!
            </h1>
            <p className="text-lg">
              This is your dashboard where you can track your activities.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
