"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "./hero/Background";
import Leftdiv from "./hero/Leftdiv";
import Rightdiv from "./hero/Rightdiv";

const hero = () => {
  const [character, setCharacter] = useState<string>("Maria");

  function toggleCharacter(newCharacter: string): void {
    setCharacter((prevCharacter) =>
      prevCharacter === newCharacter ? "" : newCharacter
    );
  }

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Background />
      <Leftdiv />
      <Rightdiv />

      {/* right div */}
      <div className="flex flex-col justify-center items-center basis-2/3 z-40">
        {/* <div className="bg-blue-300 rounded-full w-[300px] h-[300px] border-[5px] border-white border-opacity-50 overflow-hidden">
          {character && (
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              key={character}
            >
              <Image
                src={`/full/${character}.png`}
                width={150}
                height={150}
                alt={character}
                className="relative left-[80px] top-[30px]"
              />
            </motion.div>
          )}
        </div> */}
      </div>

      {/* square */}
      {/* character */}
      <div
        className="z-50 bg-gradient-to-b from-emerald-200 to-emerald-600 absolute w-[100px] h-[100px] left-[649px] top-[84px] rounded-md  animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-green-200 to-green-600 absolute w-[100px] h-[100px] left-[1002px] top-[32px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-yellow-200 to-yellow-600 absolute w-[100px] h-[100px] left-[566px] top-[480px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-red-200 to-red-600 absolute w-[100px] h-[100px] left-[1250px] top-[63px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-orange-200 to-orange-600 absolute w-[100px] h-[100px] left-[1300px] top-[290px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-purple-200 to-purple-600 absolute w-[100px] h-[100px] left-[1155px] top-[529px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
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
        className="z-50 bg-gradient-to-b from-blue-200 to-blue-600 absolute w-[100px] h-[100px] left-[867px] top-[550px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
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
