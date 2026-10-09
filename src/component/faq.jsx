import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library used to build user interfaces."
    },
    {
      question: "What is HTML?",
      answer: "HTML is used to create the structure of web pages."
    },
    {
      question: "What is CSS?",
      answer: "CSS is used to style and design web pages."
    },
    {
      question: "What is JavaScript?",
      answer: "JavaScript is used to add interactivity to web pages."
    },
    {
      question: "What is JSX?",
      answer: "JSX allows us to write HTML-like code inside JavaScript."
    },
    {
      question: "What is a React Component?",
      answer: "A component is a reusable part of a React application."
    },
    {
      question: "What is a Web Page?",
      answer: "A web page is a document displayed in a web browser."
    },
    {
      question: "What is a Browser?",
      answer: "A browser is software used to access and view websites."
    },
    {
      question: "What is an HTML Element?",
      answer: "An HTML element is a part of a web page created using HTML tags."
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{faq.question}</span>
            <span>{open === index ? "−" : "+"}</span>
          </div>

          {open === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;