import * as React from 'preact';
import { useState } from 'preact/hooks';
import Race from './domain/Race';
import CarsLongerThanMaxError from './error/CarsLongerThanMaxError';

const App = () => {
  const [nameOfParticipants, setNameOfParticipants] = useState('');
  const [moveCount, setMoveCount] = useState(0);

  const handleChangeNameOfParticipants = (e) => setNameOfParticipants(e.target.value);
  const handleChangeMoveCount = (e) => setMoveCount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const race = Race.builder()
        .nameOfParticipants(nameOfParticipants)
        .movingCount(moveCount)
        .build();
    } catch(err) {
      console.log(err);
      
    }
  }

  return (
    <div>
      <div>
        <label for="carNames">
        경주할 자동차 이름을 입력하세요 (이름은 (,)를 기준으로 구분)
        </label>
        <input id="carNames" type="text"
          value={ nameOfParticipants } onChange={ handleChangeNameOfParticipants }></input>
      </div>
      <div>
        <label htmlFor="count">시도할 횟수는 몇 회인가요 ?</label>
        <input id="count" type="text" 
          value={ moveCount } onChange={ handleChangeMoveCount }></input>
      </div>
      <button type="submit" onClick={ handleSubmit }>시작</button>
    </div>
  );
}

export default App;