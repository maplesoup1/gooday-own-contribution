"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import navigationData from "./navigation_bar.json";

type DropdownItem = 
  | string 
  | {
      name: string;
      description?: string;
    };

interface Section {
  name: string;
  description?: string;
  dropdown?: DropdownItem[];
}

interface NavigationData {
  navigationBar: {
    position: string;
    sections: Section[];
  };
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const dropdownVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const Navigation_bar: React.FC = () => {
  return (
    <div className="w-full h-[120px] flex items-center">
      <img src="/img/logo-text.png" className="h-1/2 w-auto" />
      <div className="ml-auto flex space-x-10">
        {navigationData.navigationBar.sections.map((section, index) => (
          <DropdownMenu key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

const DropdownMenu: React.FC<{ section: Section }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative group"
    >
      <motion.button
        className="text-yellow-400 hover:text-blue-400"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {section.name}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="inline-block ml-1"
        >
        </motion.div>
      </motion.button>
      {section.dropdown && (
        <motion.ul
          className="absolute left-0 top-full mt-2 bg-white shadow-lg p-2.5"
          variants={dropdownVariants}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {section.dropdown.map((item, idx) => (
            typeof item === "string" ? (
              <motion.li
                key={idx}
                className="p-2 hover:bg-gray-200"
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ) : (
              <motion.li
                key={idx}
                className="p-2 hover:bg-gray-200"
                variants={itemVariants}
              >
                {item.name}
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
              </motion.li>
            )
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navigation_bar;
