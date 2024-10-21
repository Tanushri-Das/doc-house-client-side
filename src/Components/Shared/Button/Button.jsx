import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#f78a5b] text-lg text-white px-5 py-2 rounded-md font-semibold"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
