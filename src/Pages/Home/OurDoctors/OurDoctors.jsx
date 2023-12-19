import React from "react";
import OurDoctor from "../OurDoctors/OurDoctor";
import useDoctors from "../../../Hooks/useDoctors";

const OurDoctors = () => {
  const { doctors } = useDoctors();
  console.log(doctors)

  return (
    <div className="mt-12 gap-6 border md:mx-12 xl:mx-[135px]">
      <h2 className="text-4xl font-bold mb-5 text-center">
        Our Expert Doctors
      </h2>
      <p className="text-[16px] text-center mb-12 px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga,
        excepturi odio dolores dignissimos a, asperiores magnam facere esse
        quaerat in, mollitia magni deserunt repellat accusamus tenetur officiis.
        Dolorem, ipsum!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 border">
        
        {doctors?.map((doctor) => (
          <OurDoctor key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
