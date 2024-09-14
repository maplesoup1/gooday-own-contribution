import React from "react";
import { cn } from "@/lib/utils";
type H3Props = {
  children: string;
  className?: string;
};

export default function H3({ children, className = "" }: H3Props) {
  return (
    <div className={cn("text-[50px] font-bold font-poppins", className)}>
      {children}
    </div>
  );
}