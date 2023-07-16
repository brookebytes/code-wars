//Who ate the cookie? - 8kyu

function cookie(x){
  if (typeof x == 'number') {
    return "Who ate the last cookie? It was Monica!"
  }
  return typeof x == 'string' ? "Who ate the last cookie? It was Zach!" : "Who ate the last cookie? It was the dog!"
}
