import React from "react";
import OurDoctor from "../OurDoctors/OurDoctor";
import useDoctors from "../../../Hooks/useDoctors";

const OurDoctors = () => {
  const { doctors } = useDoctors();
  console.log(doctors);

  return (
    <div className="mt-12 gap-6 md:mx-12 xl:mx-[135px]">
      <h2 className="text-4xl font-bold mb-5 text-center">
        Meet Our Expert Dentists
      </h2>
      <p className="text-[16px] text-center mb-12 px-16">
        Our team of experienced and skilled dentists is dedicated to providing
        quality dental care tailored to your individual needs. Whether you
        require routine check-ups, cosmetic dentistry, or specialized
        treatments, we are here to ensure your oral health and well-being.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        {doctors?.map((doctor) => (
          <OurDoctor key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
