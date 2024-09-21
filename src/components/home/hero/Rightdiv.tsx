"use client"
import React from 'react'
import CharacterAvatar from './CharacterAvatar'
import { useState } from 'react'

const Rightdiv = () => {
    const [character, setCharacter] = useState<string>("Maria");
    return (
        <div className='z-40'>
            <CharacterAvatar character={character} />
        </div>
    )
}

export default Rightdiv