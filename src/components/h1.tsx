import React from "react";

type H1Props = {
  children: string;
};

export default function H1({ children }: H1Props) {
  return (
    <div className="text-5xl font-bold">
      {children.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
