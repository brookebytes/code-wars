// Some (but not all) - 7kyu

const someButNotAll = (seq,pred) => {
  let arr = Array.from(seq);
  return arr.some(e => pred(e)) && !arr.every(e => pred(e));
}
