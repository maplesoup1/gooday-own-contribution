import React from "react";
import Image from "next/image";
import H1 from "../h1";
import H2 from "../h2";
import { cn } from "@/lib/utils"
import { Button } from "../ui/button";

const hero = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="h-auto w-1/2 flex flex-col mt-10 ml-10">
        <Image
          src="/images/logo-text.png"
          width={150}
          height={150}
          alt="logo"
          className="my-14"
        />
        <div>
          <div className="flex flex-col gap-6">
            <H2>Increased Bookings.</H2>
            <H1>Decreased cancellations.</H1>
          </div>

          <div className="my-10 w-3/5">
            Gooday is a fully integrated, centralised software and app that
            streamlines bookings between businesses and consumers. We automate
            the manual organisation process to increase bookings and decrease
            cancellations for all.
          </div>
          <Button className="bg-blue-300 text-white rounded-3xl w-44">Get started</Button>
        </div>
      </div>

      <div className="flex flex-col justify-center">

        <div className="bg-blue-300 rounded-full w-72 h-72">

        </div>

      </div>
    </div>
  );
};

export default hero;
