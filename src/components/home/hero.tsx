"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "./hero/Background";
import Leftdiv from "./hero/Leftdiv";
import Rightdiv from "./hero/Rightdiv";

const Hero = () => {
  const [character, setCharacter] = useState<string>("Maria");

  function toggleCharacter(newCharacter: string): void {
    setCharacter((prevCharacter) =>
      prevCharacter === newCharacter ? "" : newCharacter
    );
  }

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Background />
      <div className="flex">
        <div className="flex justify-center relative">
          <Leftdiv />
        </div>
        <div className="flex relative">
          <Rightdiv />
        </div>
      </div>
    </div>
  );
};

export default Hero;
