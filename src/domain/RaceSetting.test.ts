import RaceSetting from "./RaceSetting";

describe('RaceSetting 클래스', () => {
  it('객체를 생성한다.', () => {
    const raceSetting = RaceSetting.builder().nameOfParticipants('a, b, c').build();
    expect(raceSetting).toBeInstanceOf(RaceSetting);
  });

  it('입력으로 받은 3개의 자동차 이름 문자열을 길이 3의 배열로 변환한다.', () => {
    const raceSetting = RaceSetting.builder().nameOfParticipants('a, b, c').build();
    expect(raceSetting.cars.cars.length).toEqual(3);
  });

  it('입력으로 받은 자동차 이름들 중에 빈 문자열은 배열에 넣지 않는다.', () => {
    const raceSetting = RaceSetting.builder().nameOfParticipants(',a,,, b,, c,').build();
    expect(raceSetting.cars.cars.length).toEqual(3);
  });

  it('입력으로 받은 자동차 이름의 갯수가 0개이면 예외가 발생한다.', () => {
    const errorProneFunc = () => RaceSetting.builder().nameOfParticipants('').build();
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'InvalidNameOfParticipantsError'}));
  });

  it('입력으로 받은 자동차 이름의 갯수가 범위를 초과하면 예외가 발생한다.', () => {
    const errorProneFunc = () => RaceSetting.builder().nameOfParticipants('a,a,a,a,a,a,a,a,a,a,a,a,a').build();
    expect(errorProneFunc).toThrow(expect.objectContaining({ name: 'CarsLongerThanMaxError'}));
  });
});