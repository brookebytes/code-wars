//Naughty or Nice - 7kyu

function naughtyOrNice(data) {
  let months = Object.values(data);
  let niceCount = 0;
  let naughtyCount = 0;
  for (const month in data) {
    for (const day in data[month]) {
      data[month][day] == "Nice" ? niceCount++ : naughtyCount++;
    }
  }
  return niceCount >= naughtyCount ? "Nice!" : "Naughty!";
}
