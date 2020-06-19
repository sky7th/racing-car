import Cars from "./Cars";
import InvalidNameOfParticipantsError from "../error/InvalidNameOfParticipantsError";
import CarsLongerThanMaxError from "../error/CarsLongerThanMaxError";
import CarsShorterThanMinError from "../error/CarsShorterThanMinError";

export default class Race {

  private static readonly DEFAULT_MOVING_COUNT: number = 5;
  private static readonly CAR_NAME_SEPARATOR: string = ',';

  private _cars: Cars;
  private _movingCount: number;

  constructor(builder: any) {
    this._cars = new Cars(builder._participantNames);
    this._movingCount = builder._movingCount;
  }

  get cars(): Cars {
    return this._cars;
  }

  get movingCount(): number {
    return this._movingCount;
  }

  static builder() {
    return new Race.Builder();
  }

  static Builder = class {
    _participantNames: string[] = [];
    _movingCount: number = Race.DEFAULT_MOVING_COUNT;

    nameOfParticipants(nameOfParticipants: string) {
      this._participantNames = this.convertToParticipantNames(nameOfParticipants);
      return this;
    }

    convertToParticipantNames(nameOfParticipants: string = '') {
      return nameOfParticipants
              .split(Race.CAR_NAME_SEPARATOR)
              .map(name => name.trim())
              .filter(name => name !== '');
    }
    
    movingCount(moveCount: number) {
      this._movingCount = moveCount;
      return this;
    }

    build() {
      this.checkParticipantNamesConstraints(this._participantNames);
      return new Race(this);
    }

    checkParticipantNamesConstraints(participantNames: string[]) {
      if (participantNames.length === 0) {
        throw new InvalidNameOfParticipantsError();
      }
      if (participantNames.length > CarsLongerThanMaxError.MAXIMUM_NUMBER_OF_CARS) {
        throw new CarsLongerThanMaxError(participantNames.length);
      }
      if (participantNames.length < CarsShorterThanMinError.MINIMUM_NUMBER_OF_CARS) {
        throw new CarsShorterThanMinError(participantNames.length);
      }
    }
  }
}