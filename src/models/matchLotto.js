const MatchLotto = {
  result(result, matchCount, isBonusMatch) {
    if (matchCount >= 3) {
      const key = matchCount === 5 && isBonusMatch ? "5B" : matchCount;
      result[key].count += 1;
    }
    return result;
  },
};

export default MatchLotto;
