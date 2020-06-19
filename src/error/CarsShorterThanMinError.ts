import { StringUtils } from "../utils/StringUtils";

export default class CarsShorterThanMinError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '자동차 {0}대 부터 참여 가능합니다. (입력한 자동자 수: {1}).';
  public static readonly MINIMUM_NUMBER_OF_CARS: number = 0;

  constructor(input: number) {
    super(StringUtils.format(CarsShorterThanMinError.ERROR_MESSAGE, CarsShorterThanMinError.MINIMUM_NUMBER_OF_CARS, input));
  }
}