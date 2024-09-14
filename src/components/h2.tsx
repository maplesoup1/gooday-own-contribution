import React from "react";
import { cn } from "@/lib/utils";
type H2Props = {
  children: string;
  className?: string;
};

export default function H2({ children, className = "" }: H2Props) {
  return (
    <div className={cn("text-[20px] font-bold font-poppins", className)}>
      {children}
    </div>
  );
}