"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import phoneImage from "../../../public/images/empty-phone.png";
import phoneAutoOrg from "../../../public/images/phone-automated-organisation.png";
import phoneDirectBooking from "../../../public/images/phone-direct-bookings.png";
import phoneIncProductivity from "../../../public/images/phone-increase-productivity.png";
import phoneToDoList from "../../../public/images/phone-to-do-list.png";
import calendar from "../../../public/assets/calendar.svg";
import H1 from "../h1";
import { features } from "../../lib/constants";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import H3 from "../h3";

export default function FeatureSection() {
  const images = [
    phoneDirectBooking,
    phoneAutoOrg,
    phoneIncProductivity,
    phoneToDoList,
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Use scroll position to interpolate the x-axis animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [topOffset, setTopOffset] = useState(0);

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, -280, -560, -840] // Adjust based on your animation distance
  );

  useEffect(() => {
    // Function to calculate and set the dynamic top offset
    const calculateTopOffset = () => {
      const windowHeight = window.innerHeight;
      const offset = (windowHeight - (windowHeight > 500 ? 900 : 500)) / 2 + 90; // Calculate top position
      console.log(offset);
      setTopOffset(offset);
    };

    // Initial calculation
    calculateTopOffset();

    // Recalculate on window resize
    window.addEventListener("resize", calculateTopOffset);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", calculateTopOffset);
  }, []);

  return (
    <>
      <div ref={containerRef} className="flex w-full">
        <div className="flex flex-1 flex-col justify-center items-center sticky top-0 p-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col h-screen max-h-[900px] justify-center"
            >
              <div className="flex flex-col w-[400px] gap-10">
                <H1>{feature.title}</H1>
                <H3>{feature.description}</H3>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-1 items-center justify-center sticky h-screen max-h-[900px]"
          style={{
            top: `${topOffset}px`,
          }}
        >
          <div className="relative min-w-[300px] max-w-[520px] flex justify-center items-center">
            {/* Phone Image */}
            <Image
              className="absolute top-[-30px] left-0 z-10 w-[300px]"
              src={phoneImage}
              alt="Phone"
              width={300}
            />
            <div className="absolute top-[-150px] left-[80px] z-0 w-[800px]">
              <Image
                className=" w-[700px]"
                src={calendar}
                alt="calendar"
                width={700}
              />
            </div>

            {/* Container with overflow-hidden to create a viewport */}
            <div className="overflow-hidden relative w-[260px] h-[500px] z-0">
              <motion.div
                className="flex w-[1120px] gap-5 bg-[white]"
                style={{ x: xTransform }}
                transition={{
                  type: "spring",
                  stiffness: 100, // Reduce stiffness for smoother transitions
                  damping: 20, // Adjust damping to control overshoot
                }}
              >
                <Image
                  className="w-[260px] h-[500px]"
                  src={phoneDirectBooking}
                  alt="Phone"
                  width={260}
                  height={500}
                />
                <Image
                  className="w-[260px] h-[500px]"
                  src={phoneAutoOrg}
                  alt="Phone"
                  width={260}
                  height={500}
                />
                <Image
                  className="w-[260px] h-[500px]"
                  src={phoneIncProductivity}
                  alt="Phone"
                  width={260}
                  height={500}
                />
                <Image
                  className="w-[260px] h-[500px]"
                  src={phoneToDoList}
                  alt="Phone"
                  width={260}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
