import * as React from 'preact';
import Car from '../domain/Car';

const Progress = (props: { cars: Car[] }) => {
  const DISTANCE_SYMBOL: string = '-';

  return (
    <div>
      {props.cars.map(car => (
        <div>
          <span>{car.name}</span>
          <span>: { DISTANCE_SYMBOL.repeat(car.position) }</span>
        </div>
      ))}
    </div>
  )
}

export default Progress;