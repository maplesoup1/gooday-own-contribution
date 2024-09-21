"use client";
import React from "react";
import Image from "next/image";

interface CharacterButtonsProps {
  toggleCharacter: (character: string) => void;
}

interface CharacterInfo {
  name: string;
  gradientFrom: string;
  gradientTo: string;
  left: string;
  top: string;
  animation: string;
  rotation: string;
  imgWidth: number;
  imgHeight: number;
  imgBottom: string;
  imgScale?: string;
}

const characters: CharacterInfo[] = [
  {
    name: "Frank",
    gradientFrom: "emerald-200",
    gradientTo: "emerald-600",
    left: "580px",
    top: "84px",
    animation: "updown_left",
    rotation: "-13deg",
    imgWidth: 93,
    imgHeight: 93,
    imgBottom: "50px",
  },
  {
    name: "Olga",
    gradientFrom: "green-200",
    gradientTo: "green-600",
    left: "800px",
    top: "60px",
    animation: "updown_right",
    rotation: "13deg",
    imgWidth: 80,
    imgHeight: 80,
    imgBottom: "59px",
  },
  {
    name: "Shutima",
    gradientFrom: "yellow-200",
    gradientTo: "yellow-600",
    left: "480px",
    top: "480px",
    animation: "updown_right",
    rotation: "13deg",
    imgWidth: 100,
    imgHeight: 100,
    imgBottom: "28px",
    imgScale: "scale-125",
  },
  {
    name: "Charlotte",
    gradientFrom: "red-200",
    gradientTo: "red-600",
    left: "970px",
    top: "160px",
    animation: "updown_right",
    rotation: "13deg",
    imgWidth: 90,
    imgHeight: 90,
    imgBottom: "12",
  },
  {
    name: "Sinem",
    gradientFrom: "orange-200",
    gradientTo: "orange-600",
    left: "980px",
    top: "320px",
    animation: "updown_left",
    rotation: "-13deg",
    imgWidth: 100,
    imgHeight: 100,
    imgBottom: "34px",
    imgScale: "scale-125",
  },
  {
    name: "Raaj",
    gradientFrom: "purple-200",
    gradientTo: "purple-600",
    left: "900px",
    top: "480px",
    animation: "updown_right",
    rotation: "13deg",
    imgWidth: 100,
    imgHeight: 100,
    imgBottom: "27px",
    imgScale: "scale-150",
  },
  {
    name: "Max",
    gradientFrom: "blue-200",
    gradientTo: "blue-600",
    left: "679px",
    top: "550px",
    animation: "updown_left",
    rotation: "-13deg",
    imgWidth: 90,
    imgHeight: 90,
    imgBottom: "28px",
    imgScale: "scale-150",
  },
];

const CharacterGallery: React.FC<CharacterButtonsProps> = ({ toggleCharacter }) => {
  return (
    <div>
      {characters.map((char) => (
        <div
          key={char.name}
          className={`z-50 bg-gradient-to-b from-${char.gradientFrom} to-${char.gradientTo} absolute w-[100px] h-[100px] left-[${char.left}] top-[${char.top}] rounded-md animate-${char.animation} hover:animate-none hover:scale-125 hover:rotate-[${char.rotation}] cursor-pointer overflow-visible grid justify-center`}
          onClick={() => toggleCharacter(char.name)}
        >
          <Image
            src={`/half/${char.name}_half.png`}
            width={char.imgWidth}
            height={char.imgHeight}
            alt={char.name}
            className={`relative ${char.name === "Charlotte" ? `bottom-${char.imgBottom}` : `bottom-[${char.imgBottom}]`} ${char.imgScale || ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterGallery;