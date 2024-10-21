import React from "react";
import Header from "../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import useTheme from "../Hooks/useTheme";

const Main = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
