import { Ship } from "src/utils/graphql/graphql.types";

export interface RootState {
  ships: Ship[];
  wishList: Ship[];
  addShips: (ships: Ship[]) => void;
  addShip: (ship: Ship) => void;
  removeShip: (shipId: string) => void;
}
