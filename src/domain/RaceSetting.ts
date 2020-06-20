import Cars from "./Cars";
import InvalidNameOfParticipantsError from "../error/InvalidNameOfParticipantsError";
import CarsLongerThanMaxError from "../error/CarsLongerThanMaxError";
import CarsShorterThanMinError from "../error/CarsShorterThanMinError";
import MoveCountShorterThanMinError from "../error/MoveCountShorterThanMinError";
import MoveCountLongerThanMaxError from "../error/MoveCountLongerThanMaxError";

export default class RaceSetting {

  private static readonly DEFAULT_MOVE_COUNT: number = 5;
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
    return new RaceSetting.Builder();
  }

  static Builder = class {
    _participantNames: string[] = [];
    _moveCount: number = RaceSetting.DEFAULT_MOVE_COUNT;

    nameOfParticipants(nameOfParticipants: string) {
      this._participantNames = this.convertToParticipantNames(nameOfParticipants);
      return this;
    }

    convertToParticipantNames(nameOfParticipants: string = '') {
      return nameOfParticipants
              .split(RaceSetting.CAR_NAME_SEPARATOR)
              .map(name => name.trim())
              .filter(name => name !== '');
    }
    
    movingCount(moveCount: number) {
      this._moveCount = moveCount;
      return this;
    }

    build() {
      this.checkParticipantNamesConstraints(this._participantNames);
      this.checkMoveCountConstraints(this._moveCount);
      return new RaceSetting(this);
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

    checkMoveCountConstraints(moveCount: number) {
      if (moveCount < MoveCountShorterThanMinError.MINIMUN_NUMBER_OF_MOVE_COUNT) {
        throw new MoveCountShorterThanMinError(moveCount);
      }
      if (moveCount > MoveCountLongerThanMaxError.MAXIMUM_NUMBER_OF_MOVE_COUNT) {
        throw new MoveCountLongerThanMaxError(moveCount);
      }
    }
  }
}