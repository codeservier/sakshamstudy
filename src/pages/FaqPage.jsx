import React, { useState } from "react";
import Faq from "../components/FAQ/Faq.jsx";

// Import your image or use a URL
import faqImage from "../assets/svg/animated.svg"; // Example image import

export default function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "What courses does Saksham Study offer?",
      answer:
        "Saksham Study offers a variety of courses including Mathematics, Science, English, and preparation for competitive exams.",
      open: false,
    },
    {
      question: "What is the duration of each course?",
      answer:
        "The duration of each course varies. Generally, our courses run for 3 to 6 months, depending on the subject and level.",
      open: false,
    },
    {
      question: "Are the classes conducted online or offline?",
      answer:
        "We provide both online and offline classes to accommodate different preferences and needs.",
      open: false,
    },
    {
      question: "What are the qualifications of the instructors?",
      answer:
        "Our instructors are highly qualified professionals with significant experience in their respective fields.",
      open: false,
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll in a course by visiting our website and filling out the registration form or by contacting our office directly.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div className="text-center p-4 md:p-8">
        {/* Centering the image */}
        <div className="flex justify-center mb-4 md:mb-8">
          <img 
            src={faqImage}
            alt="FAQ"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faqs px-4 md:px-8">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </>
  );
}
