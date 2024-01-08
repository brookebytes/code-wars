//Averages of numbers - 7kyu

function averages(numbers) {
  if (!numbers || numbers.length<=1) {
    return [];
  }
  return numbers.map((num, index) => index+1<numbers.length ? (num+numbers[index+1])/2 : 0).slice(0,numbers.length-1);
}
