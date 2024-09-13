"use client";
import React from "react";
import Image from "next/image";
import H1 from "../h1";
import H2 from "../h2";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hero = () => {
  const [character, setCharacter] = useState<string>("Maria");

  function toggleCharacter(newCharacter: string): void {
    setCharacter((prevCharacter) =>
      prevCharacter === newCharacter ? "" : newCharacter
    );
  }

  return (
    <div className="w-screen h-screen flex">
      {/* left div */}
      <div className="h-auto basis-1/3 flex flex-col mt-10 ml-20">
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
          <Button className="bg-blue-300 text-white rounded-3xl w-44">
            Get started
          </Button>
        </div>
      </div>
      {/* right div */}
      <div className="flex flex-col justify-center items-center basis-2/3 ">
        <div className="relative w-72 h-72">
          <div className="bg-blue-300 rounded-t-full w-full h-1/2 absolute top-0 overflow-visible"></div>
          <div className="bg-blue-300 rounded-b-full w-full h-1/2 absolute bottom-0 overflow-hidden"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {character && (
              <Image
                src={`/half/${character}_half.png`}
                width={288}
                height={288}
                alt={character}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* square */}
      {/* character */}
      <div
        className="bg-gradient-to-b from-emerald-200 to-emerald-600 absolute w-[100px] h-[100px] left-[649px] top-[84px] rounded-md  animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Frank")}
      >
        <Image
          src="/half/Frank_half.png"
          width={93}
          height={93}
          alt="charlotte"
          className="relative bottom-[50px]"
        />
      </div>
      <div
        className="bg-gradient-to-b from-green-200 to-green-600 absolute w-[100px] h-[100px] left-[1002px] top-[32px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Olga")}
      >
        <Image
          src="/half/Olga_half.png"
          width={80}
          height={80}
          alt="charlotte"
          className="relative bottom-[59px]"
        />
      </div>

      <div
        className="bg-gradient-to-b from-yellow-200 to-yellow-600 absolute w-[100px] h-[100px] left-[566px] top-[480px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Shutima")}
      >
        <Image
          src="/half/Shutima_half.png"
          width={100}
          height={100}
          alt="charlotte"
          className="relative bottom-[28px] scale-125"
        />
      </div>

      <div
        className="bg-gradient-to-b from-red-200 to-red-600 absolute w-[100px] h-[100px] left-[1250px] top-[63px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Charlotte")}
      >
        <Image
          src="/half/Charlotte_half.png"
          width={90}
          height={90}
          alt="charlotte"
          className="relative bottom-12"
        />
      </div>

      <div
        className="bg-gradient-to-b from-orange-200 to-orange-600 absolute w-[100px] h-[100px] left-[1300px] top-[290px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Sinem")}
      >
        <Image
          src="/half/Sinem_half.png"
          width={100}
          height={100}
          alt="charlotte"
          className="relative bottom-[34px] scale-125"
        />
      </div>

      <div
        className="bg-gradient-to-b from-purple-200 to-purple-600 absolute w-[100px] h-[100px] left-[1155px] top-[529px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Raaj")}
      >
        <Image
          src="/half/Raaj_half.png"
          width={100}
          height={100}
          alt="charlotte"
          className="relative bottom-[27px] scale-150"
        />
      </div>

      <div
        className="bg-gradient-to-b from-blue-200 to-blue-600 absolute w-[100px] h-[100px] left-[867px] top-[550px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Max")}
      >
        <Image
          src="/half/Max_half.png"
          width={90}
          height={90}
          alt="charlotte"
          className="relative bottom-[28px] scale-150"
        />
      </div>
    </div>
  );
};

export default hero;
