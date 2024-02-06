//Offspring Traits - 7kyu

const bearFur = (bears) => {
  const colors = ["black", "brown", "white"];
  if (bears.every(bear => colors.includes(bear))) {
    bears.sort();
    if (bears[0]==bears[1]) {
      return bears[0];
    } else if (bears[0] == "black") {
        return bears[1]=="brown" ? "dark brown" : "grey";
    } else {
      return "light brown";
    }
  }
  return "unknown";
};
