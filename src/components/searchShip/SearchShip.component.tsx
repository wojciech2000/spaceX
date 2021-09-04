import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { Ship } from "src/utils/graphql/graphql.types";

import { useStore } from "src/utils/store/store";

const SearchShip = () => {
  const { ships, addShip } = useStore(state => state);

  const [searchValue, setSearchValue] = useState<string>("");

  const filtered = ships.filter(ship =>
    ship.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleAddShip = (ship: Ship) => {
    addShip(ship);
  };

  return (
    <div className="w-full">
      <div className="max-w-xl relative mt-4 xs:ml-16 xs:mt-0">
        <label
          htmlFor="search"
          className="absolute bg-purple-800 text-white h-5/6 right-2 transform -translate-y-1/2 top-1/2 flex justify-center items-center w-8 rounded-full xs:w-12 cursor-pointer"
        >
          <BsSearch />
        </label>
        <input
          id="search"
          type="text"
          className="pl-4 pr-12 py-2 rounded-full w-full bg-white xs:py-4 xs:pl-8 md:pr-20"
          placeholder="Search for ship"
          onChange={handleChangeValue}
        />
        {searchValue.length > 0 && (
          <div className="absolute right-0 top-16  max-h-80 overflow-auto md:top-20 bg-white w-full p-4 pb-0 rounded-lg z-10">
            {filtered.length > 0 ? (
              filtered.map(ship => (
                <div
                  key={ship.id}
                  onClick={() => handleAddShip(ship)}
                  className="flex justify-between items-center mb-4 cursor-pointer hover:bg-green-400 p-2"
                >
                  <div className="flex items-center">
                    <img
                      src={ship.image}
                      alt={ship.name}
                      className="h-12 w-12 object-cover border-white border-2 rounded-md"
                    />

                    <span className="ml-4">{ship.name}</span>
                  </div>

                  <button>
                    <GrAddCircle className="text-white text-xl" />
                  </button>
                </div>
              ))
            ) : (
              <span className="pb-4 block">Ship not found</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchShip;
