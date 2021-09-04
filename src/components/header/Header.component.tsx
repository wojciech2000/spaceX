import React from "react";
import Image from "next/image";
import Link from "next/link";

import { routes } from "src/utils/routes/routes";
import WishList from "../wishList/WishList.component";
import SearchShip from "../searchShip/SearchShip.component";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full flex items-center justify-center flex-col md:flex-row md:justify-start">
        <Link href={routes.home}>
          <button className="cursor-pointer">
            <Image src="/spacex-logo.png" width={271} height={97} />
          </button>
        </Link>

        <SearchShip />
      </div>

      <WishList />
    </div>
  );
};

export default Header;
