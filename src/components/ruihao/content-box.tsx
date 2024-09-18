"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentBoxProps {
  children?: ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-64 h-96 flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default ContentBox;
