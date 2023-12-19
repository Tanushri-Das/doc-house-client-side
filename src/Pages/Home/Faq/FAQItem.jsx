import React, { useState } from "react";
import "./faq.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item rounded-lg">
      <div className="flex justify-between items-center">
        <div
          className={`question ${isOpen ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          {question}
        </div>
        <button onClick={toggleAccordion} className="ml-2 text-2xl">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={`answer ${isOpen ? "active" : ""}`}>{answer}</div>
    </div>
  );
};

export default FAQItem;
