import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Testimonials from "../Testimonials/Testimonials";
import OurDoctors from "../ourDoctors/ourDoctors";
import ContactUs from "../ContactUs/ContactUs";
import Faq from "../Faq/Faq";
import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";

const Home = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <Banner />
      <InfoCards />
      <Testimonials />
      <Faq />
      <OurDoctors />
      <ContactUs />
    </div>
  );
};

export default Home;
