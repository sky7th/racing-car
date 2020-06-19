export default class InvalidNameOfParticipantsError extends Error {

  private static readonly ERROR_MESSAGE: string = '자동차 이름을 입력해주세요.';

  constructor() {
    super(InvalidNameOfParticipantsError.ERROR_MESSAGE);
    this.name = 'InvalidNameOfParticipantsError';
  }
}