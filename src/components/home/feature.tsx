"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import phoneImage from "../../../public/images/phone-empty.png";
import phoneContent0 from "../../../public/images/phone-content-0.png";
import phoneContent1 from "../../../public/images/phone-content-1.png";
import phoneContent2 from "../../../public/images/phone-content-2.png";
import phoneContent3 from "../../../public/images/phone-content-3.png";
import phoneContent4 from "../../../public/images/phone-content-4.png";
import phoneContent5 from "../../../public/images/phone-content-5.png";
import calendar from "../../../public/assets/calendar.svg";
import H1 from "../h1";
import H3 from "../h3";
import { features } from "../../lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import JoinWaitList from "../join-waitlist";

export default function Feature() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [topOffset, setTopOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const images = [
    phoneContent0,
    phoneContent2,
    phoneContent4,
    phoneContent5,
    phoneContent5,
  ];

  useEffect(() => {
    const calculateTopOffset = () => {
      const windowHeight = window.innerHeight;
      const offset = (windowHeight - (windowHeight > 500 ? 900 : 500)) / 2 + 60;
      setTopOffset(offset);
    };

    calculateTopOffset();

    window.addEventListener("resize", calculateTopOffset);

    return () => {
      window.removeEventListener("resize", calculateTopOffset);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) {
        // console.log("Scroll prevented");
        e.preventDefault();
        e.stopPropagation();
        return;
      } else {
        const windowHeight = window.innerHeight;
        const scrollOffset =
          windowHeight > 900
            ? (windowHeight - (windowHeight > 500 ? 900 : 500)) / 2 + 60
            : windowHeight;
        const scrollY = window.scrollY;

        // console.log("====================================");
        // console.log("Scroll detected:", e.deltaY);
        // console.log(
        //   "Current scrollY:",
        //   scrollY,
        //   "Window height:",
        //   windowHeight,
        //   "Scroll Offset:",
        //   scrollOffset
        // );
        // console.log("Current section:", currentPage);
        // console.log("====================================");

        if (scrollY > scrollOffset) {
          if (e.deltaY > 0 && currentPage < sectionRefs.current.length - 1) {
            // console.log("trigger next");
            setCurrentPage((prev) => {
              const nextPage = prev + 1;
              scrollToSection(nextPage);
              setTimeout(() => {
                setCurrentPage(nextPage);
              }, 500);
              return prev;
            });
          } else if (e.deltaY < 0 && currentPage > 0) {
            // console.log("trigger last");
            setCurrentPage((prev) => {
              const nextPage = prev - 1;
              scrollToSection(nextPage);
              setTimeout(() => {
                setCurrentPage(nextPage);
              }, 500);
              return prev;
            });
          } else if (e.deltaY < 0 && currentPage === 0) {
            scrollToSection(-1);
          }
        } else {
          if (e.deltaY > 0) {
            scrollToSection(0);
          } else {
            scrollToSection(-1);
          }
        }
      }
    };

    const scrollToSection = (index: number) => {
      if (index > currentPage) {
        setDirection(1);
      } else {
        setDirection(-1);
      }

      if (index < 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      const targetSection = sectionRefs.current[index];
      const offset =
        (window.innerHeight - (window.innerHeight > 500 ? 900 : 500)) / 2 + 60;
      if (targetSection) {
        setIsScrolling(true);
        const sectionPosition =
          targetSection.offsetTop +
          (window.innerHeight > 900 ? 900 - offset : window.innerHeight);
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
        // console.log("[Scroll Start] to index", index);
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling, currentPage]);

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col justify-center items-center sticky top-0 pl-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el: HTMLDivElement) => {
                sectionRefs.current[index] = el;
              }}
              className="feature-title flex flex-col h-screen max-h-[900px] justify-center"
            >
              <motion.div
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 200 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <H1>{feature.title}</H1>
                {feature.description !== "waitlist" ? (
                  <H3>{feature.description}</H3>
                ) : (
                  <JoinWaitList />
                )}
              </motion.div>
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
            <Image
              className="absolute top-[-50px] z-10 w-[300px]"
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

            <div className="relative min-w-[300px] max-w-[520px] flex justify-center items-center">
              <Image
                className="absolute top-[-50px] z-10 w-[300px]"
                src={phoneImage}
                alt="Phone"
                width={300}
              />
              <div className="absolute top-[-150px] left-[80px] z-0 w-[800px]">
                <Image
                  className="w-[700px]"
                  src={calendar}
                  alt="calendar"
                  width={700}
                />
              </div>

              <div className="overflow-hidden relative w-[275px] h-[522px] z-0">
                <motion.div
                  key={`background-${currentPage}`}
                  className="absolute top-0 left-0 w-[275px] h-full"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: direction === 1 ? -275 : 275, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    className="w-[275px]"
                    src={images[currentPage === 0 ? 0 : currentPage - 1]}
                    alt="Previous Phone"
                    width={275}
                  />
                </motion.div>

                <AnimatePresence initial={false}>
                  <motion.div
                    key={`foreground-${currentPage}`}
                    className="absolute top-0 left-0 w-[275px] h-full"
                    initial={{ x: direction === 1 ? 275 : -275 }}
                    animate={{ x: 0 }}
                    exit={{ x: direction === 1 ? -275 : 275 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      className="w-[275px]"
                      src={images[currentPage]}
                      alt="New Phone"
                      width={275}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
