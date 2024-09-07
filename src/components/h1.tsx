import React from "react";
import { cn } from "@/lib/utils";
type H1Props = {
  children: string;
  className?: string;
};

export default function H1({ children, className = "" }: H1Props) {
  return (
    <div className={cn("text-[34px] font-bold font-poppins", className)}>
      {children}
    </div>
  );
}