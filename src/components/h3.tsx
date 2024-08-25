import React from "react";

type H1Props = {
  children: React.ReactNode;
};

export default function H1({ children }: H1Props) {
  return <div className="text-lg">{children}</div>;
}
