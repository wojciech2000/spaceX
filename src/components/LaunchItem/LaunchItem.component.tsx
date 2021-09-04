import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Launch } from "src/utils/graphql/graphql.types";
import { routes } from "src/utils/routes/routes";
import { convertUnixToLacalDate } from "src/utils/helpers/convertUnixToLacalDate.helper";
import Button from "src/components/button/Button.component";

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
    <div className="custom-gradient rounded-2xl w-full mb-10 p-4 sm:w-80 lg:w-96 ">
      <img
        src={flickr_images[0]}
        alt={mission_name}
        className="object-contain h-48 border-2 rounded-2xl border-primary w-auto mx-auto"
      />
      <span className="block text-gray-400 text-sm mt-2 md:mt-4">
        {convertUnixToLacalDate(launch_date_unix)}
      </span>
      <h2 className="mt-4 text-primary">{mission_name}</h2>
      <p className="text-base text-white">{details}</p>

      <Link href={`${routes.launches}/${id}`}>
        <div>
          <Button>Read more</Button>
        </div>
      </Link>
    </div>
  );
};

export default LaunchItem;
