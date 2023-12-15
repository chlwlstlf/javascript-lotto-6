import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Validate from "../util/Validate.js";

export default class InputController {
  async inputMoney() {
    while (true) {
      const input = await InputView.readMoney();
      try {
        Validate.money(input);
        return Number(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  async inputWinningNumber() {
    while (true) {
      const input = await InputView.readWinningNumber();
      try {
        Validate.winningNumber(input);
        return input.split(",").map((value) => Number(value.trim()));
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  async inputBonusNumber(winning) {
    while (true) {
      const input = await InputView.readBonusNumber();
      try {
        Validate.bonusNumber(input, winning);
        return Number(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
