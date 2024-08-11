// Find the next perfect square! - 7kyu

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1) : -1;
}
