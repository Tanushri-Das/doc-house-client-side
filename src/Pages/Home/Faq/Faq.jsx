import React from "react";
import FAQItem from "./FAQItem";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend appointments once every six months for routine dental exams and cleanings. These help us keep a tab on your oral health and avert problems before they become serious.",
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer:
        "In case of a dental emergency, contact our clinic immediately. We have emergency appointment slots available to address urgent issues such as severe tooth pain, fractures, or sudden swelling.",
    },
    {
      question: "Are your dental procedures painful?",
      answer:
        "We prioritize your comfort. Modern dental techniques and anesthesia significantly minimize discomfort during procedures. Our team takes extra care to ensure you have a pain-free experience.",
    },
    {
      question: "What safety measures are in place for COVID-19?",
      answer:
        "The safety of our patients and staff is our top priority. We have implemented rigorous sanitation protocols and follow all recommended guidelines for infection control. Additionally, we may ask screening questions and take your temperature upon arrival.",
    },
    {
      question: "How can I improve my oral hygiene at home?",
      answer:
        "Maintaining good oral hygiene at home is crucial. Brush your teeth twice a day, floss daily, and use an antimicrobial mouthwash. Additionally, a balanced diet and avoiding tobacco contribute to overall oral health.",
    },
  ];
  return (
    <div className="md:mx-12 xl:mx-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Frequently Ask Questions
      </h2>
      <div>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
