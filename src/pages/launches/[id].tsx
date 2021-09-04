import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { getLaunchesQuery, getLaunchQuery, initializeClient } from "src/utils/graphql/graphql";
import { Launch as LaunchType, LaunchDetails } from "src/utils/graphql/graphql.types";

interface IProps {
  launch: LaunchDetails;
}

const Launch: NextPage<IProps> = ({ launch }) => {
  console.log(launch);

  return (
    <div>
      <h1>launch {launch.mission_name}</h1>
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

  const launch: LaunchDetails = result.data.launch;

  return {
    props: {
      launch,
    },
  };
};
