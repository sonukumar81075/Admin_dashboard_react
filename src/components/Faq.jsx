import React, { useState } from 'react';
import { GoChevronDown,GoChevronUp } from "react-icons/go";

export default function Faq(){
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close the question if it's already open
    } else {
      setOpenQuestion(index); // Open the clicked question
    }
  };

  
  const faqs = [
    {
      question: 'What is FAQ?',
      answer: 'FAQ stands for Frequently Asked Questions. It is a list of commonly asked questions and their answers.'
    },
    {
      question: 'How do I use this website?',
      answer: 'You can use the website by navigating through the different pages and features. If you have any specific questions, you can refer to our FAQ section or contact us for assistance.'
    },
    {
      question: 'Is this website free to use?',
      answer: 'Yes, this website is completely free to use.'
    },
      {
        question: 'What is FAQ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of commonly asked questions and their answers.'
      },
      {
        question: 'How do I use this website?',
        answer: 'You can use the website by navigating through the different pages and features. If you have any specific questions, you can refer to our FAQ section or contact us for assistance.'
      },
      {
        question: 'Is this website free to use?',
        answer: 'Yes, this website is completely free to use.'
      },
  ];

  return (
    <div className=" w-[350px] sm:w-full md:w-[1000px] h-screen pr-2.5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className=''>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-md p-4 text-gray-300 font-medium text-sm">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left flex justify-between   focus:outline-none rounded-lg px-4 py-2 font-medium text-gray-700"
            >
              {faq.question}
              {openQuestion === index ? (
                 <GoChevronDown className='text-xl font-bold'/>
              ) : (
                <GoChevronUp className='text-xl font-bold'/>

              )}
            </button>
            {openQuestion === index && (
              <p className="text-gray-600 mt-2 p-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
