import RandomUtils from "../utils/RandomUtils";
import Car from "./Car";

export default class RaceResult {

  private _winnerCars: Car[];

  constructor(cars: Car[]) {
    this._winnerCars = cars;
  }

  getWinnerCarNames() {
    return this._winnerCars.map(car => car.name);
  }
}