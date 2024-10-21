import React, { useEffect, useState } from "react";
import OurDoctor from "../OurDoctors/OurDoctor";
import useDoctors from "../../../Hooks/useDoctors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurDoctors = () => {
  const { doctors } = useDoctors();
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  // Update the number of slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSwiperSlidesPerView(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setSwiperSlidesPerView(2); // Medium screens
      } else {
        setSwiperSlidesPerView(1); // Small screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-12 md:mx-12 xl:mx-20 relative">
      <h2 className="text-4xl font-bold mb-5 text-center">
        Meet Our Expert Dentists
      </h2>
      <p className="text-[16px] text-center mb-12 px-16">
        Our team of experienced and skilled dentists is dedicated to providing
        quality dental care tailored to your individual needs. Whether you
        require routine check-ups, cosmetic dentistry, or specialized
        treatments, we are here to ensure your oral health and well-being.
      </p>

      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {doctors?.map((doctor) => (
          <SwiperSlide key={doctor._id}>
            <OurDoctor doctor={doctor} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left navigation button */}
      <div className="swiper-button-prev-container">
        <div className="swiper-button-prev">
          <FiChevronLeft />
        </div>
      </div>

      {/* Right navigation button */}
      <div className="swiper-button-next-container">
        <div className="swiper-button-next">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
