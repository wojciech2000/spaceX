import { NextPage } from "next";
import React from "react";
import LaunchItem from "src/components/LaunchItem/LaunchItem.component";
import { getLaunchesQuery, initializeClient } from "src/utils/graphql/graphql";
import { Launch } from "src/utils/graphql/graphql.types";

interface IProps {
  launches: Launch[];
}

const Launches: NextPage<IProps> = ({ launches }) => {
  console.log(launches);

  return (
    <div className="bg-primary">
      {launches.map(launch => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const client = initializeClient();

  const result = await client.query({
    query: getLaunchesQuery,
  });

  const launches: Launch[] = result.data.launches;

  return {
    props: {
      launches,
    },
  };
};

export default Launches;
