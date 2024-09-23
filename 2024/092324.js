// The Office II - Boredom Score - 7kyu

function boredom(staff){
  const scores = {"accounts": 1, "finance": 2, "canteen": 10, "regulation": 3, "trading": 6, "change": 6, "IS": 8, "retail": 5, "cleaning": 4, "pissing about": 25 };
  let staffScore = Object.values(staff).reduce((acc, cur) => acc+scores[cur], 0);
  return staffScore <= 80 ? "kill me now" : staffScore < 100 ? "i can handle this" : "party time!!";
}
