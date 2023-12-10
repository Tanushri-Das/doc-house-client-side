import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Testimonials from "../Testimonials/Testimonials";
import OurDoctors from "../ourDoctors/ourDoctors";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <OurDoctors />
      <Testimonials />
    </div>
  );
};

export default Home;
