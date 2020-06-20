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

  getLeadingCars() {
    const positionOfLeadingCar = this.getPositionOfLeadingCar();
    return this._cars.filter(car => car.position === positionOfLeadingCar);
  }

  getPositionOfLeadingCar() {
    const carPositions = this._cars.map(car => car.position);
    return Math.max(...carPositions);
  }
}