class CountLotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  matchCount(other) {
    const count = other.filter((number) => this.contains(number)).length;
    return count;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default CountLotto;
