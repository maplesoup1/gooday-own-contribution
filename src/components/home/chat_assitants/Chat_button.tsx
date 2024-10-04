"use client";

import React, { useState } from "react";
import { IoChatboxSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Chat_form from "./Chat_form";

const Assistent = () => {
  const [isChat, setIsChat] = useState(true);
  const [formStatus, setformStatus] = useState(false);

  const handleClick = () => {
    setIsChat((prevState) => !prevState);
    setformStatus((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-6 right-6">
      {formStatus && <Chat_form />}
      <div
        className={`rounded-full w-16 h-16 flex justify-center items-center
                cursor-pointer transition-all duration-300 
                ${isChat ? "bg-yellow-300" : "bg-slate-600"}`}
        onClick={handleClick}
      >
        {isChat ? (
          <IoChatboxSharp className="size-8" />
        ) : (
          <RxCross2 className="size-8 text-white" />
        )}
      </div>
    </div>
  );
};

export default Assistent;
