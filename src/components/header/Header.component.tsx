import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="w-full flex items-center justify-center flex-col xs:flex-row xs:justify-start">
        <Image src="/spacex-logo.png" width={271} height={97} />

        <input
          type="text"
          className="pl-4 py-2 rounded-full max-w-xl bg-white w-full mt-4 xs:mt-0 xs:ml-16 xs:py-4 xs:pl-8"
        />
      </div>

      <button className="fixed flex items-center justify-center bg-primary right-8 w-12 h-12 bottom-8 p-2 rounded-full md:static md:ml-14 md:w-14 md:h-14 md:p-4">
        <AiOutlineHeart className="text-2xl" />
      </button>
    </div>
  );
};

export default Header;
