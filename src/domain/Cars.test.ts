import Cars from "./Cars";

describe('Car 클래스', () => {
  it('객체를 생성한다.', () => {
    const cars = new Cars(['람보르기니', 'BMW', '모닝']);
    expect(cars).toBeInstanceOf(Cars);
  });
});