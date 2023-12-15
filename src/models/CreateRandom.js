import { Random } from "@woowacourse/mission-utils";
import constant from "../constants/constant.js";

export class CreateRandom {
  constructor() {
    const numbers = Random.pickUniqueNumbersInRange(constant.MINIMUM, constant.MAXIMUM, constant.COUNT);
    this.randomNumbers = numbers.sort((a, b) => a - b);
  }
}
