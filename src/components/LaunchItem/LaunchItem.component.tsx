import React, { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Launch } from "src/utils/graphql/graphql.types";
import { routes } from "src/utils/routes/routes";
import { convertUnixToLacalDate } from "src/utils/helpers/convertUnixToLacalDate.helper";

interface IProps {
  launch: Launch;
}

const LaunchItem: NextPage<IProps> = ({ launch }) => {
  const {
    id,
    details,
    mission_name,
    launch_date_unix,
    links: { flickr_images },
  } = launch;

  return (
    <div className="custom-gradient rounded-lg w-full mb-10 p-4 sm:w-80 lg:w-96 ">
      <img
        src={flickr_images[0]}
        alt={mission_name}
        className="object-contain h-48 rounded-lg border border-primary w-auto mx-auto"
      />
      <span className="block text-gray-400 text-sm mt-2 md:mt-4">
        {convertUnixToLacalDate(launch_date_unix)}
      </span>
      <h2 className="mt-4 text-primary">{mission_name}</h2>
      <p className="text-base text-white">{details}</p>

      <Link href={`${routes.launches}/${id}`}>
        <button className="border border-primary w-40 block mt-4 text-xl py-2 rounded-full text-primary mx-auto transition-all hover:bg-primary hover:text-black">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default LaunchItem;
