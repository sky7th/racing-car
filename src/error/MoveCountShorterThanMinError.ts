import { StringUtils } from "../utils/StringUtils";

export default class MoveCountShorterThanMinError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '시도 횟수는 {0}번 부터 가능합니다. (입력한 값: {1}).';
  public static readonly MINIMUN_NUMBER_OF_MOVE_COUNT: number = 1;

  constructor(input: number) {
    super(StringUtils.format(MoveCountShorterThanMinError.ERROR_MESSAGE, MoveCountShorterThanMinError.MINIMUN_NUMBER_OF_MOVE_COUNT, input));
    this.name = 'MoveCountShorterThanMinError';
  }
}