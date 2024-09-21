"use client";
import React, { useState } from "react";
import CharacterAvatar from "./CharacterAvatar";
import CharacterGallery from "./CharacterGallery";

const Rightdiv: React.FC = () => {
  const [character, setCharacter] = useState<string>("Maria");

  function toggleCharacter(newCharacter: string): void {
    setCharacter((prevCharacter) =>
      prevCharacter === newCharacter ? "" : newCharacter
    );
  }

  return (
    <div className="flex z-50">
      <CharacterAvatar character={character} />
      <CharacterGallery toggleCharacter={toggleCharacter} />
    </div>
  );
};

export default Rightdiv;