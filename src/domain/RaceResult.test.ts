import Cars from "./Cars";
import RaceResult from "./RaceResult";
import Car from "./Car";

describe('RaceResult 클래스', () => {
  const raceResult = new RaceResult([new Car('winner1'), new Car('winner2')]);

  it('객체를 생성한다.', () => {
    expect(raceResult).toBeInstanceOf(RaceResult);
  });

  it('우승 Car들의 이름 배열을 얻는다.', () => {
    expect(raceResult.getWinnerCarNames()).toEqual(['winner1', 'winner2']);
  });
});