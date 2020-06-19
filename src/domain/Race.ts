import Cars from "./Cars";
import RaceSetting from "./RaceSetting";

export default class Race {

  private _cars: Cars;
  private _movingCount: number;

  constructor(raceSetting: RaceSetting) {
    this._cars = raceSetting.cars
    this._movingCount = raceSetting.movingCount;
  }
}