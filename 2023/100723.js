//Tip Calculator - 8kyu
//

function calculateTip(amount, rating) {
  const tips = { "terrible": "0", "poor": 0.05, "good": 0.1, "great": 0.15, "excellent": 0.2 };
  return tips[rating.toLowerCase()] ? Math.ceil( amount * Number(tips[rating.toLowerCase()]) ) : "Rating not recognised";
}
