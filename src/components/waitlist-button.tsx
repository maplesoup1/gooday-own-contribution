import React from "react";
import H2 from "./h2";
import H3 from "./h3";
import { motion } from "framer-motion";

type WaitListButtonProps = {
  onClick: () => void;
};

export default function WaitListButton({ onClick }: WaitListButtonProps) {
  return (
    <motion.div
      className="flex items-center justify-center bg-[#FECD4D] text-white font-semibold py-4 px-8 rounded-full w-[200px] cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={() => onClick()}
    >
      <H3>Count me in!</H3>
    </motion.div>
  );
}
