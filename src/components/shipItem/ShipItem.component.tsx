import { NextPage } from "next";
import React from "react";
import { Ship } from "src/utils/graphql/graphql.types";
import Button from "src/components/button/Button.component";

interface IProps {
  ship: Ship;
}

const ShipItem: NextPage<IProps> = ({ ship }) => {
  const { image, name } = ship;

  const handleOnClick = () => {
    console.log("add");
  };

  return (
    <div className="mb- mb-12">
      <h2 className="text-white mb-2">{name}</h2>
      <img src={image} alt={name} />

      <Button onClick={handleOnClick} className="w-full">
        Add to the wishlist
      </Button>
    </div>
  );
};

export default ShipItem;
