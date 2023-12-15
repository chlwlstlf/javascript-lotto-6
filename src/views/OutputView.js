import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const OutputView = {
  quantity(value) {
    Console.print(gameMessage.OUTPUT.QUANTITY(value));
  },

  random(value) {
    Console.print(gameMessage.OUTPUT.RANDOM(value));
  },

  resultTitle() {
    Console.print(gameMessage.OUTPUT.RESULT_TITLE);
  },

  result(match, price, count) {
    Console.print(gameMessage.OUTPUT.RESULT(match, price, count));
  },

  income(rate) {
    Console.print(gameMessage.OUTPUT.INCOME(rate));
  },
};

export default OutputView;
