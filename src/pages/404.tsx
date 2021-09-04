import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h2 className="text-white text-3xl -mb-12 text-center">404 PAGE NOT FOUND</h2>
      <Image src="/lost-astronaut-error.png" width={400} height={400} />
    </div>
  );
};

export default Error;
