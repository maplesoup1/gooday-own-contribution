import React from "react";

type H0Props = {
  children: string;
  className?: string;
};

export default function H0({ children, className = "" }: H0Props) {
  return (
    <div className={`text-[50px] font-bold font-poppins ${className}`}>
      {children.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

