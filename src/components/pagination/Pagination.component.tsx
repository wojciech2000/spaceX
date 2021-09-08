import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { LAUNCHES_PER_PAGE } from "src/utils/variables/variables";
import PaginationBullet from "../paginationBullet/PaginationBullet.component";

export interface IProps {
  current: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  launchesLength: number;
}

const Pagination: React.FC<IProps> = ({ current, onChange, launchesLength }) => {
  const maxPages = Math.ceil(launchesLength / LAUNCHES_PER_PAGE - 1);

  const previousPage = () => {
    onChange(current => current - 1);
  };

  const nextPage = () => {
    onChange(current => current + 1);
  };

  return (
    <div className="flex justify-center items-center w-full fixed bottom-0 pb-4 md:py-8">
      <PaginationBullet
        content={<GrFormPrevious className="text-xl" />}
        type="primary"
        onClick={previousPage}
        disabled={current <= 1}
      />

      <PaginationBullet content={current} type="primary" className="cursor-default mx-8 md:mx-28" />

      <PaginationBullet
        content={<GrFormNext className="text-xl" />}
        type="primary"
        onClick={nextPage}
        disabled={current > maxPages}
      />
    </div>
  );
};

export default Pagination;
