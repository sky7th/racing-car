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

  it('가장 선두에 있는 자동차의 위치는 (시도 횟수 * 한 번에 갈 수 있는 거리)와 같거나 보다 작아야 한다.', () => {
    const cars = new Cars(['람보르기니', 'BMW', '모닝']);
    const moveCount = 5;
    for (let i = 0; i < moveCount; i++) {
      cars.move();
    }
    const positionOfLeadingCar: number = cars.getPositionOfLeadingCar();
    expect(positionOfLeadingCar).toBeLessThanOrEqual(moveCount * Car.DEFAULT_GO_DISTANCE);
  });

  it('가장 선두에 있는 자동차는 1대 이상이다.', () => {
    const cars = new Cars(['람보르기니', 'BMW', '모닝']);
    cars.move();
    const leadingCars: Car[] = cars.getLeadingCars();
    expect(leadingCars.length).toBeGreaterThanOrEqual(1);
  });
});