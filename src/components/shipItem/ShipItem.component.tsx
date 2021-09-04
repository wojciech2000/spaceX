import { NextPage } from "next";
import React from "react";
import { Ship } from "src/utils/graphql/graphql.types";

interface IProps {
  ship: Ship;
}

const ShipItem: NextPage<IProps> = ({ ship }) => {
  const { image, name } = ship;

  const handleOnClick = () => {
    console.log("add");
  };

  return (
    <div className="mb-4">
      <h2 className="text-white mb-2">{name}</h2>
      <img src={image} alt={name} />

      <button
        onClick={handleOnClick}
        className="border border-primary w-full block mt-4 text-xl py-2 rounded-full text-primary mx-auto transition-all hover:bg-primary hover:text-black"
      >
        Add to the wishlist
      </button>
    </div>
  );
};

export default ShipItem;
