import React from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Launch } from "src/utils/graphql/graphql.types";
import { routes } from "src/utils/routes/routes";

interface IProps {
  launch: Launch;
}

const LaunchItem: NextPage<IProps> = ({ launch }) => {
  const { id, details, mission_name, launch_date_utc } = launch;

  return (
    <Link href={`${routes.launches}/${id}`}>
      <div>
        <h1>{id}</h1>
      </div>
    </Link>
  );
};

export default LaunchItem;
