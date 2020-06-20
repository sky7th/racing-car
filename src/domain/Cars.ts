import Car from "./Car";

export default class Cars {

  private _cars: Car[];

  constructor(participantNames: string[]) {
    this._cars = participantNames.map(name => new Car(name))
  }

  move() {
    this._cars.forEach(car => {
      car.goForward();
    });
  }
}