import React, { useState } from "react";
import H3 from "./h3";
import EmailInput from "./email-input";
import WaitListButton from "./waitlist-button";
import Image from "next/image";
import appStore from "../../public/assets/app-store.svg";
import googlePlay from "../../public/assets/google-play.svg";

export default function JoinWaitList() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleJoinWaitList = () => {
    validateEmail(email) ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div>
      <EmailInput email={email} setEmail={setEmail} isValid={isValid} />
      <WaitListButton onClick={handleJoinWaitList} />
      <div className="mt-10">
        <H3>Available soon on:</H3>
        <div className="flex gap-5 mt-5">
          <Image src={appStore} alt="App Store" />
          <Image src={googlePlay} alt="App Store" />
        </div>
      </div>
    </div>
  );
}
