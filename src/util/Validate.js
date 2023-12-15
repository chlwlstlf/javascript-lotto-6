import constant from "../constants/constant.js";
import errorMessage from "../constants/errorMessage.js";

const Validate = {
  money(input) {
    this.notNull(input);
    this.onlyNumber(input);
    this.moneyNumber(input);
  },

  winningNumber(input) {
    this.notNull(input);
    const splitedValue = input.split(",").map((value) => value.trim());
    this.sixLength(splitedValue);
    splitedValue.forEach((value) => {
      this.onlyNumber(value);
      this.outOfRange(value);
    });
    this.notDuplicate(splitedValue);
  },

  bonusNumber(input, winning) {
    this.notNull(input);
    this.onlyNumber(input);
    this.outOfRange(input);
    this.invalidateBonus(input, winning);
  },

  notNull(input) {
    if (!input.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  onlyNumber(input) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(input) || Number(input) < 1) {
      throw new Error(errorMessage.ONLY_NUMBER);
    }
  },

  moneyNumber(input) {
    if (input % 1000 !== 0) {
      throw new Error(errorMessage.MONEY_NUMBER);
    }
  },

  sixLength(input) {
    if (input.length !== constant.COUNT) {
      throw new Error(errorMessage.SIX_LENGTH);
    }
  },

  outOfRange(input) {
    if (Number(input) < constant.MINIMUM || Number(input) > constant.MAXIMUM) {
      throw new Error(errorMessage.OUT_OF_RANGE);
    }
  },

  notDuplicate(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  },

  invalidateBonus(input, numbers) {
    if (numbers.includes(input)) {
      throw new Error(errorMessage.INVALIDATE_BONUS);
    }
  },
};

export default Validate;
