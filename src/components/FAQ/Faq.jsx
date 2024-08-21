import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Faq = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`w-4/5 mx-auto mb-6 p-4 border rounded-lg  cursor-pointer ${faq.open ? "open" : ""}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="relative text-lg pr-20 transition-all duration-400 ease-in-out  font-bold">
        {faq.question}
        <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 transition-all 
        duration-200 ease-in-out">
          <FontAwesomeIcon icon={faq.open ? faChevronUp : faChevronDown} />
        </span>
      </div>
      <div className={`transition-all duration-200 ease-in-out overflow-hidden
         ${faq.open ? "opacity-100 max-h-1000 mb-4" : "opacity-0 max-h-0"}`}>
        {faq.answer}
      </div>
    </div>
  );
};

export default Faq;
