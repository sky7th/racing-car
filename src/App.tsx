import * as React from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
  const [nameOfParticipants, setNameOfParticipants] = useState('')
  const [moveCount, setMoveCount] = useState(0)

  const handleChangeNameOfParticipants = (e) => setNameOfParticipants(e.target.value)
  const handleChangeMoveCount = (e) => setMoveCount(e.target.value)

  return (
    <div>
      <div>
        <label for="carNames">
        경주할 자동차 이름을 입력하세요 (이름은 (,)를 기준으로 구분)
        </label>
        <input id="carNames" type="text"
          value={ nameOfParticipants } onKeyDown={ handleChangeNameOfParticipants }></input>
      </div>
      <div>
        <label htmlFor="count">시도할 횟수는 몇 회인가요 ?</label>
        <input id="count" type="text" 
          value={ moveCount } onChange={ handleChangeMoveCount }></input>
      </div>
      <button type="submit">시작</button>
    </div>
  );
}

export default App;