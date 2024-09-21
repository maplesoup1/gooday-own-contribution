import React from "react";
import { cn } from "@/lib/utils";

type H0Props = {
  children: string;
  className?: string;
};

export default function H0({ children, className = "" }: H0Props) {
  return (
    <div className={cn("text-[50px] leading-10 font-bold font-poppins", className)}>
      {children}
    </div>
  );
}