import Race from "./Race";
import RaceSetting from "./RaceSetting";

describe('Race 클래스', () => {
  const raceSetting = RaceSetting.builder().nameOfParticipants('a, b, c').movingCount(3).build();

  it('객체를 생성한다.', () => {
    const race = new Race(raceSetting);
    expect(race).toBeInstanceOf(Race);
  });
});