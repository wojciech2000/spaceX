import React from "react";
import Image from "next/image";
import Link from "next/link";

import { routes } from "src/utils/routes/routes";
import WishList from "../wishList/WishList.component";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full flex items-center justify-center flex-col xs:flex-row xs:justify-start">
        <Link href={routes.home}>
          <button className="cursor-pointer">
            <Image src="/spacex-logo.png" width={271} height={97} />
          </button>
        </Link>

        <input
          type="text"
          className="pl-4 py-2 rounded-full max-w-xl bg-white w-full mt-4 xs:mt-0 xs:ml-16 xs:py-4 xs:pl-8"
        />
      </div>

      <WishList />
    </div>
  );
};

export default Header;
