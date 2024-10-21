import React from "react";
import bannerImg from "../../../images/dochousebanner.png";
import { Link } from "react-router-dom";
import Button from "../../../Components/Shared/Button/Button";
import useTheme from "../../../Hooks/useTheme";

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
      <div className="grid lg:grid-cols-2 gap-8 items-center py-12 xl:pt-0 px-4 sm:px-6 lg:px-12">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-7xl font-semibold">
            Your Best Medical Help Center
          </h1>
          <p className="my-5 text-lg font-normal">
            Welcome to our dental clinic website, where we prioritize your oral
            health and provide personalized care. Our experienced team of
            dentists is dedicated to creating beautiful smiles and ensuring your
            comfort throughout your visit.
          </p>
          <Link
            className="text-[16px] font-semibold text-white"
            to="/appointment"
          >
            <Button name={"All Services"} />
          </Link>
        </div>
        {/* Image visible on large screens */}
        <div
          data-aos="flip-right"
          data-aos-duration="3000"
          className="hidden lg:block"
        >
          <div className="mt-12 justify-start">
            <img src={bannerImg} className="w-full" alt="Medical Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
