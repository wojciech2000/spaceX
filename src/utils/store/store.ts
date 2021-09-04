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

      console.log("asdqwe");

      if (isAlready) {
        toast.warning("This product is already in the cart");

        return {
          wishList: state.wishList,
        };
      }

      toast.success("Product has been added");

      return {
        wishList: [...state.wishList, ship],
      };
    }),

  removeShip: (shipId: string) =>
    set((state: RootState) => {
      const updatedWishList = state.wishList.filter(ship => ship.id !== shipId && ship);

      toast.success("Product has been deleted");

      console.log(updatedWishList, shipId);

      return {
        wishList: updatedWishList,
      };
    }),
});

store = devtools(store);
store = persist(store, { name: "wishList" });

export const useStore = create<RootState>(store);
