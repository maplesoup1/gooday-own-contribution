"use client";
import { motion } from "framer-motion";

export const FramerButton = () => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
  );
};
