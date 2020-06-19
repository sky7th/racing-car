import Car from "./Car";

export default class Cars {
  
  cars: Car[];

  constructor(participantNames: string[]) {
    this.cars = participantNames.map(name => new Car(name))
  }
}