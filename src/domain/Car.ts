import RandomUtils from "../utils/RandomUtils";

export default class Car {

  private static readonly START_POSITION = 0;
  public static readonly DEFAULT_GO_DISTANCE = 1;

  private _name: string;
  private _position: number = Car.START_POSITION;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get position() {
    return this._position;
  }

  goForward() {
    const canGo = RandomUtils.getTrueOrFalse();
    if (canGo) {
      this._position += Car.DEFAULT_GO_DISTANCE;
    }
  }
}