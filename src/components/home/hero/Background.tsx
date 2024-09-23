import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div className="w-full h-screen absolute -top-20">
      <Image
        src="/img/heroback.svg"
        width={1200}
        height={1200}
        alt="background"
        className="scale-125"
        data-testid = 'background-img'
      />
    </div>
  );
};

export default Background;
