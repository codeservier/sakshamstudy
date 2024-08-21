import React, { useState } from "react";
import Faq from "../components/FAQ/Faq.jsx";

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
    {
      question: "What is the fee structure for the courses?",
      answer:
        "The fee structure varies depending on the course. For detailed information, please visit our website or contact us.",
      open: false,
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Yes, we offer discounts for early registrations and group enrollments. Please check our website or contact us for more details.",
      open: false,
    },
    {
      question: "What materials are provided with the course?",
      answer:
        "We provide all necessary study materials, including textbooks, worksheets, and access to online resources.",
      open: false,
    },
    {
      question: "Can I get a refund if I am not satisfied with the course?",
      answer:
        "We offer a refund policy within the first two weeks of the course if you are not satisfied. Please refer to our refund policy on our website for more details.",
      open: false,
    },
    {
      question: "How can I contact support for any issues or queries?",
      answer:
        "You can contact our support team via email, phone, or through the contact form on our website. We are here to assist you.",
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
      <div className="text-center p-8">
        <h1 className="text-3xl font-extra-heavy mb-8 pt-8">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </>
  );
}
