import * as React from 'preact';
import { useState } from 'preact/hooks';
import RaceSetting from './domain/RaceSetting';
import Race from './domain/Race';
import Car from './domain/Car';
import RaceResult from './domain/RaceResult';
import Result from './components/Result';
import Progress from './components/Progress';

const App = () => {
  const [nameOfParticipants, setNameOfParticipants] = useState('');
  const [moveCount, setMoveCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [winnerNames, setWinnerNames] = useState(new Array());
  const [cars, setCars] = useState(new Array());
  const [isExecuting, setIsExecuting] = useState(false);

  const handleChangeNameOfParticipants = (e) => setNameOfParticipants(e.target.value);
  const handleChangeMoveCount = (e) => setMoveCount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsExecuting(true);

    try {
      startRace();
    } catch(err) {
      setError(err.message);
    } finally {
      setIsExecuting(false);
    }
  }

  const setError = (errorMessage: string): void => {
    setErrorMessage(errorMessage);
    setIsError(true);
  }

  const startRace = async () => {
    const raceSetting = RaceSetting.builder()
      .nameOfParticipants(nameOfParticipants)
      .movingCount(moveCount)
      .build();
    const race = new Race(raceSetting);
    while (!race.isComplete()) {
      race.move();
      setCars([...race.cars.cars]);
      await wait(300);
    }
    chooseWinners(race);
  }

  const wait = (delay: number) => new Promise(resolve => setTimeout(resolve, 300));

  const chooseWinners = (race: Race): void => {
    const leadingCars: Car[] = race.cars.getLeadingCars();
    const raceResult = new RaceResult(leadingCars);
    const winnerNames: string[] = raceResult.getWinnerCarNames();
    setWinnerNames(winnerNames);
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
      { !isExecuting && (
        <button type="submit" onClick={ handleSubmit }>시작</button>
      )}
      { isError && (
        <div id="errorMessage" style={{ color: 'red' }}>
          { errorMessage }
        </div>
      )}
      <Progress cars={ cars }/>
      <Result winnerNames={ winnerNames }/>
    </div>
  );
}

export default App;