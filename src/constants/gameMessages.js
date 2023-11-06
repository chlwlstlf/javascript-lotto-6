const gameMessage = Object.freeze({
  INPUT: {
    MONEY: '구입금액을 입력해 주세요.\n',
    WINNING: '\n당첨 번호를 입력해 주세요.',
    BONUS: '\n보너스 번호를 입력해 주세요.',
  },

  OUTPUT: {
    QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
    RESULT_TEXT: '당첨 통계\n---',
    RESULT: (match, reward, quantity) =>
      `${match} (${reward}원) - ${quantity}개`,
    INCOME: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
});
export default gameMessage;
