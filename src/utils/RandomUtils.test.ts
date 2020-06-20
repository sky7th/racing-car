import RandomUtils from "./RandomUtils";

describe('RandomUtils 클래스', () => {
  it('True와 False 중에 랜덤으로 값을 얻는다.', () => {
    const randomBoolean = RandomUtils.getTrueOrFalse();
    expect(randomBoolean).toBeInstanceOf(Boolean);
  })
})
