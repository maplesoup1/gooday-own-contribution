import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CharacterAvatarProps {
  character: string | null;
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ character }) => {
  return (
    <div className="bg-blue-300 rounded-full w-[300px] h-[300px] border-[5px] border-white border-opacity-50 overflow-hidden">
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
    </div>
  );
};

export default CharacterAvatar;