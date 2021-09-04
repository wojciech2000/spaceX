import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RootState } from "src/utils/store/store.types";
import { Ship } from "../graphql/graphql.types";
import { toast } from "react-toastify";

let store: any = set => ({
  //ATTRIBUTES
  ships: [],
  wishList: [],

  //METHODS

  addShips: (ships: Ship[]) =>
    set(() => ({
      ships: ships,
    })),

  addShip: (ship: Ship) =>
    set((state: RootState) => {
      const isAlready = state.wishList.find(({ name }) => name === ship.name);

      if (isAlready) {
        toast.warning("This ship is already in wish list");

        return {
          wishList: state.wishList,
        };
      }

      toast.success("Ship has been added");

      return {
        wishList: [...state.wishList, ship],
      };
    }),

  removeShip: (shipId: string) =>
    set((state: RootState) => {
      const updatedWishList = state.wishList.filter(ship => ship.id !== shipId && ship);

      toast.success("Ship has been deleted");

      console.log(updatedWishList, shipId);

      return {
        wishList: updatedWishList,
      };
    }),
});

store = devtools(store);
store = persist(store, { name: "wishList" });

export const useStore = create<RootState>(store);
