import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { useStore } from "src/utils/store/store";

const WishList = () => {
  const { wishList, removeShip } = useStore(state => state);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(is => !is);
  };

  const handleRemoveShip = (id: string) => {
    removeShip(id);
  };

  return (
    <>
      <div
        className={clsx(
          "fixed w-screen h-screen right-0 top-0 z-20 transition-transform transform bg-primary py-4 px-6 md:w-96",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <h2 className="text-3xl">Wish list</h2>

        <div className="mt-8 md:mt-16">
          {wishList.map(({ id, image, name }) => (
            <div key={id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={image}
                  alt={name}
                  className="h-16 w-16 object-cover border-white border-2 rounded-md"
                />

                <span className="ml-4">{name}</span>
              </div>

              <button onClick={() => handleRemoveShip(id)}>
                <BsFillTrashFill />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={toggleOpen}
        className={clsx(
          "fixed z-30 flex items-center justify-center right-8 w-12 h-12 text-2xl bottom-24 rounded-full md:static md:ml-14 md:w-14 md:h-14",
          isOpen ? "bg-white" : "bg-primary",
        )}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineHeart />}
      </button>
    </>
  );
};

export default WishList;
