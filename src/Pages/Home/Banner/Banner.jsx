import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/dochousebanner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:mx-[135px] grid md:grid-cols-2 gap-8 items-center pb-9 pt-12 xl:pt-0 px-4 sm:px-6 lg:px-8 border">
      <div className="">
        <h1 className="text-7xl font-semibold">
        Your Best Medical Help Center
        </h1>
        <p className="mt-5 text-lg font-normal">
        Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
        </p>
        <div className="mt-8">
        <Link
          className="services-btn text-[16px] font-semibold text-white"
          to="/login"
        >
         All Service
        </Link>
        </div>
        
      </div>
      <div className="mt-12 justify-start">
        <img src={bannerImg} className="w-full " alt="" />
      </div>
    </div>
  );
};

export default Banner;
