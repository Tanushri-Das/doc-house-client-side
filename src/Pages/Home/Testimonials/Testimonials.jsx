import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "orin",
      designation: "Manager,LID",
      rateus: "5",
      review:
        "Exceptional services! The staff is not only skilled but also friendly.…",
      image: "https://i.ibb.co/vLjbVNq/orin.jpg",
    },
    {
      id: 2,
      name: "pritom",
      designation: "Senior SDE",
      rateus: "3.5",
      review:
        "Decent manicure and pedicure services, but the waiting time was a bit …",
      image: "https://i.ibb.co/0F7t5kk/pritom.webp",
    },
    ,
    {
      id: 3,
      name: "pret",
      designation: "Senior SDE",
      rateus: "3",
      review:
        "Decent manicure and pedicure services, but the waiting time was a bit …",
      image: "https://i.ibb.co/0F7t5kk/pritom.webp",
    },
  ];

  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        // Medium screens
        setSwiperSlidesPerView(2);
      } else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="lg:mx-[135px] mt-12 gap-6 border">
      <h2 className="text-4xl font-bold mb-5 text-center">
        What Our Patients Says
      </h2>
      <p className="text-[16px] text-center mb-12 px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga,
        excepturi odio dolores dignissimos a, asperiores magnam facere esse
        quaerat in, mollitia magni deserunt repellat accusamus tenetur officiis.
        Dolorem, ipsum!
      </p>
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials?.map((review, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            {/* Set a fixed height for each slide */}
            <div className="flex flex-col border border-gray-200 rounded-xl pl-5 pt-[33px] pb-[40px] h-full">
              <div className="flex items-center">
                <div>
                  {" "}
                  <img
                    src={review.image}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="ms-[18px]">
                  <h1 className="text-xl font-semibold text-left">
                    {review.name}
                  </h1>
                  <h3 className="text-[16px] font-medium mb-4">
                    {review.designation}
                  </h3>
                </div>
              </div>

              <p className="text-[16px] review my-4">{review.review}</p>
              <div className="mb-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  {Array.from(
                    { length: Math.floor(review.rateus) },
                    (_, index) => (
                      <FaStar key={index} className="star-color text-lg me-2" />
                    )
                  )}
                  {review.rateus % 1 === 0.5 && (
                    <FaStarHalf className="star-color text-lg" />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
