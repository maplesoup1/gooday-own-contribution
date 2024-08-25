import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      {/* {Header} */}

      <div className="w-full h-[120px] flex items-center">
        <img src="/img/logo-text.png" className="h-1/2 w-auto" />
        <div className="ml-auto flex space-x-10">
          <div className="text-xl text-yellow-400 cursor-pointer hover:bg-yellow-600">
            Contact
          </div>
          <div className="text-xl text-yellow-400 cursor-pointer hover:bg-yellow-600">
            FAQ
          </div>
          {/* {TODO: navigation} */}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-6">
        <div className="text-4xl mb-4 font-bold">
          Bookings <span className="text-yellow-500">organised</span> for
          businesses and consumers
        </div>
        <div className="text-xl">
          Increasing productivity & minimising cancellations
        </div>
        <button className="mt-8 h-auto w-auto p-4 rounded-3xl bg-yellow-300 text-xl text-white hover:bg-yellow-600">
          Get Started
        </button>
      </div>
      <div className="h-auto w-auto flex justify-center items-center">
        <Image
          src="/img/avatar-group.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default hero;
