import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import LaunchItem from "src/components/LaunchItem/LaunchItem.component";
import Pagination from "src/components/pagination/Pagination.component";
import { getLaunchesQuery, initializeClient } from "src/utils/graphql/graphql";
import { Launch } from "src/utils/graphql/graphql.types";
import { LAUNCHES_PER_PAGE } from "src/utils/variables/variables";

interface IProps {
  launches: Launch[];
}

const Launches: NextPage<IProps> = ({ launches }) => {
  const [page, setPage] = useState<number>(0);

  const displayLaunches = useCallback((): Launch[] => {
    const from = LAUNCHES_PER_PAGE * page;
    const to = LAUNCHES_PER_PAGE * (page + 1);

    const slicedLaunches = launches.slice(from, to);
    return slicedLaunches;
  }, [page]);

  return (
    <div className="flex flex-col justify-between">
      {displayLaunches().map(launch => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}

      <Pagination current={page + 1} onChange={setPage} launchesLength={launches.length} />
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
