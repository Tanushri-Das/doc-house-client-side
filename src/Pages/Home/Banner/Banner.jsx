import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/dochousebanner.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Contexts/ThemeProvider/ThemeProvider";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center pb-9 pt-12 xl:pt-0 px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-7xl font-semibold">
            Your Best Medical Help Center
          </h1>
          <p className="mt-5 text-lg font-normal">
            Welcome to our dental clinic website, where we prioritize your oral
            health and provide personalized care. Our experienced team of
            dentists is dedicated to creating beautiful smiles and ensuring your
            comfort throughout your visit.
          </p>
          <div className="mt-8">
            <Link
              className="services-btn text-[16px] font-semibold text-white"
              to="/"
            >
              All Service
            </Link>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="3000">
          <div className="mt-12 justify-start">
            <img src={bannerImg} className="w-full " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
