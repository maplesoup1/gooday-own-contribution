import React from "react";

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className = "" }: H2Props) {
  return <div className={`text-[20px] ${className}`}>{children}</div>;
}
