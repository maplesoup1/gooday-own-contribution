import React from "react";

type H1Props = {
  children: string;
  className?: string;
};

export default function H1({ children, className = "" }: H1Props) {
  return (
    <div className={`text-[34px] font-bold font-poppins ${className}`}>
      {children.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
