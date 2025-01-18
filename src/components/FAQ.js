import React, { useState } from "react";
import blog1 from "./blog1.jpeg";
import blog2 from "./blog2.jpeg";
import blog3 from "./blog3.jpeg";
import "./FAQ.css";

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time through your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time through your account settings.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional information to your invoices through the billing settings.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer flexible billing options including monthly and annual plans.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your email address in your account settings.",
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-card">
        <div className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="faq-content">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleSection(index)}
                className="faq-question"
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openSection === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`faq-answer ${openSection === index ? "open" : ""}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="support-section">
        <div className="team-avatars">
          <img src={blog1} alt="Team member" />
          <img src={blog2} alt="Team member" />
          <img src={blog3} alt="Team member" />
        </div>
        <h3 className="support-title">Still have questions?</h3>
        <p className="support-text">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>
        <button className="get-in-touch-btn">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
