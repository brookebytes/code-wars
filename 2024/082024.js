// Grader - 8kyu

function grader(score) {
  if (score < 0.6 || score > 1) {
    return "F";
  } else if (score < 0.7) {
    return "D";
  } else if (score < 0.8) {
    return "C";
  } else if (score < 0.9) {
    return "B"
  } else {
    return "A";
  }
}
