"use client";
import React, { useState } from "react";
import CharacterAvatar from "./CharacterAvatar";
import CharacterGallery from "./CharacterGallery";

const Rightdiv: React.FC = () => {
  const [character, setCharacter] = useState<string>("Maria");

  function toggleCharacter(newCharacter: string): void {
    setCharacter(newCharacter);
  }
  
  return (
    <div className="flex z-50">
      <CharacterGallery toggleCharacter={toggleCharacter} />
      <CharacterAvatar character={character} />
    </div>
  );
};

export default Rightdiv;
