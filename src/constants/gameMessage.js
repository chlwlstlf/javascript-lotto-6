import constant from "./constant.js";

const gameMessage = Object.freeze({
  INPUT: {
    MONEY: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  },

  OUTPUT: {
    QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
    RANDOM: (numbers) => `[${numbers.join(", ")}]`,
    RESULT_TITLE: "\n당첨 통계\n---",
    RESULT: (match, price, count) => `${match} (${price}원) - ${count}개`,
    INCOME: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
});
export default gameMessage;
