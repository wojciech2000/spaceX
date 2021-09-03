import { NextPage } from "next";
import React from "react";
import { Launch } from "src/utils/graphql/graphql.types";

interface IProps {
  launch: Launch;
}

const LaunchItem: NextPage<IProps> = ({ launch }) => {
  return (
    <div>
      <h1>{launch.id}</h1>
      <p>{launch.mission_name}</p>
    </div>
  );
};

export default LaunchItem;
