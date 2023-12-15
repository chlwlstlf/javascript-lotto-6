import { Console } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView.js";
import InputController from "./InputController.js";
import { CreateRandom } from "../models/createRandom.js";
import CountLotto from "../models/CountLotto.js";
import MatchLotto from "../models/matchLotto.js";
import CalculateIncome from "../models/CalculateIncome.js";

export default class MainController {
  #money;
  #quantity;
  #randoms = [];
  #winning;
  #bonus;
  #result = {
    3: { match: "3개 일치", reward: "5,000", count: 0 },
    4: { match: "4개 일치", reward: "50,000", count: 0 },
    5: { match: "5개 일치", reward: "1,500,000", count: 0 },
    "5B": {
      match: "5개 일치, 보너스 볼 일치",
      reward: "30,000,000",
      count: 0,
    },
    6: { match: "6개 일치", reward: "2,000,000,000", count: 0 },
  };

  async start() {
    await this.purchaseMoney();
    await this.userLotto();
    await this.inputNumber();
    await this.winningStatistics();
    await this.income();
  }

  async purchaseMoney() {
    this.#money = await new InputController().inputMoney();
    this.#quantity = this.#money / 1000;
    OutputView.quantity(this.#quantity);
  }

  async userLotto() {
    for (let i = 0; i < this.#quantity; i++) {
      const number = new CreateRandom().randomNumbers;
      this.#randoms.push(number);
      OutputView.random(number);
    }
  }

  async inputNumber() {
    const inputController = new InputController();
    this.#winning = await inputController.inputWinningNumber();
    this.#bonus = await inputController.inputBonusNumber(this.#winning);
  }

  async winningStatistics() {
    OutputView.resultTitle();
    this.#randoms.forEach((random) => {
      const countLotto = new CountLotto(random);
      const matchCount = countLotto.matchCount(this.#winning);
      const isBonusMatch = countLotto.contains(this.#bonus);
      this.#result = MatchLotto.result(this.#result, matchCount, isBonusMatch);
    });
    Object.entries(this.#result).forEach(([key, value]) => {
      OutputView.result(value.match, value.reward, value.count);
    });
  }

  async income() {
    const totalIncome = CalculateIncome(this.#result);
    const incomeRate = ((totalIncome / this.#money) * 100).toFixed(1);
    OutputView.income(incomeRate);
  }
}
