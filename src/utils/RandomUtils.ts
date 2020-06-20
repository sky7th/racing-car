export default class RandomUtils {
  static getTrueOrFalse() {
    return Math.floor( Math.random() * 2) === 1;
  }
}