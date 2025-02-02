"use client";
import React, { useState, FormEvent } from "react";

const Help_assistent = () => {
  const [nameAttention, setNameAttention] = useState(false);
  const [emailAttention, setEmailAttention] = useState(false);
  const [isText, setIsText] = useState(false);

  // Todo: form submition
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  // }

  const handleNameAttention = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNameAttention(true);
    } else {
      setNameAttention(false);
    }
  };

  const handleIsText = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailAttention = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setEmailAttention(true);
    } else {
      const inputEmail = e.target.value;
      if (!validateEmail(inputEmail)) {
        setEmailAttention(true);
      } else {
        setEmailAttention(false);
      }
    }
  };

  return (
    <div
      className="fixed bottom-24 right-6 w-[380px] h-[590px] bg-white
    shadow-lg rounded-sm overflow-auto"
    >
      <div className="relative bg-yellow-300 mb-16">
        <h2 className="p-4 h-[88px] text-xl">Godday</h2>
        <div className="w-[330px] h-[82px] absolute rounded-lg shadow-lg mx-8 -mt-8 px-[12px] py-[15px] z-10 bg-yellow-200">
          Hi! Let us know how we can help and we will respond shortly
        </div>
      </div>

      <div className="assistent_input">
        <div className="relative flex justify-center">
          <input
            className="w-80 h-14 text-base border-b pt-5 pl-2 
                    peer  focus:border-black"
            placeholder=""
            onBlur={handleNameAttention}
            required
          />
          <span
            className="absolute text-base mt-7 mr-64
                        peer-focus:text-orange-400 peer-focus:-translate-y-7
                        peer-valid:text-orange-400 peer-valid:-translate-y-7
                        transition-transform duration-200 peer-focus:text-sm pointer-events-none
                    "
          >
            Name*
          </span>
        </div>
        <span
          className={`${
            nameAttention ? "block" : "invisible"
          } text-red-400 ml-8`}
        >
          Please fill in this required field
        </span>
      </div>

      <div className="assistent_input">
        <div className="relative flex justify-center">
          <input
            className="w-80 h-14 text-base border-b pt-5 pl-2 
                    peer  focus:border-black"
            placeholder=""
            onBlur={handleEmailAttention}
            required
          />
          <span
            className="absolute text-base mt-7 mr-64
                        peer-focus:text-orange-400 peer-focus:-translate-y-7
                        peer-valid:text-orange-400 peer-valid:-translate-y-7
                        transition-transform duration-200 peer-focus:text-sm pointer-events-none
                    "
          >
            E-mail*
          </span>
        </div>
        <span
          className={`${
            emailAttention ? "block" : "invisible"
          } text-red-400 ml-8`}
        >
          Please enter a valid email address.
        </span>
      </div>
      <textarea
        className="w-80 h-32 mx-7 border border-gray-300"
        placeholder="How can we help*"
        onBlur={handleIsText}
        required
      ></textarea>
      <span className={`${isText ? "block" : "invisible"} text-red-400 ml-8`}>
        Please fill in this required field
      </span>
      <button className="w-32 h-14 bg-yellow-300 border-solid flex justify-center items-center cursor-pointer hover:bg-yellow-200 ml-32 my-5">
        Send
      </button>
      <div className="text-sm text-center my-4">
        <p>
          This site is protected by reCAPTCHA and the Google
          <a
            className="border-b border-yellow-300 text-yellow-300"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          and
          <a
            className="border-b  border-yellow-300 text-yellow-300"
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Help_assistent;
