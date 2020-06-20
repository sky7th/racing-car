import Race from "./Race";
import RaceSetting from "./RaceSetting";

describe('Race 클래스', () => {
  const raceSetting = RaceSetting.builder().nameOfParticipants('a, b, c').movingCount(3).build();

  it('객체를 생성한다.', () => {
    const race = new Race(raceSetting);
    expect(race).toBeInstanceOf(Race);
  });

  it('시도 횟수가 0이 되면 경주가 끝난다.', () => {
    const race = new Race(raceSetting);
    const moveCount = 3;
    for (let i = 0; i < moveCount; i++) {
      race.move();
    }
    expect(race.isComplete()).toEqual(true);
  });
});