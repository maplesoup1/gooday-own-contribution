"use client";
import React, { useState } from "react";
import H3 from "./h3";

type EmailInputProps = {
  email: string;
  setEmail: (email: string) => void;
  isValid: boolean;
};

export default function EmailInput({
  email,
  setEmail,
  isValid,
}: EmailInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  return (
    <div className="flex flex-col w-full mb-5">
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className={`py-3 px-6 rounded-3xl border border-solid border-zinc-400 bg-white text-lg ${
          isValid ? "" : "invalid"
        }`}
        placeholder="Enter your email"
      />
      <div
        className={`text-[#FEB74D] p-3 ${isValid ? "invisible" : "visible"}`}
      >
        <H3>Please enter a valid email address.</H3>
      </div>
    </div>
  );
}
