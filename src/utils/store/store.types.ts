import { Ship } from "src/utils/graphql/graphql.types";

export interface RootState {
  ships: Ship[];
  wishList: Ship[];
  addShip: (product: Ship) => void;
  removeShip: (shipId: string) => void;
}
