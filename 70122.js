//Correct the mistakes of the character recoginition software - 8kyu
//5 --> S
//0 --> O
//1 --> I

function correct(string) {
	let result = string.replace(/5/g, 'S');
  result = result.replace(/0/g, 'O');
  result = result.replace(/1/g, 'I');
  return result;
}
