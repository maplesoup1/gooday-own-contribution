"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

type TabNavBarProps = {
  tabs: string[];
};

const TabNavBar: React.FC<TabNavBarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const itemRefs = useRef<(HTMLLIElement | null)[]>(
    new Array(tabs.length).fill(null)
  );
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
  });

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeItem = itemRefs.current[activeIndex];
    if (activeItem) {
      setIndicatorStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        top: (activeItem.offsetHeight - 32) / 2,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div
      className="relative"
      style={{ width: tabs.length === 2 ? "300px" : "600px" }}
    >
      <ul
        className="flex space-x-1 shadow-md h-10 justify-center items-center p-2 bg-white rounded-full debug"
        style={{ zIndex: 1 }}
      >
        {tabs.map((tab, index) => (
          <NavItem
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          />
        ))}
      </ul>
      <motion.div
        className="absolute bottom-0 bg-yellow-400 rounded-full h-8"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          top: `${indicatorStyle.top}px`,
          zIndex: 0,
        }}
        initial={false}
        animate={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          top: indicatorStyle.top,
        }}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default TabNavBar;
