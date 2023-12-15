const errorMessage = Object.freeze({
  NOT_NULL: "[ERROR] 필수로 입력해주세요.\n",
  ONLY_NUMBER: "[ERROR] 숫자를 입력해주세요.\n",
  MONEY_NUMBER: "[ERROR] 1000원 단위로 입력해주세요.\n",
  SIX_LENGTH: "[ERROR] 숫자 6개를 입력해주세요.\n",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n",
  NOT_DUPLICATE: "[ERROR] 당첨 번호는 중복될 수 없습니다.\n",
  INVALIDATE_BONUS: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.\n",
});
export default errorMessage;
