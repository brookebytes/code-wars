//Sum of a sequence - 7kyu

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (i=begin; i<=end; i+=step) {
    sum += i;
  }
  return sum;
};
