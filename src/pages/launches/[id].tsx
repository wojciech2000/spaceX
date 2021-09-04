import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { getLaunchesQuery, getLaunchQuery, initializeClient } from "src/utils/graphql/graphql";
import { Launch as LaunchType } from "src/utils/graphql/graphql.types";
import { convertUnixToLacalDate } from "src/utils/helpers/convertUnixToLacalDate.helper";
import { routes } from "src/utils/routes/routes";
import ShipItem from "src/components/shipItem/ShipItem.component";

interface IProps {
  launch: LaunchType;
}

const Launch: NextPage<IProps> = ({ launch }) => {
  const {
    details,
    launch_date_unix,
    mission_name,
    ships,
    links: { flickr_images },
  } = launch;

  return (
    <div className="md:mx-32">
      <div className="w-full flex justify-end text-white mb-4">
        <Link href={routes.home}>
          <button className="flex items-end justify-center">
            <BiArrowBack className="text-2xl" />
            <span className="text-xl ml-2">Back</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row">
        <img
          src={flickr_images[0]}
          alt={mission_name}
          className="max-h-96 mx-auto border-primary border-2 object-cover rounded-2xl md:h-full md:w-1/2"
        />

        <div className="ml-8 md:w-1/2">
          <span className="block text-gray-400 text-sm mt-2 md:mt-4">
            {convertUnixToLacalDate(launch_date_unix)}
          </span>
          <h2 className="mt-4 text-primary">{mission_name}</h2>
          <p className="text-base text-white">{details}</p>

          <div className="mt-8">
            {ships.length > 0 ? (
              <>
                <h1 className="text-3xl text-white mb-2">SHIPS:</h1>
                {ships.map(ship => (
                  <ShipItem key={ship.id} ship={ship} />
                ))}
              </>
            ) : (
              <span className="text-white">Ships not found...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;

export const getStaticPaths = async () => {
  const client = initializeClient();

  const result = await client.query({
    query: getLaunchesQuery,
  });

  const launches: LaunchType[] = result.data.launches;

  const paths = launches.map(launch => ({
    params: { id: launch.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const client = initializeClient();

  const result = await client.query({
    query: getLaunchQuery,
    variables: { id },
  });

  const launch: LaunchType = result.data.launch;

  return {
    props: {
      launch,
    },
  };
};
