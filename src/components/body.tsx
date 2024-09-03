import React from "react";

type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Body({ children, className = "" }: BodyProps) {
  return <div className={`text-[13px] ${className}`}>{children}</div>;
}
