import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const InputView = {
  async readMoney() {
    const input = await Console.readLineAsync(gameMessage.INPUT.MONEY);
    return input;
  },
  async readWinningNumber() {
    const input = await Console.readLineAsync(gameMessage.INPUT.WINNING_NUMBER);
    return input;
  },
  async readBonusNumber() {
    const input = await Console.readLineAsync(gameMessage.INPUT.BONUS_NUMBER);
    return input;
  },
};

export default InputView;
