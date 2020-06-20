import Cars from "./Cars";
import RaceSetting from "./RaceSetting";

export default class Race {

  private static readonly ZERO_COUNT: number = 0;

  private _cars: Cars;
  private _movingCount: number;

  constructor(raceSetting: RaceSetting) {
    this._cars = raceSetting.cars;
    this._movingCount = raceSetting.movingCount;
  }

  isComplete() {
    return this._movingCount === Race.ZERO_COUNT;
  }

  move() {
    this._cars.move();
    this._movingCount -= 1;
  }
}