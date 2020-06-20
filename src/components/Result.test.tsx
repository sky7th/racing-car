import * as React from 'preact';
import Result from './Result';

describe('Result 컴포넌트', () => {
  it('우승자가 여러명일 때, 이름들을 출력한다.', () => {
    const winnerNames = ['winner1', 'winner2'];
    const expectedRender = (
      <div>
        <div>{ 'winner1 님이 공동 우승했습니다 ~!' }</div>
        <div>{ 'winner2 님이 공동 우승했습니다 ~!' }</div>
      </div>
    )
    expect(Result({ winnerNames: winnerNames })).toStrictEqual(expectedRender);
  })
});