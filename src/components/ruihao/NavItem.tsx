import { motion } from "framer-motion";
import React, { forwardRef } from "react";

type NavItemProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ label, isActive, onClick }, ref) => {
    const variants = {
      active: {
        color: "#ffffff",
        transition: { delay: 0.02 },
      },
      inactive: {
        color: "#000000",
      },
    };

    return (
      <motion.li
        ref={ref}
        layout
        className={`cursor-pointer px-4 py-2 flex-grow h-10 text-center justify-center items-center rounded-full ${
          isActive ? "text-white" : "text-black"
        }`}
        style={{ flex: "1", zIndex: isActive ? 1 : 1 }}
        onClick={onClick}
        variants={variants}
        animate={isActive ? "active" : "inactive"}
      >
        {label}
      </motion.li>
    );
  }
);

NavItem.displayName = "NavItem";

export default NavItem;
