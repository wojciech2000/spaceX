import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import LaunchItem from 'src/components/testname/LaunchItem.component'
import Pagination from "src/components/pagination/Pagination.component";
import { getLaunchesQuery, initializeClient } from "src/utils/graphql/graphql";
import { Launch } from "src/utils/graphql/graphql.types";
import { useStore } from "src/utils/store/store";
import { LAUNCHES_PER_PAGE } from "src/utils/variables/variables";

interface IProps {
  launches: Launch[];
}

const Launches: NextPage<IProps> = ({ launches }) => {
  const { addShips } = useStore(state => state);

  useEffect(() => {
    const ships = launches.map(launch => launch.ships).flat();

    addShips(ships);
  }, []);

  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const displayLaunches = useCallback((): Launch[] => {
    const from = LAUNCHES_PER_PAGE * page;
    const to = LAUNCHES_PER_PAGE * (page + 1);

    const slicedLaunches = launches.slice(from, to);
    return slicedLaunches;
  }, [page]);

  return (
    <div className="flex mb-16 flex-col justify-center items-center flex-wrap gap-2 sm:flex-row md:gap-12 sm:items-start">
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
