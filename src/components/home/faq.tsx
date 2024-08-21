'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define animation variants for the framer-motion
  const variants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 }
  };

  return (
    <div className="mb-4 last:mb-0">
      <button
        className={`w-full text-left px-6 py-3 rounded-t-lg font-semibold text-gray-800 bg-white shadow flex justify-between items-center border-2 ${isOpen ? 'border-[#FECB4D] border-b-white' : 'border-[#FECB4D] rounded-b-lg'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-lg font-bold">{isOpen ? '-' : '+'}</span>
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className={`px-6 py-2 text-gray-600 bg-white border-2 border-[#FECB4D] ${isOpen ? 'border-t-white' : 'border-t-[#FECB4D]'} rounded-b-lg shadow overflow-hidden`}
      >
        {answer}
      </motion.div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { question: "Is Gooday Free?", answer: "Yes, Gooday offers a free tier suitable for small businesses and individuals." },
    { question: "Can I invite team members to Gooday Business?", answer: "Yes, you can invite multiple team members to join your Gooday Business account." },
    { question: "Can I integrate my existing booking system into Gooday?", answer: "Integration capabilities depend on your current booking system, but we offer several APIs." },
    { question: "What happens when Gooday users cancel last minute?", answer: "We have policies in place to handle last-minute cancellations effectively." },
    { question: "Why Gooday, instead of another booking system?", answer: "Gooday offers unique features that streamline booking processes and enhance user engagement." },
  ];

  return (
    <div className="p-8 flex flex-row items-start justify-center">
      <div className="flex-shrink-0 mb-8 md:mb-0 mr-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <Image src="/img/faq_female.png" alt="Character Image" width={300} height={300} />
      </div>
      <div className="flex-1 max-w-4xl">
        {/* <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2> */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
