import { StringUtils } from "../utils/StringUtils";

export default class CarsLongerThanMaxError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '자동차 {0}대 까지 참여 가능합니다. (입력한 값: {1}).';
  public static readonly MAXIMUM_NUMBER_OF_CARS: number = 10;

  constructor(input: number) {
    super(StringUtils.format(CarsLongerThanMaxError.ERROR_MESSAGE, CarsLongerThanMaxError.MAXIMUM_NUMBER_OF_CARS, input));
    this.name = 'CarsLongerThanMaxError';
  }
}