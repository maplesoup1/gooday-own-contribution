'use client';

import React, { useState } from 'react';
import Image from 'next/image';  // Import Image from Next.js for optimized image handling

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="mb-4 last:mb-0">
          <button
              className={`w-full text-left px-6 py-3 rounded-lg font-semibold text-gray-800 bg-white shadow flex justify-between items-center ${isOpen ? 'rounded-b-none' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
          >
              {question}
              <span className="text-lg font-bold">{isOpen ? '-' : '+'}</span>
          </button>
          {isOpen && (
              <div className="px-6 py-2 text-gray-600 bg-white rounded-b-lg shadow">
                  {answer}
              </div>
          )}
      </div>
  );
};

export default function FAQ() {
  const faqs = [
    { question: "Is Gooday Free?", answer: "Yes, Gooday offers a free tier suitable for small businesses and individuals." },
    { question: "Can I invite team members to Gooday Business?", answer: "Yes, you can invite multiple team members to join your Gooday Business account." },
    { question: "Can I integrate my existing booking system into Gooday?", answer: "Integration capabilities depend on your current booking system, but we offer several APIs." },
    { question: "What happens when Gooday users cancel last minute?", answer: "We have policies in place to handle last-minute cancellations effectively." },
    { question: "Why Gooday, instead of another booking system?", answer: "Gooday offers unique features that streamline booking processes and enhance user engagement." },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
        <div className="flex-shrink-0 mb-8 md:mb-0">
            <Image src="/path/to/your/image.jpg" alt="Character Image" width={300} height={300} />
        </div>
        <div className="flex-1 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </div>
    </div>
  );
}