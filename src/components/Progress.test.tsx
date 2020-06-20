import * as React from 'preact';
import Progress from "./Progress"
import Car from "../domain/Car"

describe('Progress 컴포넌트', () => {
  it('각 자동차의 이동한 거리를 출력한다.', () => {
    const cars = [new Car('car1'), new Car('car2')];
    cars[0].go();
    cars[1].go();
    cars[1].go();
    const expectedRender = (
      <div>
        <div>
          <span>{ 'car1' }</span>
          <span>: { '-' }</span>
        </div>
        <div>
          <span>{ 'car2' }</span>
          <span>: { '--' }</span>
        </div>
      </div>
    )
    expect(Progress({ cars: cars })).toStrictEqual(expectedRender);
  })
});