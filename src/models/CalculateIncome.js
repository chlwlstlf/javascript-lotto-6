const CalculateIncome = (result) => {
  let income = 0;
  Object.entries(result).forEach(([key, value]) => {
    income += parseInt(value.reward.replace(/,/g, "")) * value.count;
  });
  return income;
};

export default CalculateIncome;
