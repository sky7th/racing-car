import { StringUtils } from "../utils/StringUtils";

export default class MoveCountLongerThanMaxError extends Error {
  
  private static readonly ERROR_MESSAGE: string = '시도 횟수는 {0}번 까지 가능합니다. (입력한 값: {1}).';
  public static readonly MAXIMUM_NUMBER_OF_MOVE_COUNT: number = 20;

  constructor(input: number) {
    super(StringUtils.format(MoveCountLongerThanMaxError.ERROR_MESSAGE, MoveCountLongerThanMaxError.MAXIMUM_NUMBER_OF_MOVE_COUNT, input));
    this.name = 'MoveCountLongerThanMaxError';
  }
}