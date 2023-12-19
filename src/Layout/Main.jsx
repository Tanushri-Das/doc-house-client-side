// import React from "react";
// import Header from "../Components/Shared/Header/Header";
// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../Components/Shared/Footer/Footer";

// const Main = () => {
//   const location = useLocation();
//   // console.log(location);
//   const noHeaderFooter =
//     location.pathname.includes("login") || location.pathname.includes("signup");
//   return (
//     <div className="">
//       {noHeaderFooter || <Header />}
//       <Outlet />
//       {noHeaderFooter || <Footer />}
//     </div>
//   );
// };

// export default Main;

// Main.js
import React from "react";
import Header from "../Components/Shared/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import { useTheme } from "../Contexts/ThemeProvider/ThemeProvider";

const Main = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className={`${
      isDarkMode
        ? "bg-dark-background text-dark-text"
        : "bg-light-background text-light-text"
    }`}>
      {noHeaderFooter || <Header />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;