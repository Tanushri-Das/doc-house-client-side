import React from "react";
import doctor1 from "../../../images/doc1.png";
import doctor2 from "../../../images/doc2.png";
import doctor3 from "../../../images/doc3.png";
import OurDoctor from "../OurDoctors/OurDoctor";

const OurDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Karyen Anderson",
      designation: "BTP -  Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      charge: "$15",
      rateus: "5",
      image: doctor1,
    },
    {
      id: 2,
      name: "Karyen Anderson",
      designation: "BTP -  Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      charge: "$15",
      rateus: "5",
      image: doctor2,
    },
    ,
    {
      id: 3,
      name: "Karyen Anderson",
      designation: "BTP -  Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      available: "Available On Mon, 22 December",
      charge: "$15",
      rateus: "5",
      image: doctor3,
    },
  ];
  return (
    <div className="lg:mx-[135px] mt-12 gap-6 border">
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
          <OurDoctor doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
