"use client";
import React from "react";
import Image from "next/image";
interface CharacterButtonsProps {
  toggleCharacter: (character: string) => void;
}
const CharacterGallery: React.FC<CharacterButtonsProps> = ({ toggleCharacter }) => {
  return (
    <div>
      <div
        className="z-50 bg-gradient-to-b from-emerald-200 to-emerald-600 absolute w-[100px] h-[100px] left-[580px] top-[84px] rounded-md  animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Frank")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Frank_half.png"
          width={93}
          height={93}
          alt="Frank"
          className="relative bottom-[50px]"
          data-testid = 'Frank'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-green-200 to-green-600 absolute w-[100px] h-[100px] left-[800px] top-[60px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Olga")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Olga_half.png"
          width={80}
          height={80}
          alt="Olga"
          className="relative bottom-[59px]"
          data-testid = 'Olga'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-yellow-200 to-yellow-600 absolute w-[100px] h-[100px] left-[480px] top-[480px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Shutima")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Shutima_half.png"
          width={100}
          height={100}
          alt="Shutima"
          className="relative bottom-[28px] scale-125"
          data-testid = 'Shutima'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-red-200 to-red-600 absolute w-[100px] h-[100px] left-[970px] top-[160px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Charlotte")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Charlotte_half.png"
          width={90}
          height={90}
          alt="Charlotte"
          className="relative bottom-12"
          data-testid = 'Charlotte'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-orange-200 to-orange-600 absolute w-[100px] h-[100px] left-[980px] top-[320px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Sinem")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Sinem_half.png"
          width={100}
          height={100}
          alt="Sinem"
          className="relative bottom-[34px] scale-125"
          data-testid = 'Sinem'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-purple-200 to-purple-600 absolute w-[100px] h-[100px] left-[900px] top-[480px] rounded-md animate-updown_right hover:animate-none hover:scale-125 hover:rotate-[13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Raaj")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Raaj_half.png"
          width={100}
          height={100}
          alt="Raaj"
          className="relative bottom-[27px] scale-150"
          data-testid = 'Raaj'
        />
      </div>
      <div
        className="z-50 bg-gradient-to-b from-blue-200 to-blue-600 absolute w-[100px] h-[100px] left-[679px] top-[550px] rounded-md animate-updown_left hover:animate-none hover:scale-125 hover:rotate-[-13deg] cursor-pointer overflow-visible grid justify-center"
        onClick={() => toggleCharacter("Max")}
        data-testid = 'tiny-character'
      >
        <Image
          src="/half/Max_half.png"
          width={90}
          height={90}
          alt="Max"
          className="relative bottom-[28px] scale-150"
          data-testid = 'Max'
        />
      </div>
    </div>
  );
};
export default CharacterGallery;