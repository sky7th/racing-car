import Cars from "./Cars";
import Car from "./Car";

describe('Car 클래스', () => {
  it('객체를 생성한다.', () => {
    const cars = new Cars(['람보르기니', 'BMW', '모닝']);
    expect(cars).toBeInstanceOf(Cars);
  });

  it('모든 자동차를 1회 움직이라고 명령한다.', () => {
    const cars = new Cars(['람보르기니', 'BMW', '모닝']);
    cars.move();
  });
});