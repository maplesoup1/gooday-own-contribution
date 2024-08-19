"use client";

import { AnimatePresence, motion } from "framer-motion";

export const RotateRect = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="w-[100px] h-[100px] bg-[orange]"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </AnimatePresence>
    </>
  );
};
