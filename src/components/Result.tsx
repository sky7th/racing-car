import * as React from 'preact';

const Result = ({ winnerNames }: { winnerNames: string[] }) => {
  const RESULT_MESSAGE = winnerNames.length === 1 ? ' 님이 우승했습니다 ~!' : ' 님이 공동 우승했습니다 ~!';

  return (
    <div>
      {winnerNames.map(name => (
        <div>{name + RESULT_MESSAGE}</div>
      ))}
    </div>
  )
}

export default Result;