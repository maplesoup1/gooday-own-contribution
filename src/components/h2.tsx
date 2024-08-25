import React from "react";

type H2Props = {
  children: React.ReactNode;
};

export default function H2({ children }: H2Props) {
  return <div className="text-3xl font-bold">{children}</div>;
}
