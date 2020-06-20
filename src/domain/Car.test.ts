import Car from "./Car";

describe('Car 클래스', () => {
  it('객체를 생성한다.', () => {
    const car = new Car('람보르기니');
    expect(car).toBeInstanceOf(Car);
  });

  it('자동차가 앞으로 한 칸 간다.', () => {
    const car = new Car('람보르기니');
    car.goForward();
  });
});