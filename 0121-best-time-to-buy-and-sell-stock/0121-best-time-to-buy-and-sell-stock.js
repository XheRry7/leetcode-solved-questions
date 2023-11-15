/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
  let currentProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const difference = prices[i] - prices[i - 1];
    currentProfit = Math.max(currentProfit + difference, 0);
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
}